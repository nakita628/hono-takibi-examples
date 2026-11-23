type Money = {
  amount: number
  currency:
    | 'AUD'
    | 'BRL'
    | 'CAD'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'IDR'
    | 'INR'
    | 'JPY'
    | 'NZD'
    | 'SGD'
    | 'USD'
    | 'ZAR'
    | 'CNY'
    | 'VND'
    | 'MYR'
    | 'CHF'
}
type AccountAddress = {
  address1?: string | undefined
  address2?: string | undefined
  address3?: string | undefined
  city?: string | undefined
  country?: string | undefined
  sourceType?: string | undefined
  state?: string | undefined
  street?: string | undefined
  type?:
    | 'HOME'
    | 'BUSINESS'
    | 'POBOX'
    | 'RETAIL'
    | 'OFFICE'
    | 'SMALL_BUSINESS'
    | 'COMMUNICATION'
    | 'PERMANENT'
    | 'STATEMENT_ADDRESS'
    | 'PAYMENT'
    | 'PAYOFF'
    | 'UNKNOWN'
    | undefined
  zip?: string | undefined
}
type AutoRefresh = {
  additionalStatus?:
    | 'SCHEDULED'
    | 'TEMP_ERROR'
    | 'SITE_BLOCKING'
    | 'SITE_NOT_SUPPORTED'
    | 'REAL_TIME_MFA_REQUIRED'
    | 'USER_ACTION_REQUIRED'
    | 'UNSUBSCRIBED'
    | 'MANUAL_ACCOUNT'
    | undefined
  asOfDate?: string | undefined
  status?: 'ENABLED' | 'DISABLED' | undefined
}
type BankTransferCode = {
  id?: string | undefined
  type?: 'BSB' | 'IFSC' | 'ROUTING_NUMBER' | 'SORT_CODE' | undefined
}
type CoverageAmount = {
  cover?: Money | undefined
  limitType?: 'IN_NETWORK' | 'OUT_NETWORK' | undefined
  met?: Money | undefined
  type?:
    | 'DEDUCTIBLE'
    | 'OUT_OF_POCKET'
    | 'ANNUAL_BENEFIT'
    | 'MAX_BENEFIT'
    | 'COVERAGE_AMOUNT'
    | 'MONTHLY_BENEFIT'
    | 'OTHER'
    | undefined
  unitType?: 'PER_FAMILY' | 'PER_MEMBER' | undefined
}
type Coverage = {
  amount?: CoverageAmount[] | undefined
  endDate?: string | undefined
  planType?: 'PPO' | 'HMO' | 'UNKNOWN' | undefined
  startDate?: string | undefined
  type?:
    | 'VISION'
    | 'DENTAL'
    | 'MEDICAL'
    | 'HEALTH'
    | 'DEATH_COVER'
    | 'TOTAL_PERMANENT_DISABILITY'
    | 'ACCIDENTAL_DEATH_COVER'
    | 'INCOME_PROTECTION'
    | 'DEATH_TOTAL_PERMANENT_DISABILITY'
    | 'OTHER'
    | undefined
}
type AccountDataset = {
  additionalStatus?:
    | 'LOGIN_IN_PROGRESS'
    | 'DATA_RETRIEVAL_IN_PROGRESS'
    | 'ACCT_SUMMARY_RECEIVED'
    | 'AVAILABLE_DATA_RETRIEVED'
    | 'PARTIAL_DATA_RETRIEVED'
    | 'DATA_RETRIEVAL_FAILED'
    | 'DATA_NOT_AVAILABLE'
    | 'ACCOUNT_LOCKED'
    | 'ADDL_AUTHENTICATION_REQUIRED'
    | 'BETA_SITE_DEV_IN_PROGRESS'
    | 'CREDENTIALS_UPDATE_NEEDED'
    | 'INCORRECT_CREDENTIALS'
    | 'PROPERTY_VALUE_NOT_AVAILABLE'
    | 'INVALID_ADDL_INFO_PROVIDED'
    | 'REQUEST_TIME_OUT'
    | 'SITE_BLOCKING_ERROR'
    | 'UNEXPECTED_SITE_ERROR'
    | 'SITE_NOT_SUPPORTED'
    | 'SITE_UNAVAILABLE'
    | 'TECH_ERROR'
    | 'USER_ACTION_NEEDED_AT_SITE'
    | 'SITE_SESSION_INVALIDATED'
    | 'NEW_AUTHENTICATION_REQUIRED'
    | 'DATASET_NOT_SUPPORTED'
    | 'ENROLLMENT_REQUIRED_FOR_DATASET'
    | 'CONSENT_REQUIRED'
    | 'CONSENT_EXPIRED'
    | 'CONSENT_REVOKED'
    | 'INCORRECT_OAUTH_TOKEN'
    | 'MIGRATION_IN_PROGRESS'
    | undefined
  lastUpdateAttempt?: string | undefined
  lastUpdated?: string | undefined
  name?: 'BASIC_AGG_DATA' | 'ADVANCE_AGG_DATA' | 'ACCT_PROFILE' | 'DOCUMENT' | undefined
  nextUpdateScheduled?: string | undefined
  updateEligibility?:
    | 'ALLOW_UPDATE'
    | 'ALLOW_UPDATE_WITH_CREDENTIALS'
    | 'DISALLOW_UPDATE'
    | undefined
}
type FullAccountNumberList = {
  paymentAccountNumber?: string | undefined
  unmaskedAccountNumber?: string | undefined
}
type Identifier = {
  type?: 'NIE' | 'DNI' | 'EIN' | 'BN' | 'AADHAR' | 'NIN' | 'NRIC' | undefined
  value?: string | undefined
}
type Name = {
  first?: string | undefined
  fullName?: string | undefined
  last?: string | undefined
  middle?: string | undefined
}
type AccountHolder = {
  gender?: string | undefined
  identifier?: Identifier[] | undefined
  name?: Name | undefined
  ownership?:
    | 'PRIMARY'
    | 'SECONDARY'
    | 'CUSTODIAN'
    | 'OTHERS'
    | 'POWER_OF_ATTORNEY'
    | 'TRUSTEE'
    | 'JOINT_OWNER'
    | 'BENEFICIARY'
    | 'AAS'
    | 'BUSINESS'
    | 'DBA'
    | 'TRUST'
    | undefined
}
type LoanPayoffDetails = {
  outstandingBalance?: Money | undefined
  payByDate?: string | undefined
  payoffAmount?: Money | undefined
}
type PaymentIdentifier = {
  type?: 'REFERENCE_NUMBER' | 'PLATFORM_CODE' | undefined
  value?: string | undefined
}
type PaymentBankTransferCode = {
  id?: string | undefined
  type?: 'ROUTING_NUMBER' | 'BSB' | 'IFSC' | 'SORT_CODE' | undefined
}
type PaymentProfile = {
  address?: AccountAddress[] | undefined
  identifier?: PaymentIdentifier | undefined
  paymentBankTransferCode?: PaymentBankTransferCode | undefined
}
type Email = {
  type?: 'PRIMARY' | 'SECONDARY' | 'PERSONAL' | 'WORK' | 'OTHERS' | undefined
  value?: string | undefined
}
type PhoneNumber = {
  type?: 'HOME' | 'WORK' | 'LANDLINE' | 'MOBILE' | undefined
  value?: string | undefined
}
type AccountProfile = {
  address?: AccountAddress[] | undefined
  email?: Email[] | undefined
  identifier?: Identifier[] | undefined
  phoneNumber?: PhoneNumber[] | undefined
}
type RewardBalance = {
  balance?: number | undefined
  balanceToLevel?: string | undefined
  balanceToReward?: string | undefined
  balanceType?:
    | 'EXPIRING_BALANCE'
    | 'BALANCE_TO_LEVEL'
    | 'BALANCE_TO_REWARD'
    | 'BALANCE'
    | 'TOTAL_BALANCE'
    | undefined
  description?: string | undefined
  expiryDate?: string | undefined
  units?: string | undefined
}
type Account = {
  '401kLoan'?: Money | undefined
  CONTAINER?:
    | 'bank'
    | 'creditCard'
    | 'investment'
    | 'insurance'
    | 'loan'
    | 'reward'
    | 'realEstate'
    | 'otherAssets'
    | 'otherLiabilities'
    | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  accountStatus?: 'ACTIVE' | 'INACTIVE' | 'TO_BE_CLOSED' | 'CLOSED' | 'DELETED' | undefined
  accountType?: string | undefined
  address?: AccountAddress | undefined
  aggregationSource?: 'SYSTEM' | 'USER' | undefined
  amountDue?: Money | undefined
  annualPercentageYield?: number | undefined
  annuityBalance?: Money | undefined
  apr?: number | undefined
  associatedProviderAccountId?: bigint[] | undefined
  autoRefresh?: AutoRefresh | undefined
  availableBalance?: Money | undefined
  availableCash?: Money | undefined
  availableCredit?: Money | undefined
  balance?: Money | undefined
  bankTransferCode?: BankTransferCode[] | undefined
  cash?: Money | undefined
  cashApr?: number | undefined
  cashValue?: Money | undefined
  classification?:
    | 'OTHER'
    | 'PERSONAL'
    | 'CORPORATE'
    | 'SMALL_BUSINESS'
    | 'TRUST'
    | 'ADD_ON_CARD'
    | 'VIRTUAL_CARD'
    | undefined
  collateral?: string | undefined
  coverage?: Coverage[] | undefined
  createdDate?: string | undefined
  currentBalance?: Money | undefined
  currentLevel?: string | undefined
  dataset?: AccountDataset[] | undefined
  deathBenefit?: Money | undefined
  derivedApr?: number | undefined
  displayedName?: string | undefined
  dueDate?: string | undefined
  enrollmentDate?: string | undefined
  escrowBalance?: Money | undefined
  estimatedDate?: string | undefined
  expirationDate?: string | undefined
  faceAmount?: Money | undefined
  frequency?:
    | 'DAILY'
    | 'ONE_TIME'
    | 'WEEKLY'
    | 'EVERY_2_WEEKS'
    | 'SEMI_MONTHLY'
    | 'MONTHLY'
    | 'QUARTERLY'
    | 'SEMI_ANNUALLY'
    | 'ANNUALLY'
    | 'EVERY_2_MONTHS'
    | 'EBILL'
    | 'FIRST_DAY_MONTHLY'
    | 'LAST_DAY_MONTHLY'
    | 'EVERY_4_WEEKS'
    | 'UNKNOWN'
    | 'OTHER'
    | undefined
  fullAccountNumber?: string | undefined
  fullAccountNumberList?: FullAccountNumberList | undefined
  guarantor?: string | undefined
  holder?: AccountHolder[] | undefined
  homeInsuranceType?: 'HOME_OWNER' | 'RENTAL' | 'RENTER' | 'UNKNOWN' | 'OTHER' | undefined
  homeValue?: Money | undefined
  id?: bigint | undefined
  includeInNetWorth?: boolean | undefined
  interestPaidLastYear?: Money | undefined
  interestPaidYTD?: Money | undefined
  interestRate?: number | undefined
  interestRateType?: 'FIXED' | 'VARIABLE' | 'UNKNOWN' | 'OTHER' | undefined
  isAsset?: boolean | undefined
  isManual?: boolean | undefined
  lastEmployeeContributionAmount?: Money | undefined
  lastEmployeeContributionDate?: string | undefined
  lastPayment?: Money | undefined
  lastPaymentAmount?: Money | undefined
  lastPaymentDate?: string | undefined
  lastUpdated?: string | undefined
  lender?: string | undefined
  lifeInsuranceType?:
    | 'OTHER'
    | 'TERM_LIFE_INSURANCE'
    | 'UNIVERSAL_LIFE_INSURANCE'
    | 'WHOLE_LIFE_INSURANCE'
    | 'VARIABLE_LIFE_INSURANCE'
    | 'ULIP'
    | 'ENDOWMENT'
    | undefined
  loanPayByDate?: string | undefined
  loanPayoffAmount?: Money | undefined
  loanPayoffDetails?: LoanPayoffDetails | undefined
  marginBalance?: Money | undefined
  maturityAmount?: Money | undefined
  maturityDate?: string | undefined
  memo?: string | undefined
  minimumAmountDue?: Money | undefined
  moneyMarketBalance?: Money | undefined
  nextLevel?: string | undefined
  nickname?: string | undefined
  oauthMigrationStatus?: 'IN_PROGRESS' | 'TO_BE_MIGRATED' | 'COMPLETED' | undefined
  originalLoanAmount?: Money | undefined
  originationDate?: string | undefined
  overDraftLimit?: Money | undefined
  paymentProfile?: PaymentProfile | undefined
  policyEffectiveDate?: string | undefined
  policyFromDate?: string | undefined
  policyStatus?: 'ACTIVE' | 'INACTIVE' | 'OTHER' | undefined
  policyTerm?: string | undefined
  policyToDate?: string | undefined
  premium?: Money | undefined
  premiumPaymentTerm?: string | undefined
  primaryRewardUnit?: string | undefined
  principalBalance?: Money | undefined
  profile?: AccountProfile | undefined
  providerAccountId?: bigint | undefined
  providerId?: string | undefined
  providerName?: string | undefined
  recurringPayment?: Money | undefined
  remainingBalance?: Money | undefined
  repaymentPlanType?:
    | 'STANDARD'
    | 'GRADUATED'
    | 'EXTENDED'
    | 'INCOME_BASED'
    | 'INCOME_CONTINGENT'
    | 'INCOME_SENSITIVE'
    | 'PAY_AS_YOU_EARN'
    | 'REVISED_PAY_AS_YOU_EARN'
    | undefined
  rewardBalance?: RewardBalance[] | undefined
  runningBalance?: Money | undefined
  shortBalance?: Money | undefined
  sourceAccountStatus?:
    | 'IN_REPAYMENT'
    | 'DEFAULTED'
    | 'IN_SCHOOL'
    | 'IN_GRACE_PERIOD'
    | 'DELINQUENCY'
    | 'DEFERMENT'
    | 'FORBEARANCE'
    | undefined
  sourceId?: string | undefined
  term?: string | undefined
  totalCashLimit?: Money | undefined
  totalCreditLimit?: Money | undefined
  totalCreditLine?: Money | undefined
  totalUnvestedBalance?: Money | undefined
  totalVestedBalance?: Money | undefined
  userClassification?: 'BUSINESS' | 'PERSONAL' | undefined
  valuationType?: 'SYSTEM' | 'MANUAL' | undefined
}
type AccountResponse = { account?: Account[] | undefined }
type YodleeError = {
  errorCode?: string | undefined
  errorMessage?: string | undefined
  referenceCode?: string | undefined
}
type CreateAccountInfo = {
  accountName: string
  accountNumber?: string | undefined
  accountType: string
  address?: AccountAddress | undefined
  amountDue?: Money | undefined
  balance?: Money | undefined
  dueDate?: string | undefined
  frequency?:
    | 'DAILY'
    | 'ONE_TIME'
    | 'WEEKLY'
    | 'EVERY_2_WEEKS'
    | 'SEMI_MONTHLY'
    | 'MONTHLY'
    | 'QUARTERLY'
    | 'SEMI_ANNUALLY'
    | 'ANNUALLY'
    | 'EVERY_2_MONTHS'
    | 'EBILL'
    | 'FIRST_DAY_MONTHLY'
    | 'LAST_DAY_MONTHLY'
    | 'EVERY_4_WEEKS'
    | 'UNKNOWN'
    | 'OTHER'
    | undefined
  homeValue?: Money | undefined
  includeInNetWorth?: string | undefined
  memo?: string | undefined
  nickname?: string | undefined
  valuationType?: 'SYSTEM' | 'MANUAL' | undefined
}
type CreateAccountRequest = { account: CreateAccountInfo }
type CreatedAccountInfo = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  id?: bigint | undefined
}
type CreatedAccountResponse = { account?: CreatedAccountInfo[] | undefined }
type EvaluateAccountAddress = {
  address1?: string | undefined
  address2?: string | undefined
  address3?: string | undefined
  city?: string | undefined
  country?: string | undefined
  sourceType?: string | undefined
  state?: string | undefined
  street: string
  type?:
    | 'HOME'
    | 'BUSINESS'
    | 'POBOX'
    | 'RETAIL'
    | 'OFFICE'
    | 'SMALL_BUSINESS'
    | 'COMMUNICATION'
    | 'PERMANENT'
    | 'STATEMENT_ADDRESS'
    | 'PAYMENT'
    | 'PAYOFF'
    | 'UNKNOWN'
    | undefined
  zip?: string | undefined
}
type EvaluateAddressRequest = { address: EvaluateAccountAddress }
type EvaluateAddressResponse = {
  address?: AccountAddress[] | undefined
  isValidAddress?: boolean | undefined
}
type HistoricalBalance = {
  asOfDate?: string | undefined
  balance?: Money | undefined
  dataSourceType?: 'S' | 'C' | 'CF' | undefined
  date?: string | undefined
  isAsset?: boolean | undefined
}
type AccountHistory = {
  historicalBalances?: HistoricalBalance[] | undefined
  id?: bigint | undefined
}
type AccountHistoricalBalancesResponse = { account?: AccountHistory[] | undefined }
type UpdateAccountInfo = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  accountStatus?: 'ACTIVE' | 'INACTIVE' | 'TO_BE_CLOSED' | 'CLOSED' | 'DELETED' | undefined
  address?: AccountAddress | undefined
  amountDue?: Money | undefined
  balance?: Money | undefined
  container?:
    | 'bank'
    | 'creditCard'
    | 'investment'
    | 'insurance'
    | 'loan'
    | 'reward'
    | 'realEstate'
    | 'otherAssets'
    | 'otherLiabilities'
    | undefined
  dueDate?: string | undefined
  frequency?:
    | 'DAILY'
    | 'ONE_TIME'
    | 'WEEKLY'
    | 'EVERY_2_WEEKS'
    | 'SEMI_MONTHLY'
    | 'MONTHLY'
    | 'QUARTERLY'
    | 'SEMI_ANNUALLY'
    | 'ANNUALLY'
    | 'EVERY_2_MONTHS'
    | 'EBILL'
    | 'FIRST_DAY_MONTHLY'
    | 'LAST_DAY_MONTHLY'
    | 'EVERY_4_WEEKS'
    | 'UNKNOWN'
    | 'OTHER'
    | undefined
  homeValue?: Money | undefined
  includeInNetWorth?: string | undefined
  isEbillEnrolled?: string | undefined
  memo?: string | undefined
  nickname?: string | undefined
}
type UpdateAccountRequest = { account: UpdateAccountInfo }
type ApiKeyOutput = {
  createdDate?: string | undefined
  expiresIn?: bigint | undefined
  key?: string | undefined
  publicKey?: string | undefined
}
type ApiKeyResponse = { apiKey?: ApiKeyOutput[] | undefined }
type ApiKeyRequest = { publicKey?: string | undefined }
type ClientCredentialToken = {
  accessToken?: string | undefined
  expiresIn?: number | undefined
  issuedAt?: string | undefined
}
type ClientCredentialTokenResponse = { token?: ClientCredentialToken | undefined }
type CobrandNotificationEvent = {
  callbackUrl?: string | undefined
  name?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined
}
type CobrandNotificationResponse = { event?: CobrandNotificationEvent[] | undefined }
type CreateCobrandNotificationEvent = { callbackUrl?: string | undefined }
type CreateCobrandNotificationEventRequest = { event: CreateCobrandNotificationEvent }
type UpdateCobrandNotificationEvent = { callbackUrl?: string | undefined }
type UpdateCobrandNotificationEventRequest = { event: UpdateCobrandNotificationEvent }
type Cobrand = { cobrandLogin: string; cobrandPassword: string; locale?: string | undefined }
type CobrandLoginRequest = { cobrand: Cobrand }
type CobrandSession = { cobSession?: string | undefined }
type CobrandLoginResponse = {
  applicationId?: string | undefined
  cobrandId?: bigint | undefined
  locale?: string | undefined
  session?: CobrandSession | undefined
}
type CobrandPublicKeyResponse = {
  keyAlias?: string | undefined
  keyAsPemString?: string | undefined
}
type ConfigsNotificationEvent = {
  callbackUrl?: string | undefined
  name?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined
}
type ConfigsNotificationResponse = { event?: ConfigsNotificationEvent[] | undefined }
type CreateConfigsNotificationEvent = { callbackUrl?: string | undefined }
type CreateConfigsNotificationEventRequest = { event: CreateConfigsNotificationEvent }
type UpdateConfigsNotificationEvent = { callbackUrl?: string | undefined }
type UpdateConfigsNotificationEventRequest = { event: UpdateConfigsNotificationEvent }
type ConfigsPublicKey = { alias?: string | undefined; key?: string | undefined }
type ConfigsPublicKeyResponse = { publicKey?: ConfigsPublicKey | undefined }
type DataExtractsEventLinks = {
  href?: string | undefined
  methodType?: string | undefined
  rel?: string | undefined
}
type DataExtractsUser = { loginName?: string | undefined }
type DataExtractsEventUserData = {
  links?: DataExtractsEventLinks[] | undefined
  user?: DataExtractsUser | undefined
}
type DataExtractsEventData = {
  fromDate?: string | undefined
  toDate?: string | undefined
  userCount?: number | undefined
  userData?: DataExtractsEventUserData[] | undefined
}
type DataExtractsEvent = { data?: DataExtractsEventData | undefined; info?: string | undefined }
type DataExtractsEventResponse = { event?: DataExtractsEvent | undefined }
type DataExtractsAccount = {
  '401kLoan'?: Money | undefined
  CONTAINER?:
    | 'bank'
    | 'creditCard'
    | 'investment'
    | 'insurance'
    | 'loan'
    | 'reward'
    | 'realEstate'
    | 'otherAssets'
    | 'otherLiabilities'
    | undefined
  accountName?: string | undefined
  accountNumber?: string | undefined
  accountStatus?: 'ACTIVE' | 'INACTIVE' | 'TO_BE_CLOSED' | 'CLOSED' | 'DELETED' | undefined
  accountType?: string | undefined
  address?: AccountAddress | undefined
  aggregationSource?: 'SYSTEM' | 'USER' | undefined
  amountDue?: Money | undefined
  annualPercentageYield?: number | undefined
  annuityBalance?: Money | undefined
  apr?: number | undefined
  associatedProviderAccountId?: bigint[] | undefined
  availableBalance?: Money | undefined
  availableCash?: Money | undefined
  availableCredit?: Money | undefined
  balance?: Money | undefined
  bankTransferCode?: BankTransferCode[] | undefined
  cash?: Money | undefined
  cashApr?: number | undefined
  cashValue?: Money | undefined
  classification?:
    | 'OTHER'
    | 'PERSONAL'
    | 'CORPORATE'
    | 'SMALL_BUSINESS'
    | 'TRUST'
    | 'ADD_ON_CARD'
    | 'VIRTUAL_CARD'
    | undefined
  collateral?: string | undefined
  coverage?: Coverage[] | undefined
  createdDate?: string | undefined
  currentBalance?: Money | undefined
  currentLevel?: string | undefined
  dataset?: AccountDataset[] | undefined
  deathBenefit?: Money | undefined
  derivedApr?: number | undefined
  displayedName?: string | undefined
  dueDate?: string | undefined
  enrollmentDate?: string | undefined
  escrowBalance?: Money | undefined
  estimatedDate?: string | undefined
  expirationDate?: string | undefined
  faceAmount?: Money | undefined
  frequency?:
    | 'DAILY'
    | 'ONE_TIME'
    | 'WEEKLY'
    | 'EVERY_2_WEEKS'
    | 'SEMI_MONTHLY'
    | 'MONTHLY'
    | 'QUARTERLY'
    | 'SEMI_ANNUALLY'
    | 'ANNUALLY'
    | 'EVERY_2_MONTHS'
    | 'EBILL'
    | 'FIRST_DAY_MONTHLY'
    | 'LAST_DAY_MONTHLY'
    | 'EVERY_4_WEEKS'
    | 'UNKNOWN'
    | 'OTHER'
    | undefined
  guarantor?: string | undefined
  homeInsuranceType?: 'HOME_OWNER' | 'RENTAL' | 'RENTER' | 'UNKNOWN' | 'OTHER' | undefined
  homeValue?: Money | undefined
  id?: bigint | undefined
  includeInNetWorth?: boolean | undefined
  interestPaidLastYear?: Money | undefined
  interestPaidYTD?: Money | undefined
  interestRate?: number | undefined
  interestRateType?: 'FIXED' | 'VARIABLE' | 'UNKNOWN' | 'OTHER' | undefined
  isAsset?: boolean | undefined
  isDeleted?: boolean | undefined
  isManual?: boolean | undefined
  lastEmployeeContributionAmount?: Money | undefined
  lastEmployeeContributionDate?: string | undefined
  lastPayment?: Money | undefined
  lastPaymentAmount?: Money | undefined
  lastPaymentDate?: string | undefined
  lastUpdated?: string | undefined
  lender?: string | undefined
  lifeInsuranceType?:
    | 'OTHER'
    | 'TERM_LIFE_INSURANCE'
    | 'UNIVERSAL_LIFE_INSURANCE'
    | 'WHOLE_LIFE_INSURANCE'
    | 'VARIABLE_LIFE_INSURANCE'
    | 'ULIP'
    | 'ENDOWMENT'
    | undefined
  loanPayByDate?: string | undefined
  loanPayoffAmount?: Money | undefined
  loanPayoffDetails?: LoanPayoffDetails | undefined
  marginBalance?: Money | undefined
  maturityAmount?: Money | undefined
  maturityDate?: string | undefined
  memo?: string | undefined
  minimumAmountDue?: Money | undefined
  moneyMarketBalance?: Money | undefined
  nextLevel?: string | undefined
  nickname?: string | undefined
  oauthMigrationStatus?: 'IN_PROGRESS' | 'TO_BE_MIGRATED' | 'COMPLETED' | undefined
  originalLoanAmount?: Money | undefined
  originationDate?: string | undefined
  overDraftLimit?: Money | undefined
  policyEffectiveDate?: string | undefined
  policyFromDate?: string | undefined
  policyStatus?: 'ACTIVE' | 'INACTIVE' | 'OTHER' | undefined
  policyTerm?: string | undefined
  policyToDate?: string | undefined
  premium?: Money | undefined
  premiumPaymentTerm?: string | undefined
  primaryRewardUnit?: string | undefined
  principalBalance?: Money | undefined
  providerAccountId?: bigint | undefined
  providerId?: string | undefined
  providerName?: string | undefined
  recurringPayment?: Money | undefined
  remainingBalance?: Money | undefined
  repaymentPlanType?:
    | 'STANDARD'
    | 'GRADUATED'
    | 'EXTENDED'
    | 'INCOME_BASED'
    | 'INCOME_CONTINGENT'
    | 'INCOME_SENSITIVE'
    | 'PAY_AS_YOU_EARN'
    | 'REVISED_PAY_AS_YOU_EARN'
    | undefined
  rewardBalance?: RewardBalance[] | undefined
  runningBalance?: Money | undefined
  shortBalance?: Money | undefined
  sourceAccountStatus?:
    | 'IN_REPAYMENT'
    | 'DEFAULTED'
    | 'IN_SCHOOL'
    | 'IN_GRACE_PERIOD'
    | 'DELINQUENCY'
    | 'DEFERMENT'
    | 'FORBEARANCE'
    | undefined
  sourceId?: string | undefined
  term?: string | undefined
  totalCashLimit?: Money | undefined
  totalCreditLimit?: Money | undefined
  totalCreditLine?: Money | undefined
  totalUnvestedBalance?: Money | undefined
  totalVestedBalance?: Money | undefined
  userClassification?: 'BUSINESS' | 'PERSONAL' | undefined
  valuationType?: 'SYSTEM' | 'MANUAL' | undefined
}
type DataExtractsHolding = {
  accountId?: bigint | undefined
  accruedIncome?: Money | undefined
  accruedInterest?: Money | undefined
  contractQuantity?: number | undefined
  costBasis?: Money | undefined
  couponRate?: number | undefined
  createdDate?: string | undefined
  cusipNumber?: string | undefined
  description?: string | undefined
  enrichedDescription?: string | undefined
  exercisedQuantity?: number | undefined
  expirationDate?: string | undefined
  grantDate?: string | undefined
  holdingType?:
    | 'stock'
    | 'mutualFund'
    | 'bond'
    | 'CD'
    | 'option'
    | 'moneyMarketFund'
    | 'other'
    | 'remic'
    | 'future'
    | 'commodity'
    | 'currency'
    | 'unitInvestmentTrust'
    | 'employeeStockOption'
    | 'insuranceAnnuity'
    | 'unknown'
    | 'preferredStock'
    | 'ETF'
    | 'warrants'
    | 'ETN'
    | undefined
  id?: bigint | undefined
  interestRate?: number | undefined
  isShort?: boolean | undefined
  isin?: string | undefined
  lastUpdated?: string | undefined
  matchStatus?: string | undefined
  maturityDate?: string | undefined
  optionType?: 'put' | 'call' | 'unknown' | 'other' | undefined
  price?: Money | undefined
  providerAccountId?: bigint | undefined
  quantity?: number | undefined
  securityStyle?: string | undefined
  securityType?: string | undefined
  sedol?: string | undefined
  spread?: Money | undefined
  strikePrice?: Money | undefined
  symbol?: string | undefined
  term?: string | undefined
  unvestedQuantity?: number | undefined
  unvestedValue?: Money | undefined
  value?: Money | undefined
  vestedQuantity?: number | undefined
  vestedSharesExercisable?: number | undefined
  vestedValue?: Money | undefined
  vestingDate?: string | undefined
}
type DataExtractsProviderAccount = {
  aggregationSource?: 'SYSTEM' | 'USER' | undefined
  createdDate?: string | undefined
  dataset?: AccountDataset[] | undefined
  id?: bigint | undefined
  isDeleted?: boolean | undefined
  isManual?: boolean | undefined
  lastUpdated?: string | undefined
  oauthMigrationStatus?: 'IN_PROGRESS' | 'TO_BE_MIGRATED' | 'COMPLETED' | undefined
  providerId?: bigint | undefined
  requestId?: string | undefined
  status?:
    | 'LOGIN_IN_PROGRESS'
    | 'USER_INPUT_REQUIRED'
    | 'IN_PROGRESS'
    | 'PARTIAL_SUCCESS'
    | 'SUCCESS'
    | 'FAILED'
    | 'MIGRATION_IN_PROGRESS'
    | undefined
}
type Description = {
  consumer?: string | undefined
  original?: string | undefined
  security?: string | undefined
  simple?: string | undefined
}
type Contact = { email?: string | undefined; phone?: string | undefined }
type Coordinates = { latitude?: number | undefined; longitude?: number | undefined }
type Merchant = {
  address?: AccountAddress | undefined
  categoryLabel?: string[] | undefined
  contact?: Contact | undefined
  coordinates?: Coordinates | undefined
  id?: string | undefined
  name?: string | undefined
  source?: 'YODLEE' | 'FACTUAL' | undefined
  website?: string | undefined
}
type DataExtractsTransaction = {
  CONTAINER?:
    | 'bank'
    | 'creditCard'
    | 'investment'
    | 'insurance'
    | 'loan'
    | 'reward'
    | 'realEstate'
    | 'otherAssets'
    | 'otherLiabilities'
    | undefined
  accountId?: bigint | undefined
  amount?: Money | undefined
  baseType?: 'CREDIT' | 'DEBIT' | undefined
  category?: string | undefined
  categoryId?: bigint | undefined
  categorySource?: 'SYSTEM' | 'USER' | undefined
  categoryType?:
    | 'TRANSFER'
    | 'DEFERRED_COMPENSATION'
    | 'UNCATEGORIZE'
    | 'INCOME'
    | 'EXPENSE'
    | undefined
  checkNumber?: string | undefined
  commission?: Money | undefined
  createdDate?: string | undefined
  cusipNumber?: string | undefined
  date?: string | undefined
  description?: Description | undefined
  detailCategoryId?: bigint | undefined
  highLevelCategoryId?: bigint | undefined
  holdingDescription?: string | undefined
  id?: bigint | undefined
  interest?: Money | undefined
  isDeleted?: boolean | undefined
  isManual?: boolean | undefined
  isin?: string | undefined
  lastUpdated?: string | undefined
  memo?: string | undefined
  merchant?: Merchant | undefined
  parentCategoryId?: bigint | undefined
  postDate?: string | undefined
  price?: Money | undefined
  principal?: Money | undefined
  quantity?: number | undefined
  runningBalance?: Money | undefined
  sedol?: string | undefined
  settleDate?: string | undefined
  sourceId?: string | undefined
  sourceType?: 'AGGREGATED' | 'MANUAL' | undefined
  status?: 'POSTED' | 'PENDING' | 'SCHEDULED' | 'FAILED' | 'CLEARED' | undefined
  subType?:
    | 'AUTH_HOLD'
    | 'AUTH_REQUEST'
    | 'OVERDRAFT_CHARGE'
    | 'CREDIT_ADJUSTMENT'
    | 'PIN_DEBIT'
    | 'BANK_DIRECT_DEPOSIT'
    | 'DIVIDEND_DEPOSIT'
    | 'INTEREST_SAVINGS'
    | 'INTEREST_ADJUSTMENT'
    | 'ONLINE_PURCHASE'
    | 'PURCHASED_WITH_CHECK'
    | 'RECURRING_BILLING'
    | 'TAX_PAYMENT'
    | 'PAYMENT_BY_CHECK'
    | 'PAYMENT_PLAN'
    | 'FEE_REFUND'
    | 'WIRE_TRANSFER_CHARGE'
    | 'ACCOUNT_TO_ACCOUNT_TRANSFER'
    | 'BANK_TO_BANK_TRANSACTION'
    | 'BANK_TO_NON_BANK_ACCOUNT_TRANSFER'
    | 'CASH_WITHDRAWAL_AT_FI'
    | 'ATM_CASH_WITHDRAWAL'
    | 'AUTH_PROCESSING'
    | 'AUTH_RELEASE'
    | 'PRE_AUTH'
    | 'AUTH_COMPLETE'
    | 'AUTH_VOID'
    | 'BALANCE_ENQUIRY'
    | 'ACCOUNT_VERIFICATION'
    | 'PRE_AUTH_COMPLETION'
    | 'SERVICE_CHARGE'
    | 'SERVICE_CHARGE_FEE_REFUND'
    | 'RETURNED_CHECK_CHARGE'
    | 'RETURNED_CHECK_REIMBURSEMENT'
    | 'CASH_ADVANCE'
    | 'BILL_PAY_CHARGE'
    | 'CHECK_IMAGE_SERVICE_CHARGE'
    | 'OVERDRAFT_PROTECTION_CHARGE'
    | 'STOP_PAYMENT_CHARGE'
    | 'CHECKS_ORDERING_CHARGE'
    | 'MONTHLY_MAINTENANCE_CHARGE'
    | 'DEBIT_CARD_FEE'
    | 'CONVENIENCE_FEE'
    | 'PERSONAL_LOAN_CREDIT'
    | 'CREDIT_CARD_CREDIT'
    | 'AUTO_LOAN'
    | 'HOME_LOAN_MORTGAGE'
    | 'SHORT_TERM_CREDIT'
    | 'SIGNATURE_DEBIT'
    | 'CONTACT_LESS_DEBIT'
    | 'DEFERRED_DEPOSIT'
    | 'DEFERRED_BILL_PAY'
    | 'INSTALLMENT_PAYMENT'
    | 'RECURRING_SUBSCRIPTION_PAYMENT'
    | 'HOLD_CHECK_PAYMENT'
    | 'CAPITAL_GAINS_DISTIBUTION'
    | 'CG_LONG_TERM_DEPOSIT'
    | 'OPEN_SALE_DEPOSIT'
    | 'INTEREST__CHECK'
    | 'PURCHASE_VOID'
    | 'PURCHASE_WITH_CREDIT_CARD'
    | 'PURCHASE_WITH_DEBIT_CARD'
    | 'CHARGE_A_REPEAT_CUSTOMER'
    | 'DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT'
    | 'FEE_PAYMENT'
    | 'FINANCE_CHARGE_REFUND'
    | 'TRANSACTION_VOID'
    | 'FEE_VOID'
    | 'DEBIT_CARD_WITHDRAWAL_AT_STORE'
    | 'ELECTRONIC_PAYMENT'
    | 'ACH_DEBIT'
    | 'ATM_TELLER_DEPOSIT'
    | 'POS_DEBIT'
    | 'BANK_ADJUSTMENT'
    | 'CHARGES_FEES'
    | 'INTEREST'
    | 'DEPOSITS_CREDITS'
    | 'PAYMENT'
    | 'PURCHASE'
    | 'REFUND'
    | 'TRANSFER'
    | 'WITHDRAWAL'
    | 'OTHER_DEPOSITS'
    | 'OTHER_WITHDRAWALS'
    | 'ADJUSTMENT'
    | 'FINANCE_CHARGE'
    | 'OTHER_CHARGES_FEES'
    | 'ANNUAL_FEE'
    | 'DEPOSIT'
    | 'DIRECT_DEPOSIT_SALARY'
    | 'INVESTMENT_INCOME_CASH'
    | 'SSA'
    | 'REWARDS'
    | 'CHECK_DEPOSIT'
    | 'MOBILE_REMOTE_DEPOSIT'
    | 'TELLER_DEPOSIT'
    | 'TAX_REFUND'
    | 'CREDIT_CARD_PAYMENT'
    | 'INSURANCE_PAYMENT'
    | 'UTILITIES_PAYMENT'
    | 'CHILD_SUPPORT'
    | 'LOAN'
    | 'PERSONAL_LOAN'
    | 'STUDENT_LOAN'
    | 'SALES_TAX'
    | 'REIMBURSEMENT'
    | 'BALANCE_TRANSFER'
    | 'WIRE_TRANSFER'
    | 'OVERDRAFT_PROTECTION'
    | 'DEBIT'
    | 'CREDIT'
    | 'NSF_FEES'
    | undefined
  symbol?: string | undefined
  transactionDate?: string | undefined
  type?: string | undefined
  valoren?: string | undefined
}
type DataExtractsUserData = {
  account?: DataExtractsAccount[] | undefined
  holding?: DataExtractsHolding[] | undefined
  providerAccount?: DataExtractsProviderAccount[] | undefined
  totalTransactionsCount?: bigint | undefined
  transaction?: DataExtractsTransaction[] | undefined
  user?: DataExtractsUser | undefined
}
type DataExtractsUserDataResponse = { userData?: DataExtractsUserData[] | undefined }
type DerivedHoldingsAccount = { id?: bigint | undefined; value?: Money | undefined }
type AssetClassification = {
  allocation?: number | undefined
  classificationType?: string | undefined
  classificationValue?: string | undefined
}
type DerivedHolding = {
  accountId?: bigint | undefined
  accruedIncome?: Money | undefined
  accruedInterest?: Money | undefined
  assetClassification?: AssetClassification | undefined
  contractQuantity?: number | undefined
  costBasis?: Money | undefined
  couponRate?: number | undefined
  createdDate?: string | undefined
  cusipNumber?: string | undefined
  description?: string | undefined
  enrichedDescription?: string | undefined
  exercisedQuantity?: number | undefined
  expirationDate?: string | undefined
  grantDate?: string | undefined
  holdingType?:
    | 'stock'
    | 'mutualFund'
    | 'bond'
    | 'CD'
    | 'option'
    | 'moneyMarketFund'
    | 'other'
    | 'remic'
    | 'future'
    | 'commodity'
    | 'currency'
    | 'unitInvestmentTrust'
    | 'employeeStockOption'
    | 'insuranceAnnuity'
    | 'unknown'
    | 'preferredStock'
    | 'ETF'
    | 'warrants'
    | 'ETN'
    | undefined
  id?: bigint | undefined
  interestRate?: number | undefined
  isShort?: boolean | undefined
  isin?: string | undefined
  lastUpdated?: string | undefined
  matchStatus?: string | undefined
  maturityDate?: string | undefined
  optionType?: 'put' | 'call' | 'unknown' | 'other' | undefined
  price?: Money | undefined
  providerAccountId?: bigint | undefined
  quantity?: number | undefined
  securityStyle?: string | undefined
  securityType?: string | undefined
  sedol?: string | undefined
  spread?: Money | undefined
  strikePrice?: Money | undefined
  symbol?: string | undefined
  term?: string | undefined
  unvestedQuantity?: number | undefined
  unvestedValue?: Money | undefined
  value?: Money | undefined
  vestedQuantity?: number | undefined
  vestedSharesExercisable?: number | undefined
  vestedValue?: Money | undefined
  vestingDate?: string | undefined
}
type DerivedHoldingsSummary = {
  account?: DerivedHoldingsAccount[] | undefined
  classificationType?: string | undefined
  classificationValue?: string | undefined
  holding?: DerivedHolding[] | undefined
  value?: Money | undefined
}
type DerivedHoldingsLinks = { holdings?: string | undefined }
type DerivedHoldingSummaryResponse = {
  holdingSummary?: DerivedHoldingsSummary[] | undefined
  link?: DerivedHoldingsLinks | undefined
}
type DerivedNetworthHistoricalBalance = {
  accountId?: bigint | undefined
  asOfDate?: string | undefined
  balance?: Money | undefined
  dataSourceType?: 'S' | 'C' | 'CF' | undefined
  date?: string | undefined
  isAsset?: boolean | undefined
}
type DerivedNetworth = {
  asset?: Money | undefined
  date?: string | undefined
  historicalBalances?: DerivedNetworthHistoricalBalance[] | undefined
  liability?: Money | undefined
  networth?: Money | undefined
}
type DerivedNetworthResponse = { networth?: DerivedNetworth[] | undefined }
type DerivedTransactionsLinks = { transactions?: string | undefined }
type DerivedCategorySummaryDetails = {
  creditTotal?: Money | undefined
  date?: string | undefined
  debitTotal?: Money | undefined
}
type DerivedCategorySummary = {
  categoryId?: bigint | undefined
  categoryName?: string | undefined
  creditTotal?: Money | undefined
  debitTotal?: Money | undefined
  details?: DerivedCategorySummaryDetails[] | undefined
  links?: DerivedTransactionsLinks | undefined
}
type DerivedTransactionsSummary = {
  categorySummary?: DerivedCategorySummary[] | undefined
  categoryType?:
    | 'TRANSFER'
    | 'DEFERRED_COMPENSATION'
    | 'UNCATEGORIZE'
    | 'INCOME'
    | 'EXPENSE'
    | undefined
  creditTotal?: Money | undefined
  debitTotal?: Money | undefined
  links?: DerivedTransactionsLinks | undefined
}
type DerivedTransactionSummaryResponse = {
  links?: DerivedTransactionsLinks | undefined
  transactionSummary?: DerivedTransactionsSummary[] | undefined
}
type Document = {
  accountID?: bigint | undefined
  docType?: 'STMT' | 'TAX' | 'EBILL' | undefined
  formType?: string | undefined
  id?: string | undefined
  lastUpdated?: string | undefined
  name?: string | undefined
  source?: string | undefined
  status?: string | undefined
}
type DocumentResponse = { document?: Document[] | undefined }
type DocumentDownload = { docContent?: string | undefined; id?: string | undefined }
type DocumentDownloadResponse = { document?: DocumentDownload[] | undefined }
type Holding = {
  accountId?: bigint | undefined
  accruedIncome?: Money | undefined
  accruedInterest?: Money | undefined
  assetClassification?: AssetClassification[] | undefined
  contractQuantity?: number | undefined
  costBasis?: Money | undefined
  couponRate?: number | undefined
  createdDate?: string | undefined
  cusipNumber?: string | undefined
  description?: string | undefined
  enrichedDescription?: string | undefined
  exercisedQuantity?: number | undefined
  expirationDate?: string | undefined
  grantDate?: string | undefined
  holdingType?:
    | 'stock'
    | 'mutualFund'
    | 'bond'
    | 'CD'
    | 'option'
    | 'moneyMarketFund'
    | 'other'
    | 'remic'
    | 'future'
    | 'commodity'
    | 'currency'
    | 'unitInvestmentTrust'
    | 'employeeStockOption'
    | 'insuranceAnnuity'
    | 'unknown'
    | 'preferredStock'
    | 'ETF'
    | 'warrants'
    | 'ETN'
    | undefined
  id?: bigint | undefined
  interestRate?: number | undefined
  isShort?: boolean | undefined
  isin?: string | undefined
  lastUpdated?: string | undefined
  matchStatus?: string | undefined
  maturityDate?: string | undefined
  optionType?: 'put' | 'call' | 'unknown' | 'other' | undefined
  price?: Money | undefined
  providerAccountId?: bigint | undefined
  quantity?: number | undefined
  securityStyle?: string | undefined
  securityType?: string | undefined
  sedol?: string | undefined
  spread?: Money | undefined
  strikePrice?: Money | undefined
  symbol?: string | undefined
  term?: string | undefined
  unvestedQuantity?: number | undefined
  unvestedValue?: Money | undefined
  value?: Money | undefined
  vestedQuantity?: number | undefined
  vestedSharesExercisable?: number | undefined
  vestedValue?: Money | undefined
  vestingDate?: string | undefined
}
type HoldingResponse = { holding?: Holding[] | undefined }
type AssetClassificationList = {
  classificationType?: string | undefined
  classificationValue?: string[] | undefined
}
type HoldingAssetClassificationListResponse = {
  assetClassificationList?: AssetClassificationList[] | undefined
}
type HoldingTypeListResponse = {
  holdingType?:
    | (
        | 'stock'
        | 'mutualFund'
        | 'bond'
        | 'CD'
        | 'option'
        | 'moneyMarketFund'
        | 'other'
        | 'remic'
        | 'future'
        | 'commodity'
        | 'currency'
        | 'unitInvestmentTrust'
        | 'employeeStockOption'
        | 'insuranceAnnuity'
        | 'unknown'
        | 'preferredStock'
        | 'ETF'
        | 'warrants'
        | 'ETN'
      )[]
    | undefined
}
type StockExchangeDetail = {
  countryCode?: string | undefined
  currencyCode?: string | undefined
  exchangeCode?: string | undefined
  symbol?: string | undefined
}
type Security = {
  accrualMethod?: string | undefined
  agencyFactor?: number | undefined
  callDate?: string | undefined
  callPrice?: number | undefined
  cdscFundFlag?: boolean | undefined
  closedFlag?: boolean | undefined
  cusip?: string | undefined
  description?: string | undefined
  federalTaxable?: boolean | undefined
  firmEligible?: string | undefined
  firstCouponDate?: string | undefined
  frequency?: number | undefined
  fundFamily?: string | undefined
  gicsSector?: string | undefined
  id?: bigint | undefined
  incomeCurrency?: string | undefined
  interestRate?: number | undefined
  isDummySecurity?: boolean | undefined
  isEnvestnetDummySecurity?: boolean | undefined
  isSyntheticSecurity?: boolean | undefined
  isin?: string | undefined
  issueDate?: string | undefined
  issueTypeMultiplier?: number | undefined
  lastCouponDate?: string | undefined
  lastModifiedDate?: string | undefined
  maturityDate?: string | undefined
  minimumPurchase?: number | undefined
  moodyRating?: string | undefined
  sAndPRating?: string | undefined
  sector?: string | undefined
  sedol?: string | undefined
  shareClass?: string | undefined
  stateTaxable?: boolean | undefined
  stockExchangeDetails?: StockExchangeDetail[] | undefined
  style?: string | undefined
  subSector?: string | undefined
  tradeCurrencyCode?: string | undefined
  type?: string | undefined
}
type SecurityHolding = { id?: string | undefined; security?: Security | undefined }
type HoldingSecuritiesResponse = { holding?: SecurityHolding[] | undefined }
type ProviderAccountPreferences = {
  isAutoRefreshEnabled?: boolean | undefined
  isDataExtractsEnabled?: boolean | undefined
  linkedProviderAccountId?: bigint | undefined
}
type ProviderAccount = {
  aggregationSource?: 'SYSTEM' | 'USER' | undefined
  consentId?: bigint | undefined
  createdDate?: string | undefined
  dataset?: AccountDataset[] | undefined
  id?: bigint | undefined
  isManual?: boolean | undefined
  lastUpdated?: string | undefined
  oauthMigrationStatus?: 'IN_PROGRESS' | 'TO_BE_MIGRATED' | 'COMPLETED' | undefined
  preferences?: ProviderAccountPreferences | undefined
  providerId?: bigint | undefined
  requestId?: string | undefined
  status?:
    | 'LOGIN_IN_PROGRESS'
    | 'USER_INPUT_REQUIRED'
    | 'IN_PROGRESS'
    | 'PARTIAL_SUCCESS'
    | 'SUCCESS'
    | 'FAILED'
    | 'MIGRATION_IN_PROGRESS'
    | undefined
}
type ProviderAccountResponse = { providerAccount?: ProviderAccount[] | undefined }
type TransactionDays = {
  fullAccountNumberFields?: ('paymentAccountNumber' | 'unmaskedAccountNumber')[] | undefined
  numberOfTransactionDays?: number | undefined
}
type ContainerAttributes = {
  BANK?: TransactionDays | undefined
  CREDITCARD?: TransactionDays | undefined
  INSURANCE?: TransactionDays | undefined
  INVESTMENT?: TransactionDays | undefined
  LOAN?: TransactionDays | undefined
}
type Attribute = {
  container?:
    | (
        | 'bank'
        | 'creditCard'
        | 'investment'
        | 'insurance'
        | 'loan'
        | 'reward'
        | 'realEstate'
        | 'otherAssets'
        | 'otherLiabilities'
      )[]
    | undefined
  containerAttributes?: ContainerAttributes | undefined
  fromDate?: string | undefined
  fromFinYear?: string | undefined
  name?:
    | 'BASIC_ACCOUNT_INFO'
    | 'TRANSACTIONS'
    | 'STATEMENTS'
    | 'HOLDINGS'
    | 'ACCOUNT_DETAILS'
    | 'TAX'
    | 'EBILLS'
    | 'FULL_ACCT_NUMBER'
    | 'BANK_TRANSFER_CODE'
    | 'HOLDER_NAME'
    | 'HOLDER_DETAILS'
    | 'PAYMENT_PROFILE'
    | 'PAYMENT_DETAILS'
    | 'INTEREST_DETAILS'
    | 'COVERAGE'
    | undefined
  toDate?: string | undefined
  toFinYear?: string | undefined
}
type ProvidersDataset = {
  attribute?: Attribute[] | undefined
  name?: 'BASIC_AGG_DATA' | 'ADVANCE_AGG_DATA' | 'ACCT_PROFILE' | 'DOCUMENT' | undefined
}
type Option = {
  displayText?: string | undefined
  isSelected?: boolean | undefined
  optionValue?: string | undefined
}
type Field = {
  id?: string | undefined
  image?: string | undefined
  isOptional?: boolean | undefined
  isValueProvided?: boolean | undefined
  maxLength?: bigint | undefined
  minLength?: bigint | undefined
  name?: string | undefined
  option?: Option[] | undefined
  prefix?: string | undefined
  suffix?: string | undefined
  type?: 'text' | 'password' | 'option' | 'checkbox' | 'radio' | 'image' | undefined
  value?: string | undefined
  valueEditable?: string | undefined
}
type ProviderAccountRequest = {
  aggregationSource?: 'SYSTEM' | 'USER' | undefined
  consentId?: bigint | undefined
  dataset?: ProvidersDataset[] | undefined
  datasetName?: ('BASIC_AGG_DATA' | 'ADVANCE_AGG_DATA' | 'ACCT_PROFILE' | 'DOCUMENT')[] | undefined
  field: Field[]
  preferences?: ProviderAccountPreferences | undefined
}
type Row = {
  field?: Field[] | undefined
  fieldRowChoice?: string | undefined
  form?: string | undefined
  id?: string | undefined
  label?: string | undefined
}
type LoginForm = {
  forgetPasswordURL?: string | undefined
  formType?: 'login' | 'questionAndAnswer' | 'token' | 'image' | undefined
  help?: string | undefined
  id?: bigint | undefined
  loginHelp?: string | undefined
  mfaInfoText?: string | undefined
  mfaInfoTitle?: string | undefined
  mfaTimeout?: bigint | undefined
  row?: Row[] | undefined
}
type UpdatedProviderAccount = {
  aggregationSource?: 'SYSTEM' | 'USER' | undefined
  createdDate?: string | undefined
  dataset?: AccountDataset[] | undefined
  id?: bigint | undefined
  isManual?: boolean | undefined
  lastUpdated?: string | undefined
  loginForm?: LoginForm[] | undefined
  oauthMigrationStatus?: 'IN_PROGRESS' | 'TO_BE_MIGRATED' | 'COMPLETED' | undefined
  providerId?: bigint | undefined
  requestId?: string | undefined
  status?:
    | 'LOGIN_IN_PROGRESS'
    | 'USER_INPUT_REQUIRED'
    | 'IN_PROGRESS'
    | 'PARTIAL_SUCCESS'
    | 'SUCCESS'
    | 'FAILED'
    | 'MIGRATION_IN_PROGRESS'
    | undefined
}
type UpdatedProviderAccountResponse = { providerAccount?: UpdatedProviderAccount[] | undefined }
type Profile = {
  address?: AccountAddress[] | undefined
  email?: Email[] | undefined
  gender?: string | undefined
  identifier?: Identifier[] | undefined
  name?: Name | undefined
  phoneNumber?: PhoneNumber[] | undefined
}
type ProviderAccountProfile = { id?: bigint | undefined; profile?: Profile[] | undefined }
type ProviderAccountUserProfileResponse = { providerAccount?: ProviderAccountProfile[] | undefined }
type ProviderAccountDetail = {
  aggregationSource?: 'SYSTEM' | 'USER' | undefined
  consentId: bigint
  createdDate?: string | undefined
  dataset?: AccountDataset[] | undefined
  id?: bigint | undefined
  isManual?: boolean | undefined
  lastUpdated?: string | undefined
  loginForm?: LoginForm[] | undefined
  oauthMigrationStatus?: 'IN_PROGRESS' | 'TO_BE_MIGRATED' | 'COMPLETED' | undefined
  preferences?: ProviderAccountPreferences | undefined
  providerId?: bigint | undefined
  requestId?: string | undefined
  status?:
    | 'LOGIN_IN_PROGRESS'
    | 'USER_INPUT_REQUIRED'
    | 'IN_PROGRESS'
    | 'PARTIAL_SUCCESS'
    | 'SUCCESS'
    | 'FAILED'
    | 'MIGRATION_IN_PROGRESS'
    | undefined
}
type ProviderAccountDetailResponse = { providerAccount?: ProviderAccountDetail[] | undefined }
type ProviderAccountPreferencesRequest = { preferences?: ProviderAccountPreferences | undefined }
type Capability = {
  container?:
    | (
        | 'bank'
        | 'creditCard'
        | 'investment'
        | 'insurance'
        | 'loan'
        | 'reward'
        | 'realEstate'
        | 'otherAssets'
        | 'otherLiabilities'
      )[]
    | undefined
  name?: string | undefined
}
type Providers = {
  PRIORITY?: 'POPULAR' | 'SUGGESTED' | 'COBRAND' | 'SEARCH' | 'ALL' | undefined
  accountType?: ('CURRENT' | 'BROKERAGE_CASH')[] | undefined
  associatedProviderIds?: bigint[] | undefined
  authParameter?: ('authorizationCode' | 'idToken' | 'authResponse')[] | undefined
  authType?: 'OAUTH' | 'CREDENTIALS' | 'MFA_CREDENTIALS' | undefined
  baseUrl?: string | undefined
  capability?: Capability[] | undefined
  countryISOCode?: string | undefined
  dataset?: ProvidersDataset[] | undefined
  favicon?: string | undefined
  forgetPasswordUrl?: string | undefined
  help?: string | undefined
  id?: bigint | undefined
  isAddedByUser?: string | undefined
  isAutoRefreshEnabled?: boolean | undefined
  isConsentRequired?: boolean | undefined
  languageISOCode?: string | undefined
  lastModified?: string | undefined
  loginHelp?: string | undefined
  loginUrl?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  primaryLanguageISOCode?: string | undefined
  status?: 'Supported' | 'Beta' | 'Unsupported' | undefined
}
type ProviderResponse = { provider?: Providers[] | undefined }
type TotalCount = { count?: bigint | undefined }
type ProvidersCount = { TOTAL?: TotalCount | undefined }
type ProvidersCountResponse = { provider?: ProvidersCount | undefined }
type ProviderDetail = {
  PRIORITY?: 'POPULAR' | 'SUGGESTED' | 'COBRAND' | 'SEARCH' | 'ALL' | undefined
  accountType?: ('CURRENT' | 'BROKERAGE_CASH')[] | undefined
  associatedProviderIds?: bigint[] | undefined
  authParameter?: ('authorizationCode' | 'idToken' | 'authResponse')[] | undefined
  authType?: 'OAUTH' | 'CREDENTIALS' | 'MFA_CREDENTIALS' | undefined
  baseUrl?: string | undefined
  capability?: Capability[] | undefined
  countryISOCode?: string | undefined
  dataset?: ProvidersDataset[] | undefined
  favicon?: string | undefined
  help?: string | undefined
  id?: bigint | undefined
  isAddedByUser?: string | undefined
  isAutoRefreshEnabled?: boolean | undefined
  isConsentRequired?: boolean | undefined
  languageISOCode?: string | undefined
  lastModified?: string | undefined
  loginForm?: LoginForm[] | undefined
  loginUrl?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  primaryLanguageISOCode?: string | undefined
  status?: 'Supported' | 'Beta' | 'Unsupported' | undefined
}
type ProviderDetailResponse = { provider?: ProviderDetail[] | undefined }
type Statement = {
  accountId?: bigint | undefined
  amountDue?: Money | undefined
  apr?: number | undefined
  billingPeriodEnd?: string | undefined
  billingPeriodStart?: string | undefined
  cashAdvance?: Money | undefined
  cashApr?: number | undefined
  dueDate?: string | undefined
  id?: bigint | undefined
  interestAmount?: Money | undefined
  isLatest?: boolean | undefined
  lastPaymentAmount?: Money | undefined
  lastPaymentDate?: string | undefined
  lastUpdated?: string | undefined
  loanBalance?: Money | undefined
  minimumPayment?: Money | undefined
  newCharges?: Money | undefined
  principalAmount?: Money | undefined
  statementDate?: string | undefined
}
type StatementResponse = { statement?: Statement[] | undefined }
type Transaction = {
  CONTAINER?:
    | 'bank'
    | 'creditCard'
    | 'investment'
    | 'insurance'
    | 'loan'
    | 'reward'
    | 'realEstate'
    | 'otherAssets'
    | 'otherLiabilities'
    | undefined
  accountId?: bigint | undefined
  amount?: Money | undefined
  baseType?: 'CREDIT' | 'DEBIT' | undefined
  category?: string | undefined
  categoryId?: bigint | undefined
  categorySource?: 'SYSTEM' | 'USER' | undefined
  categoryType?:
    | 'TRANSFER'
    | 'DEFERRED_COMPENSATION'
    | 'UNCATEGORIZE'
    | 'INCOME'
    | 'EXPENSE'
    | undefined
  checkNumber?: string | undefined
  commission?: Money | undefined
  createdDate?: string | undefined
  cusipNumber?: string | undefined
  date?: string | undefined
  description?: Description | undefined
  detailCategoryId?: bigint | undefined
  highLevelCategoryId?: bigint | undefined
  holdingDescription?: string | undefined
  id?: bigint | undefined
  interest?: Money | undefined
  isManual?: boolean | undefined
  isin?: string | undefined
  lastUpdated?: string | undefined
  memo?: string | undefined
  merchant?: Merchant | undefined
  parentCategoryId?: bigint | undefined
  postDate?: string | undefined
  price?: Money | undefined
  principal?: Money | undefined
  quantity?: number | undefined
  runningBalance?: Money | undefined
  sedol?: string | undefined
  settleDate?: string | undefined
  sourceId?: string | undefined
  sourceType?: 'AGGREGATED' | 'MANUAL' | undefined
  status?: 'POSTED' | 'PENDING' | 'SCHEDULED' | 'FAILED' | 'CLEARED' | undefined
  subType?:
    | 'AUTH_HOLD'
    | 'AUTH_REQUEST'
    | 'OVERDRAFT_CHARGE'
    | 'CREDIT_ADJUSTMENT'
    | 'PIN_DEBIT'
    | 'BANK_DIRECT_DEPOSIT'
    | 'DIVIDEND_DEPOSIT'
    | 'INTEREST_SAVINGS'
    | 'INTEREST_ADJUSTMENT'
    | 'ONLINE_PURCHASE'
    | 'PURCHASED_WITH_CHECK'
    | 'RECURRING_BILLING'
    | 'TAX_PAYMENT'
    | 'PAYMENT_BY_CHECK'
    | 'PAYMENT_PLAN'
    | 'FEE_REFUND'
    | 'WIRE_TRANSFER_CHARGE'
    | 'ACCOUNT_TO_ACCOUNT_TRANSFER'
    | 'BANK_TO_BANK_TRANSACTION'
    | 'BANK_TO_NON_BANK_ACCOUNT_TRANSFER'
    | 'CASH_WITHDRAWAL_AT_FI'
    | 'ATM_CASH_WITHDRAWAL'
    | 'AUTH_PROCESSING'
    | 'AUTH_RELEASE'
    | 'PRE_AUTH'
    | 'AUTH_COMPLETE'
    | 'AUTH_VOID'
    | 'BALANCE_ENQUIRY'
    | 'ACCOUNT_VERIFICATION'
    | 'PRE_AUTH_COMPLETION'
    | 'SERVICE_CHARGE'
    | 'SERVICE_CHARGE_FEE_REFUND'
    | 'RETURNED_CHECK_CHARGE'
    | 'RETURNED_CHECK_REIMBURSEMENT'
    | 'CASH_ADVANCE'
    | 'BILL_PAY_CHARGE'
    | 'CHECK_IMAGE_SERVICE_CHARGE'
    | 'OVERDRAFT_PROTECTION_CHARGE'
    | 'STOP_PAYMENT_CHARGE'
    | 'CHECKS_ORDERING_CHARGE'
    | 'MONTHLY_MAINTENANCE_CHARGE'
    | 'DEBIT_CARD_FEE'
    | 'CONVENIENCE_FEE'
    | 'PERSONAL_LOAN_CREDIT'
    | 'CREDIT_CARD_CREDIT'
    | 'AUTO_LOAN'
    | 'HOME_LOAN_MORTGAGE'
    | 'SHORT_TERM_CREDIT'
    | 'SIGNATURE_DEBIT'
    | 'CONTACT_LESS_DEBIT'
    | 'DEFERRED_DEPOSIT'
    | 'DEFERRED_BILL_PAY'
    | 'INSTALLMENT_PAYMENT'
    | 'RECURRING_SUBSCRIPTION_PAYMENT'
    | 'HOLD_CHECK_PAYMENT'
    | 'CAPITAL_GAINS_DISTIBUTION'
    | 'CG_LONG_TERM_DEPOSIT'
    | 'OPEN_SALE_DEPOSIT'
    | 'INTEREST__CHECK'
    | 'PURCHASE_VOID'
    | 'PURCHASE_WITH_CREDIT_CARD'
    | 'PURCHASE_WITH_DEBIT_CARD'
    | 'CHARGE_A_REPEAT_CUSTOMER'
    | 'DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT'
    | 'FEE_PAYMENT'
    | 'FINANCE_CHARGE_REFUND'
    | 'TRANSACTION_VOID'
    | 'FEE_VOID'
    | 'DEBIT_CARD_WITHDRAWAL_AT_STORE'
    | 'ELECTRONIC_PAYMENT'
    | 'ACH_DEBIT'
    | 'ATM_TELLER_DEPOSIT'
    | 'POS_DEBIT'
    | 'BANK_ADJUSTMENT'
    | 'CHARGES_FEES'
    | 'INTEREST'
    | 'DEPOSITS_CREDITS'
    | 'PAYMENT'
    | 'PURCHASE'
    | 'REFUND'
    | 'TRANSFER'
    | 'WITHDRAWAL'
    | 'OTHER_DEPOSITS'
    | 'OTHER_WITHDRAWALS'
    | 'ADJUSTMENT'
    | 'FINANCE_CHARGE'
    | 'OTHER_CHARGES_FEES'
    | 'ANNUAL_FEE'
    | 'DEPOSIT'
    | 'DIRECT_DEPOSIT_SALARY'
    | 'INVESTMENT_INCOME_CASH'
    | 'SSA'
    | 'REWARDS'
    | 'CHECK_DEPOSIT'
    | 'MOBILE_REMOTE_DEPOSIT'
    | 'TELLER_DEPOSIT'
    | 'TAX_REFUND'
    | 'CREDIT_CARD_PAYMENT'
    | 'INSURANCE_PAYMENT'
    | 'UTILITIES_PAYMENT'
    | 'CHILD_SUPPORT'
    | 'LOAN'
    | 'PERSONAL_LOAN'
    | 'STUDENT_LOAN'
    | 'SALES_TAX'
    | 'REIMBURSEMENT'
    | 'BALANCE_TRANSFER'
    | 'WIRE_TRANSFER'
    | 'OVERDRAFT_PROTECTION'
    | 'DEBIT'
    | 'CREDIT'
    | 'NSF_FEES'
    | undefined
  symbol?: string | undefined
  transactionDate?: string | undefined
  type?: string | undefined
  valoren?: string | undefined
}
type TransactionResponse = { transaction?: Transaction[] | undefined }
type DetailCategory = { id?: bigint | undefined; name?: string | undefined }
type TransactionCategory = {
  category?: string | undefined
  classification?: 'PERSONAL' | 'BUSINESS' | undefined
  defaultCategoryName?: string | undefined
  defaultHighLevelCategoryName?: string | undefined
  detailCategory?: DetailCategory[] | undefined
  highLevelCategoryId?: bigint | undefined
  highLevelCategoryName?: string | undefined
  id?: bigint | undefined
  source?: 'SYSTEM' | 'USER' | undefined
  type?: 'TRANSFER' | 'DEFERRED_COMPENSATION' | 'UNCATEGORIZE' | 'INCOME' | 'EXPENSE' | undefined
}
type TransactionCategoryResponse = { transactionCategory?: TransactionCategory[] | undefined }
type TransactionCategoryRequest = {
  categoryName?: string | undefined
  parentCategoryId: number
  source?: string | undefined
}
type UpdateCategoryRequest = {
  categoryName?: string | undefined
  highLevelCategoryName?: string | undefined
  id: bigint
  source: 'SYSTEM' | 'USER'
}
type RuleClause = {
  field?: 'amount' | 'description' | undefined
  fieldValue?: string | undefined
  operation?:
    | 'numberEquals'
    | 'numberLessThan'
    | 'numberLessThanEquals'
    | 'numberGreaterThan'
    | 'numberGreaterThanEquals'
    | 'stringEquals'
    | 'stringContains'
    | undefined
  ruleClauseId?: bigint | undefined
  userDefinedRuleId?: bigint | undefined
}
type TransactionCategorizationRule = {
  categoryLevelId?: number | undefined
  memId?: bigint | undefined
  ruleClauses?: RuleClause[] | undefined
  rulePriority?: number | undefined
  transactionCategorisationId?: bigint | undefined
  userDefinedRuleId?: bigint | undefined
}
type FieldOperation = {
  field?: 'amount' | 'description' | undefined
  operation?:
    | 'numberEquals'
    | 'numberLessThan'
    | 'numberLessThanEquals'
    | 'numberGreaterThan'
    | 'numberGreaterThanEquals'
    | 'stringEquals'
    | 'stringContains'
    | undefined
  value?: { [x: string]: unknown } | undefined
}
type TransactionCategorizationRuleInfo = {
  categoryId: number
  priority?: number | undefined
  ruleClause: FieldOperation[]
  source?: 'SYSTEM' | 'USER' | undefined
}
type TransactionCategorizationRuleRequest = { rule: TransactionCategorizationRuleInfo }
type TransactionCategorizationRuleResponse = {
  txnRules?: TransactionCategorizationRule[] | undefined
}
type TransactionTotal = { count?: bigint | undefined }
type TransactionCount = { TOTAL?: TransactionTotal | undefined }
type TransactionCountResponse = { transaction?: TransactionCount | undefined }
type UpdateTransaction = {
  categoryId: bigint
  categorySource: 'SYSTEM' | 'USER'
  container:
    | 'bank'
    | 'creditCard'
    | 'investment'
    | 'insurance'
    | 'loan'
    | 'reward'
    | 'realEstate'
    | 'otherAssets'
    | 'otherLiabilities'
  description?: Description | undefined
  memo?: string | undefined
}
type TransactionRequest = { transaction: UpdateTransaction }
type UserAddress = {
  address1?: string | undefined
  address2?: string | undefined
  address3?: string | undefined
  city?: string | undefined
  country?: string | undefined
  state?: string | undefined
  zip?: string | undefined
}
type UserResponsePreferences = {
  currency?:
    | 'AUD'
    | 'BRL'
    | 'CAD'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'IDR'
    | 'INR'
    | 'JPY'
    | 'NZD'
    | 'SGD'
    | 'USD'
    | 'ZAR'
    | 'CNY'
    | 'VND'
    | 'MYR'
    | 'CHF'
    | undefined
  dateFormat?: string | undefined
  locale?: 'en_US' | 'en_ES' | 'fr_CA' | 'zh_CN' | undefined
  timeZone?: string | undefined
}
type UserDetail = {
  address?: UserAddress | undefined
  email?: string | undefined
  id?: bigint | undefined
  loginName?: string | undefined
  name?: Name | undefined
  preferences?: UserResponsePreferences | undefined
  roleType?: 'INDIVIDUAL' | undefined
  segmentName?: string | undefined
}
type UserDetailResponse = { user?: UserDetail | undefined }
type UserRequestPreferences = {
  currency?:
    | 'AUD'
    | 'BRL'
    | 'CAD'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'IDR'
    | 'INR'
    | 'JPY'
    | 'NZD'
    | 'SGD'
    | 'USD'
    | 'ZAR'
    | 'CNY'
    | 'VND'
    | 'MYR'
    | 'CHF'
    | undefined
  dateFormat?: string | undefined
  locale?: 'en_US' | 'en_ES' | 'fr_CA' | 'zh_CN' | undefined
  timeZone?: string | undefined
}
type UpdateUserRegistration = {
  address?: UserAddress | undefined
  email?: string | undefined
  name?: Name | undefined
  preferences?: UserRequestPreferences | undefined
  segmentName?: string | undefined
}
type UpdateUserRequest = { user: UpdateUserRegistration }
type AccessTokens = {
  appId?: string | undefined
  url?: string | undefined
  value?: string | undefined
}
type UserAccessToken = { accessTokens?: AccessTokens[] | undefined }
type UserAccessTokensResponse = { user?: UserAccessToken | undefined }
type UserRegistration = {
  address?: UserAddress | undefined
  email?: string | undefined
  loginName: string
  name?: Name | undefined
  preferences?: UserRequestPreferences | undefined
  segmentName?: string | undefined
}
type UserRequest = { user: UserRegistration }
type UserSession = { userSession?: string | undefined }
type User = {
  id?: bigint | undefined
  loginName?: string | undefined
  name?: Name | undefined
  preferences?: UserResponsePreferences | undefined
  roleType?: 'INDIVIDUAL' | undefined
  session?: UserSession | undefined
}
type UserResponse = { user?: User | undefined }
type VerificationBankTransferCode = {
  id?: string | undefined
  type?: 'BSB' | 'IFSC' | 'ROUTING_NUMBER' | 'SORT_CODE' | undefined
}
type VerificationAccount = {
  accountName?: string | undefined
  accountNumber: string
  accountType: 'SAVINGS' | 'CHECKING'
  bankTransferCode: VerificationBankTransferCode
}
type VerificationStatus = {
  account?: VerificationAccount | undefined
  accountId?: bigint | undefined
  providerAccountId?: bigint | undefined
  reason?:
    | 'DATA_NOT_AVAILABLE'
    | 'ACCOUNT_HOLDER_MISMATCH'
    | 'FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE'
    | 'FULL_ACCOUNT_NUMBER_NOT_AVAILABLE'
    | 'BANK_TRANSFER_CODE_NOT_AVAILABLE'
    | 'EXPIRED'
    | 'DATA_MISMATCH'
    | 'INSTRUCTION_GENERATION_ERROR'
    | undefined
  remainingAttempts?: bigint | undefined
  verificationDate?: string | undefined
  verificationId?: bigint | undefined
  verificationStatus?: 'INITIATED' | 'DEPOSITED' | 'SUCCESS' | 'FAILED' | undefined
  verificationType?: 'MATCHING' | 'CHALLENGE_DEPOSIT' | undefined
}
type VerificationStatusResponse = { verification?: VerificationStatus[] | undefined }
type Verification = {
  account?: VerificationAccount | undefined
  accountId?: bigint | undefined
  providerAccountId?: bigint | undefined
  reason?:
    | 'DATA_NOT_AVAILABLE'
    | 'ACCOUNT_HOLDER_MISMATCH'
    | 'FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE'
    | 'FULL_ACCOUNT_NUMBER_NOT_AVAILABLE'
    | 'BANK_TRANSFER_CODE_NOT_AVAILABLE'
    | 'EXPIRED'
    | 'DATA_MISMATCH'
    | 'INSTRUCTION_GENERATION_ERROR'
    | undefined
  verificationDate?: string | undefined
  verificationId?: bigint | undefined
  verificationStatus?: 'INITIATED' | 'DEPOSITED' | 'SUCCESS' | 'FAILED' | undefined
  verificationType?: 'MATCHING' | 'CHALLENGE_DEPOSIT' | undefined
}
type VerificationRequest = { verification: Verification }
type VerificationResponse = { verification?: Verification[] | undefined }
type VerificationTransaction = { amount: Money; baseType: 'CREDIT' | 'DEBIT' }
type UpdateVerification = {
  account?: VerificationAccount | undefined
  accountId?: bigint | undefined
  providerAccountId?: bigint | undefined
  reason?:
    | 'DATA_NOT_AVAILABLE'
    | 'ACCOUNT_HOLDER_MISMATCH'
    | 'FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE'
    | 'FULL_ACCOUNT_NUMBER_NOT_AVAILABLE'
    | 'BANK_TRANSFER_CODE_NOT_AVAILABLE'
    | 'EXPIRED'
    | 'DATA_MISMATCH'
    | 'INSTRUCTION_GENERATION_ERROR'
    | undefined
  transaction: VerificationTransaction[]
  verificationDate?: string | undefined
  verificationId?: bigint | undefined
  verificationStatus?: 'INITIATED' | 'DEPOSITED' | 'SUCCESS' | 'FAILED' | undefined
  verificationType?: 'MATCHING' | 'CHALLENGE_DEPOSIT' | undefined
}
type UpdateVerificationRequest = { verification?: UpdateVerification | undefined }
type VerifyTransactionCriteria = {
  amount: number
  baseType?: 'CREDIT' | 'DEBIT' | undefined
  date: string
  dateVariance?: string | undefined
  keyword?: string | undefined
  matched?: 'COMPLETE' | 'NONE' | undefined
  verifiedTransaction?: Transaction[] | undefined
}
type VerifyAccountRequest = {
  accountId?: bigint | undefined
  container?:
    | 'bank'
    | 'creditCard'
    | 'investment'
    | 'insurance'
    | 'loan'
    | 'reward'
    | 'realEstate'
    | 'otherAssets'
    | 'otherLiabilities'
    | undefined
  transactionCriteria: VerifyTransactionCriteria[]
}
type VerifiedAccount = {
  accountNumber?: string | undefined
  accountType?: string | undefined
  bankTransferCode?: BankTransferCode[] | undefined
  fullAccountNumber?: string | undefined
  holder?: AccountHolder[] | undefined
  id?: bigint | undefined
  providerAccountId?: bigint | undefined
  providerName?: string | undefined
}
type VerifyAccount = {
  account?: VerifiedAccount[] | undefined
  transactionCriteria?: VerifyTransactionCriteria[] | undefined
}
type VerifyAccountResponse = { verifyAccount?: VerifyAccount | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
                requestId?: string | undefined
                status?: string | undefined
              }
            }
            output: AccountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
                requestId?: string | undefined
                status?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
                requestId?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
                requestId?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: CreateAccountRequest }
            output: CreatedAccountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreateAccountRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | { input: { json: CreateAccountRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateAccountRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/accounts/evaluateAddress': {
      $post:
        | {
            input: { json: EvaluateAddressRequest }
            output: EvaluateAddressResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: EvaluateAddressRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | { input: { json: EvaluateAddressRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: EvaluateAddressRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/accounts/historicalBalances': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                fromDate?: string | undefined
                includeCF?: boolean | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: AccountHistoricalBalancesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                fromDate?: string | undefined
                includeCF?: boolean | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                fromDate?: string | undefined
                includeCF?: boolean | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                fromDate?: string | undefined
                includeCF?: boolean | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/accounts/:accountId': {
      $delete:
        | { input: { param: { accountId: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { accountId: bigint } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { accountId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { accountId: bigint } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { accountId: bigint } } & { query: { include?: string | undefined } }
            output: AccountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { accountId: bigint } } & { query: { include?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: bigint } } & { query: { include?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { accountId: bigint } } & { json: UpdateAccountRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accountId: bigint } } & { json: UpdateAccountRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { accountId: bigint } } & { json: UpdateAccountRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountId: bigint } } & { json: UpdateAccountRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/auth/apiKey': {
      $get:
        | { input: {}; output: ApiKeyResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: ApiKeyRequest }
            output: ApiKeyResponse
            outputFormat: 'text'
            status: 201
          }
        | { input: { json: ApiKeyRequest }; output: YodleeError; outputFormat: 'text'; status: 400 }
        | { input: { json: ApiKeyRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ApiKeyRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/auth/apiKey/:key': {
      $delete:
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 201 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { key: string } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { key: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/auth/token': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: YodleeError; outputFormat: 'text'; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | { input: {}; output: ClientCredentialTokenResponse; outputFormat: 'text'; status: 201 }
        | { input: {}; output: YodleeError; outputFormat: 'text'; status: 400 }
        | { input: {}; output: YodleeError; outputFormat: 'text'; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/cobrand/config/notifications/events': {
      $get:
        | {
            input: {
              query: { eventName?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined }
            }
            output: CobrandNotificationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { eventName?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { eventName?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/cobrand/config/notifications/events/:eventName': {
      $delete:
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateCobrandNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateCobrandNotificationEventRequest
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateCobrandNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateCobrandNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateCobrandNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateCobrandNotificationEventRequest
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateCobrandNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateCobrandNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/cobrand/login': {
      $post:
        | {
            input: { json: CobrandLoginRequest }
            output: CobrandLoginResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CobrandLoginRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: CobrandLoginRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 401
          }
        | { input: { json: CobrandLoginRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/cobrand/logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/cobrand/publicKey': {
      $get:
        | { input: {}; output: CobrandPublicKeyResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/configs/notifications/events': {
      $get:
        | {
            input: {
              query: { eventName?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined }
            }
            output: ConfigsNotificationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { eventName?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { eventName?: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/configs/notifications/events/:eventName': {
      $delete:
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateConfigsNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateConfigsNotificationEventRequest
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateConfigsNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: CreateConfigsNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateConfigsNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateConfigsNotificationEventRequest
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateConfigsNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { eventName: 'REFRESH' | 'DATA_UPDATES' | 'AUTO_REFRESH_UPDATES' } } & {
              json: UpdateConfigsNotificationEventRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/configs/publicKey': {
      $get:
        | { input: {}; output: ConfigsPublicKeyResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/dataExtracts/events': {
      $get:
        | {
            input: { query: { eventName: string; fromDate: string; toDate: string } }
            output: DataExtractsEventResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { eventName: string; fromDate: string; toDate: string } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { eventName: string; fromDate: string; toDate: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { eventName: string; fromDate: string; toDate: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/dataExtracts/userData': {
      $get:
        | {
            input: { query: { fromDate: string; loginName: string; toDate: string } }
            output: DataExtractsUserDataResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { fromDate: string; loginName: string; toDate: string } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { fromDate: string; loginName: string; toDate: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { fromDate: string; loginName: string; toDate: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/derived/holdingSummary': {
      $get:
        | {
            input: {
              query: {
                accountIds?: string | undefined
                classificationType?: string | undefined
                include?: string | undefined
              }
            }
            output: DerivedHoldingSummaryResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountIds?: string | undefined
                classificationType?: string | undefined
                include?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountIds?: string | undefined
                classificationType?: string | undefined
                include?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountIds?: string | undefined
                classificationType?: string | undefined
                include?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/derived/networth': {
      $get:
        | {
            input: {
              query: {
                accountIds?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                include?: string | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: DerivedNetworthResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountIds?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                include?: string | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountIds?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                include?: string | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountIds?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                include?: string | undefined
                interval?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/derived/transactionSummary': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                fromDate?: string | undefined
                groupBy: string
                include?: string | undefined
                includeUserCategory?: boolean | undefined
                interval?: string | undefined
                toDate?: string | undefined
              }
            }
            output: DerivedTransactionSummaryResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                fromDate?: string | undefined
                groupBy: string
                include?: string | undefined
                includeUserCategory?: boolean | undefined
                interval?: string | undefined
                toDate?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                fromDate?: string | undefined
                groupBy: string
                include?: string | undefined
                includeUserCategory?: boolean | undefined
                interval?: string | undefined
                toDate?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                fromDate?: string | undefined
                groupBy: string
                include?: string | undefined
                includeUserCategory?: boolean | undefined
                interval?: string | undefined
                toDate?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/documents': {
      $get:
        | {
            input: {
              query: {
                Keyword?: string | undefined
                accountId?: string | undefined
                docType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
              }
            }
            output: DocumentResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Keyword?: string | undefined
                accountId?: string | undefined
                docType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                Keyword?: string | undefined
                accountId?: string | undefined
                docType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                Keyword?: string | undefined
                accountId?: string | undefined
                docType?: string | undefined
                fromDate?: string | undefined
                toDate?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/documents/:documentId': {
      $delete:
        | {
            input: { param: { documentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { documentId: string } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { documentId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { documentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { documentId: string } }
            output: DocumentDownloadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { documentId: string } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { documentId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { documentId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/holdings': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                'assetClassification.classificationType'?: string | undefined
                classificationValue?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
              }
            }
            output: HoldingResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                'assetClassification.classificationType'?: string | undefined
                classificationValue?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                'assetClassification.classificationType'?: string | undefined
                classificationValue?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                'assetClassification.classificationType'?: string | undefined
                classificationValue?: string | undefined
                include?: string | undefined
                providerAccountId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/holdings/assetClassificationList': {
      $get:
        | {
            input: {}
            output: HoldingAssetClassificationListResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/holdings/holdingTypeList': {
      $get:
        | { input: {}; output: HoldingTypeListResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/holdings/securities': {
      $get:
        | {
            input: { query: { holdingId?: string | undefined } }
            output: HoldingSecuritiesResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { holdingId?: string | undefined } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { holdingId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { holdingId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/providerAccounts': {
      $get:
        | {
            input: { query: { include?: string | undefined; providerIds?: string | undefined } }
            output: ProviderAccountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { include?: string | undefined; providerIds?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { include?: string | undefined; providerIds?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { query: { providerAccountIds: string } } & { json: ProviderAccountRequest }
            output: UpdatedProviderAccountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { providerAccountIds: string } } & { json: ProviderAccountRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { providerAccountIds: string } } & { json: ProviderAccountRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { providerAccountIds: string } } & { json: ProviderAccountRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/providerAccounts/profile': {
      $get:
        | {
            input: { query: { providerAccountId?: string | undefined } }
            output: ProviderAccountUserProfileResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { providerAccountId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { providerAccountId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/providerAccounts/:providerAccountId': {
      $delete:
        | {
            input: { param: { providerAccountId: bigint } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { providerAccountId: bigint } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { providerAccountId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { providerAccountId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { providerAccountId: bigint } } & {
              query: { include?: string | undefined; requestId?: string | undefined }
            }
            output: ProviderAccountDetailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { providerAccountId: bigint } } & {
              query: { include?: string | undefined; requestId?: string | undefined }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { providerAccountId: bigint } } & {
              query: { include?: string | undefined; requestId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { providerAccountId: bigint } } & {
              query: { include?: string | undefined; requestId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/providerAccounts/:providerAccountId/preferences': {
      $put:
        | {
            input: { param: { providerAccountId: bigint } } & {
              json: ProviderAccountPreferencesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { providerAccountId: bigint } } & {
              json: ProviderAccountPreferencesRequest
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { providerAccountId: bigint } } & {
              json: ProviderAccountPreferencesRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { providerAccountId: bigint } } & {
              json: ProviderAccountPreferencesRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/providers': {
      $get:
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                institutionId?: bigint | undefined
                name?: string | undefined
                priority?: string | undefined
                providerId?: string | undefined
                skip?: number | undefined
                top?: number | undefined
              }
            }
            output: ProviderResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                institutionId?: bigint | undefined
                name?: string | undefined
                priority?: string | undefined
                providerId?: string | undefined
                skip?: number | undefined
                top?: number | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                institutionId?: bigint | undefined
                name?: string | undefined
                priority?: string | undefined
                providerId?: string | undefined
                skip?: number | undefined
                top?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                institutionId?: bigint | undefined
                name?: string | undefined
                priority?: string | undefined
                providerId?: string | undefined
                skip?: number | undefined
                top?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/providers/count': {
      $get:
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                name?: string | undefined
                priority?: string | undefined
              }
            }
            output: ProvidersCountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                name?: string | undefined
                priority?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                name?: string | undefined
                priority?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                capability?: string | undefined
                dataset$filter?: string | undefined
                fullAccountNumberFields?: string | undefined
                name?: string | undefined
                priority?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/providers/:providerId': {
      $get:
        | {
            input: { param: { providerId: bigint } }
            output: ProviderDetailResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { providerId: bigint } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { providerId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { providerId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/statements': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                isLatest?: string | undefined
                status?: string | undefined
              }
            }
            output: StatementResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                isLatest?: string | undefined
                status?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                isLatest?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                container?: string | undefined
                fromDate?: string | undefined
                isLatest?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
                type?: string | undefined
              }
            }
            output: TransactionResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
                type?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                skip?: number | undefined
                toDate?: string | undefined
                top?: number | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/transactions/categories': {
      $get:
        | { input: {}; output: TransactionCategoryResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { json: TransactionCategoryRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: TransactionCategoryRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: TransactionCategoryRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TransactionCategoryRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | { input: { json: UpdateCategoryRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: UpdateCategoryRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | { input: { json: UpdateCategoryRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UpdateCategoryRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/transactions/categories/rules': {
      $get:
        | { input: {}; output: TransactionCategorizationRule[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { query: { action?: string | undefined; ruleParam?: string | undefined } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { query: { action?: string | undefined; ruleParam?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { action?: string | undefined; ruleParam?: string | undefined } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { action?: string | undefined; ruleParam?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { action?: string | undefined; ruleParam?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/transactions/categories/rules/:ruleId': {
      $delete:
        | { input: { param: { ruleId: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ruleId: bigint } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | { input: { param: { ruleId: bigint } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { ruleId: bigint } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { ruleId: bigint } } & { query: { action: 'run' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ruleId: bigint } } & { query: { action: 'run' } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ruleId: bigint } } & { query: { action: 'run' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ruleId: bigint } } & { query: { action: 'run' } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { ruleId: bigint } } & { json: TransactionCategorizationRuleRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ruleId: bigint } } & { json: TransactionCategorizationRuleRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { ruleId: bigint } } & { json: TransactionCategorizationRuleRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { ruleId: bigint } } & { json: TransactionCategorizationRuleRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/transactions/categories/txnRules': {
      $get:
        | {
            input: {}
            output: TransactionCategorizationRuleResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/transactions/categories/:categoryId': {
      $delete:
        | {
            input: { param: { categoryId: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { categoryId: bigint } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { categoryId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { categoryId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/transactions/count': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                toDate?: string | undefined
                type?: string | undefined
              }
            }
            output: TransactionCountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                toDate?: string | undefined
                type?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                toDate?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                baseType?: string | undefined
                categoryId?: string | undefined
                categoryType?: string | undefined
                container?: string | undefined
                detailCategoryId?: string | undefined
                fromDate?: string | undefined
                highLevelCategoryId?: string | undefined
                keyword?: string | undefined
                toDate?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/transactions/:transactionId': {
      $put:
        | {
            input: { param: { transactionId: bigint } } & { json: TransactionRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { transactionId: bigint } } & { json: TransactionRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { transactionId: bigint } } & { json: TransactionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { transactionId: bigint } } & { json: TransactionRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user': {
      $get:
        | { input: {}; output: UserDetailResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $put:
        | { input: { json: UpdateUserRequest }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: UpdateUserRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UpdateUserRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/user/accessTokens': {
      $get:
        | {
            input: { query: { appIds: string } }
            output: UserAccessTokensResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { appIds: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { appIds: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/user/logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/user/register': {
      $post:
        | { input: { json: UserRequest }; output: UserResponse; outputFormat: 'text'; status: 200 }
        | { input: { json: UserRequest }; output: YodleeError; outputFormat: 'text'; status: 400 }
        | { input: { json: UserRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UserRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/user/samlLogin': {
      $post:
        | {
            input: { query: { issuer: string; samlResponse: string; source?: string | undefined } }
            output: UserResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { issuer: string; samlResponse: string; source?: string | undefined } }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { issuer: string; samlResponse: string; source?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { issuer: string; samlResponse: string; source?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/unregister': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/verification': {
      $get:
        | {
            input: {
              query: {
                accountId?: string | undefined
                providerAccountId?: string | undefined
                verificationType?: string | undefined
              }
            }
            output: VerificationStatusResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                providerAccountId?: string | undefined
                verificationType?: string | undefined
              }
            }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                providerAccountId?: string | undefined
                verificationType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                accountId?: string | undefined
                providerAccountId?: string | undefined
                verificationType?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: VerificationRequest }
            output: VerificationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: VerificationRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | { input: { json: VerificationRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: VerificationRequest }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { json: UpdateVerificationRequest }
            output: VerificationResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: UpdateVerificationRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: UpdateVerificationRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: UpdateVerificationRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/verifyAccount/:providerAccountId': {
      $post:
        | {
            input: { param: { providerAccountId: string } } & { json: VerifyAccountRequest }
            output: VerifyAccountResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { providerAccountId: string } } & { json: VerifyAccountRequest }
            output: YodleeError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { providerAccountId: string } } & { json: VerifyAccountRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { providerAccountId: string } } & { json: VerifyAccountRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
