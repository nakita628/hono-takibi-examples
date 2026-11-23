type AccountType = 'prime' | 'business' | 'cdp'
type AccountId = string
type Owner = string
type AccountName = string
type Account = {
  accountId: AccountId
  type: AccountType
  owner: Owner
  name?: AccountName | undefined
  createdAt: string
  updatedAt: string
}
type ErrorType =
  | 'already_exists'
  | 'authorization_expired'
  | 'bad_gateway'
  | 'capture_expired'
  | 'client_closed_request'
  | 'customer_not_authorized'
  | 'endpoint_unavailable'
  | 'faucet_limit_exceeded'
  | 'forbidden'
  | 'idempotency_error'
  | 'incompatible_event_types'
  | 'internal_server_error'
  | 'invalid_request'
  | 'invalid_webhook_headers'
  | 'invalid_webhook_url'
  | 'invalid_sql_query'
  | 'invalid_signature'
  | 'malformed_transaction'
  | 'not_found'
  | 'operation_in_progress'
  | 'payment_method_required'
  | 'payment_required'
  | 'settlement_failed'
  | 'rate_limit_exceeded'
  | 'request_canceled'
  | 'service_unavailable'
  | 'subscription_limit_exceeded'
  | 'timed_out'
  | 'unauthorized'
  | 'unsupported_tos_language'
  | 'policy_violation'
  | 'policy_in_use'
  | 'account_limit_exceeded'
  | 'network_not_tradable'
  | 'guest_permission_denied'
  | 'guest_region_forbidden'
  | 'guest_transaction_limit'
  | 'guest_transaction_count'
  | 'phone_number_verification_expired'
  | 'otp_verification_code_invalid'
  | 'otp_verification_destination_mismatch'
  | 'otp_verification_expired'
  | 'otp_verification_invalid'
  | 'otp_verification_not_found'
  | 'otp_verification_required'
  | 'document_verification_failed'
  | 'recipient_allowlist_violation'
  | 'recipient_allowlist_pending'
  | 'refund_expired'
  | 'travel_rules_recipient_violation'
  | 'source_account_invalid'
  | 'target_account_invalid'
  | 'source_account_not_found'
  | 'target_account_not_found'
  | 'source_asset_not_supported'
  | 'target_asset_not_supported'
  | 'target_email_invalid'
  | 'target_onchain_address_invalid'
  | 'transfer_amount_invalid'
  | 'transfer_asset_not_supported'
  | 'transfer_quote_expired'
  | 'insufficient_balance'
  | 'metadata_too_many_entries'
  | 'metadata_key_too_long'
  | 'metadata_value_too_long'
  | 'travel_rules_field_missing'
  | 'asset_mismatch'
  | 'mfa_already_enrolled'
  | 'mfa_invalid_code'
  | 'mfa_challenge_not_found'
  | 'mfa_flow_expired'
  | 'mfa_required'
  | 'mfa_not_enrolled'
  | 'order_quote_expired'
  | 'order_already_filled'
  | 'order_already_canceled'
  | 'account_not_ready'
  | 'insufficient_liquidity'
  | 'insufficient_allowance'
  | 'transaction_simulation_failed'
  | 'delegation_not_found'
  | 'delegation_expired'
  | 'delegation_revoked'
  | 'delegation_not_authorized'
  | 'delegation_not_enabled'
  | 'network_mismatch'
  | 'already_enabled'
  | 'payment_session_already_canceled'
  | 'payment_session_already_authorized'
  | 'payment_session_action_pending'
  | 'no_capturable_balance'
  | 'no_voidable_balance'
  | 'no_refundable_balance'
  | 'entity_not_configured_for_payment_acceptance'
  | 'entity_not_configured_for_top_up'
  | 'daily_transaction_limit_exceeded'
  | 'daily_amount_limit_exceeded'
  | 'stale_attestation'
  | 'moderation_rejected'
  | 'mandate_action_pending'
  | 'mandate_policy_violation'
  | 'mandate_expired'
  | 'mandate_canceled'
  | 'mandate_revoked'
  | 'mandate_invalid_status'
type CapabilityName =
  | 'custodyCrypto'
  | 'custodyFiat'
  | 'custodyStablecoin'
  | 'tradeCrypto'
  | 'tradeStablecoin'
  | 'transferCrypto'
  | 'transferFiat'
  | 'transferStablecoin'
type Error = {
  errorType: ErrorType
  errorMessage: string
  correlationId?: string | undefined
  errorLink?: {} | undefined
  unauthorizedCapabilities?: CapabilityName[] | undefined
}
type Compliance = { requesterIpAddress?: string | undefined }
type CreateAccountRequest = {
  owner?: {} | undefined
  name?: AccountName | undefined
  compliance?: Compliance | undefined
}
type Asset = string
type AssetType = 'fiat' | 'crypto'
type BalancesAsset = { symbol: Asset; type: AssetType; name: string; decimals: number }
type AmountDetail = { available: string; total: string }
type Balance = { asset: BalancesAsset; amount: { [x: string]: AmountDetail } }
type ProjectId = string
type TosAcceptance = { versionId: {}; language: string; acceptedAt: string }
type UsW9Attestation = {
  form: 'us_w9'
  edeliveryConsent: boolean
  acceptedAt: string
  isExemptBackupWithholding: boolean
}
type TaxAttestation = UsW9Attestation
type CreateCustomerRequest = {
  type?: {} | undefined
  capabilities?:
    | {
        custodyCrypto?: { requested: boolean } | undefined
        custodyFiat?: { requested: boolean } | undefined
        custodyStablecoin?: { requested: boolean } | undefined
        tradeCrypto?: { requested: boolean } | undefined
        tradeStablecoin?: { requested: boolean } | undefined
        transferCrypto?: { requested: boolean } | undefined
        transferFiat?: { requested: boolean } | undefined
        transferStablecoin?: { requested: boolean } | undefined
      }
    | undefined
  individual?:
    | {
        firstName?: string | undefined
        lastName?: string | undefined
        address?:
          | {
              line1?: string | undefined
              line2?: string | undefined
              city?: string | undefined
              state?: string | undefined
              postCode?: string | undefined
              countryCode?: 'US' | undefined
            }
          | undefined
        ssnLast4?: string | undefined
        dateOfBirth?:
          | { day?: string | undefined; month?: string | undefined; year?: string | undefined }
          | undefined
        fullSsn?: string | undefined
        citizenship?: {} | undefined
        email?: {} | undefined
        phoneNumber?: {} | undefined
        purposeOfAccount?:
          | 'investing'
          | 'long_term_investment'
          | 'short_term_investment'
          | 'trading'
          | 'trading_on_coinbase'
          | 'trading_on_other_exchanges'
          | 'day_trading'
          | 'arbitrage_trading'
          | 'online_purchases'
          | 'online_payments'
          | 'payments_or_gifts'
          | 'payments_to_friends'
          | 'transfer_crypto'
          | 'investing_on_other_exchanges'
          | 'business'
          | 'other'
          | undefined
        sourceOfFunds?:
          | 'salary'
          | 'employment_business_income'
          | 'investments'
          | 'savings'
          | 'pension'
          | 'business_earnings'
          | 'crypto_assets'
          | 'inheritance'
          | 'sale_of_assets'
          | 'sale_of_company_shares_or_dividends'
          | 'sale_of_property'
          | 'sale_of_other_assets'
          | 'credit_or_loan'
          | 'government_benefits_or_credits'
          | 'legal_settlement'
          | 'family_or_third_party'
          | 'lottery_or_gambling'
          | 'crypto_mining'
          | 'other'
          | undefined
        employmentStatus?:
          | 'employed_fulltime'
          | 'employed_parttime'
          | 'self_employed'
          | 'employed_government_official'
          | 'employed_company_officer_or_board_member'
          | 'employed_crypto_related_business'
          | 'personal_trader_or_angel_investor'
          | 'crypto_miner'
          | 'student'
          | 'retired'
          | 'homemaker'
          | 'unemployed'
          | 'dependent'
          | undefined
        occupation?:
          | 'agriculture'
          | 'arts_and_media'
          | 'casinos_and_gaming'
          | 'construction'
          | 'cryptocurrency'
          | 'defense'
          | 'education'
          | 'energy_oil_and_gas'
          | 'energy_other'
          | 'entertainment'
          | 'finance'
          | 'financial_services_non_crypto'
          | 'fintech_non_crypto_software_development'
          | 'fintech_non_crypto_internet_only_financial_institution'
          | 'fintech_non_crypto_other'
          | 'food_and_hospitality'
          | 'government'
          | 'health_and_fitness'
          | 'healthcare'
          | 'healthcare_other'
          | 'healthcare_pharmaceuticals'
          | 'mining'
          | 'mining_crypto'
          | 'non_profit_and_charity'
          | 'pharma_industry'
          | 'politics'
          | 'professional_services'
          | 'property_and_construction_building_work'
          | 'property_and_construction_commercial_and_management'
          | 'property_and_construction_design'
          | 'real_estate'
          | 'retail_fashion'
          | 'retail_food_and_beverage'
          | 'retail_jewelry_and_antiques'
          | 'retail_other'
          | 'retail_pharmacy'
          | 'technology'
          | 'technology_and_it'
          | 'transportation'
          | 'all_other_industries_and_services'
          | 'dependent_student_unemployed'
          | 'other'
          | undefined
        expectedVolume?:
          | 'under_1k'
          | '1k_to_10k'
          | '10k_to_100k'
          | '100k_to_250k'
          | '250k_to_750k'
          | '750k_to_1_5m'
          | '1_5m_plus'
          | undefined
      }
    | undefined
  projectIds?: ProjectId[] | undefined
  tosAcceptances?: TosAcceptance[] | undefined
  taxAttestations?: TaxAttestation[] | undefined
  compliance?: Compliance | undefined
}
type CustomerId = string
type CustomerType = 'individual'
type Individual = {
  firstName?: string | undefined
  lastName?: string | undefined
  email?: {} | undefined
}
type Customer = {
  customerId: CustomerId
  type: CustomerType
  capabilities: {
    custodyCrypto?: { requested: boolean; status: {} } | undefined
    custodyFiat?: { requested: boolean; status: {} } | undefined
    custodyStablecoin?: { requested: boolean; status: {} } | undefined
    tradeCrypto?: { requested: boolean; status: {} } | undefined
    tradeStablecoin?: { requested: boolean; status: {} } | undefined
    transferCrypto?: { requested: boolean; status: {} } | undefined
    transferFiat?: { requested: boolean; status: {} } | undefined
    transferStablecoin?: { requested: boolean; status: {} } | undefined
  }
  requirements: {}
  createdAt?: string | undefined
  updatedAt?: string | undefined
  individual?: Individual | undefined
  projectIds?: ProjectId[] | undefined
  tosAcceptances?: TosAcceptance[] | undefined
}
type CountryCode = string
type RequirementStatus = 'due' | 'past_due' | 'pending' | 'rejected'
type TermsOfService = { versionId: {}; deadline?: string | undefined; languages: string[]; url: {} }
type TaxForm = 'us_w9'
type Requirement = {
  status: RequirementStatus
  deadline?: string | undefined
  impact?: CapabilityName[] | undefined
  tosVersions?: TermsOfService[] | undefined
  taxForms?: TaxForm[] | undefined
}
type RequirementsMap = { [x: string]: Requirement }
type UpdateCustomerRequest = {
  type?: {} | undefined
  capabilities?:
    | {
        custodyCrypto?: { requested: boolean } | undefined
        custodyFiat?: { requested: boolean } | undefined
        custodyStablecoin?: { requested: boolean } | undefined
        tradeCrypto?: { requested: boolean } | undefined
        tradeStablecoin?: { requested: boolean } | undefined
        transferCrypto?: { requested: boolean } | undefined
        transferFiat?: { requested: boolean } | undefined
        transferStablecoin?: { requested: boolean } | undefined
      }
    | undefined
  individual?:
    | {
        firstName?: string | undefined
        lastName?: string | undefined
        address?:
          | {
              line1?: string | undefined
              line2?: string | undefined
              city?: string | undefined
              state?: string | undefined
              postCode?: string | undefined
              countryCode?: 'US' | undefined
            }
          | undefined
        ssnLast4?: string | undefined
        dateOfBirth?:
          | { day?: string | undefined; month?: string | undefined; year?: string | undefined }
          | undefined
        fullSsn?: string | undefined
        citizenship?: {} | undefined
        email?: {} | undefined
        phoneNumber?: {} | undefined
        purposeOfAccount?:
          | 'investing'
          | 'long_term_investment'
          | 'short_term_investment'
          | 'trading'
          | 'trading_on_coinbase'
          | 'trading_on_other_exchanges'
          | 'day_trading'
          | 'arbitrage_trading'
          | 'online_purchases'
          | 'online_payments'
          | 'payments_or_gifts'
          | 'payments_to_friends'
          | 'transfer_crypto'
          | 'investing_on_other_exchanges'
          | 'business'
          | 'other'
          | undefined
        sourceOfFunds?:
          | 'salary'
          | 'employment_business_income'
          | 'investments'
          | 'savings'
          | 'pension'
          | 'business_earnings'
          | 'crypto_assets'
          | 'inheritance'
          | 'sale_of_assets'
          | 'sale_of_company_shares_or_dividends'
          | 'sale_of_property'
          | 'sale_of_other_assets'
          | 'credit_or_loan'
          | 'government_benefits_or_credits'
          | 'legal_settlement'
          | 'family_or_third_party'
          | 'lottery_or_gambling'
          | 'crypto_mining'
          | 'other'
          | undefined
        employmentStatus?:
          | 'employed_fulltime'
          | 'employed_parttime'
          | 'self_employed'
          | 'employed_government_official'
          | 'employed_company_officer_or_board_member'
          | 'employed_crypto_related_business'
          | 'personal_trader_or_angel_investor'
          | 'crypto_miner'
          | 'student'
          | 'retired'
          | 'homemaker'
          | 'unemployed'
          | 'dependent'
          | undefined
        occupation?:
          | 'agriculture'
          | 'arts_and_media'
          | 'casinos_and_gaming'
          | 'construction'
          | 'cryptocurrency'
          | 'defense'
          | 'education'
          | 'energy_oil_and_gas'
          | 'energy_other'
          | 'entertainment'
          | 'finance'
          | 'financial_services_non_crypto'
          | 'fintech_non_crypto_software_development'
          | 'fintech_non_crypto_internet_only_financial_institution'
          | 'fintech_non_crypto_other'
          | 'food_and_hospitality'
          | 'government'
          | 'health_and_fitness'
          | 'healthcare'
          | 'healthcare_other'
          | 'healthcare_pharmaceuticals'
          | 'mining'
          | 'mining_crypto'
          | 'non_profit_and_charity'
          | 'pharma_industry'
          | 'politics'
          | 'professional_services'
          | 'property_and_construction_building_work'
          | 'property_and_construction_commercial_and_management'
          | 'property_and_construction_design'
          | 'real_estate'
          | 'retail_fashion'
          | 'retail_food_and_beverage'
          | 'retail_jewelry_and_antiques'
          | 'retail_other'
          | 'retail_pharmacy'
          | 'technology'
          | 'technology_and_it'
          | 'transportation'
          | 'all_other_industries_and_services'
          | 'dependent_student_unemployed'
          | 'other'
          | undefined
        expectedVolume?:
          | 'under_1k'
          | '1k_to_10k'
          | '10k_to_100k'
          | '100k_to_250k'
          | '250k_to_750k'
          | '750k_to_1_5m'
          | '1_5m_plus'
          | undefined
      }
    | undefined
  projectIds?: ProjectId[] | undefined
  tosAcceptances?: TosAcceptance[] | undefined
  taxAttestations?: TaxAttestation[] | undefined
  compliance?: Compliance | undefined
}
type DepositDestinationType = 'crypto' | 'fiat'
type DepositDestinationStatus = 'active' | 'inactive' | 'pending'
type DepositDestinationId = string
type PaymentNetwork =
  | 'base'
  | 'ethereum'
  | 'solana'
  | 'arbitrum'
  | 'optimism'
  | 'monad'
  | 'sui'
  | 'avacchain'
  | 'tempo'
type BlockchainAddress = string
type DepositDestinationTargetAccount = { accountId?: {} | undefined; asset: {} }
type DepositDestinationTargetOnchainAddress = {
  address: {}
  network: PaymentNetwork
  destinationTag?: string | undefined
  asset: {}
}
type DepositDestinationTarget =
  | DepositDestinationTargetAccount
  | DepositDestinationTargetOnchainAddress
type Metadata = { [x: string]: string }
type CryptoDepositDestination = {
  depositDestinationId: DepositDestinationId
  accountId: AccountId
  type: 'crypto'
  crypto: { network: PaymentNetwork; address: BlockchainAddress }
  target?: DepositDestinationTarget | undefined
  status: DepositDestinationStatus
  metadata?: Metadata | undefined
  createdAt: string
  updatedAt: string
}
type FiatAccountNumber = string
type DepositDestinationPaymentRail = 'ach' | 'fedwire'
type BankAccountUS = {
  accountType: 'us_bank'
  currency: 'usd'
  bankName: string
  beneficiaryName: string
  routingNumber: string
  accountNumber: FiatAccountNumber
  bankAddress?: string | undefined
  referenceCode?: string | undefined
  supportedRails: DepositDestinationPaymentRail[]
}
type DepositDestinationFiat = BankAccountUS
type FiatDepositDestination = {
  depositDestinationId: DepositDestinationId
  accountId: AccountId
  type: 'fiat'
  fiat: DepositDestinationFiat
  target?: DepositDestinationTarget | undefined
  status: DepositDestinationStatus
  metadata?: Metadata | undefined
  createdAt: string
  updatedAt: string
}
type DepositDestination = CryptoDepositDestination | FiatDepositDestination
type CreateCryptoDepositDestinationRequest = {
  accountId: AccountId
  type: 'crypto'
  target?: DepositDestinationTarget | undefined
  metadata?: Metadata | undefined
  compliance?: Compliance | undefined
  crypto: { network: PaymentNetwork }
}
type CreateFiatDepositDestinationRequest = {
  accountId: AccountId
  type: 'fiat'
  target?: DepositDestinationTarget | undefined
  metadata?: Metadata | undefined
  compliance?: Compliance | undefined
  fiat: { currency: 'usd'; paymentRail?: {} | undefined }
}
type CreateDepositDestinationRequest =
  | CreateCryptoDepositDestinationRequest
  | CreateFiatDepositDestinationRequest
type TransfersAccount = { accountId: {}; asset: {} }
type CreateTransferSource = TransfersAccount
type PaymentMethod = { paymentMethodId: {}; asset: {} }
type OnchainAddress = {
  address: {}
  network: PaymentNetwork
  destinationTag?: string | undefined
  asset: {}
}
type EmailInstrument = { email: {}; asset: {} }
type TransferTarget = TransfersAccount | PaymentMethod | OnchainAddress | EmailInstrument
type IsIntermediary = boolean
type PhysicalAddress = {
  line1?: string | undefined
  line2?: string | undefined
  city?: string | undefined
  state?: string | undefined
  postCode?: string | undefined
  countryCode?: string | undefined
}
type TravelRuleOriginator = {
  name?: string | undefined
  address?: PhysicalAddress | undefined
  financialInstitution?: string | undefined
  virtualAssetServiceProvider?:
    | {
        identifier?: string | undefined
        name?: string | undefined
        address?: PhysicalAddress | undefined
      }
    | undefined
  personalId?: string | undefined
  dateOfBirth?:
    | { day?: string | undefined; month?: string | undefined; year?: string | undefined }
    | undefined
}
type TravelRuleBeneficiary = {
  name?: string | undefined
  address?: PhysicalAddress | undefined
  financialInstitution?: string | undefined
  walletType?: 'custodial' | 'self_custody' | undefined
}
type TransferRequest = {
  source: CreateTransferSource
  target: TransferTarget
  amount: {}
  asset: {}
  amountType?: 'target' | 'source' | undefined
  validateOnly?: boolean | undefined
  execute: boolean
  metadata?: Metadata | undefined
  travelRule?:
    | {
        isSelf?: boolean | undefined
        isIntermediary?: IsIntermediary | undefined
        attestVerifiedWalletOwnership?: boolean | undefined
        originator?: TravelRuleOriginator | undefined
        beneficiary?: TravelRuleBeneficiary | undefined
      }
    | undefined
}
type TransferStatus = 'quoted' | 'processing' | 'completed' | 'failed'
type AchDepositSource = {
  currency: {}
  companyName: string
  companyEntryDescription: string
  individualIdentificationNumber?: string | undefined
}
type FedwireDepositSource = {
  currency: {}
  omad: string
  accountNumber: string
  originatorName: string
  originatorToBeneficiary?: string[] | undefined
}
type TransferSource =
  | TransfersAccount
  | PaymentMethod
  | OnchainAddress
  | AchDepositSource
  | FedwireDepositSource
