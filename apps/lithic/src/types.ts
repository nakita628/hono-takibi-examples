type Address = {
  address1: string
  address2?: string | undefined
  city: string
  country: string
  postal_code?: (string | null) | undefined
  state?: (string | null) | undefined
}
type AccountHolderIndividualResponse = {
  address: Address
  dob: string
  email: string
  first_name: string
  last_name: string
  phone_number: string
  entity_token: string
}
type AccountHolderBusinessResponse = {
  address: Address
  dba_business_name: string
  government_id: string
  legal_business_name: string
  parent_company?: string | undefined
  phone_numbers: string[]
  entity_token: string
}
type AccountHolderVerificationApplication = {
  created?: string | undefined
  status?:
    | 'ACCEPTED'
    | 'PENDING_REVIEW'
    | 'PENDING_DOCUMENT'
    | 'PENDING_RESUBMIT'
    | 'REJECTED'
    | undefined
  status_reasons?:
    | (
        | 'ADDRESS_VERIFICATION_FAILURE'
        | 'AGE_THRESHOLD_FAILURE'
        | 'COMPLETE_VERIFICATION_FAILURE'
        | 'DOB_VERIFICATION_FAILURE'
        | 'ID_VERIFICATION_FAILURE'
        | 'MAX_DOCUMENT_ATTEMPTS'
        | 'MAX_RESUBMISSION_ATTEMPTS'
        | 'NAME_VERIFICATION_FAILURE'
        | 'OTHER_VERIFICATION_FAILURE'
        | 'RISK_THRESHOLD_FAILURE'
        | 'WATCHLIST_ALERT_FAILURE'
      )[]
    | undefined
  updated?: string | undefined
}
type RequiredDocument = {
  entity_token: string
  valid_documents: string[]
  status_reasons: string[]
}
type AccountHolder = {
  account_token?: string | undefined
  beneficial_owner_individuals?: AccountHolderIndividualResponse[] | undefined
  business_account_token?: string | undefined
  business_entity?: AccountHolderBusinessResponse | undefined
  control_person?: AccountHolderIndividualResponse | undefined
  created: string
  email?: string | undefined
  exemption_type?: 'AUTHORIZED_USER' | 'PREPAID_CARD_USER' | undefined
  external_id?: string | undefined
  individual?: AccountHolderIndividualResponse | undefined
  naics_code?: string | undefined
  nature_of_business?: string | undefined
  phone_number?: string | undefined
  status?:
    | 'ACCEPTED'
    | 'PENDING_REVIEW'
    | 'PENDING_DOCUMENT'
    | 'PENDING_RESUBMIT'
    | 'REJECTED'
    | undefined
  status_reasons?:
    | (
        | 'ADDRESS_VERIFICATION_FAILURE'
        | 'AGE_THRESHOLD_FAILURE'
        | 'COMPLETE_VERIFICATION_FAILURE'
        | 'DOB_VERIFICATION_FAILURE'
        | 'ID_VERIFICATION_FAILURE'
        | 'MAX_DOCUMENT_ATTEMPTS'
        | 'MAX_RESUBMISSION_ATTEMPTS'
        | 'NAME_VERIFICATION_FAILURE'
        | 'OTHER_VERIFICATION_FAILURE'
        | 'RISK_THRESHOLD_FAILURE'
        | 'WATCHLIST_ALERT_FAILURE'
      )[]
    | undefined
  token: string
  user_type?: 'BUSINESS' | 'INDIVIDUAL' | undefined
  verification_application?: AccountHolderVerificationApplication | undefined
  required_documents?: RequiredDocument[] | undefined
  website_url?: string | undefined
}
type Error = { debugging_request_id: string; message: string }
type KybIndividual = {
  address?: Address | undefined
  dob?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  government_id?: string | undefined
  last_name?: string | undefined
  phone_number?: string | undefined
}
type BusinessEntity = {
  address: Address
  dba_business_name?: string | undefined
  government_id: string
  legal_business_name: string
  parent_company?: string | undefined
  phone_numbers: string[]
}
type Kyb = {
  beneficial_owner_individuals: KybIndividual[]
  business_entity: BusinessEntity
  control_person: KybIndividual
  external_id?: string | undefined
  kyb_passed_timestamp?: string | undefined
  naics_code?: string | undefined
  nature_of_business: string
  tos_timestamp: string
  website_url?: string | undefined
  workflow: 'KYB_BASIC' | 'KYB_BYO'
}
type KybDelegatedIndividual = {
  address?: Address | undefined
  dob?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  government_id?: string | undefined
  last_name?: string | undefined
  phone_number?: string | undefined
}
type KybDelegatedBusinessEntity = {
  address: Address
  dba_business_name?: string | undefined
  government_id?: string | undefined
  legal_business_name: string
  parent_company?: string | undefined
  phone_numbers?: string[] | undefined
}
type KybDelegated = {
  beneficial_owner_individuals?: KybDelegatedIndividual[] | undefined
  business_entity: KybDelegatedBusinessEntity
  control_person?: KybDelegatedIndividual | undefined
  external_id?: string | undefined
  naics_code?: string | undefined
  nature_of_business?: string | undefined
  tos_timestamp?: string | undefined
  website_url?: string | undefined
  workflow?: 'KYB_DELEGATED' | undefined
}
type KycIndividual = {
  address?: Address | undefined
  dob?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  government_id?: string | undefined
  last_name?: string | undefined
  phone_number?: string | undefined
}
type Kyc = {
  external_id?: string | undefined
  individual: KycIndividual
  kyc_passed_timestamp?: string | undefined
  tos_timestamp: string
  workflow: 'KYC_BASIC' | 'KYC_BYO'
}
type KycExempt = {
  address: Address
  business_account_token?: string | undefined
  email: string
  external_id?: string | undefined
  first_name: string
  kyc_exemption_type: 'AUTHORIZED_USER' | 'PREPAID_CARD_USER'
  last_name: string
  phone_number: string
  workflow: 'KYC_EXEMPT'
}
type StatusReasons =
  | 'ADDRESS_VERIFICATION_FAILURE'
  | 'AGE_THRESHOLD_FAILURE'
  | 'COMPLETE_VERIFICATION_FAILURE'
  | 'DOB_VERIFICATION_FAILURE'
  | 'ID_VERIFICATION_FAILURE'
  | 'MAX_DOCUMENT_ATTEMPTS'
  | 'MAX_RESUBMISSION_ATTEMPTS'
  | 'NAME_VERIFICATION_FAILURE'
  | 'OTHER_VERIFICATION_FAILURE'
  | 'RISK_THRESHOLD_FAILURE'
  | 'WATCHLIST_ALERT_FAILURE'
  | 'PRIMARY_BUSINESS_ENTITY_ID_VERIFICATION_FAILURE'
  | 'PRIMARY_BUSINESS_ENTITY_ADDRESS_VERIFICATION_FAILURE'
  | 'PRIMARY_BUSINESS_ENTITY_NAME_VERIFICATION_FAILURE'
  | 'PRIMARY_BUSINESS_ENTITY_BUSINESS_OFFICERS_NOT_MATCHED'
  | 'PRIMARY_BUSINESS_ENTITY_SOS_FILING_INACTIVE'
  | 'PRIMARY_BUSINESS_ENTITY_SOS_NOT_MATCHED'
  | 'PRIMARY_BUSINESS_ENTITY_CMRA_FAILURE'
  | 'PRIMARY_BUSINESS_ENTITY_WATCHLIST_FAILURE'
  | 'PRIMARY_BUSINESS_ENTITY_REGISTERED_AGENT_FAILURE'
  | 'CONTROL_PERSON_BLOCKLIST_ALERT_FAILURE'
  | 'CONTROL_PERSON_ID_VERIFICATION_FAILURE'
  | 'CONTROL_PERSON_DOB_VERIFICATION_FAILURE'
  | 'CONTROL_PERSON_NAME_VERIFICATION_FAILURE'
type AddressPatch = {
  address1?: string | undefined
  address2?: string | undefined
  city?: string | undefined
  country?: string | undefined
  postal_code?: (string | null) | undefined
  state?: (string | null) | undefined
}
type KybIndividualPatch = {
  entity_token?: string | undefined
  address?: AddressPatch | undefined
  dob?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone_number?: string | undefined
  government_id?: string | undefined
}
type KybBusinessEntityPatch = {
  entity_token: string
  address?: AddressPatch | undefined
  dba_business_name?: string | undefined
  government_id?: string | undefined
  legal_business_name?: string | undefined
  parent_company?: string | undefined
  phone_numbers?: string[] | undefined
}
type KybPatchRequest = {
  beneficial_owner_individuals?: KybIndividualPatch[] | undefined
  business_entity?: KybBusinessEntityPatch | undefined
  control_person?: KybIndividualPatch | undefined
  external_id?: string | undefined
  naics_code?: string | undefined
  nature_of_business?: string | undefined
  website_url?: string | undefined
}
type KycIndividualPatch = {
  entity_token?: string | undefined
  address?: AddressPatch | undefined
  dob?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone_number?: string | undefined
  government_id?: string | undefined
}
type KycPatchRequest = {
  individual?: KycIndividualPatch | undefined
  external_id?: string | undefined
}
type PatchRequest = {
  email?: string | undefined
  phone_number?: string | undefined
  address?: AddressPatch | undefined
  business_account_token?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  legal_business_name?: string | undefined
}
type Status = 'ACCEPTED' | 'PENDING_DOCUMENT' | 'PENDING_RESUBMIT' | 'REJECTED'
type VerificationApplication = {
  created: string
  status: Status
  status_reasons: StatusReasons[]
  updated: string
  ky_passed_at?: string | undefined
}
type Address2 = {
  address1: string
  address2?: string | undefined
  city: string
  country: string
  postal_code?: (string | null) | undefined
  state?: (string | null) | undefined
}
type Individual2 = {
  address?: Address2 | undefined
  dob?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone_number?: string | undefined
  government_id?: string | undefined
}
type KybBusinessEntity = {
  address: Address2
  dba_business_name?: string | undefined
  government_id: string
  legal_business_name: string
  parent_company?: (string | null) | undefined
  phone_numbers: string[]
}
type KybKycPatchResponse = {
  token?: string | undefined
  account_token?: string | undefined
  business_account_token?: (string | null) | undefined
  created?: string | undefined
  exemption_type?: 'AUTHORIZED_USER' | 'PREPAID_CARD_USER' | undefined
  external_id?: string | undefined
  user_type?: 'BUSINESS' | 'INDIVIDUAL' | undefined
  verification_application?: VerificationApplication | undefined
  individual?: Individual2 | undefined
  business_entity?: KybBusinessEntity | undefined
  beneficial_owner_individuals?: Individual2[] | undefined
  control_person?: Individual2 | undefined
  naics_code?: string | undefined
  nature_of_business?: string | undefined
  website_url?: string | undefined
  email?: string | undefined
  phone_number?: string | undefined
  status?: Status | undefined
  status_reasons?: StatusReasons[] | undefined
  required_documents?: RequiredDocument[] | undefined
}
type PatchResponse = {
  token?: string | undefined
  email?: string | undefined
  phone_number?: string | undefined
  business_account_token?: (string | null) | undefined
  address?: Address2 | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  legal_business_name?: string | undefined
}
type DocumentType =
  | 'DRIVERS_LICENSE'
  | 'PASSPORT'
  | 'PASSPORT_CARD'
  | 'EIN_LETTER'
  | 'TAX_RETURN'
  | 'OPERATING_AGREEMENT'
  | 'CERTIFICATE_OF_FORMATION'
  | 'CERTIFICATE_OF_GOOD_STANDING'
  | 'ARTICLES_OF_INCORPORATION'
  | 'ARTICLES_OF_ORGANIZATION'
  | 'BYLAWS'
  | 'GOVERNMENT_BUSINESS_LICENSE'
  | 'PARTNERSHIP_AGREEMENT'
  | 'SS4_FORM'
  | 'BANK_STATEMENT'
  | 'UTILITY_BILL_STATEMENT'
  | 'SSN_CARD'
  | 'ITIN_LETTER'
  | 'FINCEN_BOI_REPORT'
type DocumentUploadStatus =
  | 'ACCEPTED'
  | 'REJECTED'
  | 'PENDING_UPLOAD'
  | 'UPLOADED'
  | 'PARTIAL_APPROVAL'
type DocumentUploadStatusReasons =
  | 'DOCUMENT_MISSING_REQUIRED_DATA'
  | 'DOCUMENT_UPLOAD_TOO_BLURRY'
  | 'FILE_SIZE_TOO_LARGE'
  | 'INVALID_DOCUMENT_TYPE'
  | 'INVALID_DOCUMENT_UPLOAD'
  | 'INVALID_ENTITY'
  | 'DOCUMENT_EXPIRED'
  | 'DOCUMENT_ISSUED_GREATER_THAN_30_DAYS'
  | 'DOCUMENT_TYPE_NOT_SUPPORTED'
  | 'UNKNOWN_FAILURE_REASON'
  | 'UNKNOWN_ERROR'
type Document = {
  token: string
  account_holder_token: string
  document_type: DocumentType
  entity_token: string
  required_document_uploads: {
    image_type: 'FRONT' | 'BACK'
    status: DocumentUploadStatus
    status_reasons: DocumentUploadStatusReasons[]
    upload_url: string
    token: string
    accepted_entity_status_reasons: string[]
    rejected_entity_status_reasons: string[]
    created: string
    updated: string
  }[]
}
type EntityType = 'BENEFICIAL_OWNER_INDIVIDUAL' | 'CONTROL_PERSON'
type CreateEntityRequest = {
  address?: Address2 | undefined
  dob?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone_number?: string | undefined
  government_id?: string | undefined
  type: EntityType
}
type EntityStatus = 'ACCEPTED' | 'INACTIVE' | 'PENDING_REVIEW' | 'REJECTED'
type CreateEntityResponse = {
  account_holder_token: string
  created: string
  status: EntityStatus
  status_reasons: StatusReasons[]
  required_documents: RequiredDocument[]
  token: string
}
type EntityResponse = {
  account_holder_token: string
  token: string
  type: EntityType
  status: EntityStatus
  first_name: string | null
  last_name: string | null
  email: string | null
  phone_number: string | null
  dob: string | null
  address: Address2
}
type AccountConfiguration = {
  account_holder?:
    | { business_account_token: string; email: string; phone_number: string; token: string }
    | undefined
  auth_rule_tokens?: string[] | undefined
  cardholder_currency?: string | undefined
  spend_limit: { daily: number; lifetime: number; monthly: number }
  state: 'ACTIVE' | 'PAUSED' | 'CLOSED'
  substatus?:
    | 'FRAUD_IDENTIFIED'
    | 'SUSPICIOUS_ACTIVITY'
    | 'RISK_VIOLATION'
    | 'END_USER_REQUEST'
    | 'ISSUER_REQUEST'
    | 'NOT_ACTIVE'
    | 'INTERNAL_REVIEW'
    | 'OTHER'
    | undefined
  comment?: string | undefined
  token: string
  verification_address?:
    | {
        address1: string
        address2?: string | undefined
        city: string
        country: string
        postal_code: string
        state: string
      }
    | undefined
  created: string | null
}
type AccountSpendLimits = {
  available_spend_limit: {
    daily?: number | undefined
    lifetime?: number | undefined
    monthly?: number | undefined
  }
  spend_limit?:
    | { daily?: number | undefined; lifetime?: number | undefined; monthly?: number | undefined }
    | undefined
  spend_velocity?:
    | { daily?: number | undefined; lifetime?: number | undefined; monthly?: number | undefined }
    | undefined
}
type AuthRuleProgramEntity = { type: 'PROGRAM' }
type AuthRuleCardEntity = { type: 'CARD'; token: string }
type AuthRuleAccountEntity = { type: 'ACCOUNT'; token: string }
type AuthRuleBusinessAccountEntity = { type: 'BUSINESS_ACCOUNT'; token: string }
type AuthRuleCardTagEntity = { type: 'CARD_TAG'; key: string; value: string }
type AuthRuleEntity =
  | AuthRuleProgramEntity
  | AuthRuleCardEntity
  | AuthRuleAccountEntity
  | AuthRuleBusinessAccountEntity
  | AuthRuleCardTagEntity
type AuthRuleEntities = {
  include?: AuthRuleEntity[] | undefined
  exclude?: AuthRuleEntity[] | undefined
}
type AuthRuleType =
  | 'VELOCITY_LIMIT'
  | 'MERCHANT_LOCK'
  | 'CONDITIONAL_ACTION'
  | 'TYPESCRIPT_CODE'
  | 'OTHER'
type VelocityScope = 'CARD' | 'ACCOUNT'
type VelocityLimitPeriod =
  | { duration: number; type: 'CUSTOM' }
  | { type: 'DAY' }
  | { type: 'WEEK'; day_of_week?: number | undefined }
  | { type: 'MONTH'; day_of_month?: number | undefined }
  | { type: 'YEAR'; day_of_month?: number | undefined; month?: number | undefined }
type VelocityLimitFilters = {
  include_mccs?: (string[] | null) | undefined
  exclude_mccs?: (string[] | null) | undefined
  include_countries?: (string[] | null) | undefined
  exclude_countries?: (string[] | null) | undefined
  include_pan_entry_modes?:
    | (
        | (
            | 'AUTO_ENTRY'
            | 'BAR_CODE'
            | 'CONTACTLESS'
            | 'CREDENTIAL_ON_FILE'
            | 'ECOMMERCE'
            | 'ERROR_KEYED'
            | 'ERROR_MAGNETIC_STRIPE'
            | 'ICC'
            | 'KEY_ENTERED'
            | 'MAGNETIC_STRIPE'
            | 'MANUAL'
            | 'OCR'
            | 'SECURE_CARDLESS'
            | 'UNSPECIFIED'
            | 'UNKNOWN'
          )[]
        | null
      )
    | undefined
}
type VelocityLimitParameters = {
  scope: VelocityScope
  period: VelocityLimitPeriod
  filters?: VelocityLimitFilters | undefined
  limit_amount?: ({ [x: string]: unknown } | null) | bigint | undefined
  limit_count?: ({ [x: string]: unknown } | null) | bigint | undefined
  limit_cash_amount?: ({ [x: string]: unknown } | null) | bigint | undefined
  limit_cash_count?: ({ [x: string]: unknown } | null) | bigint | undefined
}
type MerchantLockParameters = {
  merchants: ({ [x: string]: unknown } | { [x: string]: unknown })[]
  locked_at?: string | undefined
}
type Authentication_3dsAction = 'DECLINE' | 'CHALLENGE'
type ConditionalOperation =
  | 'IS_ONE_OF'
  | 'IS_NOT_ONE_OF'
  | 'MATCHES'
  | 'DOES_NOT_MATCH'
  | 'IS_EQUAL_TO'
  | 'IS_NOT_EQUAL_TO'
  | 'IS_GREATER_THAN'
  | 'IS_GREATER_THAN_OR_EQUAL_TO'
  | 'IS_LESS_THAN'
  | 'IS_LESS_THAN_OR_EQUAL_TO'
  | 'IS_AFTER'
  | 'IS_BEFORE'
  | 'CONTAINS_ANY'
  | 'CONTAINS_ALL'
  | 'CONTAINS_NONE'
type ConditionalValue = string | bigint | number | string[] | string
type Conditional_3dsActionParameters = {
  action: Authentication_3dsAction
  conditions: {
    attribute:
      | 'MCC'
      | 'COUNTRY'
      | 'CURRENCY'
      | 'MERCHANT_ID'
      | 'DESCRIPTOR'
      | 'TRANSACTION_AMOUNT'
      | 'RISK_SCORE'
      | 'MESSAGE_CATEGORY'
      | 'ADDRESS_MATCH'
      | 'CARD_STATE'
      | 'CARD_TYPE'
      | 'CARD_PROGRAM_FAMILY'
      | 'PIN_STATUS'
      | 'CARD_AGE'
    operation: ConditionalOperation
    value: ConditionalValue
  }[]
}
type AuthorizationAction = 'DECLINE' | 'CHALLENGE'
type HoldAdjustmentAction = {
  type: 'HOLD_ADJUSTMENT'
  mode: 'REPLACE_WITH_AMOUNT' | 'ADD_PERCENTAGE' | 'ADD_AMOUNT'
  value: bigint
}
type ConditionalAuthorizationActionParameters = {
  action: AuthorizationAction | HoldAdjustmentAction
  conditions: {
    attribute:
      | 'MCC'
      | 'COUNTRY'
      | 'CURRENCY'
      | 'MERCHANT_ID'
      | 'DESCRIPTOR'
      | 'LIABILITY_SHIFT'
      | 'PAN_ENTRY_MODE'
      | 'TRANSACTION_AMOUNT'
      | 'CASH_AMOUNT'
      | 'RISK_SCORE'
      | 'CARD_TRANSACTION_COUNT_15M'
      | 'CARD_TRANSACTION_COUNT_1H'
      | 'CARD_TRANSACTION_COUNT_24H'
      | 'CARD_DECLINE_COUNT_15M'
      | 'CARD_DECLINE_COUNT_1H'
      | 'CARD_DECLINE_COUNT_24H'
      | 'CARD_STATE'
      | 'PIN_ENTERED'
      | 'PIN_STATUS'
      | 'WALLET_TYPE'
      | 'TRANSACTION_INITIATOR'
      | 'ADDRESS_MATCH'
      | 'SERVICE_LOCATION_STATE'
      | 'SERVICE_LOCATION_POSTAL_CODE'
      | 'CARD_AGE'
      | 'IS_DOMESTIC'
      | 'ACCOUNT_AGE'
      | 'AMOUNT_Z_SCORE'
      | 'AVG_TRANSACTION_AMOUNT'
      | 'STDEV_TRANSACTION_AMOUNT'
      | 'IS_NEW_COUNTRY'
      | 'IS_NEW_MCC'
      | 'IS_FIRST_TRANSACTION'
      | 'CONSECUTIVE_DECLINES'
      | 'TIME_SINCE_LAST_TRANSACTION'
      | 'DISTINCT_COUNTRY_COUNT'
      | 'IS_NEW_MERCHANT'
      | 'THREE_DS_SUCCESS_RATE'
      | 'TRAVEL_SPEED'
      | 'DISTANCE_FROM_LAST_TRANSACTION'
    parameters?:
      | {
          scope?: 'CARD' | 'ACCOUNT' | 'BUSINESS_ACCOUNT' | undefined
          interval?: 'LIFETIME' | '7D' | '30D' | '90D' | undefined
          unit?: 'MPH' | 'KPH' | 'MILES' | 'KILOMETERS' | undefined
        }
      | undefined
    operation: ConditionalOperation
    value: ConditionalValue
  }[]
}
type AchAction =
  | { type: 'APPROVE' }
  | {
      type: 'RETURN'
      code:
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
    }
type ConditionalAchActionParameters = {
  action: AchAction
  conditions: {
    attribute:
      | 'COMPANY_NAME'
      | 'COMPANY_ID'
      | 'TIMESTAMP'
      | 'TRANSACTION_AMOUNT'
      | 'SEC_CODE'
      | 'MEMO'
      | 'RECIPIENT_NAME'
    operation: ConditionalOperation
    value: ConditionalValue
  }[]
}
type TokenizationAction =
  | {
      type: 'DECLINE'
      reason?:
        | 'ACCOUNT_SCORE_1'
        | 'DEVICE_SCORE_1'
        | 'ALL_WALLET_DECLINE_REASONS_PRESENT'
        | 'WALLET_RECOMMENDED_DECISION_RED'
        | 'CVC_MISMATCH'
        | 'CARD_EXPIRY_MONTH_MISMATCH'
        | 'CARD_EXPIRY_YEAR_MISMATCH'
        | 'CARD_INVALID_STATE'
        | 'CUSTOMER_RED_PATH'
        | 'INVALID_CUSTOMER_RESPONSE'
        | 'NETWORK_FAILURE'
        | 'GENERIC_DECLINE'
        | 'DIGITAL_CARD_ART_REQUIRED'
        | undefined
    }
  | {
      type: 'REQUIRE_TFA'
      reason?:
        | 'WALLET_RECOMMENDED_TFA'
        | 'SUSPICIOUS_ACTIVITY'
        | 'DEVICE_RECENTLY_LOST'
        | 'TOO_MANY_RECENT_ATTEMPTS'
        | 'TOO_MANY_RECENT_TOKENS'
        | 'TOO_MANY_DIFFERENT_CARDHOLDERS'
        | 'OUTSIDE_HOME_TERRITORY'
        | 'HAS_SUSPENDED_TOKENS'
        | 'HIGH_RISK'
        | 'ACCOUNT_SCORE_LOW'
        | 'DEVICE_SCORE_LOW'
        | 'CARD_STATE_TFA'
        | 'HARDCODED_TFA'
        | 'CUSTOMER_RULE_TFA'
        | 'DEVICE_HOST_CARD_EMULATION'
        | undefined
    }
type ConditionalTokenizationActionParameters = {
  action: TokenizationAction
  conditions: {
    attribute:
      | 'TIMESTAMP'
      | 'TOKENIZATION_CHANNEL'
      | 'TOKENIZATION_SOURCE'
      | 'TOKEN_REQUESTOR_NAME'
      | 'WALLET_ACCOUNT_SCORE'
      | 'WALLET_DEVICE_SCORE'
      | 'WALLET_RECOMMENDED_DECISION'
      | 'WALLET_RECOMMENDATION_REASONS'
      | 'TOKEN_REQUESTOR_ID'
      | 'WALLET_TOKEN_STATUS'
      | 'CARD_STATE'
    operation: ConditionalOperation
    value: ConditionalValue
  }[]
}
type CardTransactionUpdateAction =
  | { type: 'TAG'; key: string; value: string }
  | { type: 'CREATE_CASE'; scope: 'CARD' | 'ACCOUNT' | 'PROGRAM'; queue_token: string }
type SpendVelocityFilters = {
  include_mccs?: (string[] | null) | undefined
  exclude_mccs?: (string[] | null) | undefined
  include_countries?: (string[] | null) | undefined
  exclude_countries?: (string[] | null) | undefined
  include_pan_entry_modes?:
    | (
        | (
            | 'AUTO_ENTRY'
            | 'BAR_CODE'
            | 'CONTACTLESS'
            | 'CREDENTIAL_ON_FILE'
            | 'ECOMMERCE'
            | 'ERROR_KEYED'
            | 'ERROR_MAGNETIC_STRIPE'
            | 'ICC'
            | 'KEY_ENTERED'
            | 'MAGNETIC_STRIPE'
            | 'MANUAL'
            | 'OCR'
            | 'SECURE_CARDLESS'
            | 'UNSPECIFIED'
            | 'UNKNOWN'
          )[]
        | null
      )
    | undefined
  include_tags?: ({ [x: string]: string } | null) | undefined
  exclude_tags?: ({ [x: string]: string } | null) | undefined
}
type ConditionalCardTransactionUpdateActionParameters = {
  action: CardTransactionUpdateAction
  conditions: {
    attribute:
      | 'MCC'
      | 'COUNTRY'
      | 'CURRENCY'
      | 'MERCHANT_ID'
      | 'DESCRIPTOR'
      | 'TRANSACTION_AMOUNT'
      | 'RISK_SCORE'
      | 'TRANSACTION_STATUS'
      | 'LAST_EVENT_TYPE'
      | 'LIABILITY_SHIFT'
      | 'PAN_ENTRY_MODE'
      | 'WALLET_TYPE'
      | 'CARD_AGE'
      | 'ACCOUNT_AGE'
      | 'SPEND_VELOCITY_COUNT'
      | 'SPEND_VELOCITY_AMOUNT'
      | 'AMOUNT_Z_SCORE'
      | 'AVG_TRANSACTION_AMOUNT'
      | 'STDEV_TRANSACTION_AMOUNT'
      | 'IS_NEW_COUNTRY'
      | 'IS_NEW_MCC'
      | 'IS_FIRST_TRANSACTION'
      | 'CONSECUTIVE_DECLINES'
      | 'TIME_SINCE_LAST_TRANSACTION'
      | 'DISTINCT_COUNTRY_COUNT'
      | 'IS_NEW_MERCHANT'
      | 'THREE_DS_SUCCESS_RATE'
      | 'TRAVEL_SPEED'
      | 'DISTANCE_FROM_LAST_TRANSACTION'
    parameters?:
      | {
          scope?: 'CARD' | 'ACCOUNT' | 'GLOBAL' | undefined
          period?: VelocityLimitPeriod | undefined
          filters?: SpendVelocityFilters | undefined
          interval?: 'LIFETIME' | '7D' | '30D' | '90D' | undefined
          unit?: 'MPH' | 'KPH' | 'MILES' | 'KILOMETERS' | undefined
        }
      | undefined
    operation: ConditionalOperation
    value: ConditionalValue
  }[]
}
type AchPaymentUpdateAction =
  | { type: 'TAG'; key: string; value: string }
  | { type: 'CREATE_CASE'; scope: 'FINANCIAL_ACCOUNT' | 'PROGRAM'; queue_token: string }
