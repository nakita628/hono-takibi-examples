type AuthResponse = {
  access_token: string
  entityIds?: string[] | undefined
  expires_in?: number | undefined
  refresh_token?: string | undefined
  scope?: string | undefined
  token_type: string
}
type FundingPayorStatusAuditResponse = {
  amount?: bigint | undefined
  currency?: string | undefined
  fundingId?: string | undefined
  status?: string | undefined
}
type LinkForResponse = { href?: string | undefined; rel?: string | undefined }
type PageForResponse = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: bigint | undefined
  totalPages?: number | undefined
}
type PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse = {
  content?: FundingPayorStatusAuditResponse[] | undefined
  links?: LinkForResponse[] | undefined
  page?: PageForResponse | undefined
}
type ErrorData = {
  content?: { [x: string]: unknown } | undefined
  description?: string | undefined
}
type LocalisationDetails = {
  parameters?: { [x: string]: string } | undefined
  template?: string | undefined
}
type Error = {
  errorCode?: string | undefined
  errorData?: ErrorData | undefined
  errorMessage?: string | undefined
  localisationDetails?: LocalisationDetails | undefined
  location?: string | undefined
  locationType?: 'requestBody' | 'queryParam' | 'requestParam' | 'header' | 'pathParam' | undefined
  reasonCode?: string | undefined
}
type InlineResponse_400 = {
  correlationId?: (string | null) | undefined
  errors?: (Error[] | null) | undefined
  httpStatusCode?: number | undefined
}
type InlineResponse_401 = {
  correlationId?: (string | null) | undefined
  errors?: (Error[] | null) | undefined
  httpStatusCode?: number | undefined
}
type InlineResponse_403 = {
  correlationId?: (string | null) | undefined
  errors?: (Error[] | null) | undefined
  httpStatusCode?: number | undefined
}
type PaymentDeltaV1 = {
  paymentAmount?: (number | null) | undefined
  paymentCurrency?: (string | null) | undefined
  paymentId: string
  payorPaymentId?: (string | null) | undefined
  payoutId: string
  sourceAmount?: (number | null) | undefined
  sourceCurrency?: (string | null) | undefined
  status?: (string | null) | undefined
}
type PagedPayeeResponseV3Links = { href?: string | undefined; rel?: string | undefined }
type PagedPayeeInvitationStatusResponseV3Page = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type PaymentDeltaResponseV1 = {
  content?: PaymentDeltaV1[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
}
type FundingResponse = {
  allocationDate: string
  allocationType?: string | undefined
  amount: bigint
  currency: string
  detectedFundingRef?: string | undefined
  fundingAccountType: string
  fundingId: string
  hiddenDate?: string | undefined
  payorId: string
  physicalAccountName?: string | undefined
  reason?: string | undefined
  sourceAccountId?: string | undefined
  status: string
  text?: string | undefined
}
type InlineResponse_404 = {
  correlationId?: (string | null) | undefined
  errors?: (Error[] | null) | undefined
  httpStatusCode?: number | undefined
}
type ResetPasswordRequest = { email: string }
type PaymentChannelRule = {
  displayName: string
  displayOrder?: number | undefined
  element: string
  maxLength?: number | undefined
  minLength?: number | undefined
  required: boolean
  validation: string
}
type PaymentChannelCountry = { isoCountryCode: string; rules: PaymentChannelRule[] }
type PaymentChannelRulesResponse = { bank?: PaymentChannelCountry[] | undefined }
type FundingEvent = {
  eventDateTime?: string | undefined
  eventId?: string | undefined
  fundingEventType?: string | undefined
  principal?: string | undefined
}
type FundingAudit = {
  amount?: number | undefined
  currency?: string | undefined
  dateTime?: string | undefined
  events?: FundingEvent[] | undefined
  fundingAccountName?: string | undefined
  fundingType?: string | undefined
  sourceAccountName?: string | undefined
  status?: string | undefined
  topupType?: string | undefined
}
type GetFundingsResponseLinks = { href?: string | undefined; rel?: string | undefined }
type PagedUserResponsePage = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type GetFundingsResponse = {
  content?: FundingAudit[] | undefined
  links?: GetFundingsResponseLinks[] | undefined
  page?: PagedUserResponsePage | undefined
}
type GetPayoutStatistics = { thisMonthFailedPaymentsCount: number; thisMonthPayoutsCount: number }
type WithdrawPaymentRequest = { reason: string }
type PayorLinksResponseLinks = {
  fromPayorId: string
  linkId: string
  linkType: string
  toPayorId: string
}
type PayorLinksResponsePayors = {
  kycState?: string | undefined
  payorId: string
  payorName: string
  primaryContactEmail?: string | undefined
}
type PayorLinksResponse = {
  links?: PayorLinksResponseLinks[] | undefined
  payors?: PayorLinksResponsePayors[] | undefined
}
type CreatePayorLinkRequest = { fromPayorId: string; linkType: 'PARENT_OF'; toPayorId: string }
type PayorAddress = {
  city: string
  country: string
  countyOrProvince?: (string | null) | undefined
  line1: string
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  zipOrPostcode?: (string | null) | undefined
}
type TransmissionTypes = { ACH: boolean; SAME_DAY_ACH: boolean; WIRE: boolean }
type PayorV1 = {
  address?: PayorAddress | undefined
  allowsLanguageChoice?: boolean | undefined
  collectiveAlias?: string | undefined
  dbaName?: string | undefined
  fundingAccountAccountName?: string | undefined
  fundingAccountAccountNumber?: string | undefined
  fundingAccountRoutingNumber?: string | undefined
  includesReports?: boolean | undefined
  kycState?: string | undefined
  language?: string | undefined
  manualLockout?: boolean | undefined
  maxMasterPayorAdmins?: number | undefined
  payeeGracePeriodDays?: number | undefined
  payeeGracePeriodProcessingEnabled?: boolean | undefined
  payorId?: string | undefined
  payorName: string
  primaryContactEmail?: string | undefined
  primaryContactName?: string | undefined
  primaryContactPhone?: string | undefined
  reminderEmailsOptOut?: boolean | undefined
  supportContact?: string | undefined
  transmissionTypes?: TransmissionTypes | undefined
}
type ErrorResponse = {
  correlationId?: string | undefined
  errors?: Error[] | undefined
  httpStatusCode?: number | undefined
}
type PayorCreateApplicationRequest = { description?: (string | null) | undefined; name: string }
type InlineResponse_409 = {
  correlationId?: (string | null) | undefined
  errors?: (Error[] | null) | undefined
  httpStatusCode?: number | undefined
}
type PayorCreateApiKeyRequest = {
  description?: (string | null) | undefined
  name: string
  roles: ('velo.payor.admin' | 'velo.payor.support')[]
}
type PayorCreateApiKeyResponse = { apiKey?: string | undefined; apiSecret?: string | undefined }
type PayorBrandingResponse = {
  collectiveAlias?: (string | null) | undefined
  dbaName?: (string | null) | undefined
  logoUrl: string
  payorName: string
  supportContact?: (string | null) | undefined
}
type PayorLogoRequest = { logo?: File | undefined }
type PayorEmailOptOutRequest = { reminderEmailsOptOut: boolean }
type SetNotificationsRequest = { minimumBalance: bigint }
type IsoCurrency = string
type SupportedCountry = {
  currencies?: IsoCurrency[] | undefined
  isoCountryCode?: string | undefined
}
type SupportedCountriesResponse = { countries?: SupportedCountry[] | undefined }
type AccessTokenValidationRequest = { otp: string }
type MFAType = 'SMS' | 'YUBIKEY' | 'TOTP'
type MFADetails = { mfa_type?: MFAType | undefined; verified?: boolean | undefined }
type UserType_2 = 'BACKOFFICE' | 'PAYOR' | 'PAYEE'
type UserInfo = {
  mfa_details?: MFADetails | undefined
  userType?: UserType_2 | undefined
  user_id?: string | undefined
}
type AccessTokenResponse = {
  access_token?: string | undefined
  entityIds?: string[] | undefined
  expires_in?: number | undefined
  refresh_token?: string | undefined
  scope?: string | undefined
  token_type?: string | undefined
  user_info?: UserInfo | undefined
}
type Category = 'payment' | 'payee' | 'debit'
type WebhookResponse = {
  authorizationHeader?: string | undefined
  categories?: Category[] | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  payorId?: string | undefined
  webhookUrl?: string | undefined
}
type WebhooksResponse = {
  content?: WebhookResponse[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
}
type CreateWebhookRequest = {
  authorizationHeader?: string | undefined
  categories?: Category[] | undefined
  enabled: boolean
  payorId: string
  webhookUrl: string
}
type UpdateWebhookRequest = {
  authorizationHeader?: (string | null) | undefined
  categories?: (Category[] | null) | undefined
  enabled?: boolean | undefined
  webhookUrl?: string | undefined
}
type PingResponse = { id?: string | undefined; webhookId?: string | undefined }
type SupportedCurrencyV2 = { currency?: string | undefined; maxPaymentAmount?: number | undefined }
type SupportedCurrencyResponseV2 = { currencies?: SupportedCurrencyV2[] | undefined }
type FundingAccountTypeV2 = string
type FundingAccountResponseV2 = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  archived?: boolean | undefined
  country?: string | undefined
  currency?: string | undefined
  id?: string | undefined
  name?: string | undefined
  payorId?: string | undefined
  routingNumber?: string | undefined
  type?: string | undefined
}
type ListFundingAccountsResponseV2Links = { href?: string | undefined; rel?: string | undefined }
type ListFundingAccountsResponseV2Page = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type ListFundingAccountsResponseV2 = {
  content?: FundingAccountResponseV2[] | undefined
  links?: ListFundingAccountsResponseV2Links[] | undefined
  page?: ListFundingAccountsResponseV2Page | undefined
}
type CreateFundingAccountRequestV2 = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  currency?: string | undefined
  name: string
  payorId: string
  routingNumber?: string | undefined
  type: 'FBO' | 'WUBS_DECOUPLED' | 'PRIVATE'
}
type PayorAddressV2 = {
  city: string
  country: string
  countyOrProvince?: (string | null) | undefined
  line1: string
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  zipOrPostcode?: (string | null) | undefined
}
type TransmissionTypes_2 = { ACH: boolean; SAME_DAY_ACH: boolean; WIRE: boolean }
type PayorV2 = {
  address?: PayorAddressV2 | undefined
  allowsLanguageChoice?: boolean | undefined
  collectiveAlias?: string | undefined
  dbaName?: string | undefined
  includesReports?: boolean | undefined
  kycState?: string | undefined
  language?: string | undefined
  managingPayees?: boolean | undefined
  manualLockout?: boolean | undefined
  maxMasterPayorAdmins?: number | undefined
  openBankingEnabled?: boolean | undefined
  payeeGracePeriodDays?: number | undefined
  payeeGracePeriodProcessingEnabled?: boolean | undefined
  paymentRails?: string | undefined
  payorId: string
  payorName: string
  payorXid?: string | undefined
  primaryContactEmail?: string | undefined
  primaryContactName?: string | undefined
  primaryContactPhone?: string | undefined
  provider?: string | undefined
  reminderEmailsOptOut?: boolean | undefined
  remoteSystemIds?: string[] | undefined
  supportContact?: string | undefined
  transmissionTypes?: TransmissionTypes_2 | undefined
  usdTxnValueReportingThreshold?: number | undefined
  wuCustomerId?: string | undefined
}
type AutoTopUpConfigV2 = {
  enabled: boolean
  minBalance?: (bigint | null) | undefined
  targetBalance?: (bigint | null) | undefined
}
type NotificationsV2 = { minimumBalance?: number | undefined }
type SourceAccountResponseV2 = {
  accountType: string
  autoTopUpConfig?: AutoTopUpConfigV2 | undefined
  balance?: bigint | undefined
  balanceVisible: boolean
  currency?: string | undefined
  customerId?: (string | null) | undefined
  fundingAccountId?: (string | null) | undefined
  fundingRef: string
  id: string
  name?: string | undefined
  notifications?: NotificationsV2 | undefined
  payorId?: string | undefined
  physicalAccountId?: string | undefined
  physicalAccountName: string
  pooled: boolean
  railsId: string
}
type ListSourceAccountResponseV2Links = { href?: string | undefined; rel?: string | undefined }
type ListSourceAccountResponseV2 = {
  content?: SourceAccountResponseV2[] | undefined
  links?: ListSourceAccountResponseV2Links[] | undefined
  page?: PagedUserResponsePage | undefined
}
type FundingRequestV2 = { amount: bigint }
type TransferRequestV2 = { amount: bigint; currency: string; toSourceAccountId: string }
type RegionV2 = { abbreviation?: string | undefined; name?: string | undefined }
type SupportedCountryV2 = {
  currencies?: IsoCurrency[] | undefined
  isoCountryCode?: string | undefined
  regions?: RegionV2[] | undefined
}
type SupportedCountriesResponseV2 = { countries?: SupportedCountryV2[] | undefined }
type UserType = 'BACKOFFICE' | 'PAYOR' | 'PAYEE'
type UserStatus = 'ENABLED' | 'DISABLED' | 'PENDING'
type PayeeType = 'COMPANY' | 'INDIVIDUAL'
type Role = { name: string }
type UserResponse = {
  companyName?: string | undefined
  email?: string | undefined
  entityId?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  lockedOut?: boolean | undefined
  lockedOutTimestamp?: (string | null) | undefined
  mfaStatus?: 'REGISTERED' | 'UNREGISTERED' | undefined
  mfaType?: 'SMS' | 'YUBIKEY' | 'TOTP' | undefined
  primaryContactNumber?: string | undefined
  roles?: Role[] | undefined
  secondaryContactNumber?: string | undefined
  smsNumber?: string | undefined
  status?: 'ENABLED' | 'DISABLED' | 'PENDING' | undefined
  userType?: 'BACKOFFICE' | 'PAYOR' | 'PAYEE' | undefined
}
type PagedUserResponseLinks = { href?: string | undefined; rel?: string | undefined }
type PagedUserResponse = {
  content?: UserResponse[] | undefined
  links?: PagedUserResponseLinks[] | undefined
  page?: PagedUserResponsePage | undefined
}
type InviteUserRequest = {
  email: string
  entityId?: (string | null) | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  mfaType: 'SMS' | 'YUBIKEY' | 'TOTP'
  primaryContactNumber: string
  roles: string[]
  secondaryContactNumber?: (string | null) | undefined
  smsNumber: string
  userType?: 'BACKOFFICE' | 'PAYOR' | 'PAYEE' | undefined
  verificationCode?: (string | null) | undefined
}
type InlineResponse_412 = {
  correlationId?: (string | null) | undefined
  errors?: (Error[] | null) | undefined
  httpStatusCode?: number | undefined
}
type RegisterSmsRequest = { smsNumber: string }
type SelfMFATypeUnregisterRequest = { mfaType: 'SMS' | 'YUBIKEY' | 'TOTP' }
type SelfUpdatePasswordRequest = { newPassword: string; oldPassword: string }
type PasswordRequest = { password: string }
type ValidatePasswordResponse = {
  score?: number | undefined
  suggestions?: string[] | undefined
  valid?: boolean | undefined
  warning?: string | undefined
}
type PayeeUserSelfUpdateRequest = {
  email?: (string | null) | undefined
  firstName?: (string | null) | undefined
  lastName?: (string | null) | undefined
  primaryContactNumber?: (string | null) | undefined
  secondaryContactNumber?: (string | null) | undefined
  smsNumber?: (string | null) | undefined
}
type UnregisterMFARequest = {
  mfaType: 'YUBIKEY' | 'TOTP'
  verificationCode?: (string | null) | undefined
}
type RoleUpdateRequest = { roles: string[]; verificationCode?: (string | null) | undefined }
type ResendTokenRequest = {
  tokenType: 'INVITE_MFA_USER' | 'MFA_REGISTRATION'
  verificationCode?: (string | null) | undefined
}
type UserDetailsUpdateRequest = {
  email?: (string | null) | undefined
  firstName?: (string | null) | undefined
  lastName?: (string | null) | undefined
  mfaType?: MFAType | undefined
  primaryContactNumber?: (string | null) | undefined
  secondaryContactNumber?: (string | null) | undefined
  smsNumber?: (string | null) | undefined
  verificationCode?: (string | null) | undefined
}
type WatchlistStatusV3 = string
type OnboardedStatusV4 = string
type PayeeType_2 = string
type GetPayeeListResponseCompanyV3 = {
  name?: string | undefined
  operatingName?: (string | null) | undefined
}
type NameV3 = {
  firstName?: string | undefined
  lastName?: string | undefined
  otherNames?: string | undefined
  title?: string | undefined
}
type GetPayeeListResponseIndividualV3 = { name?: NameV3 | undefined }
type PayableIssueV3 = { code: string; message: string }
type PayeePayorRefV3 = {
  invitationStatus?: string | undefined
  invitationStatusTimestamp?: (string | null) | undefined
  payableIssues?: PayableIssueV3[] | undefined
  payableStatus?: boolean | undefined
  paymentChannelId?: string | undefined
  payorId?: string | undefined
  remoteId?: string | undefined
}
type GetPayeeListResponseV3 = {
  company?: GetPayeeListResponseCompanyV3 | undefined
  country?: string | undefined
  created?: string | undefined
  disabled?: boolean | undefined
  disabledComment?: string | undefined
  disabledUpdatedTimestamp?: string | undefined
  displayName?: string | undefined
  email?: (string | null) | undefined
  individual?: GetPayeeListResponseIndividualV3 | undefined
  language?: string | undefined
  onboardedStatus?: string | undefined
  payeeId?: string | undefined
  payeeType?: string | undefined
  payorRefs?: (PayeePayorRefV3[] | null) | undefined
  watchlistOverrideComment?: (string | null) | undefined
  watchlistStatus?: string | undefined
  watchlistStatusUpdatedTimestamp?: (string | null) | undefined
}
type PagedPayeeResponseV3Page = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type PagedPayeeResponseV3Summary = {
  totalInvitedCount?: number | undefined
  totalOnboardedCount?: number | undefined
  totalPayeesCount?: number | undefined
  totalRegisteredCount?: number | undefined
  totalWatchlistFailedCount?: number | undefined
}
type PagedPayeeResponseV3 = {
  content?: GetPayeeListResponseV3[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeResponseV3Page | undefined
  summary?: PagedPayeeResponseV3Summary | undefined
}
type CreatePayeeAddressV3 = {
  city: string
  country: string
  countyOrProvince?: (string | null) | undefined
  line1: string
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  zipOrPostcode?: (string | null) | undefined
}
type ChallengeV3 = { description: string; value: string }
type CompanyV3 = {
  name: string
  operatingName?: (string | null) | undefined
  taxId?: (string | null) | undefined
} | null
type CreateIndividualV3Name = {
  firstName: string
  lastName: string
  otherNames?: string | undefined
  title?: string | undefined
}
type CreateIndividualV3 = {
  dateOfBirth: string
  name: CreateIndividualV3Name
  nationalIdentification?: string | undefined
}
type CreatePaymentChannelV3 = {
  accountName: string
  accountNumber?: string | undefined
  countryCode: string
  currency: string
  iban?: string | undefined
  paymentChannelName?: string | undefined
  routingNumber?: string | undefined
}
type CreatePayeeV3 = {
  address: CreatePayeeAddressV3
  challenge?: ChallengeV3 | undefined
  company?: CompanyV3 | undefined
  email: string
  individual?: CreateIndividualV3 | undefined
  language?: string | undefined
  payeeId?: string | undefined
  paymentChannel?: CreatePaymentChannelV3 | undefined
  payorRefs?: (PayeePayorRefV3[] | null) | undefined
  remoteId: string
  type: string
}
type CreatePayeesRequestV3 = { payees: CreatePayeeV3[]; payorId: string }
type PayeeTypeEnum = 'Individual' | 'Company'
type CreatePayeesCSVRequestV3 = {
  addressCity: string
  addressCountry: string
  addressCountyOrProvince?: string | undefined
  addressLine1: string
  addressLine2?: string | undefined
  addressLine3?: string | undefined
  addressLine4?: string | undefined
  addressZipOrPostcode: string
  challengeDescription?: string | undefined
  challengeValue?: string | undefined
  companyEIN?: string | undefined
  companyName?: string | undefined
  companyOperatingName?: string | undefined
  email: string
  individualDateOfBirth?: string | undefined
  individualFirstName?: string | undefined
  individualLastName?: string | undefined
  individualNationalIdentification?: string | undefined
  individualOtherNames?: string | undefined
  individualTitle?: string | undefined
  payeeLanguage?: string | undefined
  paymentChannelAccountName?: string | undefined
  paymentChannelAccountNumber?: string | undefined
  paymentChannelCountryCode?: string | undefined
  paymentChannelCurrency?: string | undefined
  paymentChannelIban?: string | undefined
  paymentChannelRoutingNumber?: string | undefined
  remoteId: string
  type: PayeeTypeEnum
}
type CreatePayeesCSVResponseV3RejectedCsvRows = {
  lineNumber?: number | undefined
  message?: string | undefined
  rejectedContent?: string | undefined
}
type CreatePayeesCSVResponseV3 = {
  batchId?: string | undefined
  rejectedCsvRows?: CreatePayeesCSVResponseV3RejectedCsvRows[] | undefined
}
type FailedPayeeV3 = {
  address?: CreatePayeeAddressV3 | undefined
  challenge?: ChallengeV3 | undefined
  company?: CompanyV3 | undefined
  email?: string | undefined
  individual?: CreateIndividualV3 | undefined
  language?: string | undefined
  payeeId?: string | undefined
  paymentChannel?: CreatePaymentChannelV3 | undefined
  payorRefs?: (PayeePayorRefV3[] | null) | undefined
  remoteId?: string | undefined
  type?: string | undefined
}
type FailedSubmissionV3 = {
  failedSubmission?: FailedPayeeV3 | undefined
  failureMessage?: string | undefined
}
type QueryBatchResponseV3 = {
  failureCount?: bigint | undefined
  failures?: FailedSubmissionV3[] | undefined
  pendingCount?: bigint | undefined
  status?: string | undefined
}
type PayeeDeltaV3 = {
  dbaName?: string | undefined
  displayName?: string | undefined
  email?: (string | null) | undefined
  onboardedStatus?: string | undefined
  payeeCountry?: string | undefined
  payeeId: string
  remoteId: string
}
type PayeeDeltaResponseV3Links = { href?: string | undefined; rel?: string | undefined }
type PayeeDeltaResponseV3Page = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type PayeeDeltaResponseV3 = {
  content?: PayeeDeltaV3[] | undefined
  links?: PayeeDeltaResponseV3Links[] | undefined
  page?: PayeeDeltaResponseV3Page | undefined
}
type InvitationStatusV4 = string
type PayeeInvitationStatusResponseV3 = {
  gracePeriodEndDate?: string | undefined
  invitationStatus: string
  payeeId: string
}
type PagedPayeeInvitationStatusResponseV3 = {
  content?: PayeeInvitationStatusResponseV3[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
}
type PayeeAddressV3 = {
  city: string
  country: string
  countyOrProvince?: (string | null) | undefined
  line1: string
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  zipOrPostcode?: (string | null) | undefined
}
type IndividualV3Name = {
  firstName: string
  lastName: string
  otherNames?: string | undefined
  title?: string | undefined
}
type IndividualV3 = {
  dateOfBirth: string
  name: IndividualV3Name
  nationalIdentification?: string | undefined
}
type PayeeDetailResponseV3 = {
  acceptTermsAndConditionsTimestamp?: (string | null) | undefined
  address?: PayeeAddressV3 | undefined
  cellphoneNumber?: string | undefined
  challenge?: ChallengeV3 | undefined
  company?: CompanyV3 | undefined
  country?: string | undefined
  created?: string | undefined
  disabled?: boolean | undefined
  disabledComment?: string | undefined
  disabledUpdatedTimestamp?: string | undefined
  displayName?: string | undefined
  email?: (string | null) | undefined
  enhancedKycCompleted?: boolean | undefined
  gracePeriodEndDate?: (string | null) | undefined
  individual?: IndividualV3 | undefined
  kycCompletedTimestamp?: (string | null) | undefined
  language?: string | undefined
  marketingOptInDecision?: boolean | undefined
  marketingOptInTimestamp?: (string | null) | undefined
  onboardedStatus?: string | undefined
  pausePayment?: boolean | undefined
  pausePaymentTimestamp?: (string | null) | undefined
  payeeId?: string | undefined
  payeeType?: string | undefined
  payorRefs?: (PayeePayorRefV3[] | null) | undefined
  watchlistOverrideComment?: string | undefined
  watchlistOverrideExpiresAtTimestamp?: (string | null) | undefined
  watchlistStatus?: string | undefined
  watchlistStatusUpdatedTimestamp?: (string | null) | undefined
}
type InvitePayeeRequestV3 = { payorId: string }
type UpdatePayeeDetailsRequestV3 = {
  address?: PayeeAddressV3 | undefined
  challenge?: ChallengeV3 | undefined
  company?: CompanyV3 | undefined
  email?: (string | null) | undefined
  individual?: IndividualV3 | undefined
  language?: string | undefined
  payeeType?: PayeeTypeEnum | undefined
}
type UpdateRemoteIdRequestV3 = { payorId: string; remoteId: string }
type PaymentEventResponseV3 = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  eventDateTime: string
  eventId: string
  eventType: string
  iban?: string | undefined
  paymentAmount?: bigint | undefined
  paymentCurrency?: string | undefined
  principal?: string | undefined
  routingNumber?: string | undefined
  sourceAmount?: bigint | undefined
  sourceCurrency?: string | undefined
}
type PaymentResponseV3 = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  countryCode?: string | undefined
  events: PaymentEventResponseV3[]
  filenameReference?: string | undefined
  fundingStatus: string
  iban?: string | undefined
  individualIdentificationNumber?: string | undefined
  invertedRate?: number | undefined
  payeeId: string
  paymentAmount: number
  paymentChannelId?: string | undefined
  paymentChannelName?: string | undefined
  paymentCurrency?: string | undefined
  paymentId: string
  paymentMemo?: string | undefined
  paymentScheme?: string | undefined
  payorId: string
  payorName?: string | undefined
  payorPaymentId?: string | undefined
  quoteId: string
  railsBatchId?: string | undefined
  railsId: string
  railsPaymentId?: string | undefined
  rate?: number | undefined
  rejectionReason?: string | undefined
  remoteId?: string | undefined
  returnCost?: number | undefined
  returnReason?: string | undefined
  routingNumber?: string | undefined
  sourceAccountId: string
  sourceAccountName?: string | undefined
  sourceAmount?: number | undefined
  sourceCurrency?: string | undefined
  status: string
  submittedDateTime: string
  traceNumber?: string | undefined
}
type GetPayoutsResponseV3Links = { href?: string | undefined; rel?: string | undefined }
type ListPaymentsResponseV3Page = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type ListPaymentsResponseV3 = {
  content?: PaymentResponseV3[] | undefined
  links?: GetPayoutsResponseV3Links[] | undefined
  page?: ListPaymentsResponseV3Page | undefined
}
type FxSummaryV3 = {
  creationDateTime: string
  fundingStatus: string
  invertedRate: number
  paymentCurrency?: string | undefined
  quoteId: string
  rate: number
  sourceCurrency?: string | undefined
  status: string
  totalCost: number
  totalPaymentAmount: number
}
type SourceAccountSummaryV3 = {
  currency?: string | undefined
  sourceAccountId: string
  totalCost: bigint
}
type PayoutSummaryAuditV3 = {
  fxSummaries?: FxSummaryV3[] | undefined
  instructedDateTime?: string | undefined
  payorId?: string | undefined
  payoutId: string
  payoutMemo?: string | undefined
  sourceAccountSummary?: SourceAccountSummaryV3[] | undefined
  status: string
  submittedDateTime: string
  totalFailedPayments?: number | undefined
  totalIncompletePayments?: number | undefined
  totalPayments?: number | undefined
  withdrawnDateTime?: string | undefined
}
type GetPayoutsResponseV3Page = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type GetPayoutsResponseV3 = {
  content?: PayoutSummaryAuditV3[] | undefined
  links?: GetPayoutsResponseV3Links[] | undefined
  page?: GetPayoutsResponseV3Page | undefined
}
type GetPaymentsForPayoutResponseV3Page = {
  numberOfElements?: number | undefined
  page?: number | undefined
  pageSize?: number | undefined
  totalElements?: number | undefined
  totalPages?: number | undefined
}
type GetPaymentsForPayoutResponseV3Summary = {
  confirmedPayments?: number | undefined
  failedPayments?: number | undefined
  incompletePayments?: number | undefined
  instructedDateTime?: string | undefined
  payoutMemo?: string | undefined
  payoutStatus?: string | undefined
  releasedPayments?: number | undefined
  submittedDateTime?: string | undefined
  totalPayments?: number | undefined
  withdrawnDateTime?: string | undefined
}
type GetPaymentsForPayoutResponseV3 = {
  content?: PaymentResponseV3[] | undefined
  links?: GetPayoutsResponseV3Links[] | undefined
  page?: GetPaymentsForPayoutResponseV3Page | undefined
  summary?: GetPaymentsForPayoutResponseV3Summary | undefined
}
type PayorAmlTransactionV3 = {
  credit?: bigint | undefined
  creditCurrency?: string | undefined
  dateFundingRequested?: string | undefined
  debit?: bigint | undefined
  debitCurrency?: string | undefined
  fundingType?: string | undefined
  fxApplied?: number | undefined
  payeeType?: string | undefined
  paymentAmount?: bigint | undefined
  paymentCurrency?: string | undefined
  paymentMemo?: string | undefined
  paymentRails?: string | undefined
  paymentStatus?: string | undefined
  payorPaymentId?: string | undefined
  rejectReason?: string | undefined
  remoteId?: string | undefined
  reportTransactionType?: string | undefined
  returnCode?: string | undefined
  returnDescription?: string | undefined
  returnFee?: string | undefined
  returnFeeCurrency?: string | undefined
  returnFeeDescription?: string | undefined
  sourceAccount?: string | undefined
  transactionDate?: string | undefined
  transactionTime?: string | undefined
}
type PaymentInstructionV3 = {
  amount: bigint
  currency: string
  paymentMemo?: string | undefined
  paymentMetadata?: string | undefined
  payorPaymentId?: string | undefined
  remoteId: string
  remoteSystemId?: string | undefined
  sourceAccountName: string
  transmissionType?: 'SAME_DAY_ACH' | 'WIRE' | 'ACH' | 'LOCAL' | 'SWIFT' | undefined
}
type CreatePayoutRequestV3 = {
  payments: PaymentInstructionV3[]
  payoutFromPayorId?: string | undefined
  payoutMemo?: string | undefined
  payoutToPayorId?: string | undefined
}
type AcceptedPaymentV3 = {
  amount: number
  currencyType: string
  paymentMemo?: string | undefined
  paymentMetadata?: string | undefined
  payorPaymentId: string
  railsId: string
  remoteId: string
  remoteSystemId?: string | undefined
  sourceAccountName: string
}
type SourceAccountV3 = {
  currency: string
  sourceAccountId: string
  sourceAccountName: string
  totalPayoutCost: number
}
type QuoteFxSummaryV3 = {
  creationTime: string
  expiryTime?: string | undefined
  fundingStatus: string
  invertedRate?: number | undefined
  paymentCurrency: string
  quoteId: string
  rate: number
  sourceCurrency: string
  status: string
  totalPaymentAmount: number
  totalSourceAmount: number
}
type RejectedPaymentV3 = {
  amount: number
  currencyType: string
  lineNumber?: number | undefined
  message?: string | undefined
  paymentMetadata?: string | undefined
  payorPaymentId: string
  reason: string
  reasonCode?: string | undefined
  remoteId: string
  remoteSystemId?: string | undefined
  sourceAccountName: string
}
type PayoutScheduleV3 = {
  notificationsEnabled: boolean
  scheduleStatus: string
  scheduledAt: string
  scheduledByPrincipalId: string
  scheduledFor: string
}
type PayoutSummaryResponseV3 = {
  acceptedPayments: AcceptedPaymentV3[]
  accounts: SourceAccountV3[]
  fxSummaries: QuoteFxSummaryV3[]
  paymentsAccepted?: number | undefined
  paymentsRejected?: number | undefined
  paymentsSubmitted?: number | undefined
  paymentsWithdrawn: number
  payoutId?: string | undefined
  rejectedPayments: RejectedPaymentV3[]
  schedule?: PayoutScheduleV3 | undefined
  status?: string | undefined
}
type InstructPayoutRequestV3 = { fxRateDegredationThresholdPercentage?: number | undefined }
type PayoutCompanyV3 = { companyName: string }
type PayoutNameV3 = { firstName: string; lastName: string }
type PayoutIndividualV3 = { name: PayoutNameV3 }
type PayoutPayeeV3 = {
  company?: PayoutCompanyV3 | undefined
  individual?: PayoutIndividualV3 | undefined
  payeeId: string
}
type PaymentV3 = {
  amount?: number | undefined
  autoWithdrawnReasonCode?: string | undefined
  currency?: string | undefined
  payee?: PayoutPayeeV3 | undefined
  paymentId: string
  paymentMemo?: string | undefined
  paymentMetadata?: string | undefined
  payorPaymentId?: string | undefined
  railsId?: string | undefined
  remoteId?: string | undefined
  remoteSystemId?: string | undefined
  sourceAccountName?: string | undefined
  status?: string | undefined
  transmissionType?: string | undefined
  withdrawable?: boolean | undefined
}
type PagedPaymentsResponseV3 = {
  content?: PaymentV3[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
}
type QuoteResponseV3 = { fxSummaries?: QuoteFxSummaryV3[] | undefined }
type SchedulePayoutRequestV3 = { notificationsEnabled: boolean; scheduledFor: string }
type SourceAccountTypeV3 = string
type AutoTopUpConfigV3 = {
  enabled: boolean
  fundingAccountId?: string | undefined
  minBalance?: (bigint | null) | undefined
  targetBalance?: (bigint | null) | undefined
}
type NotificationsV3 = { minimumBalance?: number | undefined }
type SourceAccountResponseV3 = {
  autoTopUpConfig?: AutoTopUpConfigV3 | undefined
  balance?: bigint | undefined
  country?: string | undefined
  currency?: string | undefined
  customerId?: (string | null) | undefined
  deleted?: boolean | undefined
  deletedAt?: string | undefined
  fundingRef?: string | undefined
  id: string
  name?: string | undefined
  notifications?: NotificationsV3 | undefined
  payorId?: string | undefined
  physicalAccountId?: string | undefined
  physicalAccountName?: string | undefined
  pooled?: boolean | undefined
  railsId: string
  type: string
  userDeleted?: boolean | undefined
}
type ListSourceAccountResponseV3Links = { href?: string | undefined; rel?: string | undefined }
type ListSourceAccountResponseV3 = {
  content?: SourceAccountResponseV3[] | undefined
  links?: ListSourceAccountResponseV3Links[] | undefined
  page?: PagedUserResponsePage | undefined
}
type FundingRequestV3 = { amount: bigint; fundingAccountId: string }
type SetNotificationsRequest_2 = { minimumBalance: bigint }
type TransferRequestV3 = { amount: bigint; currency: string; toSourceAccountId: string }
type OfacStatusV4 = string
type GetPayeeListResponseCompanyV4 = {
  name?: string | undefined
  operatingName?: (string | null) | undefined
}
type NameV4 = {
  firstName?: string | undefined
  lastName?: string | undefined
  otherNames?: string | undefined
  title?: string | undefined
}
type GetPayeeListResponseIndividualV4 = { name?: NameV4 | undefined }
type PayableIssueV4 = { code: string; message: string }
type PayeePayorRefV4 = {
  invitationStatus?: string | undefined
  invitationStatusTimestamp?: (string | null) | undefined
  payableIssues?: PayableIssueV4[] | undefined
  payableStatus?: boolean | undefined
  paymentChannelId?: string | undefined
  payorId?: string | undefined
  remoteId?: string | undefined
}
type GetPayeeListResponseV4 = {
  company?: GetPayeeListResponseCompanyV4 | undefined
  country?: string | undefined
  created?: string | undefined
  disabled?: boolean | undefined
  disabledComment?: string | undefined
  disabledUpdatedTimestamp?: string | undefined
  displayName?: string | undefined
  email?: (string | null) | undefined
  individual?: GetPayeeListResponseIndividualV4 | undefined
  language?: string | undefined
  onboardedStatus?: string | undefined
  payeeId?: string | undefined
  payeeType?: string | undefined
  payorRefs?: (PayeePayorRefV4[] | null) | undefined
  watchlistOverrideComment?: (string | null) | undefined
  watchlistStatus?: string | undefined
  watchlistStatusUpdatedTimestamp?: (string | null) | undefined
}
type PagedPayeeResponseV4 = {
  content?: GetPayeeListResponseV4[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeResponseV3Page | undefined
  summary?: PagedPayeeResponseV3Summary | undefined
}
type CreatePayeeAddressV4 = {
  city: string
  country: string
  countyOrProvince?: (string | null) | undefined
  line1: string
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  zipOrPostcode?: (string | null) | undefined
}
type ChallengeV4 = { description: string; value: string }
type CompanyV4 = {
  name: string
  operatingName?: (string | null) | undefined
  taxId?: (string | null) | undefined
} | null
type CreateIndividualV4 = {
  dateOfBirth: string
  name: CreateIndividualV3Name
  nationalIdentification?: string | undefined
}
type CreatePaymentChannelV4 = {
  accountName: string
  accountNumber?: string | undefined
  countryCode: string
  currency: string
  iban?: string | undefined
  paymentChannelName?: string | undefined
  routingNumber?: string | undefined
}
type CreatePayeeV4 = {
  address: CreatePayeeAddressV4
  challenge?: ChallengeV4 | undefined
  company?: CompanyV4 | undefined
  email: string
  individual?: CreateIndividualV4 | undefined
  language?: string | undefined
  paymentChannel?: CreatePaymentChannelV4 | undefined
  remoteId: string
  type: PayeeTypeEnum
}
type CreatePayeesRequestV4 = { payees: CreatePayeeV4[]; payorId: string }
type CreatePayeesCSVRequestV4 = {
  addressCity: string
  addressCountry: string
  addressCountyOrProvince?: string | undefined
  addressLine1: string
  addressLine2?: string | undefined
  addressLine3?: string | undefined
  addressLine4?: string | undefined
  addressZipOrPostcode: string
  challengeDescription?: string | undefined
  challengeValue?: string | undefined
  companyEIN?: string | undefined
  companyName?: string | undefined
  companyOperatingName?: string | undefined
  email: string
  individualDateOfBirth?: string | undefined
  individualFirstName?: string | undefined
  individualLastName?: string | undefined
  individualNationalIdentification?: string | undefined
  individualOtherNames?: string | undefined
  individualTitle?: string | undefined
  payeeLanguage?: string | undefined
  paymentChannelAccountName?: string | undefined
  paymentChannelAccountNumber?: string | undefined
  paymentChannelCountryCode?: string | undefined
  paymentChannelCurrency?: string | undefined
  paymentChannelIban?: string | undefined
  paymentChannelRoutingNumber?: string | undefined
  remoteId: string
  type: PayeeTypeEnum
}
type CreatePayeesCSVResponseV4 = {
  batchId?: string | undefined
  rejectedCsvRows?: CreatePayeesCSVResponseV3RejectedCsvRows[] | undefined
}
type FailedPayeeV4 = {
  address?: CreatePayeeAddressV4 | undefined
  challenge?: ChallengeV4 | undefined
  company?: CompanyV4 | undefined
  email?: string | undefined
  individual?: CreateIndividualV4 | undefined
  language?: string | undefined
  payeeId?: string | undefined
  paymentChannel?: CreatePaymentChannelV4 | undefined
  payorRefs?: (PayeePayorRefV4[] | null) | undefined
  remoteId?: string | undefined
  type?: string | undefined
}
type FailedSubmissionV4 = {
  failedSubmission?: FailedPayeeV4 | undefined
  failureMessage?: string | undefined
}
type QueryBatchResponseV4 = {
  failureCount?: bigint | undefined
  failures?: FailedSubmissionV4[] | undefined
  pendingCount?: bigint | undefined
  status?: string | undefined
}
type PayeeDeltaV4 = {
  dbaName?: string | undefined
  displayName?: string | undefined
  email?: (string | null) | undefined
  onboardedStatus?: string | undefined
  payeeCountry?: string | undefined
  payeeId: string
  remoteId: string
}
type PayeeDeltaResponseV4Links = { href?: string | undefined; rel?: string | undefined }
type PayeeDeltaResponseV4 = {
  content?: PayeeDeltaV4[] | undefined
  links?: PayeeDeltaResponseV4Links[] | undefined
  page?: PayeeDeltaResponseV3Page | undefined
}
type PayeeInvitationStatusResponseV4 = {
  gracePeriodEndDate?: string | undefined
  invitationStatus: string
  payeeId: string
}
type PagedPayeeInvitationStatusResponseV4 = {
  content?: PayeeInvitationStatusResponseV4[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
}
type PayeeAddressV4 = {
  city: string
  country: string
  countyOrProvince?: (string | null) | undefined
  line1: string
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  zipOrPostcode?: (string | null) | undefined
}
type IndividualV4 = {
  dateOfBirth: string
  name: IndividualV3Name
  nationalIdentification?: string | undefined
}
type PayeeDetailResponseV4 = {
  acceptTermsAndConditionsTimestamp?: (string | null) | undefined
  address?: PayeeAddressV4 | undefined
  cellphoneNumber?: string | undefined
  challenge?: ChallengeV4 | undefined
  company?: CompanyV4 | undefined
  country?: string | undefined
  created?: string | undefined
  disabled?: boolean | undefined
  disabledComment?: string | undefined
  disabledUpdatedTimestamp?: string | undefined
  displayName?: string | undefined
  email?: (string | null) | undefined
  enhancedKycCompleted?: boolean | undefined
  gracePeriodEndDate?: (string | null) | undefined
  individual?: IndividualV4 | undefined
  kycCompletedTimestamp?: (string | null) | undefined
  language?: string | undefined
  marketingOptInDecision?: boolean | undefined
  marketingOptInTimestamp?: (string | null) | undefined
  onboardedStatus?: string | undefined
  pausePayment?: boolean | undefined
  pausePaymentTimestamp?: (string | null) | undefined
  payeeId?: string | undefined
  payeeType?: string | undefined
  payorRefs?: (PayeePayorRefV4[] | null) | undefined
  watchlistOverrideComment?: string | undefined
  watchlistOverrideExpiresAtTimestamp?: (string | null) | undefined
  watchlistStatus?: string | undefined
  watchlistStatusUpdatedTimestamp?: (string | null) | undefined
}
type InvitePayeeRequestV4 = { payorId: string }
type UpdatePayeeDetailsRequestV4 = {
  address?: PayeeAddressV4 | undefined
  challenge?: ChallengeV4 | undefined
  company?: CompanyV4 | undefined
  contactSmsNumber?: string | undefined
  email?: (string | null) | undefined
  individual?: IndividualV4 | undefined
  language?: string | undefined
  payeeType?: PayeeTypeEnum | undefined
}
type UpdateRemoteIdRequestV4 = { payorId: string; remoteId: string }
type PaymentEventResponse = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  eventDateTime: string
  eventId: string
  eventType: string
  iban?: string | undefined
  paymentAmount?: bigint | undefined
  paymentCurrency?: string | undefined
  principal?: string | undefined
  routingNumber?: string | undefined
  scheduledAt?: string | undefined
  scheduledBy?: string | undefined
  scheduledFor?: string | undefined
  sourceAmount?: bigint | undefined
  sourceCurrency?: string | undefined
}
type PayoutPayor = {
  dbaName: string
  payorId: string
  payorName: string
  principal: string
  principalId: string
}
type PaymentResponseV4Payout = {
  payoutFrom?: PayoutPayor | undefined
  payoutId?: string | undefined
  payoutTo?: PayoutPayor | undefined
}
type PostInstructFxInfo = {
  fxMode: string
  fxStatus: string
  fxStatusUpdatedAt: string
  fxTransactionReference?: string | undefined
}
type PayoutSchedule = {
  notificationsEnabled: boolean
  scheduleStatus: string
  scheduledAt: string
  scheduledBy?: string | undefined
  scheduledByPrincipalId: string
  scheduledFor: string
}
type PaymentResponseV4 = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  autoWithdrawnReasonCode?: string | undefined
  countryCode?: string | undefined
  events: PaymentEventResponse[]
  filenameReference?: string | undefined
  fundingStatus: string
  iban?: string | undefined
  individualIdentificationNumber?: string | undefined
  invertedRate?: number | undefined
  isPaymentCcyBaseCcy?: boolean | undefined
  payeeAddressCountryCode?: string | undefined
  payeeId: string
  paymentAmount: number
  paymentChannelId?: string | undefined
  paymentChannelName?: string | undefined
  paymentCurrency?: string | undefined
  paymentId: string
  paymentMemo?: string | undefined
  paymentMetadata?: string | undefined
  paymentScheme?: string | undefined
  paymentTrackingReference?: string | undefined
  payorId: string
  payorName?: string | undefined
  payorPaymentId?: string | undefined
  payout?: PaymentResponseV4Payout | undefined
  postInstructFxInfo?: PostInstructFxInfo | undefined
  quoteId: string
  railsBatchId?: string | undefined
  railsId: string
  railsPaymentId?: string | undefined
  rate?: number | undefined
  rejectionReason?: string | undefined
  remoteId?: string | undefined
  remoteSystemId?: string | undefined
  remoteSystemPaymentId?: string | undefined
  returnCost?: number | undefined
  returnReason?: string | undefined
  routingNumber?: string | undefined
  schedule?: PayoutSchedule | undefined
  sourceAccountId: string
  sourceAccountName?: string | undefined
  sourceAmount?: number | undefined
  sourceCurrency?: string | undefined
  status: string
  submittedDateTime: string
  traceNumber?: string | undefined
  transmissionType?: string | undefined
  withdrawable?: boolean | undefined
  withdrawnReason?: string | undefined
}
type ListPaymentsResponseV4 = {
  content?: PaymentResponseV4[] | undefined
  links?: GetPayoutsResponseV3Links[] | undefined
  page?: ListPaymentsResponseV3Page | undefined
}
type FxSummary = {
  creationDateTime: string
  fundingStatus: string
  invertedRate: number
  paymentCurrency?: string | undefined
  quoteId: string
  rate: number
  sourceCurrency?: string | undefined
  status: string
  totalCost: number
  totalPaymentAmount: number
}
type SourceAccountSummary = {
  currency?: string | undefined
  sourceAccountId: string
  totalCost: bigint
}
type PayoutSummaryAudit = {
  dateTime?: string | undefined
  fxSummaries?: FxSummary[] | undefined
  instructedDateTime?: string | undefined
  payorId?: string | undefined
  payorName: string
  payoutId?: string | undefined
  payoutMemo?: string | undefined
  payoutType: string
  schedule?: PayoutSchedule | undefined
  sourceAccountSummary?: SourceAccountSummary[] | undefined
  status: string
  submittedDateTime: string
  totalIncompletePayments?: number | undefined
  totalPayments?: number | undefined
  totalReturnedPayments?: number | undefined
  totalWithdrawnPayments?: number | undefined
  withdrawnDateTime?: string | undefined
}
type GetPayoutsResponse = {
  content?: PayoutSummaryAudit[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
}
type PayoutPrincipal = { principal: string; principalId: string }
type GetPaymentsForPayoutResponseV4Summary = {
  confirmedPayments?: number | undefined
  incompletePayments?: number | undefined
  instructed?: PayoutPrincipal | undefined
  instructedDateTime?: string | undefined
  payoutFrom?: PayoutPayor | undefined
  payoutMemo?: string | undefined
  payoutStatus?: string | undefined
  payoutTo?: PayoutPayor | undefined
  payoutType?: string | undefined
  quoted?: PayoutPrincipal | undefined
  quotedDateTime?: string | undefined
  releasedPayments?: number | undefined
  returnedPayments?: number | undefined
  schedule?: PayoutSchedule | undefined
  submittedDateTime?: string | undefined
  submitting?: PayoutPayor | undefined
  totalPayments?: number | undefined
  withdrawn?: PayoutPrincipal | undefined
  withdrawnDateTime?: string | undefined
  withdrawnPayments?: number | undefined
}
type GetPaymentsForPayoutResponseV4 = {
  content?: PaymentResponseV4[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
  summary?: GetPaymentsForPayoutResponseV4Summary | undefined
}
type PayorAmlTransaction = {
  credit?: bigint | undefined
  creditCurrency?: string | undefined
  dateFundingRequested?: string | undefined
  debit?: bigint | undefined
  debitCurrency?: string | undefined
  fundingType?: string | undefined
  fxApplied?: number | undefined
  payeeEmail?: string | undefined
  payeeName?: string | undefined
  payeeType?: string | undefined
  paymentAmount?: bigint | undefined
  paymentCurrency?: string | undefined
  paymentMemo?: string | undefined
  paymentRails?: string | undefined
  paymentStatus?: string | undefined
  payorPaymentId?: string | undefined
  rejectReason?: string | undefined
  remoteId?: string | undefined
  reportTransactionType?: string | undefined
  returnCode?: string | undefined
  returnDescription?: string | undefined
  returnFee?: string | undefined
  returnFeeCurrency?: string | undefined
  returnFeeDescription?: string | undefined
  sourceAccount?: string | undefined
  transactionDate?: string | undefined
  transactionTime?: string | undefined
}
type PaymentDelta = {
  paymentAmount?: (number | null) | undefined
  paymentCurrency?: (string | null) | undefined
  paymentId: string
  payorPaymentId?: (string | null) | undefined
  payoutId: string
  sourceAmount?: (number | null) | undefined
  sourceCurrency?: (string | null) | undefined
  status?: (string | null) | undefined
}
type PaymentDeltaResponse = {
  content?: PaymentDelta[] | undefined
  links?: PagedPayeeResponseV3Links[] | undefined
  page?: PagedPayeeInvitationStatusResponseV3Page | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/authenticate': {
      $post: {
        input: { query: { grant_type?: string | undefined } }
        output: AuthResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/deltas/fundings': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/deltas/payments': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PaymentDeltaResponseV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/fundings/:fundingId': {
      $get:
        | {
            input: { param: { fundingId: string } }
            output: FundingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fundingId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { fundingId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { fundingId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { fundingId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: InlineResponse_401; outputFormat: 'json'; status: 401 }
        | { input: {}; output: InlineResponse_403; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/v1/password/reset': {
      $post:
        | { input: { json: ResetPasswordRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: ResetPasswordRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/paymentChannelRules': {
      $get:
        | { input: {}; output: PaymentChannelRulesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InlineResponse_401; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/v1/paymentaudit/fundings': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: GetFundingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId: string
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId: string
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                payorId: string
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/paymentaudit/payoutStatistics': {
      $get:
        | {
            input: { query: { payorId?: string | undefined } }
            output: GetPayoutStatistics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/payments/:paymentId/withdraw': {
      $post:
        | {
            input: { param: { paymentId: string } } & { json: WithdrawPaymentRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { paymentId: string } } & { json: WithdrawPaymentRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentId: string } } & { json: WithdrawPaymentRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentId: string } } & { json: WithdrawPaymentRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentId: string } } & { json: WithdrawPaymentRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/payorLinks': {
      $get:
        | {
            input: {
              query: {
                descendantsOfPayor?: string | undefined
                parentOfPayor?: string | undefined
                fields?: string | undefined
              }
            }
            output: PayorLinksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                descendantsOfPayor?: string | undefined
                parentOfPayor?: string | undefined
                fields?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                descendantsOfPayor?: string | undefined
                parentOfPayor?: string | undefined
                fields?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                descendantsOfPayor?: string | undefined
                parentOfPayor?: string | undefined
                fields?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
      $post:
        | { input: { json: CreatePayorLinkRequest }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: CreatePayorLinkRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePayorLinkRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePayorLinkRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/payors/:payorId': {
      $get:
        | {
            input: { param: { payorId: string } }
            output: PayorV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payorId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/payors/:payorId/applications': {
      $post:
        | {
            input: { param: { payorId: string } } & { json: PayorCreateApplicationRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { payorId: string } } & { json: PayorCreateApplicationRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string } } & { json: PayorCreateApplicationRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } } & { json: PayorCreateApplicationRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payorId: string } } & { json: PayorCreateApplicationRequest }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/payors/:payorId/applications/:applicationId/keys': {
      $post:
        | {
            input: { param: { payorId: string; applicationId: string } } & {
              json: PayorCreateApiKeyRequest
            }
            output: PayorCreateApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payorId: string; applicationId: string } } & {
              json: PayorCreateApiKeyRequest
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string; applicationId: string } } & {
              json: PayorCreateApiKeyRequest
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string; applicationId: string } } & {
              json: PayorCreateApiKeyRequest
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/payors/:payorId/branding': {
      $get:
        | {
            input: { param: { payorId: string } }
            output: PayorBrandingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payorId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/payors/:payorId/branding/logos': {
      $post:
        | {
            input: { param: { payorId: string } } & { form: PayorLogoRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payorId: string } } & { form: PayorLogoRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string } } & { form: PayorLogoRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } } & { form: PayorLogoRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/payors/:payorId/reminderEmailsUpdate': {
      $post:
        | {
            input: { param: { payorId: string } } & { json: PayorEmailOptOutRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { payorId: string } } & { json: PayorEmailOptOutRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string } } & { json: PayorEmailOptOutRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } } & { json: PayorEmailOptOutRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/sourceAccounts/:sourceAccountId/notifications': {
      $post:
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/supportedCountries': {
      $get: { input: {}; output: SupportedCountriesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/validate': {
      $post:
        | {
            input: { header: { Authorization?: string | undefined } } & {
              json: AccessTokenValidationRequest
            }
            output: AccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { Authorization?: string | undefined } } & {
              json: AccessTokenValidationRequest
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization?: string | undefined } } & {
              json: AccessTokenValidationRequest
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/webhooks': {
      $get:
        | {
            input: {
              query: { page?: number | undefined; pageSize?: number | undefined; payorId: string }
            }
            output: WebhooksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { page?: number | undefined; pageSize?: number | undefined; payorId: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { page?: number | undefined; pageSize?: number | undefined; payorId: string }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { page?: number | undefined; pageSize?: number | undefined; payorId: string }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: CreateWebhookRequest }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: CreateWebhookRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateWebhookRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateWebhookRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/webhooks/:webhookId': {
      $get:
        | {
            input: { param: { webhookId: string } }
            output: WebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { param: { webhookId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhookId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { webhookId: string } } & { json: UpdateWebhookRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhookId: string } } & { json: UpdateWebhookRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } } & { json: UpdateWebhookRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookId: string } } & { json: UpdateWebhookRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhookId: string } } & { json: UpdateWebhookRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/webhooks/:webhookId/ping': {
      $post:
        | {
            input: { param: { webhookId: string } }
            output: PingResponse
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { param: { webhookId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhookId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/currencies': {
      $get: { input: {}; output: SupportedCurrencyResponseV2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/fundingAccounts': {
      $get:
        | {
            input: {
              query: {
                payorId?: string | undefined
                name?: string | undefined
                country?: string | undefined
                currency?: string | undefined
                type?: FundingAccountTypeV2 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: ListFundingAccountsResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                name?: string | undefined
                country?: string | undefined
                currency?: string | undefined
                type?: FundingAccountTypeV2 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                name?: string | undefined
                country?: string | undefined
                currency?: string | undefined
                type?: FundingAccountTypeV2 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: CreateFundingAccountRequestV2 }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: CreateFundingAccountRequestV2 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateFundingAccountRequestV2 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateFundingAccountRequestV2 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v2/fundingAccounts/:fundingAccountId': {
      $get:
        | {
            input: { param: { fundingAccountId: string } } & {
              query: { sensitive?: boolean | undefined }
            }
            output: FundingAccountResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fundingAccountId: string } } & {
              query: { sensitive?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fundingAccountId: string } } & {
              query: { sensitive?: boolean | undefined }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { fundingAccountId: string } } & {
              query: { sensitive?: boolean | undefined }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { fundingAccountId: string } } & {
              query: { sensitive?: boolean | undefined }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/payors/:payorId': {
      $get:
        | {
            input: { param: { payorId: string } }
            output: PayorV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payorId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/sourceAccounts': {
      $get:
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: ListSourceAccountResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/sourceAccounts/:sourceAccountId': {
      $get:
        | {
            input: { param: { sourceAccountId: string } }
            output: SourceAccountResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/sourceAccounts/:sourceAccountId/fundingRequest': {
      $post:
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV2 }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV2 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV2 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV2 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV2 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/sourceAccounts/:sourceAccountId/transfers': {
      $post:
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV2 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV2 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV2 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV2 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV2 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/supportedCountries': {
      $get: { input: {}; output: SupportedCountriesResponseV2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/users': {
      $get:
        | {
            input: {
              query: {
                type?: UserType | undefined
                status?: UserStatus | undefined
                entityId?: string | undefined
                payeeType?: PayeeType | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: PagedUserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: UserType | undefined
                status?: UserStatus | undefined
                entityId?: string | undefined
                payeeType?: PayeeType | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                type?: UserType | undefined
                status?: UserStatus | undefined
                entityId?: string | undefined
                payeeType?: PayeeType | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                type?: UserType | undefined
                status?: UserStatus | undefined
                entityId?: string | undefined
                payeeType?: PayeeType | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v2/users/invite': {
      $post:
        | { input: { json: InviteUserRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: InviteUserRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InviteUserRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InviteUserRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InviteUserRequest }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: InviteUserRequest }
            output: InlineResponse_412
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v2/users/registration/sms': {
      $post:
        | { input: { json: RegisterSmsRequest }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: RegisterSmsRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RegisterSmsRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RegisterSmsRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v2/users/self': {
      $get:
        | { input: {}; output: UserResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InlineResponse_401; outputFormat: 'json'; status: 401 }
        | { input: {}; output: InlineResponse_403; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/v2/users/self/mfa/unregister': {
      $post:
        | {
            input: { header: { Authorization?: string | undefined } } & {
              json: SelfMFATypeUnregisterRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { Authorization?: string | undefined } } & {
              json: SelfMFATypeUnregisterRequest
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { Authorization?: string | undefined } } & {
              json: SelfMFATypeUnregisterRequest
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { Authorization?: string | undefined } } & {
              json: SelfMFATypeUnregisterRequest
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v2/users/self/password': {
      $post:
        | {
            input: { json: SelfUpdatePasswordRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SelfUpdatePasswordRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SelfUpdatePasswordRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SelfUpdatePasswordRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v2/users/self/password/validate': {
      $post:
        | {
            input: { json: PasswordRequest }
            output: ValidatePasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PasswordRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PasswordRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v2/users/self/userDetailsUpdate': {
      $post:
        | {
            input: { json: PayeeUserSelfUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: PayeeUserSelfUpdateRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PayeeUserSelfUpdateRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PayeeUserSelfUpdateRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PayeeUserSelfUpdateRequest }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v2/users/:userId': {
      $delete:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { userId: string } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/users/:userId/disable': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/users/:userId/enable': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/users/:userId/mfa/unregister': {
      $post:
        | {
            input: { param: { userId: string } } & { json: UnregisterMFARequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: UnregisterMFARequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UnregisterMFARequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UnregisterMFARequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UnregisterMFARequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/users/:userId/roleUpdate': {
      $post:
        | {
            input: { param: { userId: string } } & { json: RoleUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: RoleUpdateRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: RoleUpdateRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: RoleUpdateRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: RoleUpdateRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/users/:userId/tokens': {
      $post:
        | {
            input: { param: { userId: string } } & { json: ResendTokenRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: ResendTokenRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: ResendTokenRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: ResendTokenRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v2/users/:userId/unlock': {
      $post:
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/users/:userId/userDetailsUpdate': {
      $post:
        | {
            input: { param: { userId: string } } & { json: UserDetailsUpdateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: string } } & { json: UserDetailsUpdateRequest }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: UserDetailsUpdateRequest }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserDetailsUpdateRequest }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserDetailsUpdateRequest }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: UserDetailsUpdateRequest }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v3/payees': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: PagedPayeeResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreatePayeesRequestV3 } & {
              form: { file?: CreatePayeesCSVRequestV3[] | undefined; payorId?: string | undefined }
            }
            output: CreatePayeesCSVResponseV3
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePayeesRequestV3 } & {
              form: { file?: CreatePayeesCSVRequestV3[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePayeesRequestV3 } & {
              form: { file?: CreatePayeesCSVRequestV3[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePayeesRequestV3 } & {
              form: { file?: CreatePayeesCSVRequestV3[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePayeesRequestV3 } & {
              form: { file?: CreatePayeesCSVRequestV3[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/payees/batch/:batchId': {
      $get:
        | {
            input: { param: { batchId: string } }
            output: QueryBatchResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/payees/deltas': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PayeeDeltaResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v3/payees/payors/:payorId/invitationStatus': {
      $get:
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PagedPayeeInvitationStatusResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/payees/:payeeId': {
      $delete:
        | { input: { param: { payeeId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { payeeId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { payeeId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { payeeId: string } } & { query: { sensitive?: boolean | undefined } }
            output: PayeeDetailResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payeeId: string } } & { query: { sensitive?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v3/payees/:payeeId/invite': {
      $post:
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV3 }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV3 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV3 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV3 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV3 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV3 }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v3/payees/:payeeId/payeeDetailsUpdate': {
      $post:
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV3 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV3 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV3 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV3 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV3 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/payees/:payeeId/remoteIdUpdate': {
      $post:
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV3 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV3 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV3 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV3 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV3 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV3 }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v3/paymentaudit/payments': {
      $get:
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: ListPaymentsResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v3/paymentaudit/payments/:paymentId': {
      $get:
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: PaymentResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/paymentaudit/payouts': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: GetPayoutsResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId: string
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId: string
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                payorId: string
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/paymentaudit/payouts/:payoutId': {
      $get:
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: GetPaymentsForPayoutResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/paymentaudit/transactions': {
      $get:
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: PayorAmlTransactionV3
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v3/payouts': {
      $post:
        | {
            input: { json: CreatePayoutRequestV3 } & {
              form: {
                file?: PaymentInstructionV3[] | undefined
                payorId?: string | undefined
                payoutFromPayorId?: string | undefined
                payoutToPayorId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: CreatePayoutRequestV3 } & {
              form: {
                file?: PaymentInstructionV3[] | undefined
                payorId?: string | undefined
                payoutFromPayorId?: string | undefined
                payoutToPayorId?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePayoutRequestV3 } & {
              form: {
                file?: PaymentInstructionV3[] | undefined
                payorId?: string | undefined
                payoutFromPayorId?: string | undefined
                payoutToPayorId?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePayoutRequestV3 } & {
              form: {
                file?: PaymentInstructionV3[] | undefined
                payorId?: string | undefined
                payoutFromPayorId?: string | undefined
                payoutToPayorId?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v3/payouts/:payoutId': {
      $delete:
        | { input: { param: { payoutId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { payoutId: string } }
            output: PayoutSummaryResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { payoutId: string } } & { json: InstructPayoutRequestV3 }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { payoutId: string } } & { json: InstructPayoutRequestV3 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payoutId: string } } & { json: InstructPayoutRequestV3 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payoutId: string } } & { json: InstructPayoutRequestV3 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payoutId: string } } & { json: InstructPayoutRequestV3 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payoutId: string } } & { json: InstructPayoutRequestV3 }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v3/payouts/:payoutId/payments': {
      $get:
        | {
            input: { param: { payoutId: string } } & {
              query: {
                status?: 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN' | 'WITHDRAWABLE' | undefined
                remoteId?: string | undefined
                payorPaymentId?: string | undefined
                sourceAccountName?: string | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | undefined
                paymentMemo?: string | undefined
                pageSize?: number | undefined
                page?: number | undefined
              }
            }
            output: PagedPaymentsResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                status?: 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN' | 'WITHDRAWABLE' | undefined
                remoteId?: string | undefined
                payorPaymentId?: string | undefined
                sourceAccountName?: string | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | undefined
                paymentMemo?: string | undefined
                pageSize?: number | undefined
                page?: number | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/payouts/:payoutId/quote': {
      $post:
        | {
            input: { param: { payoutId: string } }
            output: QuoteResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v3/payouts/:payoutId/schedule': {
      $delete:
        | { input: { param: { payoutId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payoutId: string } }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { payoutId: string } } & { json: SchedulePayoutRequestV3 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payoutId: string } } & { json: SchedulePayoutRequestV3 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payoutId: string } } & { json: SchedulePayoutRequestV3 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payoutId: string } } & { json: SchedulePayoutRequestV3 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payoutId: string } } & { json: SchedulePayoutRequestV3 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payoutId: string } } & { json: SchedulePayoutRequestV3 }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v3/sourceAccounts': {
      $get:
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                includeUserDeleted?: string | undefined
                type?: SourceAccountTypeV3 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: ListSourceAccountResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                includeUserDeleted?: string | undefined
                type?: SourceAccountTypeV3 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                includeUserDeleted?: string | undefined
                type?: SourceAccountTypeV3 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                includeUserDeleted?: string | undefined
                type?: SourceAccountTypeV3 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                physicalAccountName?: string | undefined
                physicalAccountId?: string | undefined
                payorId?: string | undefined
                fundingAccountId?: string | undefined
                includeUserDeleted?: string | undefined
                type?: SourceAccountTypeV3 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/sourceAccounts/:sourceAccountId': {
      $delete:
        | {
            input: { param: { sourceAccountId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { sourceAccountId: string } }
            output: SourceAccountResponseV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/sourceAccounts/:sourceAccountId/fundingRequest': {
      $post:
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV3 }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV3 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV3 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV3 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: FundingRequestV3 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/sourceAccounts/:sourceAccountId/notifications': {
      $post:
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest_2 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest_2 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest_2 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest_2 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: SetNotificationsRequest_2 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v3/sourceAccounts/:sourceAccountId/transfers': {
      $post:
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV3 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV3 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV3 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV3 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceAccountId: string } } & { json: TransferRequestV3 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/payees': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                ofacStatus?: OfacStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: PagedPayeeResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                ofacStatus?: OfacStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                ofacStatus?: OfacStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                ofacStatus?: OfacStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                payorId: string
                watchlistStatus?: WatchlistStatusV3 | undefined
                disabled?: boolean | undefined
                onboardedStatus?: OnboardedStatusV4 | undefined
                email?: string | undefined
                displayName?: string | undefined
                remoteId?: string | undefined
                payeeType?: PayeeType_2 | undefined
                payeeCountry?: string | undefined
                ofacStatus?: OfacStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreatePayeesRequestV4 } & {
              form: { file?: CreatePayeesCSVRequestV4[] | undefined; payorId?: string | undefined }
            }
            output: CreatePayeesCSVResponseV4
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePayeesRequestV4 } & {
              form: { file?: CreatePayeesCSVRequestV4[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePayeesRequestV4 } & {
              form: { file?: CreatePayeesCSVRequestV4[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreatePayeesRequestV4 } & {
              form: { file?: CreatePayeesCSVRequestV4[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePayeesRequestV4 } & {
              form: { file?: CreatePayeesCSVRequestV4[] | undefined; payorId?: string | undefined }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/payees/batch/:batchId': {
      $get:
        | {
            input: { param: { batchId: string } }
            output: QueryBatchResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { batchId: string } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/payees/deltas': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PayeeDeltaResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v4/payees/payors/:payorId/invitationStatus': {
      $get:
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PagedPayeeInvitationStatusResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payorId: string } } & {
              query: {
                payeeId?: string | undefined
                invitationStatus?: InvitationStatusV4 | undefined
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/payees/:payeeId': {
      $delete:
        | { input: { param: { payeeId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { payeeId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { payeeId: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { payeeId: string } } & { query: { sensitive?: boolean | undefined } }
            output: PayeeDetailResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payeeId: string } } & { query: { sensitive?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v4/payees/:payeeId/invite': {
      $post:
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV4 }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV4 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV4 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV4 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV4 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payeeId: string } } & { json: InvitePayeeRequestV4 }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v4/payees/:payeeId/payeeDetailsUpdate': {
      $post:
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV4 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV4 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV4 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV4 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdatePayeeDetailsRequestV4 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/payees/:payeeId/remoteIdUpdate': {
      $post:
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV4 }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV4 }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV4 }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV4 }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV4 }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payeeId: string } } & { json: UpdateRemoteIdRequestV4 }
            output: InlineResponse_409
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v4/paymentaudit/fundings': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                sourceAccountName?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: GetFundingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                sourceAccountName?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId: string
                sourceAccountName?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId: string
                sourceAccountName?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                payorId: string
                sourceAccountName?: string | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/paymentaudit/payments': {
      $get:
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                railsId?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                postInstructFxStatus?:
                  | 'ANY'
                  | 'INITIATED'
                  | 'CANCELLED'
                  | 'EXECUTED'
                  | 'COMPLETED'
                  | 'RETURNED'
                  | 'RESUBMITTED'
                  | 'REFUNDED'
                  | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: ListPaymentsResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                railsId?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                postInstructFxStatus?:
                  | 'ANY'
                  | 'INITIATED'
                  | 'CANCELLED'
                  | 'EXECUTED'
                  | 'COMPLETED'
                  | 'RETURNED'
                  | 'RESUBMITTED'
                  | 'REFUNDED'
                  | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                railsId?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                postInstructFxStatus?:
                  | 'ANY'
                  | 'INITIATED'
                  | 'CANCELLED'
                  | 'EXECUTED'
                  | 'COMPLETED'
                  | 'RETURNED'
                  | 'RESUBMITTED'
                  | 'REFUNDED'
                  | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payeeId?: string | undefined
                payorId?: string | undefined
                payorName?: string | undefined
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                sourceAccountName?: string | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                sourceCurrency?: string | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                paymentCurrency?: string | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                paymentMemo?: string | undefined
                railsId?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                postInstructFxStatus?:
                  | 'ANY'
                  | 'INITIATED'
                  | 'CANCELLED'
                  | 'EXECUTED'
                  | 'COMPLETED'
                  | 'RETURNED'
                  | 'RESUBMITTED'
                  | 'REFUNDED'
                  | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v4/paymentaudit/payments/:paymentId': {
      $get:
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: PaymentResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentId: string } } & { query: { sensitive?: boolean | undefined } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/paymentaudit/payoutStatistics': {
      $get:
        | {
            input: { query: { payorId?: string | undefined } }
            output: GetPayoutStatistics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { payorId?: string | undefined } }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/paymentaudit/payouts': {
      $get:
        | {
            input: {
              query: {
                payorId?: string | undefined
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                fromPayorName?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: GetPayoutsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                fromPayorName?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                fromPayorName?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                fromPayorName?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                payoutMemo?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'REJECTED'
                  | 'SUBMITTED'
                  | 'QUOTED'
                  | 'INSTRUCTED'
                  | 'COMPLETED'
                  | 'INCOMPLETE'
                  | 'CONFIRMED'
                  | 'WITHDRAWN'
                  | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                fromPayorName?: string | undefined
                scheduledForDateFrom?: string | undefined
                scheduledForDateTo?: string | undefined
                scheduleStatus?: 'ANY' | 'SCHEDULED' | 'EXECUTED' | 'FAILED' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/paymentaudit/payouts/:payoutId': {
      $get:
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: GetPaymentsForPayoutResponseV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_403
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payoutId: string } } & {
              query: {
                remoteId?: string | undefined
                remoteSystemId?: string | undefined
                status?:
                  | 'ACCEPTED'
                  | 'AWAITING_FUNDS'
                  | 'FUNDED'
                  | 'UNFUNDED'
                  | 'BANK_PAYMENT_REQUESTED'
                  | 'REJECTED'
                  | 'ACCEPTED_BY_RAILS'
                  | 'CONFIRMED'
                  | 'FAILED'
                  | 'RETURNED'
                  | 'WITHDRAWN'
                  | undefined
                sourceAmountFrom?: number | undefined
                sourceAmountTo?: number | undefined
                paymentAmountFrom?: number | undefined
                paymentAmountTo?: number | undefined
                submittedDateFrom?: string | undefined
                submittedDateTo?: string | undefined
                transmissionType?: 'ACH' | 'SAME_DAY_ACH' | 'WIRE' | 'LOCAL' | 'GACHO' | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                sensitive?: boolean | undefined
              }
            }
            output: InlineResponse_404
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v4/paymentaudit/transactions': {
      $get:
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                include?: 'payorOnly' | 'payorAndDescendants' | undefined
              }
            }
            output: PayorAmlTransaction
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                include?: 'payorOnly' | 'payorAndDescendants' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                include?: 'payorOnly' | 'payorAndDescendants' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                payorId?: string | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                include?: 'payorOnly' | 'payorAndDescendants' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v4/payments/deltas': {
      $get:
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PaymentDeltaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                payorId: string
                updatedSince: string
                page?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes
