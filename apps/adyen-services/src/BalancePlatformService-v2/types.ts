type Amount = { currency: string; value: bigint }
type CapabilitySettings = {
  amountPerIndustry?: { [x: string]: Amount } | undefined
  authorizedCardUsers?: boolean | undefined
  fundingSource?: ('credit' | 'debit' | 'prepaid')[] | undefined
  interval?: 'daily' | 'monthly' | 'weekly' | undefined
  maxAmount?: Amount | undefined
}
type CapabilityProblemEntityRecursive = {
  documents?: string[] | undefined
  id?: string | undefined
  type?: 'BankAccount' | 'Document' | 'LegalEntity' | undefined
}
type CapabilityProblemEntity = {
  documents?: string[] | undefined
  id?: string | undefined
  owner?: CapabilityProblemEntityRecursive | undefined
  type?: 'BankAccount' | 'Document' | 'LegalEntity' | undefined
}
type RemediatingAction = { code?: string | undefined; message?: string | undefined }
type VerificationErrorRecursive = {
  capabilities?:
    | (
        | 'acceptExternalFunding'
        | 'acceptPspFunding'
        | 'acceptTransactionInRestrictedCountries'
        | 'acceptTransactionInRestrictedCountriesCommercial'
        | 'acceptTransactionInRestrictedCountriesConsumer'
        | 'acceptTransactionInRestrictedIndustries'
        | 'acceptTransactionInRestrictedIndustriesCommercial'
        | 'acceptTransactionInRestrictedIndustriesConsumer'
        | 'acquiring'
        | 'atmWithdrawal'
        | 'atmWithdrawalCommercial'
        | 'atmWithdrawalConsumer'
        | 'atmWithdrawalInRestrictedCountries'
        | 'atmWithdrawalInRestrictedCountriesCommercial'
        | 'atmWithdrawalInRestrictedCountriesConsumer'
        | 'authorisedPaymentInstrumentUser'
        | 'getGrantOffers'
        | 'issueBankAccount'
        | 'issueCard'
        | 'issueCardCommercial'
        | 'issueCardConsumer'
        | 'issueChargeCard'
        | 'issueChargeCardCommercial'
        | 'issueCreditLimit'
        | 'localAcceptance'
        | 'payout'
        | 'payoutToTransferInstrument'
        | 'processing'
        | 'receiveFromBalanceAccount'
        | 'receiveFromPlatformPayments'
        | 'receiveFromThirdParty'
        | 'receiveFromTransferInstrument'
        | 'receiveGrants'
        | 'receivePayments'
        | 'sendToBalanceAccount'
        | 'sendToThirdParty'
        | 'sendToTransferInstrument'
        | 'thirdPartyFunding'
        | 'useCard'
        | 'useCardCommercial'
        | 'useCardConsumer'
        | 'useCardInRestrictedCountries'
        | 'useCardInRestrictedCountriesCommercial'
        | 'useCardInRestrictedCountriesConsumer'
        | 'useCardInRestrictedIndustries'
        | 'useCardInRestrictedIndustriesCommercial'
        | 'useCardInRestrictedIndustriesConsumer'
        | 'useChargeCard'
        | 'useChargeCardCommercial'
        | 'withdrawFromAtm'
        | 'withdrawFromAtmCommercial'
        | 'withdrawFromAtmConsumer'
        | 'withdrawFromAtmInRestrictedCountries'
        | 'withdrawFromAtmInRestrictedCountriesCommercial'
        | 'withdrawFromAtmInRestrictedCountriesConsumer'
      )[]
    | undefined
  code?: string | undefined
  message?: string | undefined
  type?: 'dataMissing' | 'dataReview' | 'invalidInput' | 'pendingStatus' | undefined
  remediatingActions?: RemediatingAction[] | undefined
}
type VerificationError = {
  capabilities?:
    | (
        | 'acceptExternalFunding'
        | 'acceptPspFunding'
        | 'acceptTransactionInRestrictedCountries'
        | 'acceptTransactionInRestrictedCountriesCommercial'
        | 'acceptTransactionInRestrictedCountriesConsumer'
        | 'acceptTransactionInRestrictedIndustries'
        | 'acceptTransactionInRestrictedIndustriesCommercial'
        | 'acceptTransactionInRestrictedIndustriesConsumer'
        | 'acquiring'
        | 'atmWithdrawal'
        | 'atmWithdrawalCommercial'
        | 'atmWithdrawalConsumer'
        | 'atmWithdrawalInRestrictedCountries'
        | 'atmWithdrawalInRestrictedCountriesCommercial'
        | 'atmWithdrawalInRestrictedCountriesConsumer'
        | 'authorisedPaymentInstrumentUser'
        | 'getGrantOffers'
        | 'issueBankAccount'
        | 'issueCard'
        | 'issueCardCommercial'
        | 'issueCardConsumer'
        | 'issueChargeCard'
        | 'issueChargeCardCommercial'
        | 'issueCreditLimit'
        | 'localAcceptance'
        | 'payout'
        | 'payoutToTransferInstrument'
        | 'processing'
        | 'receiveFromBalanceAccount'
        | 'receiveFromPlatformPayments'
        | 'receiveFromThirdParty'
        | 'receiveFromTransferInstrument'
        | 'receiveGrants'
        | 'receivePayments'
        | 'sendToBalanceAccount'
        | 'sendToThirdParty'
        | 'sendToTransferInstrument'
        | 'thirdPartyFunding'
        | 'useCard'
        | 'useCardCommercial'
        | 'useCardConsumer'
        | 'useCardInRestrictedCountries'
        | 'useCardInRestrictedCountriesCommercial'
        | 'useCardInRestrictedCountriesConsumer'
        | 'useCardInRestrictedIndustries'
        | 'useCardInRestrictedIndustriesCommercial'
        | 'useCardInRestrictedIndustriesConsumer'
        | 'useChargeCard'
        | 'useChargeCardCommercial'
        | 'withdrawFromAtm'
        | 'withdrawFromAtmCommercial'
        | 'withdrawFromAtmConsumer'
        | 'withdrawFromAtmInRestrictedCountries'
        | 'withdrawFromAtmInRestrictedCountriesCommercial'
        | 'withdrawFromAtmInRestrictedCountriesConsumer'
      )[]
    | undefined
  code?: string | undefined
  message?: string | undefined
  remediatingActions?: RemediatingAction[] | undefined
  subErrors?: VerificationErrorRecursive[] | undefined
  type?: 'dataMissing' | 'dataReview' | 'invalidInput' | 'pendingStatus' | undefined
}
type CapabilityProblem = {
  entity?: CapabilityProblemEntity | undefined
  verificationErrors?: VerificationError[] | undefined
}
type AccountSupportingEntityCapability = {
  allowed?: boolean | undefined
  allowedLevel?: 'high' | 'low' | 'medium' | 'notApplicable' | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  requested?: boolean | undefined
  requestedLevel?: 'high' | 'low' | 'medium' | 'notApplicable' | undefined
  verificationStatus?: 'invalid' | 'pending' | 'rejected' | 'valid' | undefined
}
type AccountHolderCapability = {
  allowed?: boolean | undefined
  allowedLevel?: 'high' | 'low' | 'medium' | 'notApplicable' | undefined
  allowedSettings?: CapabilitySettings | undefined
  enabled?: boolean | undefined
  problems?: CapabilityProblem[] | undefined
  requested?: boolean | undefined
  requestedLevel?: 'high' | 'low' | 'medium' | 'notApplicable' | undefined
  requestedSettings?: CapabilitySettings | undefined
  transferInstruments?: AccountSupportingEntityCapability[] | undefined
  verificationStatus?: 'invalid' | 'pending' | 'rejected' | 'valid' | undefined
}
type Address = {
  city: string
  country: string
  houseNumberOrName: string
  postalCode: string
  stateOrProvince?: string | undefined
  street: string
}
type Phone = { number: string; type: 'landline' | 'mobile' }
type ContactDetails = {
  address: Address
  email: string
  phone: Phone
  webAddress?: string | undefined
}
type AccountHolderInfo = {
  balancePlatform?: string | undefined
  capabilities?: { [x: string]: AccountHolderCapability } | undefined
  contactDetails?: ContactDetails | undefined
  description?: string | undefined
  legalEntityId: string
  metadata?: { [x: string]: string } | undefined
  migratedAccountHolderCode?: string | undefined
  reference?: string | undefined
  timeZone?: string | undefined
}
type VerificationDeadline = {
  capabilities: (
    | 'acceptExternalFunding'
    | 'acceptPspFunding'
    | 'acceptTransactionInRestrictedCountries'
    | 'acceptTransactionInRestrictedCountriesCommercial'
    | 'acceptTransactionInRestrictedCountriesConsumer'
    | 'acceptTransactionInRestrictedIndustries'
    | 'acceptTransactionInRestrictedIndustriesCommercial'
    | 'acceptTransactionInRestrictedIndustriesConsumer'
    | 'acquiring'
    | 'atmWithdrawal'
    | 'atmWithdrawalCommercial'
    | 'atmWithdrawalConsumer'
    | 'atmWithdrawalInRestrictedCountries'
    | 'atmWithdrawalInRestrictedCountriesCommercial'
    | 'atmWithdrawalInRestrictedCountriesConsumer'
    | 'authorisedPaymentInstrumentUser'
    | 'getGrantOffers'
    | 'issueBankAccount'
    | 'issueCard'
    | 'issueCardCommercial'
    | 'issueCardConsumer'
    | 'issueChargeCard'
    | 'issueChargeCardCommercial'
    | 'issueCreditLimit'
    | 'localAcceptance'
    | 'payout'
    | 'payoutToTransferInstrument'
    | 'processing'
    | 'receiveFromBalanceAccount'
    | 'receiveFromPlatformPayments'
    | 'receiveFromThirdParty'
    | 'receiveFromTransferInstrument'
    | 'receiveGrants'
    | 'receivePayments'
    | 'sendToBalanceAccount'
    | 'sendToThirdParty'
    | 'sendToTransferInstrument'
    | 'thirdPartyFunding'
    | 'useCard'
    | 'useCardCommercial'
    | 'useCardConsumer'
    | 'useCardInRestrictedCountries'
    | 'useCardInRestrictedCountriesCommercial'
    | 'useCardInRestrictedCountriesConsumer'
    | 'useCardInRestrictedIndustries'
    | 'useCardInRestrictedIndustriesCommercial'
    | 'useCardInRestrictedIndustriesConsumer'
    | 'useChargeCard'
    | 'useChargeCardCommercial'
    | 'withdrawFromAtm'
    | 'withdrawFromAtmCommercial'
    | 'withdrawFromAtmConsumer'
    | 'withdrawFromAtmInRestrictedCountries'
    | 'withdrawFromAtmInRestrictedCountriesCommercial'
    | 'withdrawFromAtmInRestrictedCountriesConsumer'
  )[]
  entityIds?: string[] | undefined
  expiresAt: string
}
type AccountHolder = {
  balancePlatform?: string | undefined
  capabilities?: { [x: string]: AccountHolderCapability } | undefined
  contactDetails?: ContactDetails | undefined
  description?: string | undefined
  id: string
  legalEntityId: string
  metadata?: { [x: string]: string } | undefined
  migratedAccountHolderCode?: string | undefined
  primaryBalanceAccount?: string | undefined
  reference?: string | undefined
  status?: 'active' | 'closed' | 'suspended' | undefined
  timeZone?: string | undefined
  verificationDeadlines?: VerificationDeadline[] | undefined
}
type InvalidField = { message: string; name: string; value: string }
type JSONObject = { [x: string]: unknown }
type RestServiceError = {
  detail: string
  errorCode: string
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  response?: JSONObject | undefined
  status: number
  title: string
  type: string
}
type AccountHolderUpdateRequest = {
  balancePlatform?: string | undefined
  capabilities?: { [x: string]: AccountHolderCapability } | undefined
  contactDetails?: ContactDetails | undefined
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
  migratedAccountHolderCode?: string | undefined
  primaryBalanceAccount?: string | undefined
  reference?: string | undefined
  status?: 'active' | 'closed' | 'suspended' | undefined
  timeZone?: string | undefined
  verificationDeadlines?: VerificationDeadline[] | undefined
}
type PlatformPaymentConfiguration = {
  salesDayClosingTime?: string | undefined
  settlementDelayDays?: number | undefined
}
type BalanceAccountBase = {
  accountHolderId: string
  defaultCurrencyCode?: string | undefined
  description?: string | undefined
  id: string
  metadata?: { [x: string]: string } | undefined
  migratedAccountCode?: string | undefined
  platformPaymentConfiguration?: PlatformPaymentConfiguration | undefined
  reference?: string | undefined
  status?: 'active' | 'closed' | 'inactive' | 'suspended' | undefined
  timeZone?: string | undefined
}
type PaginatedBalanceAccountsResponse = {
  balanceAccounts: BalanceAccountBase[]
  hasNext: boolean
  hasPrevious: boolean
}
type GetTaxFormResponse = { content: string; contentType?: 'application/pdf' | undefined }
type TransactionRuleEntityKey = {
  entityReference?: string | undefined
  entityType?: string | undefined
}
type Duration = {
  unit?: 'days' | 'hours' | 'minutes' | 'months' | 'weeks' | undefined
  value?: number | undefined
}
type TransactionRuleInterval = {
  dayOfMonth?: number | undefined
  dayOfWeek?:
    | 'friday'
    | 'monday'
    | 'saturday'
    | 'sunday'
    | 'thursday'
    | 'tuesday'
    | 'wednesday'
    | undefined
  duration?: Duration | undefined
  timeOfDay?: string | undefined
  timeZone?: string | undefined
  type: 'daily' | 'lifetime' | 'monthly' | 'perTransaction' | 'rolling' | 'sliding' | 'weekly'
}
type ActiveNetworkTokensRestriction = { operation: string; value?: number | undefined }
type BrandVariantsRestriction = { operation: string; value?: string[] | undefined }
type BankIdentification = {
  country?: string | undefined
  identification?: string | undefined
  identificationType?: 'bic' | 'iban' | 'routingNumber' | 'sortCode' | undefined
}
type CounterpartyBankRestriction = { operation: string; value?: BankIdentification[] | undefined }
type CounterpartyTypesRestriction = {
  operation: string
  value?: ('balanceAccount' | 'bankAccount' | 'card' | 'transferInstrument')[] | undefined
}
type CountriesRestriction = { operation: string; value?: string[] | undefined }
type DayOfWeekRestriction = {
  operation: string
  value?:
    | ('friday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday')[]
    | undefined
}
type DifferentCurrenciesRestriction = { operation: string; value?: boolean | undefined }
type EntryModesRestriction = {
  operation: string
  value?:
    | (
        | 'barcode'
        | 'chip'
        | 'cof'
        | 'contactless'
        | 'magstripe'
        | 'manual'
        | 'ocr'
        | 'server'
        | 'unknown'
      )[]
    | undefined
}
type InternationalTransactionRestriction = { operation: string; value?: boolean | undefined }
type MatchingTransactionsRestriction = { operation: string; value?: number | undefined }
type MatchingValuesRestriction = {
  operation: string
  value?: ('acquirerId' | 'amount' | 'currency' | 'merchantId' | 'merchantName')[] | undefined
}
type MccsRestriction = { operation: string; value?: string[] | undefined }
type StringMatch = {
  operation?: 'contains' | 'endsWith' | 'isEqualTo' | 'startsWith' | undefined
  value?: string | undefined
}
type MerchantNamesRestriction = { operation: string; value?: StringMatch[] | undefined }
type MerchantAcquirerPair = { acquirerId?: string | undefined; merchantId?: string | undefined }
type MerchantsRestriction = { operation: string; value?: MerchantAcquirerPair[] | undefined }
type ProcessingTypesRestriction = {
  operation: string
  value?:
    | (
        | 'atmWithdraw'
        | 'balanceInquiry'
        | 'ecommerce'
        | 'moto'
        | 'pos'
        | 'recurring'
        | 'token'
        | 'unknown'
      )[]
    | undefined
}
type RiskScores = { mastercard?: number | undefined; visa?: number | undefined }
type RiskScoresRestriction = { operation: string; value?: RiskScores | undefined }
type SameAmountRestriction = { operation: string; value?: boolean | undefined }
type SameCounterpartyRestriction = { operation: string; value?: boolean | undefined }
type SourceAccountTypesRestriction = {
  operation: string
  value?: ('balanceAccount' | 'businessAccount')[] | undefined
}
type TimeOfDay = { endTime?: string | undefined; startTime?: string | undefined }
type TimeOfDayRestriction = { operation: string; value?: TimeOfDay | undefined }
type TokenRequestorsRestriction = { operation: string; value?: string[] | undefined }
type TotalAmountRestriction = { operation: string; value?: Amount | undefined }
type WalletProviderAccountScoreRestriction = { operation: string; value?: number | undefined }
type WalletProviderDeviceScore = { operation: string; value?: number | undefined }
type WalletProviderDeviceType = {
  operation: string
  value?:
    | (
        | 'CARD'
        | 'MOBILE_PHONE'
        | 'OTHER'
        | 'PC'
        | 'TABLET_OR_EREADER'
        | 'UNKNOWN'
        | 'WATCH_OR_WRISTBAND'
        | 'WEARABLE'
      )[]
    | undefined
}
type TransactionRuleRestrictions = {
  activeNetworkTokens?: ActiveNetworkTokensRestriction | undefined
  brandVariants?: BrandVariantsRestriction | undefined
  counterpartyBank?: CounterpartyBankRestriction | undefined
  counterpartyTypes?: CounterpartyTypesRestriction | undefined
  countries?: CountriesRestriction | undefined
  dayOfWeek?: DayOfWeekRestriction | undefined
  differentCurrencies?: DifferentCurrenciesRestriction | undefined
  entryModes?: EntryModesRestriction | undefined
  internationalTransaction?: InternationalTransactionRestriction | undefined
  matchingTransactions?: MatchingTransactionsRestriction | undefined
  matchingValues?: MatchingValuesRestriction | undefined
  mccs?: MccsRestriction | undefined
  merchantNames?: MerchantNamesRestriction | undefined
  merchants?: MerchantsRestriction | undefined
  processingTypes?: ProcessingTypesRestriction | undefined
  riskScores?: RiskScoresRestriction | undefined
  sameAmountRestriction?: SameAmountRestriction | undefined
  sameCounterpartyRestriction?: SameCounterpartyRestriction | undefined
  sourceAccountTypes?: SourceAccountTypesRestriction | undefined
  timeOfDay?: TimeOfDayRestriction | undefined
  tokenRequestors?: TokenRequestorsRestriction | undefined
  totalAmount?: TotalAmountRestriction | undefined
  walletProviderAccountScore?: WalletProviderAccountScoreRestriction | undefined
  walletProviderDeviceScore?: WalletProviderDeviceScore | undefined
  walletProviderDeviceType?: WalletProviderDeviceType | undefined
}
type TransactionRule = {
  aggregationLevel?: string | undefined
  description: string
  endDate?: string | undefined
  entityKey: TransactionRuleEntityKey
  id?: string | undefined
  interval: TransactionRuleInterval
  outcomeType?: 'enforceSCA' | 'hardBlock' | 'scoreBased' | 'timedBlock' | undefined
  overridesRule?: string | undefined
  purpose?: 'compliance' | 'fraud' | 'internalPolicy' | 'policy' | 'system' | undefined
  reference: string
  requestType?: 'authentication' | 'authorization' | 'bankTransfer' | 'tokenization' | undefined
  ruleRestrictions: TransactionRuleRestrictions
  score?: number | undefined
  startDate?: string | undefined
  status?: 'active' | 'inactive' | undefined
  type: 'allowList' | 'blockList' | 'bypass' | 'maxUsage' | 'velocity'
}
type TransactionRulesResponse = { transactionRules?: TransactionRule[] | undefined }
type BalanceAccountInfo = {
  accountHolderId: string
  defaultCurrencyCode?: string | undefined
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
  migratedAccountCode?: string | undefined
  platformPaymentConfiguration?: PlatformPaymentConfiguration | undefined
  reference?: string | undefined
  timeZone?: string | undefined
}
type Balance = {
  available: bigint
  balance: bigint
  currency: string
  pending?: bigint | undefined
  pendingAvailable?: bigint | undefined
  reserved: bigint
}
type BalanceAccount = {
  accountHolderId: string
  balances?: Balance[] | undefined
  defaultCurrencyCode?: string | undefined
  description?: string | undefined
  id: string
  metadata?: { [x: string]: string } | undefined
  migratedAccountCode?: string | undefined
  platformPaymentConfiguration?: PlatformPaymentConfiguration | undefined
  reference?: string | undefined
  status?: 'active' | 'closed' | 'inactive' | 'suspended' | undefined
  timeZone?: string | undefined
}
type SweepCounterparty = {
  balanceAccountId?: string | undefined
  merchantAccount?: string | undefined
  transferInstrumentId?: string | undefined
}
type SweepSchedule = {
  cronExpression?: string | undefined
  type: 'daily' | 'weekly' | 'monthly' | 'balance' | 'cron'
}
type SweepConfigurationV2 = {
  category?: 'bank' | 'internal' | 'platformPayment' | undefined
  counterparty: SweepCounterparty
  currency: string
  description?: string | undefined
  id: string
  priorities?: ('crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire')[] | undefined
  reason?:
    | 'accountHierarchyNotActive'
    | 'amountLimitExceeded'
    | 'approved'
    | 'counterpartyAccountBlocked'
    | 'counterpartyAccountClosed'
    | 'counterpartyAccountNotFound'
    | 'counterpartyAddressRequired'
    | 'counterpartyBankTimedOut'
    | 'counterpartyBankUnavailable'
    | 'directDebitNotSupported'
    | 'error'
    | 'notEnoughBalance'
    | 'refusedByCounterpartyBank'
    | 'routeNotFound'
    | 'transferInstrumentDoesNotExist'
    | 'unknown'
    | undefined
  reasonDetail?: string | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  schedule: SweepSchedule
  status?: 'active' | 'inactive' | undefined
  sweepAmount?: Amount | undefined
  targetAmount?: Amount | undefined
  triggerAmount?: Amount | undefined
  type?: 'pull' | 'push' | undefined
}
type BalanceSweepConfigurationsResponse = {
  hasNext: boolean
  hasPrevious: boolean
  sweeps: SweepConfigurationV2[]
}
type CreateSweepConfigurationV2 = {
  category?: 'bank' | 'internal' | 'platformPayment' | undefined
  counterparty: SweepCounterparty
  currency: string
  description?: string | undefined
  priorities?: ('crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire')[] | undefined
  reason?:
    | 'accountHierarchyNotActive'
    | 'amountLimitExceeded'
    | 'approved'
    | 'counterpartyAccountBlocked'
    | 'counterpartyAccountClosed'
    | 'counterpartyAccountNotFound'
    | 'counterpartyAddressRequired'
    | 'counterpartyBankTimedOut'
    | 'counterpartyBankUnavailable'
    | 'directDebitNotSupported'
    | 'error'
    | 'notEnoughBalance'
    | 'refusedByCounterpartyBank'
    | 'routeNotFound'
    | 'transferInstrumentDoesNotExist'
    | 'unknown'
    | undefined
  reasonDetail?: string | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  schedule: SweepSchedule
  status?: 'active' | 'inactive' | undefined
  sweepAmount?: Amount | undefined
  targetAmount?: Amount | undefined
  triggerAmount?: Amount | undefined
  type?: 'pull' | 'push' | undefined
}
type UpdateSweepConfigurationV2 = {
  category?: 'bank' | 'internal' | 'platformPayment' | undefined
  counterparty?: SweepCounterparty | undefined
  currency?: string | undefined
  description?: string | undefined
  id?: string | undefined
  priorities?: ('crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire')[] | undefined
  reason?:
    | 'accountHierarchyNotActive'
    | 'amountLimitExceeded'
    | 'approved'
    | 'counterpartyAccountBlocked'
    | 'counterpartyAccountClosed'
    | 'counterpartyAccountNotFound'
    | 'counterpartyAddressRequired'
    | 'counterpartyBankTimedOut'
    | 'counterpartyBankUnavailable'
    | 'directDebitNotSupported'
    | 'error'
    | 'notEnoughBalance'
    | 'refusedByCounterpartyBank'
    | 'routeNotFound'
    | 'transferInstrumentDoesNotExist'
    | 'unknown'
    | undefined
  reasonDetail?: string | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  schedule?: SweepSchedule | undefined
  status?: 'active' | 'inactive' | undefined
  sweepAmount?: Amount | undefined
  targetAmount?: Amount | undefined
  triggerAmount?: Amount | undefined
  type?: 'pull' | 'push' | undefined
}
type BalanceAccountUpdateRequest = {
  accountHolderId?: string | undefined
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
  platformPaymentConfiguration?: PlatformPaymentConfiguration | undefined
  reference?: string | undefined
  status?: 'active' | 'closed' | 'inactive' | 'suspended' | undefined
  timeZone?: string | undefined
}
type IbanAccountIdentification = { bic?: string | undefined; iban: string; type: 'iban' }
type BankAccountDetails = {
  accountNumber?: string | undefined
  accountType?: string | undefined
  branchNumber?: string | undefined
  formFactor?: string | undefined
  iban?: string | undefined
  routingNumber?: string | undefined
  sortCode?: string | undefined
  type: string
}
type Authentication = {
  email?: string | undefined
  password?: string | undefined
  phone?: Phone | undefined
}
type BulkAddress = {
  city?: string | undefined
  company?: string | undefined
  country: string
  email?: string | undefined
  houseNumberOrName?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  mobile?: string | undefined
  name?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
  street?: string | undefined
}
type CardConfiguration = {
  activation?: string | undefined
  activationUrl?: string | undefined
  bulkAddress?: BulkAddress | undefined
  cardImageId?: string | undefined
  carrier?: string | undefined
  carrierImageId?: string | undefined
  configurationProfileId: string
  currency?: string | undefined
  envelope?: string | undefined
  insert?: string | undefined
  language?: string | undefined
  logoImageId?: string | undefined
  pinMailer?: string | undefined
  printLine?: string | undefined
  shipmentMethod?: string | undefined
}
type DeliveryAddress = {
  city?: string | undefined
  country: string
  line1?: string | undefined
  line2?: string | undefined
  line3?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type Name = { firstName: string; lastName: string }
type PhoneNumber = {
  phoneCountryCode?: string | undefined
  phoneNumber?: string | undefined
  phoneType?: 'Fax' | 'Landline' | 'Mobile' | 'SIP' | undefined
}
type DeliveryContact = {
  address: DeliveryAddress
  company?: string | undefined
  email?: string | undefined
  fullPhoneNumber?: string | undefined
  name: Name
  phoneNumber?: PhoneNumber | undefined
  webAddress?: string | undefined
}
type Expiry = { month?: string | undefined; year?: string | undefined }
type Card = {
  authentication?: Authentication | undefined
  bin?: string | undefined
  brand: string
  brandVariant: string
  cardholderName: string
  configuration?: CardConfiguration | undefined
  cvc?: string | undefined
  deliveryContact?: DeliveryContact | undefined
  expiration?: Expiry | undefined
  formFactor: 'physical' | 'unknown' | 'virtual'
  lastFour?: string | undefined
  number?: string | undefined
  threeDSecure?: string | undefined
  usage?: string | undefined
}
type PaymentInstrument = {
  additionalBankAccountIdentifications?: IbanAccountIdentification[] | undefined
  balanceAccountId: string
  bankAccount?: BankAccountDetails | undefined
  card?: Card | undefined
  description?: string | undefined
  id: string
  issuingCountryCode: string
  paymentInstrumentGroupId?: string | undefined
  reference?: string | undefined
  replacedById?: string | undefined
  replacementOfId?: string | undefined
  status?: 'active' | 'closed' | 'inactive' | 'suspended' | undefined
  statusComment?: string | undefined
  statusReason?:
    | 'accountClosure'
    | 'damaged'
    | 'endOfLife'
    | 'expired'
    | 'lost'
    | 'other'
    | 'stolen'
    | 'suspectedFraud'
    | 'transactionRule'
    | undefined
  type: 'bankAccount' | 'card'
}
type PaginatedPaymentInstrumentsResponse = {
  hasNext: boolean
  hasPrevious: boolean
  paymentInstruments: PaymentInstrument[]
}
type BalancePlatform = { description?: string | undefined; id: string; status?: string | undefined }
type PaginatedAccountHoldersResponse = {
  accountHolders: AccountHolder[]
  hasNext: boolean
  hasPrevious: boolean
}
type CardOrder = {
  beginDate?: string | undefined
  cardManufacturingProfileId?: string | undefined
  closedDate?: string | undefined
  endDate?: string | undefined
  id?: string | undefined
  lockDate?: string | undefined
  serviceCenter?: string | undefined
  status?: 'closed' | 'open' | undefined
}
type PaginatedGetCardOrderResponse = {
  cardOrders?: CardOrder[] | undefined
  hasNext: boolean
  hasPrevious: boolean
}
type CardOrderItemDeliveryStatus = {
  errorMessage?: string | undefined
  status?:
    | 'created'
    | 'delivered'
    | 'notApplicable'
    | 'processing'
    | 'produced'
    | 'rejected'
    | 'shipped'
    | 'unknown'
    | undefined
  trackingNumber?: string | undefined
}
type CardOrderItem = {
  balancePlatform?: string | undefined
  card?: CardOrderItemDeliveryStatus | undefined
  cardOrderItemId?: string | undefined
  creationDate?: string | undefined
  id?: string | undefined
  paymentInstrumentId?: string | undefined
  pin?: CardOrderItemDeliveryStatus | undefined
  shippingMethod?: string | undefined
}
type PaginatedGetCardOrderItemResponse = {
  data: CardOrderItem[]
  hasNext: boolean
  hasPrevious: boolean
}
type CapitalBalance = { currency: string; fee: bigint; principal: bigint; total: bigint }
type GrantLimit = { amount?: Amount | undefined }
type CapitalGrantAccount = {
  balances?: CapitalBalance[] | undefined
  fundingBalanceAccountId?: string | undefined
  id?: string | undefined
  limits?: GrantLimit[] | undefined
}
type Fee = { amount: Amount }
type RepaymentTerm = { estimatedDays: number; maximumDays?: number | undefined }
type ThresholdRepayment = { amount: Amount }
type Repayment = {
  basisPoints: number
  term?: RepaymentTerm | undefined
  threshold?: ThresholdRepayment | undefined
}
type GrantOffer = {
  accountHolderId: string
  amount?: Amount | undefined
  contractType?: 'cashAdvance' | 'loan' | undefined
  expiresAt?: string | undefined
  fee?: Fee | undefined
  id?: string | undefined
  repayment?: Repayment | undefined
  startsAt?: string | undefined
}
type GrantOffers = { grantOffers: GrantOffer[] }
type PhoneInfo = {
  hashedNumber?: string | undefined
  lastFourDigits?: string | undefined
  number?: string | undefined
}
type DeviceInfo = {
  formFactor?: string | undefined
  osName?: string | undefined
  phone?: PhoneInfo | undefined
}
type NetworkTokenRequestor = { id?: string | undefined; name?: string | undefined }
type NetworkToken = {
  brandVariant?: string | undefined
  creationDate?: string | undefined
  device?: DeviceInfo | undefined
  id?: string | undefined
  paymentInstrumentId?: string | undefined
  status?: 'active' | 'inactive' | 'suspended' | 'closed' | undefined
  tokenLastFour?: string | undefined
  tokenRequestor?: NetworkTokenRequestor | undefined
  type?: string | undefined
}
type GetNetworkTokenResponse = { token: NetworkToken }
type UpdateNetworkTokenRequest = { status?: 'active' | 'suspended' | 'closed' | undefined }
type PaymentInstrumentGroupInfo = {
  balancePlatform: string
  description?: string | undefined
  properties?: { [x: string]: string } | undefined
  reference?: string | undefined
  txVariant: string
}
type PaymentInstrumentGroup = {
  balancePlatform: string
  description?: string | undefined
  id?: string | undefined
  properties?: { [x: string]: string } | undefined
  reference?: string | undefined
  txVariant: string
}
type BankAccountModel = { formFactor?: 'physical' | 'unknown' | 'virtual' | undefined }
type CardInfo = {
  authentication?: Authentication | undefined
  brand: string
  brandVariant: string
  cardholderName: string
  configuration?: CardConfiguration | undefined
  deliveryContact?: DeliveryContact | undefined
  formFactor: 'physical' | 'unknown' | 'virtual'
  threeDSecure?: string | undefined
  usage?: string | undefined
}
type PaymentInstrumentInfo = {
  balanceAccountId: string
  bankAccount?: BankAccountModel | undefined
  card?: CardInfo | undefined
  description?: string | undefined
  issuingCountryCode: string
  paymentInstrumentGroupId?: string | undefined
  reference?: string | undefined
  status?: 'active' | 'closed' | 'inactive' | 'suspended' | undefined
  statusComment?: string | undefined
  statusReason?:
    | 'accountClosure'
    | 'damaged'
    | 'endOfLife'
    | 'expired'
    | 'lost'
    | 'other'
    | 'stolen'
    | 'suspectedFraud'
    | 'transactionRule'
    | undefined
  type: 'bankAccount' | 'card'
}
type PaymentInstrumentRevealRequest = { encryptedKey: string; paymentInstrumentId: string }
type PaymentInstrumentRevealResponse = { encryptedData: string }
type PaymentInstrumentUpdateRequest = {
  balanceAccountId?: string | undefined
  card?: CardInfo | undefined
  status?: 'active' | 'closed' | 'inactive' | 'suspended' | undefined
  statusComment?: string | undefined
  statusReason?:
    | 'accountClosure'
    | 'damaged'
    | 'endOfLife'
    | 'expired'
    | 'lost'
    | 'other'
    | 'stolen'
    | 'suspectedFraud'
    | 'transactionRule'
    | undefined
}
type UpdatePaymentInstrument = {
  additionalBankAccountIdentifications?: IbanAccountIdentification[] | undefined
  balanceAccountId: string
  bankAccount?: BankAccountDetails | undefined
  card?: Card | undefined
  description?: string | undefined
  id: string
  issuingCountryCode: string
  paymentInstrumentGroupId?: string | undefined
  reference?: string | undefined
  replacedById?: string | undefined
  replacementOfId?: string | undefined
  status?: 'active' | 'closed' | 'inactive' | 'suspended' | undefined
  statusComment?: string | undefined
  statusReason?:
    | 'accountClosure'
    | 'damaged'
    | 'endOfLife'
    | 'expired'
    | 'lost'
    | 'other'
    | 'stolen'
    | 'suspectedFraud'
    | 'transactionRule'
    | undefined
  type: 'bankAccount' | 'card'
}
type NetworkTokenActivationDataResponse = { sdkInput?: string | undefined }
type NetworkTokenActivationDataRequest = { sdkOutput?: string | undefined }
type ListNetworkTokensResponse = { networkTokens?: NetworkToken[] | undefined }
type PaymentInstrumentRevealInfo = { cvc: string; expiration: Expiry; pan: string }
type PinChangeRequest = {
  encryptedKey: string
  encryptedPinBlock: string
  paymentInstrumentId: string
  token: string
}
type PinChangeResponse = { status: 'completed' | 'pending' | 'unavailable' }
type RevealPinRequest = { encryptedKey: string; paymentInstrumentId: string }
type RevealPinResponse = { encryptedPinBlock: string; token: string }
type PublicKeyResponse = { publicKey: string; publicKeyExpiryDate: string }
type Device = {
  id?: string | undefined
  name?: string | undefined
  paymentInstrumentId?: string | undefined
  type?: 'ios' | 'android' | 'browser' | undefined
}
type Href = { href?: string | undefined }
type Link = {
  first?: Href | undefined
  last?: Href | undefined
  next?: Href | undefined
  previous?: Href | undefined
  self?: Href | undefined
}
type SearchRegisteredDevicesResponse = {
  data?: Device[] | undefined
  itemsTotal?: number | undefined
  link?: Link | undefined
  pagesTotal?: number | undefined
}
type DelegatedAuthenticationData = { sdkOutput: string }
type RegisterSCARequest = {
  name?: string | undefined
  paymentInstrumentId: string
  strongCustomerAuthentication: DelegatedAuthenticationData
}
type RegisterSCAResponse = {
  id?: string | undefined
  paymentInstrumentId?: string | undefined
  sdkInput?: string | undefined
  success?: boolean | undefined
}
type AssociationInitiateRequest = { ids: string[]; type: 'PaymentInstrument' }
type AssociationInitiateResponse = { sdkInput?: string | undefined }
type AssociationDelegatedAuthenticationData = { sdkOutput: string }
type AssociationFinaliseRequest = {
  ids: string[]
  strongCustomerAuthentication: AssociationDelegatedAuthenticationData
  type: 'PaymentInstrument'
}
type AssociationFinaliseResponse = {
  deviceId?: string | undefined
  ids?: string[] | undefined
  type: 'PAYMENT_INSTRUMENT'
}
type RegisterSCAFinalResponse = { success?: boolean | undefined }
type TransactionRuleInfo = {
  aggregationLevel?: string | undefined
  description: string
  endDate?: string | undefined
  entityKey: TransactionRuleEntityKey
  interval: TransactionRuleInterval
  outcomeType?: 'enforceSCA' | 'hardBlock' | 'scoreBased' | 'timedBlock' | undefined
  overridesRule?: string | undefined
  purpose?: 'compliance' | 'fraud' | 'internalPolicy' | 'policy' | 'system' | undefined
  reference: string
  requestType?: 'authentication' | 'authorization' | 'bankTransfer' | 'tokenization' | undefined
  ruleRestrictions: TransactionRuleRestrictions
  score?: number | undefined
  startDate?: string | undefined
  status?: 'active' | 'inactive' | undefined
  type: 'allowList' | 'blockList' | 'bypass' | 'maxUsage' | 'velocity'
}
type TransactionRuleResponse = { transactionRule?: TransactionRule | undefined }
type AULocalAccountIdentification = { accountNumber: string; bsbCode: string; type: 'auLocal' }
type BRLocalAccountIdentification = {
  accountNumber: string
  bankCode: string
  branchNumber: string
  ispb?: string | undefined
  type: 'brLocal'
}
type CALocalAccountIdentification = {
  accountNumber: string
  accountType?: 'checking' | 'savings' | undefined
  institutionNumber: string
  transitNumber: string
  type: 'caLocal'
}
type CZLocalAccountIdentification = { accountNumber: string; bankCode: string; type: 'czLocal' }
type DKLocalAccountIdentification = { accountNumber: string; bankCode: string; type: 'dkLocal' }
type HKLocalAccountIdentification = { accountNumber: string; clearingCode: string; type: 'hkLocal' }
type HULocalAccountIdentification = { accountNumber: string; type: 'huLocal' }
type NOLocalAccountIdentification = { accountNumber: string; type: 'noLocal' }
type NZLocalAccountIdentification = { accountNumber: string; type: 'nzLocal' }
type AdditionalBankIdentification = {
  code?: string | undefined
  type?: 'auBsbCode' | 'caRoutingNumber' | 'gbSortCode' | 'usRoutingNumber' | undefined
}
type NumberAndBicAccountIdentification = {
  accountNumber: string
  additionalBankIdentification?: AdditionalBankIdentification | undefined
  bic: string
  type: 'numberAndBic'
}
type PLLocalAccountIdentification = { accountNumber: string; type: 'plLocal' }
type SELocalAccountIdentification = {
  accountNumber: string
  clearingNumber: string
  type: 'seLocal'
}
type SGLocalAccountIdentification = {
  accountNumber: string
  bic: string
  type?: 'sgLocal' | undefined
}
type UKLocalAccountIdentification = { accountNumber: string; sortCode: string; type: 'ukLocal' }
type USLocalAccountIdentification = {
  accountNumber: string
  accountType?: 'checking' | 'savings' | undefined
  routingNumber: string
  type: 'usLocal'
}
type BankAccount = {
  accountIdentification:
    | AULocalAccountIdentification
    | BRLocalAccountIdentification
    | CALocalAccountIdentification
    | CZLocalAccountIdentification
    | DKLocalAccountIdentification
    | HKLocalAccountIdentification
    | HULocalAccountIdentification
    | IbanAccountIdentification
    | NOLocalAccountIdentification
    | NZLocalAccountIdentification
    | NumberAndBicAccountIdentification
    | PLLocalAccountIdentification
    | SELocalAccountIdentification
    | SGLocalAccountIdentification
    | UKLocalAccountIdentification
    | USLocalAccountIdentification
}
type Counterparty = {
  bankAccount?: BankAccount | undefined
  transferInstrumentId?: string | undefined
}
type TransferRouteRequest = {
  balanceAccountId?: string | undefined
  balancePlatform: string
  category: 'bank'
  counterparty?: Counterparty | undefined
  country?: string | undefined
  currency: string
  priorities?: ('crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire')[] | undefined
}
type AdditionalBankIdentificationRequirement = {
  additionalBankIdentificationType?:
    | 'auBsbCode'
    | 'caRoutingNumber'
    | 'gbSortCode'
    | 'usRoutingNumber'
    | undefined
  description?: string | undefined
  type: 'additionalBankIdentificationRequirement'
}
type AddressRequirement = {
  description?: string | undefined
  requiredAddressFields?:
    | ('city' | 'country' | 'line1' | 'postalCode' | 'stateOrProvince')[]
    | undefined
  type: 'addressRequirement'
}
type AmountMinMaxRequirement = {
  description?: string | undefined
  max?: bigint | undefined
  min?: bigint | undefined
  type: 'amountMinMaxRequirement'
}
type AmountNonZeroDecimalsRequirement = {
  description?: string | undefined
  type: 'amountNonZeroDecimalsRequirement'
}
type BankAccountIdentificationTypeRequirement = {
  bankAccountIdentificationTypes?:
    | (
        | 'auLocal'
        | 'brLocal'
        | 'caLocal'
        | 'czLocal'
        | 'dkLocal'
        | 'hkLocal'
        | 'huLocal'
        | 'iban'
        | 'inLocal'
        | 'jpLocal'
        | 'legacy'
        | 'mxLocal'
        | 'myLocal'
        | 'noLocal'
        | 'numberAndBic'
        | 'nzLocal'
        | 'plLocal'
        | 'seLocal'
        | 'sgLocal'
        | 'ukLocal'
        | 'usLocal'
      )[]
    | undefined
  description?: string | undefined
  type: 'bankAccountIdentificationTypeRequirement'
}
type IbanAccountIdentificationRequirement = {
  description?: string | undefined
  ibanPrefixes?: string[] | undefined
  type: 'ibanAccountIdentificationRequirement'
}
type PaymentInstrumentRequirement = {
  description?: string | undefined
  issuingCountryCode?: string | undefined
  issuingCountryCodes?: string[] | undefined
  onlyForCrossBalancePlatform?: boolean | undefined
  paymentInstrumentType?: 'BankAccount' | 'Card' | undefined
  type: 'paymentInstrumentRequirement'
}
type USInstantPayoutAddressRequirement = {
  description?: string | undefined
  type: 'usInstantPayoutAddressRequirement'
}
type USInternationalAchAddressRequirement = {
  description?: string | undefined
  type: 'usInternationalAchAddressRequirement'
}
type USInternationalAchPriorityRequirement = {
  description?: string | undefined
  type: 'usInternationalAchPriorityRequirement'
}
type TransferRoute = {
  category?:
    | 'bank'
    | 'card'
    | 'grants'
    | 'interest'
    | 'internal'
    | 'issuedCard'
    | 'migration'
    | 'platformPayment'
    | 'topUp'
    | 'upgrade'
    | undefined
  country?: string | undefined
  currency?: string | undefined
  priority?: 'crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire' | undefined
  requirements?:
    | (
        | AdditionalBankIdentificationRequirement
        | AddressRequirement
        | AmountMinMaxRequirement
        | AmountNonZeroDecimalsRequirement
        | BankAccountIdentificationTypeRequirement
        | IbanAccountIdentificationRequirement
        | PaymentInstrumentRequirement
        | USInstantPayoutAddressRequirement
        | USInternationalAchAddressRequirement
        | USInternationalAchPriorityRequirement
      )[]
    | undefined
}
type TransferRouteResponse = { transferRoutes?: TransferRoute[] | undefined }
type BankAccountIdentificationValidationRequest = {
  accountIdentification:
    | AULocalAccountIdentification
    | BRLocalAccountIdentification
    | CALocalAccountIdentification
    | CZLocalAccountIdentification
    | DKLocalAccountIdentification
    | HKLocalAccountIdentification
    | HULocalAccountIdentification
    | IbanAccountIdentification
    | NOLocalAccountIdentification
    | NZLocalAccountIdentification
    | NumberAndBicAccountIdentification
    | PLLocalAccountIdentification
    | SELocalAccountIdentification
    | SGLocalAccountIdentification
    | UKLocalAccountIdentification
    | USLocalAccountIdentification
}
type Summary = { legalEntityId: string; taxYears: number[] }
type TaxFormSummaryResponse = { data: Summary[] }
type ScheduledPayoutFrequency = string
type BalanceAccountConfiguration = {
  balanceAccountId: string
  balancePlatformPayoutScheduleId: string
  createdAt: string
  currency?: string | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  frequency?: ScheduledPayoutFrequency | undefined
  frequencyValue?: number | undefined
  id?: string | undefined
  maxPayoutAmount?: bigint | undefined
  minPayoutAmount?: bigint | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  retainedAmount?: bigint | undefined
  salesDayClosingTime?: string | undefined
  transferInstrumentId: string
  updatedAt?: string | undefined
}
type BalanceAccountConfigurations = {
  balanceAccountPayoutSchedules: BalanceAccountConfiguration[]
  link: Link
}
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type BalanceAccountConfigurationRequest = {
  balancePlatformPayoutScheduleId: string
  currency?: string | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  frequency?: 'daily' | 'weekly' | 'weekdays' | 'monthly' | undefined
  frequencyValue?: number | undefined
  maxPayoutAmount?: bigint | undefined
  minPayoutAmount?: bigint | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  retainedAmount?: bigint | undefined
  salesDayClosingTime?: string | undefined
  transferInstrumentId: string
}
type BalanceAccountConfigurationUpdate = {
  description?: (string | null) | undefined
  enabled?: (boolean | null) | undefined
  frequency?: 'daily' | 'weekly' | 'weekdays' | 'monthly' | undefined
  frequencyValue?: (number | null) | undefined
  maxPayoutAmount?: (bigint | null) | undefined
  minPayoutAmount?: (bigint | null) | undefined
  reference?: (string | null) | undefined
  referenceForBeneficiary?: (string | null) | undefined
  retainedAmount?: (bigint | null) | undefined
  salesDayClosingTime?: string | undefined
  transferInstrumentId?: string | undefined
}
type ExecutionResult = 'failed' | 'succeeded' | 'skipped'
type PayoutScheduleExecutionDetails = {
  reason?: string | undefined
  reasonCode?: string | undefined
  transferId?: string | undefined
}
type PayoutScheduleExecution = {
  id?: string | undefined
  result?: ExecutionResult | undefined
  resultDetails?: PayoutScheduleExecutionDetails | undefined
  triggeredAt?: string | undefined
}
type PayoutScheduleExecutions = { payoutScheduleExecutions: PayoutScheduleExecution[] }
type TopUpCounterparty = { transferInstrumentId: string }
type AmountDTO = { currency: string; value: bigint }
type TopUpAmount = { fixed?: AmountDTO | undefined; target?: AmountDTO | undefined }
type ScheduleType = 'weekdays' | 'weekly' | 'monthly'
type Schedule = { type: ScheduleType }
type Trigger = { schedule?: Schedule | undefined; threshold: AmountDTO }
type RecurringTopUp = {
  counterparty: TopUpCounterparty
  description: string
  id: string
  referenceForBeneficiary?: string | undefined
  status?: 'active' | 'inactive' | undefined
  topUpAmount: TopUpAmount
  trigger: Trigger
}
type RecurringTopUpsResult = { link: Link; recurringTopUps: RecurringTopUp[] }
type CreateRecurringTopUp = {
  counterparty: TopUpCounterparty
  description: string
  referenceForBeneficiary?: string | undefined
  status?: 'active' | 'inactive' | undefined
  topUpAmount: TopUpAmount
  trigger: Trigger
}
type AmountUpdate = { currency?: string | undefined; value?: bigint | undefined }
type TopUpAmountUpdate = {
  fixed?: AmountUpdate | ({ [x: string]: unknown } | null) | undefined
  target?: AmountUpdate | ({ [x: string]: unknown } | null) | undefined
}
type ScheduleUpdate = { type?: ScheduleType | undefined }
type TriggerUpdate = {
  schedule?: ScheduleUpdate | ({ [x: string]: unknown } | null) | undefined
  threshold?: AmountUpdate | undefined
}
type RecurringTopUpUpdate = {
  description?: string | undefined
  referenceForBeneficiary?: (string | null) | undefined
  status?: 'active' | 'inactive' | undefined
  topUpAmount?: TopUpAmountUpdate | undefined
  trigger?: TriggerUpdate | undefined
}
type PayoutSweepExecutionDetails = {
  reason?: string | undefined
  reasonCode?: string | undefined
  sweepConfigurationDisabled?: boolean | undefined
  transferId?: string | undefined
}
type PayoutSweepExecution = {
  id?: string | undefined
  result?: ExecutionResult | undefined
  resultDetails?: PayoutSweepExecutionDetails | undefined
  triggeredAt?: string | undefined
}
type PayoutSweepExecutions = { link: Link; sweepExecutions: PayoutSweepExecution[] }
type Scope = 'perDay' | 'perTransaction'
type TransferType = 'instant' | 'all'
type LimitStatus = 'active' | 'inactive' | 'pendingSCA' | 'scheduled'
type ScaExemption =
  | 'setByPlatform'
  | 'initialLimit'
  | 'lowerLimit'
  | 'notRegulated'
  | 'alreadyPerformed'
type ScaStatus = 'notPerformed' | 'pending' | 'performed'
type ScaInformation = { exemption?: ScaExemption | undefined; status: ScaStatus }
type TransferLimit = {
  amount: Amount
  endsAt?: string | undefined
  id: string
  limitStatus: LimitStatus
  reference?: string | undefined
  scaInformation?: ScaInformation | undefined
  scope: Scope
  startsAt: string
  transferType: TransferType
}
type TransferLimitListResponse = { transferLimits: TransferLimit[] }
type CreateScaInformation = {
  exemption?: ScaExemption | undefined
  scaOnApproval?: boolean | undefined
}
type CreateTransferLimitRequest = {
  amount: Amount
  endsAt?: string | undefined
  reference?: string | undefined
  scaInformation?: CreateScaInformation | undefined
  scope: Scope
  startsAt?: string | undefined
  transferType: TransferType
}
type ApproveTransferLimitRequest = { transferLimitIds: string[] }
type BalancePlatformConfiguration = {
  automaticApplication?: boolean | undefined
  balancePlatformId: string
  countryCode?: string | undefined
  createdAt: string
  currency?: string | undefined
  defaultDescription?: string | undefined
  defaultFrequency?: ScheduledPayoutFrequency | undefined
  defaultFrequencyValue?: number | undefined
  defaultReference?: string | undefined
  defaultReferenceForBeneficiary?: string | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  maxPayoutAmount?: bigint | undefined
  minPayoutAmount?: bigint | undefined
  payoutScheduleDescription: string
  retainedAmount?: bigint | undefined
  updatedAt?: string | undefined
  userSettlementDelay: number
  userSettlementTime: string
  userSettlementTimeZone: string
}
type BalancePlatformConfigurations = {
  balancePlatformPayoutSchedules: BalancePlatformConfiguration[]
}
type SettingStatus = string
type Target = { id: string; type: 'balanceAccount' | 'accountHolder' | 'balancePlatform' }
type SettingType = 'balance'
type WebhookSetting = {
  currency: string
  id: string
  status: SettingStatus
  target: Target
  type: SettingType
}
type WebhookSettings = { webhookSettings?: WebhookSetting[] | undefined }
type Condition = {
  balanceType: 'balance' | 'available' | 'pending' | 'reserved'
  conditionType: 'greaterThan' | 'greaterThanOrEqual' | 'lessThan' | 'lessThanOrEqual'
  value: bigint
}
type BalanceWebhookSettingInfo = {
  conditions?: Condition[] | undefined
  currency: string
  status: 'active' | 'inactive'
  target: Target
  type: 'balance'
}
type TargetUpdate = {
  id?: string | undefined
  type?: 'balanceAccount' | 'accountHolder' | 'balancePlatform' | undefined
}
type BalanceWebhookSettingInfoUpdate = {
  conditions?: (Condition[] | null) | undefined
  currency?: string | undefined
  status?: 'active' | 'inactive' | undefined
  target?: TargetUpdate | undefined
  type?: 'balance' | undefined
}
type MandatePartyIdentification = { fullName?: string | undefined }
type MandateAccountIdentification = { type: string }
type MandateBankAccount = {
  accountHolder: MandatePartyIdentification
  accountIdentification: MandateAccountIdentification
}
type MandateStatus = 'pending' | 'approved' | 'cancelled'
type MandateType = 'bacs'
type Mandate = {
  balanceAccountId?: string | undefined
  counterparty?: MandateBankAccount | undefined
  createdAt?: string | undefined
  id?: string | undefined
  paymentInstrumentId?: string | undefined
  status?: MandateStatus | undefined
  type?: MandateType | undefined
  updatedAt?: string | undefined
}
type ListMandatesResponse = { link: Link; mandates: Mandate[] }
type MandateUpdate = { paymentInstrumentId?: (string | null) | undefined }
type AuthorisedCardUsers = { legalEntityIds?: string[] | undefined }
type ScaEntityType = 'accountHolder' | 'legalEntity' | 'paymentInstrument'
type ScaDeviceType = 'browser' | 'ios' | 'android'
type AssociationStatus = 'pendingApproval' | 'active'
type AssociationListing = {
  createdAt: string
  entityId: string
  entityType: ScaEntityType
  scaDeviceId: string
  scaDeviceName?: string | undefined
  scaDeviceType: ScaDeviceType
  status: AssociationStatus
}
type ListAssociationsResponse = {
  _links: Link
  data: AssociationListing[]
  itemsTotal: number
  pagesTotal: number
}
type RemoveAssociationRequest = {
  entityId: string
  entityType: ScaEntityType
  scaDeviceIds: string[]
}
type ApproveAssociationRequest = {
  entityId: string
  entityType: ScaEntityType
  scaDeviceIds: string[]
  status: AssociationStatus
}
type Association = {
  entityId: string
  entityType: ScaEntityType
  scaDeviceId: string
  status: AssociationStatus
}
type ApproveAssociationResponse = { scaAssociations: Association[] }
type BeginScaDeviceRegistrationRequest = { name: string; sdkOutput: string }
type ScaDevice = { id: string; name: string; type: ScaDeviceType }
type BeginScaDeviceRegistrationResponse = {
  scaDevice?: ScaDevice | undefined
  sdkInput?: string | undefined
}
type FinishScaDeviceRegistrationRequest = { sdkOutput: string }
type FinishScaDeviceRegistrationResponse = { scaDevice?: ScaDevice | undefined }
type ScaEntity = { id: string; type: ScaEntityType }
type SubmitScaAssociationRequest = { entities: ScaEntity[] }
type SubmitScaAssociationResponse = { scaAssociations: Association[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accountHolders': {
      $post:
        | {
            input: { json: AccountHolderInfo }
            output: AccountHolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountHolderInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountHolderInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountHolderInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccountHolderInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AccountHolderInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accountHolders/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AccountHolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AccountHolderUpdateRequest }
            output: AccountHolder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AccountHolderUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AccountHolderUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AccountHolderUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AccountHolderUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: AccountHolderUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accountHolders/:id/balanceAccounts': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedBalanceAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accountHolders/:id/taxForms': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                formType: 'US1099k' | 'US1099nec'
                year: number
                legalEntityId?: string | undefined
              }
            }
            output: GetTaxFormResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                formType: 'US1099k' | 'US1099nec'
                year: number
                legalEntityId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                formType: 'US1099k' | 'US1099nec'
                year: number
                legalEntityId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                formType: 'US1099k' | 'US1099nec'
                year: number
                legalEntityId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                formType: 'US1099k' | 'US1099nec'
                year: number
                legalEntityId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                formType: 'US1099k' | 'US1099nec'
                year: number
                legalEntityId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: {
                formType: 'US1099k' | 'US1099nec'
                year: number
                legalEntityId?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accountHolders/:id/transactionRules': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransactionRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts': {
      $post:
        | {
            input: { json: BalanceAccountInfo }
            output: BalanceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BalanceAccountInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BalanceAccountInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BalanceAccountInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BalanceAccountInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BalanceAccountInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/sweeps': {
      $get:
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: BalanceSweepConfigurationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateSweepConfigurationV2 }
            output: SweepConfigurationV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateSweepConfigurationV2 }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateSweepConfigurationV2 }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateSweepConfigurationV2 }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateSweepConfigurationV2 }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateSweepConfigurationV2 }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/sweeps/:sweepId': {
      $get:
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: SweepConfigurationV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              json: UpdateSweepConfigurationV2
            }
            output: SweepConfigurationV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              json: UpdateSweepConfigurationV2
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              json: UpdateSweepConfigurationV2
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              json: UpdateSweepConfigurationV2
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              json: UpdateSweepConfigurationV2
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              json: UpdateSweepConfigurationV2
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BalanceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BalanceAccountUpdateRequest }
            output: BalanceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BalanceAccountUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BalanceAccountUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: BalanceAccountUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BalanceAccountUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: BalanceAccountUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:id/paymentInstruments': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: string | undefined
              }
            }
            output: PaginatedPaymentInstrumentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                status?: string | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:id/transactionRules': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransactionRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balancePlatforms/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BalancePlatform
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balancePlatforms/:id/accountHolders': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedAccountHoldersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balancePlatforms/:id/transactionRules': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransactionRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cardorders': {
      $get:
        | {
            input: {
              query: {
                id?: string | undefined
                cardManufacturingProfileId?: string | undefined
                status?: string | undefined
                txVariantCode?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                lockedSince?: string | undefined
                lockedUntil?: string | undefined
                serviceCenter?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: PaginatedGetCardOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | undefined
                cardManufacturingProfileId?: string | undefined
                status?: string | undefined
                txVariantCode?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                lockedSince?: string | undefined
                lockedUntil?: string | undefined
                serviceCenter?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string | undefined
                cardManufacturingProfileId?: string | undefined
                status?: string | undefined
                txVariantCode?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                lockedSince?: string | undefined
                lockedUntil?: string | undefined
                serviceCenter?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                id?: string | undefined
                cardManufacturingProfileId?: string | undefined
                status?: string | undefined
                txVariantCode?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                lockedSince?: string | undefined
                lockedUntil?: string | undefined
                serviceCenter?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                id?: string | undefined
                cardManufacturingProfileId?: string | undefined
                status?: string | undefined
                txVariantCode?: string | undefined
                createdSince?: string | undefined
                createdUntil?: string | undefined
                lockedSince?: string | undefined
                lockedUntil?: string | undefined
                serviceCenter?: string | undefined
                offset?: number | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cardorders/:id/items': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: PaginatedGetCardOrderItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { offset?: number | undefined; limit?: number | undefined }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/grantAccounts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: CapitalGrantAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/grantOffers': {
      $get:
        | {
            input: { query: { accountHolderId: string } }
            output: GrantOffers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accountHolderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accountHolderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { accountHolderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { accountHolderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { accountHolderId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/grantOffers/:grantOfferId': {
      $get:
        | {
            input: { param: { grantOfferId: string } }
            output: GrantOffer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { grantOfferId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { grantOfferId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { grantOfferId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { grantOfferId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { grantOfferId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/networkTokens/:networkTokenId': {
      $get:
        | {
            input: { param: { networkTokenId: string } }
            output: GetNetworkTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkTokenId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { networkTokenId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { networkTokenId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { networkTokenId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { networkTokenId: string } } & { json: UpdateNetworkTokenRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { networkTokenId: string } } & { json: UpdateNetworkTokenRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { networkTokenId: string } } & { json: UpdateNetworkTokenRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { networkTokenId: string } } & { json: UpdateNetworkTokenRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { networkTokenId: string } } & { json: UpdateNetworkTokenRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstrumentGroups': {
      $post:
        | {
            input: { json: PaymentInstrumentGroupInfo }
            output: PaymentInstrumentGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInstrumentGroupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentInstrumentGroupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentInstrumentGroupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentInstrumentGroupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PaymentInstrumentGroupInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstrumentGroups/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentInstrumentGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstrumentGroups/:id/transactionRules': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransactionRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments': {
      $post:
        | {
            input: { json: PaymentInstrumentInfo }
            output: PaymentInstrument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInstrumentInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentInstrumentInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentInstrumentInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentInstrumentInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PaymentInstrumentInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments/reveal': {
      $post:
        | {
            input: { json: PaymentInstrumentRevealRequest }
            output: PaymentInstrumentRevealResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInstrumentRevealRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentInstrumentRevealRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentInstrumentRevealRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentInstrumentRevealRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PaymentInstrumentRevealRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentInstrument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: PaymentInstrumentUpdateRequest }
            output: UpdatePaymentInstrument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PaymentInstrumentUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PaymentInstrumentUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PaymentInstrumentUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PaymentInstrumentUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PaymentInstrumentUpdateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments/:id/networkTokenActivationData': {
      $get:
        | {
            input: { param: { id: string } }
            output: NetworkTokenActivationDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { id: string } } & { json: NetworkTokenActivationDataRequest }
            output: NetworkTokenActivationDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: NetworkTokenActivationDataRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkTokenActivationDataRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkTokenActivationDataRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NetworkTokenActivationDataRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: NetworkTokenActivationDataRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments/:id/networkTokens': {
      $get:
        | {
            input: { param: { id: string } }
            output: ListNetworkTokensResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments/:id/reveal': {
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentInstrumentRevealInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments/:id/transactionRules': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransactionRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pins/change': {
      $post:
        | {
            input: { json: PinChangeRequest }
            output: PinChangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PinChangeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PinChangeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PinChangeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PinChangeRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/pins/reveal': {
      $post:
        | {
            input: { json: RevealPinRequest }
            output: RevealPinResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RevealPinRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RevealPinRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RevealPinRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RevealPinRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/publicKey': {
      $get:
        | {
            input: { query: { purpose?: string | undefined; format?: string | undefined } }
            output: PublicKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { purpose?: string | undefined; format?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { purpose?: string | undefined; format?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { purpose?: string | undefined; format?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { purpose?: string | undefined; format?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/registeredDevices': {
      $get:
        | {
            input: {
              query: {
                paymentInstrumentId: string
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: SearchRegisteredDevicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                paymentInstrumentId: string
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                paymentInstrumentId: string
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                paymentInstrumentId: string
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                paymentInstrumentId: string
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                paymentInstrumentId: string
                pageNumber?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: RegisterSCARequest }
            output: RegisterSCAResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/registeredDevices/:deviceId/associations': {
      $post:
        | {
            input: { param: { deviceId: string } } & { json: AssociationInitiateRequest }
            output: AssociationInitiateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationInitiateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationInitiateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationInitiateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationInitiateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationInitiateRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { deviceId: string } } & { json: AssociationFinaliseRequest }
            output: AssociationFinaliseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationFinaliseRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationFinaliseRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationFinaliseRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationFinaliseRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { deviceId: string } } & { json: AssociationFinaliseRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/registeredDevices/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { paymentInstrumentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { paymentInstrumentId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { paymentInstrumentId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { paymentInstrumentId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { paymentInstrumentId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { paymentInstrumentId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: RegisterSCARequest }
            output: RegisterSCAFinalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: RegisterSCARequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactionRules': {
      $post:
        | {
            input: { json: TransactionRuleInfo }
            output: TransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactionRules/:transactionRuleId': {
      $get:
        | {
            input: { param: { transactionRuleId: string } }
            output: TransactionRuleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { transactionRuleId: string } }
            output: TransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transactionRuleId: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { transactionRuleId: string } } & { json: TransactionRuleInfo }
            output: TransactionRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transactionRuleId: string } } & { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transactionRuleId: string } } & { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transactionRuleId: string } } & { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transactionRuleId: string } } & { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transactionRuleId: string } } & { json: TransactionRuleInfo }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transferRoutes/calculate': {
      $post:
        | {
            input: { json: TransferRouteRequest }
            output: TransferRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRouteRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TransferRouteRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TransferRouteRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TransferRouteRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/validateBankAccountIdentification': {
      $post:
        | {
            input: { json: BankAccountIdentificationValidationRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: BankAccountIdentificationValidationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BankAccountIdentificationValidationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BankAccountIdentificationValidationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BankAccountIdentificationValidationRequest }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accountHolders/:id/taxFormSummary': {
      $get: {
        input: { param: { id: string } } & { query: { formType: string } }
        output: TaxFormSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/payoutSchedules': {
      $get:
        | {
            input: { param: { balanceAccountId: string } } & {
              query: {
                currency?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: BalanceAccountConfigurations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: {
                currency?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: {
                currency?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: {
                currency?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: {
                currency?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { balanceAccountId: string } } & {
              json: BalanceAccountConfigurationRequest
            }
            output: BalanceAccountConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              json: BalanceAccountConfigurationRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              json: BalanceAccountConfigurationRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              json: BalanceAccountConfigurationRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              json: BalanceAccountConfigurationRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id': {
      $get:
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: BalanceAccountConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              json: BalanceAccountConfigurationUpdate
            }
            output: BalanceAccountConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              json: BalanceAccountConfigurationUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              json: BalanceAccountConfigurationUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              json: BalanceAccountConfigurationUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              json: BalanceAccountConfigurationUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/payoutSchedules/:id/executions': {
      $get:
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              query: { results?: string | undefined; limit?: number | undefined; offset: number }
            }
            output: PayoutScheduleExecutions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              query: { results?: string | undefined; limit?: number | undefined; offset: number }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              query: { results?: string | undefined; limit?: number | undefined; offset: number }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              query: { results?: string | undefined; limit?: number | undefined; offset: number }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; id: string } } & {
              query: { results?: string | undefined; limit?: number | undefined; offset: number }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/recurringTopUps': {
      $get:
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: RecurringTopUpsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateRecurringTopUp }
            output: RecurringTopUp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateRecurringTopUp }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateRecurringTopUp }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateRecurringTopUp }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string } } & { json: CreateRecurringTopUp }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/recurringTopUps/:topUpId': {
      $delete:
        | {
            input: { param: { balanceAccountId: string; topUpId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { balanceAccountId: string; topUpId: string } } & {
              json: RecurringTopUpUpdate
            }
            output: RecurringTopUp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } } & {
              json: RecurringTopUpUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } } & {
              json: RecurringTopUpUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } } & {
              json: RecurringTopUpUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balanceAccountId: string; topUpId: string } } & {
              json: RecurringTopUpUpdate
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balanceAccounts/:balanceAccountId/sweeps/:sweepId/executions': {
      $get:
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              query: {
                results?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: PayoutSweepExecutions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              query: {
                results?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              query: {
                results?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              query: {
                results?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceAccountId: string; sweepId: string } } & {
              query: {
                results?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balanceAccounts/:id/transferLimits': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                scope?: Scope | undefined
                transferType?: TransferType | undefined
                status?: LimitStatus | undefined
              }
            }
            output: TransferLimitListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                scope?: Scope | undefined
                transferType?: TransferType | undefined
                status?: LimitStatus | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                scope?: Scope | undefined
                transferType?: TransferType | undefined
                status?: LimitStatus | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: CreateTransferLimitRequest }
            output: TransferLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: CreateTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: CreateTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: CreateTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balanceAccounts/:id/transferLimits/approve': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: ApproveTransferLimitRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: ApproveTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: ApproveTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'WWW-Authenticate'?: string | undefined }
            } & { json: ApproveTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balanceAccounts/:id/transferLimits/current': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { scope?: Scope | undefined; transferType?: TransferType | undefined }
            }
            output: TransferLimitListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { scope?: Scope | undefined; transferType?: TransferType | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { scope?: Scope | undefined; transferType?: TransferType | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balanceAccounts/:id/transferLimits/:transferLimitId': {
      $get:
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: TransferLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balancePlatforms/:balancePlatformId/payoutSchedules': {
      $get:
        | {
            input: { param: { balancePlatformId: string } } & {
              query: { countryCode?: string | undefined; currency?: string | undefined }
            }
            output: BalancePlatformConfigurations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balancePlatformId: string } } & {
              query: { countryCode?: string | undefined; currency?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balancePlatformId: string } } & {
              query: { countryCode?: string | undefined; currency?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balancePlatformId: string } } & {
              query: { countryCode?: string | undefined; currency?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balancePlatformId: string } } & {
              query: { countryCode?: string | undefined; currency?: string | undefined }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balancePlatforms/:balancePlatformId/payoutSchedules/:id': {
      $get:
        | {
            input: { param: { balancePlatformId: string; id: string } }
            output: BalancePlatformConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balancePlatformId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balancePlatformId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balancePlatformId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balancePlatformId: string; id: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings': {
      $get:
        | {
            input: { param: { balancePlatformId: string; webhookId: string } }
            output: WebhookSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { balancePlatformId: string; webhookId: string } } & {
              json: BalanceWebhookSettingInfo
            }
            output: WebhookSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } } & {
              json: BalanceWebhookSettingInfo
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } } & {
              json: BalanceWebhookSettingInfo
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } } & {
              json: BalanceWebhookSettingInfo
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } } & {
              json: BalanceWebhookSettingInfo
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } } & {
              json: BalanceWebhookSettingInfo
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string } } & {
              json: BalanceWebhookSettingInfo
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balancePlatforms/:balancePlatformId/webhooks/:webhookId/settings/:settingId': {
      $get:
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: WebhookSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balancePlatformId: string; webhookId: string; settingId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: {
              param: { balancePlatformId: string; webhookId: string; settingId: string }
            } & { json: BalanceWebhookSettingInfoUpdate }
            output: WebhookSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { balancePlatformId: string; webhookId: string; settingId: string }
            } & { json: BalanceWebhookSettingInfoUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { balancePlatformId: string; webhookId: string; settingId: string }
            } & { json: BalanceWebhookSettingInfoUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { balancePlatformId: string; webhookId: string; settingId: string }
            } & { json: BalanceWebhookSettingInfoUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { balancePlatformId: string; webhookId: string; settingId: string }
            } & { json: BalanceWebhookSettingInfoUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { balancePlatformId: string; webhookId: string; settingId: string }
            } & { json: BalanceWebhookSettingInfoUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { balancePlatformId: string; webhookId: string; settingId: string }
            } & { json: BalanceWebhookSettingInfoUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/balancePlatforms/:id/transferLimits': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                scope?: Scope | undefined
                transferType?: TransferType | undefined
                status?: LimitStatus | undefined
              }
            }
            output: TransferLimitListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                scope?: Scope | undefined
                transferType?: TransferType | undefined
                status?: LimitStatus | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                scope?: Scope | undefined
                transferType?: TransferType | undefined
                status?: LimitStatus | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CreateTransferLimitRequest }
            output: TransferLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CreateTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateTransferLimitRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/balancePlatforms/:id/transferLimits/:transferLimitId': {
      $get:
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: TransferLimit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; transferLimitId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/mandates': {
      $get:
        | {
            input: {
              query: {
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                cursor?: string | undefined
              }
            }
            output: ListMandatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                cursor?: string | undefined
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mandates/:mandateId': {
      $get:
        | {
            input: { param: { mandateId: string } }
            output: Mandate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { mandateId: string } } & { json: MandateUpdate }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { mandateId: string } } & { json: MandateUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mandateId: string } } & { json: MandateUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mandateId: string } } & { json: MandateUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: string } } & { json: MandateUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: string } } & { json: MandateUpdate }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/mandates/:mandateId/cancel': {
      $post:
        | { input: { param: { mandateId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { mandateId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentInstruments/:paymentInstrumentId/authorisedCardUsers': {
      $get:
        | {
            input: { param: { paymentInstrumentId: string } }
            output: AuthorisedCardUsers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentInstrumentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentInstrumentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentInstrumentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentInstrumentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { paymentInstrumentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { paymentInstrumentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentInstrumentId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
      $patch:
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentInstrumentId: string } } & { json: AuthorisedCardUsers }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/scaAssociations': {
      $get:
        | {
            input: {
              query: {
                entityType: ScaEntityType
                entityId: string
                pageSize: number
                pageNumber: number
              }
            }
            output: ListAssociationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                entityType: ScaEntityType
                entityId: string
                pageSize: number
                pageNumber: number
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                entityType: ScaEntityType
                entityId: string
                pageSize: number
                pageNumber: number
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                entityType: ScaEntityType
                entityId: string
                pageSize: number
                pageNumber: number
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                entityType: ScaEntityType
                entityId: string
                pageSize: number
                pageNumber: number
              }
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: RemoveAssociationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: RemoveAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: RemoveAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: RemoveAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: ApproveAssociationRequest }
            output: ApproveAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: ApproveAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: ApproveAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'WWW-Authenticate': string } } & { json: ApproveAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scaDevices': {
      $post:
        | {
            input: { json: BeginScaDeviceRegistrationRequest }
            output: BeginScaDeviceRegistrationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BeginScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BeginScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BeginScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BeginScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BeginScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scaDevices/:deviceId': {
      $delete:
        | { input: { param: { deviceId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { deviceId: string } }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { deviceId: string } } & { json: FinishScaDeviceRegistrationRequest }
            output: FinishScaDeviceRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: string } } & { json: FinishScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & { json: FinishScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deviceId: string } } & { json: FinishScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deviceId: string } } & { json: FinishScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & { json: FinishScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { deviceId: string } } & { json: FinishScaDeviceRegistrationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/scaDevices/:deviceId/scaAssociations': {
      $post:
        | {
            input: { param: { deviceId: string } } & { json: SubmitScaAssociationRequest }
            output: SubmitScaAssociationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { deviceId: string } } & { json: SubmitScaAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deviceId: string } } & { json: SubmitScaAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deviceId: string } } & { json: SubmitScaAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deviceId: string } } & { json: SubmitScaAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deviceId: string } } & { json: SubmitScaAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { deviceId: string } } & { json: SubmitScaAssociationRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