type TransferExchangeRate = { sourceAsset: {}; targetAsset: {}; rate: string }
type TransferFee = { type: 'bank' | 'conversion' | 'network' | 'other'; amount: string; asset: {} }
type TransferFees = TransferFee[]
type TransferEstimate = {
  exchangeRate?: TransferExchangeRate | undefined
  targetAmount?: string | undefined
  targetAsset?: {} | undefined
  fees?: TransferFees | undefined
  estimatedAt: string
}
type DepositDestinationReference = { id: DepositDestinationId }
type TravelRuleStatus = 'incomplete' | 'completed'
type TransferDetails = {
  depositDestination?: DepositDestinationReference | undefined
  onchainTransactions?: { transactionHash: string; network: PaymentNetwork }[] | undefined
  travelRule?:
    | { status?: TravelRuleStatus | undefined; statusMessage?: string | undefined }
    | undefined
}
type Transfer = {
  transferId?: string | undefined
  status?: TransferStatus | undefined
  source: TransferSource
  target: TransferTarget
  sourceAmount?: string | undefined
  sourceAsset?: {} | undefined
  targetAmount?: string | undefined
  targetAsset?: {} | undefined
  exchangeRate?: TransferExchangeRate | undefined
  fees?: TransferFees | undefined
  estimate?: TransferEstimate | undefined
  completedAt?: string | undefined
  failureReason?: string | undefined
  expiresAt?: string | undefined
  executedAt?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  metadata?: Metadata | undefined
  details?: TransferDetails | undefined
}
type Email = string
type DepositTravelRuleVasp = { identifier?: string | undefined; name?: string | undefined }
type DepositTravelRuleRequest = {
  isSelf?: boolean | undefined
  isIntermediary?: IsIntermediary | undefined
  attestVerifiedWalletOwnership?: boolean | undefined
  originator?:
    | {
        name?: string | undefined
        address?: PhysicalAddress | undefined
        financialInstitution?: string | undefined
        virtualAssetServiceProvider?: DepositTravelRuleVasp | undefined
        personalId?: string | undefined
        dateOfBirth?:
          | { day?: string | undefined; month?: string | undefined; year?: string | undefined }
          | undefined
        walletType?: 'custodial' | 'self_custody' | undefined
      }
    | undefined
  beneficiary?: { name?: string | undefined } | undefined
}
type DepositTravelRuleResponse = {
  status: TravelRuleStatus
  missingFields?: string[] | undefined
  reason?: string | undefined
}
type PaymentExpiries = {
  authorizationExpiresAt?: string | undefined
  captureExpiresAt?: string | undefined
  refundExpiresAt?: string | undefined
}
type PaymentRedirect = { failureUrl?: {} | undefined; successUrl?: {} | undefined }
type CustomerDisplay = {
  merchantName?: string | undefined
  displayAmount?: { amount: string; currency: string } | undefined
  orderCode?: string | undefined
}
type CreatePaymentSessionRequest = {
  amount: string
  asset: {}
  target: {}
  expiries?: PaymentExpiries | undefined
  redirect?: PaymentRedirect | undefined
  autoCapture?: boolean | undefined
  externalReferenceId?: string | undefined
  customerDisplay?: CustomerDisplay | undefined
  metadata?: Metadata | undefined
  compliance?:
    | {
        requesterIpAddress?: string | undefined
        buyer?:
          | {
              name?: string | undefined
              address?:
                | {
                    line1?: string | undefined
                    line2?: string | undefined
                    city?: string | undefined
                    state?: string | undefined
                    postCode?: string | undefined
                    countryCode?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type PaymentSessionBalances = {
  capturable?: string | undefined
  captured?: string | undefined
  refundable?: string | undefined
  refunded?: string | undefined
}
type PaymentError = {
  code?: string | undefined
  message?: string | undefined
  occurredAt?: string | undefined
}
type OnchainTransaction = { transactionHash: string; network: {} }
type Authorization = {
  authorizationId?: {} | undefined
  paymentSessionId?: {} | undefined
  status?: {} | undefined
  amount?: string | undefined
  error?: PaymentError | undefined
  message?: string | undefined
  metadata?: Metadata | undefined
  externalReferenceId?: {} | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
  source?: {} | undefined
  onchainTransactions?: OnchainTransaction[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Capture = {
  captureId?: {} | undefined
  paymentSessionId?: {} | undefined
  status?: {} | undefined
  amount?: string | undefined
  finalCapture: boolean
  error?: PaymentError | undefined
  metadata?: Metadata | undefined
  externalReferenceId?: {} | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
  onchainTransactions?: OnchainTransaction[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Void = {
  voidId?: {} | undefined
  paymentSessionId?: {} | undefined
  status?: {} | undefined
  amount?: string | undefined
  error?: PaymentError | undefined
  metadata?: Metadata | undefined
  externalReferenceId?: {} | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
  onchainTransactions?: OnchainTransaction[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Refund = {
  refundId?: {} | undefined
  paymentSessionId?: {} | undefined
  source?: {} | undefined
  status?: {} | undefined
  amount?: string | undefined
  reason?: string | undefined
  error?: PaymentError | undefined
  metadata?: Metadata | undefined
  externalReferenceId?: {} | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
  onchainTransactions?: OnchainTransaction[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type PaymentSession = {
  paymentSessionId?: {} | undefined
  entityId?: string | undefined
  amount?: string | undefined
  asset?: {} | undefined
  target?: {} | undefined
  autoCapture?: boolean | undefined
  expiries?: PaymentExpiries | undefined
  source?: {} | undefined
  status?: {} | undefined
  balances?: PaymentSessionBalances | undefined
  authorizations?: Authorization[] | undefined
  captures?: Capture[] | undefined
  voids?: Void[] | undefined
  refunds?: Refund[] | undefined
  url?: {} | undefined
  x402Url?: {} | undefined
  redirect?: PaymentRedirect | undefined
  customerDisplay?: CustomerDisplay | undefined
  metadata?: Metadata | undefined
  externalReferenceId?: string | undefined
  cancellationReason?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type PaymentSessionId = string
type CancelPaymentSessionRequest = { cancellationReason?: string | undefined }
type PaymentSourceNetwork =
  | 'arbitrum'
  | 'arbitrum-sepolia'
  | 'avalanche'
  | 'base'
  | 'base-sepolia'
  | 'ethereum'
  | 'ethereum-sepolia'
  | 'optimism'
  | 'optimism-sepolia'
  | 'polygon'
  | 'polygon-amoy'
  | 'solana'
  | 'solana-devnet'
type EIP712Domain = {
  name?: string | undefined
  version?: string | undefined
  chainId?: bigint | undefined
  verifyingContract?: string | undefined
  salt?: string | undefined
}
type EIP712Types = { [x: string]: unknown }
type EIP3009Payload = {
  payloadId: string
  type: 'eip3009'
  data: {
    domain: EIP712Domain
    types: EIP712Types
    primaryType: string
    message: { [x: string]: unknown }
  }
}
type Permit2Payload = {
  payloadId: string
  type: 'permit2'
  data: {
    domain: EIP712Domain
    types: EIP712Types
    primaryType: string
    message: { [x: string]: unknown }
  }
}
type Erc20ApprovalPayload = {
  payloadId: string
  type: 'erc20_approval'
  data: {
    chainId: number
    to: string
    data: string
    value: string
    gas?: string | undefined
    maxFeePerGas?: string | undefined
    maxPriorityFeePerGas?: string | undefined
  }
}
type SpendPermissionPayload = {
  payloadId: string
  type: 'spend_permission'
  data: {
    domain: EIP712Domain
    types: EIP712Types
    primaryType: string
    message: { [x: string]: unknown }
  }
}
type OnchainSignaturePayload =
  | EIP3009Payload
  | Permit2Payload
  | Erc20ApprovalPayload
  | SpendPermissionPayload
type WalletAuthorizationOption = {
  optionId: string
  source: { address: {}; network?: {} | undefined; asset?: {} | undefined }
  amount: string
  asset: {}
  network: {}
  payloads: OnchainSignaturePayload[]
}
type WalletAuthorizationFundsRequirement = {
  asset: {}
  network: {}
  currentBalance: string
  requiredBalance: string
}
type IneligibleWalletAuthorizationAddress = {
  address: {}
  code: 'insufficient_funds' | 'superseded_by_preferred_option'
  message: string
  fundsRequired?: WalletAuthorizationFundsRequirement[] | undefined
}
type WalletAuthorizationOptionsResponse = {
  options: WalletAuthorizationOption[]
  ineligibleAddresses: IneligibleWalletAuthorizationAddress[]
}
type OnchainSignedPayload = { payloadId?: string | undefined; signature?: string | undefined }
type WalletAuthorizationRequest = {
  optionId: string
  signedPayloads: OnchainSignedPayload[]
  metadata?: Metadata | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
  externalReferenceId?: {} | undefined
}
type CoinbaseAuthorizationRequest = {
  metadata?: Metadata | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
  externalReferenceId?: {} | undefined
}
type MandateAuthorizationRequest = {
  mandateId: {}
  metadata?: Metadata | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
  externalReferenceId?: {} | undefined
}
type AuthorizationId = string
type CreateCaptureRequest = {
  amount?: string | undefined
  finalCapture: boolean
  metadata?: Metadata | undefined
  externalReferenceId?: {} | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
}
type CaptureId = string
type CreateVoidRequest = {
  metadata?: Metadata | undefined
  externalReferenceId?: {} | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
}
type VoidId = string
type CreateRefundRequest = {
  source: {}
  amount?: string | undefined
  reason?: string | undefined
  metadata?: Metadata | undefined
  externalReferenceId?: {} | undefined
  customerDisplay?: { referenceCode?: {} | undefined } | undefined
}
type RefundId = string
type MandatePolicyPeriod = 'day' | 'week' | 'month' | 'year'
type MandateCustomerDisplay = { merchantName?: string | undefined }
type CreateMandateRequest = {
  asset: {}
  policy?:
    | {
        maxPerAuthorization?: string | undefined
        maxPerPeriod?: { amount: string; period: MandatePolicyPeriod } | undefined
        minSetupBalance?: string | undefined
      }
    | undefined
  expiresAt?: string | undefined
  approvalRedirect?: { failureUrl?: {} | undefined; successUrl?: {} | undefined } | undefined
  revocationRedirect?: { failureUrl?: {} | undefined; successUrl?: {} | undefined } | undefined
  customerDisplay?: MandateCustomerDisplay | undefined
  metadata?: Metadata | undefined
}
type Mandate = {
  mandateId: {}
  asset: {}
  source?: {} | undefined
  policy: {
    maxPerAuthorization?: string | undefined
    maxPerPeriod?: { amount: string; period: MandatePolicyPeriod } | undefined
    minSetupBalance?: string | undefined
  }
  status: {}
  expiresAt?: string | undefined
  url?: {} | undefined
  revocationUrl?: {} | undefined
  approvalRedirect?: { failureUrl?: {} | undefined; successUrl?: {} | undefined } | undefined
  revocationRedirect?: { failureUrl?: {} | undefined; successUrl?: {} | undefined } | undefined
  customerDisplay?: MandateCustomerDisplay | undefined
  approvedAt?: string | undefined
  canceledAt?: string | undefined
  revokedAt?: string | undefined
  metadata?: Metadata | undefined
  createdAt: string
  updatedAt: string
}
type MandateStatus =
  | 'created'
  | 'approval_pending'
  | 'approval_succeeded'
  | 'approval_failed'
  | 'revocation_pending'
  | 'revocation_succeeded'
  | 'revocation_failed'
  | 'canceled'
type MandateId = string
type CancelMandateRequest = { reason?: string | undefined }
type Revocation = {
  revocationId: {}
  mandateId: {}
  status: {}
  onchainTransactions?: OnchainTransaction[] | undefined
  error?:
    | { code?: string | undefined; message?: string | undefined; occurredAt?: string | undefined }
    | undefined
  metadata?: Metadata | undefined
  createdAt: string
  updatedAt: string
}
type RevocationId = string
type WalletRevocationRequest = {
  optionId: string
  signedPayloads: OnchainSignedPayload[]
  reason?: string | undefined
  metadata?: Metadata | undefined
}
type EIP2612Payload = {
  payloadId: string
  type: 'eip2612'
  data: {
    domain: EIP712Domain
    types: EIP712Types
    primaryType: string
    message: { [x: string]: unknown }
  }
}
type Permit2AllowancePayload = {
  payloadId: string
  type: 'permit2'
  data: {
    domain: EIP712Domain
    types: EIP712Types
    primaryType: string
    message: { [x: string]: unknown }
  }
}
type SolanaSubscriptionPayloadData = { transaction: string }
type SolanaSubscriptionPayload = {
  payloadId: string
  type: 'solana_subscription'
  data: SolanaSubscriptionPayloadData
}
type RevocationPayload =
  | EIP2612Payload
  | Permit2AllowancePayload
  | Erc20ApprovalPayload
  | SolanaSubscriptionPayload
type WalletMandateRevocationOption = {
  optionId: string
  source: { address: {}; network?: {} | undefined; asset?: {} | undefined }
  payloads: RevocationPayload[]
}
type WalletMandateRevocationOptionsResponse = { options: WalletMandateRevocationOption[] }
type Approval = {
  approvalId: {}
  status: {}
  source?: {} | undefined
  onchainTransactions?: OnchainTransaction[] | undefined
  error?:
    | { code?: string | undefined; message?: string | undefined; occurredAt?: string | undefined }
    | undefined
  metadata?: Metadata | undefined
  createdAt: string
  updatedAt: string
}
type ApprovalId = string
type WalletApprovalRequest = {
  optionId: string
  signedPayloads: OnchainSignedPayload[]
  metadata?: Metadata | undefined
}
type ApprovalPayload =
  | EIP2612Payload
  | Permit2AllowancePayload
  | Erc20ApprovalPayload
  | SolanaSubscriptionPayload
type WalletMandateApprovalOption = {
  optionId: string
  source: { address: {}; network?: {} | undefined; asset?: {} | undefined }
  payloads: ApprovalPayload[]
}
type WalletMandateApprovalFundsRequirement = {
  asset: {}
  network: {}
  currentBalance: string
  requiredBalance: string
}
type IneligibleWalletMandateApprovalAddresses = {
  address: {}
  code: 'insufficient_funds' | 'superseded_by_preferred_option'
  message: string
  fundsRequired?: WalletMandateApprovalFundsRequirement[] | undefined
}
type WalletMandateApprovalOptionsResponse = {
  options: WalletMandateApprovalOption[]
  ineligibleAddresses: IneligibleWalletMandateApprovalAddresses[]
}
type TopUpCustomerDisplayInput = { merchantName?: string | undefined }
type CreateTopUpLinkRequest = {
  topUpAmount: {}
  orderTotalAmount?: {} | undefined
  asset: {}
  redirectUrl?: {} | undefined
  customerDisplay?: TopUpCustomerDisplayInput | undefined
}
type TopUpLinkId = string
type TopUpCustomerDisplay = { merchantName: string }
type TopUpLink = {
  topUpLinkId: TopUpLinkId
  topUpAmount: {}
  asset: {}
  orderTotalAmount?: {} | undefined
  redirectUrl?: {} | undefined
  customerDisplay: TopUpCustomerDisplay
  topUpUrl: {}
  expiresAt: string
  createdAt: string
}
type CreateDisbursementRequest = {
  source: {}
  target: {}
  amount: string
  asset: {}
  reason?: string | undefined
  externalReferenceId?: string | undefined
  customerDisplay?:
    | { referenceCode?: {} | undefined; merchantName?: string | undefined }
    | undefined
  metadata?: Metadata | undefined
  compliance?:
    | {
        requesterIpAddress?: string | undefined
        recipient?:
          | {
              name?: string | undefined
              address?:
                | {
                    line1?: string | undefined
                    line2?: string | undefined
                    city?: string | undefined
                    state?: string | undefined
                    postCode?: string | undefined
                    countryCode?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type Disbursement = {
  disbursementId: {}
  source: {}
  target: {}
  amount: string
  asset: {}
  status: {}
  reason?: string | undefined
  externalReferenceId?: string | undefined
  customerDisplay?:
    | { referenceCode?: {} | undefined; merchantName?: string | undefined }
    | undefined
  metadata?: Metadata | undefined
  error?:
    | { code?: string | undefined; message?: string | undefined; occurredAt?: string | undefined }
    | undefined
  onchainTransactions?: OnchainTransaction[] | undefined
  createdAt: string
  updatedAt: string
}
type PaymentActionStatus = 'pending' | 'succeeded' | 'failed'
type DisbursementId = string
type EmailAuthentication = { type: 'email'; email: {} }
type SmsAuthentication = { type: 'sms'; phoneNumber: {} }
type DeveloperJWTAuthentication = { type: 'jwt'; kid: string; sub: string }
type OAuth2ProviderType = 'google' | 'apple' | 'x' | 'telegram' | 'github'
type OAuth2Authentication = {
  type: OAuth2ProviderType
  sub: string
  email?: string | undefined
  name?: string | undefined
  username?: string | undefined
}
type TelegramAuthentication = {
  type: OAuth2ProviderType
  id: number
  firstName?: string | undefined
  lastName?: string | undefined
  photoUrl?: string | undefined
  authDate: number
  username?: string | undefined
}
type SiweAuthentication = { type: 'siwe'; address: {} }
type AuthenticationMethod =
  | EmailAuthentication
  | SmsAuthentication
  | DeveloperJWTAuthentication
  | OAuth2Authentication
  | TelegramAuthentication
  | SiweAuthentication
type AuthenticationMethods = AuthenticationMethod[]
type MFAMethods = {
  enrollmentPromptedAt?: string | undefined
  totp?: { enrolledAt: string } | undefined
  sms?: { enrolledAt: string } | undefined
}
type EndUserEvmAccount = {
  address: string
  createdAt: string
  exportedAt?: (string | null) | undefined
  ejectedAt?: (string | null) | undefined
}
type EndUserEvmSmartAccount = { address: string; ownerAddresses: string[]; createdAt: string }
type EndUserSolanaAccount = {
  address: string
  createdAt: string
  exportedAt?: (string | null) | undefined
  ejectedAt?: (string | null) | undefined
}
type EndUser = {
  userId: string
  authenticationMethods: AuthenticationMethods
  mfaMethods?: MFAMethods | undefined
  evmAccounts: string[]
  evmAccountObjects: EndUserEvmAccount[]
  evmSmartAccounts: string[]
  evmSmartAccountObjects: EndUserEvmSmartAccount[]
  solanaAccounts: string[]
  solanaAccountObjects: EndUserSolanaAccount[]
  createdAt: string
}
type PhoneNumber = string
type BorrowProductNetwork = 'base'
type BorrowProductProtocol = 'morpho_blue'
type BorrowProductId = string
type BorrowProductVenue = { venueId: string; entrypointAddress: string; name: string }
type BorrowProductToken = { address: string; symbol: string; decimals: bigint }
type BorrowProductAssetCapability = { type: 'collateral' | 'debt'; enabled: boolean }
type BorrowProductAsset = {
  assetId: string
  token: BorrowProductToken
  capabilities: BorrowProductAssetCapability[]
}
type BorrowProductSnapshot = {
  blockNumber: bigint
  blockHash: string
  blockTimestamp: bigint
  observedAt: string
}
type MorphoBlueMarketParams = {
  onchainMarketId: string
  loanToken: BorrowProductToken
  collateralToken: BorrowProductToken
  oracleAddress: string
  interestRateModelAddress: string
  lltvBps: number
}
type MorphoBlueProtocolDetails = { type: 'morpho_blue'; marketParams: MorphoBlueMarketParams }
type BorrowProductProtocolDetails = MorphoBlueProtocolDetails
type BorrowProduct = {
  borrowProductId: BorrowProductId
  network: BorrowProductNetwork
  name: string
  venue: BorrowProductVenue
  assets: BorrowProductAsset[]
  snapshot: BorrowProductSnapshot
  protocolDetails: BorrowProductProtocolDetails
}
type PaymasterContext = { [x: string]: unknown }
type EIP712Message = {
  domain: EIP712Domain
  types: EIP712Types
  primaryType: string
  message: { [x: string]: unknown }
}
type RevokeDelegationRequest = { walletSecretId?: string | undefined }
type EvmEip7702DelegationNetwork =
  | 'base-sepolia'
  | 'base'
  | 'arbitrum'
  | 'optimism'
  | 'polygon'
  | 'ethereum'
  | 'ethereum-sepolia'
type EvmUserOperationNetwork =
  | 'base-sepolia'
  | 'base'
  | 'arbitrum'
  | 'optimism'
  | 'zora'
  | 'polygon'
  | 'bnb'
  | 'avalanche'
  | 'ethereum'
  | 'ethereum-sepolia'
type EvmCall = { to: string; value: string; data: string; overrideGasLimit?: string | undefined }
type UserOperationReceiptRevert = { data: string; message: string }
type UserOperationReceipt = {
  revert?: UserOperationReceiptRevert | undefined
  transactionHash?: string | undefined
  blockHash?: string | undefined
  blockNumber?: number | undefined
  gasUsed?: string | undefined
}
type EvmUserOperation = {
  network: EvmUserOperationNetwork
  userOpHash: string
  calls: EvmCall[]
  status: 'pending' | 'signed' | 'broadcast' | 'complete' | 'dropped' | 'failed'
  transactionHash?: string | undefined
  receipts?: UserOperationReceipt[] | undefined
  expiresAt?: string | undefined
}
type BorrowPositionAssetAmount = { assetId: string; token: BorrowProductToken; amount: {} }
type BorrowPositionDebt = {
  assetId: string
  token: BorrowProductToken
  amount: {}
  borrowApyBps?: number | undefined
}
type BorrowPositionHealthStatus = 'no_debt' | 'healthy' | 'undercollateralized'
type MorphoBlueOnchainState = {
  type: {}
  collateral: BorrowPositionAssetAmount[]
  debt: BorrowPositionDebt[]
  healthFactor?: string | undefined
  currentLtvBps?: number | undefined
  liquidationThresholdBps?: number | undefined
  healthStatus: BorrowPositionHealthStatus
}
type BorrowPositionOnchainState = MorphoBlueOnchainState
type BorrowPosition = {
  borrowProductId: BorrowProductId
  address: string
  network: BorrowProductNetwork
  snapshot: BorrowProductSnapshot
  onchainState: BorrowPositionOnchainState
}
type CreateBorrowPositionRequest = {
  borrowProductId: BorrowProductId
  collateralAmount: {}
  loanAmount: {}
  walletSecretId: string
  useCdpPaymaster: boolean
  paymasterUrl?: {} | undefined
  paymasterContext?: {} | undefined
}
type AdjustBorrowPositionRequest = {
  borrowProductId: BorrowProductId
  addCollateralAmount?: {} | undefined
  removeCollateralAmount?: {} | undefined
  repayLoanAmount?: {} | undefined
  borrowLoanAmount?: {} | undefined
  walletSecretId: string
  useCdpPaymaster: boolean
  paymasterUrl?: {} | undefined
  paymasterContext?: {} | undefined
}
type CloseBorrowPositionRequest = {
  borrowProductId: BorrowProductId
  walletSecretId: string
  useCdpPaymaster: boolean
  paymasterUrl?: {} | undefined
  paymasterContext?: {} | undefined
}
type X402V2PaymentRequirements = {
  scheme: 'exact' | 'upto' | 'batch-settlement'
  network: {}
  asset: {}
  amount: string
  payTo: {}
  maxTimeoutSeconds: number
  extra?: { [x: string]: unknown } | undefined
}
type X402V1PaymentRequirements = {
  scheme: 'exact'
  network: {}
  maxAmountRequired: string
  resource: string
  description: {}
  mimeType: string
  outputSchema?: { [x: string]: unknown } | undefined
  payTo: {}
  maxTimeoutSeconds: number
  asset: {}
  extra?: { [x: string]: unknown } | undefined
}
type X402PaymentRequirements = X402V2PaymentRequirements | X402V1PaymentRequirements
type EvmAccount = {
  address: string
  name?: string | undefined
  policies?: string[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type EvmEip7702DelegationOperation = {
  delegationOperationId: string
  status: 'UNSPECIFIED' | 'PENDING' | 'SUBMITTED' | 'COMPLETED' | 'FAILED'
  transactionHash?: string | undefined
  network: EvmEip7702DelegationNetwork
  delegateAddress?: string | undefined
}
type EvmSmartAccount = {
  address: string
  owners: string[]
  name?: string | undefined
  policies?: string[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type SpendPermissionNetwork =
  | 'base'
  | 'base-sepolia'
  | 'ethereum'
  | 'ethereum-sepolia'
  | 'optimism'
  | 'arbitrum'
  | 'avalanche'
  | 'polygon'
type CreateSpendPermissionRequest = {
  network: SpendPermissionNetwork
  spender: string
  token: string
  allowance: string
  period: string
  start: string
  end: string
  salt?: string | undefined
  extraData?: string | undefined
  paymasterUrl?: {} | undefined
}
type SpendPermission = {
  account: string
  spender: string
  token: string
  allowance: string
  period: string
  start: string
  end: string
  salt: string
  extraData: string
}
type SpendPermissionResponseObject = {
  permission: SpendPermission
  permissionHash: string
  revoked: boolean
  revokedAt?: string | undefined
  createdAt: string
  network: SpendPermissionNetwork
}
type RevokeSpendPermissionRequest = {
  network: SpendPermissionNetwork
  permissionHash: string
  paymasterUrl?: {} | undefined
}
type VaultId = string
type LendNetwork = 'base'
type LendPosition = {
  vaultId: VaultId
  network: LendNetwork
  underlyingAsset: {}
  vaultShares: {}
  assetBalance: {}
}
type CatalogVaultId = string
type VaultStatus = 'pending' | 'active' | 'failed'
type Vault = {
  vaultId: VaultId
  address: string
  catalogVaultId: CatalogVaultId
  performanceFeeBps: number
  feeRecipientAddress: string
  network: LendNetwork
  status: VaultStatus
  createdAt: string
  underlyingAsset: {}
  metrics?:
    | {
        apyBps?: number | undefined
        apyUpdatedAt?: string | undefined
        tvl?: {} | undefined
        tvlUpdatedAt?: string | undefined
      }
    | undefined
}
type EoaVaultRedeemFeesRequest = { vaultId: VaultId; maxSlippageBps?: number | undefined }
type EoaVaultRedeemFeesResponse = { transactionHash: string }
type SmartAccountVaultRedeemFeesRequest = {
  vaultId: VaultId
  maxSlippageBps?: number | undefined
  useCdpPaymaster?: boolean | undefined
  paymasterUrl?: {} | undefined
  paymasterContext?: PaymasterContext | undefined
}
type SmartAccountVaultRedeemFeesResponse = { userOpHash: string }
type VaultDepositAmount = {}
type VaultDepositReceiver = {}
type VaultDepositMaxSlippageBps = number
type DepositToVaultWithEvmAccountRequest = {
  vaultId?: VaultId | undefined
  amount?: VaultDepositAmount | undefined
  receiver?: VaultDepositReceiver | undefined
  maxSlippageBps?: VaultDepositMaxSlippageBps | undefined
}
type EoaVaultDepositResponse = { transactionHash: string }
type VaultDepositUseCdpPaymaster = boolean
type VaultDepositPaymasterUrl = {}
type DepositToVaultWithEvmSmartAccountRequest = {
  vaultId?: VaultId | undefined
  amount?: VaultDepositAmount | undefined
  receiver?: VaultDepositReceiver | undefined
  useCdpPaymaster?: VaultDepositUseCdpPaymaster | undefined
  paymasterUrl?: VaultDepositPaymasterUrl | undefined
  paymasterContext?: PaymasterContext | undefined
}
type SmartAccountVaultDepositResponse = { userOpHash: string }
type VaultWithdrawAmount = {}
type VaultWithdrawAll = boolean
type VaultWithdrawReceiver = {}
type VaultWithdrawMaxSlippageBps = number
type WithdrawFromVaultWithEvmAccountRequest = {
  vaultId: VaultId
  amount?: VaultWithdrawAmount | undefined
  withdrawAll?: VaultWithdrawAll | undefined
  receiver?: VaultWithdrawReceiver | undefined
  maxSlippageBps?: VaultWithdrawMaxSlippageBps | undefined
}
type EoaVaultWithdrawResponse = { transactionHash: string }
type VaultWithdrawUseCdpPaymaster = boolean
type VaultWithdrawPaymasterUrl = {}
type WithdrawFromVaultWithEvmSmartAccountRequest = {
  vaultId: VaultId
  amount?: VaultWithdrawAmount | undefined
  withdrawAll?: VaultWithdrawAll | undefined
  receiver?: VaultWithdrawReceiver | undefined
  maxSlippageBps?: VaultWithdrawMaxSlippageBps | undefined
  useCdpPaymaster?: VaultWithdrawUseCdpPaymaster | undefined
  paymasterUrl?: VaultWithdrawPaymasterUrl | undefined
  paymasterContext?: PaymasterContext | undefined
}
type SmartAccountVaultWithdrawResponse = { userOpHash: string }
type EvmSwapsNetwork = 'base' | 'ethereum' | 'arbitrum' | 'optimism' | 'polygon'
type ToToken = string
type FromToken = string
type FromAmount = string
type Taker = string
type SignerAddress = string
type GasPrice = string
type SlippageBps = number
type TokenFee = { amount: string; token: string }
type CommonSwapResponseIssuesAllowance = { currentAllowance: string; spender: string }
type CommonSwapResponseIssuesBalance = {
  token: string
  currentBalance: string
  requiredBalance: string
}
type GetSwapPriceResponse = {
  blockNumber: string
  toAmount: string
  toToken: string
  fees: {
    gasFee: TokenFee | ({ [x: string]: unknown } | null)
    protocolFee: TokenFee | ({ [x: string]: unknown } | null)
  }
  issues: {
    allowance: CommonSwapResponseIssuesAllowance | ({ [x: string]: unknown } | null)
    balance: CommonSwapResponseIssuesBalance | ({ [x: string]: unknown } | null)
    simulationIncomplete: boolean
  }
  liquidityAvailable: boolean
  minToAmount: string
  fromAmount: string
  fromToken: string
  gas: string | ({ [x: string]: unknown } | null)
  gasPrice: string
}
type SwapUnavailableResponse = { liquidityAvailable: boolean }
type GetSwapPriceResponseWrapper = GetSwapPriceResponse | SwapUnavailableResponse
type SwapPermit2Approval = { hash: string; eip712: EIP712Message }
type CreateSwapQuoteResponse = {
  permit2: SwapPermit2Approval | ({ [x: string]: unknown } | null)
  transaction: { to: string; data: string; gas: string; gasPrice: string; value: string }
  blockNumber: string
  toAmount: string
  toToken: string
  fees: {
    gasFee: TokenFee | ({ [x: string]: unknown } | null)
    protocolFee: TokenFee | ({ [x: string]: unknown } | null)
  }
  issues: {
    allowance: CommonSwapResponseIssuesAllowance | ({ [x: string]: unknown } | null)
    balance: CommonSwapResponseIssuesBalance | ({ [x: string]: unknown } | null)
    simulationIncomplete: boolean
  }
  liquidityAvailable: boolean
  minToAmount: string
  fromAmount: string
  fromToken: string
}
type CreateSwapQuoteResponseWrapper = CreateSwapQuoteResponse | SwapUnavailableResponse
type ListEvmTokenBalancesNetwork =
  | 'base'
  | 'base-sepolia'
  | 'ethereum'
  | 'arbitrum'
  | 'polygon'
  | 'optimism'
type TokenAmount = { amount: string; decimals: bigint }
type Token = {
  network: ListEvmTokenBalancesNetwork
  symbol?: string | undefined
  name?: string | undefined
  contractAddress: string
}
type TokenBalance = { amount: TokenAmount; token: Token }
type EthValueCriterion = {
  type: 'ethValue'
  ethValue: string
  operator: '>' | '>=' | '<' | '<=' | '=='
}
type EvmAddressCriterion = { type: 'evmAddress'; addresses: string[]; operator: 'in' | 'not in' }
type KnownAbiType = 'erc20' | 'erc721' | 'erc1155'
type AbiParameter = {
  name?: string | undefined
  type: string
  internalType?: string | undefined
  components?: AbiParameter[] | undefined
}
type AbiStateMutability = 'pure' | 'view' | 'nonpayable' | 'payable'
type AbiFunction = {
  type: 'function'
  name: string
  inputs: AbiParameter[]
  outputs: AbiParameter[]
  constant?: boolean | undefined
  payable?: boolean | undefined
  stateMutability: AbiStateMutability
  gas?: number | undefined
}
type AbiInput = {
  type: 'constructor' | 'error' | 'event' | 'fallback' | 'receive'
  additionalProperties?: { [x: string]: unknown } | undefined
}
type Abi = (AbiFunction | AbiInput)[]
type EvmDataParameterCondition = {
  name: string
  operator: '>' | '>=' | '<' | '<=' | '=='
  value: string
}
type EvmDataParameterConditionList = { name: string; operator: 'in' | 'not in'; values: string[] }
type EvmDataCondition = {
  function: string
  params?: (EvmDataParameterCondition | EvmDataParameterConditionList)[] | undefined
}
type EvmDataCriterion = { type: 'evmData'; abi: KnownAbiType | Abi; conditions: EvmDataCondition[] }
type NetUSDChangeCriterion = {
  type: 'netUSDChange'
  changeCents: number
  operator: '>' | '>=' | '<' | '<=' | '=='
}
type SignEvmTransactionCriteria = (
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type SignEvmTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'signEvmTransaction'
  criteria: SignEvmTransactionCriteria
}
type EvmNetworkCriterion = {
  type: 'evmNetwork'
  networks: (
    | 'base-sepolia'
    | 'base'
    | 'ethereum'
    | 'ethereum-sepolia'
    | 'avalanche'
    | 'polygon'
    | 'optimism'
    | 'arbitrum'
    | 'arbitrum-sepolia'
    | 'zora'
    | 'bnb'
    | 'world'
    | 'world-sepolia'
  )[]
  operator: 'in' | 'not in'
}
type SendEvmTransactionCriteria = (
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmNetworkCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type SendEvmTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'sendEvmTransaction'
  criteria: SendEvmTransactionCriteria
}
type EvmMessageCriterion = { type: 'evmMessage'; match: string }
type SignEvmMessageCriteria = EvmMessageCriterion[]
type SignEvmMessageRule = {
  action: 'reject' | 'accept'
  operation: 'signEvmMessage'
  criteria: SignEvmMessageCriteria
}
type EvmTypedAddressCondition = { addresses: string[]; operator: 'in' | 'not in'; path: string }
type EvmTypedNumericalCondition = {
  value: string
  operator: '>' | '>=' | '<' | '<=' | '=='
  path: string
}
type EvmTypedStringCondition = { match: string; path: string }
type SignEvmTypedDataFieldCriterion = {
  type: 'evmTypedDataField'
  types: {
    types: { [x: string]: { name?: string | undefined; type?: string | undefined }[] }
    primaryType: string
  }
  conditions: (EvmTypedAddressCondition | EvmTypedNumericalCondition | EvmTypedStringCondition)[]
}
type SignEvmTypedDataVerifyingContractCriterion = {
  type: 'evmTypedDataVerifyingContract'
  addresses: string[]
  operator: 'in' | 'not in'
}
type SignEvmTypedDataCriteria = (
  | SignEvmTypedDataFieldCriterion
  | SignEvmTypedDataVerifyingContractCriterion
)[]
type SignEvmTypedDataRule = {
  action: 'reject' | 'accept'
  operation: 'signEvmTypedData'
  criteria: SignEvmTypedDataCriteria
}
type SolAddressCriterion = { type: 'solAddress'; addresses: string[]; operator: 'in' | 'not in' }
type SolValueCriterion = {
  type: 'solValue'
  solValue: string
  operator: '>' | '>=' | '<' | '<=' | '=='
}
type SplAddressCriterion = { type: 'splAddress'; addresses: string[]; operator: 'in' | 'not in' }
type SplValueCriterion = {
  type: 'splValue'
  splValue: string
  operator: '>' | '>=' | '<' | '<=' | '=='
}
type MintAddressCriterion = { type: 'mintAddress'; addresses: string[]; operator: 'in' | 'not in' }
type KnownIdlType = 'SystemProgram' | 'TokenProgram' | 'AssociatedTokenProgram'
type Idl = {
  address: string
  instructions: {
    name: string
    discriminator: number[]
    args: { name: string; type: string }[]
    accounts?:
      | { name: string; writable?: boolean | undefined; signer?: boolean | undefined }[]
      | undefined
  }[]
  metadata?:
    | { name?: string | undefined; version?: string | undefined; spec?: string | undefined }
    | undefined
  types?: { [x: string]: unknown }[] | undefined
}
type SolDataParameterCondition = {
  name: string
  operator: '>' | '>=' | '<' | '<=' | '=='
  value: string
}
type SolDataParameterConditionList = { name: string; operator: 'in' | 'not in'; values: string[] }
type SolDataCondition = {
  instruction: string
  params?: (SolDataParameterCondition | SolDataParameterConditionList)[] | undefined
}
type SolDataCriterion = {
  type: 'solData'
  idls: (KnownIdlType | Idl)[]
  conditions: SolDataCondition[]
}
type ProgramIdCriterion = { type: 'programId'; programIds: string[]; operator: 'in' | 'not in' }
type SignSolTransactionCriteria = (
  | SolAddressCriterion
  | SolValueCriterion
  | SplAddressCriterion
  | SplValueCriterion
  | MintAddressCriterion
  | SolDataCriterion
  | ProgramIdCriterion
)[]
type SignSolTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'signSolTransaction'
  criteria: SignSolTransactionCriteria
}
type SolNetworkCriterion = {
  type: 'solNetwork'
  networks: ('solana-devnet' | 'solana')[]
  operator: 'in' | 'not in'
}
type SendSolTransactionCriteria = (
  | SolAddressCriterion
  | SolValueCriterion
  | SplAddressCriterion
  | SplValueCriterion
  | MintAddressCriterion
  | SolDataCriterion
  | ProgramIdCriterion
  | SolNetworkCriterion
)[]
type SendSolTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'sendSolTransaction'
  criteria: SendSolTransactionCriteria
}
type SolMessageCriterion = { type: 'solMessage'; match: string }
type SignSolMessageCriteria = SolMessageCriterion[]
type SignSolMessageRule = {
  action: 'reject' | 'accept'
  operation: 'signSolMessage'
  criteria: SignSolMessageCriteria
}
type SignEvmHashRule = { action: 'reject' | 'accept'; operation: 'signEvmHash' }
type PrepareUserOperationCriteria = (
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmNetworkCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type PrepareUserOperationRule = {
  action: 'reject' | 'accept'
  operation: 'prepareUserOperation'
  criteria: PrepareUserOperationCriteria
}
type SendUserOperationCriteria = (
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmNetworkCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type SendUserOperationRule = {
  action: 'reject' | 'accept'
  operation: 'sendUserOperation'
  criteria: SendUserOperationCriteria
}
type SignEndUserEvmTransactionCriteria = (
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type SignEndUserEvmTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'signEndUserEvmTransaction'
  criteria: SignEndUserEvmTransactionCriteria
}
type SendEndUserEvmTransactionCriteria = (
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmNetworkCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type SendEndUserEvmTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'sendEndUserEvmTransaction'
  criteria: SendEndUserEvmTransactionCriteria
}
type SignEndUserEvmMessageCriteria = EvmMessageCriterion[]
type SignEndUserEvmMessageRule = {
  action: 'reject' | 'accept'
  operation: 'signEndUserEvmMessage'
  criteria: SignEndUserEvmMessageCriteria
}
type SignEndUserEvmTypedDataCriteria = (
  | SignEvmTypedDataFieldCriterion
  | SignEvmTypedDataVerifyingContractCriterion
)[]
type SignEndUserEvmTypedDataRule = {
  action: 'reject' | 'accept'
  operation: 'signEndUserEvmTypedData'
  criteria: SignEndUserEvmTypedDataCriteria
}
type SignEndUserEvmHashRule = { action: 'reject' | 'accept'; operation: 'signEndUserEvmHash' }
type SignEndUserSolTransactionCriteria = (
  | SolAddressCriterion
  | SolValueCriterion
  | SplAddressCriterion
  | SplValueCriterion
  | MintAddressCriterion
  | SolDataCriterion
  | ProgramIdCriterion
)[]
type SignEndUserSolTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'signEndUserSolTransaction'
  criteria: SignEndUserSolTransactionCriteria
}
type SendEndUserSolTransactionCriteria = (
  | SolAddressCriterion
  | SolValueCriterion
  | SplAddressCriterion
  | SplValueCriterion
  | MintAddressCriterion
  | SolDataCriterion
  | ProgramIdCriterion
  | SolNetworkCriterion
)[]
type SendEndUserSolTransactionRule = {
  action: 'reject' | 'accept'
  operation: 'sendEndUserSolTransaction'
  criteria: SendEndUserSolTransactionCriteria
}
type SignEndUserSolMessageCriteria = SolMessageCriterion[]
type SignEndUserSolMessageRule = {
  action: 'reject' | 'accept'
  operation: 'signEndUserSolMessage'
  criteria: SignEndUserSolMessageCriteria
}
type SendEndUserEvmAssetCriteria = (
  | EvmNetworkCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type SendEndUserEvmAssetRule = {
  action: 'reject' | 'accept'
  operation: 'sendEndUserEvmAsset'
  criteria: SendEndUserEvmAssetCriteria
}
type SendEndUserSolAssetCriteria = (
  | SplAddressCriterion
  | SplValueCriterion
  | SolDataCriterion
  | SolNetworkCriterion
)[]
type SendEndUserSolAssetRule = {
  action: 'reject' | 'accept'
  operation: 'sendEndUserSolAsset'
  criteria: SendEndUserSolAssetCriteria
}
type SendEndUserOperationCriteria = (
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmNetworkCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type SendEndUserOperationRule = {
  action: 'reject' | 'accept'
  operation: 'sendEndUserOperation'
  criteria: SendEndUserOperationCriteria
}
type CreateEndUserEvmSwapCriteria = (
  | EvmNetworkCriterion
  | EvmDataCriterion
  | NetUSDChangeCriterion
)[]
type CreateEndUserEvmSwapRule = {
  action: 'reject' | 'accept'
  operation: 'createEndUserEvmSwap'
  criteria: CreateEndUserEvmSwapCriteria
}
type Rule =
  | SignEvmTransactionRule
  | SendEvmTransactionRule
  | SignEvmMessageRule
  | SignEvmTypedDataRule
  | SignSolTransactionRule
  | SendSolTransactionRule
  | SignSolMessageRule
  | SignEvmHashRule
  | PrepareUserOperationRule
  | SendUserOperationRule
  | SignEndUserEvmTransactionRule
  | SendEndUserEvmTransactionRule
  | SignEndUserEvmMessageRule
  | SignEndUserEvmTypedDataRule
  | SignEndUserEvmHashRule
  | SignEndUserSolTransactionRule
  | SendEndUserSolTransactionRule
  | SignEndUserSolMessageRule
  | SendEndUserEvmAssetRule
  | SendEndUserSolAssetRule
  | SendEndUserOperationRule
  | CreateEndUserEvmSwapRule
type PolicyRules = Rule[]
type Policy = {
  id: string
  description?: string | undefined
  scope: 'project' | 'account'
  status?: 'active' | 'paused' | undefined
  pausedAt?: string | undefined
  resumeAt?: string | undefined
  rules: PolicyRules
  createdAt: string
  updatedAt: string
}
type SignEvmTransactionSimulationInput = {
  operation: 'signEvmTransaction'
  address: string
  transaction: string
}
type SendEvmTransactionSimulationInput = {
  operation: 'sendEvmTransaction'
  address: string
  transaction: string
  network:
    | 'base'
    | 'base-sepolia'
    | 'ethereum'
    | 'ethereum-sepolia'
    | 'avalanche'
    | 'polygon'
    | 'optimism'
    | 'arbitrum'
    | 'arbitrum-sepolia'
    | 'world'
    | 'world-sepolia'
}
type SignEvmHashSimulationInput = { operation: 'signEvmHash'; address: string; hash: string }
type SignEvmMessageSimulationInput = {
  operation: 'signEvmMessage'
  address: string
  message: string
}
type SignEvmTypedDataSimulationInput = {
  operation: 'signEvmTypedData'
  address: string
  domain: EIP712Domain
  types: EIP712Types
  primaryType: string
  message: { [x: string]: unknown }
}
type PrepareUserOperationSimulationInput = {
  operation: 'prepareUserOperation'
  address: string
  network: EvmUserOperationNetwork
  calls: EvmCall[]
  paymasterUrl?: {} | undefined
  paymasterContext?: PaymasterContext | undefined
  dataSuffix?: string | undefined
}
type SendUserOperationSimulationInput = {
  operation: 'sendUserOperation'
  address: string
  userOpHash: string
}
type SignSolTransactionSimulationInput = {
  operation: 'signSolTransaction'
  address: string
  network?: 'solana' | 'solana-devnet' | undefined
  transaction: string
}
type SendSolTransactionSimulationInput = {
  operation: 'sendSolTransaction'
  network: 'solana' | 'solana-devnet'
  transaction: string
  useCdpSponsor?: boolean | undefined
}
type SignSolMessageSimulationInput = {
  operation: 'signSolMessage'
  address: string
  message: string
  encoding?: 'utf8' | 'base64' | undefined
}
type SignEndUserEvmHashSimulationInput = {
  operation: 'signEndUserEvmHash'
  userId: string
  address: string
  hash: string
}
type SignEndUserEvmTransactionSimulationInput = {
  operation: 'signEndUserEvmTransaction'
  userId: string
  address: string
  transaction: string
}
type SendEndUserEvmTransactionSimulationInput = {
  operation: 'sendEndUserEvmTransaction'
  userId: string
  address: string
  network:
    | 'base'
    | 'base-sepolia'
    | 'ethereum'
    | 'ethereum-sepolia'
    | 'avalanche'
    | 'polygon'
    | 'optimism'
    | 'arbitrum'
    | 'arbitrum-sepolia'
    | 'world'
    | 'world-sepolia'
  transaction: string
}
type SignEndUserEvmMessageSimulationInput = {
  operation: 'signEndUserEvmMessage'
  userId: string
  address: string
  message: string
}
type SignEndUserEvmTypedDataSimulationInput = {
  operation: 'signEndUserEvmTypedData'
  userId: string
  address: string
  typedData: EIP712Message
}
type SendEndUserOperationSimulationInput = {
  operation: 'sendEndUserOperation'
  userId: string
  address: string
  network: EvmUserOperationNetwork
  calls: EvmCall[]
  useCdpPaymaster: boolean
  paymasterUrl?: {} | undefined
  paymasterContext?: PaymasterContext | undefined
  dataSuffix?: string | undefined
}
type SignEndUserSolTransactionSimulationInput = {
  operation: 'signEndUserSolTransaction'
  userId: string
  address: string
  network?: 'solana' | 'solana-devnet' | undefined
  transaction: string
}
type SendEndUserSolTransactionSimulationInput = {
  operation: 'sendEndUserSolTransaction'
  userId: string
  address: string
  network: 'solana' | 'solana-devnet'
  transaction: string
  useCdpSponsor?: boolean | undefined
}
type SignEndUserSolMessageSimulationInput = {
  operation: 'signEndUserSolMessage'
  userId: string
  address: string
  message: string
}
type SendEndUserEvmAssetSimulationInput = {
  operation: 'sendEndUserEvmAsset'
  userId: string
  address: {}
  asset: {}
  to: {}
  amount: string
  network:
    | 'base'
    | 'base-sepolia'
    | 'ethereum'
    | 'ethereum-sepolia'
    | 'avalanche'
    | 'polygon'
    | 'optimism'
    | 'arbitrum'
    | 'arbitrum-sepolia'
    | 'world'
    | 'world-sepolia'
  useCdpPaymaster?: boolean | undefined
  paymasterUrl?: {} | undefined
  paymasterContext?: PaymasterContext | undefined
}
type SendEndUserSolAssetSimulationInput = {
  operation: 'sendEndUserSolAsset'
  userId: string
  address: {}
  asset: {}
  to: {}
  amount: string
  network: 'solana' | 'solana-devnet'
  createRecipientAta?: boolean | undefined
  useCdpSponsor?: boolean | undefined
}
type CreateEndUserEvmSwapSimulationInput = {
  operation: 'createEndUserEvmSwap'
  userId: string
  taker: string
  network: EvmSwapsNetwork
  fromToken: string
  toToken: string
  fromAmount: string
  slippageBps?: number | undefined
  useCdpPaymaster?: boolean | undefined
  paymasterUrl?: {} | undefined
}
type SimulatePoliciesRequest =
  | SignEvmTransactionSimulationInput
  | SendEvmTransactionSimulationInput
  | SignEvmHashSimulationInput
  | SignEvmMessageSimulationInput
  | SignEvmTypedDataSimulationInput
  | PrepareUserOperationSimulationInput
  | SendUserOperationSimulationInput
  | SignSolTransactionSimulationInput
  | SendSolTransactionSimulationInput
  | SignSolMessageSimulationInput
  | SignEndUserEvmHashSimulationInput
  | SignEndUserEvmTransactionSimulationInput
  | SendEndUserEvmTransactionSimulationInput
  | SignEndUserEvmMessageSimulationInput
  | SignEndUserEvmTypedDataSimulationInput
  | SendEndUserOperationSimulationInput
  | SignEndUserSolTransactionSimulationInput
  | SendEndUserSolTransactionSimulationInput
  | SignEndUserSolMessageSimulationInput
  | SendEndUserEvmAssetSimulationInput
  | SendEndUserSolAssetSimulationInput
  | CreateEndUserEvmSwapSimulationInput
type EvaluatedPolicy = { id: string; scope: 'project' | 'account'; updatedAt: string }
type EthValueObservation = { type: 'ethValue'; ethValue: string }
type EvmAddressObservation = { type: 'evmAddress'; address?: string | undefined }
type EvmNetworkObservation = {
  type: 'evmNetwork'
  network?: string | undefined
  chainId?: number | undefined
}
type ObservedArgument = { name: string; type: string; value: string; truncated: boolean }
type EvmDataObservation = {
  type: 'evmData'
  selector?: string | undefined
  function?: string | undefined
  arguments: ObservedArgument[]
}
type ObservedMessageText = string
type ObservedMessageEncoding = 'utf8' | 'hex'
type EvmMessageObservation = {
  type: 'evmMessage'
  message: ObservedMessageText
  encoding: ObservedMessageEncoding
  truncated: boolean
}
type ObservedTypedDataField = {
  conditionIndex: number
  value?: string | undefined
  truncated: boolean
}
type EvmTypedDataFieldObservation = {
  type: 'evmTypedDataField'
  typesMatched: boolean
  fields: ObservedTypedDataField[]
}
type EvmTypedDataVerifyingContractObservation = {
  type: 'evmTypedDataVerifyingContract'
  address?: string | undefined
}
type NetUSDChangeObservation = {
  type: 'netUSDChange'
  skipped: boolean
  changeCents?: number | undefined
}
type SolAddressObservation = { type: 'solAddress'; addresses: string[] }
type SolValueObservation = { type: 'solValue'; solValues: string[] }
type SplAddressObservation = { type: 'splAddress'; addresses: string[] }
type SplValueObservation = { type: 'splValue'; splValues: string[] }
type MintAddressObservation = { type: 'mintAddress'; addresses: string[] }
type ObservedInstruction = {
  index: number
  programId: string
  instruction?: string | undefined
  arguments: ObservedArgument[]
}
type SolDataObservation = {
  type: 'solData'
  instructions: ObservedInstruction[]
  truncated: boolean
}
type SolMessageObservation = {
  type: 'solMessage'
  message: ObservedMessageText
  encoding: ObservedMessageEncoding
  truncated: boolean
}
type ProgramIdObservation = { type: 'programId'; programIds: string[] }
type SolNetworkObservation = { type: 'solNetwork'; network?: string | undefined }
type RateLimitCountUsage = { type: 'count'; windowCount: number; pendingCount: number }
type RateLimitValueUsage = {
  type: 'value'
  windowCents: number
  pendingCents: number
  operationCents: number
}
type RateLimitUsage = RateLimitCountUsage | RateLimitValueUsage
type RateLimitingObservation = {
  type: 'rateLimiting'
  scope: 'project' | 'end_user'
  usage: RateLimitUsage
}
type PolicyCriterionObservation =
  | EthValueObservation
  | EvmAddressObservation
  | EvmNetworkObservation
  | EvmDataObservation
  | EvmMessageObservation
  | EvmTypedDataFieldObservation
  | EvmTypedDataVerifyingContractObservation
  | NetUSDChangeObservation
  | SolAddressObservation
  | SolValueObservation
  | SplAddressObservation
  | SplValueObservation
  | MintAddressObservation
  | SolDataObservation
  | SolMessageObservation
  | ProgramIdObservation
  | SolNetworkObservation
  | RateLimitingObservation
type MatchedPolicyRule = {
  policy: EvaluatedPolicy
  ruleIndex: number
  rule: {}
  observations?: PolicyCriterionObservation[] | undefined
}
type PolicyCriterion =
  | EthValueCriterion
  | EvmAddressCriterion
  | EvmNetworkCriterion
  | EvmDataCriterion
  | EvmMessageCriterion
  | SignEvmTypedDataFieldCriterion
  | SignEvmTypedDataVerifyingContractCriterion
  | NetUSDChangeCriterion
  | SolAddressCriterion
  | SolValueCriterion
  | SplAddressCriterion
  | SplValueCriterion
  | MintAddressCriterion
  | SolDataCriterion
  | SolMessageCriterion
  | ProgramIdCriterion
  | SolNetworkCriterion
type UnmatchedPolicyRule = {
  policy: EvaluatedPolicy
  ruleIndex: number
  criterionIndex: number
  criterion: PolicyCriterion
  observed?: PolicyCriterionObservation | undefined
}
type EvaluatedUnit = { index: number; count: number; address?: string | undefined }
type PolicySimulationResult = {
  action: 'accept' | 'reject'
  reason: 'rule_accepted' | 'rule_rejected' | 'no_rule_matched' | 'no_rule_for_operation'
  matchedRule?: MatchedPolicyRule | undefined
  unmatchedRules: UnmatchedPolicyRule[]
  evaluatedPolicies: EvaluatedPolicy[]
  evaluatedUnit?: EvaluatedUnit | undefined
}
type PausePolicyRequest = { resumeAt?: string | undefined }
type SolanaAccount = {
  address: string
  name?: string | undefined
  policies?: string[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type ListSolanaTokenBalancesNetwork = 'solana' | 'solana-devnet'
type SolanaTokenAmount = { amount: string; decimals: bigint }
type SolanaToken = { symbol?: string | undefined; name?: string | undefined; mintAddress: string }
type SolanaTokenBalance = { amount: SolanaTokenAmount; token: SolanaToken }
type OnchainDataQuery = { sql: string; cache?: { maxAgeMs?: number | undefined } | undefined }
type OnchainDataResult = {
  result?: { [x: string]: unknown }[] | undefined
  schema?:
    | {
        columns?:
          | {
              name?: string | undefined
              type?:
                | 'String'
                | 'UInt8'
                | 'UInt16'
                | 'UInt32'
                | 'UInt64'
                | 'UInt128'
                | 'UInt256'
                | 'Int8'
                | 'Int16'
                | 'Int32'
                | 'Int64'
                | 'Int128'
                | 'Int256'
                | 'Float32'
                | 'Float64'
                | 'Bool'
                | 'Date'
                | 'DateTime'
                | 'DateTime64'
                | 'UUID'
                | undefined
            }[]
          | undefined
      }
    | undefined
  metadata?:
    | {
        cached?: boolean | undefined
        executionTimestamp?: string | undefined
        executionTimeMs?: number | undefined
        rowCount?: number | undefined
      }
    | undefined
}
type OnchainDataColumnSchema = {
  name?: string | undefined
  type?: string | undefined
  nullable?: boolean | undefined
  description?: {} | undefined
  indexOrder?: number | undefined
}
type OnchainDataTableSchema = {
  database?: string | undefined
  table?: string | undefined
  columns?: OnchainDataColumnSchema[] | undefined
}
type OnchainDataSchemaResponse = { tables?: OnchainDataTableSchema[] | undefined }
type AccountTokenAddressesResponse = {
  accountAddress?: string | undefined
  tokenAddresses?: string[] | undefined
  totalCount?: number | undefined
}
type WebhookDescription = string
type EventType =
  | 'onchain.activity.detected'
  | 'wallet.activity.detected'
  | 'wallet.activity.multi'
  | 'wallet.transaction.created'
  | 'wallet.transaction.signed'
  | 'wallet.transaction.broadcast'
  | 'wallet.transaction.replaced'
  | 'wallet.transaction.pending'
  | 'wallet.transaction.confirmed'
  | 'wallet.transaction.failed'
  | 'wallet.delegation.created'
  | 'wallet.delegation.revoked'
  | 'wallet.typed_data.signed'
  | 'wallet.message.signed'
  | 'wallet.hash.signed'
  | 'payments.transfers.quoted'
  | 'payments.transfers.processing'
  | 'payments.transfers.completed'
  | 'payments.transfers.failed'
  | 'payments.transfers.expired'
  | 'payments.transfers.travel_rule_incomplete'
  | 'payments.transfers.travel_rule_completed'
  | 'onramp.transaction.created'
  | 'onramp.transaction.updated'
  | 'onramp.transaction.success'
  | 'onramp.transaction.failed'
  | 'offramp.transaction.created'
  | 'offramp.transaction.updated'
  | 'offramp.transaction.success'
  | 'offramp.transaction.failed'
  | 'acceptance.payment_session.created'
  | 'acceptance.payment_session.canceled'
  | 'acceptance.payment_session.authorization_pending'
  | 'acceptance.payment_session.authorization_succeeded'
  | 'acceptance.payment_session.authorization_failed'
  | 'acceptance.payment_session.capture_pending'
  | 'acceptance.payment_session.capture_succeeded'
  | 'acceptance.payment_session.capture_failed'
  | 'acceptance.payment_session.refund_pending'
  | 'acceptance.payment_session.refund_succeeded'
  | 'acceptance.payment_session.refund_failed'
  | 'acceptance.payment_session.void_pending'
  | 'acceptance.payment_session.void_succeeded'
  | 'acceptance.payment_session.void_failed'
  | 'acceptance.mandate.created'
  | 'acceptance.mandate.canceled'
  | 'acceptance.mandate.approval_initiated'
  | 'acceptance.mandate.approval_succeeded'
  | 'acceptance.mandate.approval_failed'
  | 'acceptance.mandate.revocation_initiated'
  | 'acceptance.mandate.revocation_succeeded'
  | 'acceptance.mandate.revocation_failed'
  | 'acceptance.disbursement.pending'
  | 'acceptance.disbursement.succeeded'
  | 'acceptance.disbursement.failed'
  | 'acceptance.top_up_link.created'
  | 'acceptance.top_up_link.funds_added'
  | 'health.status.updated'
  | 'health.maintenance.scheduled'
  | 'health.maintenance.started'
  | 'health.maintenance.completed'
  | 'health.maintenance.canceled'
  | 'customers.capability.changed'
  | 'customers.customer.deleted'
  | 'customers.requirement.changed'
type WebhookTarget = { url: {}; headers?: { [x: string]: string } | undefined }
type WebhookResponseLabels = { [x: string]: string }
type WebhookSubscriptionResponse = {
  createdAt: string
  updatedAt?: string | undefined
  description?: WebhookDescription | undefined
  eventTypes: EventType[]
  isEnabled: boolean
  metadata?: { secret?: string | undefined } | undefined
  secret: string
  subscriptionId: string
  target: WebhookTarget
  labels?: WebhookResponseLabels | undefined
}
type WebhookSubscriptionListResponse = {
  subscriptions: WebhookSubscriptionResponse[]
  nextPageToken?: string | undefined
}
type WebhookMetadata = { [x: string]: string }
type WebhookRequestLabels = { [x: string]: string }
type WebhookSubscriptionRequest = {
  description?: WebhookDescription | undefined
  eventTypes: EventType[]
  isEnabled: boolean
  target: WebhookTarget
  metadata?: WebhookMetadata | undefined
  labels?: WebhookRequestLabels | undefined
}
type WebhookSubscriptionUpdateRequest = {
  description?: WebhookDescription | undefined
  eventTypes: EventType[]
  isEnabled: boolean
  target: WebhookTarget
  metadata?: WebhookMetadata | undefined
  labels?: WebhookRequestLabels | undefined
}
type WebhookEventResponseDetail = {
  httpCode?: number | undefined
  elapsedTimeMs?: number | undefined
  body?: string | undefined
  errorName?: string | undefined
}
type WebhookEventResponse = {
  eventId: string
  eventTypeName: string
  status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'retrying'
  createdAt: string
  succeededAt?: string | undefined
  retryCount: number
  response?: WebhookEventResponseDetail | undefined
}
type WebhookEventListResponse = { events: WebhookEventResponse[] }
type X402Version = 1 | 2
type X402ExactEvmPayload = {
  signature: string
  authorization: {
    from: string
    to: string
    value: string
    validAfter: string
    validBefore: string
    nonce: string
  }
}
type X402ExactEvmPermit2Payload = {
  signature: string
  permit2Authorization: {
    from: string
    permitted: { token: string; amount: string }
    spender: string
    nonce: string
    deadline: string
    witness: { to: string; validAfter: string; extra?: string | undefined }
  }
}
type X402ExactSolanaPayload = { transaction: string }
type X402UptoEvmPermit2Payload = {
  signature: string
  permit2Authorization: {
    from: string
    permitted: { token: string; amount: string }
    spender: string
    nonce: string
    deadline: string
    witness: { to: string; facilitator: string; validAfter: string }
  }
}
type X402BatchSettlementChannelConfig = {
  payer: string
  payerAuthorizer: string
  receiver: string
  receiverAuthorizer: string
  token: string
  withdrawDelay: number
  salt: string
}
type X402BatchSettlementVoucher = {
  channelId: string
  maxClaimableAmount: string
  signature: string
}
type X402BatchSettlementDepositPayload = {
  type: 'deposit'
  channelConfig: X402BatchSettlementChannelConfig
  voucher: X402BatchSettlementVoucher
  deposit: {
    amount: string
    authorization: {
      erc3009Authorization?:
        | { validAfter: string; validBefore: string; salt: string; signature: string }
        | undefined
    }
  }
}
type X402BatchSettlementVoucherPayload = {
  type: 'voucher'
  channelConfig: X402BatchSettlementChannelConfig
  voucher: X402BatchSettlementVoucher
}
type X402BatchSettlementClaim = {
  voucher: { channel: X402BatchSettlementChannelConfig; maxClaimableAmount: string }
  signature: string
  totalClaimed: string
}
type X402BatchSettlementRefundPayload = {
  type: 'refund'
  channelConfig: X402BatchSettlementChannelConfig
  voucher: X402BatchSettlementVoucher
  amount?: string | undefined
  refundNonce?: string | undefined
  claims?: X402BatchSettlementClaim[] | undefined
  refundAuthorizerSignature?: string | undefined
  claimAuthorizerSignature?: string | undefined
}
type X402BatchSettlementClaimPayload = {
  type: 'claim'
  claims: X402BatchSettlementClaim[]
  claimAuthorizerSignature?: string | undefined
}
type X402BatchSettlementSettlePayload = { type: 'settle'; receiver: string; token: string }
type X402BatchSettlementEvmPayload =
  | X402BatchSettlementDepositPayload
  | X402BatchSettlementVoucherPayload
  | X402BatchSettlementRefundPayload
  | X402BatchSettlementClaimPayload
  | X402BatchSettlementSettlePayload
type X402ResourceInfo = {
  url?: string | undefined
  description?: {} | undefined
  mimeType?: string | undefined
}
type X402V2PaymentPayload = {
  x402Version: {}
  payload:
    | X402ExactEvmPayload
    | X402ExactEvmPermit2Payload
    | X402ExactSolanaPayload
    | X402UptoEvmPermit2Payload
    | X402BatchSettlementEvmPayload
  accepted: X402V2PaymentRequirements
  resource?: X402ResourceInfo | undefined
  extensions?: { [x: string]: unknown } | undefined
}
type X402V1PaymentPayload = {
  x402Version: {}
  scheme: 'exact'
  network: {}
  payload: X402ExactEvmPayload | X402ExactEvmPermit2Payload | X402ExactSolanaPayload
}
type X402PaymentPayload = X402V2PaymentPayload | X402V1PaymentPayload
type X402VerifyInvalidReason =
  | 'insufficient_funds'
  | 'invalid_scheme'
  | 'invalid_network'
  | 'invalid_x402_version'
  | 'invalid_payment_requirements'
  | 'invalid_payload'
  | 'invalid_exact_evm_payload_authorization_value'
  | 'invalid_exact_evm_payload_authorization_value_too_low'
  | 'invalid_exact_evm_payload_authorization_valid_after'
  | 'invalid_exact_evm_payload_authorization_valid_before'
  | 'invalid_exact_evm_payload_authorization_typed_data_message'
  | 'invalid_exact_evm_payload_authorization_from_address_kyt'
  | 'invalid_exact_evm_payload_authorization_to_address_kyt'
  | 'invalid_exact_evm_payload_signature'
  | 'invalid_exact_evm_payload_signature_address'
  | 'invalid_exact_evm_permit2_payload_allowance_required'
  | 'invalid_exact_evm_permit2_payload_signature'
  | 'invalid_exact_evm_permit2_payload_deadline'
  | 'invalid_exact_evm_permit2_payload_valid_after'
  | 'invalid_exact_evm_permit2_payload_spender'
  | 'invalid_exact_evm_permit2_payload_recipient'
  | 'invalid_exact_evm_permit2_payload_amount'
  | 'invalid_exact_svm_payload_transaction'
  | 'invalid_exact_svm_payload_transaction_amount_mismatch'
  | 'invalid_exact_svm_payload_transaction_create_ata_instruction'
  | 'invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee'
  | 'invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset'
  | 'invalid_exact_svm_payload_transaction_instructions'
  | 'invalid_exact_svm_payload_transaction_instructions_length'
  | 'invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction'
  | 'invalid_exact_svm_payload_transaction_instructions_compute_price_instruction'
  | 'invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high'
  | 'invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked'
  | 'invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked'
  | 'invalid_exact_svm_payload_transaction_not_a_transfer_instruction'
  | 'invalid_exact_svm_payload_transaction_cannot_derive_receiver_ata'
  | 'invalid_exact_svm_payload_transaction_receiver_ata_not_found'
  | 'invalid_exact_svm_payload_transaction_sender_ata_not_found'
  | 'invalid_exact_svm_payload_transaction_simulation_failed'
  | 'invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata'
  | 'invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts'
  | 'invalid_exact_svm_payload_transaction_fee_payer_transferring_funds'
  | 'invalid_batch_settlement_evm_scheme'
  | 'invalid_batch_settlement_evm_network_mismatch'
  | 'invalid_batch_settlement_evm_payload_type'
  | 'invalid_batch_settlement_evm_channel_not_found'
  | 'invalid_batch_settlement_evm_deposit_simulation_failed'
  | 'invalid_batch_settlement_evm_channel_id_mismatch'
  | 'invalid_batch_settlement_evm_channel_state_read_failed'
  | 'invalid_batch_settlement_evm_cumulative_below_claimed'
  | 'invalid_batch_settlement_evm_cumulative_exceeds_balance'
  | 'invalid_batch_settlement_evm_eip2612_amount_mismatch'
  | 'invalid_batch_settlement_evm_eip2612_asset_mismatch'
  | 'invalid_batch_settlement_evm_eip2612_deadline_expired'
  | 'invalid_batch_settlement_evm_eip2612_invalid_format'
  | 'invalid_batch_settlement_evm_eip2612_invalid_signature'
  | 'invalid_batch_settlement_evm_eip2612_owner_mismatch'
  | 'invalid_batch_settlement_evm_eip2612_spender_mismatch'
  | 'invalid_batch_settlement_evm_erc20_approval_asset_mismatch'
  | 'invalid_batch_settlement_evm_erc20_approval_from_mismatch'
  | 'invalid_batch_settlement_evm_erc20_approval_invalid_format'
  | 'invalid_batch_settlement_evm_erc20_approval_unavailable'
  | 'invalid_batch_settlement_evm_erc20_approval_wrong_spender'
  | 'invalid_batch_settlement_evm_erc3009_authorization_required'
  | 'invalid_batch_settlement_evm_insufficient_balance'
  | 'invalid_batch_settlement_evm_deposit_payload'
  | 'invalid_batch_settlement_evm_receive_authorization_signature'
  | 'invalid_batch_settlement_evm_refund_payload'
  | 'invalid_batch_settlement_evm_voucher_payload'
  | 'invalid_batch_settlement_evm_voucher_signature'
  | 'invalid_batch_settlement_evm_missing_eip712_domain'
  | 'invalid_batch_settlement_evm_payload_authorization_valid_after'
  | 'invalid_batch_settlement_evm_payload_authorization_valid_before'
  | 'invalid_batch_settlement_evm_permit2_allowance_required'
  | 'invalid_batch_settlement_evm_permit2_amount_mismatch'
  | 'invalid_batch_settlement_evm_permit2_authorization_required'
  | 'invalid_batch_settlement_evm_permit2_deadline_expired'
  | 'invalid_batch_settlement_evm_permit2_invalid_signature'
  | 'invalid_batch_settlement_evm_permit2_invalid_spender'
  | 'invalid_batch_settlement_evm_receiver_authorizer_mismatch'
  | 'invalid_batch_settlement_evm_receiver_mismatch'
  | 'invalid_batch_settlement_evm_rpc_read_failed'
  | 'invalid_batch_settlement_evm_token_mismatch'
  | 'invalid_batch_settlement_evm_withdraw_delay_mismatch'
  | 'invalid_batch_settlement_evm_withdraw_delay_out_of_range'
  | 'invalid_exact_evm_scheme'
  | 'invalid_exact_evm_network_mismatch'
  | 'invalid_exact_evm_payload'
  | 'invalid_exact_evm_payload_missing_signature'
  | 'invalid_exact_evm_failed_to_get_network_config'
  | 'invalid_exact_evm_missing_eip712_domain'
  | 'invalid_exact_evm_recipient_mismatch'
  | 'invalid_exact_evm_authorization_value'
  | 'invalid_exact_evm_required_amount'
  | 'invalid_exact_evm_payload_authorization_value_mismatch'
  | 'invalid_exact_evm_failed_to_check_nonce'
  | 'invalid_exact_evm_nonce_already_used'
  | 'invalid_exact_evm_failed_to_get_balance'
  | 'invalid_exact_evm_insufficient_balance'
  | 'invalid_exact_evm_signature_format'
  | 'invalid_exact_evm_failed_to_verify_signature'
  | 'invalid_exact_evm_signature'
  | 'invalid_exact_evm_token_name_mismatch'
  | 'invalid_exact_evm_token_version_mismatch'
  | 'invalid_exact_evm_eip3009_not_supported'
  | 'invalid_exact_evm_transaction_simulation_failed'
  | 'invalid_exact_evm_verification_failed'
  | 'invalid_exact_evm_failed_to_parse_signature'
  | 'invalid_exact_evm_failed_to_check_deployment'
  | 'invalid_exact_evm_failed_to_execute_transfer'
  | 'invalid_exact_evm_failed_to_get_receipt'
  | 'invalid_exact_evm_transaction_failed'
  | 'invalid_exact_evm_payload_undeployed_smart_wallet'
  | 'smart_wallet_deployment_failed'
  | 'unsupported_payload_type'
  | 'invalid_erc20_approval_extension_format'
  | 'erc20_approval_tx_failed'
  | 'erc20_approval_from_mismatch'
  | 'erc20_approval_asset_mismatch'
  | 'erc20_approval_spender_not_permit2'
  | 'erc20_approval_tx_parse_failed'
  | 'erc20_approval_tx_wrong_target'
  | 'erc20_approval_tx_wrong_selector'
  | 'erc20_approval_tx_wrong_spender'
  | 'erc20_approval_tx_signer_mismatch'
  | 'erc20_approval_tx_invalid_signature'
  | 'invalid_exact_evm_unsupported_scheme'
  | 'invalid_exact_evm_extra_field'
  | 'invalid_exact_evm_payload_recipient_mismatch'
  | 'invalid_exact_evm_insufficient_funds'
  | 'invalid_exact_evm_transaction_state'
  | 'invalid_permit2_spender'
  | 'invalid_permit2_recipient_mismatch'
  | 'permit2_deadline_expired'
  | 'permit2_not_yet_valid'
  | 'permit2_amount_mismatch'
  | 'permit2_token_mismatch'
  | 'invalid_permit2_signature'
  | 'permit2_allowance_required'
  | 'permit2_invalid_amount'
  | 'permit2_invalid_destination'
  | 'permit2_invalid_owner'
  | 'permit2_payment_too_early'
  | 'permit2_invalid_nonce'
  | 'permit2_2612_amount_mismatch'
  | 'permit2_simulation_failed'
  | 'permit2_insufficient_balance'
  | 'permit2_proxy_not_deployed'
  | 'erc20_approval_insufficient_eth_for_gas'
  | 'erc20_approval_broadcast_failed'
  | 'invalid_exact_solana_unsupported_scheme'
  | 'invalid_exact_solana_network_mismatch'
  | 'invalid_exact_solana_payload_missing_fee_payer'
  | 'invalid_exact_solana_fee_payer_not_managed_by_facilitator'
  | 'invalid_exact_solana_payload_transaction'
  | 'invalid_exact_solana_payload_transaction_could_not_be_decoded'
  | 'invalid_exact_solana_payload_transaction_instructions_length'
  | 'invalid_exact_solana_payload_unknown_fourth_instruction'
  | 'invalid_exact_solana_payload_unknown_fifth_instruction'
  | 'invalid_exact_solana_payload_unknown_sixth_instruction'
  | 'invalid_exact_solana_payload_transaction_instructions_compute_limit_instruction'
  | 'invalid_exact_solana_payload_transaction_instructions_compute_price_instruction'
  | 'invalid_exact_solana_payload_transaction_instructions_compute_price_instruction_too_high'
  | 'invalid_exact_solana_payload_no_transfer_instruction'
  | 'invalid_exact_solana_payload_transaction_fee_payer_transferring_funds'
  | 'invalid_exact_solana_payload_mint_mismatch'
  | 'invalid_exact_solana_payload_recipient_mismatch'
  | 'invalid_exact_solana_payload_amount_insufficient'
  | 'invalid_exact_solana_invalid_fee_payer'
  | 'invalid_exact_solana_transaction_signing_failed'
  | 'invalid_exact_solana_transaction_simulation_failed'
  | 'invalid_exact_solana_payload_memo_mismatch'
  | 'invalid_exact_solana_payload_memo_count'
  | 'invalid_exact_solana_verification_failed'
  | 'invalid_exact_solana_fee_payer_mismatch'
  | 'invalid_exact_solana_transaction_failed'
  | 'invalid_exact_solana_transaction_confirmation_failed'
  | 'duplicate_settlement'
  | 'invalid_exact_solana_extra_field'
  | 'batch_settlement_cumulative_amount_mismatch'
  | 'batch_settlement_channel_busy'
  | 'missing_batch_settlement_channel'
  | 'batch_settlement_charge_exceeds_signed_cumulative'
  | 'batch_settlement_refund_no_balance'
  | 'batch_settlement_refund_amount_invalid'
  | 'batch_settlement_refund_amount_exceeds_balance'
  | 'amount_too_low'
  | 'invalid_amount'
  | 'kyt_risk_detected'
  | 'permit2_disabled'
  | 'preflight_validation_failed'
  | 'request_blocked_by_location'
  | 'self_send_not_allowed'
  | 'invalid_bazaar_extension'
  | 'node_failure'
  | 'unknown_error'
type X402VerifyPaymentRejection = {
  isValid: boolean
  invalidReason: X402VerifyInvalidReason
  invalidMessage?: string | undefined
  payer?: {} | undefined
}
type X402SettleErrorReason =
  | 'insufficient_funds'
  | 'invalid_scheme'
  | 'invalid_network'
  | 'invalid_x402_version'
  | 'invalid_payment_requirements'
  | 'invalid_payload'
  | 'invalid_exact_evm_payload_authorization_value'
  | 'invalid_exact_evm_payload_authorization_value_too_low'
  | 'invalid_exact_evm_payload_authorization_valid_after'
  | 'invalid_exact_evm_payload_authorization_valid_before'
  | 'invalid_exact_evm_payload_authorization_typed_data_message'
  | 'invalid_exact_evm_payload_authorization_from_address_kyt'
  | 'invalid_exact_evm_payload_authorization_to_address_kyt'
  | 'invalid_exact_evm_payload_signature'
  | 'invalid_exact_evm_payload_signature_address'
  | 'invalid_exact_evm_permit2_payload_allowance_required'
  | 'invalid_exact_evm_permit2_payload_signature'
  | 'invalid_exact_evm_permit2_payload_deadline'
  | 'invalid_exact_evm_permit2_payload_valid_after'
  | 'invalid_exact_evm_permit2_payload_spender'
  | 'invalid_exact_evm_permit2_payload_recipient'
  | 'invalid_exact_evm_permit2_payload_amount'
  | 'invalid_exact_svm_payload_transaction'
  | 'invalid_exact_svm_payload_transaction_amount_mismatch'
  | 'invalid_exact_svm_payload_transaction_create_ata_instruction'
  | 'invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee'
  | 'invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset'
  | 'invalid_exact_svm_payload_transaction_instructions'
  | 'invalid_exact_svm_payload_transaction_instructions_length'
  | 'invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction'
  | 'invalid_exact_svm_payload_transaction_instructions_compute_price_instruction'
  | 'invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high'
  | 'invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked'
  | 'invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked'
  | 'invalid_exact_svm_payload_transaction_not_a_transfer_instruction'
  | 'invalid_exact_svm_payload_transaction_cannot_derive_receiver_ata'
  | 'invalid_exact_svm_payload_transaction_receiver_ata_not_found'
  | 'invalid_exact_svm_payload_transaction_sender_ata_not_found'
  | 'invalid_exact_svm_payload_transaction_simulation_failed'
  | 'invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata'
  | 'invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts'
  | 'invalid_exact_svm_payload_transaction_fee_payer_transferring_funds'
  | 'settle_exact_evm_transaction_confirmation_timed_out'
  | 'settle_exact_node_failure'
  | 'settle_exact_failed_onchain'
  | 'settle_exact_svm_block_height_exceeded'
  | 'settle_exact_svm_transaction_confirmation_timed_out'
  | 'settlement_pending'
  | 'invalid_batch_settlement_evm_unknown_settle_action'
  | 'invalid_batch_settlement_evm_claim_payload'
  | 'invalid_batch_settlement_evm_settle_payload'
  | 'invalid_batch_settlement_evm_authorizer_address_mismatch'
  | 'invalid_batch_settlement_evm_claim_simulation_failed'
  | 'invalid_batch_settlement_evm_claim_transaction_failed'
  | 'invalid_batch_settlement_evm_deposit_transaction_failed'
  | 'invalid_batch_settlement_evm_refund_simulation_failed'
  | 'invalid_batch_settlement_evm_refund_transaction_failed'
  | 'invalid_batch_settlement_evm_settle_simulation_failed'
  | 'invalid_batch_settlement_evm_settle_transaction_failed'
  | 'invalid_batch_settlement_evm_transaction_reverted'
  | 'invalid_batch_settlement_evm_wait_for_receipt_failed'
  | 'invalid_batch_settlement_evm_erc20_approval_broadcast_failed'
  | 'invalid_batch_settlement_evm_channel_id_mismatch'
  | 'invalid_batch_settlement_evm_channel_state_read_failed'
  | 'invalid_batch_settlement_evm_cumulative_below_claimed'
  | 'invalid_batch_settlement_evm_cumulative_exceeds_balance'
  | 'invalid_batch_settlement_evm_eip2612_amount_mismatch'
  | 'invalid_batch_settlement_evm_eip2612_asset_mismatch'
  | 'invalid_batch_settlement_evm_eip2612_deadline_expired'
  | 'invalid_batch_settlement_evm_eip2612_invalid_format'
  | 'invalid_batch_settlement_evm_eip2612_invalid_signature'
  | 'invalid_batch_settlement_evm_eip2612_owner_mismatch'
  | 'invalid_batch_settlement_evm_eip2612_spender_mismatch'
  | 'invalid_batch_settlement_evm_erc20_approval_asset_mismatch'
  | 'invalid_batch_settlement_evm_erc20_approval_from_mismatch'
  | 'invalid_batch_settlement_evm_erc20_approval_invalid_format'
  | 'invalid_batch_settlement_evm_erc20_approval_unavailable'
  | 'invalid_batch_settlement_evm_erc20_approval_wrong_spender'
  | 'invalid_batch_settlement_evm_erc3009_authorization_required'
  | 'invalid_batch_settlement_evm_insufficient_balance'
  | 'invalid_batch_settlement_evm_deposit_payload'
  | 'invalid_batch_settlement_evm_receive_authorization_signature'
  | 'invalid_batch_settlement_evm_refund_payload'
  | 'invalid_batch_settlement_evm_voucher_payload'
  | 'invalid_batch_settlement_evm_voucher_signature'
  | 'invalid_batch_settlement_evm_missing_eip712_domain'
  | 'invalid_batch_settlement_evm_payload_authorization_valid_after'
  | 'invalid_batch_settlement_evm_payload_authorization_valid_before'
  | 'invalid_batch_settlement_evm_permit2_allowance_required'
  | 'invalid_batch_settlement_evm_permit2_amount_mismatch'
  | 'invalid_batch_settlement_evm_permit2_authorization_required'
  | 'invalid_batch_settlement_evm_permit2_deadline_expired'
  | 'invalid_batch_settlement_evm_permit2_invalid_signature'
  | 'invalid_batch_settlement_evm_permit2_invalid_spender'
  | 'invalid_batch_settlement_evm_receiver_authorizer_mismatch'
  | 'invalid_batch_settlement_evm_receiver_mismatch'
  | 'invalid_batch_settlement_evm_rpc_read_failed'
  | 'invalid_batch_settlement_evm_token_mismatch'
  | 'invalid_batch_settlement_evm_withdraw_delay_mismatch'
  | 'invalid_batch_settlement_evm_withdraw_delay_out_of_range'
  | 'invalid_batch_settlement_evm_scheme'
  | 'invalid_batch_settlement_evm_network_mismatch'
  | 'invalid_batch_settlement_evm_payload_type'
  | 'invalid_batch_settlement_evm_channel_not_found'
  | 'invalid_batch_settlement_evm_deposit_simulation_failed'
  | 'invalid_exact_evm_scheme'
  | 'invalid_exact_evm_network_mismatch'
  | 'invalid_exact_evm_payload'
  | 'invalid_exact_evm_payload_missing_signature'
  | 'invalid_exact_evm_failed_to_get_network_config'
  | 'invalid_exact_evm_missing_eip712_domain'
  | 'invalid_exact_evm_recipient_mismatch'
  | 'invalid_exact_evm_authorization_value'
  | 'invalid_exact_evm_required_amount'
  | 'invalid_exact_evm_payload_authorization_value_mismatch'
  | 'invalid_exact_evm_failed_to_check_nonce'
  | 'invalid_exact_evm_nonce_already_used'
  | 'invalid_exact_evm_failed_to_get_balance'
  | 'invalid_exact_evm_insufficient_balance'
  | 'invalid_exact_evm_signature_format'
  | 'invalid_exact_evm_failed_to_verify_signature'
  | 'invalid_exact_evm_signature'
  | 'invalid_exact_evm_token_name_mismatch'
  | 'invalid_exact_evm_token_version_mismatch'
  | 'invalid_exact_evm_eip3009_not_supported'
  | 'invalid_exact_evm_transaction_simulation_failed'
  | 'invalid_exact_evm_verification_failed'
  | 'invalid_exact_evm_failed_to_parse_signature'
  | 'invalid_exact_evm_failed_to_check_deployment'
  | 'invalid_exact_evm_failed_to_execute_transfer'
  | 'invalid_exact_evm_failed_to_get_receipt'
  | 'invalid_exact_evm_transaction_failed'
  | 'invalid_exact_evm_payload_undeployed_smart_wallet'
  | 'smart_wallet_deployment_failed'
  | 'unsupported_payload_type'
  | 'invalid_erc20_approval_extension_format'
  | 'erc20_approval_tx_failed'
  | 'erc20_approval_from_mismatch'
  | 'erc20_approval_asset_mismatch'
  | 'erc20_approval_spender_not_permit2'
  | 'erc20_approval_tx_parse_failed'
  | 'erc20_approval_tx_wrong_target'
  | 'erc20_approval_tx_wrong_selector'
  | 'erc20_approval_tx_wrong_spender'
  | 'erc20_approval_tx_signer_mismatch'
  | 'erc20_approval_tx_invalid_signature'
  | 'invalid_exact_evm_unsupported_scheme'
  | 'invalid_exact_evm_extra_field'
  | 'invalid_exact_evm_payload_recipient_mismatch'
  | 'invalid_exact_evm_insufficient_funds'
  | 'invalid_exact_evm_transaction_state'
  | 'invalid_permit2_spender'
  | 'invalid_permit2_recipient_mismatch'
  | 'permit2_deadline_expired'
  | 'permit2_not_yet_valid'
  | 'permit2_amount_mismatch'
  | 'permit2_token_mismatch'
  | 'invalid_permit2_signature'
  | 'permit2_allowance_required'
  | 'permit2_invalid_amount'
  | 'permit2_invalid_destination'
  | 'permit2_invalid_owner'
  | 'permit2_payment_too_early'
  | 'permit2_invalid_nonce'
  | 'permit2_2612_amount_mismatch'
  | 'permit2_simulation_failed'
  | 'permit2_insufficient_balance'
  | 'permit2_proxy_not_deployed'
  | 'erc20_approval_insufficient_eth_for_gas'
  | 'erc20_approval_broadcast_failed'
  | 'invalid_exact_solana_unsupported_scheme'
  | 'invalid_exact_solana_network_mismatch'
  | 'invalid_exact_solana_payload_missing_fee_payer'
  | 'invalid_exact_solana_fee_payer_not_managed_by_facilitator'
  | 'invalid_exact_solana_payload_transaction'
  | 'invalid_exact_solana_payload_transaction_could_not_be_decoded'
  | 'invalid_exact_solana_payload_transaction_instructions_length'
  | 'invalid_exact_solana_payload_unknown_fourth_instruction'
  | 'invalid_exact_solana_payload_unknown_fifth_instruction'
  | 'invalid_exact_solana_payload_unknown_sixth_instruction'
  | 'invalid_exact_solana_payload_transaction_instructions_compute_limit_instruction'
  | 'invalid_exact_solana_payload_transaction_instructions_compute_price_instruction'
  | 'invalid_exact_solana_payload_transaction_instructions_compute_price_instruction_too_high'
  | 'invalid_exact_solana_payload_no_transfer_instruction'
  | 'invalid_exact_solana_payload_transaction_fee_payer_transferring_funds'
  | 'invalid_exact_solana_payload_mint_mismatch'
  | 'invalid_exact_solana_payload_recipient_mismatch'
  | 'invalid_exact_solana_payload_amount_insufficient'
  | 'invalid_exact_solana_invalid_fee_payer'
  | 'invalid_exact_solana_transaction_signing_failed'
  | 'invalid_exact_solana_transaction_simulation_failed'
  | 'invalid_exact_solana_payload_memo_mismatch'
  | 'invalid_exact_solana_payload_memo_count'
  | 'invalid_exact_solana_verification_failed'
  | 'invalid_exact_solana_fee_payer_mismatch'
  | 'invalid_exact_solana_transaction_failed'
  | 'invalid_exact_solana_transaction_confirmation_failed'
  | 'duplicate_settlement'
  | 'invalid_exact_solana_extra_field'
  | 'batch_settlement_cumulative_amount_mismatch'
  | 'batch_settlement_channel_busy'
  | 'missing_batch_settlement_channel'
  | 'batch_settlement_charge_exceeds_signed_cumulative'
  | 'batch_settlement_refund_no_balance'
  | 'batch_settlement_refund_amount_invalid'
  | 'batch_settlement_refund_amount_exceeds_balance'
  | 'amount_too_low'
  | 'invalid_amount'
  | 'kyt_risk_detected'
  | 'permit2_disabled'
  | 'preflight_validation_failed'
  | 'request_blocked_by_location'
  | 'self_send_not_allowed'
  | 'invalid_bazaar_extension'
  | 'unknown_error'
type X402SettlePaymentRejection = {
  success: boolean
  errorReason: X402SettleErrorReason
  errorMessage?: string | undefined
  payer?: {} | undefined
  transaction?: string | undefined
  network?: string | undefined
}
type X402SupportedPaymentKind = {
  x402Version: X402Version
  scheme: 'exact' | 'upto' | 'batch-settlement'
  network:
    | 'base-sepolia'
    | 'base'
    | 'solana-devnet'
    | 'solana'
    | 'eip155:8453'
    | 'eip155:84532'
    | 'eip155:137'
    | 'eip155:42161'
    | 'eip155:143'
    | 'eip155:480'
    | 'eip155:4801'
    | 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp'
    | 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1'
  extra?: { [x: string]: unknown } | undefined
}
type X402ResourceQuality = {
  l30DaysTotalCalls?: number | undefined
  l30DaysUniquePayers?: number | undefined
  lastCalledAt?: string | undefined
}
type X402DiscoveryResource = {
  resource: string
  description?: string | undefined
  type: 'http' | 'mcp'
  x402Version: X402Version
  lastUpdated?: string | undefined
  accepts?: X402PaymentRequirements[] | undefined
  extensions?: { [x: string]: unknown } | undefined
  quality?: X402ResourceQuality | undefined
  serviceName?: string | undefined
  tags?: string[] | undefined
  bundleSlugs?: string[] | undefined
  iconUrl?: {} | undefined
  curated?: boolean | undefined
  skillUrl?: {} | undefined
}
type X402DiscoveryResourcesResponse = {
  x402Version: X402Version
  items: X402DiscoveryResource[]
  pagination: {
    limit?: number | undefined
    offset?: number | undefined
    total?: number | undefined
  }
}
type X402DiscoveryMerchantResponse = {
  x402Version: X402Version
  payTo: BlockchainAddress
  resources: X402DiscoveryResource[]
  pagination: {
    limit?: number | undefined
    offset?: number | undefined
    total?: number | undefined
  }
}
type X402SearchResourcesResponse = {
  resources: X402DiscoveryResource[]
  partialResults: boolean
  searchMethod?: 'text' | 'vector' | 'hybrid' | undefined
  x402Version: X402Version
}
type X402McpRequest = {
  jsonrpc: '2.0'
  id?: string | number | undefined
  method: string
  params?: { [x: string]: unknown } | undefined
}
type X402McpError = { code: number; message: string; data?: { [x: string]: unknown } | undefined }
type X402McpResponse = {
  jsonrpc: '2.0'
  id?: string | number | undefined
  result?: { [x: string]: unknown } | undefined
  error?: X402McpError | undefined
}
type X402Bundle = { slug: string; name: string; description?: string | undefined }
type X402BundlesResponse = { bundles: X402Bundle[] }
type X402BundleResponse = {
  slug: string
  name: string
  description?: string | undefined
  resources: X402DiscoveryResource[]
}
type X402ValidateRequest = { resource: {}; method?: 'GET' | 'POST' | undefined }
type X402ValidateCheck = {
  check: 'reachable' | 'returns_402' | 'has_bazaar_extension' | 'parse'
  passed: boolean
  detail: string
  expected?: string | undefined
  actual?: string | undefined
  severity: 'required' | 'advisory'
}
type X402ValidateSimulation = {
  outcome: 'accepted' | 'rejected'
  rejectionReason?: string | undefined
}
type X402ValidateResponse = {
  valid: boolean
  statusCode: number | null
  x402Version: number | null
  preflight: X402ValidateCheck[]
  paymentRequirements: {}
  bazaarExtension: { [x: string]: unknown } | null
  simulation: X402ValidateSimulation
  index: {
    active: boolean
    lastCrawledAt: string | null
    quality?:
      | {
          l30DaysTotalCalls?: number | undefined
          l30DaysUniquePayers?: number | undefined
          lastCalledAt?: string | undefined
        }
      | undefined
  }
}
type InitiateOnrampVerificationRequest = {
  channel: 'sms' | 'email'
  destination: PhoneNumber | Email
}
type OnrampVerificationInitiation = { verificationId: {}; otpExpiresAt: string }
type OnrampVerificationId = string
type SubmitOnrampVerificationRequest = { otpCode: string }
type OnrampVerificationConfirmation = { verificationId: {}; verificationExpiresAt: string }
type OnrampOrderPaymentMethodTypeId = 'GUEST_CHECKOUT_APPLE_PAY' | 'GUEST_CHECKOUT_GOOGLE_PAY'
type OnrampOrderFee = {
  type: 'FEE_TYPE_NETWORK' | 'FEE_TYPE_EXCHANGE'
  amount: string
  currency: string
}
type OnrampOrderStatus =
  | 'ONRAMP_ORDER_STATUS_PENDING_AUTH'
  | 'ONRAMP_ORDER_STATUS_PENDING_VERIFICATION'
  | 'ONRAMP_ORDER_STATUS_PENDING_PAYMENT'
  | 'ONRAMP_ORDER_STATUS_PROCESSING'
  | 'ONRAMP_ORDER_STATUS_COMPLETED'
  | 'ONRAMP_ORDER_STATUS_FAILED'
type OnrampOrder = {
  orderId: string
  paymentTotal: string
  paymentSubtotal: string
  paymentCurrency: string
  paymentMethod: OnrampOrderPaymentMethodTypeId
  purchaseAmount: string
  purchaseCurrency: string
  fees: OnrampOrderFee[]
  exchangeRate: string
  destinationAddress: {}
  destinationNetwork: string
  status: OnrampOrderStatus
  txHash?: string | undefined
  createdAt: string
  updatedAt: string
  partnerUserRef?: string | undefined
  partnerId?: string | undefined
}
type OnrampPaymentLinkType =
  | 'PAYMENT_LINK_TYPE_APPLE_PAY_BUTTON'
  | 'PAYMENT_LINK_TYPE_GOOGLE_PAY_BUTTON'
  | 'PAYMENT_LINK_TYPE_EMBEDDED_ORDER'
type OnrampPaymentLink = { url: {}; paymentLinkType: OnrampPaymentLinkType }
type OnrampQuotePaymentMethodTypeId =
  | 'CARD'
  | 'ACH'
  | 'APPLE_PAY'
  | 'PAYPAL'
  | 'FIAT_WALLET'
  | 'CRYPTO_WALLET'
type OnrampSessionRequest = {
  purchaseCurrency: string
  destinationNetwork: string
  destinationAddress: {}
  paymentAmount?: string | undefined
  purchaseAmount?: string | undefined
  paymentCurrency?: string | undefined
  paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
  country?: string | undefined
  subdivision?: string | undefined
  redirectUrl?: {} | undefined
  clientIp?: string | undefined
  partnerUserRef?: string | undefined
}
type OnrampSession = { onrampUrl: {} }
type OnrampQuote = {
  paymentTotal: string
  paymentSubtotal: string
  paymentCurrency: string
  purchaseAmount: string
  purchaseCurrency: string
  destinationNetwork: string
  fees: OnrampOrderFee[]
  exchangeRate: string
}
type OnrampMobileChallenge = { challenge: {}; expiresAt: string }
type CreateOnrampMobileSessionRequest = { [x: string]: unknown } | { [x: string]: unknown }
type IosAttestationChallenge = { challenge: string; expiresAt: string }
type IosBundleId = string
type IosAttestationPayload = { keyId: string; attestation: string; bundleId: IosBundleId }
type IosAttestationRegistrationRequest = { challenge: string; ios: IosAttestationPayload }
type IosAttestationRegistrationResponse = {
  keyId: string
  platform: 'ios'
  appId: string
  attestedAt: string
}
type OnrampUserIdType = 'phone_number'
type OnrampLimitType = 'weekly_spending' | 'lifetime_transactions'
type OnrampUserLimit = {
  limitType: OnrampLimitType
  currency?: string | undefined
  limit: string
  remaining: string
}
type OnrampLimitUpgradeStatus = 'unrequested' | 'resubmit' | 'pending' | 'active' | 'inactive'
type OnrampLimitUpgradeIdentityFieldKey = 'ssnLast4' | 'dateOfBirth'
type OnrampLimitUpgrade = { limitType: OnrampLimitType; maxUpgrade: string }
type OnrampLimitUpgradeOption = {
  status: OnrampLimitUpgradeStatus
  fields: OnrampLimitUpgradeIdentityFieldKey[]
  limitUpgrades: OnrampLimitUpgrade[]
}
type OnrampLimitUpgradeIdentityFields = {
  ssnLast4?: string | undefined
  dateOfBirth?:
    | { day?: string | undefined; month?: string | undefined; year?: string | undefined }
    | undefined
}
type OnrampLimitUpgradeRequest = {
  userId: string
  userIdType: OnrampUserIdType
  interactionMode?: {} | undefined
  fields?: OnrampLimitUpgradeIdentityFields | undefined
}
type OnrampLimitUpgradeEmbeddedResponse = { upgradeUrl: {}; expiresAt: string }
type PaymentMethodId = string
type FedwirePaymentMethod = {
  paymentMethodId: PaymentMethodId
  active: boolean
  createdAt: string
  updatedAt: string
  paymentRail: 'fedwire'
  fedwire: { asset: string; bankName: string; accountLast4: string; routingNumber: string }
}
type SwiftPaymentMethod = {
  paymentMethodId: PaymentMethodId
  active: boolean
  createdAt: string
  updatedAt: string
  paymentRail: 'swift'
  swift: {
    asset: string
    bankName: string
    accountLast4: string
    ibanLast4?: string | undefined
    bic: string
  }
}
type SepaPaymentMethod = {
  paymentMethodId: PaymentMethodId
  active: boolean
  createdAt: string
  updatedAt: string
  paymentRail: 'sepa'
  sepa: { asset: string; bankName: string; ibanLast4: string; bic: string }
}
type PaymentMethodsPaymentMethod = FedwirePaymentMethod | SwiftPaymentMethod | SepaPaymentMethod
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/accounts': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                owner?: string[] | undefined
                type?: AccountType | undefined
              }
            }
            output: { accounts: Account[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                owner?: string[] | undefined
                type?: AccountType | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateAccountRequest
            }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/accounts/:accountId': {
      $get:
        | {
            input: { param: { accountId: AccountId } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: AccountId } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: AccountId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/accounts/:accountId/balances': {
      $get:
        | {
            input: { param: { accountId: AccountId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { balances: Balance[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: AccountId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: AccountId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: AccountId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accountId: AccountId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { accountId: AccountId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: AccountId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/accounts/:accountId/balances/:asset': {
      $get:
        | {
            input: { param: { accountId: AccountId; asset: Asset } }
            output: Balance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: AccountId; asset: Asset } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: AccountId; asset: Asset } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { accountId: AccountId; asset: Asset } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { accountId: AccountId; asset: Asset } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { accountId: AccountId; asset: Asset } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/customers': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateCustomerRequest
            }
            output: Customer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateCustomerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateCustomerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateCustomerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateCustomerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateCustomerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateCustomerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: { customers: Customer[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/customers/requirements': {
      $get:
        | {
            input: {
              query: {
                customerType: CustomerType
                capabilities: CapabilityName[]
                countryCode?: CountryCode | undefined
                citizenship?: CountryCode | undefined
              }
            }
            output: RequirementsMap
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                customerType: CustomerType
                capabilities: CapabilityName[]
                countryCode?: CountryCode | undefined
                citizenship?: CountryCode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                customerType: CustomerType
                capabilities: CapabilityName[]
                countryCode?: CountryCode | undefined
                citizenship?: CountryCode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                customerType: CustomerType
                capabilities: CapabilityName[]
                countryCode?: CountryCode | undefined
                citizenship?: CountryCode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                customerType: CustomerType
                capabilities: CapabilityName[]
                countryCode?: CountryCode | undefined
                citizenship?: CountryCode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                customerType: CustomerType
                capabilities: CapabilityName[]
                countryCode?: CountryCode | undefined
                citizenship?: CountryCode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/customers/:customerId': {
      $get:
        | {
            input: { param: { customerId: CustomerId } }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerId } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: CustomerId } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: CustomerId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: CustomerId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { customerId: CustomerId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { customerId: CustomerId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: UpdateCustomerRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/deposit-destinations': {
      $get:
        | {
            input: {
              query: {
                accountId?: AccountId | undefined
                address?: string | undefined
                type?: DepositDestinationType | undefined
                network?: string | undefined
                status?: DepositDestinationStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: {
              depositDestinations: DepositDestination[]
              nextPageToken?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: AccountId | undefined
                address?: string | undefined
                type?: DepositDestinationType | undefined
                network?: string | undefined
                status?: DepositDestinationStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: AccountId | undefined
                address?: string | undefined
                type?: DepositDestinationType | undefined
                network?: string | undefined
                status?: DepositDestinationStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: AccountId | undefined
                address?: string | undefined
                type?: DepositDestinationType | undefined
                network?: string | undefined
                status?: DepositDestinationStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: DepositDestination
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDepositDestinationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/deposit-destinations/:depositDestinationId': {
      $get:
        | {
            input: { param: { depositDestinationId: DepositDestinationId } }
            output: DepositDestination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { depositDestinationId: DepositDestinationId } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { depositDestinationId: DepositDestinationId } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { depositDestinationId: DepositDestinationId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { depositDestinationId: DepositDestinationId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/transfers': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: TransferRequest
            }
            output: Transfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: TransferRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: TransferRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: TransferRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                status?: TransferStatus | undefined
                accountId?: AccountId | undefined
                sourceAccountId?: AccountId | undefined
                targetAccountId?: AccountId | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                updatedAfter?: string | undefined
                updatedBefore?: string | undefined
                sourceAsset?: string | undefined
                targetAsset?: string | undefined
                sourceAddress?: BlockchainAddress | undefined
                targetAddress?: BlockchainAddress | undefined
                targetEmail?: Email | undefined
                transferId?: string | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: { transfers: Transfer[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: TransferStatus | undefined
                accountId?: AccountId | undefined
                sourceAccountId?: AccountId | undefined
                targetAccountId?: AccountId | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                updatedAfter?: string | undefined
                updatedBefore?: string | undefined
                sourceAsset?: string | undefined
                targetAsset?: string | undefined
                sourceAddress?: BlockchainAddress | undefined
                targetAddress?: BlockchainAddress | undefined
                targetEmail?: Email | undefined
                transferId?: string | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/transfers/:transferId': {
      $get:
        | {
            input: { param: { transferId: string } }
            output: Transfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transferId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transferId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/transfers/:transferId/execute': {
      $post:
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Transfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/transfers/:transferId/travel-rule': {
      $post:
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositTravelRuleRequest }
            output: DepositTravelRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositTravelRuleRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositTravelRuleRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositTravelRuleRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/payment-sessions': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreatePaymentSessionRequest
            }
            output: PaymentSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreatePaymentSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreatePaymentSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreatePaymentSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreatePaymentSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreatePaymentSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: { paymentSessions: PaymentSession[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId': {
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } }
            output: PaymentSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/cancel': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelPaymentSessionRequest }
            output: PaymentSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelPaymentSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelPaymentSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelPaymentSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelPaymentSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelPaymentSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelPaymentSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/authorizations/wallet/options': {
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: WalletAuthorizationOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/authorizations/wallet': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletAuthorizationRequest }
            output: Authorization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/authorizations/x402': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Authorization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: {
                'PAYMENT-SIGNATURE'?: string | undefined
                'X-External-Reference-Id'?: {} | undefined
                'X-Customer-Display-Reference-Code'?: {} | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/authorizations/coinbase': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Authorization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'cb-authz-id': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CoinbaseAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/authorizations/mandate': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Authorization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: MandateAuthorizationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/authorizations': {
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { authorizations: Authorization[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/authorizations/:authorizationId': {
      $get:
        | {
            input: {
              param: { paymentSessionId: PaymentSessionId; authorizationId: AuthorizationId }
            }
            output: Authorization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { paymentSessionId: PaymentSessionId; authorizationId: AuthorizationId }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { paymentSessionId: PaymentSessionId; authorizationId: AuthorizationId }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { paymentSessionId: PaymentSessionId; authorizationId: AuthorizationId }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              param: { paymentSessionId: PaymentSessionId; authorizationId: AuthorizationId }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/captures': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateCaptureRequest }
            output: Capture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateCaptureRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { captures: Capture[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/captures/:captureId': {
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId; captureId: CaptureId } }
            output: Capture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; captureId: CaptureId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; captureId: CaptureId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; captureId: CaptureId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; captureId: CaptureId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/voids': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateVoidRequest }
            output: Void
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateVoidRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateVoidRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateVoidRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateVoidRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateVoidRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateVoidRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { voids: Void[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/voids/:voidId': {
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId; voidId: VoidId } }
            output: Void
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; voidId: VoidId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; voidId: VoidId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; voidId: VoidId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; voidId: VoidId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/refunds': {
      $post:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateRefundRequest }
            output: Refund
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateRefundRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateRefundRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateRefundRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateRefundRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateRefundRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateRefundRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { refunds: Refund[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/payment-sessions/:paymentSessionId/refunds/:refundId': {
      $get:
        | {
            input: { param: { paymentSessionId: PaymentSessionId; refundId: RefundId } }
            output: Refund
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; refundId: RefundId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; refundId: RefundId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; refundId: RefundId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { paymentSessionId: PaymentSessionId; refundId: RefundId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateMandateRequest
            }
            output: Mandate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateMandateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateMandateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateMandateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateMandateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateMandateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                address?: BlockchainAddress | undefined
                network?: PaymentSourceNetwork | undefined
                status?: MandateStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: { mandates: Mandate[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                address?: BlockchainAddress | undefined
                network?: PaymentSourceNetwork | undefined
                status?: MandateStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                address?: BlockchainAddress | undefined
                network?: PaymentSourceNetwork | undefined
                status?: MandateStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                address?: BlockchainAddress | undefined
                network?: PaymentSourceNetwork | undefined
                status?: MandateStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                address?: BlockchainAddress | undefined
                network?: PaymentSourceNetwork | undefined
                status?: MandateStatus | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId': {
      $get:
        | {
            input: { param: { mandateId: MandateId } }
            output: Mandate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/cancel': {
      $post:
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelMandateRequest }
            output: Mandate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelMandateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelMandateRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelMandateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelMandateRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: CancelMandateRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/revocations': {
      $get:
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { revocations: Revocation[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/revocations/:revocationId': {
      $get:
        | {
            input: { param: { mandateId: MandateId; revocationId: RevocationId } }
            output: Revocation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId; revocationId: RevocationId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId; revocationId: RevocationId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId; revocationId: RevocationId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId; revocationId: RevocationId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/revocations/wallet': {
      $post:
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletRevocationRequest }
            output: Revocation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletRevocationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletRevocationRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletRevocationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletRevocationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletRevocationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletRevocationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/revocations/wallet/options': {
      $get:
        | {
            input: { param: { mandateId: MandateId } }
            output: WalletMandateRevocationOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/approvals': {
      $get:
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { approvals: Approval[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/approvals/:approvalId': {
      $get:
        | {
            input: { param: { mandateId: MandateId; approvalId: ApprovalId } }
            output: Approval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId; approvalId: ApprovalId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId; approvalId: ApprovalId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId; approvalId: ApprovalId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId; approvalId: ApprovalId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/approvals/wallet': {
      $post:
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Approval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: WalletApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/mandates/:mandateId/approvals/wallet/options': {
      $get:
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: WalletMandateApprovalOptionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { mandateId: MandateId } } & {
              query: {
                addresses: BlockchainAddress[]
                network?: PaymentSourceNetwork | undefined
                asset?: Asset | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/top-up-links': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: TopUpLink
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateTopUpLinkRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/disbursements': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDisbursementRequest
            }
            output: Disbursement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDisbursementRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDisbursementRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDisbursementRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDisbursementRequest
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: CreateDisbursementRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                status?: PaymentActionStatus | undefined
                sourceAccountId?: string | undefined
                externalReferenceId?: string | undefined
              }
            }
            output: { disbursements: Disbursement[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                status?: PaymentActionStatus | undefined
                sourceAccountId?: string | undefined
                externalReferenceId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                status?: PaymentActionStatus | undefined
                sourceAccountId?: string | undefined
                externalReferenceId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                status?: PaymentActionStatus | undefined
                sourceAccountId?: string | undefined
                externalReferenceId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                status?: PaymentActionStatus | undefined
                sourceAccountId?: string | undefined
                externalReferenceId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/disbursements/:disbursementId': {
      $get:
        | {
            input: { param: { disbursementId: DisbursementId } }
            output: Disbursement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { disbursementId: DisbursementId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { disbursementId: DisbursementId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { disbursementId: DisbursementId } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { disbursementId: DisbursementId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/end-users': {
      $post:
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId?: string | undefined
                authenticationMethods: AuthenticationMethods
                evmAccount?:
                  | {
                      createSmartAccount?: boolean | undefined
                      enableSpendPermissions?: boolean | undefined
                    }
                  | undefined
                solanaAccount?: { createSmartAccount?: boolean | undefined } | undefined
              }
            }
            output: EndUser
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId?: string | undefined
                authenticationMethods: AuthenticationMethods
                evmAccount?:
                  | {
                      createSmartAccount?: boolean | undefined
                      enableSpendPermissions?: boolean | undefined
                    }
                  | undefined
                solanaAccount?: { createSmartAccount?: boolean | undefined } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId?: string | undefined
                authenticationMethods: AuthenticationMethods
                evmAccount?:
                  | {
                      createSmartAccount?: boolean | undefined
                      enableSpendPermissions?: boolean | undefined
                    }
                  | undefined
                solanaAccount?: { createSmartAccount?: boolean | undefined } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId?: string | undefined
                authenticationMethods: AuthenticationMethods
                evmAccount?:
                  | {
                      createSmartAccount?: boolean | undefined
                      enableSpendPermissions?: boolean | undefined
                    }
                  | undefined
                solanaAccount?: { createSmartAccount?: boolean | undefined } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId?: string | undefined
                authenticationMethods: AuthenticationMethods
                evmAccount?:
                  | {
                      createSmartAccount?: boolean | undefined
                      enableSpendPermissions?: boolean | undefined
                    }
                  | undefined
                solanaAccount?: { createSmartAccount?: boolean | undefined } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId?: string | undefined
                authenticationMethods: AuthenticationMethods
                evmAccount?:
                  | {
                      createSmartAccount?: boolean | undefined
                      enableSpendPermissions?: boolean | undefined
                    }
                  | undefined
                solanaAccount?: { createSmartAccount?: boolean | undefined } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                sort?: ('createdAt=asc' | 'createdAt=desc')[] | undefined
              }
            }
            output: { endUsers: EndUser[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                sort?: ('createdAt=asc' | 'createdAt=desc')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                sort?: ('createdAt=asc' | 'createdAt=desc')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                sort?: ('createdAt=asc' | 'createdAt=desc')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                sort?: ('createdAt=asc' | 'createdAt=desc')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                sort?: ('createdAt=asc' | 'createdAt=desc')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/end-users/auth/validate-token': {
      $post:
        | {
            input: { json: { accessToken: string } }
            output: EndUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { accessToken: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { accessToken: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { accessToken: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { accessToken: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/end-users/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: EndUser
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { userId: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v2/end-users/lookup': {
      $get:
        | {
            input: {
              query: {
                email?: Email | undefined
                oauthProvider?: OAuth2ProviderType | undefined
                oauthSubject?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                siweAddress?: BlockchainAddress | undefined
              }
            }
            output: { endUsers: EndUser[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: Email | undefined
                oauthProvider?: OAuth2ProviderType | undefined
                oauthSubject?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                siweAddress?: BlockchainAddress | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                email?: Email | undefined
                oauthProvider?: OAuth2ProviderType | undefined
                oauthSubject?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                siweAddress?: BlockchainAddress | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                email?: Email | undefined
                oauthProvider?: OAuth2ProviderType | undefined
                oauthSubject?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                siweAddress?: BlockchainAddress | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/end-users/:userId/evm': {
      $post:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: { evmAccount: EndUserEvmAccount }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/end-users/:userId/evm-smart-account': {
      $post:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: { evmSmartAccount: EndUserEvmSmartAccount }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { enableSpendPermissions?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/end-users/:userId/solana': {
      $post:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: { solanaAccount: EndUserSolanaAccount }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/end-users/import': {
      $post:
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: EndUser
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                userId: string
                authenticationMethods: AuthenticationMethods
                encryptedPrivateKey: string
                keyType: 'evm' | 'solana'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/evm/borrow-products': {
      $get:
        | {
            input: {
              query: {
                projectID?: string | undefined
                network?: BorrowProductNetwork | undefined
                protocol?: BorrowProductProtocol | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: { borrowProducts: BorrowProduct[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectID?: string | undefined
                network?: BorrowProductNetwork | undefined
                protocol?: BorrowProductProtocol | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectID?: string | undefined
                network?: BorrowProductNetwork | undefined
                protocol?: BorrowProductProtocol | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectID?: string | undefined
                network?: BorrowProductNetwork | undefined
                protocol?: BorrowProductProtocol | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                projectID?: string | undefined
                network?: BorrowProductNetwork | undefined
                protocol?: BorrowProductProtocol | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                projectID?: string | undefined
                network?: BorrowProductNetwork | undefined
                protocol?: BorrowProductProtocol | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/evm/borrow-products/:borrowProductId': {
      $get:
        | {
            input: { param: { borrowProductId: BorrowProductId } } & {
              query: { projectID?: string | undefined }
            }
            output: BorrowProduct
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { borrowProductId: BorrowProductId } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { borrowProductId: BorrowProductId } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { borrowProductId: BorrowProductId } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { borrowProductId: BorrowProductId } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { borrowProductId: BorrowProductId } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { borrowProductId: BorrowProductId } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/sign/transaction': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: { signedTransaction: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: { address: string; transaction: string; walletSecretId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/send/transaction': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: { transactionHash: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                walletSecretId?: string | undefined
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/:address/send/:asset': {
      $post:
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: {
              transactionHash?: (string | null) | undefined
              userOpHash?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                useCdpPaymaster?: boolean | undefined
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/sign/message': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: { signature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/sign/typed-data': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: { signature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                typedData: EIP712Message
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/delegation': {
      $get:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } }
            output: { expiresAt: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/delegation/revoke': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation': {
      $post:
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: { expiresAt: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { expiresAt: string; walletSecretId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            }
            output: { expiresAt: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/address/:address/delegation/revoke': {
      $post:
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: BlockchainAddress } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
              }
            } & { json: RevokeDelegationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/eip7702/delegation': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: { delegationOperationId: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/user-operations/:userOpHash': {
      $get:
        | {
            input: { param: { userId: string; address: string; userOpHash: string } } & {
              query: { projectID?: string | undefined }
            }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: string; userOpHash: string } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: string; userOpHash: string } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: string; userOpHash: string } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: string; userOpHash: string } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: string; userOpHash: string } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: string; userOpHash: string } } & {
              query: { projectID?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/send': {
      $post:
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Idempotency-Key'?: string | undefined
                'X-Wallet-Auth'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                useCdpPaymaster: boolean
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                walletSecretId?: string | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions': {
      $get:
        | {
            input: { param: { userId: string; address: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                projectID?: string | undefined
              }
            }
            output: { borrowPositions: BorrowPosition[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                projectID?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                projectID?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                projectID?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                projectID?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                projectID?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                projectID?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CreateBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions/adjust': {
      $post:
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: AdjustBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/evm/smart-accounts/:address/borrow-positions/close': {
      $post:
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: string } } & {
              query: { projectID?: string | undefined }
            } & { header: { 'X-Wallet-Auth': string } } & { json: CloseBorrowPositionRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/solana/sign/message': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: { signature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & { json: { address: string; message: string; walletSecretId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/solana/sign/transaction': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: { signedTransaction: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network?: 'solana' | 'solana-devnet' | undefined
                transaction: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/solana/sign/x402-payment': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: { paymentPayload: {} }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                paymentRequired: {
                  x402Version: {}
                  accepts: X402PaymentRequirements[]
                  resource?:
                    | {
                        url?: string | undefined
                        description?: {} | undefined
                        mimeType?: string | undefined
                      }
                    | undefined
                  error?: string | undefined
                  extensions?: { [x: string]: unknown } | undefined
                }
                acceptsIndex: number
                address: string
                walletSecretId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/solana/send/transaction': {
      $post:
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: { transactionSignature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string } } & { query: { projectID?: string | undefined } } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                address: string
                network: 'solana' | 'solana-devnet'
                walletSecretId?: string | undefined
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/embedded-wallet-api/end-users/:userId/solana/:address/send/:asset': {
      $post:
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: { transactionSignature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { userId: string; address: {}; asset: {} } } & {
              query: { projectID?: string | undefined }
            } & {
              header: {
                'X-Wallet-Auth'?: string | undefined
                'X-Idempotency-Key'?: string | undefined
                'X-Developer-Auth'?: string | undefined
              }
            } & {
              json: {
                to: {}
                amount: string
                network: 'solana' | 'solana-devnet'
                createRecipientAta?: boolean | undefined
                walletSecretId?: string | undefined
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts': {
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: { accounts: EvmAccount[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: EvmAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: EvmAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: EvmAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/by-name/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: EvmAccount
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 502 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v2/evm/accounts/:address/send/transaction': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: { transactionHash: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network:
                  | 'base'
                  | 'base-sepolia'
                  | 'ethereum'
                  | 'ethereum-sepolia'
                  | 'avalanche'
                  | 'polygon'
                  | 'optimism'
                  | 'arbitrum'
                  | 'arbitrum-sepolia'
                  | 'world'
                  | 'world-sepolia'
                transaction: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/sign/transaction': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: { signedTransaction: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/sign': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: { signature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { hash: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/sign/message': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: { signature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/sign/typed-data': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: { signature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EIP712Message }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/eip7702/delegation': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: { delegationOperationId: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: EvmEip7702DelegationNetwork
                enableSpendPermissions?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/eip7702/delegation-operations/:delegationOperationId': {
      $get:
        | {
            input: { param: { delegationOperationId: string } }
            output: EvmEip7702DelegationOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { delegationOperationId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { delegationOperationId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { delegationOperationId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { delegationOperationId: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { delegationOperationId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts': {
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: { accounts: EvmSmartAccount[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: { owners: string[]; name?: string | undefined }
            }
            output: EvmSmartAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: { owners: string[]; name?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: { owners: string[]; name?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: { owners: string[]; name?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: { owners: string[]; name?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: { owners: string[]; name?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/by-name/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: EvmSmartAccount
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 502 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v2/evm/accounts/import': {
      $post:
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: EvmAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                encryptedPrivateKey: string
                name?: string | undefined
                accountPolicy?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/export': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: { encryptedPrivateKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/export/by-name/:name': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: { encryptedPrivateKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: EvmSmartAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: EvmSmartAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/user-operations': {
      $post:
        | {
            input: { param: { address: string } } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                dataSuffix?: string | undefined
              }
            }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { address: string } } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
                dataSuffix?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/user-operations/prepare-and-send': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined; 'X-Wallet-Auth': string }
            } & {
              json: {
                network: EvmUserOperationNetwork
                calls: EvmCall[]
                paymasterUrl?: {} | undefined
                paymasterContext?: PaymasterContext | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/user-operations/:userOpHash': {
      $get:
        | {
            input: { param: { address: string; userOpHash: string } }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; userOpHash: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; userOpHash: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string; userOpHash: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string; userOpHash: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string; userOpHash: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/user-operations/:userOpHash/send': {
      $post:
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string; userOpHash: string } } & {
              json: { signature: string }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/spend-permissions': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateSpendPermissionRequest }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: CreateSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/spend-permissions/list': {
      $get:
        | {
            input: { param: { address: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: {
              spendPermissions: SpendPermissionResponseObject[]
              nextPageToken?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/spend-permissions/revoke': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: RevokeSpendPermissionRequest }
            output: EvmUserOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: RevokeSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: RevokeSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: RevokeSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: RevokeSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: RevokeSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: RevokeSpendPermissionRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/lend/positions': {
      $get:
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: { lendPositions: LendPosition[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
        | {
            input: {
              query: {
                address: string
                vaultIds?: VaultId[] | undefined
                pageSize?: number | undefined
                pageToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/lend/vaults': {
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: { vaults: Vault[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/lend/vaults/:vaultId': {
      $get:
        | {
            input: { param: { vaultId: VaultId } }
            output: Vault
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vaultId: VaultId } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { vaultId: VaultId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { vaultId: VaultId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { vaultId: VaultId } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/lend/redeem-fees': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: EoaVaultRedeemFeesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: EoaVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/lend/redeem-fees': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: SmartAccountVaultRedeemFeesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: SmartAccountVaultRedeemFeesRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/lend/deposit': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: EoaVaultDepositResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/lend/deposit': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: SmartAccountVaultDepositResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: DepositToVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/accounts/:address/lend/withdraw': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: EoaVaultWithdrawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/smart-accounts/:address/lend/withdraw': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: SmartAccountVaultWithdrawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: WithdrawFromVaultWithEvmSmartAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/swaps/quote': {
      $get:
        | {
            input: {
              query: {
                network: EvmSwapsNetwork
                toToken: ToToken
                fromToken: FromToken
                fromAmount: FromAmount
                taker: Taker
                signerAddress?: SignerAddress | undefined
                gasPrice?: GasPrice | undefined
                slippageBps?: SlippageBps | undefined
              }
            }
            output: GetSwapPriceResponseWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                network: EvmSwapsNetwork
                toToken: ToToken
                fromToken: FromToken
                fromAmount: FromAmount
                taker: Taker
                signerAddress?: SignerAddress | undefined
                gasPrice?: GasPrice | undefined
                slippageBps?: SlippageBps | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                network: EvmSwapsNetwork
                toToken: ToToken
                fromToken: FromToken
                fromAmount: FromAmount
                taker: Taker
                signerAddress?: SignerAddress | undefined
                gasPrice?: GasPrice | undefined
                slippageBps?: SlippageBps | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                network: EvmSwapsNetwork
                toToken: ToToken
                fromToken: FromToken
                fromAmount: FromAmount
                taker: Taker
                signerAddress?: SignerAddress | undefined
                gasPrice?: GasPrice | undefined
                slippageBps?: SlippageBps | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                network: EvmSwapsNetwork
                toToken: ToToken
                fromToken: FromToken
                fromAmount: FromAmount
                taker: Taker
                signerAddress?: SignerAddress | undefined
                gasPrice?: GasPrice | undefined
                slippageBps?: SlippageBps | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                network: EvmSwapsNetwork
                toToken: ToToken
                fromToken: FromToken
                fromAmount: FromAmount
                taker: Taker
                signerAddress?: SignerAddress | undefined
                gasPrice?: GasPrice | undefined
                slippageBps?: SlippageBps | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/swaps': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                network: EvmSwapsNetwork
                toToken: string
                fromToken: string
                fromAmount: string
                taker: string
                signerAddress?: string | undefined
                gasPrice?: string | undefined
                slippageBps?: number | undefined
              }
            }
            output: CreateSwapQuoteResponseWrapper
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                network: EvmSwapsNetwork
                toToken: string
                fromToken: string
                fromAmount: string
                taker: string
                signerAddress?: string | undefined
                gasPrice?: string | undefined
                slippageBps?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                network: EvmSwapsNetwork
                toToken: string
                fromToken: string
                fromAmount: string
                taker: string
                signerAddress?: string | undefined
                gasPrice?: string | undefined
                slippageBps?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                network: EvmSwapsNetwork
                toToken: string
                fromToken: string
                fromAmount: string
                taker: string
                signerAddress?: string | undefined
                gasPrice?: string | undefined
                slippageBps?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                network: EvmSwapsNetwork
                toToken: string
                fromToken: string
                fromAmount: string
                taker: string
                signerAddress?: string | undefined
                gasPrice?: string | undefined
                slippageBps?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                network: EvmSwapsNetwork
                toToken: string
                fromToken: string
                fromAmount: string
                taker: string
                signerAddress?: string | undefined
                gasPrice?: string | undefined
                slippageBps?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/token-balances/:network/:address': {
      $get:
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { balances: TokenBalance[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/evm/faucet': {
      $post:
        | {
            input: {
              json: {
                network: 'base-sepolia' | 'ethereum-sepolia' | 'ethereum-hoodi'
                address: string
                token: 'eth' | 'usdc' | 'eurc' | 'cbbtc'
              }
            }
            output: { transactionHash: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                network: 'base-sepolia' | 'ethereum-sepolia' | 'ethereum-hoodi'
                address: string
                token: 'eth' | 'usdc' | 'eurc' | 'cbbtc'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                network: 'base-sepolia' | 'ethereum-sepolia' | 'ethereum-hoodi'
                address: string
                token: 'eth' | 'usdc' | 'eurc' | 'cbbtc'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                network: 'base-sepolia' | 'ethereum-sepolia' | 'ethereum-hoodi'
                address: string
                token: 'eth' | 'usdc' | 'eurc' | 'cbbtc'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                network: 'base-sepolia' | 'ethereum-sepolia' | 'ethereum-hoodi'
                address: string
                token: 'eth' | 'usdc' | 'eurc' | 'cbbtc'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                network: 'base-sepolia' | 'ethereum-sepolia' | 'ethereum-hoodi'
                address: string
                token: 'eth' | 'usdc' | 'eurc' | 'cbbtc'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              json: {
                network: 'base-sepolia' | 'ethereum-sepolia' | 'ethereum-hoodi'
                address: string
                token: 'eth' | 'usdc' | 'eurc' | 'cbbtc'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/policy-engine/policies': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                scope?: 'project' | 'account' | undefined
              }
            }
            output: { policies: Policy[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                scope?: 'project' | 'account' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                scope?: 'project' | 'account' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                scope?: 'project' | 'account' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                scope: 'project' | 'account'
                description?: string | undefined
                rules: PolicyRules
              }
            }
            output: Policy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                scope: 'project' | 'account'
                description?: string | undefined
                rules: PolicyRules
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                scope: 'project' | 'account'
                description?: string | undefined
                rules: PolicyRules
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                scope: 'project' | 'account'
                description?: string | undefined
                rules: PolicyRules
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                scope: 'project' | 'account'
                description?: string | undefined
                rules: PolicyRules
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                scope: 'project' | 'account'
                description?: string | undefined
                rules: PolicyRules
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: {
                scope: 'project' | 'account'
                description?: string | undefined
                rules: PolicyRules
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/policy-engine/simulate': {
      $post:
        | {
            input: { json: SimulatePoliciesRequest }
            output: PolicySimulationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { json: SimulatePoliciesRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/policy-engine/policies/:policyId': {
      $get:
        | {
            input: { param: { policyId: string } }
            output: Policy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { policyId: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { policyId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Policy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { description?: string | undefined; rules: PolicyRules } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/policy-engine/policies/:policyId/pause': {
      $post:
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: PausePolicyRequest }
            output: Policy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: PausePolicyRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: PausePolicyRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: PausePolicyRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: PausePolicyRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: PausePolicyRequest }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: PausePolicyRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/policy-engine/policies/:policyId/resume': {
      $post:
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Policy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { policyId: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts': {
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: { accounts: SolanaAccount[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: SolanaAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: SolanaAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: SolanaAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: { name?: string | undefined; accountPolicy?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts/by-name/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: SolanaAccount
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 502 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v2/solana/accounts/import': {
      $post:
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: SolanaAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { encryptedPrivateKey: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts/:address/export': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: { encryptedPrivateKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts/export/by-name/:name': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: { encryptedPrivateKey: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { name: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { exportEncryptionKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts/:address/sign/transaction': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: { signedTransaction: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { network?: 'solana' | 'solana-devnet' | undefined; transaction: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts/:address/sign/message': {
      $post:
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: { signature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string } } & {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & { json: { message: string; encoding?: 'utf8' | 'base64' | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/accounts/send/transaction': {
      $post:
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: { transactionSignature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              header: { 'X-Wallet-Auth': string; 'X-Idempotency-Key'?: string | undefined }
            } & {
              json: {
                network: 'solana' | 'solana-devnet'
                transaction: string
                useCdpSponsor?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/faucet': {
      $post:
        | {
            input: { json: { address: string; token: 'sol' | 'usdc' | 'cbtusd' } }
            output: { transactionSignature: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { address: string; token: 'sol' | 'usdc' | 'cbtusd' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { address: string; token: 'sol' | 'usdc' | 'cbtusd' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { address: string; token: 'sol' | 'usdc' | 'cbtusd' } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { address: string; token: 'sol' | 'usdc' | 'cbtusd' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { address: string; token: 'sol' | 'usdc' | 'cbtusd' } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { json: { address: string; token: 'sol' | 'usdc' | 'cbtusd' } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/solana/token-balances/:network/:address': {
      $get:
        | {
            input: { param: { address: string; network: ListSolanaTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { balances: SolanaTokenBalance[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; network: ListSolanaTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; network: ListSolanaTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string; network: ListSolanaTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string; network: ListSolanaTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string; network: ListSolanaTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/data/query/run': {
      $post:
        | {
            input: { json: OnchainDataQuery }
            output: OnchainDataResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: OnchainDataQuery }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: OnchainDataQuery }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: OnchainDataQuery }; output: Error; outputFormat: 'json'; status: 402 }
        | { input: { json: OnchainDataQuery }; output: Error; outputFormat: 'json'; status: 408 }
        | { input: { json: OnchainDataQuery }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: OnchainDataQuery }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: OnchainDataQuery }; output: Error; outputFormat: 'json'; status: 504 }
    }
  } & {
    '/v2/data/query/grammar': {
      $get:
        | { input: {}; output: string; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 504 }
    }
  } & {
    '/v2/data/query/schema': {
      $get:
        | {
            input: {
              query: {
                database?: 'base' | 'base_sepolia' | 'solana' | 'hyperevm' | undefined
                table?: string | undefined
              }
            }
            output: OnchainDataSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                database?: 'base' | 'base_sepolia' | 'solana' | 'hyperevm' | undefined
                table?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                database?: 'base' | 'base_sepolia' | 'solana' | 'hyperevm' | undefined
                table?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/data/evm/token-ownership/:network/:address': {
      $get:
        | {
            input: { param: { network: 'base' | 'base-sepolia'; address: string } }
            output: AccountTokenAddressesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { network: 'base' | 'base-sepolia'; address: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { network: 'base' | 'base-sepolia'; address: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { network: 'base' | 'base-sepolia'; address: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { network: 'base' | 'base-sepolia'; address: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/data/evm/token-balances/:network/:address': {
      $get:
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: { balances: TokenBalance[]; nextPageToken?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { address: string; network: ListEvmTokenBalancesNetwork } } & {
              query: { pageSize?: number | undefined; pageToken?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/data/webhooks/subscriptions': {
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: WebhookSubscriptionListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: WebhookSubscriptionRequest }
            output: WebhookSubscriptionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WebhookSubscriptionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WebhookSubscriptionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhookSubscriptionRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: WebhookSubscriptionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/data/webhooks/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: WebhookSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { subscriptionId: string } } & {
              json: WebhookSubscriptionUpdateRequest
            }
            output: WebhookSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: WebhookSubscriptionUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: WebhookSubscriptionUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: WebhookSubscriptionUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: WebhookSubscriptionUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              json: WebhookSubscriptionUpdateRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { subscriptionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/data/webhooks/subscriptions/:subscriptionId/events': {
      $get:
        | {
            input: { param: { subscriptionId: string } } & {
              query: {
                eventId?: string | undefined
                minCreatedAt?: string | undefined
                maxCreatedAt?: string | undefined
                eventTypeNames?: string | undefined
              }
            }
            output: WebhookEventListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } } & {
              query: {
                eventId?: string | undefined
                minCreatedAt?: string | undefined
                maxCreatedAt?: string | undefined
                eventTypeNames?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriptionId: string } } & {
              query: {
                eventId?: string | undefined
                minCreatedAt?: string | undefined
                maxCreatedAt?: string | undefined
                eventTypeNames?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriptionId: string } } & {
              query: {
                eventId?: string | undefined
                minCreatedAt?: string | undefined
                maxCreatedAt?: string | undefined
                eventTypeNames?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriptionId: string } } & {
              query: {
                eventId?: string | undefined
                minCreatedAt?: string | undefined
                maxCreatedAt?: string | undefined
                eventTypeNames?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriptionId: string } } & {
              query: {
                eventId?: string | undefined
                minCreatedAt?: string | undefined
                maxCreatedAt?: string | undefined
                eventTypeNames?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/x402/verify': {
      $post:
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: {
              isValid: boolean
              invalidReason?: X402VerifyInvalidReason | undefined
              invalidMessage?: string | undefined
              payer: {}
              extra?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: X402VerifyPaymentRejection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/x402/settle': {
      $post:
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: {
              success: boolean
              errorReason?: X402SettleErrorReason | undefined
              errorMessage?: string | undefined
              payer: {}
              transaction: string
              network: string
              amount?: string | undefined
              extra?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: X402SettlePaymentRejection
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              json: {
                x402Version: X402Version
                paymentPayload: X402PaymentPayload
                paymentRequirements: X402PaymentRequirements
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/x402/supported': {
      $get:
        | {
            input: {}
            output: {
              kinds: X402SupportedPaymentKind[]
              extensions: string[]
              signers: { [x: string]: string[] }
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 502 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v2/x402/discovery/resources': {
      $get:
        | {
            input: {
              query: {
                type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: X402DiscoveryResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                type?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/x402/discovery/merchant': {
      $get:
        | {
            input: {
              query: {
                payTo: BlockchainAddress
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: X402DiscoveryMerchantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payTo: BlockchainAddress
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payTo: BlockchainAddress
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                payTo: BlockchainAddress
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                payTo: BlockchainAddress
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/x402/discovery/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                network?: string | undefined
                asset?: string | undefined
                scheme?: string | undefined
                payTo?: BlockchainAddress | undefined
                urlSubstring?: string | undefined
                maxUsdPrice?: string | undefined
                extensions?: string[] | undefined
                tags?: string[] | undefined
                bundleSlugs?: string[] | undefined
                curatedOnly?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: X402SearchResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                network?: string | undefined
                asset?: string | undefined
                scheme?: string | undefined
                payTo?: BlockchainAddress | undefined
                urlSubstring?: string | undefined
                maxUsdPrice?: string | undefined
                extensions?: string[] | undefined
                tags?: string[] | undefined
                bundleSlugs?: string[] | undefined
                curatedOnly?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?: string | undefined
                network?: string | undefined
                asset?: string | undefined
                scheme?: string | undefined
                payTo?: BlockchainAddress | undefined
                urlSubstring?: string | undefined
                maxUsdPrice?: string | undefined
                extensions?: string[] | undefined
                tags?: string[] | undefined
                bundleSlugs?: string[] | undefined
                curatedOnly?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                query?: string | undefined
                network?: string | undefined
                asset?: string | undefined
                scheme?: string | undefined
                payTo?: BlockchainAddress | undefined
                urlSubstring?: string | undefined
                maxUsdPrice?: string | undefined
                extensions?: string[] | undefined
                tags?: string[] | undefined
                bundleSlugs?: string[] | undefined
                curatedOnly?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: {
              query: {
                query?: string | undefined
                network?: string | undefined
                asset?: string | undefined
                scheme?: string | undefined
                payTo?: BlockchainAddress | undefined
                urlSubstring?: string | undefined
                maxUsdPrice?: string | undefined
                extensions?: string[] | undefined
                tags?: string[] | undefined
                bundleSlugs?: string[] | undefined
                curatedOnly?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/x402/discovery/mcp': {
      $post:
        | {
            input: { json: X402McpRequest }
            output: X402McpResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: X402McpRequest }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: X402McpRequest }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v2/x402/discovery/bundles': {
      $get:
        | { input: {}; output: X402BundlesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 502 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v2/x402/discovery/bundles/:bundleSlug': {
      $get:
        | {
            input: { param: { bundleSlug: string } }
            output: X402BundleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bundleSlug: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bundleSlug: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bundleSlug: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { bundleSlug: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { bundleSlug: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/x402/validate': {
      $post:
        | {
            input: { json: X402ValidateRequest }
            output: X402ValidateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: X402ValidateRequest }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: X402ValidateRequest }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: X402ValidateRequest }; output: Error; outputFormat: 'json'; status: 502 }
        | { input: { json: X402ValidateRequest }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v2/onramp/verifications': {
      $post:
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: InitiateOnrampVerificationRequest
            }
            output: OnrampVerificationInitiation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: InitiateOnrampVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: InitiateOnrampVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: InitiateOnrampVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: InitiateOnrampVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: InitiateOnrampVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Idempotency-Key'?: string | undefined } } & {
              json: InitiateOnrampVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/onramp/verifications/:verificationId/submit': {
      $post:
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: OnrampVerificationConfirmation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { verificationId: OnrampVerificationId } } & {
              header: { 'X-Idempotency-Key'?: string | undefined }
            } & { json: SubmitOnrampVerificationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/onramp/orders': {
      $post:
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: {
                agreementAcceptedAt?: string | undefined
                destinationAddress: {}
                destinationNetwork: string
                email?: string | undefined
                isQuote?: boolean | undefined
                partnerOrderRef?: string | undefined
                partnerUserRef: string
                paymentAmount?: string | undefined
                paymentCurrency: string
                paymentMethod: OnrampOrderPaymentMethodTypeId
                phoneNumber?: string | undefined
                phoneNumberVerifiedAt?: string | undefined
                smsVerificationId?: {} | undefined
                emailVerificationId?: {} | undefined
                purchaseAmount?: string | undefined
                purchaseCurrency: string
                clientIp?: string | undefined
                domain?: string | undefined
                locale?: string | undefined
                userAuthToken?: {} | undefined
              }
            }
            output: {
              order: OnrampOrder
              paymentLink?: OnrampPaymentLink | undefined
              userAuthToken?: {} | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: {
                agreementAcceptedAt?: string | undefined
                destinationAddress: {}
                destinationNetwork: string
                email?: string | undefined
                isQuote?: boolean | undefined
                partnerOrderRef?: string | undefined
                partnerUserRef: string
                paymentAmount?: string | undefined
                paymentCurrency: string
                paymentMethod: OnrampOrderPaymentMethodTypeId
                phoneNumber?: string | undefined
                phoneNumberVerifiedAt?: string | undefined
                smsVerificationId?: {} | undefined
                emailVerificationId?: {} | undefined
                purchaseAmount?: string | undefined
                purchaseCurrency: string
                clientIp?: string | undefined
                domain?: string | undefined
                locale?: string | undefined
                userAuthToken?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: {
                agreementAcceptedAt?: string | undefined
                destinationAddress: {}
                destinationNetwork: string
                email?: string | undefined
                isQuote?: boolean | undefined
                partnerOrderRef?: string | undefined
                partnerUserRef: string
                paymentAmount?: string | undefined
                paymentCurrency: string
                paymentMethod: OnrampOrderPaymentMethodTypeId
                phoneNumber?: string | undefined
                phoneNumberVerifiedAt?: string | undefined
                smsVerificationId?: {} | undefined
                emailVerificationId?: {} | undefined
                purchaseAmount?: string | undefined
                purchaseCurrency: string
                clientIp?: string | undefined
                domain?: string | undefined
                locale?: string | undefined
                userAuthToken?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: {
                agreementAcceptedAt?: string | undefined
                destinationAddress: {}
                destinationNetwork: string
                email?: string | undefined
                isQuote?: boolean | undefined
                partnerOrderRef?: string | undefined
                partnerUserRef: string
                paymentAmount?: string | undefined
                paymentCurrency: string
                paymentMethod: OnrampOrderPaymentMethodTypeId
                phoneNumber?: string | undefined
                phoneNumberVerifiedAt?: string | undefined
                smsVerificationId?: {} | undefined
                emailVerificationId?: {} | undefined
                purchaseAmount?: string | undefined
                purchaseCurrency: string
                clientIp?: string | undefined
                domain?: string | undefined
                locale?: string | undefined
                userAuthToken?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: {
                agreementAcceptedAt?: string | undefined
                destinationAddress: {}
                destinationNetwork: string
                email?: string | undefined
                isQuote?: boolean | undefined
                partnerOrderRef?: string | undefined
                partnerUserRef: string
                paymentAmount?: string | undefined
                paymentCurrency: string
                paymentMethod: OnrampOrderPaymentMethodTypeId
                phoneNumber?: string | undefined
                phoneNumberVerifiedAt?: string | undefined
                smsVerificationId?: {} | undefined
                emailVerificationId?: {} | undefined
                purchaseAmount?: string | undefined
                purchaseCurrency: string
                clientIp?: string | undefined
                domain?: string | undefined
                locale?: string | undefined
                userAuthToken?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: {
                agreementAcceptedAt?: string | undefined
                destinationAddress: {}
                destinationNetwork: string
                email?: string | undefined
                isQuote?: boolean | undefined
                partnerOrderRef?: string | undefined
                partnerUserRef: string
                paymentAmount?: string | undefined
                paymentCurrency: string
                paymentMethod: OnrampOrderPaymentMethodTypeId
                phoneNumber?: string | undefined
                phoneNumberVerifiedAt?: string | undefined
                smsVerificationId?: {} | undefined
                emailVerificationId?: {} | undefined
                purchaseAmount?: string | undefined
                purchaseCurrency: string
                clientIp?: string | undefined
                domain?: string | undefined
                locale?: string | undefined
                userAuthToken?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/onramp/orders/:orderId': {
      $get:
        | {
            input: { param: { orderId: string } }
            output: { order: OnrampOrder }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orderId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orderId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orderId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/onramp/sessions': {
      $post:
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: OnrampSessionRequest
            }
            output: { session: OnrampSession; quote?: OnrampQuote | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: OnrampSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: OnrampSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: OnrampSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: OnrampSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'X-Onramp-Partner-Id'?: string | undefined } } & {
              json: OnrampSessionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/onramp/mobile/sessions/challenges': {
      $post:
        | {
            input: {
              json: {
                purchaseCurrency: string
                destinationNetwork: string
                destinationAddress: {}
                paymentAmount?: string | undefined
                purchaseAmount?: string | undefined
                paymentCurrency?: string | undefined
                paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
                country?: string | undefined
                subdivision?: string | undefined
                redirectUrl?: {} | undefined
                clientIp?: string | undefined
                partnerUserRef?: string | undefined
              }
            }
            output: OnrampMobileChallenge
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                purchaseCurrency: string
                destinationNetwork: string
                destinationAddress: {}
                paymentAmount?: string | undefined
                purchaseAmount?: string | undefined
                paymentCurrency?: string | undefined
                paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
                country?: string | undefined
                subdivision?: string | undefined
                redirectUrl?: {} | undefined
                clientIp?: string | undefined
                partnerUserRef?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                purchaseCurrency: string
                destinationNetwork: string
                destinationAddress: {}
                paymentAmount?: string | undefined
                purchaseAmount?: string | undefined
                paymentCurrency?: string | undefined
                paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
                country?: string | undefined
                subdivision?: string | undefined
                redirectUrl?: {} | undefined
                clientIp?: string | undefined
                partnerUserRef?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                purchaseCurrency: string
                destinationNetwork: string
                destinationAddress: {}
                paymentAmount?: string | undefined
                purchaseAmount?: string | undefined
                paymentCurrency?: string | undefined
                paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
                country?: string | undefined
                subdivision?: string | undefined
                redirectUrl?: {} | undefined
                clientIp?: string | undefined
                partnerUserRef?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                purchaseCurrency: string
                destinationNetwork: string
                destinationAddress: {}
                paymentAmount?: string | undefined
                purchaseAmount?: string | undefined
                paymentCurrency?: string | undefined
                paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
                country?: string | undefined
                subdivision?: string | undefined
                redirectUrl?: {} | undefined
                clientIp?: string | undefined
                partnerUserRef?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                purchaseCurrency: string
                destinationNetwork: string
                destinationAddress: {}
                paymentAmount?: string | undefined
                purchaseAmount?: string | undefined
                paymentCurrency?: string | undefined
                paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
                country?: string | undefined
                subdivision?: string | undefined
                redirectUrl?: {} | undefined
                clientIp?: string | undefined
                partnerUserRef?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                purchaseCurrency: string
                destinationNetwork: string
                destinationAddress: {}
                paymentAmount?: string | undefined
                purchaseAmount?: string | undefined
                paymentCurrency?: string | undefined
                paymentMethod?: OnrampQuotePaymentMethodTypeId | undefined
                country?: string | undefined
                subdivision?: string | undefined
                redirectUrl?: {} | undefined
                clientIp?: string | undefined
                partnerUserRef?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/onramp/mobile/sessions': {
      $post:
        | {
            input: { json: CreateOnrampMobileSessionRequest }
            output: { session: OnrampSession }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateOnrampMobileSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateOnrampMobileSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateOnrampMobileSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateOnrampMobileSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateOnrampMobileSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateOnrampMobileSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/onramp/mobile/attestation/challenges': {
      $post:
        | { input: {}; output: IosAttestationChallenge; outputFormat: 'json'; status: 201 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v2/onramp/mobile/attestation/registrations': {
      $post:
        | {
            input: { json: IosAttestationRegistrationRequest }
            output: IosAttestationRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IosAttestationRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IosAttestationRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: IosAttestationRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/onramp/limits': {
      $post:
        | {
            input: {
              json: {
                paymentMethodType: OnrampOrderPaymentMethodTypeId
                userId: string
                userIdType: OnrampUserIdType
              }
            }
            output: {
              limits: OnrampUserLimit[]
              limitUpgradeOptions?: OnrampLimitUpgradeOption[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                paymentMethodType: OnrampOrderPaymentMethodTypeId
                userId: string
                userIdType: OnrampUserIdType
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                paymentMethodType: OnrampOrderPaymentMethodTypeId
                userId: string
                userIdType: OnrampUserIdType
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                paymentMethodType: OnrampOrderPaymentMethodTypeId
                userId: string
                userIdType: OnrampUserIdType
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                paymentMethodType: OnrampOrderPaymentMethodTypeId
                userId: string
                userIdType: OnrampUserIdType
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/onramp/limits/upgrade': {
      $post:
        | {
            input: { json: OnrampLimitUpgradeRequest }
            output: OnrampLimitUpgradeEmbeddedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OnrampLimitUpgradeRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: OnrampLimitUpgradeRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OnrampLimitUpgradeRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: OnrampLimitUpgradeRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: OnrampLimitUpgradeRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/payment-methods': {
      $get:
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: {
              paymentMethods: PaymentMethodsPaymentMethod[]
              nextPageToken?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { pageSize?: number | undefined; pageToken?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/payment-methods/:paymentMethodId': {
      $get:
        | {
            input: { param: { paymentMethodId: PaymentMethodId } }
            output: PaymentMethodsPaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodId: PaymentMethodId } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentMethodId: PaymentMethodId } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentMethodId: PaymentMethodId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentMethodId: PaymentMethodId } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