type ConditionalAchPaymentUpdateActionParameters = {
  action: AchPaymentUpdateAction
  conditions: {
    attribute:
      | 'TRANSACTION_AMOUNT'
      | 'SEC_CODE'
      | 'RETURN_REASON_CODE'
      | 'ACCOUNT_AGE'
      | 'EXTERNAL_BANK_ACCOUNT_AGE'
      | 'EXTERNAL_BANK_ACCOUNT_VERIFICATION_METHOD'
      | 'EXTERNAL_BANK_ACCOUNT_VERIFICATION_STATE'
      | 'EXTERNAL_BANK_ACCOUNT_OWNER_TYPE'
      | 'ACH_EVENT_TYPE'
    operation: ConditionalOperation
    value: ConditionalValue
  }[]
}
type RuleFeature = { name: string }
type TypescriptCodeParameters = { features: RuleFeature[]; code: string }
type AuthRuleParameters =
  | VelocityLimitParameters
  | MerchantLockParameters
  | Conditional_3dsActionParameters
  | ConditionalAuthorizationActionParameters
  | ConditionalAchActionParameters
  | ConditionalTokenizationActionParameters
  | ConditionalCardTransactionUpdateActionParameters
  | ConditionalAchPaymentUpdateActionParameters
  | TypescriptCodeParameters
type AuthRuleName = ({ [x: string]: unknown } | null) | string
type EventStream =
  | 'AUTHORIZATION'
  | 'THREE_DS_AUTHENTICATION'
  | 'TOKENIZATION'
  | 'ACH_CREDIT_RECEIPT'
  | 'ACH_DEBIT_RECEIPT'
  | 'CARD_TRANSACTION_UPDATE'
  | 'ACH_PAYMENT_UPDATE'
type AccountTokens = string[]
type BusinessAccountTokens = string[]
type CardTokens = string[]
type ProgramLevel = boolean
type ExcludedCardTokens = string[]
type ExcludedAccountTokens = string[]
type ExcludedBusinessAccountTokens = string[]
type CreateAuthRuleRequest =
  | {
      entities: AuthRuleEntities
      type: AuthRuleType
      parameters: AuthRuleParameters
      name?: AuthRuleName | undefined
      event_stream?: EventStream | undefined
    }
  | {
      account_tokens?: AccountTokens | undefined
      business_account_tokens?: BusinessAccountTokens | undefined
      type: AuthRuleType
      parameters: AuthRuleParameters
      name?: AuthRuleName | undefined
      event_stream?: EventStream | undefined
    }
  | {
      card_tokens: CardTokens
      type: AuthRuleType
      parameters: AuthRuleParameters
      name?: AuthRuleName | undefined
      event_stream?: EventStream | undefined
    }
  | {
      program_level: ProgramLevel
      excluded_card_tokens?: ExcludedCardTokens | undefined
      excluded_account_tokens?: ExcludedAccountTokens | undefined
      excluded_business_account_tokens?: ExcludedBusinessAccountTokens | undefined
      type: AuthRuleType
      parameters: AuthRuleParameters
      name?: AuthRuleName | undefined
      event_stream?: EventStream | undefined
    }
type AuthRuleToken = string
type AuthRuleState = 'ACTIVE' | 'INACTIVE'
type AuthRuleEntitiesResponse = { include: AuthRuleEntity[]; exclude: AuthRuleEntity[] }
type AuthRuleVersionId = number
type CurrentVersion =
  | ({ [x: string]: unknown } | null)
  | { parameters: AuthRuleParameters; version: AuthRuleVersionId }
type DraftVersion =
  | ({ [x: string]: unknown } | null)
  | {
      parameters: AuthRuleParameters
      version: AuthRuleVersionId
      state: 'PENDING' | 'SHADOWING' | 'ERROR'
      error: string | null
    }
type AuthRule = {
  token: AuthRuleToken
  state: AuthRuleState
  program_level: ProgramLevel
  card_tokens: CardTokens
  excluded_card_tokens?: ExcludedCardTokens | undefined
  excluded_account_tokens?: ExcludedAccountTokens | undefined
  excluded_business_account_tokens?: ExcludedBusinessAccountTokens | undefined
  account_tokens: AccountTokens
  business_account_tokens: BusinessAccountTokens
  entities: AuthRuleEntitiesResponse
  type: AuthRuleType
  current_version: CurrentVersion
  draft_version: DraftVersion
  name: AuthRuleName
  event_stream: EventStream
  lithic_managed: boolean
}
type Error2 = { error?: string | undefined }
type PatchAuthRuleRequest =
  | { entities?: AuthRuleEntities | undefined }
  | {
      account_tokens?: AccountTokens | undefined
      business_account_tokens?: BusinessAccountTokens | undefined
    }
  | { card_tokens?: CardTokens | undefined }
  | {
      program_level?: ProgramLevel | undefined
      excluded_card_tokens?: ExcludedCardTokens | undefined
      excluded_account_tokens?: ExcludedAccountTokens | undefined
      excluded_business_account_tokens?: ExcludedBusinessAccountTokens | undefined
    }
type PatchAuthRuleEntitiesRequest = {
  add?: AuthRuleEntities | undefined
  remove?: AuthRuleEntities | undefined
}
type SpendFeatureState = {
  scope: VelocityScope
  period: VelocityLimitPeriod
  filters: VelocityLimitFilters
  value: { amount: number; count: number }
}
type AuthRuleFeatureState = { evaluated: string; features: SpendFeatureState[] }
type AuthRuleVersionState = 'ACTIVE' | 'SHADOW' | 'INACTIVE'
type AuthRuleVersion = {
  version: AuthRuleVersionId
  state: AuthRuleVersionState
  parameters: AuthRuleParameters
  created: string
}
type DetailedResult =
  | 'ACCOUNT_DAILY_SPEND_LIMIT_EXCEEDED'
  | 'ACCOUNT_DELINQUENT'
  | 'ACCOUNT_INACTIVE'
  | 'ACCOUNT_LIFETIME_SPEND_LIMIT_EXCEEDED'
  | 'ACCOUNT_MONTHLY_SPEND_LIMIT_EXCEEDED'
  | 'ACCOUNT_PAUSED'
  | 'ACCOUNT_UNDER_REVIEW'
  | 'ADDRESS_INCORRECT'
  | 'APPROVED'
  | 'AUTH_RULE_ALLOWED_COUNTRY'
  | 'AUTH_RULE_ALLOWED_MCC'
  | 'AUTH_RULE_BLOCKED_COUNTRY'
  | 'AUTH_RULE_BLOCKED_MCC'
  | 'AUTH_RULE'
  | 'CARD_CLOSED'
  | 'CARD_CRYPTOGRAM_VALIDATION_FAILURE'
  | 'CARD_EXPIRED'
  | 'CARD_EXPIRY_DATE_INCORRECT'
  | 'CARD_INVALID'
  | 'CARD_NOT_ACTIVATED'
  | 'CARD_PAUSED'
  | 'CARD_PIN_INCORRECT'
  | 'CARD_RESTRICTED'
  | 'CARD_SECURITY_CODE_INCORRECT'
  | 'CARD_SPEND_LIMIT_EXCEEDED'
  | 'CONTACT_CARD_ISSUER'
  | 'CUSTOMER_ASA_TIMEOUT'
  | 'CUSTOM_ASA_RESULT'
  | 'DECLINED'
  | 'DO_NOT_HONOR'
  | 'DRIVER_NUMBER_INVALID'
  | 'FORMAT_ERROR'
  | 'INSUFFICIENT_FUNDING_SOURCE_BALANCE'
  | 'INSUFFICIENT_FUNDS'
  | 'LITHIC_SYSTEM_ERROR'
  | 'LITHIC_SYSTEM_RATE_LIMIT'
  | 'MALFORMED_ASA_RESPONSE'
  | 'MERCHANT_INVALID'
  | 'MERCHANT_LOCKED_CARD_ATTEMPTED_ELSEWHERE'
  | 'MERCHANT_NOT_PERMITTED'
  | 'OVER_REVERSAL_ATTEMPTED'
  | 'PIN_BLOCKED'
  | 'PROGRAM_CARD_SPEND_LIMIT_EXCEEDED'
  | 'PROGRAM_SUSPENDED'
  | 'PROGRAM_USAGE_RESTRICTION'
  | 'REVERSAL_UNMATCHED'
  | 'SCA_REQUIRED'
  | 'SECURITY_VIOLATION'
  | 'SINGLE_USE_CARD_REATTEMPTED'
  | 'SUSPECTED_FRAUD'
  | 'TRANSACTION_INVALID'
  | 'TRANSACTION_NOT_PERMITTED_TO_ACQUIRER_OR_TERMINAL'
  | 'TRANSACTION_NOT_PERMITTED_TO_ISSUER_OR_CARDHOLDER'
  | 'TRANSACTION_PREVIOUSLY_COMPLETED'
  | 'UNAUTHORIZED_MERCHANT'
  | 'VEHICLE_NUMBER_INVALID'
  | 'CARDHOLDER_CHALLENGED'
  | 'CARDHOLDER_CHALLENGE_FAILED'
type ResultAuthorizationAction = { type: 'DECLINE'; code: DetailedResult } | { type: 'CHALLENGE' }
type ResultAuthentication_3dsAction = { type: Authentication_3dsAction }
type ReportStatsV2 = {
  version: number
  state: AuthRuleVersionState
  action_counts: { [x: string]: number }
  examples: {
    event_token: string
    transaction_token?: (string | null) | undefined
    timestamp: string
    actions: (
      | ResultAuthorizationAction
      | ResultAuthentication_3dsAction
      | TokenizationAction
      | AchAction
    )[]
  }[]
}
type PerformanceReportV2 = {
  auth_rule_token: AuthRuleToken
  begin: string
  end: string
  daily_statistics: { date: string; versions: ReportStatsV2[] }[]
}
type BacktestToken = string
type BacktestSimulationParameters = { start: string; end: string }
type BacktestStatus = 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILURE'
type BacktestListItem = {
  backtest_token: BacktestToken
  simulation_parameters: BacktestSimulationParameters
  status: BacktestStatus
  created: string
}
type BacktestRequest = { start?: string | undefined; end?: string | undefined }
type BacktestStats = {
  version?: AuthRuleVersionId | undefined
  approved?: number | undefined
  declined?: number | undefined
  challenged?: number | undefined
  examples?:
    | {
        event_token?: string | undefined
        transaction_token?: (string | null) | undefined
        timestamp?: string | undefined
        decision?: 'APPROVED' | 'DECLINED' | 'CHALLENGED' | undefined
      }[]
    | undefined
}
type BacktestResults = {
  backtest_token: BacktestToken
  simulation_parameters: BacktestSimulationParameters
  results: {
    current_version?: ({ [x: string]: unknown } | null) | BacktestStats | undefined
    draft_version?: ({ [x: string]: unknown } | null) | BacktestStats | undefined
  }
  created: string
}
type AuthRuleResult =
  | { event_stream: 'AUTHORIZATION'; actions: { explanation?: string | undefined }[] }
  | {
      event_stream: 'THREE_DS_AUTHENTICATION'
      actions: { type: Authentication_3dsAction; explanation?: string | undefined }[]
    }
  | { event_stream: 'TOKENIZATION'; actions: { explanation?: string | undefined }[] }
  | {
      event_stream: 'ACH_CREDIT_RECEIPT' | 'ACH_DEBIT_RECEIPT'
      actions: { explanation?: string | undefined }[]
    }
  | { event_stream: 'CARD_TRANSACTION_UPDATE'; actions: { explanation?: string | undefined }[] }
  | { event_stream: 'ACH_PAYMENT_UPDATE'; actions: { explanation?: string | undefined }[] }
type SignalsResponse = {
  avg_transaction_amount: number | null
  stdev_transaction_amount: number | null
  approved_txn_count: number | null
  avg_transaction_amount_7d: number | null
  stdev_transaction_amount_7d: number | null
  approved_txn_count_7d: number | null
  avg_transaction_amount_30d: number | null
  stdev_transaction_amount_30d: number | null
  approved_txn_count_30d: number | null
  avg_transaction_amount_90d: number | null
  stdev_transaction_amount_90d: number | null
  approved_txn_count_90d: number | null
  is_first_transaction: boolean | null
  time_since_last_transaction_days: number | null
  three_ds_success_rate: number | null
  distinct_country_count: number | null
  distinct_mcc_count: number | null
  seen_countries: string[] | null
  seen_mccs: string[] | null
  seen_merchants: string[] | null
  first_txn_at: string | null
  last_txn_approved_at: string | null
  last_cp_country: string | null
  last_cp_postal_code: string | null
  last_cp_timestamp: string | null
  approved_txn_amount_m2: number | null
  approved_txn_amount_m2_7d: number | null
  approved_txn_amount_m2_30d: number | null
  approved_txn_amount_m2_90d: number | null
  three_ds_success_count: number | null
  three_ds_total_count: number | null
}
type Balance = {
  available_amount: number
  created: string
  currency: string
  financial_account_token: string
  financial_account_type:
    | 'CARD'
    | 'ISSUING'
    | 'OPERATING'
    | 'PROGRAM_RECEIVABLES'
    | 'RESERVE'
    | 'SECURITY'
  last_transaction_event_token: string | null
  last_transaction_token: string | null
  pending_amount: number
  total_amount: number
  updated: string
}
type CardProgram = {
  account_level_management_enabled: boolean
  cardholder_currency?: (string | null) | undefined
  created: string
  name: string
  pan_range_end: string
  pan_range_start: string
  settlement_currencies?: string[] | undefined
  token: string
}
type FundingAccount = {
  account_name?: string | undefined
  created: string
  last_four: string
  nickname?: (string | null) | undefined
  state: 'DELETED' | 'ENABLED' | 'PENDING'
  token: string
  type: 'DEPOSITORY_CHECKING' | 'DEPOSITORY_SAVINGS'
}
type SpendLimitDuration = 'ANNUALLY' | 'FOREVER' | 'MONTHLY' | 'TRANSACTION'
type Tags = { [x: string]: string }
type NonPciCardResponse = {
  account_token: string
  auth_rule_tokens?: string[] | undefined
  card_program_token: string
  bulk_order_token?: (string | null) | undefined
  replacement_for?: (string | null) | undefined
  cardholder_currency?: string | undefined
  created: string
  digital_card_art_token?: (string | null) | undefined
  exp_month?: string | undefined
  exp_year?: string | undefined
  funding: ({ [x: string]: unknown } | null) | FundingAccount
  hostname?: string | undefined
  last_four: string
  memo?: string | undefined
  network_program_token?: (string | null) | undefined
  pending_commands?: string[] | undefined
  pin_status: 'OK' | 'BLOCKED' | 'NOT_SET'
  product_id?: (string | null) | undefined
  spend_limit: number
  spend_limit_duration: SpendLimitDuration
  state: 'CLOSED' | 'OPEN' | 'PAUSED' | 'PENDING_ACTIVATION' | 'PENDING_FULFILLMENT'
  substatus?:
    | 'LOST'
    | 'COMPROMISED'
    | 'DAMAGED'
    | 'END_USER_REQUEST'
    | 'ISSUER_REQUEST'
    | 'NOT_ACTIVE'
    | 'SUSPICIOUS_ACTIVITY'
    | 'INTERNAL_REVIEW'
    | 'EXPIRED'
    | 'UNDELIVERABLE'
    | 'OTHER'
    | undefined
  comment?: string | undefined
  tags: Tags
  token: string
  type: 'MERCHANT_LOCKED' | 'PHYSICAL' | 'SINGLE_USE' | 'VIRTUAL' | 'UNLOCKED' | 'DIGITAL_WALLET'
}
type Carrier = { qr_code_url?: string | undefined }
type ShippingAddress = {
  address1: string
  address2?: string | undefined
  city: string
  country: string
  email?: string | undefined
  first_name: string
  last_name: string
  line2_text?: string | undefined
  phone_number?: string | undefined
  postal_code: string
  state: string
}
type PciCardResponse = {
  account_token: string
  auth_rule_tokens?: string[] | undefined
  card_program_token: string
  bulk_order_token?: (string | null) | undefined
  replacement_for?: (string | null) | undefined
  cardholder_currency?: string | undefined
  created: string
  digital_card_art_token?: (string | null) | undefined
  exp_month?: string | undefined
  exp_year?: string | undefined
  funding: ({ [x: string]: unknown } | null) | FundingAccount
  hostname?: string | undefined
  last_four: string
  memo?: string | undefined
  network_program_token?: (string | null) | undefined
  pending_commands?: string[] | undefined
  pin_status: 'OK' | 'BLOCKED' | 'NOT_SET'
  product_id?: (string | null) | undefined
  spend_limit: number
  spend_limit_duration: SpendLimitDuration
  state: 'CLOSED' | 'OPEN' | 'PAUSED' | 'PENDING_ACTIVATION' | 'PENDING_FULFILLMENT'
  substatus?:
    | 'LOST'
    | 'COMPROMISED'
    | 'DAMAGED'
    | 'END_USER_REQUEST'
    | 'ISSUER_REQUEST'
    | 'NOT_ACTIVE'
    | 'SUSPICIOUS_ACTIVITY'
    | 'INTERNAL_REVIEW'
    | 'EXPIRED'
    | 'UNDELIVERABLE'
    | 'OTHER'
    | undefined
  comment?: string | undefined
  tags: Tags
  token: string
  type: 'MERCHANT_LOCKED' | 'PHYSICAL' | 'SINGLE_USE' | 'VIRTUAL' | 'UNLOCKED' | 'DIGITAL_WALLET'
  pan?: string | undefined
  cvv?: string | undefined
}
type TagsPatch = { [x: string]: string | null }
type FinancialAccountBalance = {
  available_amount: number
  created: string
  currency: string
  token: string
  type: 'ISSUING' | 'OPERATING' | 'RESERVE' | 'SECURITY'
  last_transaction_event_token: string | null
  last_transaction_token: string | null
  pending_amount: number
  total_amount: number
  updated: string
}
type FinancialEventType =
  | 'ACH_ORIGINATION_CANCELLED'
  | 'ACH_ORIGINATION_INITIATED'
  | 'ACH_ORIGINATION_PROCESSED'
  | 'ACH_ORIGINATION_RELEASED'
  | 'ACH_ORIGINATION_REJECTED'
  | 'ACH_ORIGINATION_REVIEWED'
  | 'ACH_ORIGINATION_SETTLED'
  | 'ACH_RECEIPT_PROCESSED'
  | 'ACH_RECEIPT_RELEASED'
  | 'ACH_RECEIPT_SETTLED'
  | 'ACH_RETURN_INITIATED'
  | 'ACH_RETURN_PROCESSED'
  | 'ACH_RETURN_REJECTED'
  | 'ACH_RETURN_SETTLED'
  | 'AUTHORIZATION'
  | 'AUTHORIZATION_ADVICE'
  | 'AUTHORIZATION_EXPIRY'
  | 'AUTHORIZATION_REVERSAL'
  | 'BALANCE_INQUIRY'
  | 'BILLING_ERROR'
  | 'BILLING_ERROR_REVERSAL'
  | 'CARD_TO_CARD'
  | 'CASH_BACK'
  | 'CASH_BACK_REVERSAL'
  | 'CLEARING'
  | 'COLLECTION'
  | 'CORRECTION_CREDIT'
  | 'CORRECTION_DEBIT'
  | 'CREDIT_AUTHORIZATION'
  | 'CREDIT_AUTHORIZATION_ADVICE'
  | 'CURRENCY_CONVERSION'
  | 'CURRENCY_CONVERSION_REVERSAL'
  | 'DISPUTE_WON'
  | 'EXTERNAL_ACH_CANCELED'
  | 'EXTERNAL_ACH_INITIATED'
  | 'EXTERNAL_ACH_RELEASED'
  | 'EXTERNAL_ACH_REVERSED'
  | 'EXTERNAL_ACH_SETTLED'
  | 'EXTERNAL_CHECK_CANCELED'
  | 'EXTERNAL_CHECK_INITIATED'
  | 'EXTERNAL_CHECK_RELEASED'
  | 'EXTERNAL_CHECK_REVERSED'
  | 'EXTERNAL_CHECK_SETTLED'
  | 'EXTERNAL_FEDNOW_CANCELED'
  | 'EXTERNAL_FEDNOW_INITIATED'
  | 'EXTERNAL_FEDNOW_RELEASED'
  | 'EXTERNAL_FEDNOW_REVERSED'
  | 'EXTERNAL_FEDNOW_SETTLED'
  | 'EXTERNAL_RTP_CANCELED'
  | 'EXTERNAL_RTP_INITIATED'
  | 'EXTERNAL_RTP_RELEASED'
  | 'EXTERNAL_RTP_REVERSED'
  | 'EXTERNAL_RTP_SETTLED'
  | 'EXTERNAL_STABLECOIN_CANCELED'
  | 'EXTERNAL_STABLECOIN_INITIATED'
  | 'EXTERNAL_STABLECOIN_RELEASED'
  | 'EXTERNAL_STABLECOIN_REVERSED'
  | 'EXTERNAL_STABLECOIN_SETTLED'
  | 'EXTERNAL_TRANSFER_CANCELED'
  | 'EXTERNAL_TRANSFER_INITIATED'
  | 'EXTERNAL_TRANSFER_RELEASED'
  | 'EXTERNAL_TRANSFER_REVERSED'
  | 'EXTERNAL_TRANSFER_SETTLED'
  | 'EXTERNAL_WIRE_CANCELED'
  | 'EXTERNAL_WIRE_INITIATED'
  | 'EXTERNAL_WIRE_RELEASED'
  | 'EXTERNAL_WIRE_REVERSED'
  | 'EXTERNAL_WIRE_SETTLED'
  | 'FEE'
  | 'FEE_REVERSAL'
  | 'FINANCIAL_AUTHORIZATION'
  | 'FINANCIAL_CREDIT_AUTHORIZATION'
  | 'INSTALLMENT_FEE'
  | 'INSTALLMENT_FEE_REVERSAL'
  | 'INTEREST'
  | 'INTEREST_REVERSAL'
  | 'INTERNAL_ADJUSTMENT'
  | 'INTRA_BANK_CANCELED'
  | 'INTRA_BANK_INITIATED'
  | 'INTRA_BANK_SETTLED'
  | 'LATE_PAYMENT'
  | 'LATE_PAYMENT_REVERSAL'
  | 'LOSS_WRITE_OFF'
  | 'PROVISIONAL_CREDIT'
  | 'PROVISIONAL_CREDIT_REVERSAL'
  | 'SERVICE'
  | 'RETURN'
  | 'RETURN_REVERSAL'
  | 'TRANSFER'
  | 'TRANSFER_INSUFFICIENT_FUNDS'
  | 'RETURNED_PAYMENT'
  | 'RETURNED_PAYMENT_REVERSAL'
  | 'LITHIC_NETWORK_PAYMENT'
  | 'LITHIC_PROGRAM_TRANSFER'
  | 'BANK_PROGRAM_TRANSFER'
  | 'ANNUAL'
  | 'ANNUAL_REVERSAL'
  | 'QUARTERLY'
  | 'QUARTERLY_REVERSAL'
  | 'MONTHLY'
  | 'MONTHLY_REVERSAL'
  | 'ACCOUNT_TO_ACCOUNT'
  | 'STABLECOIN_RECEIVED'
  | 'STABLECOIN_INITIATED'
  | 'STABLECOIN_REVIEWED'
  | 'STABLECOIN_SENT'
  | 'STABLECOIN_SETTLED'
  | 'STABLECOIN_REJECTED'
  | 'INSTANCE_TO_INSTANCE'
type FinancialEvent = {
  amount?: number | undefined
  created?: string | undefined
  result?: 'APPROVED' | 'DECLINED' | undefined
  token?: string | undefined
  type?: FinancialEventType | undefined
}
type FinancialAccountTransaction = {
  category: 'ACH' | 'CARD' | 'INTERNAL' | 'TRANSFER'
  created: string
  currency: string
  descriptor: string
  events: FinancialEvent[]
  pending_amount: number
  result: 'APPROVED' | 'DECLINED'
  settled_amount: number
  status: 'DECLINED' | 'EXPIRED' | 'PENDING' | 'RETURNED' | 'SETTLED' | 'VOIDED'
  token: string
  updated: string
}
type WebPushProvisioningResponseHeader = { kid?: string | undefined }
type WebPushProvisioningResponseJws = {
  header?: WebPushProvisioningResponseHeader | undefined
  protected?: string | undefined
  payload?: string | undefined
  signature?: string | undefined
}
type AppleWebPushProvisioningResponse = { jws: WebPushProvisioningResponseJws; state: string }
type GoogleWebPushProvisioningResponse = {
  google_opc?: string | undefined
  tsp_opc?: string | undefined
}
type WebPushProvisioningResponse =
  | AppleWebPushProvisioningResponse
  | GoogleWebPushProvisioningResponse
