type PerformVerificationRequest = {
  accountHolderCode: string
  accountStateType:
    | 'LimitedPayout'
    | 'LimitedProcessing'
    | 'LimitlessPayout'
    | 'LimitlessProcessing'
    | 'Payout'
    | 'Processing'
  tier: number
}
type FieldType = {
  field?: string | undefined
  fieldName?:
    | 'accountCode'
    | 'accountHolderCode'
    | 'accountHolderDetails'
    | 'accountNumber'
    | 'accountStateType'
    | 'accountStatus'
    | 'accountType'
    | 'address'
    | 'balanceAccount'
    | 'balanceAccountActive'
    | 'balanceAccountCode'
    | 'balanceAccountId'
    | 'bankAccount'
    | 'bankAccountCode'
    | 'bankAccountName'
    | 'bankAccountUUID'
    | 'bankBicSwift'
    | 'bankCity'
    | 'bankCode'
    | 'bankName'
    | 'bankStatement'
    | 'branchCode'
    | 'businessContact'
    | 'cardToken'
    | 'checkCode'
    | 'city'
    | 'companyRegistration'
    | 'constitutionalDocument'
    | 'controller'
    | 'country'
    | 'countryCode'
    | 'currency'
    | 'currencyCode'
    | 'dateOfBirth'
    | 'description'
    | 'destinationAccountCode'
    | 'document'
    | 'documentContent'
    | 'documentExpirationDate'
    | 'documentIssuerCountry'
    | 'documentIssuerState'
    | 'documentName'
    | 'documentNumber'
    | 'documentType'
    | 'doingBusinessAs'
    | 'drivingLicence'
    | 'drivingLicenceBack'
    | 'drivingLicenceFront'
    | 'drivingLicense'
    | 'email'
    | 'firstName'
    | 'formType'
    | 'fullPhoneNumber'
    | 'gender'
    | 'hopWebserviceUser'
    | 'houseNumberOrName'
    | 'iban'
    | 'idCard'
    | 'idCardBack'
    | 'idCardFront'
    | 'idNumber'
    | 'identityDocument'
    | 'individualDetails'
    | 'infix'
    | 'jobTitle'
    | 'lastName'
    | 'lastReviewDate'
    | 'legalArrangement'
    | 'legalArrangementCode'
    | 'legalArrangementEntity'
    | 'legalArrangementEntityCode'
    | 'legalArrangementLegalForm'
    | 'legalArrangementMember'
    | 'legalArrangementMembers'
    | 'legalArrangementName'
    | 'legalArrangementReference'
    | 'legalArrangementRegistrationNumber'
    | 'legalArrangementTaxNumber'
    | 'legalArrangementType'
    | 'legalBusinessName'
    | 'legalEntity'
    | 'legalEntityType'
    | 'linkedViasVirtualAccount'
    | 'logo'
    | 'merchantAccount'
    | 'merchantCategoryCode'
    | 'merchantHouseNumber'
    | 'merchantReference'
    | 'microDeposit'
    | 'name'
    | 'nationality'
    | 'originalReference'
    | 'ownerCity'
    | 'ownerCountryCode'
    | 'ownerDateOfBirth'
    | 'ownerHouseNumberOrName'
    | 'ownerName'
    | 'ownerPostalCode'
    | 'ownerState'
    | 'ownerStreet'
    | 'passport'
    | 'passportNumber'
    | 'payoutMethod'
    | 'payoutMethodCode'
    | 'payoutSchedule'
    | 'pciSelfAssessment'
    | 'personalData'
    | 'phoneCountryCode'
    | 'phoneNumber'
    | 'postalCode'
    | 'primaryCurrency'
    | 'reason'
    | 'registrationNumber'
    | 'returnUrl'
    | 'schedule'
    | 'shareholder'
    | 'shareholderCode'
    | 'shareholderCodeAndSignatoryCode'
    | 'shareholderCodeOrSignatoryCode'
    | 'shareholderType'
    | 'shareholderTypes'
    | 'shopperInteraction'
    | 'signatory'
    | 'signatoryCode'
    | 'socialSecurityNumber'
    | 'sourceAccountCode'
    | 'splitAccount'
    | 'splitConfigurationUUID'
    | 'splitCurrency'
    | 'splitValue'
    | 'splits'
    | 'stateOrProvince'
    | 'status'
    | 'stockExchange'
    | 'stockNumber'
    | 'stockTicker'
    | 'store'
    | 'storeDetail'
    | 'storeName'
    | 'storeReference'
    | 'street'
    | 'taxId'
    | 'tier'
    | 'tierNumber'
    | 'transferCode'
    | 'ultimateParentCompany'
    | 'ultimateParentCompanyAddressDetails'
    | 'ultimateParentCompanyAddressDetailsCountry'
    | 'ultimateParentCompanyBusinessDetails'
    | 'ultimateParentCompanyBusinessDetailsLegalBusinessName'
    | 'ultimateParentCompanyBusinessDetailsRegistrationNumber'
    | 'ultimateParentCompanyCode'
    | 'ultimateParentCompanyStockExchange'
    | 'ultimateParentCompanyStockNumber'
    | 'ultimateParentCompanyStockNumberOrStockTicker'
    | 'ultimateParentCompanyStockTicker'
    | 'unknown'
    | 'value'
    | 'verificationType'
    | 'virtualAccount'
    | 'visaNumber'
    | 'webAddress'
    | 'year'
    | undefined
  shareholderCode?: string | undefined
}
type ErrorFieldType = {
  errorCode?: number | undefined
  errorDescription?: string | undefined
  fieldType?: FieldType | undefined
}
type GenericResponse = {
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type CloseAccountRequest = { accountCode: string }
type CloseAccountResponse = {
  accountCode?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
  status?: 'Active' | 'Closed' | 'Inactive' | 'Suspended' | undefined
}
type CloseAccountHolderRequest = { accountHolderCode: string }
type AccountEvent = {
  event?: 'InactivateAccount' | 'RefundNotPaidOutTransfers' | undefined
  executionDate?: string | undefined
  reason?: string | undefined
}
type Amount = { currency: string; value: bigint }
type AccountPayoutState = {
  allowPayout?: boolean | undefined
  disableReason?: string | undefined
  disabled?: boolean | undefined
  notAllowedReason?: string | undefined
  payoutLimit?: Amount | undefined
  tierNumber?: number | undefined
}
type AccountProcessingState = {
  disableReason?: string | undefined
  disabled?: boolean | undefined
  processedFrom?: Amount | undefined
  processedTo?: Amount | undefined
  tierNumber?: number | undefined
}
type AccountHolderStatus = {
  events?: AccountEvent[] | undefined
  payoutState?: AccountPayoutState | undefined
  processingState?: AccountProcessingState | undefined
  status: 'Active' | 'Closed' | 'Inactive' | 'Suspended'
  statusReason?: string | undefined
}
type CloseAccountHolderResponse = {
  accountHolderStatus?: AccountHolderStatus | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type CloseStoresRequest = { accountHolderCode: string; stores: string[] }
type CreateAccountRequest = {
  accountHolderCode: string
  bankAccountUUID?: string | undefined
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
  payoutMethodCode?: string | undefined
  payoutSchedule?:
    | 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT'
    | 'DAILY'
    | 'DAILY_AU'
    | 'DAILY_EU'
    | 'DAILY_SG'
    | 'DAILY_US'
    | 'HOLD'
    | 'MONTHLY'
    | 'WEEKLY'
    | 'WEEKLY_MON_TO_FRI_AU'
    | 'WEEKLY_MON_TO_FRI_EU'
    | 'WEEKLY_MON_TO_FRI_US'
    | 'WEEKLY_ON_TUE_FRI_MIDNIGHT'
    | 'WEEKLY_SUN_TO_THU_AU'
    | 'WEEKLY_SUN_TO_THU_US'
    | undefined
  payoutScheduleReason?: string | undefined
  payoutSpeed?: 'INSTANT' | 'SAME_DAY' | 'STANDARD' | undefined
}
type PayoutScheduleResponse = {
  nextScheduledPayout?: string | undefined
  schedule?:
    | 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT'
    | 'DAILY'
    | 'DAILY_AU'
    | 'DAILY_EU'
    | 'DAILY_SG'
    | 'DAILY_US'
    | 'HOLD'
    | 'MONTHLY'
    | 'WEEKLY'
    | 'WEEKLY_MON_TO_FRI_AU'
    | 'WEEKLY_MON_TO_FRI_EU'
    | 'WEEKLY_MON_TO_FRI_US'
    | 'WEEKLY_ON_TUE_FRI_MIDNIGHT'
    | 'WEEKLY_SUN_TO_THU_AU'
    | 'WEEKLY_SUN_TO_THU_US'
    | undefined
}
type CreateAccountResponse = {
  accountCode?: string | undefined
  accountHolderCode?: string | undefined
  bankAccountUUID?: string | undefined
  description?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  metadata?: { [x: string]: string } | undefined
  payoutMethodCode?: string | undefined
  payoutSchedule?: PayoutScheduleResponse | undefined
  payoutSpeed?: 'INSTANT' | 'SAME_DAY' | 'STANDARD' | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
  status?: 'Active' | 'Closed' | 'Inactive' | 'Suspended' | undefined
}
type ViasAddress = {
  city?: string | undefined
  country: string
  houseNumberOrName?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
  street?: string | undefined
}
type BankAccountDetail = {
  accountNumber?: string | undefined
  accountType?: string | undefined
  bankAccountName?: string | undefined
  bankAccountReference?: string | undefined
  bankAccountUUID?: string | undefined
  bankBicSwift?: string | undefined
  bankCity?: string | undefined
  bankCode?: string | undefined
  bankName?: string | undefined
  branchCode?: string | undefined
  checkCode?: string | undefined
  countryCode?: string | undefined
  currencyCode?: string | undefined
  iban?: string | undefined
  ownerCity?: string | undefined
  ownerCountryCode?: string | undefined
  ownerDateOfBirth?: string | undefined
  ownerHouseNumberOrName?: string | undefined
  ownerName?: string | undefined
  ownerNationality?: string | undefined
  ownerPostalCode?: string | undefined
  ownerState?: string | undefined
  ownerStreet?: string | undefined
  primaryAccount?: boolean | undefined
  taxId?: string | undefined
  urlForVerification?: string | undefined
}
type UltimateParentCompanyBusinessDetails = {
  legalBusinessName?: string | undefined
  registrationNumber?: string | undefined
  stockExchange?: string | undefined
  stockNumber?: string | undefined
  stockTicker?: string | undefined
}
type UltimateParentCompany = {
  address?: ViasAddress | undefined
  businessDetails?: UltimateParentCompanyBusinessDetails | undefined
  ultimateParentCompanyCode?: string | undefined
}
type ViasName = {
  firstName?: string | undefined
  gender?: 'MALE' | 'FEMALE' | 'UNKNOWN' | undefined
  infix?: string | undefined
  lastName?: string | undefined
}
type PersonalDocumentData = {
  expirationDate?: string | undefined
  issuerCountry?: string | undefined
  issuerState?: string | undefined
  number?: string | undefined
  type: 'DRIVINGLICENSE' | 'ID' | 'PASSPORT' | 'SOCIALSECURITY' | 'VISA'
}
type ViasPersonalData = {
  dateOfBirth?: string | undefined
  documentData?: PersonalDocumentData[] | undefined
  nationality?: string | undefined
}
type ViasPhoneNumber = {
  phoneCountryCode?: string | undefined
  phoneNumber?: string | undefined
  phoneType?: 'Fax' | 'Landline' | 'Mobile' | 'SIP' | undefined
}
type ShareholderContact = {
  address?: ViasAddress | undefined
  email?: string | undefined
  fullPhoneNumber?: string | undefined
  jobTitle?: string | undefined
  name?: ViasName | undefined
  personalData?: ViasPersonalData | undefined
  phoneNumber?: ViasPhoneNumber | undefined
  shareholderCode?: string | undefined
  shareholderReference?: string | undefined
  shareholderType?: 'Controller' | 'Owner' | 'Signatory' | undefined
  webAddress?: string | undefined
}
type SignatoryContact = {
  address?: ViasAddress | undefined
  email?: string | undefined
  fullPhoneNumber?: string | undefined
  jobTitle?: string | undefined
  name?: ViasName | undefined
  personalData?: ViasPersonalData | undefined
  phoneNumber?: ViasPhoneNumber | undefined
  signatoryCode?: string | undefined
  signatoryReference?: string | undefined
  webAddress?: string | undefined
}
type BusinessDetails = {
  doingBusinessAs?: string | undefined
  legalBusinessName?: string | undefined
  listedUltimateParentCompany?: UltimateParentCompany[] | undefined
  registrationNumber?: string | undefined
  shareholders?: ShareholderContact[] | undefined
  signatories?: SignatoryContact[] | undefined
  stockExchange?: string | undefined
  stockNumber?: string | undefined
  stockTicker?: string | undefined
  taxId?: string | undefined
}
type IndividualDetails = {
  name?: ViasName | undefined
  personalData?: ViasPersonalData | undefined
}
type LegalArrangementEntityDetail = {
  address?: ViasAddress | undefined
  businessDetails?: BusinessDetails | undefined
  email?: string | undefined
  fullPhoneNumber?: string | undefined
  individualDetails?: IndividualDetails | undefined
  legalArrangementEntityCode?: string | undefined
  legalArrangementEntityReference?: string | undefined
  legalArrangementMembers?:
    | (
        | 'Beneficiary'
        | 'ControllingPerson'
        | 'Partner'
        | 'Protector'
        | 'Settlor'
        | 'Shareholder'
        | 'Trustee'
      )[]
    | undefined
  legalEntityType?:
    | 'Business'
    | 'Individual'
    | 'NonProfit'
    | 'Partnership'
    | 'PublicCompany'
    | undefined
  phoneNumber?: ViasPhoneNumber | undefined
  webAddress?: string | undefined
}
type LegalArrangementDetail = {
  address: ViasAddress
  legalArrangementCode?: string | undefined
  legalArrangementEntities?: LegalArrangementEntityDetail[] | undefined
  legalArrangementReference?: string | undefined
  legalForm?:
    | 'CashManagementTrust'
    | 'CorporateUnitTrust'
    | 'DeceasedEstate'
    | 'DiscretionaryInvestmentTrust'
    | 'DiscretionaryServicesManagementTrust'
    | 'DiscretionaryTradingTrust'
    | 'FirstHomeSaverAccountsTrust'
    | 'FixedTrust'
    | 'FixedUnitTrust'
    | 'HybridTrust'
    | 'ListedPublicUnitTrust'
    | 'OtherTrust'
    | 'PooledSuperannuationTrust'
    | 'PublicTradingTrust'
    | 'UnlistedPublicUnitTrust'
    | 'LimitedPartnership'
    | 'FamilyPartnership'
    | 'OtherPartnership'
    | undefined
  name: string
  registrationNumber?: string | undefined
  taxNumber?: string | undefined
  type: 'Association' | 'Partnership' | 'SoleProprietorship' | 'Trust'
}
type PayoutMethod = {
  merchantAccount: string
  payoutMethodCode?: string | undefined
  payoutMethodReference?: string | undefined
  recurringDetailReference: string
  shopperReference: string
}
type StoreDetail = {
  address: ViasAddress
  fullPhoneNumber?: string | undefined
  logo?: string | undefined
  merchantAccount: string
  merchantCategoryCode: string
  merchantHouseNumber?: string | undefined
  phoneNumber?: ViasPhoneNumber | undefined
  shopperInteraction?: 'Ecommerce' | 'POS' | undefined
  splitConfigurationUUID?: string | undefined
  status?: 'Active' | 'Closed' | 'Inactive' | 'InactiveWithModifications' | 'Pending' | undefined
  store?: string | undefined
  storeName?: string | undefined
  storeReference?: string | undefined
  virtualAccount?: string | undefined
  webAddress?: string | undefined
}
type AccountHolderDetails = {
  address: ViasAddress
  bankAccountDetails?: BankAccountDetail[] | undefined
  bankAggregatorDataReference?: string | undefined
  businessDetails?: BusinessDetails | undefined
  email?: string | undefined
  fullPhoneNumber?: string | undefined
  individualDetails?: IndividualDetails | undefined
  lastReviewDate?: string | undefined
  legalArrangements?: LegalArrangementDetail[] | undefined
  merchantCategoryCode?: string | undefined
  metadata?: { [x: string]: string } | undefined
  payoutMethods?: PayoutMethod[] | undefined
  phoneNumber?: ViasPhoneNumber | undefined
  principalBusinessAddress?: ViasAddress | undefined
  storeDetails?: StoreDetail[] | undefined
  webAddress?: string | undefined
}
type CreateAccountHolderRequest = {
  accountHolderCode: string
  accountHolderDetails: AccountHolderDetails
  createDefaultAccount?: boolean | undefined
  description?: string | undefined
  legalEntity: 'Business' | 'Individual' | 'NonProfit' | 'Partnership' | 'PublicCompany'
  primaryCurrency?: string | undefined
  processingTier?: number | undefined
  verificationProfile?: string | undefined
}
type KYCCheckSummary = {
  kycCheckCode?: number | undefined
  kycCheckDescription?: string | undefined
}
type KYCCheckStatusData = {
  requiredFields?: string[] | undefined
  status:
    | 'AWAITING_DATA'
    | 'DATA_PROVIDED'
    | 'FAILED'
    | 'INVALID_DATA'
    | 'PASSED'
    | 'PENDING'
    | 'PENDING_REVIEW'
    | 'RETRY_LIMIT_REACHED'
    | 'UNCHECKED'
  summary?: KYCCheckSummary | undefined
  type:
    | 'BANK_ACCOUNT_VERIFICATION'
    | 'CARD_VERIFICATION'
    | 'COMPANY_VERIFICATION'
    | 'IDENTITY_VERIFICATION'
    | 'LEGAL_ARRANGEMENT_VERIFICATION'
    | 'NONPROFIT_VERIFICATION'
    | 'PASSPORT_VERIFICATION'
    | 'PAYOUT_METHOD_VERIFICATION'
    | 'PCI_VERIFICATION'
}
type KYCCheckResult = { checks?: KYCCheckStatusData[] | undefined }
type KYCLegalArrangementCheckResult = {
  checks?: KYCCheckStatusData[] | undefined
  legalArrangementCode?: string | undefined
}
type KYCLegalArrangementEntityCheckResult = {
  checks?: KYCCheckStatusData[] | undefined
  legalArrangementCode?: string | undefined
  legalArrangementEntityCode?: string | undefined
}
type KYCPayoutMethodCheckResult = {
  checks?: KYCCheckStatusData[] | undefined
  payoutMethodCode?: string | undefined
}
type KYCShareholderCheckResult = {
  checks?: KYCCheckStatusData[] | undefined
  legalArrangementCode?: string | undefined
  legalArrangementEntityCode?: string | undefined
  shareholderCode?: string | undefined
}
type KYCSignatoryCheckResult = {
  checks?: KYCCheckStatusData[] | undefined
  signatoryCode?: string | undefined
}
type KYCUltimateParentCompanyCheckResult = {
  checks?: KYCCheckStatusData[] | undefined
  ultimateParentCompanyCode?: string | undefined
}
type KYCVerificationResult = {
  accountHolder?: KYCCheckResult | undefined
  legalArrangements?: KYCLegalArrangementCheckResult[] | undefined
  legalArrangementsEntities?: KYCLegalArrangementEntityCheckResult[] | undefined
  payoutMethods?: KYCPayoutMethodCheckResult[] | undefined
  shareholders?: KYCShareholderCheckResult[] | undefined
  signatories?: KYCSignatoryCheckResult[] | undefined
  ultimateParentCompany?: KYCUltimateParentCompanyCheckResult[] | undefined
}
type CreateAccountHolderResponse = {
  accountCode?: string | undefined
  accountHolderCode?: string | undefined
  accountHolderDetails?: AccountHolderDetails | undefined
  accountHolderStatus?: AccountHolderStatus | undefined
  description?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  legalEntity?:
    | 'Business'
    | 'Individual'
    | 'NonProfit'
    | 'Partnership'
    | 'PublicCompany'
    | undefined
  primaryCurrency?: string | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
  verification?: KYCVerificationResult | undefined
  verificationProfile?: string | undefined
}
type DeleteBankAccountRequest = { accountHolderCode: string; bankAccountUUIDs: string[] }
type LegalArrangementRequest = {
  legalArrangementCode: string
  legalArrangementEntityCodes?: string[] | undefined
}
type DeleteLegalArrangementRequest = {
  accountHolderCode: string
  legalArrangements: LegalArrangementRequest[]
}
type DeletePayoutMethodRequest = { accountHolderCode: string; payoutMethodCodes: string[] }
type DeleteShareholderRequest = { accountHolderCode: string; shareholderCodes: string[] }
type DeleteSignatoriesRequest = { accountHolderCode: string; signatoryCodes: string[] }
type GetAccountHolderRequest = {
  accountCode?: string | undefined
  accountHolderCode?: string | undefined
  showDetails?: boolean | undefined
}
type Account = {
  accountCode?: string | undefined
  bankAccountUUID?: string | undefined
  beneficiaryAccount?: string | undefined
  beneficiaryMerchantReference?: string | undefined
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
  payoutMethodCode?: string | undefined
  payoutSchedule?: PayoutScheduleResponse | undefined
  payoutSpeed?: 'INSTANT' | 'SAME_DAY' | 'STANDARD' | undefined
  status?: string | undefined
}
type MigratedAccounts = { accountCode?: string | undefined; balanceAccountId?: string | undefined }
type MigratedShareholders = {
  legalEntityCode?: string | undefined
  shareholderCode?: string | undefined
}
type MigratedStores = {
  businessLineId?: string | undefined
  storeCode?: string | undefined
  storeId?: string | undefined
  storeReference?: string | undefined
}
type MigrationData = {
  accountHolderId?: string | undefined
  balancePlatform?: string | undefined
  migrated?: boolean | undefined
  migratedAccounts?: MigratedAccounts[] | undefined
  migratedShareholders?: MigratedShareholders[] | undefined
  migratedStores?: MigratedStores[] | undefined
  migrationDate?: string | undefined
}
type GetAccountHolderResponse = {
  accountHolderCode?: string | undefined
  accountHolderDetails?: AccountHolderDetails | undefined
  accountHolderStatus?: AccountHolderStatus | undefined
  accounts?: Account[] | undefined
  description?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  legalEntity?:
    | 'Business'
    | 'Individual'
    | 'NonProfit'
    | 'Partnership'
    | 'PublicCompany'
    | undefined
  migrationData?: MigrationData | undefined
  primaryCurrency?: string | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
  systemUpToDateTime?: string | undefined
  verification?: KYCVerificationResult | undefined
  verificationProfile?: string | undefined
}
type GetTaxFormRequest = { accountHolderCode: string; formType: string; year: number }
type GetTaxFormResponse = {
  content?: string | undefined
  contentType?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type GetUploadedDocumentsRequest = {
  accountHolderCode: string
  bankAccountUUID?: string | undefined
  shareholderCode?: string | undefined
}
type DocumentDetail = {
  accountHolderCode?: string | undefined
  bankAccountUUID?: string | undefined
  description?: string | undefined
  documentType:
    | 'BANK_STATEMENT'
    | 'BSN'
    | 'COMPANY_REGISTRATION_SCREENING'
    | 'CONSTITUTIONAL_DOCUMENT'
    | 'DRIVING_LICENCE'
    | 'DRIVING_LICENCE_BACK'
    | 'DRIVING_LICENCE_FRONT'
    | 'ID_CARD'
    | 'ID_CARD_BACK'
    | 'ID_CARD_FRONT'
    | 'PASSPORT'
    | 'PROOF_OF_RESIDENCY'
    | 'SSN'
    | 'SUPPORTING_DOCUMENTS'
  filename?: string | undefined
  legalArrangementCode?: string | undefined
  legalArrangementEntityCode?: string | undefined
  shareholderCode?: string | undefined
  signatoryCode?: string | undefined
}
type GetUploadedDocumentsResponse = {
  documentDetails?: DocumentDetail[] | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type SuspendAccountHolderRequest = { accountHolderCode: string }
type SuspendAccountHolderResponse = {
  accountHolderStatus?: AccountHolderStatus | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type UnSuspendAccountHolderRequest = { accountHolderCode: string }
type UnSuspendAccountHolderResponse = {
  accountHolderStatus?: AccountHolderStatus | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type UpdatePayoutScheduleRequest = {
  action?: 'CLOSE' | 'NOTHING' | 'UPDATE' | undefined
  reason?: string | undefined
  schedule:
    | 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT'
    | 'DAILY'
    | 'DAILY_AU'
    | 'DAILY_EU'
    | 'DAILY_SG'
    | 'DAILY_US'
    | 'HOLD'
    | 'MONTHLY'
    | 'WEEKLY'
    | 'WEEKLY_MON_TO_FRI_AU'
    | 'WEEKLY_MON_TO_FRI_EU'
    | 'WEEKLY_MON_TO_FRI_US'
    | 'WEEKLY_ON_TUE_FRI_MIDNIGHT'
    | 'WEEKLY_SUN_TO_THU_AU'
    | 'WEEKLY_SUN_TO_THU_US'
}
type UpdateAccountRequest = {
  accountCode: string
  bankAccountUUID?: string | undefined
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
  payoutMethodCode?: string | undefined
  payoutSchedule?: UpdatePayoutScheduleRequest | undefined
  payoutSpeed?: 'INSTANT' | 'SAME_DAY' | 'STANDARD' | undefined
}
type UpdateAccountResponse = {
  accountCode: string
  bankAccountUUID?: string | undefined
  description?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  metadata?: { [x: string]: string } | undefined
  payoutMethodCode?: string | undefined
  payoutSchedule?: PayoutScheduleResponse | undefined
  payoutSpeed?: 'INSTANT' | 'SAME_DAY' | 'STANDARD' | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type UpdateAccountHolderRequest = {
  accountHolderCode: string
  accountHolderDetails?: AccountHolderDetails | undefined
  description?: string | undefined
  legalEntity?:
    | 'Business'
    | 'Individual'
    | 'NonProfit'
    | 'Partnership'
    | 'PublicCompany'
    | undefined
  primaryCurrency?: string | undefined
  processingTier?: number | undefined
  verificationProfile?: string | undefined
}
type UpdateAccountHolderResponse = {
  accountHolderCode?: string | undefined
  accountHolderDetails?: AccountHolderDetails | undefined
  accountHolderStatus?: AccountHolderStatus | undefined
  description?: string | undefined
  invalidFields?: ErrorFieldType[] | undefined
  legalEntity?:
    | 'Business'
    | 'Individual'
    | 'NonProfit'
    | 'Partnership'
    | 'PublicCompany'
    | undefined
  primaryCurrency?: string | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
  verification?: KYCVerificationResult | undefined
  verificationProfile?: string | undefined
}
type UpdateAccountHolderStateRequest = {
  accountHolderCode: string
  disable: boolean
  reason?: string | undefined
  stateType:
    | 'LimitedPayout'
    | 'LimitedProcessing'
    | 'LimitlessPayout'
    | 'LimitlessProcessing'
    | 'Payout'
    | 'Processing'
}
type GetAccountHolderStatusResponse = {
  accountHolderCode?: string | undefined
  accountHolderStatus?: AccountHolderStatus | undefined
  invalidFields?: ErrorFieldType[] | undefined
  pspReference?: string | undefined
  resultCode?: string | undefined
}
type UploadDocumentRequest = { documentContent: string; documentDetail: DocumentDetail }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/checkAccountHolder': {
      $post:
        | {
            input: { json: PerformVerificationRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PerformVerificationRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PerformVerificationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PerformVerificationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PerformVerificationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PerformVerificationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PerformVerificationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/closeAccount': {
      $post:
        | {
            input: { json: CloseAccountRequest }
            output: CloseAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CloseAccountRequest }
            output: CloseAccountResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CloseAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CloseAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CloseAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CloseAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CloseAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/closeAccountHolder': {
      $post:
        | {
            input: { json: CloseAccountHolderRequest }
            output: CloseAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CloseAccountHolderRequest }
            output: CloseAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CloseAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CloseAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CloseAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CloseAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CloseAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/closeStores': {
      $post:
        | {
            input: { json: CloseStoresRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CloseStoresRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CloseStoresRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CloseStoresRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CloseStoresRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CloseStoresRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createAccount': {
      $post:
        | {
            input: { json: CreateAccountRequest }
            output: CreateAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAccountRequest }
            output: CreateAccountResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: CreateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createAccountHolder': {
      $post:
        | {
            input: { json: CreateAccountHolderRequest }
            output: CreateAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteBankAccounts': {
      $post:
        | {
            input: { json: DeleteBankAccountRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteBankAccountRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DeleteBankAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteBankAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteBankAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteBankAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeleteBankAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteLegalArrangements': {
      $post:
        | {
            input: { json: DeleteLegalArrangementRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteLegalArrangementRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DeleteLegalArrangementRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteLegalArrangementRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteLegalArrangementRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteLegalArrangementRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeleteLegalArrangementRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deletePayoutMethods': {
      $post:
        | {
            input: { json: DeletePayoutMethodRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeletePayoutMethodRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DeletePayoutMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeletePayoutMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeletePayoutMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeletePayoutMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeletePayoutMethodRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteShareholders': {
      $post:
        | {
            input: { json: DeleteShareholderRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteShareholderRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DeleteShareholderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteShareholderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteShareholderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteShareholderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeleteShareholderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteSignatories': {
      $post:
        | {
            input: { json: DeleteSignatoriesRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteSignatoriesRequest }
            output: GenericResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: DeleteSignatoriesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteSignatoriesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteSignatoriesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeleteSignatoriesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DeleteSignatoriesRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getAccountHolder': {
      $post:
        | {
            input: { json: GetAccountHolderRequest }
            output: GetAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetAccountHolderRequest }
            output: GetAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: GetAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getTaxForm': {
      $post:
        | {
            input: { json: GetTaxFormRequest }
            output: GetTaxFormResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetTaxFormRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetTaxFormRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetTaxFormRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetTaxFormRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetTaxFormRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getUploadedDocuments': {
      $post:
        | {
            input: { json: GetUploadedDocumentsRequest }
            output: GetUploadedDocumentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetUploadedDocumentsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetUploadedDocumentsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetUploadedDocumentsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetUploadedDocumentsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetUploadedDocumentsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/suspendAccountHolder': {
      $post:
        | {
            input: { json: SuspendAccountHolderRequest }
            output: SuspendAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SuspendAccountHolderRequest }
            output: SuspendAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: SuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unSuspendAccountHolder': {
      $post:
        | {
            input: { json: UnSuspendAccountHolderRequest }
            output: UnSuspendAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UnSuspendAccountHolderRequest }
            output: UnSuspendAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: UnSuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UnSuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UnSuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UnSuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: UnSuspendAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/updateAccount': {
      $post:
        | {
            input: { json: UpdateAccountRequest }
            output: UpdateAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateAccountRequest }
            output: UpdateAccountResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: UpdateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: UpdateAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/updateAccountHolder': {
      $post:
        | {
            input: { json: UpdateAccountHolderRequest }
            output: UpdateAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateAccountHolderRequest }
            output: UpdateAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: UpdateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: UpdateAccountHolderRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/updateAccountHolderState': {
      $post:
        | {
            input: { json: UpdateAccountHolderStateRequest }
            output: GetAccountHolderStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateAccountHolderStateRequest }
            output: GetAccountHolderStatusResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: UpdateAccountHolderStateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateAccountHolderStateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UpdateAccountHolderStateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UpdateAccountHolderStateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: UpdateAccountHolderStateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/uploadDocument': {
      $post:
        | {
            input: { json: UploadDocumentRequest }
            output: UpdateAccountHolderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UploadDocumentRequest }
            output: UpdateAccountHolderResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: UploadDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UploadDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UploadDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UploadDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: UploadDocumentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
