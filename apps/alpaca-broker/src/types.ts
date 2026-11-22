type FundingWalletStatus = 'active' | 'pending' | 'disabled'
type FundingWallet = { account_id: string; created_at: string; status: FundingWalletStatus }
type Error = { code: number; message: string }
type FundingDetailPaymentType = 'swift_wire' | 'local_rails'
type FundingWalletRecipientBank = {
  account_number?: string | undefined
  bic_swift?: string | undefined
  city?: string | undefined
  company_name?: string | undefined
  country?: string | undefined
  created_at?: string | undefined
  currency?: string | undefined
  first_name?: string | undefined
  iban?: string | undefined
  id?: string | undefined
  last_name?: string | undefined
  payment_types?: FundingDetailPaymentType[] | undefined
  postal_code?: string | undefined
  routing_code?: string | undefined
  routing_code_type?: string | undefined
  state_or_province?: string | undefined
  street_address?: string | undefined
  updated_at?: string | undefined
}
type FundingWalletTransferDirection = 'incoming' | 'outgoing'
type Currency = string
type FeePaymentType = 'invoice'
type FeeType =
  | 'withdrawal_fee'
  | 'fx_fee'
  | 'network_fee'
  | 'deposit_fee'
  | 'ach_return_fee'
  | 'parnter_fee'
  | 'alpaca_fee'
type TransferFee = {
  amount: string
  currency: Currency
  payment_type: FeePaymentType
  type: FeeType
}
type FundingWalletTransferStatus = 'PENDING' | 'CANCELED' | 'EXECUTED' | 'FAILED' | 'COMPLETE'
type Usd = { amount: string }
type FundingWalletTransfer = {
  account_id?: string | undefined
  created_at?: string | undefined
  direction?: FundingWalletTransferDirection | undefined
  fees?: TransferFee[] | undefined
  id?: string | undefined
  original_amount?: string | undefined
  original_currency?: string | undefined
  payment_type?: FundingDetailPaymentType | undefined
  requested_amount?: string | undefined
  status?: FundingWalletTransferStatus | undefined
  total_amount?: string | undefined
  updated_at?: string | undefined
  usd?: Usd | undefined
}
type ListTransfersResponse = { transfers?: FundingWalletTransfer[] | undefined }
type CreateFundingWalletWithdrawalRequest = {
  desired_currency?: string | undefined
  fee_inclusive?: boolean | undefined
  payment_type?: FundingDetailPaymentType | undefined
  usd_amount?: string | undefined
}
type BatchCreateFundingWalletRequest = { account_ids?: string[] | undefined }
type BatchCreateFundingWalletResponse = { funding_wallets?: FundingWallet[] | undefined }
type DemoFundingTransfer = {
  amount?: string | undefined
  currency?: string | undefined
  receiver_account_number?: string | undefined
  receiver_routing_code?: string | undefined
}
type AcatsDtccTransferType = 'FUL' | 'FRV' | 'MFC' | 'PTD' | 'PTR' | 'RCL' | 'RCR' | 'PTF'
type AcatsTransferDirection = 'INCOMING' | 'OUTGOING'
type AcatsTransferStatus = 'PENDING' | 'IN_PROGRESS' | 'REJECTED' | 'SETTLED'
type AcatsDtccStatus =
  | 'REQUEST'
  | 'REQUEST_ADJUST'
  | 'REQUEST_ADJUST_PAST'
  | 'REQUEST_PAST'
  | 'REQUEST_REJECT'
  | 'REVIEW'
  | 'REVIEW_ADJUST_DELIVERER'
  | 'REVIEW_ERROR'
  | 'REVIEW_ACCELERATE'
  | 'REVIEW_ADJUST_RECEIVER_ACCELERATE'
  | 'SETTLE_PREP'
  | 'SETTLE_CLOSE'
  | 'CLOSE_PURGE'
  | 'REQUEST_PTR'
  | 'MEMO_PURGE_PARTIAL_TRANSFER_REQUEST_RECEIVER'
  | 'REJECT'
  | 'SYSTEM_REJECTED'
type AcatsTimestamp = string
type AcatsSortDirection = 'ASC' | 'DESC'
type AcatsPageToken = string
type AcatsAccountType =
  | 'AGENCY'
  | 'BANK_CUSTODY'
  | 'BENEFICIARY'
  | 'BENEFICIARY_ROTH_IRA'
  | 'CORPORATE'
  | 'CO_TRUSTEE'
  | 'COVERDELL_IRA'
  | 'CUSTODIAN_UGMA'
  | 'DIRECT_ROLLOVER'
  | 'ESTATE'
  | 'HSA'
  | 'IRA'
  | 'JOINT'
  | 'MEDICAL_SAVINGS_ACCOUNT'
  | 'OTHER'
  | 'QUALIFIED_OR_PROFIT_SHARING_OR_PENSION'
  | 'ROTH_401K'
  | 'ROTH_IRA'
  | 'ROTH_SEP'
  | 'ROTH_SIMPLE'
  | 'ROTH_SOLO_401K'
  | 'SARSEP'
  | 'SEP_IRA'
  | 'SIMPLE_IRA'
  | 'SINGLE'
  | 'SOLO_401K'
  | 'TRUST'
  | 'TYPE_401K'
  | 'TYPE_403B'
  | 'TYPE_457_PLAN'
  | 'TYPE_529_PLAN'
type AcatsContraBrokerType = 'BANK' | 'BROKER'
type AcatsRejectionDetails = {
  rejection_message?: string | undefined
  rejection_reason?:
    | 'SS_TAX_ID_MISMATCH'
    | 'ACCOUNT_TITLE_MISMATCH'
    | 'DOCUMENTATION_NEEDED'
    | 'ACCOUNT_FLAT'
    | 'INVALID_ACCOUNT_NUMBER'
    | 'DUPLICATE'
    | 'ACCOUNT_IN_DISTRIBUTION_OR_TRANSFER'
    | 'CLIENT_RESCINDED'
    | 'MISSING_AUTHORIZATION_SIGNATURE'
    | 'ACCOUNT_VIOLATES_CREDIT_POLICY_OF_RECEIVING_FIRM'
    | 'UNRECOGNIZED_FOR_RESIDUAL_CREDIT_BALANCE'
    | 'PARTIAL_TRANSFER_DELIVERER_INITIATED_REJECT'
    | 'FAIL_REVERSAL_REJECT'
    | 'RECLAIM_REJECT'
    | 'MUTUAL_FUND_CLEANUP'
    | 'SYSTEM_REJECTED'
    | 'INVALID_PARTICIPANT'
    | 'ASSOCIATED_RECORD_NOT_PRESENT_OR_INVALID'
    | 'MISSED_CUTOFF'
    | undefined
}
type AcatsStatusDetails = {
  dtcc_status?: AcatsDtccStatus | undefined
  transfer_status?: AcatsTransferStatus | undefined
}
type AcatsTransfer = {
  acats_id: string
  account_id: string
  account_name?: string | undefined
  account_number: string
  account_type?: AcatsAccountType | undefined
  contra_account_number: string
  contra_broker_name?: string | undefined
  contra_broker_number: string
  contra_broker_type?: AcatsContraBrokerType | undefined
  created_at: AcatsTimestamp
  direction: AcatsTransferDirection
  ip_address?: string | undefined
  original_transfer_identifier?: string | undefined
  rejection_details?: AcatsRejectionDetails | undefined
  settlement_date?: AcatsTimestamp | undefined
  status: AcatsStatusDetails
  total_transfer_value?: string | undefined
  transfer_identifier?: string | undefined
  transfer_type: AcatsDtccTransferType
}
type AcatsListTransfersResponse = {
  page_token_next?: {} | undefined
  page_token_previous?: {} | undefined
  pending_transfers?: number | undefined
  transfers: AcatsTransfer[]
}
type AcatsError = { message: string }
type AcatsContraAccountDetails = {
  account_number: string
  broker_name?: string | undefined
  broker_number: string
  customer_name: string
  customer_tax_id: string
}
type FullTransfer = { type: 'FULL' }
type AcatsCashBalance = {
  amount?: string | undefined
  currency: 'USD'
  transfer_all?: boolean | undefined
}
type AcatsEquity = { [x: string]: unknown } | { [x: string]: unknown }
type AcatsSecurities = { equities?: AcatsEquity[] | undefined }
type PartialTransfer = {
  cash?: AcatsCashBalance[] | undefined
  securities?: AcatsSecurities | undefined
  type: 'PARTIAL'
}
type AcatsInitiateTransferDetails = FullTransfer | PartialTransfer
type AcatsInitiateTransferRequest = {
  contra_account_details: AcatsContraAccountDetails
  ip_address: string
  signed_at: string
  transfer_details: AcatsInitiateTransferDetails
  validate_account_number?: boolean | undefined
}
type AcatsInitiateTransferResponse = { acats_id: string }
type AcatsPosition = 'LONG' | 'SHORT' | 'CREDIT' | 'DEBIT'
type AcatsAsset = {
  amount?: string | undefined
  asset_class: 'EQUITY' | 'CASH' | 'OPTION' | 'OTHER'
  asset_description: string
  currency_code?: string | undefined
  cusip?: string | undefined
  isin?: string | undefined
  position: AcatsPosition
  qty?: string | undefined
  rejection_message?: string | undefined
  status: 'NOT_VALIDATED' | 'REQUESTED' | 'DELETED' | 'SETTLED' | 'REVERSED' | 'INTERFACE_REJECTED'
  symbol?: string | undefined
}
type AcatsListAssetsResponse = AcatsAsset[]
type AcatsContraBroker = { name: string; number: string; type: AcatsContraBrokerType }
type AcatsListContraBrokersResponse = { brokers?: AcatsContraBroker[] | undefined }
type AccountSubType = 'traditional' | 'roth'
type AccountType =
  | 'trading'
  | 'custodial'
  | 'donor_advised'
  | 'ira'
  | 'trust'
  | 'omnibus_non_disclosed'
  | 'omnibus_sub'
  | 'hsa'
  | 'joint'
type AgreementType =
  | 'margin_agreement'
  | 'account_agreement'
  | 'customer_agreement'
  | 'crypto_agreement'
  | 'options_agreement'
  | 'custodian_customer_agreement'
  | 'trusted_contact_consent'
  | 'master_securities_lending_agreement'
  | 'certifications_and_resolutions_statement'
  | 'joint_account_agreement'
  | 'foreign_markets_addendum'
type Agreement = {
  agreement: AgreementType
  ip_address: string
  revision?: string | undefined
  signed_at: string
}
type Beneficiary = {
  date_of_birth: string
  family_name: string
  given_name: string
  middle_name?: (string | null) | undefined
  relationship: 'spouse' | 'other'
  share_pct: string
  tax_id: string
  tax_id_type: 'USA_SSN'
  type: 'primary' | 'contingent'
}
type AccountCashInterestProgram = {
  apr_tier_name?: string | undefined
  status?: string | undefined
}
type AccountCashInterestResponse = { USD?: AccountCashInterestProgram | undefined }
type StreetAddress = string
type Contact = {
  city: string
  country?: string | undefined
  email_address: string
  phone_number?: (string | null) | undefined
  postal_code?: string | undefined
  state?: string | undefined
  street_address: StreetAddress[]
  unit?: string | undefined
}
type AccountStatus =
  | 'INACTIVE'
  | 'PAPER_ONLY'
  | 'ONBOARDING'
  | 'SUBMITTED'
  | 'SUBMISSION_FAILED'
  | 'ACTION_REQUIRED'
  | 'ACCOUNT_UPDATED'
  | 'APPROVAL_PENDING'
  | 'APPROVED'
  | 'REJECTED'
  | 'ACTIVE'
  | 'ACCOUNT_CLOSED'
type CustodialAccountType = string
type DisclosureContextAnnotation = {
  company_city?: string | undefined
  company_compliance_email?: string | undefined
  company_country?: string | undefined
  company_name?: string | undefined
  company_state?: string | undefined
  company_street_address?: string | undefined
  context_type: 'CONTROLLED_FIRM' | 'IMMEDIATE_FAMILY_EXPOSED' | 'AFFILIATE_FIRM'
  family_name?: string | undefined
  given_name?: string | undefined
}
type Disclosures = {
  context?: (DisclosureContextAnnotation[] | null) | undefined
  employer_address?: string | undefined
  employer_name?: string | undefined
  employment_position?: string | undefined
  employment_sector?:
    | 'agriculture'
    | 'business_management'
    | 'computers_and_it'
    | 'construction'
    | 'education'
    | 'finance'
    | 'government'
    | 'healthcare'
    | 'hospitality'
    | 'manufacturing'
    | 'marketing'
    | 'media'
    | 'other'
    | 'science'
    | 'self_employed'
    | 'transportation'
    | 'not_employed'
    | undefined
  employment_status?: 'unemployed' | 'employed' | 'student' | 'retired' | undefined
  immediate_family_exposed: boolean
  is_affiliated_exchange_or_finra: boolean
  is_control_person: boolean
  is_politically_exposed: boolean
}
type OwnerDocumentType =
  | 'account_approval_letter'
  | 'address_verification'
  | 'cip_result'
  | 'company_formation'
  | 'date_of_birth_verification'
  | 'entity_operating_document'
  | 'entity_registration'
  | 'hio_declaration_form'
  | 'identity_verification'
  | 'limited_trading_authorization'
  | 'pep_declaration_form'
  | 'tax_id_verification'
  | 'w8ben'
  | 'w9'