type ReassignAccountRequest = { new_account_token: string }
type CardSpendLimits = {
  available_spend_limit: {
    annually?: number | undefined
    forever?: number | undefined
    monthly?: number | undefined
  }
  spend_limit?:
    | { annually?: number | undefined; forever?: number | undefined; monthly?: number | undefined }
    | undefined
  spend_velocity?:
    | { annually?: number | undefined; forever?: number | undefined; monthly?: number | undefined }
    | undefined
}
type CreateEmbedSessionRequest = {
  type: 'CARD_EMBED' | 'PIN_SETTING_EMBED'
  expiration?: bigint | undefined
  max_pin_length?: number | undefined
  target_origin: string
}
type EmbedSessionResponse = { session: string }
type BulkOrderResponse = {
  token: string
  status: 'OPEN' | 'LOCKED'
  shipping_address: { [x: string]: unknown }
  shipping_method: 'BULK_EXPEDITED' | 'BULK_PRIORITY' | 'BULK_2_DAY' | 'BULK_EXPRESS'
  customer_product_id: string | null
  card_tokens: string[]
  created: string
  updated: string
}
type CreateBulkOrderRequest = {
  shipping_address: { [x: string]: unknown }
  shipping_method: 'BULK_EXPEDITED' | 'BULK_PRIORITY' | 'BULK_2_DAY' | 'BULK_EXPRESS'
  customer_product_id: string
}
type UpdateBulkOrderRequest = { status: 'LOCKED' }
type DigitalCardArt = {
  card_program_token: string
  created: string
  description: string
  is_card_program_default?: boolean | undefined
  is_enabled: boolean
  network: 'MASTERCARD' | 'VISA'
  token: string
}
type DisputeV1 = {
  amount: number
  arbitration_date: string | null
  created: string
  customer_filed_date: string | null
  customer_note: string | null
  network_claim_ids: string[] | ({ [x: string]: unknown } | null)
  network_filed_date: string | null
  network_reason_code: string | null
  prearbitration_date: string | null
  primary_claim_id: string | null
  reason:
    | 'ATM_CASH_MISDISPENSE'
    | 'CANCELLED'
    | 'DUPLICATED'
    | 'FRAUD_CARD_NOT_PRESENT'
    | 'FRAUD_CARD_PRESENT'
    | 'FRAUD_OTHER'
    | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
    | 'GOODS_SERVICES_NOT_RECEIVED'
    | 'INCORRECT_AMOUNT'
    | 'MISSING_AUTH'
    | 'OTHER'
    | 'PROCESSING_ERROR'
    | 'RECURRING_TRANSACTION_NOT_CANCELLED'
    | 'REFUND_NOT_PROCESSED'
  representment_date: string | null
  resolution_date: string | null
  resolution_note: string | null
  resolution_reason:
    | 'CASE_LOST'
    | 'NETWORK_REJECTED'
    | 'NO_DISPUTE_RIGHTS_3DS'
    | 'NO_DISPUTE_RIGHTS_BELOW_THRESHOLD'
    | 'NO_DISPUTE_RIGHTS_CONTACTLESS'
    | 'NO_DISPUTE_RIGHTS_HYBRID'
    | 'NO_DISPUTE_RIGHTS_MAX_CHARGEBACKS'
    | 'NO_DISPUTE_RIGHTS_OTHER'
    | 'PAST_FILING_DATE'
    | 'PREARBITRATION_REJECTED'
    | 'PROCESSOR_REJECTED_OTHER'
    | 'REFUNDED'
    | 'REFUNDED_AFTER_CHARGEBACK'
    | 'WITHDRAWN'
    | 'WON_ARBITRATION'
    | 'WON_FIRST_CHARGEBACK'
    | 'WON_PREARBITRATION'
    | null
  status:
    | 'ARBITRATION'
    | 'CASE_CLOSED'
    | 'CASE_WON'
    | 'NEW'
    | 'PENDING_CUSTOMER'
    | 'PREARBITRATION'
    | 'REPRESENTMENT'
    | 'SUBMITTED'
  token: string
  transaction_token: string
}
type DisputeEvidence = {
  created: string
  dispute_token: string
  download_url?: string | undefined
  filename?: string | undefined
  token: string
  upload_status: 'DELETED' | 'ERROR' | 'PENDING' | 'REJECTED' | 'UPLOADED'
  upload_url?: string | undefined
}
type FraudReportResponse = {
  transaction_token: string
  fraud_status: 'SUSPECTED_FRAUD' | 'FRAUDULENT' | 'NOT_FRAUDULENT' | 'NO_REPORTED_FRAUD'
  fraud_type?:
    | 'FIRST_PARTY_FRAUD'
    | 'ACCOUNT_TAKEOVER'
    | 'CARD_COMPROMISED'
    | 'IDENTITY_THEFT'
    | 'CARDHOLDER_MANIPULATION'
    | undefined
  comment?: (string | null) | undefined
  created_at?: (string | null) | undefined
  updated_at?: (string | null) | undefined
}
type FraudReportRequest = {
  fraud_status: 'SUSPECTED_FRAUD' | 'FRAUDULENT' | 'NOT_FRAUDULENT'
  fraud_type?:
    | 'FIRST_PARTY_FRAUD'
    | 'ACCOUNT_TAKEOVER'
    | 'CARD_COMPROMISED'
    | 'IDENTITY_THEFT'
    | 'CARDHOLDER_MANIPULATION'
    | undefined
  comment?: string | undefined
}
type TaxExemptIndicator = 'TAX_INCLUDED' | 'TAX_NOT_INCLUDED' | 'NOT_SUPPORTED' | null
type TaxData = {
  amount?: (number | null) | undefined
  exempt?: TaxExemptIndicator | undefined
  merchant_tax_id?: (string | null) | undefined
}
type LineItem = {
  product_code?: (string | null) | undefined
  description?: (string | null) | undefined
  quantity?: (string | null) | undefined
  amount?: (string | null) | undefined
  unit_amount?: (string | null) | undefined
  total_amount?: (string | null) | undefined
}
type CommonData = {
  customer_reference_number?: (string | null) | undefined
  merchant_reference_number?: (string | null) | undefined
  order_date?: (string | null) | undefined
  tax: TaxData
  line_items: LineItem[]
}
type ServiceType = 'UNKNOWN' | 'UNDEFINED' | 'SELF_SERVICE' | 'FULL_SERVICE' | 'NON_FUEL_ONLY'
type FuelType =
  | 'UNKNOWN'
  | 'REGULAR'
  | 'MID_PLUS'
  | 'PREMIUM_SUPER'
  | 'MID_PLUS_2'
  | 'PREMIUM_SUPER_2'
  | 'ETHANOL_5_7_BLEND'
  | 'MID_PLUS_ETHANOL_5_7_PERCENT_BLEND'
  | 'PREMIUM_SUPER_ETHANOL_5_7_PERCENT_BLEND'
  | 'ETHANOL_7_7_PERCENT_BLEND'
  | 'MID_PLUS_ETHANOL_7_7_PERCENT_BLEND'
  | 'GREEN_GASOLINE_REGULAR'
  | 'GREEN_GASOLINE_MID_PLUS'
  | 'GREEN_GASOLINE_PREMIUM_SUPER'
  | 'REGULAR_DIESEL_2'
  | 'PREMIUM_DIESEL_2'
  | 'REGULAR_DIESEL_1'
  | 'COMPRESSED_NATURAL_GAS'
  | 'LIQUID_PROPANE_GAS'
  | 'LIQUID_NATURAL_GAS'
  | 'E_85'
  | 'REFORMULATED_1'
  | 'REFORMULATED_2'
  | 'REFORMULATED_3'
  | 'REFORMULATED_4'
  | 'REFORMULATED_5'
  | 'DIESEL_OFF_ROAD_1_AND_2_NON_TAXABLE'
  | 'DIESEL_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_OFF_ROAD_NON_TAXABLE'
  | 'UNDEFINED_FUEL'
  | 'RACING_FUEL'
  | 'MID_PLUS_2_10_PERCENT_BLEND'
  | 'PREMIUM_SUPER_2_10_PERCENT_BLEND'
  | 'MID_PLUS_ETHANOL_2_15_PERCENT_BLEND'
  | 'PREMIUM_SUPER_ETHANOL_2_15_PERCENT_BLEND'
  | 'PREMIUM_SUPER_ETHANOL_7_7_PERCENT_BLEND'
  | 'REGULAR_ETHANOL_10_PERCENT_BLEND'
  | 'MID_PLUS_ETHANOL_10_PERCENT_BLEND'
  | 'PREMIUM_SUPER_ETHANOL_10_PERCENT_BLEND'
  | 'B2_DIESEL_BLEND_2_PERCENT_BIODIESEL'
  | 'B5_DIESEL_BLEND_5_PERCENT_BIODIESEL'
  | 'B10_DIESEL_BLEND_10_PERCENT_BIODIESEL'
  | 'B11_DIESEL_BLEND_11_PERCENT_BIODIESEL'
  | 'B15_DIESEL_BLEND_15_PERCENT_BIODIESEL'
  | 'B20_DIESEL_BLEND_20_PERCENT_BIODIESEL'
  | 'B100_DIESEL_BLEND_100_PERCENT_BIODIESEL'
  | 'B1_DIESEL_BLEND_1_PERCENT_BIODIESEL'
  | 'ADDITIZED_DIESEL_2'
  | 'ADDITIZED_DIESEL_3'
  | 'RENEWABLE_DIESEL_R95'
  | 'RENEWABLE_DIESEL_BIODIESEL_6_20_PERCENT'
  | 'DIESEL_EXHAUST_FLUID'
  | 'PREMIUM_DIESEL_1'
  | 'REGULAR_ETHANOL_15_PERCENT_BLEND'
  | 'MID_PLUS_ETHANOL_15_PERCENT_BLEND'
  | 'PREMIUM_SUPER_ETHANOL_15_PERCENT_BLEND'
  | 'PREMIUM_DIESEL_BLEND_LESS_THAN_20_PERCENT_BIODIESEL'
  | 'PREMIUM_DIESEL_BLEND_GREATER_THAN_20_PERCENT_BIODIESEL'
  | 'B75_DIESEL_BLEND_75_PERCENT_BIODIESEL'
  | 'B99_DIESEL_BLEND_99_PERCENT_BIODIESEL'
  | 'MISCELLANEOUS_FUEL'
  | 'JET_FUEL'
  | 'AVIATION_FUEL_REGULAR'
  | 'AVIATION_FUEL_PREMIUM'
  | 'AVIATION_FUEL_JP8'
  | 'AVIATION_FUEL_4'
  | 'AVIATION_FUEL_5'
  | 'BIOJET_DIESEL'
  | 'AVIATION_BIOFUEL_GASOLINE'
  | 'MISCELLANEOUS_AVIATION_FUEL'
  | 'MARINE_FUEL_1'
  | 'MARINE_FUEL_2'
  | 'MARINE_FUEL_3'
  | 'MARINE_FUEL_4'
  | 'MARINE_FUEL_5'
  | 'MARINE_OTHER'
  | 'MARINE_DIESEL'
  | 'MISCELLANEOUS_MARINE_FUEL'
  | 'KEROSENE_LOW_SULFUR'
  | 'WHITE_GAS'
  | 'HEATING_OIL'
  | 'OTHER_FUEL_NON_TAXABLE'
  | 'KEROSENE_ULTRA_LOW_SULFUR'
  | 'KEROSENE_LOW_SULFUR_NON_TAXABLE'
  | 'KEROSENE_ULTRA_LOW_SULFUR_NON_TAXABLE'
  | 'EVC_1_LEVEL_1_CHARGE_110V_15_AMP'
  | 'EVC_2_LEVEL_2_CHARGE_240V_15_40_AMP'
  | 'EVC_3_LEVEL_3_CHARGE_480V_3_PHASE_CHARGE'
  | 'BIODIESEL_BLEND_2_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_5_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_10_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_11_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_15_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_20_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'DIESEL_1_OFF_ROAD_NON_TAXABLE'
  | 'DIESEL_2_OFF_ROAD_NON_TAXABLE'
  | 'DIESEL_1_PREMIUM_OFF_ROAD_NON_TAXABLE'
  | 'DIESEL_2_PREMIUM_OFF_ROAD_NON_TAXABLE'
  | 'ADDITIVE_DOSAGE'
  | 'ETHANOL_BLENDS_E16_E84'
  | 'LOW_OCTANE_UNL'
  | 'BLENDED_DIESEL_1_AND_2'
  | 'OFF_ROAD_REGULAR_NON_TAXABLE'
  | 'OFF_ROAD_MID_PLUS_NON_TAXABLE'
  | 'OFF_ROAD_PREMIUM_SUPER_NON_TAXABLE'
  | 'OFF_ROAD_MID_PLUS_2_NON_TAXABLE'
  | 'OFF_ROAD_PREMIUM_SUPER_2_NON_TAXABLE'
  | 'RECREATIONAL_FUEL_90_OCTANE'
  | 'HYDROGEN_H35'
  | 'HYDROGEN_H70'
  | 'RENEWABLE_DIESEL_R95_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_1_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_75_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_99_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'BIODIESEL_BLEND_100_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'RENEWABLE_DIESEL_BIODIESEL_6_20_PERCENT_OFF_ROAD_NON_TAXABLE'
  | 'MISCELLANEOUS_OTHER_FUEL'
  | null
type FuelUnitOfMeasure =
  | 'GALLONS'
  | 'LITERS'
  | 'POUNDS'
  | 'KILOGRAMS'
  | 'IMPERIAL_GALLONS'
  | 'NOT_APPLICABLE'
  | 'UNKNOWN'
  | null
type FuelData = {
  type?: FuelType | undefined
  quantity?: (string | null) | undefined
  unit_price?: (number | null) | undefined
  unit_of_measure?: FuelUnitOfMeasure | undefined
}
type AmountTotals = {
  gross_sale?: (number | null) | undefined
  discount?: (number | null) | undefined
  net_sale?: (number | null) | undefined
}
type Fleet = {
  service_type?: ServiceType | undefined
  odometer?: (number | null) | undefined
  vehicle_number?: (string | null) | undefined
  driver_number?: (string | null) | undefined
  fuel: FuelData
  amount_totals: AmountTotals
}
type EnhancedData = {
  token: string
  transaction_token: string
  event_token: string
  common: CommonData
  fleet: Fleet[]
}
type EnhancedDataListResponse = { data: EnhancedData[] }
type EventType =
  | 'account_holder_document.updated'
  | 'account_holder.created'
  | 'account_holder.updated'
  | 'account_holder.verification'
  | 'auth_rules.backtest_report.created'
  | 'balance.updated'
  | 'book_transfer_transaction.created'
  | 'book_transfer_transaction.updated'
  | 'card_authorization.challenge'
  | 'card_authorization.challenge_response'
  | 'card_transaction.enhanced_data.created'
  | 'card_transaction.enhanced_data.updated'
  | 'card_transaction.updated'
  | 'card.converted'
  | 'card.created'
  | 'card.pin_updated'
  | 'card.reissued'
  | 'card.renewed'
  | 'card.shipped'
  | 'card.updated'
  | 'claim_document.accepted'
  | 'claim_document.rejected'
  | 'claim_document.uploaded'
  | 'claim.created'
  | 'claim.updated'
  | 'digital_wallet.tokenization_result'
  | 'digital_wallet.tokenization_two_factor_authentication_code'
  | 'digital_wallet.tokenization_two_factor_authentication_code_sent'
  | 'digital_wallet.tokenization_updated'
  | 'dispute_evidence.upload_failed'
  | 'dispute_transaction.created'
  | 'dispute_transaction.updated'
  | 'dispute.updated'
  | 'embed.session_generated'
  | 'embed.viewed'
  | 'external_bank_account.created'
  | 'external_bank_account.updated'
  | 'external_payment.created'
  | 'external_payment.updated'
  | 'financial_account.created'
  | 'financial_account.updated'
  | 'funding_event.created'
  | 'internal_transaction.created'
  | 'internal_transaction.updated'
  | 'loan_tape.created'
  | 'loan_tape.updated'
  | 'management_operation.created'
  | 'management_operation.updated'
  | 'network_total.created'
  | 'network_total.updated'
  | 'payment_transaction.created'
  | 'payment_transaction.updated'
  | 'settlement_report.updated'
  | 'statements.created'
  | 'three_ds_authentication.challenge'
  | 'three_ds_authentication.created'
  | 'three_ds_authentication.updated'
  | 'tokenization.approval_request'
  | 'tokenization.result'
  | 'tokenization.two_factor_authentication_code'
  | 'tokenization.two_factor_authentication_code_sent'
  | 'tokenization.updated'
type EventSubscription = {
  description: string
  disabled: boolean
  event_types?: EventType[] | undefined
  token: string
  url: string
}
type MessageAttempt = {
  created: string
  event_subscription_token: string
  event_token: string
  response: string
  response_status_code: number
  status: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS'
  token: string
  url: string
}
type Event = {
  created: string
  event_type: EventType
  payload: { [x: string]: unknown }
  token: string
}
type OwnerType = 'INDIVIDUAL' | 'BUSINESS'
type BlockchainRecipientRequest = {
  chain: string
  address: string
  address_tag?: string | undefined
  name?: string | undefined
  owner: string
  owner_type: OwnerType
  account_token: string
}
type AccountState = 'ENABLED' | 'CLOSED' | 'PAUSED'
type VerificationState = 'PENDING' | 'ENABLED' | 'FAILED_VERIFICATION' | 'INSUFFICIENT_FUNDS'
type BlockchainRecipient = {
  token: string
  chain: string
  address_tag: string | null
  external_id: string | null
  name: string | null
  owner: string
  owner_type: OwnerType
  account_token: string | null
  program_id: string
  created: string
  updated: string
  state: AccountState
  verification_state: VerificationState
}
type CreateCryptoAddressErrorResponseContext = { existing_token: string }
type CreateCryptoAddressErrorResponse = {
  debugging_request_id: string
  message: string
  context: ({ [x: string]: unknown } | null) | CreateCryptoAddressErrorResponseContext
}
type SearchableAccountTypes = 'CHECKING' | 'SAVINGS'
type VerificationMethod =
  | 'MANUAL'
  | 'MICRO_DEPOSIT'
  | 'PRENOTE'
  | 'EXTERNALLY_VERIFIED'
  | 'UNVERIFIED'
type ExternalBankAccountAddress = {
  address1: string
  address2?: (string | null) | undefined
  city: string
  state: string
  postal_code: string
  country: string
}
type BankAccountApiResponse = {
  token: string
  owner: string
  routing_number: string
  last_four: string
  name?: (string | null) | undefined
  currency: string
  country: string
  account_token?: (string | null) | undefined
  created: string
  company_id?: (string | null) | undefined
  dob?: (string | null) | undefined
  doing_business_as?: (string | null) | undefined
  user_defined_id?: (string | null) | undefined
  verification_failed_reason?: (string | null) | undefined
  verification_attempts: number
  financial_account_token?: (string | null) | undefined
  type: SearchableAccountTypes
  verification_method: VerificationMethod
  owner_type: OwnerType
  state: AccountState
  verification_state: VerificationState
  address?: ({ [x: string]: unknown } | null) | ExternalBankAccountAddress | undefined
}
type BankAccountsApiResponse = { data: BankAccountApiResponse[]; has_more: boolean }
type BankVerifiedVerificationMethod = 'MICRO_DEPOSIT' | 'PRENOTE'
type BankVerifiedCreateBankAccountApiRequest = {
  verification_method: BankVerifiedVerificationMethod
  owner_type: OwnerType
  owner: string
  account_token?: string | undefined
  company_id?: string | undefined
  doing_business_as?: string | undefined
  dob?: string | undefined
  user_defined_id?: string | undefined
  type: SearchableAccountTypes
  routing_number: string
  account_number: string
  name?: string | undefined
  country: string
  currency: string
  verification_enforcement?: boolean | undefined
  address?: ExternalBankAccountAddress | undefined
  financial_account_token: string
}
type ExternallyVerifiedVerificationMethod = 'EXTERNALLY_VERIFIED'
type ExternallyVerifiedCreateBankAccountApiRequest = {
  verification_method: ExternallyVerifiedVerificationMethod
  owner_type: OwnerType
  owner: string
  account_token?: string | undefined
  company_id?: string | undefined
  doing_business_as?: string | undefined
  dob?: string | undefined
  user_defined_id?: string | undefined
  type: SearchableAccountTypes
  routing_number: string
  account_number: string
  name?: string | undefined
  country: string
  currency: string
  address?: ExternalBankAccountAddress | undefined
}
type UnverifiedVerificationMethod = 'UNVERIFIED'
type UnverifiedCreateBankAccountApiRequest = {
  verification_method: UnverifiedVerificationMethod
  owner_type: OwnerType
  owner: string
  account_token?: string | undefined
  company_id?: string | undefined
  doing_business_as?: string | undefined
  dob?: string | undefined
  user_defined_id?: string | undefined
  type: SearchableAccountTypes
  routing_number: string
  account_number: string
  name?: string | undefined
  country: string
  currency: string
  address?: ExternalBankAccountAddress | undefined
}
type CreateExternalBankAccountErrorResponseContext = { existing_token: string }
type CreateExternalBankAccountErrorResponse = {
  debugging_request_id: string
  message: string
  context: ({ [x: string]: unknown } | null) | CreateExternalBankAccountErrorResponseContext
}
type AccountTypeExternal = 'CHECKING' | 'SAVINGS'
type UpdateBankAccountApiRequest = {
  owner?: string | undefined
  owner_type?: OwnerType | undefined
  name?: string | undefined
  company_id?: string | undefined
  address?: ExternalBankAccountAddress | undefined
  dob?: string | undefined
  doing_business_as?: string | undefined
  user_defined_id?: string | undefined
  type?: AccountTypeExternal | undefined
}
type MicroDepositVerificationRequest = { micro_deposits: number[] }
type RetryMicroDepositVerificationRequest = { financial_account_token?: string | undefined }
type RetryPrenoteVerificationRequest = { financial_account_token?: string | undefined }
type SetVerificationMethodAllowedVerificationMethods =
  | 'MICRO_DEPOSIT'
  | 'PRENOTE'
  | 'EXTERNALLY_VERIFIED'
type SetVerificationMethodRequest = {
  verification_method: SetVerificationMethodAllowedVerificationMethods
  financial_account_token?: string | undefined
}
type ExtendedCredit = { credit_extended: number }
type InterestRate = { effective_date: string; rate: string }
type PrimeRatesResponse = { data: InterestRate[]; has_more: boolean }
type InstanceFinancialAccountType =
  | 'ISSUING'
  | 'RESERVE'
  | 'OPERATING'
  | 'CHARGED_OFF_FEES'
  | 'CHARGED_OFF_INTEREST'
  | 'CHARGED_OFF_PRINCIPAL'
  | 'SECURITY'
  | 'PROGRAM_RECEIVABLES'
  | 'COLLECTION'
  | 'PROGRAM_BANK_ACCOUNTS_PAYABLE'
  | 'EARLY_DIRECT_DEPOSIT_FLOAT'
  | 'PROVISIONAL_CREDIT_ACCOUNT'
type AccountFinancialAccountType = 'ISSUING' | 'OPERATING'
type FinancialAccountStatus = 'OPEN' | 'CLOSED' | 'SUSPENDED' | 'PENDING'
type FinancialAccountSubstatus =
  | 'CHARGED_OFF_DELINQUENT'
  | 'CHARGED_OFF_FRAUD'
  | 'END_USER_REQUEST'
  | 'BANK_REQUEST'
  | 'DELINQUENT'
  | 'INTEREST_AND_FEES_PAUSED'
type AutoCollectionConfigurationResponse = { auto_collection_enabled: boolean }
type FinancialAccountCreditConfig = {
  credit_limit: number | null
  external_bank_account_token: string | null
  credit_product_token: string | null
  tier: string | null
  auto_collection_configuration:
    | ({ [x: string]: unknown } | null)
    | AutoCollectionConfigurationResponse
} | null
type FinancialAccountResponse = {
  token: string
  created: string
  updated: string
  type: InstanceFinancialAccountType | AccountFinancialAccountType
  routing_number?: (string | null) | undefined
  account_number?: (string | null) | undefined
  blockchain_addresses?: ({ [x: string]: string } | null) | undefined
  nickname: string | null
  account_token: string | null
  status: FinancialAccountStatus
  substatus: ({ [x: string]: unknown } | null) | FinancialAccountSubstatus
  user_defined_status: string | null
  is_for_benefit_of: boolean
  credit_configuration: FinancialAccountCreditConfig
}
type FinancialAccountsResponse = { data: FinancialAccountResponse[]; has_more: boolean }
type CreateFinancialAccountRequest = {
  account_token?: string | undefined
  nickname: string
  type: 'OPERATING'
  is_for_benefit_of?: boolean | undefined
}
type UpdateFinancialAccountRequest = { nickname?: string | undefined }
type OpenToBuySummary = {
  security: number
  settled_funds: number | null
  total_outstanding_spend: number
}
type OpenToBuy = { open_to_buy: number; summary: OpenToBuySummary }
type FinancialAccountCreditConfigResponse = {
  account_token: string
  credit_limit: number | null
  external_bank_account_token: string | null
  credit_product_token: string | null
  tier: string | null
  auto_collection_configuration: AutoCollectionConfigurationResponse
}
type AutoCollectionConfigurationRequest = { auto_collection_enabled?: boolean | undefined }
type FinancialAccountCreditConfigRequest = {
  credit_limit?: number | undefined
  external_bank_account_token?: string | undefined
  credit_product_token?: string | undefined
  tier?: string | undefined
  auto_collection_configuration?: AutoCollectionConfigurationRequest | undefined
}
type RegisterAccountNumberRequest = { account_number: string }
type HoldStatus = 'PENDING' | 'SETTLED' | 'EXPIRED' | 'VOIDED'
type TransactionResult = 'APPROVED' | 'DECLINED'
type HoldEventType = 'HOLD_INITIATED' | 'HOLD_VOIDED' | 'HOLD_EXPIRED' | 'HOLD_SETTLED'
type DetailedResults = 'APPROVED' | 'INSUFFICIENT_FUNDS'
type HoldEvent = {
  token: string
  type: HoldEventType
  result: TransactionResult
  detailed_results: DetailedResults[]
  amount: number
  created: string
  memo: string | null
  settling_transaction_token: string | null
}
type HoldTransaction = {
  token: string
  created: string
  updated: string
  family?: 'HOLD' | undefined
  result?: TransactionResult | undefined
  status?: HoldStatus | undefined
  financial_account_token?: string | undefined
  pending_amount?: number | undefined
  currency?: string | undefined
  events?: HoldEvent[] | undefined
  user_defined_id?: (string | null) | undefined
  expiration_datetime?: (string | null) | undefined
}
type HoldsResponse = { data: HoldTransaction[]; has_more: boolean }
type CreateHoldRequest = {
  amount: number
  memo?: (string | null) | undefined
  token?: string | undefined
  expiration_datetime?: string | undefined
  user_defined_id?: string | undefined
}
type VoidHoldRequest = { memo?: (string | null) | undefined }
type PaymentDetails = {}
type DebitDetails = {}
type CreditDetails = {}
type StatementTotals = {
  payments: number
  payment_details?: ({ [x: string]: unknown } | null) | PaymentDetails | undefined
  purchases: number
  fees: number
  debits: number
  debit_details?: ({ [x: string]: unknown } | null) | DebitDetails | undefined
  credits: number
  credit_details?: ({ [x: string]: unknown } | null) | CreditDetails | undefined
  interest: number
  cash_advances: number
  balance_transfers: number
}
type PeriodState = 'STANDARD' | 'PROMO' | 'PENALTY'
type FinancialAccountState = {
  status: FinancialAccountStatus
  substatus?: FinancialAccountSubstatus | ({ [x: string]: unknown } | null) | undefined
}
type AccountStanding = {
  period_state: PeriodState
  period_number: number
  consecutive_minimum_payments_made: number
  consecutive_minimum_payments_missed: number
  consecutive_full_payments_made: number
  days_past_due: number
  has_grace: boolean
  financial_account_state: FinancialAccountState
}
type AmountDue = { amount: number; past_due: number }
type PayoffDetails = {
  minimum_payment_months: string
  minimum_payment_total: string
  payoff_period_length_months: number | null
  payoff_period_monthly_payment_amount: number | null
  payoff_period_payment_total: number | null
}
type InterestCalculationMethod = 'DAILY' | 'AVERAGE_DAILY'
type CategoryDetails = { purchases: string; cash_advances: string; balance_transfers: string }
type InterestDetails = {
  prime_rate: string | null
  interest_calculation_method: InterestCalculationMethod
  effective_apr: CategoryDetails
  interest_for_period: CategoryDetails
  daily_balance_amounts: CategoryDetails
  minimum_interest_charged?: (number | null) | undefined
  actual_interest_charged: number | null
}
type StatementType = 'INITIAL' | 'PERIOD_END' | 'FINAL'
type StatementResponse = {
  token: string
  financial_account_token: string
  statement_start_date: string
  statement_end_date: string
  next_statement_end_date?: (string | null) | undefined
  payment_due_date: ({ [x: string]: unknown } | null) | string
  next_payment_due_date?: (string | null) | undefined
  days_in_billing_cycle: number
  credit_limit: number
  available_credit: number
  starting_balance: number
  ending_balance: number
  period_totals: StatementTotals
  ytd_totals: StatementTotals
  statement_totals?: StatementTotals | undefined
  created: string
  updated: string
  credit_product_token: ({ [x: string]: unknown } | null) | string
  account_standing: AccountStanding
  amount_due: AmountDue
  payoff_details?: ({ [x: string]: unknown } | null) | PayoffDetails | undefined
  interest_details?: ({ [x: string]: unknown } | null) | InterestDetails | undefined
  statement_type: StatementType
}
type StatementsResponse = { data: StatementResponse[]; has_more: boolean }
type TransactionCategory =
  | 'ACH'
  | 'WIRE'
  | 'STABLECOIN'
  | 'INTRA_BANK'
  | 'BALANCE_OR_FUNDING'
  | 'FEE'
  | 'REWARD'
  | 'ADJUSTMENT'
  | 'DERECOGNITION'
  | 'DISPUTE'
  | 'CARD'
  | 'EXTERNAL_ACH'
  | 'EXTERNAL_CHECK'
  | 'EXTERNAL_FEDNOW'
  | 'EXTERNAL_RTP'
  | 'EXTERNAL_STABLECOIN'
  | 'EXTERNAL_TRANSFER'
  | 'EXTERNAL_WIRE'
  | 'MANAGEMENT_ADJUSTMENT'
  | 'MANAGEMENT_DISPUTE'
  | 'MANAGEMENT_FEE'
  | 'MANAGEMENT_REWARD'
  | 'MANAGEMENT_DISBURSEMENT'
  | 'HOLD'
  | 'PROGRAM_FUNDING'
  | 'PROGRAM_TRANSFER'
type StatementLineItemResponse = {
  token: string
  financial_account_token: string
  card_token?: (string | null) | undefined
  financial_transaction_token: string
  financial_transaction_event_token: string
  category: TransactionCategory
  event_type: FinancialEventType
  event_subtype?: (string | null) | undefined
  loan_tape_date?: (string | null) | undefined
  effective_date: string
  descriptor?: string | undefined
  amount: number
  currency: string
  created: string
}
type StatementLineItemsResponse = { data: StatementLineItemResponse[]; has_more: boolean }
type CategoryBalances = { interest: number; principal: number; fees: number }
type Balances = {
  past_due: CategoryBalances
  due: CategoryBalances
  past_statements_due: CategoryBalances
  next_statement_due: CategoryBalances
  installments?: ({ [x: string]: unknown } | null) | CategoryBalances | undefined
}
type PaymentAllocation = {
  interest: number
  principal: number
  fees: number
  interest_details: ({ [x: string]: unknown } | null) | CategoryDetails
  principal_details: ({ [x: string]: unknown } | null) | CategoryDetails
  fee_details: ({ [x: string]: unknown } | null) | CategoryDetails
}
type BalanceDetails = { amount: number; remaining: number }
type LoanTapeResponse = {
  token: string
  financial_account_token: string
  date: string
  day_of_period?: (number | null) | undefined
  created: string
  updated: string
  version: number
  ytd_totals: StatementTotals
  period_totals: StatementTotals
  day_totals: StatementTotals
  balances: Balances
  starting_balance: number
  ending_balance: number
  credit_limit: number
  available_credit: number
  excess_credits: number
  account_standing: AccountStanding
  credit_product_token: string
  tier?: (string | null) | undefined
  payment_allocation: PaymentAllocation
  payment_only_allocation: ({ [x: string]: unknown } | null) | PaymentAllocation
  minimum_payment_balance: BalanceDetails
  previous_statement_balance: BalanceDetails
  interest_details: ({ [x: string]: unknown } | null) | InterestDetails
}
type LoanTapesResponse = { data: LoanTapeResponse[]; has_more: boolean }
type LoanTapeRebuildConfiguration = {
  rebuild_needed: boolean
  rebuild_from?: string | undefined
  last_rebuild?: string | undefined
}
type LoanTapeConfiguration = {
  instance_token: string
  financial_account_token: string
  credit_product_token?: string | undefined
  loan_tape_rebuild_configuration?: LoanTapeRebuildConfiguration | undefined
  tier_schedule_changed_at?: string | undefined
  created_at: string
  updated_at: string
}
type InstallmentPlanState =
  | 'PENDING'
  | 'ACTIVE'
  | 'REBUILD_IN_PROGRESS'
  | 'FULLY_PAID'
  | 'CANCELLED'
type InstallmentPlanSource = 'UNPAID_BALANCE' | 'TRANSACTION'
type TransactionCategoryBalances = {
  purchases: CategoryBalances
  cash_advances: CategoryBalances
  balance_transfers: CategoryBalances
}
type InstallmentPayment = {
  date: string
  amount: number
  amount_details: TransactionCategoryBalances
  is_adjustment?: boolean | undefined
}
type Installment = {
  installment_num: number
  due_date: string
  payment_due_date: string
  date_assessed: string | null
  amount_due: number
  amount_due_details: TransactionCategoryBalances
  amount_paid: number
  amount_paid_details: TransactionCategoryBalances
  amount_outstanding: number
  amount_outstanding_details: TransactionCategoryBalances
  payments: InstallmentPayment[]
  installment_adjustment?: number | undefined
}
type InstallmentPlanResponse = {
  token: string
  financial_account_token: string
  num_installments: number
  principal_amount: number
  fee_amount: number
  installment_plan_total: number
  total_paid: number
  installments_paid: number
  installments_outstanding: number
  state: InstallmentPlanState
  start_date: string
  closed_at: string | null
  source_type: InstallmentPlanSource
  source_id: string
  source_amounts: ({ [x: string]: unknown } | null) | TransactionCategoryBalances
  created: string
  updated: string
  installments: Installment[]
  installment_plan_adjustment: number
}
type InstallmentPlansResponse = { data: InstallmentPlanResponse[]; has_more: boolean }
type InstallmentPlanStatementInstallment = {
  installment_num: number
  due_date: string
  payment_due_date: string
  date_assessed: string | null
  amount_due: number
  amount_due_details: TransactionCategoryBalances
  amount_paid: number
  amount_paid_details: TransactionCategoryBalances
  amount_outstanding: number
  amount_outstanding_details: TransactionCategoryBalances
  payments: InstallmentPayment[]
  installment_adjustment?: number | undefined
}
type InstallmentPlanStatementResponse = {
  token: string
  installment_plan_token: string
  num_installments: number
  principal_amount: number
  fee_amount: number
  installment_plan_total: number
  total_paid: number
  installments_paid: number
  installments_outstanding: number
  state: InstallmentPlanState
  start_date: string
  closed_at: string | null
  source_type: InstallmentPlanSource
  source_id: string
  source_amounts: ({ [x: string]: unknown } | null) | TransactionCategoryBalances
  created: string
  updated: string
  installments: InstallmentPlanStatementInstallment[]
  installment_plan_adjustment: number
}
type InstallmentPlanStatementsResponse = {
  data: InstallmentPlanStatementResponse[]
  has_more: boolean
}
type TierScheduleEntry = {
  tier_name?: (string | null) | undefined
  effective_date: string
  tier_rates?: ({ [x: string]: unknown } | null) | undefined
  penalty_rates?: ({ [x: string]: unknown } | null) | undefined
  credit_product_token: string
}
type TierScheduleResponse = { data: TierScheduleEntry[]; has_more: boolean }
type UpdateTierScheduleEntryRequest = {
  tier_name?: (string | null) | undefined
  tier_rates?: ({ [x: string]: unknown } | null) | undefined
  penalty_rates?: ({ [x: string]: unknown } | null) | undefined
}
type UpdateFinancialAccountSubstatus =
  | 'CHARGED_OFF_FRAUD'
  | 'END_USER_REQUEST'
  | 'BANK_REQUEST'
  | 'CHARGED_OFF_DELINQUENT'
  | 'INTEREST_AND_FEES_PAUSED'
  | 'DELINQUENT'
type UpdateFinancialAccountStatusRequest = {
  status: FinancialAccountStatus
  substatus: ({ [x: string]: unknown } | null) | UpdateFinancialAccountSubstatus
  user_defined_status?: string | undefined
}
type TransactionStatus = 'PENDING' | 'SETTLED' | 'DECLINED' | 'REVERSED' | 'CANCELED' | 'RETURNED'
type FinancialTransaction = {
  token: string
  created: string
  updated: string
  status: TransactionStatus
  family: 'INTERNAL'
  category: TransactionCategory
  result: TransactionResult
  currency: string
  settled_amount: number
  pending_amount: number
  events: FinancialEvent[]
  descriptor: string
  financial_account_token: string
}
type BookTransferCategory =
  | 'ADJUSTMENT'
  | 'BALANCE_OR_FUNDING'
  | 'DERECOGNITION'
  | 'DISPUTE'
  | 'FEE'
  | 'INTERNAL'
  | 'REWARD'
  | 'PROGRAM_FUNDING'
  | 'PROGRAM_TRANSFER'
  | 'TRANSFER'
type BookTransferType =
  | 'ATM_BALANCE_INQUIRY'
  | 'ATM_WITHDRAWAL'
  | 'ATM_DECLINE'
  | 'INTERNATIONAL_ATM_WITHDRAWAL'
  | 'INACTIVITY'
  | 'STATEMENT'
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'ANNUAL'
  | 'CUSTOMER_SERVICE'
  | 'ACCOUNT_MAINTENANCE'
  | 'ACCOUNT_ACTIVATION'
  | 'ACCOUNT_CLOSURE'
  | 'CARD_REPLACEMENT'
  | 'CARD_DELIVERY'
  | 'CARD_CREATE'
  | 'CURRENCY_CONVERSION'
  | 'INTEREST'
  | 'LATE_PAYMENT'
  | 'BILL_PAYMENT'
  | 'PAYMENT_FEE'
  | 'CASH_BACK'
  | 'ACCOUNT_TO_ACCOUNT'
  | 'CARD_TO_CARD'
  | 'DISBURSE'
  | 'BILLING_ERROR'
  | 'LOSS_WRITE_OFF'
  | 'EXPIRED_CARD'
  | 'EARLY_DERECOGNITION'
  | 'ESCHEATMENT'
  | 'INACTIVITY_FEE_DOWN'
  | 'PROVISIONAL_CREDIT'
  | 'DISPUTE_WON'
  | 'SERVICE'
  | 'TRANSFER'
  | 'COLLECTION'
  | 'LITHIC_PROGRAM_TRANSFER'
  | 'BANK_PROGRAM_TRANSFER'
  | 'INSTANCE_TO_INSTANCE'
type BookTransferDetailedResults = 'APPROVED' | 'FUNDS_INSUFFICIENT'
type BookTransferEvent = {
  amount: number
  type: BookTransferType
  result: 'APPROVED' | 'DECLINED'
  created: string
  token: string
  subtype: string
  memo: string
  detailed_results: BookTransferDetailedResults[]
}
type TransactionSeries = {
  type: string
  related_transaction_token: string | ({ [x: string]: unknown } | null)
  related_transaction_event_token: string | ({ [x: string]: unknown } | null)
}
type ExternalResourceType = 'STATEMENT' | 'COLLECTION' | 'DISPUTE' | 'UNKNOWN'
type ExternalResource = {
  external_resource_type: ExternalResourceType
  external_resource_token: string
  external_resource_sub_token?: string | undefined
}
type BookTransferTransaction = {
  token: string
  created: string
  updated: string
  status: TransactionStatus
  family: 'TRANSFER'
  result: TransactionResult
  category: BookTransferCategory
  currency: string
  settled_amount: number
  pending_amount: number
  events: BookTransferEvent[]
  from_financial_account_token: string
  to_financial_account_token: string
  external_id?: string | ({ [x: string]: unknown } | null) | undefined
  transaction_series?: TransactionSeries | ({ [x: string]: unknown } | null) | undefined
  external_resource?: ExternalResource | ({ [x: string]: unknown } | null) | undefined
}
type Currency = string
type TransactionAmounts = {
  cardholder: { amount: number; conversion_rate: string; currency: Currency }
  hold: { amount: number; currency: Currency }
  merchant: { amount: number; currency: Currency }
  settlement: { amount: number; currency: Currency }
}
type Avs = { address: string; zipcode: string }
type CardholderAuthentication = {
  authentication_result: 'ATTEMPTS' | 'DECLINE' | 'NONE' | 'SUCCESS'
  authentication_method: 'FRICTIONLESS' | 'CHALLENGE' | 'NONE'
  decision_made_by:
    | 'CUSTOMER_RULES'
    | 'CUSTOMER_ENDPOINT'
    | 'LITHIC_DEFAULT'
    | 'LITHIC_RULES'
    | 'NETWORK'
    | 'UNKNOWN'
  liability_shift: '3DS_AUTHENTICATED' | 'TOKEN_AUTHENTICATED' | 'NONE'
  three_ds_authentication_token: ({ [x: string]: unknown } | null) | string
}
type AccountType = 'DEFAULT' | 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD' | null
type TransactionEventAmounts = {
  cardholder: { amount: number; conversion_rate: string; currency: Currency }
  merchant: { amount: number; currency: Currency }
  settlement: { amount: number; conversion_rate: string; currency: Currency } | null
}
type NetworkInfo = ({ [x: string]: unknown } | null) | { [x: string]: unknown }
type MastercardNetworkSpecificData = {
  transaction_type_identifier: ({ [x: string]: unknown } | null) | string
  ecommerce_security_level_indicator: ({ [x: string]: unknown } | null) | string
  on_behalf_service_result:
    | ({ [x: string]: unknown } | null)
    | { service: string; result_1: string; result_2: string }[]
}
type VisaNetworkSpecificData = {
  business_application_identifier: ({ [x: string]: unknown } | null) | string
}
type NetworkSpecificData = {
  mastercard: MastercardNetworkSpecificData
  visa: VisaNetworkSpecificData
}
type RuleResult = {
  auth_rule_token: ({ [x: string]: unknown } | null) | string
  result: DetailedResult
  name: ({ [x: string]: unknown } | null) | string
  explanation: ({ [x: string]: unknown } | null) | string
}
type DeclineResult =
  | 'ACCOUNT_PAUSED'
  | 'ACCOUNT_STATE_TRANSACTION_FAIL'
  | 'APPROVED'
  | 'BANK_CONNECTION_ERROR'
  | 'BANK_NOT_VERIFIED'
  | 'CARD_CLOSED'
  | 'CARD_PAUSED'
  | 'DECLINED'
  | 'FRAUD_ADVICE'
  | 'IGNORED_TTL_EXPIRY'
  | 'SUSPECTED_FRAUD'
  | 'INACTIVE_ACCOUNT'
  | 'INCORRECT_PIN'
  | 'INVALID_CARD_DETAILS'
  | 'INSUFFICIENT_FUNDS'
  | 'INSUFFICIENT_FUNDS_PRELOAD'
  | 'INVALID_TRANSACTION'
  | 'MERCHANT_BLACKLIST'
  | 'ORIGINAL_NOT_FOUND'
  | 'PREVIOUSLY_COMPLETED'
  | 'SINGLE_USE_RECHARGED'
  | 'SWITCH_INOPERATIVE_ADVICE'
  | 'UNAUTHORIZED_MERCHANT'
  | 'UNKNOWN_HOST_TIMEOUT'
  | 'USER_TRANSACTION_LIMIT'
type TransactionEvent = {
  account_type?: AccountType | undefined
  amount: number
  amounts: TransactionEventAmounts
  created: string
  network_info: NetworkInfo
  network_specific_data?: ({ [x: string]: unknown } | null) | NetworkSpecificData | undefined
  detailed_results: DetailedResult[]
  rule_results: RuleResult[]
  effective_polarity: 'CREDIT' | 'DEBIT'
  result: DeclineResult
  token: string
  type:
    | 'AUTHORIZATION'
    | 'AUTHORIZATION_ADVICE'
    | 'AUTHORIZATION_EXPIRY'
    | 'AUTHORIZATION_REVERSAL'
    | 'BALANCE_INQUIRY'
    | 'CLEARING'
    | 'CORRECTION_CREDIT'
    | 'CORRECTION_DEBIT'
    | 'CREDIT_AUTHORIZATION'
    | 'CREDIT_AUTHORIZATION_ADVICE'
    | 'FINANCIAL_AUTHORIZATION'
    | 'FINANCIAL_CREDIT_AUTHORIZATION'
    | 'RETURN'
    | 'RETURN_REVERSAL'
}
type TransactionMerchant = {
  acceptor_id: string
  acquiring_institution_id: string
  city: string
  country: string
  descriptor: string
  mcc: string
  state: string
  postal_code: string | null
  street_address: string | null
  phone_number: string | null
}
type ServiceLocation = {
  street_address: string | null
  city: string | null
  state: string | null
  country: string | null
  postal_code: string | null
}
type MerchantCurrency = string
type NetworkRiskScore = number | null
type PosEntryMode = {
  card: 'NOT_PRESENT' | 'PREAUTHORIZED' | 'PRESENT' | 'UNKNOWN'
  cardholder:
    | 'DEFERRED_BILLING'
    | 'ELECTRONIC_ORDER'
    | 'INSTALLMENT'
    | 'MAIL_ORDER'
    | 'NOT_PRESENT'
    | 'PREAUTHORIZED'
    | 'PRESENT'
    | 'REOCCURRING'
    | 'TELEPHONE_ORDER'
    | 'UNKNOWN'
  pan:
    | 'AUTO_ENTRY'
    | 'BAR_CODE'
    | 'CONTACTLESS'
    | 'CREDENTIAL_ON_FILE'
    | 'ECOMMERCE'
    | 'ERROR_KEYED'
    | 'ERROR_MAGNETIC_STRIPE'
    | 'ICC'
    | 'KEY_ENTERED'
    | 'MAGNETIC_STRIPE'
    | 'MANUAL'
    | 'OCR'
    | 'SECURE_CARDLESS'
    | 'UNKNOWN'
    | 'UNSPECIFIED'
  pin_entered: boolean
}
type PosTerminal = {
  attended: boolean
  card_retention_capable: boolean
  on_premise: boolean
  operator: 'ADMINISTRATIVE' | 'CARDHOLDER' | 'CARD_ACCEPTOR' | 'UNKNOWN'
  partial_approval_capable: boolean
  pin_capability: 'CAPABLE' | 'INOPERATIVE' | 'NOT_CAPABLE' | 'UNSPECIFIED'
  acceptor_terminal_id?: (string | null) | undefined
  type:
    | 'ADMINISTRATIVE'
    | 'ATM'
    | 'AUTHORIZATION'
    | 'COUPON_MACHINE'
    | 'DIAL_TERMINAL'
    | 'ECOMMERCE'
    | 'ECR'
    | 'FUEL_MACHINE'
    | 'HOME_TERMINAL'
    | 'MICR'
    | 'OFF_PREMISE'
    | 'PAYMENT'
    | 'PDA'
    | 'PHONE'
    | 'POINT'
    | 'POS_TERMINAL'
    | 'PUBLIC_UTILITY'
    | 'SELF_SERVICE'
    | 'TELEVISION'
    | 'TELLER'
    | 'TRAVELERS_CHECK_MACHINE'
    | 'VENDING'
    | 'VOICE'
    | 'UNKNOWN'
}
type Pos = { entry_mode: PosEntryMode; terminal: PosTerminal }
type TokenInfo = {
  wallet_type: 'APPLE_PAY' | 'GOOGLE_PAY' | 'MASTERPASS' | 'MERCHANT' | 'OTHER' | 'SAMSUNG_PAY'
}
type CardTransaction2 = {
  token: string
  created: string
  updated: string
  acquirer_fee: number | null
  acquirer_reference_number: string | null
  account_token: string
  amount: number
  amounts: TransactionAmounts
  authorization_amount: number | null
  authorization_code: string | null
  avs: ({ [x: string]: unknown } | null) | Avs
  card_token: string
  cardholder_authentication: ({ [x: string]: unknown } | null) | CardholderAuthentication
  events?: TransactionEvent[] | undefined
  financial_account_token: ({ [x: string]: unknown } | null) | string
  merchant: TransactionMerchant
  service_location: ({ [x: string]: unknown } | null) | ServiceLocation
  merchant_amount: number | null
  merchant_authorization_amount: number | null
  merchant_currency: MerchantCurrency
  network: 'ALLPOINT' | 'AMEX' | 'INTERLINK' | 'MAESTRO' | 'MASTERCARD' | 'UNKNOWN' | 'VISA'
  network_risk_score: NetworkRiskScore
  result: DeclineResult
  pos: ({ [x: string]: unknown } | null) | Pos
  settled_amount: number
  status: 'DECLINED' | 'EXPIRED' | 'PENDING' | 'SETTLED' | 'VOIDED'
  token_info: ({ [x: string]: unknown } | null) | TokenInfo
  tags: Tags
  family: 'CARD'
}
type AchMethodAttributes = {
  sec_code: 'CCD' | 'PPD' | 'WEB' | 'TEL' | 'CIE' | 'CTX'
  return_reason_code?: (string | null) | undefined
  ach_hold_period?: (number | null) | undefined
  retries?: (number | null) | undefined
  company_id?: (string | null) | undefined
  receipt_routing_number?: (string | null) | undefined
  recipient_name?: (string | null) | undefined
  trace_numbers?: string[] | undefined
  addenda?: (string | null) | undefined
  override_company_name?: (string | null) | undefined
}
type WirePartyDetails = {
  name?: (string | null) | undefined
  account_number?: (string | null) | undefined
  agent_name?: (string | null) | undefined
  agent_id?: (string | null) | undefined
}
type WireMethodAttributes = {
  wire_network: 'FEDWIRE' | 'SWIFT'
  wire_message_type: string | null
  debtor?: WirePartyDetails | undefined
  creditor?: WirePartyDetails | undefined
  message_id?: (string | null) | undefined
  remittance_information?: (string | null) | undefined
}
type StablecoinMethodAttributes = { chain: string; transaction_hash?: (string | null) | undefined }
type PaymentEventType =
  | 'ACH_ORIGINATION_CANCELLED'
  | 'ACH_ORIGINATION_INITIATED'
  | 'ACH_ORIGINATION_PROCESSED'
  | 'ACH_ORIGINATION_REJECTED'
  | 'ACH_ORIGINATION_RELEASED'
  | 'ACH_ORIGINATION_REVIEWED'
  | 'ACH_ORIGINATION_SETTLED'
  | 'ACH_RECEIPT_PROCESSED'
  | 'ACH_RECEIPT_RELEASED'
  | 'ACH_RECEIPT_RELEASED_EARLY'
  | 'ACH_RECEIPT_SETTLED'
  | 'ACH_RETURN_INITIATED'
  | 'ACH_RETURN_PROCESSED'
  | 'ACH_RETURN_REJECTED'
  | 'ACH_RETURN_SETTLED'
  | 'WIRE_TRANSFER_INBOUND_RECEIVED'
  | 'WIRE_TRANSFER_INBOUND_SETTLED'
  | 'WIRE_TRANSFER_INBOUND_BLOCKED'
  | 'WIRE_RETURN_OUTBOUND_INITIATED'
  | 'WIRE_RETURN_OUTBOUND_SENT'
  | 'WIRE_RETURN_OUTBOUND_SETTLED'
  | 'WIRE_RETURN_OUTBOUND_REJECTED'
  | 'STABLECOIN_RECEIVED'
  | 'STABLECOIN_INITIATED'
  | 'STABLECOIN_REVIEWED'
  | 'STABLECOIN_SENT'
  | 'STABLECOIN_SETTLED'
  | 'STABLECOIN_REJECTED'
type PaymentEvent = {
  amount: number
  created: string
  detailed_results?:
    | (
        | 'APPROVED'
        | 'DECLINED'
        | 'FUNDS_INSUFFICIENT'
        | 'ACCOUNT_INVALID'
        | 'PROGRAM_TRANSACTION_LIMIT_EXCEEDED'
        | 'PROGRAM_DAILY_LIMIT_EXCEEDED'
        | 'PROGRAM_MONTHLY_LIMIT_EXCEEDED'
      )[]
    | undefined
  result: 'APPROVED' | 'DECLINED'
  token: string
  type: PaymentEventType
  external_id?: (string | null) | undefined
}
type RelatedAccountTokens = { business_account_token: string | null; account_token: string | null }
type TransferType =
  | 'ORIGINATION_CREDIT'
  | 'ORIGINATION_DEBIT'
  | 'RECEIPT_CREDIT'
  | 'RECEIPT_DEBIT'
  | 'WIRE_INBOUND_PAYMENT'
  | 'WIRE_INBOUND_ADMIN'
  | 'WIRE_OUTBOUND_PAYMENT'
  | 'WIRE_OUTBOUND_ADMIN'
  | 'WIRE_INBOUND_DRAWDOWN_REQUEST'
  | 'STABLECOIN_INBOUND'
  | 'STABLECOIN_OUTBOUND'
type PaymentTransaction = {
  token: string
  created: string
  updated: string
  status: TransactionStatus
  family: 'PAYMENT'
  category: TransactionCategory
  currency?: string | undefined
  result: TransactionResult
  method_attributes: AchMethodAttributes | WireMethodAttributes | StablecoinMethodAttributes
  financial_account_token: string
  external_bank_account_token?: (string | null) | undefined
  blockchain_recipient_token?: (string | null) | undefined
  direction: 'CREDIT' | 'DEBIT'
  source: 'LITHIC' | 'EXTERNAL' | 'CUSTOMER'
  method: 'ACH_NEXT_DAY' | 'ACH_SAME_DAY' | 'WIRE' | 'STABLECOIN'
  settled_amount: number
  pending_amount: number
  events: PaymentEvent[]
  descriptor: string
  user_defined_id?: (string | null) | undefined
  expected_release_date?: (string | null) | undefined
  related_account_tokens: RelatedAccountTokens | ({ [x: string]: unknown } | null)
  type?: TransferType | undefined
  tags?: Tags | undefined
}
type ExternalPaymentCategory =
  | 'EXTERNAL_WIRE'
  | 'EXTERNAL_ACH'
  | 'EXTERNAL_CHECK'
  | 'EXTERNAL_FEDNOW'
  | 'EXTERNAL_RTP'
  | 'EXTERNAL_STABLECOIN'
  | 'EXTERNAL_TRANSFER'
type ExternalPaymentEventType =
  | 'EXTERNAL_WIRE_INITIATED'
  | 'EXTERNAL_WIRE_CANCELED'
  | 'EXTERNAL_WIRE_SETTLED'
  | 'EXTERNAL_WIRE_REVERSED'
  | 'EXTERNAL_WIRE_RELEASED'
  | 'EXTERNAL_ACH_INITIATED'
  | 'EXTERNAL_ACH_CANCELED'
  | 'EXTERNAL_ACH_SETTLED'
  | 'EXTERNAL_ACH_REVERSED'
  | 'EXTERNAL_ACH_RELEASED'
  | 'EXTERNAL_TRANSFER_INITIATED'
  | 'EXTERNAL_TRANSFER_CANCELED'
  | 'EXTERNAL_TRANSFER_SETTLED'
  | 'EXTERNAL_TRANSFER_REVERSED'
  | 'EXTERNAL_TRANSFER_RELEASED'
  | 'EXTERNAL_CHECK_INITIATED'
  | 'EXTERNAL_CHECK_CANCELED'
  | 'EXTERNAL_CHECK_SETTLED'
  | 'EXTERNAL_CHECK_REVERSED'
  | 'EXTERNAL_CHECK_RELEASED'
  | 'EXTERNAL_FEDNOW_INITIATED'
  | 'EXTERNAL_FEDNOW_CANCELED'
  | 'EXTERNAL_FEDNOW_SETTLED'
  | 'EXTERNAL_FEDNOW_REVERSED'
  | 'EXTERNAL_FEDNOW_RELEASED'
  | 'EXTERNAL_RTP_INITIATED'
  | 'EXTERNAL_RTP_CANCELED'
  | 'EXTERNAL_RTP_SETTLED'
  | 'EXTERNAL_RTP_REVERSED'
  | 'EXTERNAL_RTP_RELEASED'
  | 'EXTERNAL_STABLECOIN_INITIATED'
  | 'EXTERNAL_STABLECOIN_CANCELED'
  | 'EXTERNAL_STABLECOIN_SETTLED'
  | 'EXTERNAL_STABLECOIN_REVERSED'
  | 'EXTERNAL_STABLECOIN_RELEASED'
type ExternalPaymentEvent = {
  amount: number
  type: ExternalPaymentEventType
  result: TransactionResult
  detailed_results: DetailedResults[]
  created: string
  token: string
  memo: string
  effective_date: string
}
type ExternalPaymentDirection = 'DEPOSIT' | 'WITHDRAWAL'
type ExternalPaymentResponse = {
  token: string
  created: string
  updated: string
  status: TransactionStatus
  family?: 'EXTERNAL_PAYMENT' | undefined
  result?: TransactionResult | undefined
  category?: ExternalPaymentCategory | undefined
  settled_amount?: number | undefined
  pending_amount?: number | undefined
  currency?: string | undefined
  events?: ExternalPaymentEvent[] | undefined
  user_defined_id?: (string | null) | undefined
  financial_account_token?: string | undefined
  payment_type?: ExternalPaymentDirection | undefined
}
type ManagementOperationCategory =
  | 'MANAGEMENT_FEE'
  | 'MANAGEMENT_DISPUTE'
  | 'MANAGEMENT_REWARD'
  | 'MANAGEMENT_ADJUSTMENT'
  | 'MANAGEMENT_DISBURSEMENT'
type ManagementOperationEventType =
  | 'LOSS_WRITE_OFF'
  | 'CASH_BACK'
  | 'CASH_BACK_REVERSAL'
  | 'CURRENCY_CONVERSION'
  | 'CURRENCY_CONVERSION_REVERSAL'
  | 'INTEREST'
  | 'INTEREST_REVERSAL'
  | 'INSTALLMENT_FEE'
  | 'INSTALLMENT_FEE_REVERSAL'
  | 'LATE_PAYMENT'
  | 'LATE_PAYMENT_REVERSAL'
  | 'BILLING_ERROR'
  | 'BILLING_ERROR_REVERSAL'
  | 'PROVISIONAL_CREDIT'
  | 'PROVISIONAL_CREDIT_REVERSAL'
  | 'RETURNED_PAYMENT'
  | 'RETURNED_PAYMENT_REVERSAL'
  | 'DISPUTE_WON'
  | 'DISPUTE_WON_REVERSAL'
  | 'DISBURSE'
  | 'DISBURSE_REVERSAL'
  | 'ANNUAL'
  | 'ANNUAL_REVERSAL'
  | 'QUARTERLY'
  | 'QUARTERLY_REVERSAL'
  | 'MONTHLY'
  | 'MONTHLY_REVERSAL'
  | 'FEE'
  | 'FEE_REVERSAL'
type ManagementOperationEvent = {
  amount: number
  type: ManagementOperationEventType
  subtype?: (string | null) | undefined
  result: TransactionResult
  detailed_results: DetailedResults[]
  created: string
  token: string
  memo: string
  effective_date: string
}
type ManagementOperationDirection = 'CREDIT' | 'DEBIT'
type ManagementOperationTransaction = {
  token: string
  created: string
  updated: string
  status: TransactionStatus
  family?: 'MANAGEMENT_OPERATION' | undefined
  result?: TransactionResult | undefined
  category?: ManagementOperationCategory | undefined
  settled_amount?: number | undefined
  pending_amount?: number | undefined
  currency?: string | undefined
  events?: ManagementOperationEvent[] | undefined
  user_defined_id?: (string | null) | undefined
  financial_account_token?: string | undefined
  direction?: ManagementOperationDirection | undefined
  transaction_series?: TransactionSeries | ({ [x: string]: unknown } | null) | undefined
  external_resource?: ExternalResource | ({ [x: string]: unknown } | null) | undefined
}
type BaseTransactionResponse =
  | FinancialTransaction
  | BookTransferTransaction
  | CardTransaction2
  | PaymentTransaction
  | ExternalPaymentResponse
  | ManagementOperationTransaction
  | HoldTransaction