type OwnerDocument = {
  created_at: string
  document_sub_type?: string | undefined
  document_type: OwnerDocumentType
  id: string
  mime_type?: string | undefined
}
type AccountDRIPResponse = { equities_dividend_reinvestments: boolean }
type EnabledAssetClass = 'us_equity' | 'us_option' | 'crypto'
type AccountFPSLItem = { status?: string | undefined; tier_id?: string | undefined }
type AccountFPSLResponse = { US?: AccountFPSLItem | undefined }
type Identification = {
  expiry_date?: string | undefined
  issued_country?: string | undefined
  issued_date?: string | undefined
  number?: string | undefined
  type: string
}
type TaxIdType =
  | 'USA_SSN'
  | 'USA_EIN'
  | 'USA_ITIN'
  | 'USA_TIN'
  | 'ABW_PN'
  | 'AGO_NIF'
  | 'ALB_NIPT'
  | 'AND_NRT'
  | 'ARE_EID'
  | 'ARE_TRN'
  | 'ARG_AG_CUIT'
  | 'ARG_AR_CUIT'
  | 'ARM_SSN'
  | 'ARM_TIN'
  | 'AUS_ABN'
  | 'AUS_TFN'
  | 'AUT_UID'
  | 'AUT_VNR'
  | 'AZE_FIN'
  | 'AZE_VOEN'
  | 'BEL_BCE'
  | 'BEL_NN'
  | 'BEN_IFU'
  | 'BFA_IFU'
  | 'BGD_TIN'
  | 'BGR_EGN'
  | 'BGR_EIK'
  | 'BHR_CPR'
  | 'BIH_JMBG'
  | 'BLR_ID'
  | 'BLR_UNP'
  | 'BLZ_TIN'
  | 'BOL_NIT'
  | 'BRA_CNPJ'
  | 'BRA_CPF'
  | 'BRB_TIN'
  | 'BTN_TPN'
  | 'BWA_TIN'
  | 'CAN_BN'
  | 'CAN_SIN'
  | 'CHE_AHV'
  | 'CHE_UID'
  | 'CHL_RUT'
  | 'CHN_RID'
  | 'CHN_USCC'
  | 'CIV_NCC'
  | 'CMR_NIU'
  | 'COK_RMD'
  | 'COL_CC'
  | 'COL_CE'
  | 'COL_NIT'
  | 'COL_NUIP'
  | 'COL_PPT'
  | 'CPV_NIF'
  | 'CRI_CJ'
  | 'CRI_DIMEX'
  | 'CRI_NITE'
  | 'CRI_PIN'
  | 'CUW_CRIB'
  | 'CYP_TIC'
  | 'CZE_TIN'
  | 'DEU_TAX_ID'
  | 'DEU_UST_ID'
  | 'DNK_CPR'
  | 'DNK_CVR'
  | 'DOM_CED'
  | 'DOM_RNC'
  | 'DZA_NIF'
  | 'ECU_RUC'
  | 'EGY_NID'
  | 'EGY_TRN'
  | 'ESP_DNI'
  | 'ESP_NIE'
  | 'ESP_NIF'
  | 'EST_IK'
  | 'EST_RC'
  | 'ETH_TIN'
  | 'FIN_HETU'
  | 'FIN_YTU'
  | 'FJI_TIN'
  | 'FRA_SIREN'
  | 'FRA_SPI'
  | 'GAB_NIF'
  | 'GBR_CRN'
  | 'GBR_NINO'
  | 'GBR_UTR'
  | 'GEO_PID'
  | 'GEO_TIN'
  | 'GHA_TIN'
  | 'GRC_AFM'
  | 'GTM_NIT'
  | 'HKG_BRN'
  | 'HKG_HKID'
  | 'HND_RTN'
  | 'HRV_OIB'
  | 'HTI_NIF'
  | 'HUN_ENT'
  | 'HUN_TIN'
  | 'IDN_KTP'
  | 'IDN_NWPW'
  | 'IND_GSTIN'
  | 'IND_PAN'
  | 'IRL_CRO'
  | 'IRL_PPS'
  | 'IRN_NID'
  | 'ISL_KT'
  | 'ISR_CORP'
  | 'ISR_TAX_ID'
  | 'ITA_PIVA'
  | 'ITA_TAX_ID'
  | 'JAM_TRN'
  | 'JOR_NID'
  | 'JPN_CORP'
  | 'JPN_TAX_ID'
  | 'KAZ_BIN'
  | 'KAZ_IIN'
  | 'KEN_KRA_PIN'
  | 'KGZ_INN'
  | 'KHM_NID'
  | 'KOR_BRN'
  | 'KOR_RRN'
  | 'KWT_CID'
  | 'LBN_TIN'
  | 'LKA_NIC'
  | 'LKA_TIN'
  | 'LTU_AK'
  | 'LTU_JAK'
  | 'LUX_NIN'
  | 'LUX_TVA'
  | 'LVA_PK'
  | 'LVA_REG'
  | 'MAC_TIN'
  | 'MAR_CIN'
  | 'MAR_ICE'
  | 'MDA_IDNO'
  | 'MDA_IDNP'
  | 'MEX_CURP'
  | 'MEX_RFC'
  | 'MKD_EDB'
  | 'MKD_EMBG'
  | 'MLI_NIF'
  | 'MLT_ID'
  | 'MLT_VAT'
  | 'MNE_JMBG'
  | 'MNE_PIB'
  | 'MNG_RD'
  | 'MOZ_NUIT'
  | 'MUS_NID'
  | 'MUS_TAN_ENT'
  | 'MUS_TAN_IND'
  | 'MWI_TPIN'
  | 'MYS_MYKAD'
  | 'MYS_ROC'
  | 'NAM_TIN'
  | 'NGA_NIN'
  | 'NGA_TIN'
  | 'NIC_RUC'
  | 'NLD_BTW'
  | 'NLD_KVK'
  | 'NLD_OBN'
  | 'NLD_TIN'
  | 'NOR_FNR'
  | 'NOR_ORG'
  | 'NPL_PAN'
  | 'NZL_IRD'
  | 'NZL_NZBN'
  | 'OMN_CID'
  | 'PAK_NIC'
  | 'PAK_NTN'
  | 'PAN_RUC'
  | 'PER_RUC'
  | 'PHL_TIN'
  | 'POL_NIP'
  | 'POL_PESEL'
  | 'PRT_NIF'
  | 'PRY_RUC'
  | 'QAT_QID'
  | 'ROU_CNP'
  | 'ROU_CUI'
  | 'RUS_INN_ENT'
  | 'RUS_INN_IND'
  | 'RWA_TIN'
  | 'SAU_TIN'
  | 'SAU_VAT'
  | 'SEN_NINEA'
  | 'SGP_ASGD'
  | 'SGP_FIN'
  | 'SGP_ITR'
  | 'SGP_NRIC'
  | 'SGP_UEN'
  | 'SLV_NIT'
  | 'SRB_JMBG'
  | 'SRB_PIB'
  | 'SVK_ICO'
  | 'SVK_TIN'
  | 'SVN_DAS'
  | 'SVN_MS'
  | 'SWE_ORG'
  | 'SWE_TAX_ID'
  | 'SWZ_TIN'
  | 'SXM_CRIB'
  | 'SYR_TIN'
  | 'THA_NID'
  | 'THA_TIN'
  | 'TJK_TIN'
  | 'TTO_BIR'
  | 'TUN_CIN'
  | 'TUN_MF'
  | 'TUR_TIN'
  | 'TWN_GUI'
  | 'TWN_NID'
  | 'TZA_TIN'
  | 'UGA_TIN'
  | 'UKR_EDRPOU'
  | 'UKR_RNTRC'
  | 'URY_CI'
  | 'URY_RUT'
  | 'UZB_INN'
  | 'UZB_PINFL'
  | 'VEN_RIF'
  | 'VNM_MST_BRN'
  | 'VNM_MST_CORP'
  | 'VNM_MST_PIN'
  | 'WSM_TIN'
  | 'XXK_PID'
  | 'ZAF_CRN'
  | 'ZAF_ID'
  | 'ZMB_TPIN'
  | 'ZWE_TIN'
  | 'NATIONAL_ID'
  | 'PASSPORT'
  | 'PERMANENT_RESIDENT'
  | 'DRIVER_LICENSE'
  | 'OTHER_GOV_ID'
  | 'NOT_SPECIFIED'
type Identity = {
  annual_income_max?: string | undefined
  annual_income_min?: string | undefined
  country_of_birth?: string | undefined
  country_of_citizenship?: string | undefined
  country_of_tax_residence: string
  date_of_birth: string
  date_of_departure_from_usa?: string | undefined
  family_name: string
  funding_source: (
    | 'employment_income'
    | 'investments'
    | 'inheritance'
    | 'business_income'
    | 'savings'
    | 'family'
  )[]
  given_name: string
  identifications?: Identification[] | undefined
  investment_experience_with_options?: 'none' | '1_to_5_years' | 'over_5_years' | undefined
  investment_experience_with_stocks?: 'none' | '1_to_5_years' | 'over_5_years' | undefined
  investment_objective?:
    | 'generate_income'
    | 'preserve_wealth'
    | 'market_speculation'
    | 'growth'
    | 'balance_preserve_wealth_with_growth'
    | undefined
  investment_time_horizon?:
    | 'less_than_1_year'
    | '1_to_2_years'
    | '3_to_5_years'
    | '6_to_10_years'
    | 'more_than_10_years'
    | undefined
  liquid_net_worth_max?: string | undefined
  liquid_net_worth_min?: string | undefined
  liquidity_needs?:
    | 'very_important'
    | 'important'
    | 'somewhat_important'
    | 'does_not_matter'
    | undefined
  marital_status?: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED' | undefined
  middle_name?: string | undefined
  number_of_dependents?: number | undefined
  permanent_resident?: boolean | undefined
  risk_tolerance?: 'conservative' | 'moderate' | 'significant_risk' | undefined
  tax_id?: string | undefined
  tax_id_type?: TaxIdType | ({ [x: string]: unknown } | null) | undefined
  total_net_worth_max?: string | undefined
  total_net_worth_min?: string | undefined
  visa_expiration_date?: string | undefined
  visa_type?: string | undefined
}
type KYCResultTypeSet = { [x: string]: { [x: string]: unknown } } | null
type KYCResults = {
  accept?: KYCResultTypeSet | undefined
  additional_information?: string | undefined
  indeterminate?: KYCResultTypeSet | undefined
  reject?: KYCResultTypeSet | undefined
  summary?: string | undefined
} | null
type CustodialAccountMinorIdentity = {
  country_of_birth?: string | undefined
  country_of_citizenship?: string | undefined
  country_of_tax_residence: string
  date_of_birth: string
  email: string
  family_name: string
  given_name: string
  state: string
  tax_id?: string | undefined
  tax_id_type: TaxIdType
}
type AccountConfigurations = {
  disable_overnight_trading?: boolean | undefined
  fractional_trading?: boolean | undefined
  max_margin_multiplier?: string | undefined
  max_options_trading_level?: 0 | 1 | 2 | 3 | undefined
  no_shorting?: boolean | undefined
  ptp_no_exception_entry?: boolean | undefined
  suspend_trade?: boolean | undefined
  trade_confirm_email?: 'all' | 'none' | undefined
}
type TrustedContact = { [x: string]: unknown } | { [x: string]: unknown } | { [x: string]: unknown }
type AccountExtended = {
  account_name?: string | undefined
  account_number: string | null
  account_sub_type?: AccountSubType | undefined
  account_type: AccountType
  agreements?: Agreement[] | undefined
  allow_instant_ach?: boolean | undefined
  beneficiaries?: Beneficiary[] | undefined
  cash_interest?: AccountCashInterestResponse | undefined
  contact?: Contact | undefined
  created_at: string
  crypto_status?: AccountStatus | undefined
  currency: Currency
  custodial_account_type?: CustodialAccountType | undefined
  disclosures?: Disclosures | undefined
  documents?: OwnerDocument[] | undefined
  drip?: AccountDRIPResponse | undefined
  enabled_assets?: EnabledAssetClass[] | undefined
  fpsl?: AccountFPSLResponse | undefined
  id: string
  identity?: Identity | undefined
  instant_ach_blocked?: boolean | undefined
  investment_objective?:
    | 'generate_income'
    | 'preserve_wealth'
    | 'market_speculation'
    | 'growth'
    | 'balance_preserve_wealth_with_growth'
    | undefined
  investment_time_horizon?:
    | 'less_than_1_year'
    | '1_to_2_years'
    | '3_to_5_years'
    | '6_to_10_years'
    | 'more_than_10_years'
    | undefined
  kyc_results?: KYCResults | undefined
  last_equity: string
  liquidity_needs?:
    | 'very_important'
    | 'important'
    | 'somewhat_important'
    | 'does_not_matter'
    | undefined
  minor_identity?: CustodialAccountMinorIdentity | undefined
  primary_account_holder_id?: (string | null) | undefined
  risk_tolerance?: 'conservative' | 'moderate' | 'significant_risk' | undefined
  status: AccountStatus
  trading_configurations?: AccountConfigurations | undefined
  trusted_contact?: TrustedContact | undefined
  usd?: { last_equity?: string | undefined } | undefined
}
type AccountCashInterestPost = { USD?: AccountCashInterestProgram | undefined }
type W8benDocument = {
  additional_conditions?: string | undefined
  country_citizen: string
  date: string
  date_of_birth: string
  foreign_tax_id?: string | undefined
  ftin_not_required?: boolean | undefined
  full_name: string
  income_type?: string | undefined
  ip_address: string
  mailing_address_city_state?: string | undefined
  mailing_address_country?: string | undefined
  mailing_address_street?: string | undefined
  paragraph_number?: string | undefined
  percent_rate_withholding?: number | undefined
  permanent_address_city_state: string
  permanent_address_country: string
  permanent_address_street: string
  reference_number?: string | undefined
  residency?: string | undefined
  revision: string
  signer_full_name: string
  tax_id_ssn?: string | undefined
  timestamp: string
}
type OwnerDocumentUploadRequest = {
  content: string
  content_data?: W8benDocument | undefined
  document_sub_type?: string | undefined
  document_type: OwnerDocumentType
  mime_type?: string | undefined
}
type AccountDRIPRequest = { equities_dividend_reinvestments?: boolean | undefined }
type AccountFPSLItemPost = { tier_id?: string | undefined }
type AccountFPSLPost = { US?: AccountFPSLItemPost | undefined }
type AccountCreationRequest = {
  account_sub_type?: {} | undefined
  account_type?: {} | undefined
  agreements?: Agreement[] | undefined
  allow_instant_ach?: boolean | undefined
  beneficiaries?: Beneficiary[] | undefined
  cash_interest?: AccountCashInterestPost | undefined
  contact?: Contact | undefined
  disclosures?: Disclosures | undefined
  documents?: OwnerDocumentUploadRequest[] | undefined
  drip?: AccountDRIPRequest | undefined
  enabled_assets?: EnabledAssetClass[] | undefined
  entity_id?: string | undefined
  fpsl?: AccountFPSLPost | undefined
  identity?: Identity | undefined
  investment_objective?:
    | 'generate_income'
    | 'preserve_wealth'
    | 'market_speculation'
    | 'growth'
    | 'balance_preserve_wealth_with_growth'
    | undefined
  investment_time_horizon?:
    | 'less_than_1_year'
    | '1_to_2_years'
    | '3_to_5_years'
    | '6_to_10_years'
    | 'more_than_10_years'
    | undefined
  liquidity_needs?:
    | 'very_important'
    | 'important'
    | 'somewhat_important'
    | 'does_not_matter'
    | undefined
  minor_identity?:
    | {
        country_of_birth?: string | undefined
        country_of_citizenship?: string | undefined
        country_of_tax_residence: string
        date_of_birth: string
        email: string
        family_name: string
        given_name: string
        state: string
        tax_id?: string | undefined
        tax_id_type: TaxIdType
      }
    | undefined
  primary_account_holder_id?: string | undefined
  risk_tolerance?: 'conservative' | 'moderate' | 'significant_risk' | undefined
  trading_configurations?: AccountConfigurations | undefined
  trusted_contact?: TrustedContact | undefined
}
type Account = {
  account_number: string | null
  account_type?: AccountType | undefined
  agreements?: Agreement[] | undefined
  allow_instant_ach?: boolean | undefined
  cash_interest?: AccountCashInterestResponse | undefined
  contact?: Contact | undefined
  created_at: string
  crypto_status?: AccountStatus | undefined
  currency: Currency
  disclosures?: Disclosures | undefined
  documents?: OwnerDocument[] | undefined
  drip?: AccountDRIPResponse | undefined
  enabled_assets?: EnabledAssetClass[] | undefined
  fpsl?: AccountFPSLResponse | undefined
  id: string
  identity?: Identity | undefined
  instant_ach_blocked?: boolean | undefined
  last_equity: string
  primary_account_holder_id?: (string | null) | undefined
  status: AccountStatus
  trusted_contact?: TrustedContact | undefined
}
type AccountCashInterestPatch = { USD?: AccountCashInterestProgram | undefined }
type AccountFPSLPatch = { US?: AccountFPSLItem | undefined }
type AccountUpdateRequest = {
  agreements?: Agreement[] | undefined
  allow_instant_ach?: boolean | undefined
  beneficiaries?: Beneficiary[] | undefined
  cash_interest?: AccountCashInterestPatch | undefined
  contact?: Contact | undefined
  disclosures?: Disclosures | undefined
  drip?: AccountDRIPRequest | undefined
  enabled_assets?: EnabledAssetClass[] | undefined
  fpsl?: AccountFPSLPatch | undefined
  identity?: Identity | undefined
  primary_account_holder_id?: string | undefined
  trusted_contact?: TrustedContact | undefined
}
type ACHRelationship = {
  account_id: string
  account_owner_name: string
  bank_account_number?: string | undefined
  bank_account_type?: 'CHECKING' | 'SAVINGS' | undefined
  bank_routing_number?: string | undefined
  created_at: string
  id: string
  nickname?: string | undefined
  status: 'QUEUED' | 'APPROVED' | 'REJECTED' | 'PENDING' | 'CANCEL_REQUESTED'
  updated_at: string
}
type CreateACHRelationshipRequest = {
  account_owner_name: string
  bank_account_number: string
  bank_account_type: 'CHECKING' | 'SAVINGS'
  bank_routing_number: string
  instant?: boolean | undefined
  nickname?: string | undefined
  processor_token?: string | undefined
}
type CIPResult = string
type CIPStatus = string
type CIPDocument = {
  age_validation?: CIPResult | undefined
  comprised_document?: CIPResult | undefined
  created_at?: string | undefined
  data_comparison?: CIPResult | undefined
  data_comparison_breakdown?: string | undefined
  date_of_birth?: string | undefined
  date_of_expiry?: string | undefined
  document_numbers?: string[] | undefined
  document_type?: string | undefined
  first_name?: string | undefined
  gender?: string | undefined
  id: string
  image_integrity?: CIPResult | undefined
  image_integrity_breakdown?: string | undefined
  issuing_country?: string | undefined
  last_name?: string | undefined
  nationality?: string | undefined
  police_record?: CIPStatus | undefined
  result?: CIPResult | undefined
  status?: CIPStatus | undefined
  visual_authenticity?: string | undefined
}
type CIPIdentity = {
  address?: CIPResult | undefined
  address_breakdown?: string | undefined
  created_at?: string | undefined
  date_of_birth?: CIPResult | undefined
  date_of_birth_breakdown?: string | undefined
  id: string
  matched_address?: CIPResult | undefined
  matched_addresses?: string | undefined
  result?: CIPResult | undefined
  sources?: CIPResult | undefined
  sources_breakdown?: string | undefined
  status?: CIPStatus | undefined
  tax_id?: CIPResult | undefined
  tax_id_breakdown?: string | undefined
}
type CIPKYC = {
  address?: string | undefined
  applicant_name?: string | undefined
  approval_status?: 'approved' | 'rejected' | undefined
  approved_at?: string | undefined
  approved_by?: string | undefined
  approved_reason?: string | undefined
  check_completed_at?: string | undefined
  check_initiated_at?: string | undefined
  country_of_residency?: string | undefined
  date_of_birth?: string | undefined
  email_address?: string | undefined
  id: string
  ip_address?: string | undefined
  kyc_completed_at?: string | undefined
  nationality?: string | undefined
  postal_code?: string | undefined
  risk_categories?: string[] | undefined
  risk_level?: string | undefined
  risk_score?: number | undefined
}
type CIPPhoto = {
  created_at?: string | undefined
  face_comparison?: CIPResult | undefined
  face_comparison_breakdown?: string | undefined
  id: string
  image_integrity?: CIPResult | undefined
  image_integrity_breakdown?: string | undefined
  result?: CIPResult | undefined
  status?: 'complete' | 'withdrawn' | undefined
  visual_authenticity?: CIPResult | undefined
  visual_authenticity_breakdown?: string | undefined
}
type CIPProvider = string
type CIPWatchlist = {
  adverse_media?: CIPResult | undefined
  created_at?: string | undefined
  id: string
  monitored_lists?: CIPResult | undefined
  politically_exposed_person?: CIPResult | undefined
  records?: string | undefined
  result?: CIPResult | undefined
  sanction?: CIPResult | undefined
  status?: CIPStatus | undefined
}
type CIPInfo = {
  account_id?: string | undefined
  created_at?: string | undefined
  document?: CIPDocument | undefined
  id?: string | undefined
  identity?: CIPIdentity | undefined
  kyc?: CIPKYC | undefined
  photo?: CIPPhoto | undefined
  provider_name?: CIPProvider[] | undefined
  updated_at?: string | undefined
  watchlist?: CIPWatchlist | undefined
}
type AccountDocumentType =
  | 'account_application'
  | 'account_statement'
  | 'crypto_account_statement'
  | 'options_application'
  | 'tax_statement'
  | 'trade_confirmation_json'
  | 'trade_confirmation'