type BaseTransactionsResponse = { has_more: boolean; data: BaseTransactionResponse[] }
type PaymentMethodRequestAttributes = {
  sec_code: 'CCD' | 'PPD' | 'WEB'
  ach_hold_period?: number | undefined
  addenda?: (string | null) | undefined
  override_company_name?: (string | null) | undefined
}
type CreatePaymentRequest = {
  amount: number
  external_bank_account_token: string
  financial_account_token: string
  memo?: string | undefined
  method: 'ACH_NEXT_DAY' | 'ACH_SAME_DAY'
  method_attributes: PaymentMethodRequestAttributes
  token?: string | undefined
  type: 'COLLECTION' | 'PAYMENT'
  user_defined_id?: string | undefined
  hold?: { token: string } | undefined
}
type PostPaymentResponse = {
  token: string
  created: string
  updated: string
  status: TransactionStatus
  family: 'PAYMENT'
  category: TransactionCategory
  currency?: string | undefined
  result: TransactionResult
  method_attributes: AchMethodAttributes | WireMethodAttributes | StablecoinMethodAttributes
  financial_account_token: string
  external_bank_account_token?: (string | null) | undefined
  blockchain_recipient_token?: (string | null) | undefined
  direction: 'CREDIT' | 'DEBIT'
  source: 'LITHIC' | 'EXTERNAL' | 'CUSTOMER'
  method: 'ACH_NEXT_DAY' | 'ACH_SAME_DAY' | 'WIRE' | 'STABLECOIN'
  settled_amount: number
  pending_amount: number
  events: PaymentEvent[]
  descriptor: string
  user_defined_id?: (string | null) | undefined
  expected_release_date?: (string | null) | undefined
  related_account_tokens: RelatedAccountTokens | ({ [x: string]: unknown } | null)
  type?: TransferType | undefined
  tags?: Tags | undefined
  balance?: Balance | undefined
}
type CreateStablecoinPaymentRequest = {
  amount: number
  blockchain_recipient_token: string
  financial_account_token: string
  hold?: { token: string } | undefined
  memo?: string | undefined
  token?: string | undefined
  type: 'PAYMENT'
}
type RetryPaymentRequest = { method?: 'ACH_NEXT_DAY' | 'ACH_SAME_DAY' | undefined }
type PaymentReturnRequest = {
  financial_account_token: string
  return_reason_code: string
  memo?: (string | null) | undefined
  addenda?: (string | null) | undefined
  date_of_death?: (string | null) | undefined
}
type SettlementDetail = {
  account_token: string | null
  card_program_token: string | null
  card_token: string | null
  created: string
  currency: string
  disputes_gross_amount: number
  event_tokens: string[]
  fee_description?: string | undefined
  institution: string
  interchange_fee_extended_precision: number
  interchange_gross_amount: number
  network: 'ALLPOINT' | 'AMEX' | 'INTERLINK' | 'MAESTRO' | 'MASTERCARD' | 'UNKNOWN' | 'VISA'
  other_fees_details: { ISA?: number | undefined }
  other_fees_gross_amount: number
  report_date: string
  settlement_date: string
  token: string
  transaction_token: string | null
  transactions_gross_amount: number
  type:
    | 'ADJUSTMENT'
    | 'ARBITRATION'
    | 'CHARGEBACK'
    | 'CLEARING'
    | 'COLLABORATION'
    | 'FEE'
    | 'FINANCIAL'
    | 'NON_FINANCIAL'
    | 'PREARBITRATION'
    | 'REPRESENTMENT'
  updated: string
}
type SettlementSummaryDetails = {
  currency?: string | undefined
  disputes_gross_amount?: number | undefined
  institution?: string | undefined
  interchange_gross_amount?: number | undefined
  network?:
    | 'ALLPOINT'
    | 'AMEX'
    | 'INTERLINK'
    | 'MAESTRO'
    | 'MASTERCARD'
    | 'UNKNOWN'
    | 'VISA'
    | undefined
  other_fees_gross_amount?: number | undefined
  settled_net_amount?: number | undefined
  transactions_gross_amount?: number | undefined
}
type SettlementReport = {
  created: string
  currency: string
  details: SettlementSummaryDetails[]
  disputes_gross_amount: number
  interchange_gross_amount: number
  is_complete: boolean
  other_fees_gross_amount: number
  report_date: string
  settled_net_amount: number
  transactions_gross_amount: number
  updated: string
}
type NetworkTotal = {
  token: string
  network: 'ALLPOINT' | 'AMEX' | 'VISA' | 'MASTERCARD' | 'MAESTRO' | 'INTERLINK'
  institution_id: string
  settlement_institution_id: string
  settlement_service: string
  report_date: string
  cycle?: number | undefined
  currency: string
  is_complete: boolean
  amounts: {
    gross_settlement: number
    interchange_fees: number
    visa_charges?: number | undefined
    net_settlement: number
  }
  created: string
  updated: string
}
type NetworkTotalsList = { data: NetworkTotal[]; has_more: boolean }
type SimulateReceiptRequest = {
  financial_account_token: string
  token: string
  receipt_type: 'RECEIPT_CREDIT' | 'RECEIPT_DEBIT'
  amount: number
  memo?: string | undefined
}
type Result = 'APPROVED' | 'DECLINED'
type SimulatePaymentResponse = {
  result: Result
  transaction_event_token: string
  debugging_request_id: string
}
type SimulateOriginationReleaseRequest = { payment_token: string }
type SimulateOriginationReturnRequest = {
  payment_token: string
  return_reason_code?: string | undefined
}
type SupportedSimulationTypes =
  | 'ACH_ORIGINATION_REVIEWED'
  | 'ACH_ORIGINATION_RELEASED'
  | 'ACH_ORIGINATION_PROCESSED'
  | 'ACH_ORIGINATION_SETTLED'
  | 'ACH_RECEIPT_SETTLED'
  | 'ACH_RECEIPT_RELEASED'
  | 'ACH_RECEIPT_RELEASED_EARLY'
  | 'ACH_RETURN_INITIATED'
  | 'ACH_RETURN_PROCESSED'
  | 'ACH_RETURN_SETTLED'
  | 'STABLECOIN_REVIEWED'
type SupportedSimulationDeclineReasons =
  | 'PROGRAM_TRANSACTION_LIMIT_EXCEEDED'
  | 'PROGRAM_DAILY_LIMIT_EXCEEDED'
  | 'PROGRAM_MONTHLY_LIMIT_EXCEEDED'
type SimulateActionRequest = {
  event_type: SupportedSimulationTypes
  return_reason_code?: string | undefined
  decline_reason?: SupportedSimulationDeclineReasons | undefined
  return_addenda?: string | undefined
  date_of_death?: string | undefined
}
type TokenizationEventOutcome =
  | 'APPROVED'
  | 'DECLINED'
  | 'NOTIFICATION_DELIVERED'
  | 'REQUIRE_ADDITIONAL_AUTHENTICATION'
  | 'TOKEN_ACTIVATED'
  | 'TOKEN_CREATED'
  | 'TOKEN_DEACTIVATED'
  | 'TOKEN_DELETED_FROM_CONSUMER_APP'
  | 'TOKEN_INACTIVE'
  | 'TOKEN_STATE_UNKNOWN'
  | 'TOKEN_SUSPENDED'
  | 'TOKEN_UPDATED'
type TokenizationDeclineReason =
  | 'ACCOUNT_SCORE_1'
  | 'DEVICE_SCORE_1'
  | 'ALL_WALLET_DECLINE_REASONS_PRESENT'
  | 'WALLET_RECOMMENDED_DECISION_RED'
  | 'CVC_MISMATCH'
  | 'CARD_EXPIRY_MONTH_MISMATCH'
  | 'CARD_EXPIRY_YEAR_MISMATCH'
  | 'CARD_INVALID_STATE'
  | 'CUSTOMER_RED_PATH'
  | 'INVALID_CUSTOMER_RESPONSE'
  | 'NETWORK_FAILURE'
  | 'GENERIC_DECLINE'
  | 'DIGITAL_CARD_ART_REQUIRED'
  | 'INVALID_PAN'
type TokenizationTfaReason =
  | 'WALLET_RECOMMENDED_TFA'
  | 'SUSPICIOUS_ACTIVITY'
  | 'DEVICE_RECENTLY_LOST'
  | 'TOO_MANY_RECENT_ATTEMPTS'
  | 'TOO_MANY_RECENT_TOKENS'
  | 'TOO_MANY_DIFFERENT_CARDHOLDERS'
  | 'OUTSIDE_HOME_TERRITORY'
  | 'HAS_SUSPENDED_TOKENS'
  | 'HIGH_RISK'
  | 'ACCOUNT_SCORE_LOW'
  | 'DEVICE_SCORE_LOW'
  | 'CARD_STATE_TFA'
  | 'HARDCODED_TFA'
  | 'CUSTOMER_RULE_TFA'
  | 'DEVICE_HOST_CARD_EMULATION'
type TokenizationRuleResult = {
  auth_rule_token: ({ [x: string]: unknown } | null) | string
  result: 'APPROVED' | 'DECLINED' | 'REQUIRE_TFA' | 'ERROR'
  name: ({ [x: string]: unknown } | null) | string
  explanation: ({ [x: string]: unknown } | null) | string
}
type TokenizationEvent = {
  created_at?: string | undefined
  result?: TokenizationEventOutcome | undefined
  token?: string | undefined
  type?:
    | 'TOKENIZATION_2FA'
    | 'TOKENIZATION_AUTHORIZATION'
    | 'TOKENIZATION_DECISIONING'
    | 'TOKENIZATION_ELIGIBILITY_CHECK'
    | 'TOKENIZATION_UPDATED'
    | undefined
  tokenization_decline_reasons?: TokenizationDeclineReason[] | undefined
  tokenization_tfa_reasons?: TokenizationTfaReason[] | undefined
  rule_results?: TokenizationRuleResult[] | undefined
}
type TfaMethod = { method: 'SMS' | 'EMAIL'; destination: string }
type Tokenization = {
  account_token: string
  card_token: string
  created_at: string
  device_id?: (string | null) | undefined
  digital_card_art_token?: (string | null) | undefined
  events?: TokenizationEvent[] | undefined
  status:
    | 'ACTIVE'
    | 'DEACTIVATED'
    | 'INACTIVE'
    | 'PAUSED'
    | 'PENDING_2FA'
    | 'PENDING_ACTIVATION'
    | 'UNKNOWN'
  tfa_methods?: TfaMethod[] | undefined
  token: string
  token_requestor_name:
    | 'AMAZON_ONE'
    | 'ANDROID_PAY'
    | 'APPLE_PAY'
    | 'FACEBOOK'
    | 'FITBIT_PAY'
    | 'GARMIN_PAY'
    | 'GOOGLE_PAY'
    | 'MICROSOFT_PAY'
    | 'NETFLIX'
    | 'SAMSUNG_PAY'
    | 'UNKNOWN'
    | 'VISA_CHECKOUT'
    | string
  token_unique_reference: string
  dpan: string | null
  payment_account_reference_id?: (string | null) | undefined
  tokenization_channel: 'DIGITAL_WALLET' | 'MERCHANT' | 'AGENT_PAY'
  updated_at: string
}
type SimulateEnrollmentReviewRequest = {
  account_holder_token?: string | undefined
  status?: 'ACCEPTED' | 'REJECTED' | 'PENDING_REVIEW' | undefined
  status_reasons?:
    | (
        | 'PRIMARY_BUSINESS_ENTITY_ID_VERIFICATION_FAILURE'
        | 'PRIMARY_BUSINESS_ENTITY_ADDRESS_VERIFICATION_FAILURE'
        | 'PRIMARY_BUSINESS_ENTITY_NAME_VERIFICATION_FAILURE'
        | 'PRIMARY_BUSINESS_ENTITY_BUSINESS_OFFICERS_NOT_MATCHED'
        | 'PRIMARY_BUSINESS_ENTITY_SOS_FILING_INACTIVE'
        | 'PRIMARY_BUSINESS_ENTITY_SOS_NOT_MATCHED'
        | 'PRIMARY_BUSINESS_ENTITY_CMRA_FAILURE'
        | 'PRIMARY_BUSINESS_ENTITY_WATCHLIST_FAILURE'
        | 'PRIMARY_BUSINESS_ENTITY_REGISTERED_AGENT_FAILURE'
        | 'CONTROL_PERSON_BLOCKLIST_ALERT_FAILURE'
        | 'CONTROL_PERSON_ID_VERIFICATION_FAILURE'
        | 'CONTROL_PERSON_DOB_VERIFICATION_FAILURE'
        | 'CONTROL_PERSON_NAME_VERIFICATION_FAILURE'
        | 'BENEFICIAL_OWNER_INDIVIDUAL_DOB_VERIFICATION_FAILURE'
        | 'BENEFICIAL_OWNER_INDIVIDUAL_BLOCKLIST_ALERT_FAILURE'
        | 'BENEFICIAL_OWNER_INDIVIDUAL_ID_VERIFICATION_FAILURE'
        | 'BENEFICIAL_OWNER_INDIVIDUAL_NAME_VERIFICATION_FAILURE'
      )[]
    | undefined
}
type AccountHolderResponse = {
  token?: string | undefined
  account_token?: string | undefined
  business_account_token?: (string | null) | undefined
  created?: string | undefined
  exemption_type?: 'AUTHORIZED_USER' | 'PREPAID_CARD_USER' | undefined
  external_id?: (string | null) | undefined
  user_type?: 'BUSINESS' | 'INDIVIDUAL' | undefined
  verification_application?: VerificationApplication | undefined
  individual?: Individual2 | undefined
  business_entity?: KybBusinessEntity | undefined
  beneficial_owner_individuals?: Individual2[] | undefined
  control_person?: Individual2 | undefined
  naics_code?: (string | null) | undefined
  nature_of_business?: string | undefined
  website_url?: string | undefined
  email?: string | undefined
  phone_number?: string | undefined
  status?: Status | undefined
  status_reasons?: StatusReasons[] | undefined
  required_documents?: RequiredDocument[] | undefined
}
type SimulateEnrollmentDocumentReviewRequest = {
  document_upload_token: string
  status: 'UPLOADED' | 'ACCEPTED' | 'REJECTED' | 'PARTIAL_APPROVAL'
  status_reason?: DocumentUploadStatusReasons | undefined
  accepted_entity_status_reasons?: string[] | undefined
}
type SimulateAuthenticationRequest = {
  merchant: { country: string; id: string; mcc: string; name: string }
  pan: string
  transaction: { amount: number; currency: string }
  card_expiry_check?: 'MATCH' | 'MISMATCH' | 'NOT_PRESENT' | undefined
}
type AddressMatchResult =
  | 'MATCH'
  | 'MATCH_ADDRESS_ONLY'
  | 'MATCH_ZIP_ONLY'
  | 'MISMATCH'
  | 'NOT_PRESENT'
type Authentication = {
  account_type: 'CREDIT' | 'DEBIT' | 'NOT_APPLICABLE' | null
  additional_data?:
    | ({
        network_decision?: 'LOW_RISK' | 'NOT_LOW_RISK' | null | undefined
        network_risk_score?: (number | null) | undefined
      } | null)
    | undefined
  app?:
    | ({
        device_info?: (string | null) | undefined
        ip?: (string | null) | undefined
        platform?: (string | null) | undefined
        device?: (string | null) | undefined
        os?: (string | null) | undefined
        locale?: (string | null) | undefined
        time_zone?: (string | null) | undefined
        screen_width?: (number | null) | undefined
        screen_height?: (number | null) | undefined
        latitude?: (number | null) | undefined
        longitude?: (number | null) | undefined
      } | null)
    | undefined
  authentication_request_type?:
    | 'ADD_CARD'
    | 'BILLING_AGREEMENT'
    | 'DELAYED_SHIPMENT'
    | 'EMV_TOKEN_CARDHOLDER_VERIFICATION'
    | 'INSTALLMENT_TRANSACTION'
    | 'MAINTAIN_CARD'
    | 'PAYMENT_TRANSACTION'
    | 'RECURRING_TRANSACTION'
    | 'SPLIT_PAYMENT'
    | 'SPLIT_SHIPMENT'
    | null
    | undefined
  authentication_result: 'DECLINE' | 'SUCCESS' | 'PENDING_CHALLENGE' | 'PENDING_DECISION'
  browser?:
    | ({
        accept_header?: (string | null) | undefined
        ip?: string | string | ({ [x: string]: unknown } | null) | undefined
        java_enabled?: (boolean | null) | undefined
        javascript_enabled?: (boolean | null) | undefined
        language?: (string | null) | undefined
        time_zone?: (string | null) | undefined
        user_agent?: (string | null) | undefined
      } | null)
    | undefined
  card_expiry_check: 'MATCH' | 'MISMATCH' | 'NOT_PRESENT'
  card_token: string
  cardholder: {
    address_match?: (boolean | null) | undefined
    address_on_file_match?: AddressMatchResult | undefined
    billing_address?:
      | {
          address1?: (string | null) | undefined
          address2?: (string | null) | undefined
          address3?: (string | null) | undefined
          city?: (string | null) | undefined
          country?: (string | null) | undefined
          postal_code?: (string | null) | undefined
        }
      | undefined
    email?: (string | null) | undefined
    name?: (string | null) | undefined
    phone_number_home?: (string | null) | undefined
    phone_number_mobile?: (string | null) | undefined
    phone_number_work?: (string | null) | undefined
    shipping_address?:
      | {
          address1?: (string | null) | undefined
          address2?: (string | null) | undefined
          address3?: (string | null) | undefined
          city?: (string | null) | undefined
          country?: (string | null) | undefined
          postal_code?: (string | null) | undefined
        }
      | undefined
  }
  challenge_metadata?:
    | ({
        method_type: 'SMS_OTP' | 'OUT_OF_BAND'
        phone_number?: (string | null) | undefined
        status:
          | 'SUCCESS'
          | 'PENDING'
          | 'SMS_DELIVERY_FAILED'
          | 'CARDHOLDER_TIMEOUT'
          | 'CANCELED_VIA_CHALLENGE_UI'
          | 'CANCELED_OOB'
          | 'ATTEMPTS_EXCEEDED'
          | 'ABORTED'
          | 'ERROR'
      } | null)
    | undefined
  challenge_orchestrated_by?: 'LITHIC' | 'CUSTOMER' | 'NO_CHALLENGE' | null | undefined
  channel: 'APP_BASED' | 'BROWSER' | 'THREE_DS_REQUESTOR_INITIATED'
  created: string
  decision_made_by?:
    | 'LITHIC_RULES'
    | 'LITHIC_DEFAULT'
    | 'CUSTOMER_RULES'
    | 'CUSTOMER_ENDPOINT'
    | 'NETWORK'
    | 'UNKNOWN'
    | null
    | undefined
  merchant: {
    country?: (string | null) | undefined
    id?: (string | null) | undefined
    mcc?: (string | null) | undefined
    name?: (string | null) | undefined
    risk_indicator: {
      delivery_email_address?: (string | null) | undefined
      delivery_time_frame?:
        | 'ELECTRONIC_DELIVERY'
        | 'OVERNIGHT_SHIPPING'
        | 'SAME_DAY_SHIPPING'
        | 'TWO_DAY_OR_MORE_SHIPPING'
        | null
        | undefined
      gift_card_amount?: (number | null) | undefined
      gift_card_count?: (number | null) | undefined
      gift_card_currency?: (string | null) | undefined
      order_availability?: 'FUTURE_AVAILABILITY' | 'MERCHANDISE_AVAILABLE' | null | undefined
      pre_order_available_date?: (string | null) | undefined
      reorder_items?: 'FIRST_TIME_ORDERED' | 'REORDERED' | null | undefined
      shipping_method?:
        | 'DIGITAL_GOODS'
        | 'LOCKER_DELIVERY'
        | 'OTHER'
        | 'PICK_UP_AND_GO_DELIVERY'
        | 'SHIP_TO_BILLING_ADDRESS'
        | 'SHIP_TO_NON_BILLING_ADDRESS'
        | 'SHIP_TO_OTHER_VERIFIED_ADDRESS'
        | 'SHIP_TO_STORE'
        | 'TRAVEL_AND_EVENT_TICKETS'
        | null
        | undefined
    }
  }
  message_category: 'NON_PAYMENT_AUTHENTICATION' | 'PAYMENT_AUTHENTICATION'
  psd2_context?:
    | ({
        acquirer_exemption?:
          | 'NONE'
          | 'TRANSACTION_RISK_ANALYSIS'
          | 'LOW_VALUE'
          | 'RECURRING_PAYMENT'
          | 'MERCHANT_INITIATED_TRANSACTION'
          | 'TRUSTED_BENEFICIARY'
          | 'STRONG_CUSTOMER_AUTHENTICATION_DELEGATION'
          | 'SECURE_CORPORATE_PAYMENT'
          | 'AUTHENTICATION_OUTAGE_EXCEPTION'
          | 'BUNDLED'
          | undefined
        lithic_exemption_validation?: 'ACCEPTED' | 'REJECTED' | 'NOT_VALIDATED' | undefined
      } | null)
    | undefined
  three_ds_requestor_challenge_indicator:
    | 'NO_PREFERENCE'
    | 'NO_CHALLENGE_REQUESTED'
    | 'CHALLENGE_PREFERENCE'
    | 'CHALLENGE_MANDATE'
    | 'NO_CHALLENGE_RISK_ALREADY_ASSESSED'
    | 'DATA_SHARE_ONLY'
    | 'OTHER'
  three_ri_request_type?:
    | 'ACCOUNT_VERIFICATION'
    | 'ADD_CARD'
    | 'BILLING_AGREEMENT'
    | 'CARD_SECURITY_CODE_STATUS_CHECK'
    | 'DELAYED_SHIPMENT'
    | 'DEVICE_BINDING_STATUS_CHECK'
    | 'INSTALLMENT_TRANSACTION'
    | 'MAIL_ORDER'
    | 'MAINTAIN_CARD_INFO'
    | 'OTHER_PAYMENT'
    | 'RECURRING_TRANSACTION'
    | 'SPLIT_PAYMENT'
    | 'SPLIT_SHIPMENT'
    | 'TELEPHONE_ORDER'
    | 'TOP_UP'
    | 'TRUST_LIST_STATUS_CHECK'
    | null
    | undefined
  token: string
  transaction?:
    | ({
        amount: number
        cardholder_amount: number | null
        currency: string
        currency_exponent: number
        date_time: string
        type:
          | 'ACCOUNT_FUNDING'
          | 'CHECK_ACCEPTANCE'
          | 'GOODS_SERVICE_PURCHASE'
          | 'PREPAID_ACTIVATION_AND_LOAD'
          | 'QUASI_CASH_TRANSACTION'
          | null
      } | null)
    | undefined
  updated: string
}
type ChallengeResponse = { token: string; challenge_response: 'APPROVE' | 'DECLINE_BY_CUSTOMER' }
type ChallengeResponseUnprocessable = { message: string }
type CreateTokenizationRequest = { type: 'AGENT'; agent_token: string }
type Method = 'SMS' | 'EMAIL'
type SelectTfaMethodRequest = { method: Method }
type SelectTfaMethodResponse = { success: boolean }
type SubmitTfaRequest = { value: string }
type SubmitTfaResponse = { success: boolean }
type PaymentCredentialsType = 'AUTONOMOUS' | 'HUMAN_IN_THE_LOOP' | 'RECURRING'
type PaymentCredentialsMandate = {
  frequency: 'ONE_TIME' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
  expires_at: string
  amount: number
  merchant: { name: string; url: string }
}
type PaymentCredentialsDevice = {
  ip_address: string
  type: string
  brand: string
  application_name: string
}
type CreatePaymentCredentialsRequest = {
  type: PaymentCredentialsType
  mandate: PaymentCredentialsMandate
  device: PaymentCredentialsDevice
}
type PaymentCredentialsMandateResponse = {
  frequency: 'ONE_TIME' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
  expires_at: string
  amount: number
  merchant: { name: string; url: string }
  token: string
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED'
}
type PaymentCredentials = {
  value: string
  expiration_month: string
  expiration_year: string
  cvv: string
  expires_at: string
}
type CreatePaymentCredentialsResponse = {
  token: string
  tokenization_token: string
  agent_token: string
  status: 'ACTIVE' | 'DEACTIVATED' | 'COMPLETED' | 'CANCELLED'
  type: PaymentCredentialsType
  mandate: PaymentCredentialsMandateResponse
  credentials: PaymentCredentials
  created_at: string
  updated_at: string
}
type CardTransactionStatusFilter = 'PENDING' | 'VOIDED' | 'SETTLED' | 'DECLINED' | 'EXPIRED'
type CardTransaction = {
  acquirer_fee: number | null
  acquirer_reference_number: string | null
  account_token: string
  amount: number
  amounts: TransactionAmounts
  authorization_amount: number | null
  authorization_code: string | null
  avs: ({ [x: string]: unknown } | null) | Avs
  card_token: string
  cardholder_authentication: ({ [x: string]: unknown } | null) | CardholderAuthentication
  created: string
  events?: TransactionEvent[] | undefined
  financial_account_token: ({ [x: string]: unknown } | null) | string
  merchant: TransactionMerchant
  service_location: ({ [x: string]: unknown } | null) | ServiceLocation
  merchant_amount: number | null
  merchant_authorization_amount: number | null
  merchant_currency: MerchantCurrency
  network: 'ALLPOINT' | 'AMEX' | 'INTERLINK' | 'MAESTRO' | 'MASTERCARD' | 'UNKNOWN' | 'VISA'
  network_risk_score: NetworkRiskScore
  result: DeclineResult
  pos: ({ [x: string]: unknown } | null) | Pos
  settled_amount: number
  status: 'DECLINED' | 'EXPIRED' | 'PENDING' | 'SETTLED' | 'VOIDED'
  token: string
  token_info: ({ [x: string]: unknown } | null) | TokenInfo
  tags: Tags
  updated: string
}
type ListTransactionsResponse = {
  data?: CardTransaction[] | undefined
  has_more?: boolean | undefined
}
type CaseStatus = 'OPEN' | 'ASSIGNED' | 'IN_REVIEW' | 'ESCALATED' | 'RESOLVED' | 'CLOSED'
type CaseSortBy =
  | 'CREATED_ASC'
  | 'CREATED_DESC'
  | 'PRIORITY_DESC'
  | 'PRIORITY_ASC'
  | 'STATUS_DESC'
  | 'STATUS_ASC'
type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
type EntityType_2 = 'CARD' | 'ACCOUNT' | 'FINANCIAL_ACCOUNT' | 'PROGRAM'
type CaseEntity = { entity_type: EntityType_2; entity_token: string | null }
type MonitoringCase = {
  token: string
  title: string | null
  status: CaseStatus
  queue_token: string
  priority: Priority
  assignee: string | null
  rule_token: string | null
  resolution: string | null
  resolution_notes: string | null
  sla_deadline: string | null
  tags: { [x: string]: string }
  created: string
  updated: string
  resolved: string | null
  collection_stopped: string | null
  entity: ({ [x: string]: unknown } | null) | CaseEntity
  pending_transactions: boolean
}
type UpdateCaseRequest = {
  status?: CaseStatus | undefined
  title?: (string | null) | undefined
  assignee?: (string | null) | undefined
  resolution?: string | undefined
  resolution_notes?: string | undefined
  tags?: { [x: string]: string } | undefined
  priority?: Priority | undefined
  sla_deadline?: (string | null) | undefined
  actor_token?: string | undefined
}
type CaseActivityType =
  | 'STATUS'
  | 'TITLE'
  | 'ASSIGNED_TO'
  | 'RESOLUTION_OUTCOME'
  | 'RESOLUTION_NOTES'
  | 'TAGS'
  | 'PRIORITY'
  | 'COMMENT'
  | 'FILE'
type CaseActivity = {
  token: string
  entry_type: CaseActivityType
  actor_token: string | null
  previous_value: string | null
  new_value: string | null
  created: string
}
type CardCaseTransaction = {
  category: 'CARD'
  token: string
  card_token: string
  account_token: string
  transaction_created_at: string
  added_at: string
}
type PaymentCaseTransaction = {
  category: 'PAYMENT'
  token: string
  financial_account_token: string
  account_token?: string | undefined
  transaction_created_at: string
  added_at: string
}
type CaseTransaction = CardCaseTransaction | PaymentCaseTransaction
type CaseCard = { card_token: string; account_token: string; transaction_count: bigint }
type AddCommentRequest = { comment: string; actor_token?: string | undefined }
type EditCommentRequest = { comment: string; actor_token?: string | undefined }
type CreateFileRequest = { name: string }
type FileStatus = 'PENDING' | 'READY' | 'REJECTED'
type UploadConstraints = { accepted_mime_types: string[]; max_size_bytes: bigint }
type File2 = {
  token: string
  name: string
  mime_type: string | null
  size_bytes: bigint | null
  status: FileStatus
  upload_url: string | null
  upload_url_expires: string | null
  upload_constraints: ({ [x: string]: unknown } | null) | UploadConstraints
  download_url: string | null
  download_url_expires: string | null
  failure_reason: string | null
  created: string
  updated: string
}
type CreateQueueRequest = {
  name: string
  description?: (string | null) | undefined
  allowed_resolutions?: (string[] | null) | undefined
}
type Queue = {
  token: string
  name: string
  description: string | null
  allowed_resolutions: string[]
  created: string
  updated: string
  case_counts: {
    OPEN?: bigint | undefined
    ASSIGNED?: bigint | undefined
    IN_REVIEW?: bigint | undefined
    ESCALATED?: bigint | undefined
    RESOLVED?: bigint | undefined
    CLOSED?: bigint | undefined
  }
}
type UpdateQueueRequest = {
  name?: string | undefined
  description?: (string | null) | undefined
  allowed_resolutions?: (string[] | null) | undefined
}
type Transfer = {
  category?: 'TRANSFER' | undefined
  created?: string | undefined
  currency?: string | undefined
  descriptor?: string | undefined
  events?: FinancialEvent[] | undefined
  from_balance?: Balance[] | undefined
  pending_amount?: number | undefined
  result?: 'APPROVED' | 'DECLINED' | undefined
  settled_amount?: number | undefined
  status?: 'DECLINED' | 'EXPIRED' | 'PENDING' | 'SETTLED' | 'VOIDED' | undefined
  to_balance?: Balance[] | undefined
  token?: string | undefined
  updated?: string | undefined
}
type LimitWithProgress = { limit: number; amount_originated?: (number | null) | undefined }
type DirectionalLimits = { credit: LimitWithProgress; debit: LimitWithProgress }
type TransferLimitItem = {
  company_id: string
  financial_entity_id: string
  is_fbo: boolean
  date: string
  program_limit_per_transaction: DirectionalLimits
  daily_limit: DirectionalLimits
  monthly_limit: DirectionalLimits
}
type TransferLimitsResponse = { data: TransferLimitItem[]; has_more: boolean }
type OnClosedAccount = 'FAIL' | 'USE_SUSPENSE'
type CreateBookTransferRequest = {
  amount: number
  category: BookTransferCategory
  from_financial_account_token: string
  memo?: string | undefined
  subtype: string
  to_financial_account_token: string
  token?: string | undefined
  type: BookTransferType
  external_id?: string | undefined
  on_closed_account?: OnClosedAccount | undefined
  hold_token?: string | undefined
}
type RetryBookTransferRequest = { retry_token: string }
type ExternalPaymentsResponse = { data: ExternalPaymentResponse[]; has_more: boolean }
type ExternalPaymentProgressTo = 'SETTLED' | 'RELEASED'
type CreateExternalPaymentRequest = {
  category: ExternalPaymentCategory
  financial_account_token: string
  amount: number
  memo?: string | undefined
  user_defined_id?: string | undefined
  effective_date: string
  token?: string | undefined
  payment_type: ExternalPaymentDirection
  progress_to?: ExternalPaymentProgressTo | undefined
}
type ExternalPaymentActionWithProgressToRequest = {
  memo?: string | undefined
  effective_date: string
  progress_to?: ExternalPaymentProgressTo | undefined
}
type ExternalPaymentActionRequest = { memo?: string | undefined; effective_date: string }
type ManagementOperationTransactionsResponse = {
  data: ManagementOperationTransaction[]
  has_more: boolean
}
type CreateManagementOperationEventType =
  | 'CASH_BACK'
  | 'CURRENCY_CONVERSION'
  | 'INSTALLMENT_FEE'
  | 'LATE_PAYMENT'
  | 'BILLING_ERROR'
  | 'PROVISIONAL_CREDIT'
  | 'RETURNED_PAYMENT'
  | 'DISPUTE_WON'
  | 'DISBURSE'
  | 'ANNUAL'
  | 'QUARTERLY'
  | 'MONTHLY'
  | 'FEE'
type CreateManagementOperationPublicRequest = {
  category: ManagementOperationCategory
  event_type: CreateManagementOperationEventType
  subtype?: string | undefined
  financial_account_token: string
  amount: number
  memo?: string | undefined
  user_defined_id?: string | undefined
  effective_date: string
  token?: string | undefined
  direction: ManagementOperationDirection
  on_closed_account?: OnClosedAccount | undefined
}
type ManagementOperationActionRequest = { memo?: string | undefined; effective_date: string }
type NetworkProgram = {
  token: string
  registered_program_identification_number: string
  name: string
  default_product_code: string
}
type FundingEventSettlement = { settled_gross_amount: bigint; network_settlement_date: string }
type FundingEventResponse = {
  token: string
  collection_tokens: string[]
  previous_high_watermark: string
  high_watermark: string
  collection_resource_type: 'BOOK_TRANSFER' | 'PAYMENT'
  network_settlement_summary: FundingEventSettlement[]
  created: string
  updated: string
}
type FundingEventResponses = { data: FundingEventResponse[]; has_more: boolean }
type FundingEventDetailsResponse = {
  token: string
  settlement_summary_url: string
  settlement_details_url: string
}
type Merchant = {
  acceptor_id: string
  acquiring_institution_id: string
  city: string
  country: string
  descriptor: string
  mcc: string
  state: string
}
type TransactionSeries2 = {
  type: 'DISPUTE'
  related_transaction_token: string
  related_transaction_event_token: string | ({ [x: string]: unknown } | null)
}
type LiabilityAllocation = {
  original_amount: number
  recovered_amount: number
  written_off_amount: number
  denied_amount: number
  remaining_amount: number
}
type WorkflowEventData = {
  stage: 'CLAIM'
  action: 'OPENED' | 'CLOSED' | 'REOPENED'
  reason: string | null
  amount: number | null
  disposition: 'WON' | 'LOST' | 'PARTIALLY_WON' | 'WITHDRAWN' | 'DENIED' | null
}
type WorkflowEvent = { token: string; type: 'WORKFLOW'; created: string; data: WorkflowEventData }
type FinancialEventData = {
  stage: 'CHARGEBACK' | 'REPRESENTMENT' | 'PREARBITRATION' | 'ARBITRATION' | 'COLLABORATION'
  amount: number
  polarity: 'CREDIT' | 'DEBIT'
}
type FinancialEvent2 = {
  token: string
  type: 'FINANCIAL'
  created: string
  data: FinancialEventData
}
type CardholderLiabilityEventData = {
  action:
    | 'PROVISIONAL_CREDIT_GRANTED'
    | 'PROVISIONAL_CREDIT_REVERSED'
    | 'WRITTEN_OFF'
    | 'WRITE_OFF_REVERSED'
  amount: number
  reason: string | null
}
type CardholderLiabilityEvent = {
  token: string
  type: 'CARDHOLDER_LIABILITY'
  created: string
  data: CardholderLiabilityEventData
}
type Event2 = WorkflowEvent | FinancialEvent2 | CardholderLiabilityEvent
type Dispute = {
  case_id: string | null
  token: string
  card_token: string
  account_token: string
  claim_token: string | null
  network: 'VISA' | 'MASTERCARD'
  currency: string
  created: string
  updated: string
  merchant: Merchant
  transaction_series: TransactionSeries2 | ({ [x: string]: unknown } | null)
  liability_allocation: LiabilityAllocation
  status: 'OPEN' | 'CLOSED' | null
  disposition: 'WON' | 'LOST' | 'PARTIALLY_WON' | 'WITHDRAWN' | 'DENIED' | null
  events: Event2[]
}
type DisputesResponse = { data: Dispute[]; has_more: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/account_holders': {
      $get:
        | {
            input: {
              query: {
                external_id?: string | undefined
                limit?: number | undefined
                first_name?: string | undefined
                last_name?: string | undefined
                legal_business_name?: string | undefined
                phone_number?: string | undefined
                email?: string | undefined
                ending_before?: string | undefined
                starting_after?: string | undefined
                begin?: string | undefined
                end?: string | undefined
              }
            }
            output: { data: AccountHolder[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                external_id?: string | undefined
                limit?: number | undefined
                first_name?: string | undefined
                last_name?: string | undefined
                legal_business_name?: string | undefined
                phone_number?: string | undefined
                email?: string | undefined
                ending_before?: string | undefined
                starting_after?: string | undefined
                begin?: string | undefined
                end?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                external_id?: string | undefined
                limit?: number | undefined
                first_name?: string | undefined
                last_name?: string | undefined
                legal_business_name?: string | undefined
                phone_number?: string | undefined
                email?: string | undefined
                ending_before?: string | undefined
                starting_after?: string | undefined
                begin?: string | undefined
                end?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: Kyb | KybDelegated | Kyc | KycExempt }
            output: {
              account_token: string
              created?: string | undefined
              external_id?: string | undefined
              status:
                | 'ACCEPTED'
                | 'PENDING_REVIEW'
                | 'PENDING_DOCUMENT'
                | 'PENDING_RESUBMIT'
                | 'REJECTED'
              status_reasons: StatusReasons[]
              required_documents?: RequiredDocument[] | undefined
              token: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Kyb | KybDelegated | Kyc | KycExempt }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Kyb | KybDelegated | Kyc | KycExempt }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Kyb | KybDelegated | Kyc | KycExempt }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/account_holders/:account_holder_token': {
      $get:
        | {
            input: { param: { account_holder_token: string } }
            output: AccountHolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { account_holder_token: string } } & {
              json: KybPatchRequest | KycPatchRequest | PatchRequest
            }
            output: KybKycPatchResponse | PatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_holder_token: string } } & {
              json: KybPatchRequest | KycPatchRequest | PatchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/account_holders/:account_holder_token/documents': {
      $get:
        | {
            input: { param: { account_holder_token: string } }
            output: { data?: Document[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_holder_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { account_holder_token: string } } & {
              json: {
                document_type:
                  | 'EIN_LETTER'
                  | 'TAX_RETURN'
                  | 'OPERATING_AGREEMENT'
                  | 'CERTIFICATE_OF_FORMATION'
                  | 'DRIVERS_LICENSE'
                  | 'PASSPORT'
                  | 'PASSPORT_CARD'
                  | 'CERTIFICATE_OF_GOOD_STANDING'
                  | 'ARTICLES_OF_INCORPORATION'
                  | 'ARTICLES_OF_ORGANIZATION'
                  | 'BYLAWS'
                  | 'GOVERNMENT_BUSINESS_LICENSE'
                  | 'PARTNERSHIP_AGREEMENT'
                  | 'SS4_FORM'
                  | 'BANK_STATEMENT'
                  | 'UTILITY_BILL_STATEMENT'
                  | 'SSN_CARD'
                  | 'ITIN_LETTER'
                  | 'FINCEN_BOI_REPORT'
                entity_token: string
              }
            }
            output: Document
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_holder_token: string } } & {
              json: {
                document_type:
                  | 'EIN_LETTER'
                  | 'TAX_RETURN'
                  | 'OPERATING_AGREEMENT'
                  | 'CERTIFICATE_OF_FORMATION'
                  | 'DRIVERS_LICENSE'
                  | 'PASSPORT'
                  | 'PASSPORT_CARD'
                  | 'CERTIFICATE_OF_GOOD_STANDING'
                  | 'ARTICLES_OF_INCORPORATION'
                  | 'ARTICLES_OF_ORGANIZATION'
                  | 'BYLAWS'
                  | 'GOVERNMENT_BUSINESS_LICENSE'
                  | 'PARTNERSHIP_AGREEMENT'
                  | 'SS4_FORM'
                  | 'BANK_STATEMENT'
                  | 'UTILITY_BILL_STATEMENT'
                  | 'SSN_CARD'
                  | 'ITIN_LETTER'
                  | 'FINCEN_BOI_REPORT'
                entity_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_holder_token: string } } & {
              json: {
                document_type:
                  | 'EIN_LETTER'
                  | 'TAX_RETURN'
                  | 'OPERATING_AGREEMENT'
                  | 'CERTIFICATE_OF_FORMATION'
                  | 'DRIVERS_LICENSE'
                  | 'PASSPORT'
                  | 'PASSPORT_CARD'
                  | 'CERTIFICATE_OF_GOOD_STANDING'
                  | 'ARTICLES_OF_INCORPORATION'
                  | 'ARTICLES_OF_ORGANIZATION'
                  | 'BYLAWS'
                  | 'GOVERNMENT_BUSINESS_LICENSE'
                  | 'PARTNERSHIP_AGREEMENT'
                  | 'SS4_FORM'
                  | 'BANK_STATEMENT'
                  | 'UTILITY_BILL_STATEMENT'
                  | 'SSN_CARD'
                  | 'ITIN_LETTER'
                  | 'FINCEN_BOI_REPORT'
                entity_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_holder_token: string } } & {
              json: {
                document_type:
                  | 'EIN_LETTER'
                  | 'TAX_RETURN'
                  | 'OPERATING_AGREEMENT'
                  | 'CERTIFICATE_OF_FORMATION'
                  | 'DRIVERS_LICENSE'
                  | 'PASSPORT'
                  | 'PASSPORT_CARD'
                  | 'CERTIFICATE_OF_GOOD_STANDING'
                  | 'ARTICLES_OF_INCORPORATION'
                  | 'ARTICLES_OF_ORGANIZATION'
                  | 'BYLAWS'
                  | 'GOVERNMENT_BUSINESS_LICENSE'
                  | 'PARTNERSHIP_AGREEMENT'
                  | 'SS4_FORM'
                  | 'BANK_STATEMENT'
                  | 'UTILITY_BILL_STATEMENT'
                  | 'SSN_CARD'
                  | 'ITIN_LETTER'
                  | 'FINCEN_BOI_REPORT'
                entity_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { account_holder_token: string } } & {
              json: {
                document_type:
                  | 'EIN_LETTER'
                  | 'TAX_RETURN'
                  | 'OPERATING_AGREEMENT'
                  | 'CERTIFICATE_OF_FORMATION'
                  | 'DRIVERS_LICENSE'
                  | 'PASSPORT'
                  | 'PASSPORT_CARD'
                  | 'CERTIFICATE_OF_GOOD_STANDING'
                  | 'ARTICLES_OF_INCORPORATION'
                  | 'ARTICLES_OF_ORGANIZATION'
                  | 'BYLAWS'
                  | 'GOVERNMENT_BUSINESS_LICENSE'
                  | 'PARTNERSHIP_AGREEMENT'
                  | 'SS4_FORM'
                  | 'BANK_STATEMENT'
                  | 'UTILITY_BILL_STATEMENT'
                  | 'SSN_CARD'
                  | 'ITIN_LETTER'
                  | 'FINCEN_BOI_REPORT'
                entity_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/account_holders/:account_holder_token/documents/:document_token': {
      $get:
        | {
            input: { param: { account_holder_token: string; document_token: string } }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_holder_token: string; document_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_holder_token: string; document_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_holder_token: string; document_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_holder_token: string; document_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/account_holders/:account_holder_token/entities': {
      $post:
        | {
            input: { param: { account_holder_token: string } } & { json: CreateEntityRequest }
            output: CreateEntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_holder_token: string } } & { json: CreateEntityRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_holder_token: string } } & { json: CreateEntityRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_holder_token: string } } & { json: CreateEntityRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_holder_token: string } } & { json: CreateEntityRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_holder_token: string } } & { json: CreateEntityRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/account_holders/:account_holder_token/entities/:entity_token': {
      $delete:
        | {
            input: { param: { account_holder_token: string; entity_token: string } }
            output: EntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_holder_token: string; entity_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_holder_token: string; entity_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_holder_token: string; entity_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_holder_token: string; entity_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/accounts': {
      $get:
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: AccountConfiguration[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/accounts/:account_token': {
      $get:
        | {
            input: { param: { account_token: string } }
            output: AccountConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { account_token: string } } & {
              json: {
                daily_spend_limit?: number | undefined
                lifetime_spend_limit?: number | undefined
                monthly_spend_limit?: number | undefined
                state?: 'ACTIVE' | 'PAUSED' | 'CLOSED' | undefined
                substatus?:
                  | 'FRAUD_IDENTIFIED'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'RISK_VIOLATION'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'INTERNAL_REVIEW'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
                verification_address?:
                  | {
                      address1?: string | undefined
                      address2?: string | undefined
                      city?: string | undefined
                      country?: string | undefined
                      postal_code?: string | undefined
                      state?: string | undefined
                    }
                  | undefined
              }
            }
            output: AccountConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_token: string } } & {
              json: {
                daily_spend_limit?: number | undefined
                lifetime_spend_limit?: number | undefined
                monthly_spend_limit?: number | undefined
                state?: 'ACTIVE' | 'PAUSED' | 'CLOSED' | undefined
                substatus?:
                  | 'FRAUD_IDENTIFIED'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'RISK_VIOLATION'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'INTERNAL_REVIEW'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
                verification_address?:
                  | {
                      address1?: string | undefined
                      address2?: string | undefined
                      city?: string | undefined
                      country?: string | undefined
                      postal_code?: string | undefined
                      state?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_token: string } } & {
              json: {
                daily_spend_limit?: number | undefined
                lifetime_spend_limit?: number | undefined
                monthly_spend_limit?: number | undefined
                state?: 'ACTIVE' | 'PAUSED' | 'CLOSED' | undefined
                substatus?:
                  | 'FRAUD_IDENTIFIED'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'RISK_VIOLATION'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'INTERNAL_REVIEW'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
                verification_address?:
                  | {
                      address1?: string | undefined
                      address2?: string | undefined
                      city?: string | undefined
                      country?: string | undefined
                      postal_code?: string | undefined
                      state?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_token: string } } & {
              json: {
                daily_spend_limit?: number | undefined
                lifetime_spend_limit?: number | undefined
                monthly_spend_limit?: number | undefined
                state?: 'ACTIVE' | 'PAUSED' | 'CLOSED' | undefined
                substatus?:
                  | 'FRAUD_IDENTIFIED'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'RISK_VIOLATION'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'INTERNAL_REVIEW'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
                verification_address?:
                  | {
                      address1?: string | undefined
                      address2?: string | undefined
                      city?: string | undefined
                      country?: string | undefined
                      postal_code?: string | undefined
                      state?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_token: string } } & {
              json: {
                daily_spend_limit?: number | undefined
                lifetime_spend_limit?: number | undefined
                monthly_spend_limit?: number | undefined
                state?: 'ACTIVE' | 'PAUSED' | 'CLOSED' | undefined
                substatus?:
                  | 'FRAUD_IDENTIFIED'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'RISK_VIOLATION'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'INTERNAL_REVIEW'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
                verification_address?:
                  | {
                      address1?: string | undefined
                      address2?: string | undefined
                      city?: string | undefined
                      country?: string | undefined
                      postal_code?: string | undefined
                      state?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_token: string } } & {
              json: {
                daily_spend_limit?: number | undefined
                lifetime_spend_limit?: number | undefined
                monthly_spend_limit?: number | undefined
                state?: 'ACTIVE' | 'PAUSED' | 'CLOSED' | undefined
                substatus?:
                  | 'FRAUD_IDENTIFIED'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'RISK_VIOLATION'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'INTERNAL_REVIEW'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
                verification_address?:
                  | {
                      address1?: string | undefined
                      address2?: string | undefined
                      city?: string | undefined
                      country?: string | undefined
                      postal_code?: string | undefined
                      state?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/accounts/:account_token/spend_limits': {
      $get:
        | {
            input: { param: { account_token: string } }
            output: AccountSpendLimits
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/auth_rules': {
      $post:
        | {
            input: { json: CreateAuthRuleRequest }
            output: AuthRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAuthRuleRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAuthRuleRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
                business_account_token?: string | undefined
                scope?: 'PROGRAM' | 'ACCOUNT' | 'BUSINESS_ACCOUNT' | 'CARD' | 'ANY' | undefined
                event_stream?: EventStream | undefined
                event_streams?: EventStream[] | undefined
              }
            }
            output: { data: AuthRule[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
                business_account_token?: string | undefined
                scope?: 'PROGRAM' | 'ACCOUNT' | 'BUSINESS_ACCOUNT' | 'CARD' | 'ANY' | undefined
                event_stream?: EventStream | undefined
                event_streams?: EventStream[] | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
                business_account_token?: string | undefined
                scope?: 'PROGRAM' | 'ACCOUNT' | 'BUSINESS_ACCOUNT' | 'CARD' | 'ANY' | undefined
                event_stream?: EventStream | undefined
                event_streams?: EventStream[] | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token': {
      $get:
        | {
            input: { param: { auth_rule_token: string } }
            output: AuthRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { auth_rule_token: string } } & { json: PatchAuthRuleRequest }
            output: AuthRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } } & { json: PatchAuthRuleRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } } & { json: PatchAuthRuleRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { auth_rule_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/entities': {
      $patch:
        | {
            input: { param: { auth_rule_token: string } } & { json: PatchAuthRuleEntitiesRequest }
            output: AuthRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } } & { json: PatchAuthRuleEntitiesRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } } & { json: PatchAuthRuleEntitiesRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/draft': {
      $post:
        | {
            input: { param: { auth_rule_token: string } } & {
              json: {
                parameters?: ({ [x: string]: unknown } | null) | AuthRuleParameters | undefined
              }
            }
            output: AuthRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              json: {
                parameters?: ({ [x: string]: unknown } | null) | AuthRuleParameters | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              json: {
                parameters?: ({ [x: string]: unknown } | null) | AuthRuleParameters | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/features': {
      $get:
        | {
            input: { param: { auth_rule_token: string } } & {
              query: { account_token?: string | undefined; card_token?: string | undefined }
            }
            output: AuthRuleFeatureState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              query: { account_token?: string | undefined; card_token?: string | undefined }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              query: { account_token?: string | undefined; card_token?: string | undefined }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/promote': {
      $post:
        | {
            input: { param: { auth_rule_token: string } }
            output: AuthRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/versions': {
      $get:
        | {
            input: { param: { auth_rule_token: string } }
            output: { data: AuthRuleVersion[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/report': {
      $get:
        | {
            input: { param: { auth_rule_token: string } } & {
              query: { begin: string; end: string }
            }
            output: PerformanceReportV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              query: { begin: string; end: string }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              query: { begin: string; end: string }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/backtests': {
      $get:
        | {
            input: { param: { auth_rule_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: BacktestListItem[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { auth_rule_token: string } } & { json: BacktestRequest }
            output: { backtest_token?: BacktestToken | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string } } & { json: BacktestRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string } } & { json: BacktestRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/:auth_rule_token/backtests/:auth_rule_backtest_token': {
      $get:
        | {
            input: { param: { auth_rule_token: string; auth_rule_backtest_token: string } }
            output: BacktestResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auth_rule_token: string; auth_rule_backtest_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { auth_rule_token: string; auth_rule_backtest_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/auth_rules/results': {
      $get:
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                event_token?: string | undefined
                auth_rule_token?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                has_actions?: boolean | undefined
              }
            }
            output: { data: AuthRuleResult[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                event_token?: string | undefined
                auth_rule_token?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                has_actions?: boolean | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                event_token?: string | undefined
                auth_rule_token?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                has_actions?: boolean | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/cards/:card_token/signals': {
      $get:
        | {
            input: { param: { card_token: string } }
            output: SignalsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { card_token: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/accounts/:account_token/signals': {
      $get:
        | {
            input: { param: { account_token: string } }
            output: SignalsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_token: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_token: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_token: string } }
            output: { error?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/auth_stream/secret': {
      $get:
        | { input: {}; output: { secret?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/auth_stream/secret/rotate': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/balances': {
      $get:
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                balance_date?: string | undefined
                financial_account_type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | undefined
              }
            }
            output: { data: Balance[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                balance_date?: string | undefined
                financial_account_type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                balance_date?: string | undefined
                financial_account_type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                balance_date?: string | undefined
                financial_account_type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                balance_date?: string | undefined
                financial_account_type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                balance_date?: string | undefined
                financial_account_type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/card_programs': {
      $get:
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: CardProgram[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/card_programs/:card_program_token': {
      $get:
        | {
            input: { param: { card_program_token: string } }
            output: CardProgram
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards': {
      $get:
        | {
            input: {
              query: {
                account_token?: string | undefined
                state?:
                  | 'CLOSED'
                  | 'OPEN'
                  | 'PAUSED'
                  | 'PENDING_ACTIVATION'
                  | 'PENDING_FULFILLMENT'
                  | undefined
                memo?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: NonPciCardResponse[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                state?:
                  | 'CLOSED'
                  | 'OPEN'
                  | 'PAUSED'
                  | 'PENDING_ACTIVATION'
                  | 'PENDING_FULFILLMENT'
                  | undefined
                memo?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                state?:
                  | 'CLOSED'
                  | 'OPEN'
                  | 'PAUSED'
                  | 'PENDING_ACTIVATION'
                  | 'PENDING_FULFILLMENT'
                  | undefined
                memo?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                state?:
                  | 'CLOSED'
                  | 'OPEN'
                  | 'PAUSED'
                  | 'PENDING_ACTIVATION'
                  | 'PENDING_FULFILLMENT'
                  | undefined
                memo?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                state?:
                  | 'CLOSED'
                  | 'OPEN'
                  | 'PAUSED'
                  | 'PENDING_ACTIVATION'
                  | 'PENDING_FULFILLMENT'
                  | undefined
                memo?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                state?:
                  | 'CLOSED'
                  | 'OPEN'
                  | 'PAUSED'
                  | 'PENDING_ACTIVATION'
                  | 'PENDING_FULFILLMENT'
                  | undefined
                memo?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                account_token?: string | undefined
                card_program_token?: string | undefined
                bulk_order_token?: string | undefined
                carrier?: Carrier | undefined
                digital_card_art_token?: string | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                memo?: string | undefined
                pin?: string | undefined
                product_id?: string | undefined
                replacement_for?: string | undefined
                replacement_substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                replacement_comment?: string | undefined
                replacement_account_token?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'OPEN' | 'PAUSED' | undefined
                tags?: Tags | undefined
                type:
                  | 'MERCHANT_LOCKED'
                  | 'PHYSICAL'
                  | 'SINGLE_USE'
                  | 'VIRTUAL'
                  | 'UNLOCKED'
                  | 'DIGITAL_WALLET'
              }
            }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                account_token?: string | undefined
                card_program_token?: string | undefined
                bulk_order_token?: string | undefined
                carrier?: Carrier | undefined
                digital_card_art_token?: string | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                memo?: string | undefined
                pin?: string | undefined
                product_id?: string | undefined
                replacement_for?: string | undefined
                replacement_substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                replacement_comment?: string | undefined
                replacement_account_token?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'OPEN' | 'PAUSED' | undefined
                tags?: Tags | undefined
                type:
                  | 'MERCHANT_LOCKED'
                  | 'PHYSICAL'
                  | 'SINGLE_USE'
                  | 'VIRTUAL'
                  | 'UNLOCKED'
                  | 'DIGITAL_WALLET'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                account_token?: string | undefined
                card_program_token?: string | undefined
                bulk_order_token?: string | undefined
                carrier?: Carrier | undefined
                digital_card_art_token?: string | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                memo?: string | undefined
                pin?: string | undefined
                product_id?: string | undefined
                replacement_for?: string | undefined
                replacement_substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                replacement_comment?: string | undefined
                replacement_account_token?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'OPEN' | 'PAUSED' | undefined
                tags?: Tags | undefined
                type:
                  | 'MERCHANT_LOCKED'
                  | 'PHYSICAL'
                  | 'SINGLE_USE'
                  | 'VIRTUAL'
                  | 'UNLOCKED'
                  | 'DIGITAL_WALLET'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                account_token?: string | undefined
                card_program_token?: string | undefined
                bulk_order_token?: string | undefined
                carrier?: Carrier | undefined
                digital_card_art_token?: string | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                memo?: string | undefined
                pin?: string | undefined
                product_id?: string | undefined
                replacement_for?: string | undefined
                replacement_substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                replacement_comment?: string | undefined
                replacement_account_token?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'OPEN' | 'PAUSED' | undefined
                tags?: Tags | undefined
                type:
                  | 'MERCHANT_LOCKED'
                  | 'PHYSICAL'
                  | 'SINGLE_USE'
                  | 'VIRTUAL'
                  | 'UNLOCKED'
                  | 'DIGITAL_WALLET'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                account_token?: string | undefined
                card_program_token?: string | undefined
                bulk_order_token?: string | undefined
                carrier?: Carrier | undefined
                digital_card_art_token?: string | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                memo?: string | undefined
                pin?: string | undefined
                product_id?: string | undefined
                replacement_for?: string | undefined
                replacement_substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                replacement_comment?: string | undefined
                replacement_account_token?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'OPEN' | 'PAUSED' | undefined
                tags?: Tags | undefined
                type:
                  | 'MERCHANT_LOCKED'
                  | 'PHYSICAL'
                  | 'SINGLE_USE'
                  | 'VIRTUAL'
                  | 'UNLOCKED'
                  | 'DIGITAL_WALLET'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/search_by_pan': {
      $post:
        | {
            input: { json: { pan: string } }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { pan: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { pan: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { pan: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: { pan: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { json: { pan: string } }; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/cards/:card_token': {
      $get:
        | {
            input: { param: { card_token: string } }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_card_art_token?: string | undefined
                memo?: string | undefined
                network_program_token?: string | undefined
                pin?: string | undefined
                pin_status?: 'OK' | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'CLOSED' | 'OPEN' | 'PAUSED' | undefined
                tags?: TagsPatch | undefined
                substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
              }
            }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_card_art_token?: string | undefined
                memo?: string | undefined
                network_program_token?: string | undefined
                pin?: string | undefined
                pin_status?: 'OK' | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'CLOSED' | 'OPEN' | 'PAUSED' | undefined
                tags?: TagsPatch | undefined
                substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_card_art_token?: string | undefined
                memo?: string | undefined
                network_program_token?: string | undefined
                pin?: string | undefined
                pin_status?: 'OK' | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'CLOSED' | 'OPEN' | 'PAUSED' | undefined
                tags?: TagsPatch | undefined
                substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_card_art_token?: string | undefined
                memo?: string | undefined
                network_program_token?: string | undefined
                pin?: string | undefined
                pin_status?: 'OK' | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'CLOSED' | 'OPEN' | 'PAUSED' | undefined
                tags?: TagsPatch | undefined
                substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_card_art_token?: string | undefined
                memo?: string | undefined
                network_program_token?: string | undefined
                pin?: string | undefined
                pin_status?: 'OK' | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'CLOSED' | 'OPEN' | 'PAUSED' | undefined
                tags?: TagsPatch | undefined
                substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_card_art_token?: string | undefined
                memo?: string | undefined
                network_program_token?: string | undefined
                pin?: string | undefined
                pin_status?: 'OK' | undefined
                spend_limit?: number | undefined
                spend_limit_duration?: SpendLimitDuration | undefined
                state?: 'CLOSED' | 'OPEN' | 'PAUSED' | undefined
                tags?: TagsPatch | undefined
                substatus?:
                  | 'LOST'
                  | 'COMPROMISED'
                  | 'DAMAGED'
                  | 'END_USER_REQUEST'
                  | 'ISSUER_REQUEST'
                  | 'NOT_ACTIVE'
                  | 'SUSPICIOUS_ACTIVITY'
                  | 'INTERNAL_REVIEW'
                  | 'EXPIRED'
                  | 'UNDELIVERABLE'
                  | 'OTHER'
                  | undefined
                comment?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/balances': {
      $get:
        | {
            input: { param: { card_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: { data: FinancialAccountBalance[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/financial_transactions': {
      $get:
        | {
            input: { param: { card_token: string } } & {
              query: {
                category?: 'CARD' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: FinancialAccountTransaction[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                category?: 'CARD' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                category?: 'CARD' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                category?: 'CARD' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                category?: 'CARD' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              query: {
                category?: 'CARD' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/financial_transactions/:financial_transaction_token': {
      $get:
        | {
            input: { param: { card_token: string; financial_transaction_token: string } }
            output: FinancialAccountTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string; financial_transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string; financial_transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string; financial_transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string; financial_transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string; financial_transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/provision': {
      $post:
        | {
            input: { param: { card_token: string } } & {
              json: {
                certificate?: string | undefined
                client_wallet_account_id?: string | undefined
                client_device_id?: string | undefined
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | 'SAMSUNG_PAY' | undefined
                nonce?: string | undefined
                nonce_signature?: string | undefined
              }
            }
            output: {
              provisioning_payload?:
                | string
                | {
                    activationData?: string | undefined
                    ephemeralPublicKey?: string | undefined
                    encryptedData?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                certificate?: string | undefined
                client_wallet_account_id?: string | undefined
                client_device_id?: string | undefined
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | 'SAMSUNG_PAY' | undefined
                nonce?: string | undefined
                nonce_signature?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                certificate?: string | undefined
                client_wallet_account_id?: string | undefined
                client_device_id?: string | undefined
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | 'SAMSUNG_PAY' | undefined
                nonce?: string | undefined
                nonce_signature?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                certificate?: string | undefined
                client_wallet_account_id?: string | undefined
                client_device_id?: string | undefined
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | 'SAMSUNG_PAY' | undefined
                nonce?: string | undefined
                nonce_signature?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                certificate?: string | undefined
                client_wallet_account_id?: string | undefined
                client_device_id?: string | undefined
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | 'SAMSUNG_PAY' | undefined
                nonce?: string | undefined
                nonce_signature?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                certificate?: string | undefined
                client_wallet_account_id?: string | undefined
                client_device_id?: string | undefined
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | 'SAMSUNG_PAY' | undefined
                nonce?: string | undefined
                nonce_signature?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/web_provision': {
      $post:
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | undefined
                server_session_id?: string | undefined
                client_device_id?: string | undefined
                client_wallet_account_id?: string | undefined
              }
            }
            output: WebPushProvisioningResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | undefined
                server_session_id?: string | undefined
                client_device_id?: string | undefined
                client_wallet_account_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | undefined
                server_session_id?: string | undefined
                client_device_id?: string | undefined
                client_wallet_account_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | undefined
                server_session_id?: string | undefined
                client_device_id?: string | undefined
                client_wallet_account_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | undefined
                server_session_id?: string | undefined
                client_device_id?: string | undefined
                client_wallet_account_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                digital_wallet?: 'APPLE_PAY' | 'GOOGLE_PAY' | undefined
                server_session_id?: string | undefined
                client_device_id?: string | undefined
                client_wallet_account_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/reissue': {
      $post:
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address?: ShippingAddress | undefined
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/renew': {
      $post:
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                exp_month?: string | undefined
                exp_year?: string | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/reassign_account': {
      $post:
        | {
            input: { param: { card_token: string } } & { json: ReassignAccountRequest }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & { json: ReassignAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & { json: ReassignAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & { json: ReassignAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & { json: ReassignAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & { json: ReassignAccountRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/convert_physical': {
      $post:
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: PciCardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & {
              json: {
                carrier?: Carrier | undefined
                product_id?: string | undefined
                shipping_address: ShippingAddress
                shipping_method?:
                  | '2_DAY'
                  | 'BULK'
                  | 'EXPEDITED'
                  | 'EXPRESS'
                  | 'PRIORITY'
                  | 'STANDARD'
                  | 'STANDARD_WITH_TRACKING'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/spend_limits': {
      $get:
        | {
            input: { param: { card_token: string } }
            output: CardSpendLimits
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/cards/:card_token/embed': {
      $post:
        | {
            input: { param: { card_token: string } } & { json: CreateEmbedSessionRequest }
            output: EmbedSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { card_token: string } } & { json: CreateEmbedSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & { json: CreateEmbedSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & { json: CreateEmbedSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & { json: CreateEmbedSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & { json: CreateEmbedSessionRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/card_authorizations/:event_token/challenge_response': {
      $post:
        | {
            input: { param: { event_token: string } } & {
              json: { response: 'APPROVE' | 'DECLINE' }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { event_token: string } } & {
              json: { response: 'APPROVE' | 'DECLINE' }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { event_token: string } } & {
              json: { response: 'APPROVE' | 'DECLINE' }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { event_token: string } } & {
              json: { response: 'APPROVE' | 'DECLINE' }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { event_token: string } } & {
              json: { response: 'APPROVE' | 'DECLINE' }
            }
            output: {}
            outputFormat: string
            status: 410
          }
        | {
            input: { param: { event_token: string } } & {
              json: { response: 'APPROVE' | 'DECLINE' }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/card_bulk_orders': {
      $get:
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: BulkOrderResponse[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateBulkOrderRequest }
            output: BulkOrderResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateBulkOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBulkOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateBulkOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/card_bulk_orders/:bulk_order_token': {
      $get:
        | {
            input: { param: { bulk_order_token: string } }
            output: BulkOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulk_order_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bulk_order_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bulk_order_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { bulk_order_token: string } } & { json: UpdateBulkOrderRequest }
            output: BulkOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bulk_order_token: string } } & { json: UpdateBulkOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bulk_order_token: string } } & { json: UpdateBulkOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bulk_order_token: string } } & { json: UpdateBulkOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bulk_order_token: string } } & { json: UpdateBulkOrderRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/digital_card_art': {
      $get:
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: DigitalCardArt[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/digital_card_art/:digital_card_art_token': {
      $get:
        | {
            input: { param: { digital_card_art_token: string } }
            output: DigitalCardArt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { digital_card_art_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { digital_card_art_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { digital_card_art_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { digital_card_art_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { digital_card_art_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/disputes': {
      $get:
        | {
            input: {
              query: {
                status?:
                  | 'ARBITRATION'
                  | 'CASE_CLOSED'
                  | 'CASE_WON'
                  | 'NEW'
                  | 'PENDING_CUSTOMER'
                  | 'PREARBITRATION'
                  | 'REPRESENTMENT'
                  | 'SUBMITTED'
                  | undefined
                transaction_tokens?: string[] | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: DisputeV1[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?:
                  | 'ARBITRATION'
                  | 'CASE_CLOSED'
                  | 'CASE_WON'
                  | 'NEW'
                  | 'PENDING_CUSTOMER'
                  | 'PREARBITRATION'
                  | 'REPRESENTMENT'
                  | 'SUBMITTED'
                  | undefined
                transaction_tokens?: string[] | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                status?:
                  | 'ARBITRATION'
                  | 'CASE_CLOSED'
                  | 'CASE_WON'
                  | 'NEW'
                  | 'PENDING_CUSTOMER'
                  | 'PREARBITRATION'
                  | 'REPRESENTMENT'
                  | 'SUBMITTED'
                  | undefined
                transaction_tokens?: string[] | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                status?:
                  | 'ARBITRATION'
                  | 'CASE_CLOSED'
                  | 'CASE_WON'
                  | 'NEW'
                  | 'PENDING_CUSTOMER'
                  | 'PREARBITRATION'
                  | 'REPRESENTMENT'
                  | 'SUBMITTED'
                  | undefined
                transaction_tokens?: string[] | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                status?:
                  | 'ARBITRATION'
                  | 'CASE_CLOSED'
                  | 'CASE_WON'
                  | 'NEW'
                  | 'PENDING_CUSTOMER'
                  | 'PREARBITRATION'
                  | 'REPRESENTMENT'
                  | 'SUBMITTED'
                  | undefined
                transaction_tokens?: string[] | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                amount: number
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                transaction_token: string
              }
            }
            output: DisputeV1
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                amount: number
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                transaction_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                amount: number
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                transaction_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                amount: number
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                transaction_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                amount: number
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                transaction_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/disputes/:dispute_token': {
      $delete:
        | {
            input: { param: { dispute_token: string } }
            output: DisputeV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { dispute_token: string } }
            output: DisputeV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { dispute_token: string } } & {
              json: {
                amount?: number | undefined
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason?:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                  | undefined
              }
            }
            output: DisputeV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: {
                amount?: number | undefined
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason?:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: {
                amount?: number | undefined
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason?:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: {
                amount?: number | undefined
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason?:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: {
                amount?: number | undefined
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason?:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: {
                amount?: number | undefined
                customer_filed_date?: string | undefined
                customer_note?: string | undefined
                reason?:
                  | 'ATM_CASH_MISDISPENSE'
                  | 'CANCELLED'
                  | 'DUPLICATED'
                  | 'FRAUD_CARD_NOT_PRESENT'
                  | 'FRAUD_CARD_PRESENT'
                  | 'FRAUD_OTHER'
                  | 'GOODS_SERVICES_NOT_AS_DESCRIBED'
                  | 'GOODS_SERVICES_NOT_RECEIVED'
                  | 'INCORRECT_AMOUNT'
                  | 'MISSING_AUTH'
                  | 'OTHER'
                  | 'PROCESSING_ERROR'
                  | 'RECURRING_TRANSACTION_NOT_CANCELLED'
                  | 'REFUND_NOT_PROCESSED'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/disputes/:dispute_token/evidences': {
      $get:
        | {
            input: { param: { dispute_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: DisputeEvidence[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { dispute_token: string } } & {
              json: { filename?: string | undefined }
            }
            output: DisputeEvidence
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: { filename?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: { filename?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: { filename?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_token: string } } & {
              json: { filename?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/disputes/:dispute_token/evidences/:evidence_token': {
      $delete:
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: DisputeEvidence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: DisputeEvidence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { evidence_token: string; dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/embed/card': {
      $get:
        | {
            input: { query: { embed_request: string; hmac: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { embed_request: string; hmac: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { embed_request: string; hmac: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { embed_request: string; hmac: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { embed_request: string; hmac: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { embed_request: string; hmac: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/embed': {
      $get:
        | {
            input: {
              query: {
                session: string
                type: 'PAN' | 'CVV' | 'EXP_MONTH' | 'EXP_YEAR' | 'PIN_SETTING'
                styles?: string | undefined
                configuration?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                session: string
                type: 'PAN' | 'CVV' | 'EXP_MONTH' | 'EXP_YEAR' | 'PIN_SETTING'
                styles?: string | undefined
                configuration?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                session: string
                type: 'PAN' | 'CVV' | 'EXP_MONTH' | 'EXP_YEAR' | 'PIN_SETTING'
                styles?: string | undefined
                configuration?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                session: string
                type: 'PAN' | 'CVV' | 'EXP_MONTH' | 'EXP_YEAR' | 'PIN_SETTING'
                styles?: string | undefined
                configuration?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                session: string
                type: 'PAN' | 'CVV' | 'EXP_MONTH' | 'EXP_YEAR' | 'PIN_SETTING'
                styles?: string | undefined
                configuration?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/fraud/transactions/:transaction_token': {
      $get:
        | {
            input: { param: { transaction_token: string } }
            output: FraudReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { transaction_token: string } } & { json: FraudReportRequest }
            output: FraudReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_token: string } } & { json: FraudReportRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_token: string } } & { json: FraudReportRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_token: string } } & { json: FraudReportRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transaction_token: string } } & { json: FraudReportRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transaction_token: string } } & { json: FraudReportRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transactions/:transaction_token/enhanced_commercial_data': {
      $get:
        | {
            input: { param: { transaction_token: string } }
            output: EnhancedDataListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transactions/:transaction_token/expire_authorization': {
      $post:
        | {
            input: { param: { transaction_token: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transactions/:transaction_token/route': {
      $post:
        | {
            input: { param: { transaction_token: string } } & {
              json: { financial_account_token: string }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { transaction_token: string } } & {
              json: { financial_account_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_token: string } } & {
              json: { financial_account_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_token: string } } & {
              json: { financial_account_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transaction_token: string } } & {
              json: { financial_account_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transaction_token: string } } & {
              json: { financial_account_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transactions/events/:event_token/enhanced_commercial_data': {
      $get:
        | {
            input: { param: { event_token: string } }
            output: EnhancedData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/event_subscriptions': {
      $get:
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: EventSubscription[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: EventSubscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/event_subscriptions/:event_subscription_token': {
      $delete:
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { event_subscription_token: string } }
            output: EventSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { event_subscription_token: string } } & {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: EventSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: {
                description?: string | undefined
                disabled?: boolean | undefined
                event_types?: EventType[] | undefined
                url: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/event_subscriptions/:event_subscription_token/attempts': {
      $get:
        | {
            input: { param: { event_subscription_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: MessageAttempt[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/event_subscriptions/:event_subscription_token/recover': {
      $post:
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            } & { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/event_subscriptions/:event_subscription_token/replay_missing': {
      $post:
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              query: { begin?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/event_subscriptions/:event_subscription_token/secret': {
      $get:
        | {
            input: { param: { event_subscription_token: string } }
            output: { secret?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/event_subscriptions/:event_subscription_token/secret/rotate': {
      $post:
        | {
            input: { param: { event_subscription_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/events': {
      $get:
        | {
            input: {
              query: {
                event_types?: EventType[] | undefined
                with_content?: boolean | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: Event[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                event_types?: EventType[] | undefined
                with_content?: boolean | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                event_types?: EventType[] | undefined
                with_content?: boolean | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/events/:event_token': {
      $get:
        | {
            input: { param: { event_token: string } }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/events/:event_token/attempts': {
      $get:
        | {
            input: { param: { event_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: MessageAttempt[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_token: string } } & {
              query: {
                status?: 'FAILED' | 'PENDING' | 'SENDING' | 'SUCCESS' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/events/:event_token/event_subscriptions/:event_subscription_token/resend': {
      $post:
        | {
            input: { param: { event_subscription_token: string; event_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { event_subscription_token: string; event_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string; event_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string; event_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string; event_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string; event_token: string } } & {
              json: { [x: string]: unknown }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/blockchain_recipients': {
      $post:
        | {
            input: { json: BlockchainRecipientRequest }
            output: BlockchainRecipient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BlockchainRecipientRequest }
            output: BlockchainRecipient
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BlockchainRecipientRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BlockchainRecipientRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BlockchainRecipientRequest }
            output: CreateCryptoAddressErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: BlockchainRecipientRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/blockchain_recipients/:blockchain_recipient_token': {
      $get:
        | {
            input: { param: { blockchain_recipient_token: string } }
            output: BlockchainRecipient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blockchain_recipient_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { blockchain_recipient_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blockchain_recipient_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { blockchain_recipient_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts': {
      $get:
        | {
            input: {
              query: {
                account_token?: string | undefined
                account_types?: SearchableAccountTypes[] | undefined
                countries?: string[] | undefined
                owner_types?: OwnerType[] | undefined
                states?: AccountState[] | undefined
                verification_states?: VerificationState[] | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: BankAccountsApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                account_types?: SearchableAccountTypes[] | undefined
                countries?: string[] | undefined
                owner_types?: OwnerType[] | undefined
                states?: AccountState[] | undefined
                verification_states?: VerificationState[] | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                account_types?: SearchableAccountTypes[] | undefined
                countries?: string[] | undefined
                owner_types?: OwnerType[] | undefined
                states?: AccountState[] | undefined
                verification_states?: VerificationState[] | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                account_types?: SearchableAccountTypes[] | undefined
                countries?: string[] | undefined
                owner_types?: OwnerType[] | undefined
                states?: AccountState[] | undefined
                verification_states?: VerificationState[] | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              json:
                | BankVerifiedCreateBankAccountApiRequest
                | ExternallyVerifiedCreateBankAccountApiRequest
                | UnverifiedCreateBankAccountApiRequest
            }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json:
                | BankVerifiedCreateBankAccountApiRequest
                | ExternallyVerifiedCreateBankAccountApiRequest
                | UnverifiedCreateBankAccountApiRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json:
                | BankVerifiedCreateBankAccountApiRequest
                | ExternallyVerifiedCreateBankAccountApiRequest
                | UnverifiedCreateBankAccountApiRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json:
                | BankVerifiedCreateBankAccountApiRequest
                | ExternallyVerifiedCreateBankAccountApiRequest
                | UnverifiedCreateBankAccountApiRequest
            }
            output: CreateExternalBankAccountErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json:
                | BankVerifiedCreateBankAccountApiRequest
                | ExternallyVerifiedCreateBankAccountApiRequest
                | UnverifiedCreateBankAccountApiRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts/:external_bank_account_token': {
      $get:
        | {
            input: { param: { external_bank_account_token: string } }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: UpdateBankAccountApiRequest
            }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: UpdateBankAccountApiRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: UpdateBankAccountApiRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: UpdateBankAccountApiRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: UpdateBankAccountApiRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts/:external_bank_account_token/micro_deposits': {
      $post:
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: MicroDepositVerificationRequest
            }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: MicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: MicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: MicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: MicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts/:external_bank_account_token/pause': {
      $post:
        | {
            input: { param: { external_bank_account_token: string } }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts/:external_bank_account_token/retry_micro_deposits': {
      $post:
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryMicroDepositVerificationRequest
            }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryMicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryMicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryMicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryMicroDepositVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts/:external_bank_account_token/retry_prenote': {
      $post:
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryPrenoteVerificationRequest
            }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryPrenoteVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryPrenoteVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryPrenoteVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: RetryPrenoteVerificationRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts/:external_bank_account_token/set_verification_method': {
      $post:
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: SetVerificationMethodRequest
            }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: SetVerificationMethodRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: SetVerificationMethodRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: SetVerificationMethodRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } } & {
              json: SetVerificationMethodRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_bank_accounts/:external_bank_account_token/unpause': {
      $post:
        | {
            input: { param: { external_bank_account_token: string } }
            output: BankAccountApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_bank_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/credit_products/:credit_product_token/extended_credit': {
      $get:
        | {
            input: { param: { credit_product_token: string } }
            output: ExtendedCredit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credit_product_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { credit_product_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { credit_product_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { credit_product_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/credit_products/:credit_product_token/prime_rates': {
      $get:
        | {
            input: { param: { credit_product_token: string } } & {
              query: { starting_after?: string | undefined; ending_before?: string | undefined }
            }
            output: PrimeRatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credit_product_token: string } } & {
              query: { starting_after?: string | undefined; ending_before?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { credit_product_token: string } } & {
              query: { starting_after?: string | undefined; ending_before?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { credit_product_token: string } } & {
              query: { starting_after?: string | undefined; ending_before?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { credit_product_token: string } } & {
              query: { starting_after?: string | undefined; ending_before?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { credit_product_token: string } } & { json: InterestRate }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { credit_product_token: string } } & { json: InterestRate }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { credit_product_token: string } } & { json: InterestRate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { credit_product_token: string } } & { json: InterestRate }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { credit_product_token: string } } & { json: InterestRate }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts': {
      $get:
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | 'EARLY_DIRECT_DEPOSIT_FLOAT'
                  | undefined
              }
            }
            output: FinancialAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | 'EARLY_DIRECT_DEPOSIT_FLOAT'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | 'EARLY_DIRECT_DEPOSIT_FLOAT'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | 'EARLY_DIRECT_DEPOSIT_FLOAT'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | 'EARLY_DIRECT_DEPOSIT_FLOAT'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                business_account_token?: string | undefined
                type?:
                  | 'ISSUING'
                  | 'OPERATING'
                  | 'RESERVE'
                  | 'SECURITY'
                  | 'EARLY_DIRECT_DEPOSIT_FLOAT'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateFinancialAccountRequest
            }
            output: FinancialAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token': {
      $get:
        | {
            input: { param: { financial_account_token: string } }
            output: FinancialAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountRequest
            }
            output: FinancialAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/balances': {
      $get:
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: { data: FinancialAccountBalance[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                balance_date?: string | undefined
                last_transaction_event_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/open_to_buy': {
      $get:
        | {
            input: { param: { financial_account_token: string } }
            output: OpenToBuy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/credit_configuration': {
      $get:
        | {
            input: { param: { financial_account_token: string } }
            output: FinancialAccountCreditConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { financial_account_token: string } } & {
              json: FinancialAccountCreditConfigRequest
            }
            output: FinancialAccountCreditConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: FinancialAccountCreditConfigRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: FinancialAccountCreditConfigRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: FinancialAccountCreditConfigRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: FinancialAccountCreditConfigRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: FinancialAccountCreditConfigRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: FinancialAccountCreditConfigRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/financial_transactions': {
      $get:
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                category?: 'ACH' | 'CARD' | 'INTERNAL' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: FinancialAccountTransaction[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                category?: 'ACH' | 'CARD' | 'INTERNAL' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                category?: 'ACH' | 'CARD' | 'INTERNAL' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                category?: 'ACH' | 'CARD' | 'INTERNAL' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                category?: 'ACH' | 'CARD' | 'INTERNAL' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                category?: 'ACH' | 'CARD' | 'INTERNAL' | 'TRANSFER' | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/financial_transactions/:financial_transaction_token': {
      $get:
        | {
            input: {
              param: { financial_account_token: string; financial_transaction_token: string }
            }
            output: FinancialAccountTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { financial_account_token: string; financial_transaction_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { financial_account_token: string; financial_transaction_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { financial_account_token: string; financial_transaction_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { financial_account_token: string; financial_transaction_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { financial_account_token: string; financial_transaction_token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/register_account_number': {
      $post:
        | {
            input: { param: { financial_account_token: string } } & {
              json: RegisterAccountNumberRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: RegisterAccountNumberRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: RegisterAccountNumberRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: RegisterAccountNumberRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: RegisterAccountNumberRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: RegisterAccountNumberRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/holds': {
      $get:
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                status?: HoldStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: HoldsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                status?: HoldStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                status?: HoldStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                status?: HoldStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                status?: HoldStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { financial_account_token: string } } & { json: CreateHoldRequest }
            output: HoldTransaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { financial_account_token: string } } & { json: CreateHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & { json: CreateHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & { json: CreateHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & { json: CreateHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/holds/:hold_token': {
      $get:
        | {
            input: { param: { hold_token: string } }
            output: HoldTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hold_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hold_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hold_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hold_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/holds/:hold_token/void': {
      $post:
        | {
            input: { param: { hold_token: string } } & { json: VoidHoldRequest }
            output: HoldTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { hold_token: string } } & { json: VoidHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { hold_token: string } } & { json: VoidHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { hold_token: string } } & { json: VoidHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { hold_token: string } } & { json: VoidHoldRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/statements': {
      $get:
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                include_initial_statements?: boolean | undefined
              }
            }
            output: StatementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                include_initial_statements?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                include_initial_statements?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                include_initial_statements?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                include_initial_statements?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                include_initial_statements?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token': {
      $get:
        | {
            input: { param: { financial_account_token: string; statement_token: string } }
            output: StatementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/statements/:statement_token/line_items': {
      $get:
        | {
            input: { param: { financial_account_token: string; statement_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: StatementLineItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string; statement_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/loan_tapes': {
      $get:
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: LoanTapesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/loan_tapes/:loan_tape_token': {
      $get:
        | {
            input: { param: { financial_account_token: string; loan_tape_token: string } }
            output: LoanTapeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string; loan_tape_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string; loan_tape_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string; loan_tape_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string; loan_tape_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string; loan_tape_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/loan_tape_configuration': {
      $get:
        | {
            input: { param: { financial_account_token: string } }
            output: LoanTapeConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/installment_plans': {
      $get:
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: InstallmentPlansResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token': {
      $get:
        | {
            input: { param: { financial_account_token: string; installment_plan_token: string } }
            output: InstallmentPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string; installment_plan_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string; installment_plan_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string; installment_plan_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string; installment_plan_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string; installment_plan_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements': {
      $get:
        | {
            input: {
              param: { financial_account_token: string; installment_plan_token: string }
            } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: InstallmentPlanStatementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { financial_account_token: string; installment_plan_token: string }
            } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { financial_account_token: string; installment_plan_token: string }
            } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { financial_account_token: string; installment_plan_token: string }
            } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { financial_account_token: string; installment_plan_token: string }
            } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { financial_account_token: string; installment_plan_token: string }
            } & {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                state?: InstallmentPlanState | ({ [x: string]: unknown } | null) | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/installment_plans/:installment_plan_token/statements/:statement_token': {
      $get:
        | {
            input: {
              param: {
                financial_account_token: string
                installment_plan_token: string
                statement_token: string
              }
            }
            output: InstallmentPlanStatementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                financial_account_token: string
                installment_plan_token: string
                statement_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                financial_account_token: string
                installment_plan_token: string
                statement_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                financial_account_token: string
                installment_plan_token: string
                statement_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                financial_account_token: string
                installment_plan_token: string
                statement_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                financial_account_token: string
                installment_plan_token: string
                statement_token: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule': {
      $get:
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                after_date?: string | undefined
                before_date?: string | undefined
                for_date?: string | undefined
              }
            }
            output: TierScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                after_date?: string | undefined
                before_date?: string | undefined
                for_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                after_date?: string | undefined
                before_date?: string | undefined
                for_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                after_date?: string | undefined
                before_date?: string | undefined
                for_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                after_date?: string | undefined
                before_date?: string | undefined
                for_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & {
              query: {
                after_date?: string | undefined
                before_date?: string | undefined
                for_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { financial_account_token: string } } & { json: TierScheduleEntry }
            output: TierScheduleEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { financial_account_token: string } } & { json: TierScheduleEntry }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & { json: TierScheduleEntry }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & { json: TierScheduleEntry }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & { json: TierScheduleEntry }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { financial_account_token: string } } & { json: TierScheduleEntry }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/interest_tier_schedule/:effective_date': {
      $delete:
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: TierScheduleEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { effective_date: string; financial_account_token: string } } & {
              json: UpdateTierScheduleEntryRequest
            }
            output: TierScheduleEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } } & {
              json: UpdateTierScheduleEntryRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } } & {
              json: UpdateTierScheduleEntryRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } } & {
              json: UpdateTierScheduleEntryRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } } & {
              json: UpdateTierScheduleEntryRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { effective_date: string; financial_account_token: string } } & {
              json: UpdateTierScheduleEntryRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/financial_accounts/:financial_account_token/update_status': {
      $post:
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountStatusRequest
            }
            output: FinancialAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountStatusRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountStatusRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountStatusRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { financial_account_token: string } } & {
              json: UpdateFinancialAccountStatusRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/account_activity': {
      $get:
        | {
            input: {
              query: {
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'REVERSED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                category?: TransactionCategory | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: BaseTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'REVERSED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                category?: TransactionCategory | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'REVERSED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                category?: TransactionCategory | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'REVERSED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                category?: TransactionCategory | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                status?:
                  | 'DECLINED'
                  | 'EXPIRED'
                  | 'PENDING'
                  | 'RETURNED'
                  | 'REVERSED'
                  | 'SETTLED'
                  | 'VOIDED'
                  | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                category?: TransactionCategory | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/account_activity/:transaction_token': {
      $get:
        | {
            input: { param: { transaction_token: string } }
            output: BaseTransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/payments': {
      $get:
        | {
            input: {
              query: {
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'PENDING' | 'RETURNED' | 'REVERSED' | 'SETTLED' | undefined
                category?: 'ACH' | 'STABLECOIN' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: PaymentTransaction[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'PENDING' | 'RETURNED' | 'REVERSED' | 'SETTLED' | undefined
                category?: 'ACH' | 'STABLECOIN' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'PENDING' | 'RETURNED' | 'REVERSED' | 'SETTLED' | undefined
                category?: 'ACH' | 'STABLECOIN' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'PENDING' | 'RETURNED' | 'REVERSED' | 'SETTLED' | undefined
                category?: 'ACH' | 'STABLECOIN' | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreatePaymentRequest }
            output: PostPaymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CreatePaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/payments/stablecoin': {
      $post:
        | {
            input: { json: CreateStablecoinPaymentRequest }
            output: PostPaymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CreateStablecoinPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateStablecoinPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateStablecoinPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateStablecoinPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/payments/:payment_token': {
      $get:
        | {
            input: { param: { payment_token: string } }
            output: PaymentTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/payments/:payment_token/retry': {
      $post:
        | {
            input: { param: { payment_token: string } } & { json: RetryPaymentRequest }
            output: PostPaymentResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { payment_token: string } } & { json: RetryPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_token: string } } & { json: RetryPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_token: string } } & { json: RetryPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_token: string } } & { json: RetryPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/payments/:payment_token/return': {
      $post:
        | {
            input: { param: { payment_token: string } } & { json: PaymentReturnRequest }
            output: PaymentTransaction
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { payment_token: string } } & { json: PaymentReturnRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_token: string } } & { json: PaymentReturnRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_token: string } } & { json: PaymentReturnRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_token: string } } & { json: PaymentReturnRequest }
            output: { message?: string | undefined }
            outputFormat: 'json'
            status: 412
          }
        | {
            input: { param: { payment_token: string } } & { json: PaymentReturnRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/reports/settlement/details/:report_date': {
      $get:
        | {
            input: { param: { report_date: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: SettlementDetail[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_date: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { report_date: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { report_date: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { report_date: string } } & {
              query: {
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/reports/settlement/summary/:report_date': {
      $get:
        | {
            input: { param: { report_date: string } }
            output: SettlementReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_date: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { report_date: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { report_date: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { report_date: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { report_date: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/reports/settlement/network_totals': {
      $get:
        | {
            input: {
              query: {
                report_date?: string | undefined
                report_date_begin?: string | undefined
                report_date_end?: string | undefined
                network?:
                  | 'ALLPOINT'
                  | 'AMEX'
                  | 'VISA'
                  | 'MASTERCARD'
                  | 'MAESTRO'
                  | 'INTERLINK'
                  | undefined
                institution_id?: string | undefined
                settlement_institution_id?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NetworkTotalsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                report_date?: string | undefined
                report_date_begin?: string | undefined
                report_date_end?: string | undefined
                network?:
                  | 'ALLPOINT'
                  | 'AMEX'
                  | 'VISA'
                  | 'MASTERCARD'
                  | 'MAESTRO'
                  | 'INTERLINK'
                  | undefined
                institution_id?: string | undefined
                settlement_institution_id?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                report_date?: string | undefined
                report_date_begin?: string | undefined
                report_date_end?: string | undefined
                network?:
                  | 'ALLPOINT'
                  | 'AMEX'
                  | 'VISA'
                  | 'MASTERCARD'
                  | 'MAESTRO'
                  | 'INTERLINK'
                  | undefined
                institution_id?: string | undefined
                settlement_institution_id?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                report_date?: string | undefined
                report_date_begin?: string | undefined
                report_date_end?: string | undefined
                network?:
                  | 'ALLPOINT'
                  | 'AMEX'
                  | 'VISA'
                  | 'MASTERCARD'
                  | 'MAESTRO'
                  | 'INTERLINK'
                  | undefined
                institution_id?: string | undefined
                settlement_institution_id?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                report_date?: string | undefined
                report_date_begin?: string | undefined
                report_date_end?: string | undefined
                network?:
                  | 'ALLPOINT'
                  | 'AMEX'
                  | 'VISA'
                  | 'MASTERCARD'
                  | 'MAESTRO'
                  | 'INTERLINK'
                  | undefined
                institution_id?: string | undefined
                settlement_institution_id?: string | undefined
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/reports/settlement/network_totals/:token': {
      $get:
        | {
            input: { param: { token: string } }
            output: NetworkTotal
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { token: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { token: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { token: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { token: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { param: { token: string } }; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/responder_endpoints': {
      $delete:
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: { enrolled?: boolean | undefined; url?: (string | null) | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                type: 'AUTH_STREAM_ACCESS' | 'THREE_DS_DECISIONING' | 'TOKENIZATION_DECISIONING'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                type?:
                  | 'AUTH_STREAM_ACCESS'
                  | 'THREE_DS_DECISIONING'
                  | 'TOKENIZATION_DECISIONING'
                  | undefined
                url?: string | undefined
              }
            }
            output: { enrolled?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type?:
                  | 'AUTH_STREAM_ACCESS'
                  | 'THREE_DS_DECISIONING'
                  | 'TOKENIZATION_DECISIONING'
                  | undefined
                url?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type?:
                  | 'AUTH_STREAM_ACCESS'
                  | 'THREE_DS_DECISIONING'
                  | 'TOKENIZATION_DECISIONING'
                  | undefined
                url?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                type?:
                  | 'AUTH_STREAM_ACCESS'
                  | 'THREE_DS_DECISIONING'
                  | 'TOKENIZATION_DECISIONING'
                  | undefined
                url?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                type?:
                  | 'AUTH_STREAM_ACCESS'
                  | 'THREE_DS_DECISIONING'
                  | 'TOKENIZATION_DECISIONING'
                  | undefined
                url?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                type?:
                  | 'AUTH_STREAM_ACCESS'
                  | 'THREE_DS_DECISIONING'
                  | 'TOKENIZATION_DECISIONING'
                  | undefined
                url?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/ip_ranges': {
      $get:
        | {
            input: {}
            output: { responders: string[]; updated: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/simulate/authorization_advice': {
      $post:
        | {
            input: { json: { amount: number; token: string } }
            output: { debugging_request_id?: string | undefined; token?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { amount: number; token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { amount: number; token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { amount: number; token: string } }
            output: { debugging_request_id: string; message: string; token?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: { amount: number; token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/authorize': {
      $post:
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                merchant_amount?: number | undefined
                merchant_currency?: string | undefined
                pan: string
                partial_approval_capable?: boolean | undefined
                pin?: string | undefined
                settlement_currency?: string | undefined
                status?:
                  | 'AUTHORIZATION'
                  | 'BALANCE_INQUIRY'
                  | 'CREDIT_AUTHORIZATION'
                  | 'FINANCIAL_AUTHORIZATION'
                  | 'FINANCIAL_CREDIT_AUTHORIZATION'
                  | undefined
              }
            }
            output: { debugging_request_id?: string | undefined; token?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                merchant_amount?: number | undefined
                merchant_currency?: string | undefined
                pan: string
                partial_approval_capable?: boolean | undefined
                pin?: string | undefined
                settlement_currency?: string | undefined
                status?:
                  | 'AUTHORIZATION'
                  | 'BALANCE_INQUIRY'
                  | 'CREDIT_AUTHORIZATION'
                  | 'FINANCIAL_AUTHORIZATION'
                  | 'FINANCIAL_CREDIT_AUTHORIZATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                merchant_amount?: number | undefined
                merchant_currency?: string | undefined
                pan: string
                partial_approval_capable?: boolean | undefined
                pin?: string | undefined
                settlement_currency?: string | undefined
                status?:
                  | 'AUTHORIZATION'
                  | 'BALANCE_INQUIRY'
                  | 'CREDIT_AUTHORIZATION'
                  | 'FINANCIAL_AUTHORIZATION'
                  | 'FINANCIAL_CREDIT_AUTHORIZATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                merchant_amount?: number | undefined
                merchant_currency?: string | undefined
                pan: string
                partial_approval_capable?: boolean | undefined
                pin?: string | undefined
                settlement_currency?: string | undefined
                status?:
                  | 'AUTHORIZATION'
                  | 'BALANCE_INQUIRY'
                  | 'CREDIT_AUTHORIZATION'
                  | 'FINANCIAL_AUTHORIZATION'
                  | 'FINANCIAL_CREDIT_AUTHORIZATION'
                  | undefined
              }
            }
            output: { debugging_request_id: string; message: string; token?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                merchant_amount?: number | undefined
                merchant_currency?: string | undefined
                pan: string
                partial_approval_capable?: boolean | undefined
                pin?: string | undefined
                settlement_currency?: string | undefined
                status?:
                  | 'AUTHORIZATION'
                  | 'BALANCE_INQUIRY'
                  | 'CREDIT_AUTHORIZATION'
                  | 'FINANCIAL_AUTHORIZATION'
                  | 'FINANCIAL_CREDIT_AUTHORIZATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/clearing': {
      $post:
        | {
            input: { json: { amount?: number | undefined; token: string } }
            output: { debugging_request_id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { amount?: number | undefined; token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { amount?: number | undefined; token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { amount?: number | undefined; token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { amount?: number | undefined; token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: { amount?: number | undefined; token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/credit_authorization_advice': {
      $post:
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                pan: string
              }
            }
            output: { debugging_request_id?: string | undefined; token?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                pan: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                pan: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                pan: string
              }
            }
            output: { debugging_request_id: string; message: string; token?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                mcc?: string | undefined
                merchant_acceptor_id?: string | undefined
                merchant_acceptor_city?: string | undefined
                merchant_acceptor_state?: string | undefined
                merchant_acceptor_country?: string | undefined
                pan: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/event_subscriptions/:event_subscription_token/send_example': {
      $post:
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { event_type?: EventType | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { event_type?: EventType | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { event_type?: EventType | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { event_type?: EventType | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { event_type?: EventType | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_subscription_token: string } } & {
              json: { event_type?: EventType | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/payments/receipt': {
      $post:
        | {
            input: { json: SimulateReceiptRequest }
            output: SimulatePaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateReceiptRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimulateReceiptRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SimulateReceiptRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SimulateReceiptRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/payments/release': {
      $post:
        | {
            input: { json: SimulateOriginationReleaseRequest }
            output: SimulatePaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateOriginationReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimulateOriginationReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SimulateOriginationReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SimulateOriginationReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/payments/return': {
      $post:
        | {
            input: { json: SimulateOriginationReturnRequest }
            output: SimulatePaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateOriginationReturnRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimulateOriginationReturnRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SimulateOriginationReturnRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SimulateOriginationReturnRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/payments/:payment_token/action': {
      $post:
        | {
            input: { param: { payment_token: string } } & { json: SimulateActionRequest }
            output: SimulatePaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_token: string } } & { json: SimulateActionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_token: string } } & { json: SimulateActionRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_token: string } } & { json: SimulateActionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_token: string } } & { json: SimulateActionRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/return': {
      $post:
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                pan: string
                settlement_currency?: string | undefined
              }
            }
            output: { debugging_request_id?: string | undefined; token?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                pan: string
                settlement_currency?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                pan: string
                settlement_currency?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                pan: string
                settlement_currency?: string | undefined
              }
            }
            output: { debugging_request_id: string; message: string; token?: string | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                amount: number
                billing_currency?: string | undefined
                descriptor: string
                pan: string
                settlement_currency?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/return_reversal': {
      $post:
        | {
            input: { json: { token: string } }
            output: { debugging_request_id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { token: string } }; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/simulate/tokenizations': {
      $post:
        | {
            input: {
              json: {
                account_score?: number | undefined
                cvv: string
                device_score?: number | undefined
                entity?: string | undefined
                expiration_date: string
                pan: string
                tokenization_source: 'APPLE_PAY' | 'GOOGLE' | 'SAMSUNG_PAY' | 'MERCHANT'
                wallet_recommended_decision?:
                  | 'APPROVED'
                  | 'DECLINED'
                  | 'REQUIRE_ADDITIONAL_AUTHENTICATION'
                  | undefined
              }
            }
            output: Tokenization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                account_score?: number | undefined
                cvv: string
                device_score?: number | undefined
                entity?: string | undefined
                expiration_date: string
                pan: string
                tokenization_source: 'APPLE_PAY' | 'GOOGLE' | 'SAMSUNG_PAY' | 'MERCHANT'
                wallet_recommended_decision?:
                  | 'APPROVED'
                  | 'DECLINED'
                  | 'REQUIRE_ADDITIONAL_AUTHENTICATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                account_score?: number | undefined
                cvv: string
                device_score?: number | undefined
                entity?: string | undefined
                expiration_date: string
                pan: string
                tokenization_source: 'APPLE_PAY' | 'GOOGLE' | 'SAMSUNG_PAY' | 'MERCHANT'
                wallet_recommended_decision?:
                  | 'APPROVED'
                  | 'DECLINED'
                  | 'REQUIRE_ADDITIONAL_AUTHENTICATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                account_score?: number | undefined
                cvv: string
                device_score?: number | undefined
                entity?: string | undefined
                expiration_date: string
                pan: string
                tokenization_source: 'APPLE_PAY' | 'GOOGLE' | 'SAMSUNG_PAY' | 'MERCHANT'
                wallet_recommended_decision?:
                  | 'APPROVED'
                  | 'DECLINED'
                  | 'REQUIRE_ADDITIONAL_AUTHENTICATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                account_score?: number | undefined
                cvv: string
                device_score?: number | undefined
                entity?: string | undefined
                expiration_date: string
                pan: string
                tokenization_source: 'APPLE_PAY' | 'GOOGLE' | 'SAMSUNG_PAY' | 'MERCHANT'
                wallet_recommended_decision?:
                  | 'APPROVED'
                  | 'DECLINED'
                  | 'REQUIRE_ADDITIONAL_AUTHENTICATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                account_score?: number | undefined
                cvv: string
                device_score?: number | undefined
                entity?: string | undefined
                expiration_date: string
                pan: string
                tokenization_source: 'APPLE_PAY' | 'GOOGLE' | 'SAMSUNG_PAY' | 'MERCHANT'
                wallet_recommended_decision?:
                  | 'APPROVED'
                  | 'DECLINED'
                  | 'REQUIRE_ADDITIONAL_AUTHENTICATION'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/void': {
      $post:
        | {
            input: {
              json: {
                amount?: number | undefined
                token: string
                type?: 'AUTHORIZATION_EXPIRY' | 'AUTHORIZATION_REVERSAL' | undefined
              }
            }
            output: { debugging_request_id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                amount?: number | undefined
                token: string
                type?: 'AUTHORIZATION_EXPIRY' | 'AUTHORIZATION_REVERSAL' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                amount?: number | undefined
                token: string
                type?: 'AUTHORIZATION_EXPIRY' | 'AUTHORIZATION_REVERSAL' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                amount?: number | undefined
                token: string
                type?: 'AUTHORIZATION_EXPIRY' | 'AUTHORIZATION_REVERSAL' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                amount?: number | undefined
                token: string
                type?: 'AUTHORIZATION_EXPIRY' | 'AUTHORIZATION_REVERSAL' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/account_holders/enrollment_review': {
      $post:
        | {
            input: { json: SimulateEnrollmentReviewRequest }
            output: AccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateEnrollmentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimulateEnrollmentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SimulateEnrollmentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SimulateEnrollmentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: SimulateEnrollmentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/simulate/account_holders/enrollment_document_review': {
      $post:
        | {
            input: { json: SimulateEnrollmentDocumentReviewRequest }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SimulateEnrollmentDocumentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimulateEnrollmentDocumentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SimulateEnrollmentDocumentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SimulateEnrollmentDocumentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: SimulateEnrollmentDocumentReviewRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/status': {
      $get:
        | { input: {}; output: { message?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/three_ds_authentication/simulate': {
      $post:
        | {
            input: { json: SimulateAuthenticationRequest }
            output: { token?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SimulateAuthenticationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SimulateAuthenticationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SimulateAuthenticationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SimulateAuthenticationRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/three_ds_decisioning/simulate/enter_otp': {
      $post:
        | {
            input: { json: { token: string; otp: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { token: string; otp: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token: string; otp: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { token: string; otp: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { token: string; otp: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: { token: string; otp: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/three_ds_authentication/:three_ds_authentication_token': {
      $get:
        | {
            input: { param: { three_ds_authentication_token: string } }
            output: Authentication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { three_ds_authentication_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { three_ds_authentication_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { three_ds_authentication_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { three_ds_authentication_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/three_ds_decisioning/secret': {
      $get:
        | { input: {}; output: { secret?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/three_ds_decisioning/secret/rotate': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/three_ds_decisioning/challenge_response': {
      $post:
        | { input: { json: ChallengeResponse }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: ChallengeResponse }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ChallengeResponse }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { json: ChallengeResponse }
            output: ChallengeResponseUnprocessable
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: ChallengeResponse }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/tokenization_decisioning/secret': {
      $get:
        | { input: {}; output: { secret?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/tokenization_decisioning/secret/rotate': {
      $post:
        | { input: {}; output: { secret?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/v1/cards/:card_token/tokenizations': {
      $post:
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Tokenization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { card_token: string } } & { json: CreateTokenizationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/select_tfa_method': {
      $post:
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: SelectTfaMethodResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SelectTfaMethodRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/submit_tfa': {
      $post:
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: SubmitTfaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tokenization_token: string } } & { json: SubmitTfaRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/payment_credentials': {
      $post:
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: CreatePaymentCredentialsResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: CreatePaymentCredentialsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/tokenizations': {
      $get:
        | {
            input: {
              query: {
                account_token?: string | undefined
                begin?: string | undefined
                card_token?: string | undefined
                end?: string | undefined
                tokenization_channel?:
                  | 'DIGITAL_WALLET'
                  | 'MERCHANT'
                  | 'AGENT_PAY'
                  | 'ALL'
                  | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data?: Tokenization[] | undefined; has_more?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                begin?: string | undefined
                card_token?: string | undefined
                end?: string | undefined
                tokenization_channel?:
                  | 'DIGITAL_WALLET'
                  | 'MERCHANT'
                  | 'AGENT_PAY'
                  | 'ALL'
                  | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                begin?: string | undefined
                card_token?: string | undefined
                end?: string | undefined
                tokenization_channel?:
                  | 'DIGITAL_WALLET'
                  | 'MERCHANT'
                  | 'AGENT_PAY'
                  | 'ALL'
                  | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                begin?: string | undefined
                card_token?: string | undefined
                end?: string | undefined
                tokenization_channel?:
                  | 'DIGITAL_WALLET'
                  | 'MERCHANT'
                  | 'AGENT_PAY'
                  | 'ALL'
                  | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token': {
      $get:
        | {
            input: { param: { tokenization_token: string } }
            output: Tokenization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/pause': {
      $post:
        | {
            input: { param: { tokenization_token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/unpause': {
      $post:
        | {
            input: { param: { tokenization_token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/deactivate': {
      $post:
        | {
            input: { param: { tokenization_token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/activate': {
      $post:
        | {
            input: { param: { tokenization_token: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/resend_activation_code': {
      $post:
        | {
            input: { param: { tokenization_token: string } } & {
              json: {
                activation_method_type?:
                  | 'EMAIL_TO_CARDHOLDER_ADDRESS'
                  | 'TEXT_TO_CARDHOLDER_NUMBER'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: {
                activation_method_type?:
                  | 'EMAIL_TO_CARDHOLDER_ADDRESS'
                  | 'TEXT_TO_CARDHOLDER_NUMBER'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: {
                activation_method_type?:
                  | 'EMAIL_TO_CARDHOLDER_ADDRESS'
                  | 'TEXT_TO_CARDHOLDER_NUMBER'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: {
                activation_method_type?:
                  | 'EMAIL_TO_CARDHOLDER_ADDRESS'
                  | 'TEXT_TO_CARDHOLDER_NUMBER'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: {
                activation_method_type?:
                  | 'EMAIL_TO_CARDHOLDER_ADDRESS'
                  | 'TEXT_TO_CARDHOLDER_NUMBER'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: {
                activation_method_type?:
                  | 'EMAIL_TO_CARDHOLDER_ADDRESS'
                  | 'TEXT_TO_CARDHOLDER_NUMBER'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/tokenizations/:tokenization_token/update_digital_card_art': {
      $post:
        | {
            input: { param: { tokenization_token: string } } & {
              json: { digital_card_art_token?: string | undefined }
            }
            output: Tokenization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: { digital_card_art_token?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: { digital_card_art_token?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: { digital_card_art_token?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: { digital_card_art_token?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { tokenization_token: string } } & {
              json: { digital_card_art_token?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transactions': {
      $get:
        | {
            input: {
              query: {
                account_token?: string | undefined
                card_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: CardTransactionStatusFilter | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: ListTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                card_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: CardTransactionStatusFilter | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                card_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: CardTransactionStatusFilter | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                card_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: CardTransactionStatusFilter | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                account_token?: string | undefined
                card_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: CardTransactionStatusFilter | undefined
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transactions/:transaction_token': {
      $get:
        | {
            input: { param: { transaction_token: string } }
            output: CardTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transaction_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transaction_monitoring/cases': {
      $get:
        | {
            input: {
              query: {
                queue_token?: string | undefined
                status?: CaseStatus | undefined
                assignee?: string | undefined
                rule_token?: string | undefined
                transaction_token?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
                entity_token?: string | undefined
                sort_by?: CaseSortBy | undefined
                begin?: string | undefined
                end?: string | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: { data: MonitoringCase[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                queue_token?: string | undefined
                status?: CaseStatus | undefined
                assignee?: string | undefined
                rule_token?: string | undefined
                transaction_token?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
                entity_token?: string | undefined
                sort_by?: CaseSortBy | undefined
                begin?: string | undefined
                end?: string | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token': {
      $get:
        | {
            input: { param: { case_token: string } }
            output: MonitoringCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { case_token: string } } & { json: UpdateCaseRequest }
            output: MonitoringCase
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string } } & { json: UpdateCaseRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { case_token: string } } & { json: UpdateCaseRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token/activity': {
      $get:
        | {
            input: { param: { case_token: string } } & {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: { data: CaseActivity[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string } } & {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token/transactions': {
      $get:
        | {
            input: { param: { case_token: string } } & {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: { data: CaseTransaction[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string } } & {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token/cards': {
      $get:
        | {
            input: { param: { case_token: string } }
            output: CaseCard[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token/comments': {
      $post:
        | {
            input: { param: { case_token: string } } & { json: AddCommentRequest }
            output: CaseActivity
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { case_token: string } } & { json: AddCommentRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { case_token: string } } & { json: AddCommentRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token/comments/:comment_token': {
      $patch:
        | {
            input: { param: { case_token: string; comment_token: string } } & {
              json: EditCommentRequest
            }
            output: CaseActivity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string; comment_token: string } } & {
              json: EditCommentRequest
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { case_token: string; comment_token: string } } & {
              json: EditCommentRequest
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { case_token: string; comment_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { case_token: string; comment_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token/files': {
      $post:
        | {
            input: { param: { case_token: string } } & { json: CreateFileRequest }
            output: File2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { case_token: string } } & { json: CreateFileRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { case_token: string } } & { json: CreateFileRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { case_token: string } } & {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: { data: File2[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string } } & {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/cases/:case_token/files/:file_token': {
      $get:
        | {
            input: { param: { case_token: string; file_token: string } }
            output: File2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { case_token: string; file_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { case_token: string; file_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { case_token: string; file_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transaction_monitoring/queues': {
      $post:
        | { input: { json: CreateQueueRequest }; output: Queue; outputFormat: 'json'; status: 201 }
        | { input: { json: CreateQueueRequest }; output: Error2; outputFormat: 'json'; status: 400 }
      $get:
        | {
            input: {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: { data: Queue[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                starting_after?: string | undefined
                ending_before?: string | undefined
                page_size?: number | undefined
              }
            }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/transaction_monitoring/queues/:queue_token': {
      $get:
        | {
            input: { param: { queue_token: string } }
            output: Queue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { queue_token: string } } & { json: UpdateQueueRequest }
            output: Queue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue_token: string } } & { json: UpdateQueueRequest }
            output: Error2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queue_token: string } } & { json: UpdateQueueRequest }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { queue_token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { queue_token: string } }
            output: Error2
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/transfer': {
      $post:
        | {
            input: {
              json: {
                amount: number
                from: string
                memo?: string | undefined
                to: string
                token?: string | undefined
              }
            }
            output: Transfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                amount: number
                from: string
                memo?: string | undefined
                to: string
                token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                amount: number
                from: string
                memo?: string | undefined
                to: string
                token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                amount: number
                from: string
                memo?: string | undefined
                to: string
                token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                amount: number
                from: string
                memo?: string | undefined
                to: string
                token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/transfer_limits': {
      $get:
        | {
            input: { query: { date?: string | undefined } }
            output: TransferLimitsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { date?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { date?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { date?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { date?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/book_transfers': {
      $get:
        | {
            input: {
              query: {
                category?: BookTransferCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'SETTLED' | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: { data: BookTransferTransaction[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: BookTransferCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'SETTLED' | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                category?: BookTransferCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'SETTLED' | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                category?: BookTransferCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'SETTLED' | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                category?: BookTransferCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                account_token?: string | undefined
                result?: 'APPROVED' | 'DECLINED' | undefined
                status?: 'DECLINED' | 'SETTLED' | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateBookTransferRequest }
            output: BookTransferTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/book_transfers/:book_transfer_token': {
      $get:
        | {
            input: { param: { book_transfer_token: string } }
            output: BookTransferTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { book_transfer_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { book_transfer_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { book_transfer_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { book_transfer_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/book_transfers/:book_transfer_token/retry': {
      $post:
        | {
            input: { param: { book_transfer_token: string } } & { json: RetryBookTransferRequest }
            output: BookTransferTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { book_transfer_token: string } } & { json: RetryBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { book_transfer_token: string } } & { json: RetryBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { book_transfer_token: string } } & { json: RetryBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { book_transfer_token: string } } & { json: RetryBookTransferRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/book_transfers/:book_transfer_token/reverse': {
      $post:
        | {
            input: { param: { book_transfer_token: string } } & {
              json: { memo?: string | undefined }
            }
            output: BookTransferTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { book_transfer_token: string } } & {
              json: { memo?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { book_transfer_token: string } } & {
              json: { memo?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { book_transfer_token: string } } & {
              json: { memo?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { book_transfer_token: string } } & {
              json: { memo?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_payments': {
      $get:
        | {
            input: {
              query: {
                category?: ExternalPaymentCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                result?: TransactionResult | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: ExternalPaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: ExternalPaymentCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                result?: TransactionResult | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                category?: ExternalPaymentCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                result?: TransactionResult | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                category?: ExternalPaymentCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                result?: TransactionResult | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateExternalPaymentRequest }
            output: ExternalPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateExternalPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateExternalPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateExternalPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateExternalPaymentRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_payments/:external_payment_token': {
      $get:
        | {
            input: { param: { external_payment_token: string } }
            output: ExternalPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_payment_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_payment_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_payment_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_payments/:external_payment_token/settle': {
      $post:
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionWithProgressToRequest
            }
            output: ExternalPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionWithProgressToRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionWithProgressToRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionWithProgressToRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionWithProgressToRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_payments/:external_payment_token/release': {
      $post:
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: ExternalPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_payments/:external_payment_token/cancel': {
      $post:
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: ExternalPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/external_payments/:external_payment_token/reverse': {
      $post:
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: ExternalPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_payment_token: string } } & {
              json: ExternalPaymentActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/management_operations': {
      $get:
        | {
            input: {
              query: {
                category?: ManagementOperationCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: ManagementOperationTransactionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: ManagementOperationCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                category?: ManagementOperationCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                category?: ManagementOperationCategory | undefined
                financial_account_token?: string | undefined
                business_account_token?: string | undefined
                status?: TransactionStatus | undefined
                begin?: string | undefined
                ending_before?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateManagementOperationPublicRequest }
            output: ManagementOperationTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateManagementOperationPublicRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateManagementOperationPublicRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateManagementOperationPublicRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateManagementOperationPublicRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/management_operations/:management_operation_token': {
      $get:
        | {
            input: { param: { management_operation_token: string } }
            output: ManagementOperationTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { management_operation_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { management_operation_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { management_operation_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/management_operations/:management_operation_token/reverse': {
      $post:
        | {
            input: { param: { management_operation_token: string } } & {
              json: ManagementOperationActionRequest
            }
            output: ManagementOperationTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { management_operation_token: string } } & {
              json: ManagementOperationActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { management_operation_token: string } } & {
              json: ManagementOperationActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { management_operation_token: string } } & {
              json: ManagementOperationActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { management_operation_token: string } } & {
              json: ManagementOperationActionRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/network_programs': {
      $get:
        | {
            input: {
              query: {
                page_size?: number | undefined
                begin?: string | undefined
                end?: string | undefined
              }
            }
            output: { data: NetworkProgram[]; has_more: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                begin?: string | undefined
                end?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                begin?: string | undefined
                end?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                begin?: string | undefined
                end?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/network_programs/:network_program_token': {
      $get:
        | {
            input: { param: { network_program_token: string } }
            output: NetworkProgram
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { network_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { network_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { network_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { network_program_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/funding_events': {
      $get:
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                network_settlement_date?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: FundingEventResponses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                network_settlement_date?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                network_settlement_date?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                network_settlement_date?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                ending_before?: string | undefined
                network_settlement_date?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/funding_events/:funding_event_token': {
      $get:
        | {
            input: { param: { funding_event_token: string } }
            output: FundingEventResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/funding_events/:funding_event_token/details': {
      $get:
        | {
            input: { param: { funding_event_token: string } }
            output: FundingEventDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { funding_event_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/disputes': {
      $get:
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                disputed_transaction_token?: string | undefined
                claim_token?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
              }
            }
            output: DisputesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                disputed_transaction_token?: string | undefined
                claim_token?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                disputed_transaction_token?: string | undefined
                claim_token?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                disputed_transaction_token?: string | undefined
                claim_token?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                begin?: string | undefined
                end?: string | undefined
                page_size?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                disputed_transaction_token?: string | undefined
                claim_token?: string | undefined
                card_token?: string | undefined
                account_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/disputes/:dispute_token': {
      $get:
        | {
            input: { param: { dispute_token: string } }
            output: Dispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { dispute_token: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