type AccountDocument = {
  date: string
  id: string
  name?: string | undefined
  sub_type?: string | undefined
  type: AccountDocumentType
}
type OnfidoSDKOutcome = string
type OptionsApprovalRequest = { level?: 1 | 2 | 3 | undefined }
type OptionsApprovalStatus = 'PENDING' | 'APPROVED' | 'LOWER_LEVEL_APPROVED' | 'REJECTED'
type OptionsApprovalResponse = {
  account_id?: string | undefined
  approved_level?: 0 | 1 | 2 | 3 | undefined
  created_at?: string | undefined
  id?: string | undefined
  requested_level?: 0 | 1 | 2 | 3 | undefined
  requester?: 'CORRESPONDENT' | 'ALPACA_ADMIN' | undefined
  status?: OptionsApprovalStatus | undefined
  updated_at?: string | undefined
}
type BankAdditionalFields = {
  intermediary_bank1_bic?: string | undefined
  intermediary_bank2_bic?: string | undefined
  intermediary_bank3_bic?: string | undefined
}
type Bank = {
  account_id?: string | undefined
  account_number: string
  bank_code: string
  bank_code_type: 'ABA' | 'BIC'
  city?: string | undefined
  country?: string | undefined
  created_at: string
  extra_fields?: BankAdditionalFields | undefined
  id: string
  name: string
  postal_code?: string | undefined
  state_province?: string | undefined
  status?: 'QUEUED' | 'SENT_TO_CLEARING' | 'APPROVED' | 'REJECTED' | 'CANCELED' | undefined
  street_address?: string | undefined
  updated_at: string
}
type CreateBankRequest = {
  account_number: string
  bank_code: string
  bank_code_type: 'ABA' | 'BIC'
  city?: string | undefined
  country?: string | undefined
  extra_fields?: BankAdditionalFields | undefined
  name: string
  postal_code?: string | undefined
  state_province?: string | undefined
  street_address?: string | undefined
}
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
type TokenizationMintCallback = {
  client_account_id?: string | undefined
  client_external_account_id?: string | undefined
  network?: TokenizationNetwork | undefined
  tokenization_request_id: string
  tx_hash: string
  wallet_address?: string | undefined
}
type TokenizationIssuer =
  | 'binance'
  | 'bitget'
  | 'coinbase'
  | 'ondo'
  | 'robinhood'
  | 'st0x'
  | 'xstocks'
type TokenizationRequestStatus = 'pending' | 'rejected' | 'completed'
type TokenizationTransferStatus = 'pending' | 'completed' | 'rejected'
type TokenizationRequestType = 'mint' | 'redeem'
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
type TokenizationRedeemRequest = {
  client_account_id?: string | undefined
  client_external_account_id?: string | undefined
  issuer_request_id: string
  network: TokenizationNetwork
  qty: string
  token_symbol: string
  tx_hash: string
  underlying_symbol: string
  wallet_address: string
}
type TokenizationRedeemResponse = {
  created_at: string
  issuer: TokenizationIssuer
  issuer_request_id: string
  network: TokenizationNetwork
  qty: string
  status: TokenizationRequestStatus
  token_symbol: string
  tokenization_request_id: string
  tx_hash: string
  type: TokenizationRequestType
  underlying_symbol: string
  wallet_address: string
}
type TokenizationMintRequest = {
  client_request_id?: string | undefined
  issuer: TokenizationIssuer
  network: TokenizationNetwork
  qty: string
  underlying_symbol: string
  wallet_address: string
}
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
type TransferDirection = 'INCOMING' | 'OUTGOING'
type TransferIRADetails = {
  distribution_reason?: string | undefined
  fed_withholding_amount?: string | undefined
  fed_withholding_pct?: string | undefined
  state_withholding_amount?: string | undefined
  state_withholding_pct?: string | undefined
  tax_year?: string | undefined
}
type TransferStatus =
  | 'QUEUED'
  | 'APPROVAL_PENDING'
  | 'PENDING'
  | 'SENT_TO_CLEARING'
  | 'REJECTED'
  | 'CANCELED'
  | 'APPROVED'
  | 'COMPLETE'
  | 'RETURNED'
type TransferType = 'ach' | 'wire'
type Transfer = {
  account_id: string
  additional_information?: (string | null) | undefined
  amount: string
  bank_id?: string | undefined
  created_at: string
  direction: TransferDirection
  expires_at?: string | undefined
  fee?: (string | null) | undefined
  fee_payment_method?: (string | null) | undefined
  hold_until?: string | undefined
  id: string
  instant_amount?: string | undefined
  ira?: TransferIRADetails | undefined
  reason?: (string | null) | undefined
  relationship_id?: string | undefined
  requested_amount?: (string | null) | undefined
  status: TransferStatus
  type: TransferType
  updated_at?: string | undefined
}
type FeePaymentMethod = string
type TransferIRATaxWithholding = { fed_pct?: string | undefined; state_pct?: string | undefined }
type TransferIRA = {
  distribution_reason?: string | undefined
  tax_withholding?: TransferIRATaxWithholding | undefined
  tax_year?: string | undefined
}
type CreateTransferRequest = {
  additional_information?: (string | null) | undefined
  amount: string
  bank_id?: string | undefined
  direction: TransferDirection
  fee_payment_method?: FeePaymentMethod | undefined
  ira?: TransferIRA | undefined
  relationship_id?: string | undefined
  transfer_type: TransferType
}
type CryptoWallet = {
  address?: string | undefined
  chain?: string | undefined
  created_at?: string | undefined
}
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
type CreateCryptoTransferRequest = {
  address: string
  amount: string
  asset: string
  chain?: 'SOL' | 'ETH' | 'BTC' | 'XRP' | 'ARB' | undefined
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
type UpdateWhitelistedAddressTravelRuleInfoRequest = { travel_rule_info: TravelRuleInfo }
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
type Activity = {
  account_id?: string | undefined
  activity_type?: ActivityType | undefined
  id?: string | undefined
}
type OvercontributedIRAAccount = {
  account_id?: string | undefined
  tax_year?: number | undefined
  total_contribution_amount?: number | undefined
}
type NextPageToken = string | null
type OptionsApprovalsList = {
  next_page_token?: NextPageToken | undefined
  options_approvals?: OptionsApprovalResponse[] | undefined
}
type PartyAgreementType =
  | 'margin_agreement'
  | 'certifications_and_resolutions_statement'
  | 'nasdaq_agreement'
  | 'nyse_agreement'
  | 'oauth_api_agreement'
  | 'opra_agreement'
  | 'trusted_contact_consent'
  | 'custodian_customer_agreement'
type CreatePartyAgreementRequest = {
  agreement: PartyAgreementType
  ip_address: string
  party_id: string
  revision?: string | undefined
  signed_at: string
  signer_party_id?: string | undefined
}
type PerAccountAgreementType =
  | 'account_agreement'
  | 'customer_agreement'
  | 'options_agreement'
  | 'master_securities_lending_agreement'
  | 'crypto_agreement'
  | 'dvp_customer_agreement'
  | 'etc_agreement'
  | 'joint_account_agreement'
type CreateAccountAgreementRequest = {
  account_id: string
  agreement: PerAccountAgreementType
  ip_address: string
  party_id: string
  revision?: string | undefined
  signed_at: string
  signer_party_id?: string | undefined
}
type CreateAgreementRequest = CreatePartyAgreementRequest | CreateAccountAgreementRequest
type SignedAgreementType =
  | 'margin_agreement'
  | 'certifications_and_resolutions_statement'
  | 'nasdaq_agreement'
  | 'nyse_agreement'
  | 'oauth_api_agreement'
  | 'opra_agreement'
  | 'trusted_contact_consent'
  | 'custodian_customer_agreement'
  | 'account_agreement'
  | 'customer_agreement'
  | 'options_agreement'
  | 'master_securities_lending_agreement'
  | 'crypto_agreement'
  | 'dvp_customer_agreement'
  | 'etc_agreement'
  | 'joint_account_agreement'
type SignedAgreement = {
  account_id?: string | undefined
  agreement: SignedAgreementType
  ip_address: string
  party_id: string
  revision?: string | undefined
  signed_at: string
  signer_party_id?: string | undefined
}
type PartyErrorResponse = {
  error:
    | 'invalid_request'
    | 'not_found'
    | 'unauthorized'
    | 'forbidden'
    | 'internal_error'
    | 'party_not_found'
    | 'invalid_party_id'
    | 'email_in_use'
    | 'rate_limited'
  error_description?: string | undefined
  fields?: { error?: string | undefined; name: string }[] | undefined
}
type AssetClass = 'us_equity' | 'us_option' | 'us_index' | 'crypto' | 'crypto_perp' | 'ipo'
type Exchange =
  | 'AMEX'
  | 'ARCA'
  | 'BATS'
  | 'NYSE'
  | 'NASDAQ'
  | 'NYSEARCA'
  | 'OTC'
  | 'TXSE'
  | 'CRYPTO'
  | 'ERSX'
  | 'CRXL'
  | 'ASCX'
  | 'INDEX'
type Asset = {
  attributes?:
    | (
        | 'ptp_no_exception'
        | 'ptp_with_exception'
        | 'ipo'
        | 'has_options'
        | 'options_late_close'
        | 'fractional_eh_enabled'
        | 'overnight_tradable'
        | 'overnight_halted'
      )[]
    | undefined
  borrow_status?: 'easy_to_borrow' | 'hard_to_borrow' | undefined
  class: AssetClass
  exchange: Exchange
  fractionable: boolean
  id: string
  maintenance_margin_requirement?: number | undefined
  margin_requirement_long: string
  margin_requirement_short: string
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
type AssetEntryRequirements = {
  regt_long?: string | undefined
  regt_short?: string | undefined
  symbol: string
}
type BondStatus = 'outstanding' | 'matured' | 'pre_issuance'
type CallType = 'ordinary' | 'make_whole' | 'regulatory' | 'special'
type CouponFrequency = 'annual' | 'semi_annual' | 'quarterly' | 'monthly' | 'zero'
type CouponType = 'fixed' | 'floating' | 'zero'
type DayCount = 'A/360' | 'A/365' | '30/360' | '30/365' | 'A/A' | '30E/360' | 'B/252' | 'A/364'
type SpOutlook = 'positive' | 'negative' | 'developing' | 'stable' | 'not_rated' | 'not_meaningful'
type UsCorporate = {
  accrued_interest?: number | undefined
  bond_status: BondStatus
  call_type?: CallType | undefined
  callable: boolean
  close_price?: number | undefined
  close_price_date?: string | undefined
  close_yield_to_maturity?: number | undefined
  close_yield_to_worst?: number | undefined
  convertible: boolean
  country_domicile: string
  coupon: number
  coupon_frequency: CouponFrequency
  coupon_type: CouponType
  cusip: string
  dated_date: string
  day_count: DayCount
  description: string
  description_short: string
  first_coupon_date?: string | undefined
  fractionable: boolean
  isin: string
  issue_date: string
  issue_minimum_denomination: number
  issue_price: number
  issue_size: number
  issuer: string
  last_coupon_date?: string | undefined
  liquidity_institutional_aggregate?: number | undefined
  liquidity_institutional_buy?: number | undefined
  liquidity_institutional_sell?: number | undefined
  liquidity_micro_aggregate?: number | undefined
  liquidity_micro_buy?: number | undefined
  liquidity_micro_sell?: number | undefined
  liquidity_retail_aggregate?: number | undefined
  liquidity_retail_buy?: number | undefined
  liquidity_retail_sell?: number | undefined
  marginable: boolean
  maturity_date?: string | undefined
  next_call_date?: string | undefined
  next_call_price?: number | undefined
  next_coupon_date?: string | undefined
  par_value: number
  perpetual: boolean
  puttable: boolean
  reg_s: boolean
  reissue_date?: string | undefined
  reissue_price?: number | undefined
  reissue_size?: number | undefined
  sector: string
  seniority: string
  sp_creditwatch?: string | undefined
  sp_creditwatch_date?: string | undefined
  sp_outlook?: SpOutlook | undefined
  sp_outlook_date?: string | undefined
  sp_rating?: string | undefined
  sp_rating_date?: string | undefined
  ticker: string
  tradable: boolean
}
type UsCorporatesResp = { us_corporates: UsCorporate[] }
type TreasurySubtype = 'bond' | 'bill' | 'note' | 'strips' | 'tips' | 'floating'
type UsTreasury = {
  bond_status: BondStatus
  close_price?: number | undefined
  close_price_date?: string | undefined
  close_yield_to_maturity?: number | undefined
  close_yield_to_worst?: number | undefined
  coupon: number
  coupon_frequency: CouponFrequency
  coupon_type: CouponType
  cusip: string
  description: string
  description_short: string
  first_coupon_date?: string | undefined
  fractionable: boolean
  isin: string
  issue_date: string
  last_coupon_date?: string | undefined
  maturity_date: string
  next_coupon_date?: string | undefined
  subtype: TreasurySubtype
  tradable: boolean
}
type UsTreasuriesResp = { us_treasuries: UsTreasury[] }
type LegacyCalendarDay = {
  close: string
  date: string
  open: string
  session_close: string
  session_open: string
  settlement_date: string
}
type LegacyPublicCalendarResp = LegacyCalendarDay[]
type APRTierDetails = {
  as_of?: string | undefined
  total_accounts?: number | undefined
  total_balance?: string | undefined
}
type APRTier = {
  account_rate_bps?: number | undefined
  correspondent_rate_bps?: number | undefined
  created_at?: string | undefined
  currency?: string | undefined
  details?: APRTierDetails | undefined
  id?: string | undefined
  is_default?: boolean | undefined
  name?: string | undefined
  updated_at?: string | undefined
}
type ListAPRTiersResponse = { apr_tiers?: APRTier[] | undefined }
type LegacyClock = { is_open: boolean; next_close: string; next_open: string; timestamp: string }
type AnnouncementCASubType =
  | 'cash'
  | 'stock'
  | 'merger_update'
  | 'merger_completion'
  | 'stock_split'
  | 'until_split'
  | 'reverse_split'
  | 'recapitalization'
  | 'spinoff'
type AnnouncementCAType = 'dividend' | 'merger' | 'split' | 'spinoff'
type Announcement = {
  ca_sub_type: AnnouncementCASubType
  ca_type: AnnouncementCAType
  cash: string | null
  corporate_action_id: string
  declaration_date: string
  ex_date: string | null
  id: string
  initiating_original_cusip: string
  initiating_symbol: string
  new_rate: string | null
  old_rate: string | null
  payable_date: string
  record_date: string | null
  target_original_cusip: string | null
  target_symbol: string | null
}
type CountryInfo = {
  crypto_risk_rating: 'low' | 'medium' | 'high' | 'restricted' | 'prohibited'
  crypto_supported_states?: string[] | undefined
  full_name: string
  securities_risk_rating: 'low' | 'medium' | 'high' | 'restricted' | 'prohibited'
}
type CountryInfos = { [x: string]: CountryInfo }
type RestrictToLiquidationReasons = {
  ach_return?: boolean | undefined
  position_to_equity_ratio?: boolean | undefined
  unspecified?: boolean | undefined
}
type AdminConfigurationsEvent = {
  acct_daily_transfer_limit?: { from?: string | undefined; to?: string | undefined } | undefined
  allow_instant_ach?: boolean | undefined
  disable_algodash_access?: boolean | undefined
  disable_api_key?: boolean | undefined
  disable_crypto?: boolean | undefined
  disable_day_trading?: boolean | undefined
  disable_fractional?: boolean | undefined
  disable_shorting?: boolean | undefined
  incoming_transfers_blocked?: boolean | undefined
  max_margin_multiplier?: { from?: string | undefined; to?: string | undefined } | undefined
  max_options_trading_level?: { from?: string | undefined; to?: string | undefined } | undefined
  outgoing_transfers_blocked?: boolean | undefined
  restrict_to_liquidation_reasons?: RestrictToLiquidationReasons | undefined
}
type AccountCashInterestEvent = {
  apr_tier_name_from?: string | undefined
  apr_tier_name_to?: string | undefined
  currency?: string | undefined
  status_from?: string | undefined
  status_to?: string | undefined
}
type AccountFPSLEvent = {
  US?:
    | {
        status_from?: string | undefined
        status_to?: string | undefined
        tier_from?: string | undefined
        tier_to?: string | undefined
      }
    | undefined
}
type OptionsApprovalEvent = {
  approved_level_from?: number | undefined
  approved_level_to?: number | undefined
}
type AccountStatusEvent = {
  account_blocked?: boolean | undefined
  account_id: string
  account_number?: string | undefined
  admin_configurations?: AdminConfigurationsEvent | undefined
  at: string
  cash_interest?: AccountCashInterestEvent | undefined
  crypto_status_from?: string | undefined
  crypto_status_to?: string | undefined
  event_id?: number | undefined
  event_ulid: string
  fpsl?: AccountFPSLEvent | undefined
  kyc_results?: KYCResults | undefined
  options?: OptionsApprovalEvent | undefined
  reason?: string | undefined
  status_from?: string | undefined
  status_to?: string | undefined
  trading_blocked?: boolean | undefined
}
type JournalEntryType = 'JNLC' | 'JNLS'
type JournalStatus =
  | 'pending'
  | 'canceled'
  | 'executed'
  | 'activity_created'
  | 'queued'
  | 'rejected'
  | 'deleted'
  | 'refused'
  | 'sent_to_clearing'
  | 'correct'
type JournalStatusFrom = JournalStatus | ''
type JournalStatusEvent = {
  at: string
  entry_type: JournalEntryType
  event_id?: number | undefined
  event_ulid: string
  journal_id: string
  status_from: JournalStatusFrom
  status_to: JournalStatus
}
type NonTradeActivityEvent = {
  account_id: string
  at: string
  cusip?: string | undefined
  description: string
  entry_type: string
  event_id?: number | undefined
  event_ulid: string
  id: string
  net_amount: number
  per_share_amount?: number | undefined
  price?: string | undefined
  qty?: number | undefined
  settle_date: string
  status?: 'executed' | 'correct' | 'canceled' | 'pending' | undefined
  symbol?: string | undefined
  system_date: string
}
type TransferStatusFrom = TransferStatus | ''
type TransferStatusEvent = {
  account_id: string
  at: string
  event_id?: number | undefined
  event_ulid: string
  status_from: TransferStatusFrom
  status_to: TransferStatus
  transfer_id: string
}
type FPSLAnalyticsLoansResponse = {
  account_number: string
  in_progress_lending_activities: bigint
  interest: { customer: string; partner: string }
  total_lending_activities: bigint
}
type FPSLError = { message?: string | undefined }
type FPSLLoan = {
  account_id: string
  account_number: string
  collateral: string
  correspondent: string
  date: string
  interest?: { customer: string; partner: string } | undefined
  market_value: string
  quantity: bigint
  symbol: string
  updated_at?: string | undefined
}
type ListFPSLLoansResponse = { loans: FPSLLoan[]; next_page_token: string | null }
type FPSLTier = {
  created_at?: string | undefined
  customer_split?: number | undefined
  id?: string | undefined
  market?: string | undefined
  partner_split?: number | undefined
  tier_name?: string | undefined
  updated_at?: string | undefined
}
type ListSortBy = 'created_at' | 'amount' | 'deadline'
type SortOrder = 'ASC' | 'DESC'
type InstantFundingStatus = 'PENDING' | 'CANCELED' | 'EXECUTED' | 'FAILED' | 'COMPLETED'
type IFFeeType = 'partner' | 'alpaca'
type IFFee = { amount: string; id: string; type: IFFeeType }
type Interest = {
  amount: string
  created_at: string
  date: string
  id: string
  reconciled_at: string
  status: InstantFundingStatus
}
type InstantFunding = {
  account_no: string
  amount: string
  created_at: string
  deadline: string
  fees: IFFee[]
  id: string
  interests: Interest[]
  remaining_payable: string
  source_account_no: string
  status: InstantFundingStatus
  system_date: string
  total_interest: string
}
type CreateIFTransferRequest = { account_no: string; amount: string; source_account_no: string }
type CorrespondentLimit = {
  amount_available?: string | undefined
  amount_in_use?: string | undefined
  amount_limit?: string | undefined
}
type AccountLimit = {
  account_no: string
  amount_available: string
  amount_in_use: string
  amount_limit: string
}
type ReportsResponse = {
  account_no: string
  deadline: string
  instant_funding_transfers?: InstantFunding[] | undefined
  system_date: string
  total_amount_owed: string
  total_interest_penalty: string
}
type JITAssetClass = 'crypto' | 'us_equity'
type SettlementStatus = 'PENDING' | 'AWAITING_ADDITIONAL_FUNDS' | 'COMPLETED' | 'FAILED'
type SettlementResponse = {
  additional_info?: string | undefined
  asset_class?: JITAssetClass | undefined
  completed_at?: string | undefined
  created_at: string
  currency?: string | undefined
  id: string
  interest_amount?: string | undefined
  reason?: string | undefined
  source_account_number?: string | undefined
  status: SettlementStatus
  total_amount: string
  updated_at: string
}
type SettlementsResponse = { settlements: SettlementResponse[] }
type TransmitterInfo = {
  originator_bank_account_number?: string | undefined
  originator_bank_name?: string | undefined
  originator_city?: string | undefined
  originator_country?: string | undefined
  originator_full_name?: string | undefined
  originator_postal_code?: string | undefined
  originator_state?: string | undefined
  originator_street_address?: string | undefined
  other_identifying_information?: string | undefined
}
type SettlementTransfer = { instant_transfer_id: string; transmitter_info: TransmitterInfo }
type CreateSettlementRequest = {
  additional_info?: string | undefined
  transfers: SettlementTransfer[]
}
type IPOOffering = {
  anticipated_shares?: bigint | undefined
  availability: 'available' | 'not_available' | 'closed'
  cusip_id?: string | undefined
  description?: string | undefined
  ipo_reference: string
  logo_small?: string | undefined
  max_price: string
  max_ticket_size?: string | undefined
  min_price: string
  min_ticket_size?: string | undefined
  name: string
  no_new_orders: boolean
  offering_type: string
  prospectus_url?: string | undefined
  settlement_date?: string | undefined
  ticker_symbol?: string | undefined
  trade_date?: string | undefined
  underwriters?: string[] | undefined
  unit_step_size?: string | undefined
}
type IPOOfferingListResponse = { data: IPOOffering[]; next_page_token: string | null }
type IPOOfferingResponse = { data: IPOOffering }
type SettlementAccount = {
  account_number: string
  amount: string
  transmitter_info: TransmitterInfo
}
type CreateJITSettlementRequest = {
  accounts: SettlementAccount[]
  additional_info?: string | undefined
  asset_class: JITAssetClass
  currency: string
}
type JNLC = {
  created_at?: string | undefined
  currency: string
  description: string
  from_account: string
  id: string
  net_amount: string | null
  price: string | null
  qty: string | null
  settle_date: string | null
  status: JournalStatus
  symbol: string | null
  system_date: string | null
  to_account: string
  transmitter_info?: TransmitterInfo | undefined
  entry_type: 'JNLC'
  transmitter_account_number?: string | undefined
  transmitter_address?: string | undefined
  transmitter_financial_institution?: string | undefined
  transmitter_name?: string | undefined
  transmitter_timestamp?: string | undefined
}
type JNLS = {
  created_at?: string | undefined
  currency: string
  description: string
  from_account: string
  id: string
  net_amount: string | null
  price: string | null
  qty: string | null
  settle_date: string | null
  status: JournalStatus
  symbol: string | null
  system_date: string | null
  to_account: string
  transmitter_info?: TransmitterInfo | undefined
  entry_type: 'JNLS'
}
type Journal = JNLC | JNLS
type CreateJournalRequest = {
  amount?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  entry_type: JournalEntryType
  from_account: string
  qty?: string | undefined
  symbol?: string | undefined
  to_account: string
  transmitter_account_number?: string | undefined
  transmitter_address?: string | undefined
  transmitter_financial_institution?: string | undefined
  transmitter_name?: string | undefined
  transmitter_timestamp?: string | undefined
}
type BatchJournalRequest = {
  correspondent?: string | undefined
  entries: {
    amount: string | null
    currency?: (string | null) | undefined
    description?: string | undefined
    qty?: (string | null) | undefined
    symbol?: string | undefined
    to_account: string
    transmitter_account_number?: string | undefined
    transmitter_address?: string | undefined
    transmitter_financial_institution?: string | undefined
    transmitter_name?: string | undefined
    transmitter_timestamp?: string | undefined
  }[]
  entry_type: 'JNLC'
  from_account: string
}
type BatchJournalResponseJNLC = {
  created_at?: string | undefined
  currency: string
  description: string
  from_account: string
  id: string
  net_amount: string | null
  price: string | null
  qty: string | null
  settle_date: string | null
  status: JournalStatus
  symbol: string | null
  system_date: string | null
  to_account: string
  transmitter_info?: TransmitterInfo | undefined
  entry_type: 'JNLC'
  transmitter_account_number?: string | undefined
  transmitter_address?: string | undefined
  transmitter_financial_institution?: string | undefined
  transmitter_name?: string | undefined
  transmitter_timestamp?: string | undefined
  error_message?: string | undefined
}
type BatchJournalResponseJNLS = {
  created_at?: string | undefined
  currency: string
  description: string
  from_account: string
  id: string
  net_amount: string | null
  price: string | null
  qty: string | null
  settle_date: string | null
  status: JournalStatus
  symbol: string | null
  system_date: string | null
  to_account: string
  transmitter_info?: TransmitterInfo | undefined
  entry_type: 'JNLS'
  error_message?: string | undefined
}
type BatchJournalResponse = BatchJournalResponseJNLC | BatchJournalResponseJNLS
type ReverseBatchJournalRequest = {
  entries?:
    | {
        amount?: string | undefined
        currency?: string | undefined
        description?: string | undefined
        from_account?: string | undefined
      }[]
    | undefined
  entry_type?: 'JNLC' | undefined
  to_account?: string | undefined
}
type OAuthTokenRequest = {
  account_id: string
  client_id: string
  client_secret: string
  redirect_uri: string
  scope: string
}
type AuthorizeOAuthTokenResponse = {
  client_id: string
  code: string
  redirect_uri: string
  scope: string
}
type OathClientResponse = {
  client_id?: string | undefined
  description?: string | undefined
  live_trading_approved?: boolean | undefined
  name?: string | undefined
  privacy_policy?: string | undefined
  redirect_uri?: string[] | undefined
  status?: 'ACTIVE' | 'DISABLED' | undefined
  terms_of_use?: string | undefined
  url?: string | undefined
}
type IssueOAuthTokenResponse = { access_token: string; scope: string; token_type: 'Bearer' }
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
  style: 'american' | 'european'
  symbol: string
  tradable: boolean
  type: 'call' | 'put'
  underlying_asset_id: string
  underlying_symbol: string
}
type PortfolioWeights = { percent: string; symbol: string | null; type: 'cash' | 'asset' }
type Portfolio = {
  cooldown_days: number
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  rebalancing_conditions?: string | undefined
  status?: 'active' | 'inactive' | 'needs_adjustment' | undefined
  updated_at?: string | undefined
  weights?: PortfolioWeights[] | undefined
}
type UnexpectedError = { error: string; message: string }
type RebalancingConditions = {
  day?: string | undefined
  percent?: string | undefined
  sub_type?: string | undefined
  type?: string | undefined
}
type PortfolioWeightCashEntry = {
  percent: string
  symbol?: (string | null) | undefined
  type: 'cash'
}
type PortfolioWeightAssetEntry = { percent: string; symbol: string; type: 'asset' }
type PortfolioWeightRequest = PortfolioWeightCashEntry | PortfolioWeightAssetEntry
type CommissionType = 'notional' | 'qty' | 'bps'
type OrderGroupRole = 'entry' | 'take_profit' | 'stop_loss'
type OrderClass = 'simple' | 'bracket' | 'oco' | 'oto' | 'mleg' | ''
type OrderType = 'market' | 'limit' | 'stop' | 'stop_limit' | 'trailing_stop'
type PositionIntent = 'buy_to_open' | 'buy_to_close' | 'sell_to_open' | 'sell_to_close'
type OrderSide = 'buy' | 'sell'
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
type TimeInForce = 'day' | 'gtc' | 'opg' | 'cls' | 'ioc' | 'fok'
type OrderLeg = {
  asset_class?: AssetClass | undefined
  asset_id?: string | undefined
  canceled_at?: (string | null) | undefined
  client_order_id?: string | undefined
  commission?: string | undefined
  commission_bps?: string | undefined
  commission_type?: CommissionType | undefined
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
  id: string
  legs?: ({ [x: string]: unknown }[] | null) | undefined
  limit_price?: (string | null) | undefined
  notional?: (string | null) | undefined
  order_class?: OrderClass | undefined
  order_type?: OrderType | undefined
  position_intent?: PositionIntent | undefined
  qty?: (string | null) | undefined
  replaced_at?: (string | null) | undefined
  replaced_by?: (string | null) | undefined
  replaces?: (string | null) | undefined
  settlement_currency?: string | undefined
  side?: OrderSide | undefined
  status?: OrderStatus | undefined
  stop_price?: (string | null) | undefined
  submitted_at?: string | undefined
  swap_fee_bps?: string | undefined
  swap_rate?: string | undefined
  symbol: string
  time_in_force?: TimeInForce | undefined
  trail_percent?: (string | null) | undefined
  trail_price?: (string | null) | undefined
  type?: OrderType | undefined
  updated_at?: string | undefined
  usd?: { [x: string]: unknown } | undefined
}
type Order = {
  asset_class?: AssetClass | undefined
  asset_id?: string | undefined
  cancel_requested_at?: (string | null) | undefined
  canceled_at?: (string | null) | undefined
  client_order_id?: string | undefined
  commission?: string | undefined
  commission_bps?: string | undefined
  commission_type?: CommissionType | undefined
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
  id: string
  legs?: (OrderLeg[] | null) | undefined
  limit_price?: (string | null) | undefined
  notional?: (string | null) | undefined
  order_class?: OrderClass | undefined
  order_type?: OrderType | undefined
  position_intent?: PositionIntent | undefined
  qty?: (string | null) | undefined
  replaced_at?: (string | null) | undefined
  replaced_by?: (string | null) | undefined
  replaces?: (string | null) | undefined
  settlement_currency?: string | undefined
  side?: OrderSide | undefined
  status?: OrderStatus | undefined
  stop_price?: (string | null) | undefined
  submitted_at?: string | undefined
  swap_fee_bps?: string | undefined
  swap_rate?: string | undefined
  symbol: string
  time_in_force?: TimeInForce | undefined
  trail_percent?: (string | null) | undefined
  trail_price?: (string | null) | undefined
  type?: OrderType | undefined
  updated_at?: string | undefined
  usd?: { [x: string]: unknown } | undefined
}
type PortfolioRunInitiator = 'system' | 'api' | 'dashboard'
type SkippedOrder = {
  currency?: string | undefined
  notional?: string | undefined
  reason: string
  reason_details: string
  side?: string | undefined
  symbol: string
}
type PortfolioRunStatus =
  | 'QUEUED'
  | 'IN_PROGRESS'
  | 'CANCELED'
  | 'CANCELED_MID_RUN'
  | 'ERROR'
  | 'TIMEOUT'
  | 'COMPLETED_ADJUSTED'
  | 'COMPLETED_SUCCESS'
type PortfolioRunType = 'full_rebalance' | 'partial_liquidation' | 'invest_cash'
type PortfolioRun = {
  account_id?: string | undefined
  canceled_at?: string | undefined
  completed_at?: string | undefined
  failed_orders?: Order[] | undefined
  id?: string | undefined
  initiated_from?: PortfolioRunInitiator | undefined
  orders?: Order[] | undefined
  portfolio_id?: string | undefined
  reason?: string | undefined
  skipped_orders?: SkippedOrder[] | undefined
  status?: PortfolioRunStatus | undefined
  type?: PortfolioRunType | undefined
  updated_at?: string | undefined
  weights?: PortfolioWeights[] | undefined
}
type TradeMarker = 'discretionary' | 'unsolicited'
type PortfolioSubscription = {
  account_id: string
  created_at: string
  id: string
  last_rebalanced_at?: string | undefined
  portfolio_id: string
  trade_marker: TradeMarker | ({ [x: string]: unknown } | null)
}
type AggregatePositionResponse = {
  asset_type?: AssetClass | undefined
  closing_price?: string | undefined
  cusip?: string | undefined
  long_market_value?: string | undefined
  long_qty?: string | undefined
  num_accounts?: number | undefined
  short_market_value?: string | undefined
  short_qty?: string | undefined
  symbol?: string | undefined
}
type DailyCashInterest = {
  account_accrued_interest?: string | undefined
  account_id?: string | undefined
  account_rate_bps?: number | undefined
  apr_tier_id?: string | undefined
  apr_tier_name?: string | undefined
  cash_balance?: string | undefined
  correspondent_fee?: string | undefined
  correspondent_rate_bps?: number | undefined
  currency?: string | undefined
  date?: string | undefined
}
type EoDCashInterestReportResponse = {
  interest?: DailyCashInterest[] | undefined
  next_page_token?: (string | null) | undefined
}
type USDPosition = {
  avg_entry_price?: string | undefined
  change_today?: string | undefined
  cost_basis?: string | undefined
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
  asset_marginable?: boolean | undefined
  avg_entry_price: string
  avg_entry_swap_rate?: string | undefined
  change_today: string
  cost_basis: string
  current_price: string
  exchange: string
  lastday_price: string
  market_value: string
  qty: string
  qty_available: string
  side: 'long' | 'short'
  swap_rate?: string | undefined
  symbol: string
  unrealized_intraday_pl: string
  unrealized_intraday_plpc: string
  unrealized_pl: string
  unrealized_plpc: string
  usd?: USDPosition | undefined
}
type CreateSimulatedIncomingWireRequest = {
  amount: string
  currency?: Currency | undefined
  delay_until?: (string | null) | undefined
  wire_instructions: string
}
type SimulatedIncomingWire = {
  account_number: string
  amount: string
  batch_processed_at: string
  correspondent: string
  create_at: string
  currency: Currency
  delay_until: string | null
  id: string
  status: TransferStatus
  wire_instructions: string
}
type AdminConfigurations = {
  acct_daily_transfer_limit?: string | undefined
  allow_instant_ach?: boolean | undefined
  disable_algodash_access?: boolean | undefined
  disable_api_key?: boolean | undefined
  disable_crypto?: boolean | undefined
  disable_day_trading?: boolean | undefined
  disable_fractional?: boolean | undefined
  disable_shorting?: boolean | undefined
  incoming_transfers_blocked?: boolean | undefined
  max_margin_multiplier?: string | undefined
  max_options_trading_level?: 0 | 1 | 2 | 3 | undefined
  outgoing_transfers_blocked?: boolean | undefined
  restrict_to_liquidation_reasons?: RestrictToLiquidationReasons | undefined
}
type TradeAccount = {
  account_blocked: boolean
  account_number: string | null
  accrued_fees: string
  admin_configurations: AdminConfigurations
  balance_asof: string
  buying_power: string
  cash: string
  cash_transferable?: string | undefined
  cash_withdrawable?: string | undefined
  clearing_broker?: string | undefined
  created_at: string
  crypto_status: AccountStatus
  currency: string
  effective_buying_power: string
  equity: string
  id: string
  initial_margin: string
  intraday_adjustments?: string | undefined
  last_buying_power?: string | undefined
  last_cash?: string | undefined
  last_equity: string
  last_initial_margin?: string | undefined
  last_long_market_value?: string | undefined
  last_maintenance_margin: string
  last_options_buying_power?: string | undefined
  last_regt_buying_power?: string | undefined
  last_short_market_value?: string | undefined
  long_market_value: string
  maintenance_margin: string
  memoposts?: string | undefined
  multiplier: string
  non_marginable_buying_power: string
  options_approved_level?: 0 | 1 | 2 | 3 | undefined
  options_buying_power?: string | undefined
  options_trading_level?: 0 | 1 | 2 | 3 | undefined
  pending_reg_taf_fees?: string | undefined
  pending_transfer_out?: string | undefined
  portfolio_value: string
  position_market_value: string
  previous_close?: string | undefined
  regt_buying_power: string
  short_market_value: string
  shorting_enabled: boolean
  sma: string
  status: AccountStatus
  trade_suspended_by_user: boolean
  trading_blocked: boolean
  transfers_blocked: boolean
  user_configurations?: AccountConfigurations | ({ [x: string]: unknown } | null) | undefined
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
type USDAccountTradingLimit = {
  available?: string | undefined
  daily_net_limit?: string | undefined
  held?: string | undefined
  used?: string | undefined
}
type AccountTradingLimit = {
  available?: string | undefined
  daily_net_limit?: string | undefined
  held?: string | undefined
  swap_rate?: string | undefined
  usd?: USDAccountTradingLimit | undefined
  used?: string | undefined
}
type OrderClosedResponse = { body?: Order | undefined; id: string; status: number }
type AdvancedInstructions = {
  algorithm?: 'DMA' | undefined
  destination?: 'IEX' | 'MEMX' | undefined
  display_qty?: string | undefined
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
  commission?: string | undefined
  commission_bps?: string | undefined
  commission_type?: CommissionType | undefined
  extended_hours?: boolean | undefined
  instructions?: string | undefined
  legs?: MLegOrderLeg[] | undefined
  limit_price?: string | undefined
  notional?: string | undefined
  order_class?: OrderClass | undefined
  position_intent?: PositionIntent | undefined
  qty?: string | undefined
  side?: OrderSide | undefined
  source?: string | undefined
  stop_loss?: { limit_price?: string | undefined; stop_price?: string | undefined } | undefined
  stop_price?: string | undefined
  subtag?: string | undefined
  swap_fee_bps?: string | undefined
  symbol?: string | undefined
  take_profit?: { limit_price?: string | undefined } | undefined
  time_in_force: TimeInForce
  trail_percent?: string | undefined
  trail_price?: string | undefined
  type: OrderType
}
type UpdateOrderRequest = {
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
  code: string
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
type DoNotExerciseRequest = { [x: string]: unknown }
type DoNotExerciseResponse = { [x: string]: unknown }
type ExerciseRequest = { commission?: string | undefined; qty?: string | undefined }
type ExerciseResponse = { qty_exercised?: string | undefined; qty_remaining?: string | undefined }
type WatchlistWithoutAsset = {
  account_id: string
  created_at: string
  id: string
  name: string
  updated_at: string
}
type CreateWatchlistRequest = { name: string; symbols: string[] }
type Watchlist = {
  account_id: string
  assets?: Asset[] | undefined
  created_at: string
  id: string
  name: string
  updated_at: string
}
type Transaction = {
  account_id?: string | undefined
  account_name?: string | undefined
  account_no?: string | undefined
  amount?: string | undefined
  balance?: string | undefined
  contra_account_name?: string | undefined
  description?: string | undefined
  entry_type?: string | undefined
  system_date?: string | undefined
}
type JITLedgerAccount = {
  created_at?: string | undefined
  id?: string | undefined
  ledger_name?: string | undefined
  status?: string | undefined
}
type DailyTradingLimit = {
  cash_held?: string | undefined
  correspondent?: string | undefined
  daily_net_limit?: string | undefined
  executed_buys?: string | undefined
  executed_sells?: string | undefined
  in_use_limit?: string | undefined
  open_buys?: string | undefined
  open_sells?: string | undefined
}
type JITReportType =
  | 'detail'
  | 'detail_v2'
  | 'net_summary'
  | 'net_summary_v2'
  | 'net_payment'
  | 'net_payment_final'
  | 'gross_summary'
  | 'gross_summary_v2'
  | 'gross_payment'
  | 'gross_payment_final'
  | 'obligation'
  | 'obligation_v2'
  | 'settlement'
  | 'balance'
  | 'summary'
  | 'payment'
type JITReportDownloadURL = { expires_at: string; filename: string; url: string }
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
  | OpcaRSPLITActivityV2
  | OpcaUSPLITActivityV2
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
  account_id: string
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
type AdminActionBelongsToKind = 'account' | 'owner' | 'correspondent'
type AdminActionCategory = 'accounts' | 'order' | 'other' | 'acats'
type AdminActionCreatedByKind = 'admin' | 'service'
type AdminActionType =
  | 'liquidation_admin_event'
  | 'legacy_note_admin_event'
  | 'note_admin_event'
  | 'transaction_cancel_admin_event'
  | 'acats_status_admin_event'
type AdminActionVisibility = 'internal' | 'external' | 'correspondent_only'
type AdminActionLegacyNote = {
  at: string
  belongs_to?:
    | { id_reference?: string | undefined; kind?: AdminActionBelongsToKind | undefined }
    | undefined
  belongs_to_id_reference: string
  belongs_to_kind: AdminActionBelongsToKind
  category: AdminActionCategory
  correspondent: string
  created_by?:
    | { id_reference?: string | undefined; kind?: AdminActionCreatedByKind | undefined }
    | undefined
  created_by_id_reference: string
  created_by_kind: AdminActionCreatedByKind
  event_id: string
  note: string
  replaces_event_id?: string | undefined
  type: 'note_admin_event' | 'legacy_note_admin_event'
  visibility: AdminActionVisibility
  context: { [x: string]: unknown }
}
type AdminActionLiquidation = {
  at: string
  belongs_to?:
    | { id_reference?: string | undefined; kind?: AdminActionBelongsToKind | undefined }
    | undefined
  belongs_to_id_reference: string
  belongs_to_kind: AdminActionBelongsToKind
  category: AdminActionCategory
  correspondent: string
  created_by?:
    | { id_reference?: string | undefined; kind?: AdminActionCreatedByKind | undefined }
    | undefined
  created_by_id_reference: string
  created_by_kind: AdminActionCreatedByKind
  event_id: string
  note: string
  replaces_event_id?: string | undefined
  type: 'liquidation_admin_event'
  visibility: AdminActionVisibility
  context: {
    available_qty?: string | undefined
    error?: string | undefined
    reason?: string | undefined
    requested_qty?: string | undefined
    symbol?: string | undefined
  }
}
type AdminActionTransactionCancel = {
  at: string
  belongs_to?:
    | { id_reference?: string | undefined; kind?: AdminActionBelongsToKind | undefined }
    | undefined
  belongs_to_id_reference: string
  belongs_to_kind: AdminActionBelongsToKind
  category: AdminActionCategory
  correspondent: string
  created_by?:
    | { id_reference?: string | undefined; kind?: AdminActionCreatedByKind | undefined }
    | undefined
  created_by_id_reference: string
  created_by_kind: AdminActionCreatedByKind
  event_id: string
  note: string
  replaces_event_id?: string | undefined
  type: 'transaction_cancel_admin_event'
  visibility: AdminActionVisibility
  context: {
    entry_type?: string | undefined
    external_id?: string | undefined
    transaction_id?: string | undefined
  }
}
type AdminActionAcatsTransferDirection = 'INCOMING' | 'OUTGOING' | 'UNSPECIFIED'
type AdminActionAcatsTransferType = 'FULL' | 'PARTIAL' | 'RCR' | 'UNSPECIFIED'
type AdminActionAcatsStatusDetails = {
  broker_name?: string | undefined
  broker_number?: string | undefined
  dtcc_reject_reason?: string | undefined
  dtcc_status?: string | undefined
  rejection_message?: string | undefined
  transfer_direction: AdminActionAcatsTransferDirection
  transfer_status: string
  transfer_type: AdminActionAcatsTransferType
}
type AdminActionAcatsStatus = {
  at: string
  belongs_to?:
    | { id_reference?: string | undefined; kind?: AdminActionBelongsToKind | undefined }
    | undefined
  belongs_to_id_reference: string
  belongs_to_kind: AdminActionBelongsToKind
  category: AdminActionCategory
  correspondent: string
  created_by?:
    | { id_reference?: string | undefined; kind?: AdminActionCreatedByKind | undefined }
    | undefined
  created_by_id_reference: string
  created_by_kind: AdminActionCreatedByKind
  event_id: string
  note: string
  replaces_event_id?: string | undefined
  type: 'acats_status_admin_event'
  visibility: AdminActionVisibility
  context: {
    acats_id: string
    status_details: AdminActionAcatsStatusDetails
    transfer_identifier: string
  }
}
type StatusFundingEvent = {
  account_id: string
  at: string
  correspondent: string
  entity_id: string
  entity_type: 'BankRelationship' | 'WireBank' | 'Transfer' | 'FundingWallet'
  event_id: string
  reason?: string | undefined
  status_from?: string | undefined
  status_to: string
}
type IPOEvent = {
  account_id?: string | undefined
  at: string
  correspondent?: string | undefined
  event_id: string
  offering_reference: string
  payload?: { [x: string]: unknown } | undefined
  received_at: string
  verb:
    | 'Allocation'
    | 'Offering'
    | 'OfferingUpdate'
    | 'Prospectus'
    | 'SixtyMinMail'
    | 'OfferingCancellation'
}
type JournalStatusEventV2 = {
  at: string
  batch_error_message?: string | undefined
  description?: string | undefined
  entry_type: JournalEntryType
  event_id: string
  idempotency_key?: string | undefined
  idempotency_key_type?: 'single' | 'batch' | undefined
  journal_id: string
  status_from: JournalStatusFrom
  status_to: JournalStatus
}
type RebalancerEventRebalanceCondition = {
  day?: string | undefined
  percent?: string | undefined
  sub_type?: 'absolute' | 'relative' | 'weekly' | 'monthly' | 'quarterly' | 'annually' | undefined
  type: 'drift_band' | 'calendar' | 'on_portfolio_update'
}
type RebalancerEventPortfolio = {
  cooldown_days: number
  created_at: string
  description: string
  id: string
  name: string
  rebalance_conditions: RebalancerEventRebalanceCondition[]
  status: 'active' | 'inactive' | 'needs_adjustment'
  updated_at: string
  weights: PortfolioWeights[]
}
type RebalancerPortfolioStatusChangedEvent = {
  at: string
  event_id: string
  event_type: 'portfolio.status_changed'
  portfolio: RebalancerEventPortfolio
}
type RebalancerEventRun = {
  account_id: string
  canceled_at: string | null
  completed_at: string | null
  created_at: string
  id: string
  initiated_from: PortfolioRunInitiator
  portfolio_id: string
  reason: string | null
  status:
    | 'QUEUED'
    | 'IN_PROGRESS'
    | 'CANCELED'
    | 'ERROR'
    | 'TIMEOUT'
    | 'COMPLETED_ADJUSTED'
    | 'COMPLETED_SUCCESS'
  type: PortfolioRunType
  updated_at: string
}
type RebalancerRunCreatedEvent = {
  at: string
  event_id: string
  event_type: 'run.created'
  run: RebalancerEventRun
}
type RebalancerRunStatusChangedEvent = {
  at: string
  event_id: string
  event_type: 'run.status_changed'
  run: RebalancerEventRun
}
type RebalancerEvent =
  | RebalancerPortfolioStatusChangedEvent
  | RebalancerRunCreatedEvent
  | RebalancerRunStatusChangedEvent
type SystemEventV2 = {
  at: string
  description: string
  event_id: string
  system_date: string
  type: 'eod_balances_ready' | 'eod_positions_ready'
}
type TradeUpdateEventType =
  | 'new'
  | 'fill'
  | 'partial_fill'
  | 'canceled'
  | 'expired'
  | 'done_for_day'
  | 'replaced'
  | 'rejected'
  | 'pending_new'
  | 'accepted'
  | 'stopped'
  | 'pending_cancel'
  | 'pending_replace'
  | 'calculated'
  | 'suspended'
  | 'order_replace_rejected'
  | 'order_cancel_rejected'
  | 'trade_bust'
  | 'trade_correct'
type TradeUpdateEventV2Leg = {
  commission?: string | undefined
  execution_id?: string | undefined
  order_id?: string | undefined
  price?: string | undefined
  qty?: string | undefined
  symbol?: string | undefined
  timestamp?: string | undefined
}
type TradeUpdateEventV2 = {
  account_id?: string | undefined
  at?: string | undefined
  event?: TradeUpdateEventType | undefined
  event_id?: string | undefined
  execution_id?: string | undefined
  legs?: TradeUpdateEventV2Leg[] | undefined
  order?: Order | undefined
  position_qty?: string | undefined
  position_qtys?: string | undefined
  previous_execution_id?: string | undefined
  price?: string | undefined
  qty?: string | undefined
  reason?: (string | null) | undefined
  settle_date?: string | undefined
  swap_rate?: string | undefined
  timestamp?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/accounts/:account_id/funding_wallet': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: FundingWallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { account_id: string } }
            output: FundingWallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1beta/accounts/:account_id/funding_wallet/funding_details': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: {
                payment_type?: FundingDetailPaymentType | undefined
                currency?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: {
                payment_type?: FundingDetailPaymentType | undefined
                currency?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1beta/accounts/:account_id/funding_wallet/recipient_bank': {
      $delete:
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { account_id: string } } & {
              json: {
                account_number: string
                account_type?: 'checking' | 'savings' | undefined
                bank_account_holder_name?: string | undefined
                bank_country: string
                bank_name: string
                bic_swift?: string | undefined
                city: string
                currency: string
                iban?: string | undefined
                postal_code?: string | undefined
                routing_code?: string | undefined
                routing_code_type?:
                  | 'sort_code'
                  | 'aba'
                  | 'bsb_code'
                  | 'institution_no'
                  | 'bank_code'
                  | 'branch_code'
                  | 'clabe'
                  | 'cnaps'
                  | 'ifsc'
                  | undefined
                state_or_province?: string | undefined
                street_address: string
              }
            }
            output: FundingWalletRecipientBank
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              json: {
                account_number: string
                account_type?: 'checking' | 'savings' | undefined
                bank_account_holder_name?: string | undefined
                bank_country: string
                bank_name: string
                bic_swift?: string | undefined
                city: string
                currency: string
                iban?: string | undefined
                postal_code?: string | undefined
                routing_code?: string | undefined
                routing_code_type?:
                  | 'sort_code'
                  | 'aba'
                  | 'bsb_code'
                  | 'institution_no'
                  | 'bank_code'
                  | 'branch_code'
                  | 'clabe'
                  | 'cnaps'
                  | 'ifsc'
                  | undefined
                state_or_province?: string | undefined
                street_address: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1beta/accounts/:account_id/funding_wallet/transfers': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: ListTransfersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1beta/accounts/:account_id/funding_wallet/transfers/:transfer_id': {
      $get:
        | {
            input: { param: { account_id: string; transfer_id: string } }
            output: FundingWalletTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; transfer_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string; transfer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1beta/accounts/:account_id/funding_wallet/withdrawal': {
      $post:
        | {
            input: { param: { account_id: string } } & {
              json: CreateFundingWalletWithdrawalRequest
            }
            output: FundingWalletTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              json: CreateFundingWalletWithdrawalRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1beta/accounts/funding_wallet': {
      $post:
        | {
            input: { json: BatchCreateFundingWalletRequest }
            output: BatchCreateFundingWalletResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchCreateFundingWalletRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1beta/demo/banking/funding': {
      $post:
        | {
            input: { json: DemoFundingTransfer }
            output: DemoFundingTransfer
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DemoFundingTransfer }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1beta1/acats': {
      $get:
        | {
            input: {
              query: {
                account_number?: string | undefined
                transfer_type?: AcatsDtccTransferType | undefined
                transfer_direction?: AcatsTransferDirection | undefined
                transfer_status?: AcatsTransferStatus | undefined
                dtcc_status?: AcatsDtccStatus | undefined
                contra_broker_number?: string | undefined
                since?: AcatsTimestamp | undefined
                until?: AcatsTimestamp | undefined
                sort_direction?: AcatsSortDirection | undefined
                sort_by?:
                  | 'account_number'
                  | 'total_transfer_value'
                  | 'created_at'
                  | 'contra_account_number'
                  | 'contra_broker_number'
                  | 'external_transfer_id'
                  | 'settled_at'
                  | 'status'
                  | 'transfer_type'
                  | 'updated_at'
                  | undefined
                limit?: number | undefined
                page_token?: AcatsPageToken | undefined
              }
            }
            output: AcatsListTransfersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_number?: string | undefined
                transfer_type?: AcatsDtccTransferType | undefined
                transfer_direction?: AcatsTransferDirection | undefined
                transfer_status?: AcatsTransferStatus | undefined
                dtcc_status?: AcatsDtccStatus | undefined
                contra_broker_number?: string | undefined
                since?: AcatsTimestamp | undefined
                until?: AcatsTimestamp | undefined
                sort_direction?: AcatsSortDirection | undefined
                sort_by?:
                  | 'account_number'
                  | 'total_transfer_value'
                  | 'created_at'
                  | 'contra_account_number'
                  | 'contra_broker_number'
                  | 'external_transfer_id'
                  | 'settled_at'
                  | 'status'
                  | 'transfer_type'
                  | 'updated_at'
                  | undefined
                limit?: number | undefined
                page_token?: AcatsPageToken | undefined
              }
            }
            output: AcatsError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_number?: string | undefined
                transfer_type?: AcatsDtccTransferType | undefined
                transfer_direction?: AcatsTransferDirection | undefined
                transfer_status?: AcatsTransferStatus | undefined
                dtcc_status?: AcatsDtccStatus | undefined
                contra_broker_number?: string | undefined
                since?: AcatsTimestamp | undefined
                until?: AcatsTimestamp | undefined
                sort_direction?: AcatsSortDirection | undefined
                sort_by?:
                  | 'account_number'
                  | 'total_transfer_value'
                  | 'created_at'
                  | 'contra_account_number'
                  | 'contra_broker_number'
                  | 'external_transfer_id'
                  | 'settled_at'
                  | 'status'
                  | 'transfer_type'
                  | 'updated_at'
                  | undefined
                limit?: number | undefined
                page_token?: AcatsPageToken | undefined
              }
            }
            output: AcatsError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                account_number?: string | undefined
                transfer_type?: AcatsDtccTransferType | undefined
                transfer_direction?: AcatsTransferDirection | undefined
                transfer_status?: AcatsTransferStatus | undefined
                dtcc_status?: AcatsDtccStatus | undefined
                contra_broker_number?: string | undefined
                since?: AcatsTimestamp | undefined
                until?: AcatsTimestamp | undefined
                sort_direction?: AcatsSortDirection | undefined
                sort_by?:
                  | 'account_number'
                  | 'total_transfer_value'
                  | 'created_at'
                  | 'contra_account_number'
                  | 'contra_broker_number'
                  | 'external_transfer_id'
                  | 'settled_at'
                  | 'status'
                  | 'transfer_type'
                  | 'updated_at'
                  | undefined
                limit?: number | undefined
                page_token?: AcatsPageToken | undefined
              }
            }
            output: AcatsError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1beta1/acats/:account_id': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: { limit?: number | undefined; page_token?: AcatsPageToken | undefined }
            }
            output: AcatsListTransfersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: { limit?: number | undefined; page_token?: AcatsPageToken | undefined }
            }
            output: AcatsError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & {
              query: { limit?: number | undefined; page_token?: AcatsPageToken | undefined }
            }
            output: AcatsError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { account_id: string } } & { json: AcatsInitiateTransferRequest }
            output: AcatsInitiateTransferResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { account_id: string } } & { json: AcatsInitiateTransferRequest }
            output: AcatsError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: AcatsInitiateTransferRequest }
            output: AcatsError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & { json: AcatsInitiateTransferRequest }
            output: AcatsError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_id: string } } & { json: AcatsInitiateTransferRequest }
            output: AcatsError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1beta1/acats/:account_id/:acats_id': {
      $get:
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1beta1/acats/:account_id/:acats_id/assets': {
      $get:
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsListAssetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; acats_id: string } }
            output: AcatsError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1beta1/acats/contrabrokers': {
      $get:
        | { input: {}; output: AcatsListContraBrokersResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: AcatsError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: AcatsError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1beta1/logos/:symbol': {
      $get: {
        input: { param: { symbol: string } } & { query: { placeholder?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/accounts': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            created_after?: string | undefined
            created_before?: string | undefined
            status?: string | undefined
            sort?: 'asc' | 'desc' | undefined
            entities?:
              | 'agreements'
              | 'contact'
              | 'disclosures'
              | 'documents'
              | 'identity'
              | 'trading_configurations'
              | 'trusted_contact'
              | undefined
          }
        }
        output: AccountExtended[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: AccountCreationRequest }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountCreationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AccountCreationRequest }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: AccountCreationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id': {
      $get: {
        input: { param: { account_id: string } }
        output: AccountExtended
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { account_id: string } } & { json: AccountUpdateRequest }
            output: AccountExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: AccountUpdateRequest }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: AccountUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & { json: AccountUpdateRequest }
            output: string
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/ach_relationships': {
      $get: {
        input: { param: { account_id: string } } & { query: { statuses?: string | undefined } }
        output: ACHRelationship[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { account_id: string } } & { json: CreateACHRelationshipRequest }
            output: ACHRelationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: CreateACHRelationshipRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: CreateACHRelationshipRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & { json: CreateACHRelationshipRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/accounts/:account_id/ach_relationships/:ach_relationship_id': {
      $delete:
        | {
            input: { param: { account_id: string; ach_relationship_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string; ach_relationship_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string; ach_relationship_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/actions/close': {
      $post:
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/cip': {
      $get: {
        input: { param: { account_id: string } }
        output: CIPInfo
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: string } } & { json: CIPInfo }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/accounts/:account_id/documents': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                type?:
                  | 'account_application'
                  | 'account_statement'
                  | 'crypto_account_statement'
                  | 'options_application'
                  | 'tax_statement'
                  | 'trade_confirmation_json'
                  | 'trade_confirmation'
                  | undefined
              }
            }
            output: AccountDocument[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                type?:
                  | 'account_application'
                  | 'account_statement'
                  | 'crypto_account_statement'
                  | 'options_application'
                  | 'tax_statement'
                  | 'trade_confirmation_json'
                  | 'trade_confirmation'
                  | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/documents/:document_id/download': {
      $get:
        | {
            input: { param: { account_id: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: { param: { account_id: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/documents/upload': {
      $post:
        | {
            input: { param: { account_id: string } } & { json: OwnerDocumentUploadRequest[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string } } & { json: OwnerDocumentUploadRequest[] }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: OwnerDocumentUploadRequest[] }
            output: string
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/documents/w8ben/:document_id/download': {
      $get:
        | {
            input: { param: { account_id: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 301
          }
        | {
            input: { param: { account_id: string; document_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/onfido/sdk': {
      $patch:
        | {
            input: { param: { account_id: string } } & {
              json: { outcome: OnfidoSDKOutcome; reason?: string | undefined; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              json: { outcome: OnfidoSDKOutcome; reason?: string | undefined; token: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string } } & {
              json: { outcome: OnfidoSDKOutcome; reason?: string | undefined; token: string }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/onfido/sdk/tokens': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: { referrer?: string | undefined; platform?: string | undefined }
            }
            output: { token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: { referrer?: string | undefined; platform?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/options/approval': {
      $post:
        | {
            input: { param: { account_id: string } } & { json: OptionsApprovalRequest }
            output: OptionsApprovalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: OptionsApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: OptionsApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & { json: OptionsApprovalRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/recipient_banks': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: { status?: 'ACTIVE' | 'INACTIVE' | undefined; bank_name?: string | undefined }
            }
            output: Bank[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: { status?: 'ACTIVE' | 'INACTIVE' | undefined; bank_name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { account_id: string } } & { json: CreateBankRequest }
            output: Bank
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: CreateBankRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: CreateBankRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/accounts/:account_id/recipient_banks/:bank_id': {
      $delete:
        | {
            input: { param: { account_id: string; bank_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string; bank_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: string; bank_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/tokenization/callback/mint': {
      $post:
        | {
            input: { param: { account_id: string } } & { json: TokenizationMintCallback }
            output: TokenizationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: TokenizationMintCallback }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: TokenizationMintCallback }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & { json: TokenizationMintCallback }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & { json: TokenizationMintCallback }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/tokenization/callback/redeem': {
      $post:
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationRedeemRequest }
            output: TokenizationRedeemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationRedeemRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationRedeemRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationRedeemRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationRedeemRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/tokenization/mint': {
      $post:
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationMintRequest }
            output: TokenizationMintResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationMintRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationMintRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationMintRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TokenizationMintRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/tokenization/requests': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: {
                type?: 'mint' | 'redeem' | undefined
                status?: 'pending' | 'rejected' | 'completed' | undefined
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
            input: { param: { account_id: string } } & {
              query: {
                type?: 'mint' | 'redeem' | undefined
                status?: 'pending' | 'rejected' | 'completed' | undefined
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
            input: { param: { account_id: string } } & {
              query: {
                type?: 'mint' | 'redeem' | undefined
                status?: 'pending' | 'rejected' | 'completed' | undefined
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
            input: { param: { account_id: string } } & {
              query: {
                type?: 'mint' | 'redeem' | undefined
                status?: 'pending' | 'rejected' | 'completed' | undefined
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
    '/v1/accounts/:account_id/tokenization/requests/:tokenization_request_id': {
      $get:
        | {
            input: { param: { account_id: string; tokenization_request_id: string } }
            output: TokenizationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/tokenization/requests:by_client_request_id': {
      $get:
        | {
            input: { param: { account_id: string } } & { query: { client_request_id: string } }
            output: TokenizationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string } } & { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/tokenization/requests:by_issuer_request_id': {
      $get:
        | {
            input: { param: { account_id: string } } & { query: { issuer_request_id: string } }
            output: TokenizationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { query: { issuer_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & { query: { issuer_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & { query: { issuer_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string } } & { query: { issuer_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/transfers': {
      $get: {
        input: { param: { account_id: string } } & {
          query: {
            direction?: 'INCOMING' | 'OUTGOING' | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: Transfer[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { account_id: string } } & { json: CreateTransferRequest }
            output: Transfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: CreateTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: CreateTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & { json: CreateTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/accounts/:account_id/transfers/:transfer_id': {
      $delete:
        | {
            input: { param: { account_id: string; transfer_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: string; transfer_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_id/wallets': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: {
                asset?: string | undefined
                chain?: 'SOL' | 'ETH' | 'BTC' | 'XRP' | 'ARB' | undefined
                network?: 'ethereum' | 'solana' | undefined
              }
            }
            output: CryptoWallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: {
                asset?: string | undefined
                chain?: 'SOL' | 'ETH' | 'BTC' | 'XRP' | 'ARB' | undefined
                network?: 'ethereum' | 'solana' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/accounts/:account_id/wallets/transfers': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: CryptoTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { account_id: string } } & { json: CreateCryptoTransferRequest }
            output: CryptoTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: CreateCryptoTransferRequest }
            output: TravelRuleErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/accounts/:account_id/wallets/transfers/:transfer_id': {
      $get: {
        input: { param: { account_id: string; transfer_id: string } }
        output: CryptoTransfer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:account_id/wallets/whitelists': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: WhitelistedAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { account_id: string } } & {
              json: {
                address?: string | undefined
                asset?: string | undefined
                chain?: 'SOL' | 'ETH' | 'BTC' | 'XRP' | 'ARB' | undefined
                travel_rule_info?: TravelRuleInfo | undefined
              }
            }
            output: WhitelistedAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              json: {
                address?: string | undefined
                asset?: string | undefined
                chain?: 'SOL' | 'ETH' | 'BTC' | 'XRP' | 'ARB' | undefined
                travel_rule_info?: TravelRuleInfo | undefined
              }
            }
            output: TravelRuleErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/accounts/:account_id/wallets/whitelists/:whitelisted_address_id': {
      $delete: {
        input: { param: { account_id: string; whitelisted_address_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/accounts/:account_id/wallets/whitelists/:whitelisted_address_id/travel-rule-info': {
      $patch:
        | {
            input: { param: { account_id: string; whitelisted_address_id: string } } & {
              json: UpdateWhitelistedAddressTravelRuleInfoRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: string; whitelisted_address_id: string } } & {
              json: UpdateWhitelistedAddressTravelRuleInfoRequest
            }
            output: TravelRuleErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/accounts/activities': {
      $get: {
        input: {
          query: {
            account_id?: string | undefined
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
        output: Activity[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/activities/:activity_type': {
      $get: {
        input: { param: { activity_type: ActivityTypeFilter } } & {
          query: {
            account_id?: string | undefined
            order_id?: string | undefined
            date?: string | undefined
            until?: string | undefined
            after?: string | undefined
            direction?: 'asc' | 'desc' | undefined
            page_size?: number | undefined
            page_token?: string | undefined
          }
        }
        output: Activity[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/ira_excess_contributions': {
      $get:
        | { input: {}; output: OvercontributedIRAAccount[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/accounts/options/approvals': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                requested_level?: 0 | 1 | 2 | 3 | undefined
                approved_level?: 0 | 1 | 2 | 3 | undefined
                status?: OptionsApprovalStatus | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: OptionsApprovalsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                requested_level?: 0 | 1 | 2 | 3 | undefined
                approved_level?: 0 | 1 | 2 | 3 | undefined
                status?: OptionsApprovalStatus | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                requested_level?: 0 | 1 | 2 | 3 | undefined
                approved_level?: 0 | 1 | 2 | 3 | undefined
                status?: OptionsApprovalStatus | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                requested_level?: 0 | 1 | 2 | 3 | undefined
                approved_level?: 0 | 1 | 2 | 3 | undefined
                status?: OptionsApprovalStatus | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/accounts/positions': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: { as_of?: string | undefined; positions?: { [x: string]: unknown } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/agreements': {
      $post:
        | {
            input: { json: CreateAgreementRequest }
            output: SignedAgreement
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAgreementRequest }
            output: PartyErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAgreementRequest }
            output: PartyErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/assets': {
      $get: {
        input: {
          query: {
            status?: 'active' | 'inactive' | 'all' | undefined
            asset_class?: 'us_equity' | 'crypto' | undefined
            attributes?:
              | (
                  | 'ptp_no_exception'
                  | 'ptp_with_exception'
                  | 'ipo'
                  | 'has_options'
                  | 'options_late_close'
                  | 'fractional_eh_enabled'
                  | 'overnight_tradable'
                  | 'overnight_halted'
                )[]
              | undefined
          }
        }
        output: Asset[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/assets/:symbol_or_asset_id': {
      $get:
        | {
            input: { param: { symbol_or_asset_id: string } }
            output: Asset
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
    '/v1/assets/entry-requirements': {
      $get: {
        input: { query: { symbols: string } }
        output: AssetEntryRequirements[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/assets/fixed_income/us_corporates': {
      $get:
        | {
            input: {
              query: {
                bond_status?: BondStatus | undefined
                isins?: string | undefined
                cusips?: string | undefined
                tickers?: string | undefined
              }
            }
            output: UsCorporatesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                bond_status?: BondStatus | undefined
                isins?: string | undefined
                cusips?: string | undefined
                tickers?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                bond_status?: BondStatus | undefined
                isins?: string | undefined
                cusips?: string | undefined
                tickers?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                bond_status?: BondStatus | undefined
                isins?: string | undefined
                cusips?: string | undefined
                tickers?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                bond_status?: BondStatus | undefined
                isins?: string | undefined
                cusips?: string | undefined
                tickers?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                bond_status?: BondStatus | undefined
                isins?: string | undefined
                cusips?: string | undefined
                tickers?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/assets/fixed_income/us_treasuries': {
      $get:
        | {
            input: {
              query: {
                subtype?: TreasurySubtype | undefined
                bond_status?: BondStatus | undefined
                cusips?: string | undefined
                isins?: string | undefined
              }
            }
            output: UsTreasuriesResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                subtype?: TreasurySubtype | undefined
                bond_status?: BondStatus | undefined
                cusips?: string | undefined
                isins?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                subtype?: TreasurySubtype | undefined
                bond_status?: BondStatus | undefined
                cusips?: string | undefined
                isins?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                subtype?: TreasurySubtype | undefined
                bond_status?: BondStatus | undefined
                cusips?: string | undefined
                isins?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                subtype?: TreasurySubtype | undefined
                bond_status?: BondStatus | undefined
                cusips?: string | undefined
                isins?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/calendar': {
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
    '/v1/cash_interest/apr_tiers': {
      $get:
        | { input: {}; output: ListAPRTiersResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/clock': {
      $get:
        | { input: {}; output: LegacyClock; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/corporate_actions/announcements': {
      $get:
        | {
            input: {
              query: {
                ca_types: string
                since: string
                until: string
                symbol?: string | undefined
                cusip?: string | undefined
                date_type?:
                  | 'declaration_date'
                  | 'ex_date'
                  | 'record_date'
                  | 'payable_date'
                  | undefined
              }
            }
            output: Announcement[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ca_types: string
                since: string
                until: string
                symbol?: string | undefined
                cusip?: string | undefined
                date_type?:
                  | 'declaration_date'
                  | 'ex_date'
                  | 'record_date'
                  | 'payable_date'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/corporate_actions/announcements/:id': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/country-info': {
      $get: { input: {}; output: CountryInfos; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/events/accounts/status': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: number | undefined
            until_id?: number | undefined
            since_ulid?: string | undefined
            until_ulid?: string | undefined
            id?: string | undefined
          }
        }
        output: AccountStatusEvent[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/events/journals/status': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: number | undefined
            until_id?: number | undefined
            since_ulid?: string | undefined
            until_ulid?: string | undefined
            id?: string | undefined
          }
        }
        output: JournalStatusEvent[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/events/nta': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            since?: string | undefined
            until?: string | undefined
            since_id?: number | undefined
            until_id?: number | undefined
            since_ulid?: string | undefined
            until_ulid?: string | undefined
            include_preprocessing?: boolean | undefined
            group_id?: string | undefined
          }
        }
        output: NonTradeActivityEvent
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/events/transfers/status': {
      $get:
        | {
            input: {
              query: {
                since?: string | undefined
                until?: string | undefined
                since_id?: number | undefined
                until_id?: number | undefined
                since_ulid?: string | undefined
                until_ulid?: string | undefined
              }
            }
            output: TransferStatusEvent[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                since?: string | undefined
                until?: string | undefined
                since_id?: number | undefined
                until_id?: number | undefined
                since_ulid?: string | undefined
                until_ulid?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 410
          }
    }
  } & {
    '/v1/fpsl/analytics/:account_id/loans': {
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: FPSLAnalyticsLoansResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/fpsl/loans': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                start?: string | undefined
                end?: string | undefined
                page_token?: string | undefined
                limit?: number | undefined
              }
            }
            output: ListFPSLLoansResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                start?: string | undefined
                end?: string | undefined
                page_token?: string | undefined
                limit?: number | undefined
              }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                start?: string | undefined
                end?: string | undefined
                page_token?: string | undefined
                limit?: number | undefined
              }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                start?: string | undefined
                end?: string | undefined
                page_token?: string | undefined
                limit?: number | undefined
              }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                start?: string | undefined
                end?: string | undefined
                page_token?: string | undefined
                limit?: number | undefined
              }
            }
            output: FPSLError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/fpsl/tiers': {
      $get:
        | { input: {}; output: FPSLTier[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v1/instant_funding': {
      $get:
        | {
            input: {
              query: {
                sort_by?: ListSortBy | undefined
                sort_order?: SortOrder | undefined
                limit?: number | undefined
                offset?: number | undefined
                system_date?: string | undefined
                deadline?: string | undefined
                status?: InstantFundingStatus | undefined
                before?: string | undefined
              }
            }
            output: InstantFunding[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort_by?: ListSortBy | undefined
                sort_order?: SortOrder | undefined
                limit?: number | undefined
                offset?: number | undefined
                system_date?: string | undefined
                deadline?: string | undefined
                status?: InstantFundingStatus | undefined
                before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateIFTransferRequest
            }
            output: InstantFunding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateIFTransferRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateIFTransferRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/instant_funding/:instant_funding_id': {
      $delete:
        | {
            input: { param: { instant_funding_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { instant_funding_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { instant_funding_id: string } }
            output: InstantFunding
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instant_funding_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/instant_funding/limits': {
      $get:
        | { input: {}; output: CorrespondentLimit; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/instant_funding/limits/accounts': {
      $get:
        | {
            input: { query: { account_numbers: string[] } }
            output: AccountLimit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { account_numbers: string[] } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/instant_funding/reports': {
      $get:
        | {
            input: { query: { report_type?: string | undefined; system_date?: string | undefined } }
            output: ReportsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { report_type?: string | undefined; system_date?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/instant_funding/settlements': {
      $get:
        | {
            input: { query: { statuses?: string | undefined } }
            output: SettlementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { statuses?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateSettlementRequest }
            output: SettlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSettlementRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/instant_funding/settlements/:settlement_id': {
      $get:
        | {
            input: { param: { settlement_id: string } }
            output: SettlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settlement_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/ipos': {
      $get: {
        input: {
          query: {
            availability?: 'available' | 'not_available' | 'closed' | undefined
            ticker?: string | undefined
            limit?: number | undefined
            page_token?: string | undefined
          }
        }
        output: IPOOfferingListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ipos/:offering_reference': {
      $get:
        | {
            input: { param: { offering_reference: string } }
            output: IPOOfferingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offering_reference: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/jit/settlements': {
      $get:
        | {
            input: { query: { statuses?: string | undefined } }
            output: SettlementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { statuses?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateJITSettlementRequest }
            output: SettlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateJITSettlementRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/jit/settlements/:settlement_id': {
      $get:
        | {
            input: { param: { settlement_id: string } }
            output: SettlementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settlement_id: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/journals': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                status?: JournalStatus | undefined
                entry_type?: 'JNLC' | 'JNLS' | undefined
                to_account?: string | undefined
                from_account?: string | undefined
                limit?: number | undefined
              }
            }
            output: Journal[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                status?: JournalStatus | undefined
                entry_type?: 'JNLC' | 'JNLS' | undefined
                to_account?: string | undefined
                from_account?: string | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                status?: JournalStatus | undefined
                entry_type?: 'JNLC' | 'JNLS' | undefined
                to_account?: string | undefined
                from_account?: string | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateJournalRequest
            }
            output: Journal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateJournalRequest
            }
            output: string
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateJournalRequest
            }
            output: string
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateJournalRequest
            }
            output: string
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateJournalRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/journals/:journal_id': {
      $delete:
        | {
            input: { param: { journal_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { journal_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { journal_id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
      $get: {
        input: { param: { journal_id: string } }
        output: Journal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/journals/batch': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BatchJournalRequest
            }
            output: BatchJournalResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BatchJournalRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/journals/reverse_batch': {
      $post:
        | {
            input: { json: ReverseBatchJournalRequest }
            output: JNLC[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReverseBatchJournalRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ReverseBatchJournalRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: ReverseBatchJournalRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/oauth/authorize': {
      $post:
        | {
            input: { json: OAuthTokenRequest }
            output: AuthorizeOAuthTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: OAuthTokenRequest }; output: string; outputFormat: 'json'; status: 401 }
        | { input: { json: OAuthTokenRequest }; output: string; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/oauth/clients/:client_id': {
      $get:
        | {
            input: { param: { client_id: string } } & {
              query: {
                response_type?: 'code' | 'token' | undefined
                redirect_uri?: string | undefined
                scope?: string | undefined
              }
            }
            output: OathClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              query: {
                response_type?: 'code' | 'token' | undefined
                redirect_uri?: string | undefined
                scope?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v1/oauth/token': {
      $post:
        | {
            input: { json: OAuthTokenRequest }
            output: IssueOAuthTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: OAuthTokenRequest }; output: string; outputFormat: 'json'; status: 401 }
        | { input: { json: OAuthTokenRequest }; output: string; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/options/contracts': {
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
            type?: 'call' | 'put' | undefined
            style?: 'american' | 'european' | undefined
            strike_price_gte?: number | undefined
            strike_price_lte?: number | undefined
            page_token?: string | undefined
            limit?: number | undefined
            ppind?: boolean | undefined
          }
        }
        output: { next_page_token?: NextPageToken | undefined; option_contracts: OptionContract[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/options/contracts/:symbol_or_id': {
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
    '/v1/rebalancing/portfolios': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                description?: string | undefined
                symbol?: string | undefined
                portfolio_id?: string | undefined
                status?: 'active' | 'inactive' | 'needs_adjustment' | undefined
              }
            }
            output: Portfolio[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                description?: string | undefined
                symbol?: string | undefined
                portfolio_id?: string | undefined
                status?: 'active' | 'inactive' | 'needs_adjustment' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                description?: string | undefined
                symbol?: string | undefined
                portfolio_id?: string | undefined
                status?: 'active' | 'inactive' | 'needs_adjustment' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                name?: string | undefined
                description?: string | undefined
                symbol?: string | undefined
                portfolio_id?: string | undefined
                status?: 'active' | 'inactive' | 'needs_adjustment' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                name?: string | undefined
                description?: string | undefined
                symbol?: string | undefined
                portfolio_id?: string | undefined
                status?: 'active' | 'inactive' | 'needs_adjustment' | undefined
              }
            }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                cooldown_days?: number | undefined
                description?: string | undefined
                name?: string | undefined
                rebalance_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Portfolio
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                cooldown_days?: number | undefined
                description?: string | undefined
                name?: string | undefined
                rebalance_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                cooldown_days?: number | undefined
                description?: string | undefined
                name?: string | undefined
                rebalance_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                cooldown_days?: number | undefined
                description?: string | undefined
                name?: string | undefined
                rebalance_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                cooldown_days?: number | undefined
                description?: string | undefined
                name?: string | undefined
                rebalance_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              json: {
                cooldown_days?: number | undefined
                description?: string | undefined
                name?: string | undefined
                rebalance_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                cooldown_days?: number | undefined
                description?: string | undefined
                name?: string | undefined
                rebalance_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rebalancing/portfolios/:portfolio_id': {
      $delete:
        | {
            input: { param: { portfolio_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { portfolio_id: string } }
            output: Portfolio
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { portfolio_id: string } }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Portfolio
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { portfolio_id: string } } & {
              json: {
                cooldown_days: number
                description?: string | undefined
                name?: string | undefined
                rebalancing_conditions?: RebalancingConditions[] | undefined
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rebalancing/runs': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                status?: string | undefined
                type?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: { next_page_token: number | null; runs: PortfolioRun[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                status?: string | undefined
                type?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                status?: string | undefined
                type?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                status?: string | undefined
                type?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                status?: string | undefined
                type?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                account_id: string
                amount?: (string | number | null) | undefined
                type: 'full_rebalance' | 'invest_cash'
                weights?: PortfolioWeightRequest[] | undefined
              }
            }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rebalancing/runs/:run_id': {
      $delete:
        | { input: { param: { run_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | {
            input: { param: { run_id: string } }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { run_id: string } }
            output: PortfolioRun
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { run_id: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | {
            input: { param: { run_id: string } }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rebalancing/subscriptions': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: { next_page_token: number | null; subscriptions: PortfolioSubscription[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                page_token?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: PortfolioSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                account_id?: string | undefined
                portfolio_id?: string | undefined
                trade_marker?: {} | undefined
              }
            }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/rebalancing/subscriptions/:subscription_id': {
      $delete:
        | {
            input: { param: { subscription_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { subscription_id: string } }
            output: PortfolioSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_id: string } }
            output: Error | UnexpectedError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/reporting/eod/aggregate_positions': {
      $get: {
        input: {
          query: { date: string; symbols?: string | undefined; firm_accounts?: string | undefined }
        }
        output: AggregatePositionResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/reporting/eod/cash_interest': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                date?: string | undefined
                after?: string | undefined
                before?: string | undefined
                direction?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: EoDCashInterestReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                date?: string | undefined
                after?: string | undefined
                before?: string | undefined
                direction?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                date?: string | undefined
                after?: string | undefined
                before?: string | undefined
                direction?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                date?: string | undefined
                after?: string | undefined
                before?: string | undefined
                direction?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                date?: string | undefined
                after?: string | undefined
                before?: string | undefined
                direction?: string | undefined
                page_size?: number | undefined
                page_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/reporting/eod/positions': {
      $get:
        | {
            input: {
              query: {
                account_id?: string | undefined
                asset?: string | undefined
                asof?: string | undefined
                page_token?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              asof?: string | undefined
              next_page_token?: NextPageToken | undefined
              positions?: { [x: string]: Position[] } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_id?: string | undefined
                asset?: string | undefined
                asof?: string | undefined
                page_token?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/v1/testing/incoming_wires': {
      $post:
        | {
            input: { json: CreateSimulatedIncomingWireRequest }
            output: SimulatedIncomingWire
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateSimulatedIncomingWireRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSimulatedIncomingWireRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateSimulatedIncomingWireRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateSimulatedIncomingWireRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateSimulatedIncomingWireRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/account': {
      $get: {
        input: { param: { account_id: string } }
        output: TradeAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/trading/accounts/:account_id/account/configurations': {
      $patch: {
        input: { param: { account_id: string } } & { json: AccountConfigurations }
        output: AccountConfigurations
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/trading/accounts/:account_id/account/portfolio/history': {
      $get:
        | {
            input: { param: { account_id: string } } & {
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
            input: { param: { account_id: string } } & {
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
            status: 401
          }
        | {
            input: { param: { account_id: string } } & {
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
            input: { param: { account_id: string } } & {
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
            input: { param: { account_id: string } } & {
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
            input: { param: { account_id: string } } & {
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
            input: { param: { account_id: string } } & {
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
            input: { param: { account_id: string } } & {
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
    '/v1/trading/accounts/:account_id/limits': {
      $get:
        | {
            input: { param: { account_id: string } }
            output: AccountTradingLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/orders': {
      $delete:
        | {
            input: { param: { account_id: string } }
            output: OrderClosedResponse[]
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { account_id: string } } & {
              query: {
                status?: 'open' | 'closed' | 'all' | undefined
                limit?: number | undefined
                asset_class?: ('us_equity' | 'us_option' | 'crypto' | 'all')[] | undefined
                after?: string | undefined
                until?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                nested?: boolean | undefined
                symbols?: string | undefined
                qty_above?: string | undefined
                qty_below?: string | undefined
                subtag?: string | undefined
              }
            }
            output: Order[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & {
              query: {
                status?: 'open' | 'closed' | 'all' | undefined
                limit?: number | undefined
                asset_class?: ('us_equity' | 'us_option' | 'crypto' | 'all')[] | undefined
                after?: string | undefined
                until?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                nested?: boolean | undefined
                symbols?: string | undefined
                qty_above?: string | undefined
                qty_below?: string | undefined
                subtag?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & {
              query: {
                status?: 'open' | 'closed' | 'all' | undefined
                limit?: number | undefined
                asset_class?: ('us_equity' | 'us_option' | 'crypto' | 'all')[] | undefined
                after?: string | undefined
                until?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                nested?: boolean | undefined
                symbols?: string | undefined
                qty_above?: string | undefined
                qty_below?: string | undefined
                subtag?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { account_id: string } } & { json: CreateOrderRequest }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { json: CreateOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { json: CreateOrderRequest }
            output: string
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string } } & { json: CreateOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string } } & { json: CreateOrderRequest }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/orders/:order_id': {
      $delete:
        | {
            input: { param: { account_id: string; order_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string; order_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string; order_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { account_id: string; order_id: string } }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; order_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string; order_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { account_id: string; order_id: string } } & {
              json: UpdateOrderRequest
            }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; order_id: string } } & {
              json: UpdateOrderRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string; order_id: string } } & {
              json: UpdateOrderRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account_id: string; order_id: string } } & {
              json: UpdateOrderRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/orders/estimation': {
      $post: {
        input: { param: { account_id: string } } & {
          json: {
            notional?: string | undefined
            side?: OrderSide | undefined
            swap_fee_bps?: number | undefined
            symbol?: string | undefined
            time_in_force?: TimeInForce | undefined
            type?: OrderType | undefined
          }
        }
        output: Order
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/trading/accounts/:account_id/orders:by_client_order_id': {
      $get:
        | {
            input: { param: { account_id: string } } & { query: { client_order_id: string } }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string } } & { query: { client_order_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string } } & { query: { client_order_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/positions': {
      $delete:
        | {
            input: { param: { account_id: string } } & {
              query: { cancel_orders?: boolean | undefined }
            }
            output: PositionClosedResponse[]
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { account_id: string } } & {
              query: { cancel_orders?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_id: string } } & {
              query: { cancel_orders?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get: {
        input: { param: { account_id: string } }
        output: Position[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/trading/accounts/:account_id/positions/:symbol_or_asset_id': {
      $delete: {
        input: { param: { account_id: string; symbol_or_asset_id: string } } & {
          query: { qty?: string | undefined; percentage?: string | undefined }
        }
        output: Order
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { account_id: string; symbol_or_asset_id: string } }
            output: Position
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; symbol_or_asset_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/positions/:symbol_or_contract_id/do-not-exercise': {
      $post:
        | {
            input: { param: { account_id: string; symbol_or_contract_id: string } } & {
              json: DoNotExerciseRequest
            }
            output: DoNotExerciseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; symbol_or_contract_id: string } } & {
              json: DoNotExerciseRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; symbol_or_contract_id: string } } & {
              json: DoNotExerciseRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/positions/:symbol_or_contract_id/exercise': {
      $post:
        | {
            input: { param: { account_id: string; symbol_or_contract_id: string } } & {
              json: ExerciseRequest
            }
            output: ExerciseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; symbol_or_contract_id: string } } & {
              json: ExerciseRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/trading/accounts/:account_id/watchlists': {
      $get: {
        input: { param: { account_id: string } }
        output: WatchlistWithoutAsset[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { account_id: string } } & { json: CreateWatchlistRequest }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/trading/accounts/:account_id/watchlists/:watchlist_id': {
      $delete: {
        input: { param: { account_id: string; watchlist_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { account_id: string; watchlist_id: string } }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { account_id: string; watchlist_id: string } } & {
              json: { symbol?: string | undefined }
            }
            output: Watchlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; watchlist_id: string } } & {
              json: { symbol?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: string; watchlist_id: string } } & {
              json: { symbol?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
      $put: {
        input: { param: { account_id: string; watchlist_id: string } } & {
          json: CreateWatchlistRequest
        }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/trading/accounts/:account_id/watchlists/:watchlist_id/:symbol': {
      $delete:
        | {
            input: { param: { account_id: string; watchlist_id: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { account_id: string; watchlist_id: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/transfers/jit/:ledger_id/balances': {
      $get: {
        input: { param: { ledger_id: string } } & {
          query: { start_date?: string | undefined; end_date?: string | undefined }
        }
        output: {
          activity_amount?: string | undefined
          ending_balance?: string | undefined
          id?: string | undefined
          ledger_name?: string | undefined
          ledger_no?: string | undefined
          starting_balance?: string | undefined
          transactions?: Transaction[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/transfers/jit/ledgers': {
      $get: { input: {}; output: JITLedgerAccount[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/transfers/jit/limits': {
      $get: { input: {}; output: DailyTradingLimit; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/transfers/jit/reports': {
      $get:
        | {
            input: {
              query: {
                report_type: JITReportType
                system_date: string
                asset_class?: 'us_equity' | 'crypto' | undefined
                response_type?: 'inline' | 'download_url' | undefined
              }
            }
            output: JITReportDownloadURL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                report_type: JITReportType
                system_date: string
                asset_class?: 'us_equity' | 'crypto' | undefined
                response_type?: 'inline' | 'download_url' | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                report_type: JITReportType
                system_date: string
                asset_class?: 'us_equity' | 'crypto' | undefined
                response_type?: 'inline' | 'download_url' | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/wallets/fees/estimate': {
      $get:
        | {
            input: {
              query: {
                asset?: string | undefined
                from_address?: string | undefined
                to_address?: string | undefined
                amount?: string | undefined
              }
            }
            output: { fee?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                asset?: string | undefined
                from_address?: string | undefined
                to_address?: string | undefined
                amount?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/wallets/travel-rule/vasps': {
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
    '/v2beta1/accounts/:account_id/events/activities/:event_id': {
      $get: {
        input: { param: { account_id: string; event_id: string } }
        output: ActivityEventV2
        outputFormat: 'text'
        status: 200
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
    '/v2/calendar/:market': {
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
    '/v2/clock': {
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
  } & {
    '/v2/events/admin-actions': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
          }
        }
        output: (
          | AdminActionLegacyNote
          | AdminActionLiquidation
          | AdminActionTransactionCancel
          | AdminActionAcatsStatus
        )[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/events/funding/status': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
          }
        }
        output: StatusFundingEvent[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/events/ipos': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
          }
        }
        output: IPOEvent[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/events/journals/status': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
            id?: string | undefined
          }
        }
        output: JournalStatusEventV2[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/events/rebalancer': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
          }
        } & { header: { 'Last-Event-Id'?: string | undefined } }
        output: RebalancerEvent[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/events/system': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
          }
        }
        output: SystemEventV2[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/events/trades': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
          }
        }
        output: TradeUpdateEventV2[]
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
