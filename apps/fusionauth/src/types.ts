type Algorithm =
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'PS256'
  | 'PS384'
  | 'PS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'none'
type KeyType = 'EC' | 'RSA' | 'HMAC' | 'OKP' | 'Secret'
type JSONWebKey = {
  alg?: Algorithm | undefined
  crv?: string | undefined
  d?: string | undefined
  dp?: string | undefined
  dq?: string | undefined
  e?: string | undefined
  kid?: string | undefined
  kty?: KeyType | undefined
  n?: string | undefined
  other?: { [x: string]: { [x: string]: unknown } } | undefined
  p?: string | undefined
  q?: string | undefined
  qi?: string | undefined
  use?: string | undefined
  x?: string | undefined
  x5c?: string[] | undefined
  x5t?: string | undefined
  'x5t#S256'?: string | undefined
  y?: string | undefined
}
type JWKSResponse = { keys?: JSONWebKey[] | undefined }
type OpenIdConfiguration = {
  authorization_endpoint?: string | undefined
  authorization_response_iss_parameter_supported?: boolean | undefined
  backchannel_logout_supported?: boolean | undefined
  claims_supported?: string[] | undefined
  client_id_metadata_document_supported?: boolean | undefined
  code_challenge_methods_supported?: string[] | undefined
  device_authorization_endpoint?: string | undefined
  dpop_signing_alg_values_supported?: string[] | undefined
  end_session_endpoint?: string | undefined
  frontchannel_logout_supported?: boolean | undefined
  grant_types_supported?: string[] | undefined
  id_token_signing_alg_values_supported?: string[] | undefined
  issuer?: string | undefined
  jwks_uri?: string | undefined
  response_modes_supported?: string[] | undefined
  response_types_supported?: string[] | undefined
  scopes_supported?: string[] | undefined
  subject_types_supported?: string[] | undefined
  token_endpoint?: string | undefined
  token_endpoint_auth_methods_supported?: string[] | undefined
  userinfo_endpoint?: string | undefined
  userinfo_signing_alg_values_supported?: string[] | undefined
}
type ZonedDateTime = bigint
type APIKeyMetaData = { attributes?: { [x: string]: string } | undefined }
type APIKeyPermissions = { endpoints?: { [x: string]: { [x: string]: unknown }[] } | undefined }
type APIKey = {
  expirationInstant?: ZonedDateTime | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  ipAccessControlListId?: string | undefined
  key?: string | undefined
  keyManager?: boolean | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  metaData?: APIKeyMetaData | undefined
  name?: string | undefined
  permissions?: APIKeyPermissions | undefined
  retrievable?: boolean | undefined
  tenantId?: string | undefined
}
type APIKeyRequest = { apiKey?: APIKey | undefined; sourceKeyId?: string | undefined }
type APIKeyResponse = { apiKey?: APIKey | undefined }
type Error = {
  code?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  message?: string | undefined
}
type Errors = {
  fieldErrors?: { [x: string]: Error[] } | undefined
  generalErrors?: Error[] | undefined
}
type ApplicationAccessControlConfiguration = { uiIPAccessControlListId?: string | undefined }
type AuthenticationTokenConfiguration = { enabled?: boolean | undefined }
type UsernameModeration = { applicationId?: string | undefined; enabled?: boolean | undefined }
type CleanSpeakConfiguration = {
  apiKey?: string | undefined
  applicationIds?: string[] | undefined
  url?: string | undefined
  usernameModeration?: UsernameModeration | undefined
  enabled?: boolean | undefined
}
type ApplicationEmailConfiguration = {
  emailUpdateEmailTemplateId?: string | undefined
  emailVerificationEmailTemplateId?: string | undefined
  emailVerifiedEmailTemplateId?: string | undefined
  forgotPasswordEmailTemplateId?: string | undefined
  loginIdInUseOnCreateEmailTemplateId?: string | undefined
  loginIdInUseOnUpdateEmailTemplateId?: string | undefined
  loginNewDeviceEmailTemplateId?: string | undefined
  loginSuspiciousEmailTemplateId?: string | undefined
  passwordResetSuccessEmailTemplateId?: string | undefined
  passwordUpdateEmailTemplateId?: string | undefined
  passwordlessEmailTemplateId?: string | undefined
  setPasswordEmailTemplateId?: string | undefined
  twoFactorMethodAddEmailTemplateId?: string | undefined
  twoFactorMethodRemoveEmailTemplateId?: string | undefined
}
type ApplicationExternalIdentifierConfiguration = {
  twoFactorTrustIdTimeToLiveInSeconds?: number | undefined
}
type SelfServiceFormConfiguration = { requireCurrentPasswordOnPasswordChange?: boolean | undefined }
type ApplicationFormConfiguration = {
  adminRegistrationFormId?: string | undefined
  selfServiceFormConfiguration?: SelfServiceFormConfiguration | undefined
  selfServiceFormId?: string | undefined
}
type RefreshTokenExpirationPolicy = 'Fixed' | 'SlidingWindow' | 'SlidingWindowWithMaximumLifetime'
type RefreshTokenOneTimeUseConfiguration = { gracePeriodInSeconds?: number | undefined }
type RefreshTokenRevocationPolicy = {
  onLoginPrevented?: boolean | undefined
  onMultiFactorEnable?: boolean | undefined
  onOneTimeTokenReuse?: boolean | undefined
  onPasswordChanged?: boolean | undefined
}
type RefreshTokenSlidingWindowConfiguration = { maximumTimeToLiveInMinutes?: number | undefined }
type RefreshTokenUsagePolicy = 'Reusable' | 'OneTimeUse'
type JWTConfiguration = {
  accessTokenKeyId?: string | undefined
  accessTokenVerificationKeyIds?: string[] | undefined
  idTokenKeyId?: string | undefined
  idTokenVerificationKeyIds?: string[] | undefined
  refreshTokenExpirationPolicy?: RefreshTokenExpirationPolicy | undefined
  refreshTokenOneTimeUseConfiguration?: RefreshTokenOneTimeUseConfiguration | undefined
  refreshTokenRevocationPolicy?: RefreshTokenRevocationPolicy | undefined
  refreshTokenSlidingWindowConfiguration?: RefreshTokenSlidingWindowConfiguration | undefined
  refreshTokenTimeToLiveInMinutes?: number | undefined
  refreshTokenUsagePolicy?: RefreshTokenUsagePolicy | undefined
  timeToLiveInSeconds?: number | undefined
  enabled?: boolean | undefined
}
type LambdaConfiguration = {
  accessTokenPopulateId?: string | undefined
  idTokenPopulateId?: string | undefined
  multiFactorRequirementId?: string | undefined
  samlv2PopulateId?: string | undefined
  selfServiceRegistrationValidationId?: string | undefined
  userinfoPopulateId?: string | undefined
}
type LoginConfiguration = {
  allowTokenRefresh?: boolean | undefined
  generateRefreshTokens?: boolean | undefined
  requireAuthentication?: boolean | undefined
}
type MultiFactorEmailTemplate = { templateId?: string | undefined }
type MultiFactorLoginPolicy =
  | 'ChallengeOnHighRisk'
  | 'ChallengeOnMediumRisk'
  | 'Disabled'
  | 'Enabled'
  | 'Required'
type MultiFactorSMSTemplate = { templateId?: string | undefined }
type ApplicationMultiFactorTrustPolicy = 'Any' | 'This' | 'None'
type MultiFactorVoiceTemplate = { templateId?: string | undefined }
type ApplicationMultiFactorConfiguration = {
  email?: MultiFactorEmailTemplate | undefined
  loginPolicy?: MultiFactorLoginPolicy | undefined
  sms?: MultiFactorSMSTemplate | undefined
  trustPolicy?: ApplicationMultiFactorTrustPolicy | undefined
  voice?: MultiFactorVoiceTemplate | undefined
}
type Oauth2AuthorizedURLValidationPolicy = 'AllowWildcards' | 'ExactMatch'
type ClientAuthenticationPolicy = 'Required' | 'NotRequired' | 'NotRequiredWhenUsingPKCE'
type OAuthScopeConsentMode = 'AlwaysPrompt' | 'RememberDecision' | 'NeverPrompt'
type LogoutBehavior = 'RedirectOnly' | 'AllApplications'
type ProofKeyForCodeExchangePolicy =
  | 'Required'
  | 'NotRequired'
  | 'NotRequiredWhenUsingClientAuthentication'
type Requirable = { required?: boolean | undefined; enabled?: boolean | undefined }
type ProvidedScopePolicy = {
  address?: Requirable | undefined
  email?: Requirable | undefined
  phone?: Requirable | undefined
  profile?: Requirable | undefined
}
type OAuthApplicationRelationship = 'FirstParty' | 'ThirdParty'
type OAuthScopeHandlingPolicy = 'Compatibility' | 'Strict'
type UnknownScopePolicy = 'Allow' | 'Remove' | 'Reject'
type OAuth2Configuration = {
  authorizedOriginURLs?: string[] | undefined
  authorizedRedirectURLs?: string[] | undefined
  authorizedResourceUris?: string[] | undefined
  authorizedURLValidationPolicy?: Oauth2AuthorizedURLValidationPolicy | undefined
  clientAuthenticationPolicy?: ClientAuthenticationPolicy | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  consentMode?: OAuthScopeConsentMode | undefined
  debug?: boolean | undefined
  deviceVerificationURL?: string | undefined
  enabledGrants?: { [x: string]: unknown }[] | undefined
  generateRefreshTokens?: boolean | undefined
  logoutBehavior?: LogoutBehavior | undefined
  logoutURL?: string | undefined
  proofKeyForCodeExchangePolicy?: ProofKeyForCodeExchangePolicy | undefined
  providedScopePolicy?: ProvidedScopePolicy | undefined
  relationship?: OAuthApplicationRelationship | undefined
  requireClientAuthentication?: boolean | undefined
  requireRegistration?: boolean | undefined
  scopeHandlingPolicy?: OAuthScopeHandlingPolicy | undefined
  unknownScopePolicy?: UnknownScopePolicy | undefined
}
type PasswordlessStrategy = 'ClickableLink' | 'FormField'
type PasswordlessConfiguration = {
  emailLoginStrategy?: PasswordlessStrategy | undefined
  phoneLoginStrategy?: PasswordlessStrategy | undefined
  enabled?: boolean | undefined
}
type ApplicationPhoneConfiguration = {
  forgotPasswordTemplateId?: string | undefined
  identityUpdateTemplateId?: string | undefined
  loginIdInUseOnCreateTemplateId?: string | undefined
  loginIdInUseOnUpdateTemplateId?: string | undefined
  loginNewDeviceTemplateId?: string | undefined
  loginSuspiciousTemplateId?: string | undefined
  passwordResetSuccessTemplateId?: string | undefined
  passwordUpdateTemplateId?: string | undefined
  passwordlessTemplateId?: string | undefined
  setPasswordTemplateId?: string | undefined
  twoFactorMethodAddTemplateId?: string | undefined
  twoFactorMethodRemoveTemplateId?: string | undefined
  verificationCompleteTemplateId?: string | undefined
  verificationTemplateId?: string | undefined
}
type LoginIdType = 'email' | 'phoneNumber' | 'username'
type RegistrationType = 'basic' | 'advanced'
type RegistrationConfiguration = {
  birthDate?: Requirable | undefined
  completeRegistration?: boolean | undefined
  confirmPassword?: boolean | undefined
  firstName?: Requirable | undefined
  formId?: string | undefined
  fullName?: Requirable | undefined
  lastName?: Requirable | undefined
  loginIdType?: LoginIdType | undefined
  middleName?: Requirable | undefined
  mobilePhone?: Requirable | undefined
  preferredLanguages?: Requirable | undefined
  type?: RegistrationType | undefined
  enabled?: boolean | undefined
}
type TimeBasedDeletePolicy = {
  enabledInstant?: ZonedDateTime | undefined
  numberOfDaysToRetain?: number | undefined
  enabled?: boolean | undefined
}
type ApplicationRegistrationDeletePolicy = { unverified?: TimeBasedDeletePolicy | undefined }
type ApplicationRole = {
  description?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  isDefault?: boolean | undefined
  isSuperRole?: boolean | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
}
type SAMLv2AssertionEncryptionConfiguration = {
  digestAlgorithm?: string | undefined
  encryptionAlgorithm?: string | undefined
  keyLocation?: string | undefined
  keyTransportAlgorithm?: string | undefined
  keyTransportEncryptionKeyId?: string | undefined
  maskGenerationFunction?: string | undefined
  enabled?: boolean | undefined
}
type SAMLv2IdPInitiatedLoginConfiguration = {
  nameIdFormat?: string | undefined
  enabled?: boolean | undefined
}
type LoginHintConfiguration = { parameterName?: string | undefined; enabled?: boolean | undefined }
type SAMLLogoutBehavior = 'AllParticipants' | 'OnlyOriginator'
type CanonicalizationMethod =
  | 'exclusive'
  | 'exclusive_with_comments'
  | 'inclusive'
  | 'inclusive_with_comments'
type SAMLv2SingleLogout = {
  keyId?: string | undefined
  url?: string | undefined
  xmlSignatureC14nMethod?: CanonicalizationMethod | undefined
  enabled?: boolean | undefined
}
type SAMLv2Logout = {
  behavior?: SAMLLogoutBehavior | undefined
  defaultVerificationKeyId?: string | undefined
  keyId?: string | undefined
  requireSignedRequests?: boolean | undefined
  singleLogout?: SAMLv2SingleLogout | undefined
  verificationKeyIds?: string[] | undefined
  xmlSignatureC14nMethod?: CanonicalizationMethod | undefined
}
type XMLSignatureLocation = 'Assertion' | 'Response'
type SAMLv2Configuration = {
  assertionEncryptionConfiguration?: SAMLv2AssertionEncryptionConfiguration | undefined
  audience?: string | undefined
  authorizedRedirectURLs?: string[] | undefined
  debug?: boolean | undefined
  defaultVerificationKeyId?: string | undefined
  initiatedLogin?: SAMLv2IdPInitiatedLoginConfiguration | undefined
  issuer?: string | undefined
  keyId?: string | undefined
  loginHintConfiguration?: LoginHintConfiguration | undefined
  logout?: SAMLv2Logout | undefined
  logoutURL?: string | undefined
  requireSignedRequests?: boolean | undefined
  verificationKeyIds?: string[] | undefined
  xmlSignatureC14nMethod?: CanonicalizationMethod | undefined
  xmlSignatureLocation?: XMLSignatureLocation | undefined
  callbackURL?: string | undefined
  enabled?: boolean | undefined
}
type ApplicationOAuthScope = {
  applicationId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  defaultConsentDetail?: string | undefined
  defaultConsentMessage?: string | undefined
  description?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  required?: boolean | undefined
}
type ObjectState = 'Active' | 'Inactive' | 'PendingDelete'
type UniversalApplicationConfiguration = { universal?: boolean | undefined }
type UnverifiedBehavior = 'Allow' | 'Gated'
type RegistrationUnverifiedOptions = { behavior?: UnverifiedBehavior | undefined }
type VerificationStrategy = 'ClickableLink' | 'FormField'
type ApplicationWebAuthnWorkflowConfiguration = { enabled?: boolean | undefined }
type ApplicationWebAuthnConfiguration = {
  bootstrapWorkflow?: ApplicationWebAuthnWorkflowConfiguration | undefined
  reauthenticationWorkflow?: ApplicationWebAuthnWorkflowConfiguration | undefined
  enabled?: boolean | undefined
}
type Application = {
  accessControlConfiguration?: ApplicationAccessControlConfiguration | undefined
  active?: boolean | undefined
  authenticationTokenConfiguration?: AuthenticationTokenConfiguration | undefined
  baseURL?: string | undefined
  cleanSpeakConfiguration?: CleanSpeakConfiguration | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  emailConfiguration?: ApplicationEmailConfiguration | undefined
  externalIdentifierConfiguration?: ApplicationExternalIdentifierConfiguration | undefined
  formConfiguration?: ApplicationFormConfiguration | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  jwtConfiguration?: JWTConfiguration | undefined
  lambdaConfiguration?: LambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  loginConfiguration?: LoginConfiguration | undefined
  multiFactorConfiguration?: ApplicationMultiFactorConfiguration | undefined
  name?: string | undefined
  oauthConfiguration?: OAuth2Configuration | undefined
  passwordlessConfiguration?: PasswordlessConfiguration | undefined
  phoneConfiguration?: ApplicationPhoneConfiguration | undefined
  registrationConfiguration?: RegistrationConfiguration | undefined
  registrationDeletePolicy?: ApplicationRegistrationDeletePolicy | undefined
  roles?: ApplicationRole[] | undefined
  samlv2Configuration?: SAMLv2Configuration | undefined
  scopes?: ApplicationOAuthScope[] | undefined
  state?: ObjectState | undefined
  tenantId?: string | undefined
  themeId?: string | undefined
  universalConfiguration?: UniversalApplicationConfiguration | undefined
  unverified?: RegistrationUnverifiedOptions | undefined
  verificationEmailTemplateId?: string | undefined
  verificationStrategy?: VerificationStrategy | undefined
  verifyRegistration?: boolean | undefined
  webAuthnConfiguration?: ApplicationWebAuthnConfiguration | undefined
}
type Location = {
  city?: string | undefined
  country?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  region?: string | undefined
  zipcode?: string | undefined
  displayString?: string | undefined
}
type EventInfo = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  deviceDescription?: string | undefined
  deviceName?: string | undefined
  deviceType?: string | undefined
  ipAddress?: string | undefined
  location?: Location | undefined
  os?: string | undefined
  userAgent?: string | undefined
}
type ApplicationRequest = {
  application?: Application | undefined
  role?: ApplicationRole | undefined
  sourceApplicationId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type ApplicationResponse = {
  application?: Application | undefined
  applications?: Application[] | undefined
  role?: ApplicationRole | undefined
}
type ApplicationSearchCriteria = {
  name?: string | undefined
  state?: ObjectState | undefined
  tenantId?: string | undefined
  universal?: boolean | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type ApplicationSearchRequest = {
  search?: ApplicationSearchCriteria | undefined
  expand?: string[] | undefined
}
type ApplicationSearchResponse = {
  applications?: Application[] | undefined
  total?: bigint | undefined
  expandable?: string[] | undefined
}
type OAuthConfigurationResponse = {
  httpSessionMaxInactiveInterval?: number | undefined
  logoutURL?: string | undefined
  oauthConfiguration?: OAuth2Configuration | undefined
}
type ApplicationOAuthScopeRequest = { scope?: ApplicationOAuthScope | undefined }
type ApplicationOAuthScopeResponse = { scope?: ApplicationOAuthScope | undefined }
type CimdDomainOAuthScope = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  defaultConsentDetail?: string | undefined
  defaultConsentMessage?: string | undefined
  description?: string | undefined
  domainId?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  required?: boolean | undefined
}
type CimdDomain = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  allowLocalhostRedirectUris?: boolean | undefined
  authorizedResourceUris?: string[] | undefined
  consentMode?: OAuthScopeConsentMode | undefined
  debug?: boolean | undefined
  domain?: string | undefined
  gracePeriodInSeconds?: number | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  jwtPopulateLambdaId?: string | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  maxCacheTtlInSeconds?: number | undefined
  name?: string | undefined
  providedScopePolicy?: ProvidedScopePolicy | undefined
  registrationLambdaId?: string | undefined
  scopes?: CimdDomainOAuthScope[] | undefined
  tenantId?: string | undefined
}
type CimdDomainRequest = { domain?: CimdDomain | undefined }
type CimdDomainResponse = { domain?: CimdDomain | undefined; domains?: CimdDomain[] | undefined }
type CimdDomainSearchCriteria = {
  domain?: string | undefined
  name?: string | undefined
  tenantId?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type CimdDomainSearchRequest = { search?: CimdDomainSearchCriteria | undefined }
type CimdDomainSearchResponse = { domains?: CimdDomain[] | undefined; total?: bigint | undefined }
type CimdDomainOAuthScopeRequest = { scope?: CimdDomainOAuthScope | undefined }
type CimdDomainOAuthScopeResponse = { scope?: CimdDomainOAuthScope | undefined }
type CimdClientRegistrationSearchCriteria = {
  cimdDomainId?: string | undefined
  clientId?: string | undefined
  tenantId?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type CimdClientRegistrationSearchRequest = {
  search?: CimdClientRegistrationSearchCriteria | undefined
}
type CimdClientRegistrationResourceOverride = {
  providedScopePolicy?: ProvidedScopePolicy | undefined
  scopes?: ApplicationOAuthScope[] | undefined
}
type CimdClientRegistrationState = 'Active' | 'Grace' | 'Expired'
type CimdClientRegistration = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  cacheExpirationInstant?: ZonedDateTime | undefined
  cimdDomainId?: string | undefined
  clientIdUrl?: string | undefined
  clientName?: string | undefined
  clientUri?: string | undefined
  graceExpirationInstant?: ZonedDateTime | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  jwtPopulateLambdaId?: string | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  overridesByResource?: { [x: string]: CimdClientRegistrationResourceOverride } | undefined
  redirectUris?: string[] | undefined
  tenantId?: string | undefined
  state?: CimdClientRegistrationState | undefined
}
type CimdClientRegistrationSearchResponse = {
  registrations?: CimdClientRegistration[] | undefined
  total?: bigint | undefined
}
type CimdClientRegistrationResponse = { registration?: CimdClientRegistration | undefined }
type ConnectorType = 'FusionAuth' | 'Generic' | 'LDAP'
type BaseConnectorConfiguration = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  type?: ConnectorType | undefined
}
type ConnectorRequest = { connector?: BaseConnectorConfiguration | undefined }
type ConnectorResponse = {
  connector?: BaseConnectorConfiguration | undefined
  connectors?: BaseConnectorConfiguration[] | undefined
}
type LocalizedIntegers = { [x: string]: unknown }
type EmailPlus = {
  emailTemplateId?: string | undefined
  maximumTimeToSendEmailInHours?: number | undefined
  minimumTimeToSendEmailInHours?: number | undefined
  enabled?: boolean | undefined
}
type Consent = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  consentEmailTemplateId?: string | undefined
  countryMinimumAgeForSelfConsent?: LocalizedIntegers | undefined
  defaultMinimumAgeForSelfConsent?: number | undefined
  emailPlus?: EmailPlus | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  multipleValuesAllowed?: boolean | undefined
  name?: string | undefined
  values?: string[] | undefined
}
type ConsentRequest = { consent?: Consent | undefined }
type ConsentResponse = { consent?: Consent | undefined; consents?: Consent[] | undefined }
type ConsentSearchCriteria = {
  name?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type ConsentSearchRequest = { search?: ConsentSearchCriteria | undefined }
type ConsentSearchResponse = { consents?: Consent[] | undefined; total?: bigint | undefined }
type Locale = string
type EmailAddress = { address?: string | undefined; display?: string | undefined }
type SendRequest = {
  applicationId?: string | undefined
  bccAddresses?: string[] | undefined
  ccAddresses?: string[] | undefined
  preferredLanguages?: Locale[] | undefined
  requestData?: { [x: string]: { [x: string]: unknown } } | undefined
  toAddresses?: EmailAddress[] | undefined
  userIds?: string[] | undefined
}
type EmailTemplateErrors = {
  parseErrors?: { [x: string]: string } | undefined
  renderErrors?: { [x: string]: string } | undefined
}
type SendResponse = {
  anonymousResults?: { [x: string]: EmailTemplateErrors } | undefined
  results?: { [x: string]: EmailTemplateErrors } | undefined
}
type LocalizedStrings = { [x: string]: unknown }
type EmailTemplate = {
  defaultFromName?: string | undefined
  defaultHtmlTemplate?: string | undefined
  defaultSubject?: string | undefined
  defaultTextTemplate?: string | undefined
  fromEmail?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  localizedFromNames?: LocalizedStrings | undefined
  localizedHtmlTemplates?: LocalizedStrings | undefined
  localizedSubjects?: LocalizedStrings | undefined
  localizedTextTemplates?: LocalizedStrings | undefined
  name?: string | undefined
}
type EmailTemplateRequest = { emailTemplate?: EmailTemplate | undefined }
type EmailTemplateResponse = {
  emailTemplate?: EmailTemplate | undefined
  emailTemplates?: EmailTemplate[] | undefined
}
type PreviewRequest = { emailTemplate?: EmailTemplate | undefined; locale?: Locale | undefined }
type Attachment = {
  attachment?: File | undefined
  mime?: string | undefined
  name?: string | undefined
}
type Email = {
  attachments?: Attachment[] | undefined
  bcc?: EmailAddress[] | undefined
  cc?: EmailAddress[] | undefined
  from?: EmailAddress | undefined
  html?: string | undefined
  replyTo?: EmailAddress | undefined
  subject?: string | undefined
  text?: string | undefined
  to?: EmailAddress[] | undefined
}
type PreviewResponse = { email?: Email | undefined; errors?: Errors | undefined }
type EmailTemplateSearchCriteria = {
  name?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type EmailTemplateSearchRequest = { search?: EmailTemplateSearchCriteria | undefined }
type EmailTemplateSearchResponse = {
  emailTemplates?: EmailTemplate[] | undefined
  total?: bigint | undefined
}
type EntityJWTConfiguration = {
  accessTokenKeyId?: string | undefined
  accessTokenVerificationKeyIds?: string[] | undefined
  timeToLiveInSeconds?: number | undefined
  enabled?: boolean | undefined
}
type EntityTypePermission = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  description?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  isDefault?: boolean | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
}
type EntityType = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  jwtConfiguration?: EntityJWTConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  permissions?: EntityTypePermission[] | undefined
}
type Entity = {
  actAsTokenExchangeClient?: boolean | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  parentId?: string | undefined
  tenantId?: string | undefined
  type?: EntityType | undefined
}
type EntityRequest = { entity?: Entity | undefined }
type EntityResponse = { entity?: Entity | undefined }
type EntityGrantSearchCriteria = {
  entityId?: string | undefined
  name?: string | undefined
  userId?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type EntityGrantSearchRequest = { search?: EntityGrantSearchCriteria | undefined }
type EntityGrant = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  entity?: Entity | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  permissions?: { [x: string]: unknown }[] | undefined
  recipientEntityId?: string | undefined
  userId?: string | undefined
}
type EntityGrantSearchResponse = { grants?: EntityGrant[] | undefined; total?: bigint | undefined }
type Sort = 'asc' | 'desc'
type SortField = {
  missing?: string | undefined
  name?: string | undefined
  order?: Sort | undefined
}
type EntitySearchCriteria = {
  accurateTotal?: boolean | undefined
  ids?: string[] | undefined
  nextResults?: string | undefined
  query?: string | undefined
  queryString?: string | undefined
  sortFields?: SortField[] | undefined
}
type EntitySearchRequest = { search?: EntitySearchCriteria | undefined }
type EntitySearchResponse = {
  entities?: Entity[] | undefined
  nextResults?: string | undefined
  total?: bigint | undefined
}
type EntityTypeRequest = {
  entityType?: EntityType | undefined
  permission?: EntityTypePermission | undefined
}
type EntityTypeResponse = {
  entityType?: EntityType | undefined
  entityTypes?: EntityType[] | undefined
  permission?: EntityTypePermission | undefined
}
type EntityTypeSearchCriteria = {
  name?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type EntityTypeSearchRequest = { search?: EntityTypeSearchCriteria | undefined }
type EntityTypeSearchResponse = {
  entityTypes?: EntityType[] | undefined
  total?: bigint | undefined
}
type EntityGrantResponse = { grants?: EntityGrant[] | undefined; grant?: EntityGrant | undefined }
type EntityGrantRequest = { grant?: EntityGrant | undefined }
type FormStepType = 'collectData' | 'verifyEmail' | 'verifyPhoneNumber'
type FormStep = { fields?: string[] | undefined; type?: FormStepType | undefined }
type FormType = 'registration' | 'adminRegistration' | 'adminUser' | 'selfServiceUser'
type Form = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  steps?: FormStep[] | undefined
  type?: FormType | undefined
}
type FormRequest = { form?: Form | undefined }
type FormResponse = { form?: Form | undefined; forms?: Form[] | undefined }
type FormControl = 'checkbox' | 'number' | 'password' | 'radio' | 'select' | 'textarea' | 'text'
type FormDataType = 'bool' | 'consent' | 'date' | 'email' | 'number' | 'phoneNumber' | 'string'
type FormFieldValidator = { expression?: string | undefined; enabled?: boolean | undefined }
type FormField = {
  confirm?: boolean | undefined
  consentId?: string | undefined
  control?: FormControl | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  description?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  key?: string | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  options?: string[] | undefined
  required?: boolean | undefined
  type?: FormDataType | undefined
  validator?: FormFieldValidator | undefined
}
type FormFieldRequest = { field?: FormField | undefined; fields?: FormField[] | undefined }
type FormFieldResponse = { field?: FormField | undefined; fields?: FormField[] | undefined }
type Group = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  roles?: { [x: string]: ApplicationRole[] } | undefined
  tenantId?: string | undefined
}
type GroupRequest = { group?: Group | undefined; roleIds?: string[] | undefined }
type GroupResponse = { group?: Group | undefined; groups?: Group[] | undefined }
type GroupMember = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  groupId?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  userId?: string | undefined
}
type MemberRequest = { members?: { [x: string]: GroupMember[] } | undefined }
type MemberResponse = { members?: { [x: string]: GroupMember[] } | undefined }
type MemberDeleteRequest = {
  memberIds?: string[] | undefined
  members?: { [x: string]: string[] } | undefined
}
type GroupMemberSearchCriteria = {
  groupId?: string | undefined
  tenantId?: string | undefined
  userId?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type GroupMemberSearchRequest = { search?: GroupMemberSearchCriteria | undefined }
type GroupMemberSearchResponse = { members?: GroupMember[] | undefined; total?: bigint | undefined }
type GroupSearchCriteria = {
  name?: string | undefined
  tenantId?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type GroupSearchRequest = { search?: GroupSearchCriteria | undefined }
type GroupSearchResponse = { groups?: Group[] | undefined; total?: bigint | undefined }
type AppleApplicationConfiguration = {
  bundleId?: string | undefined
  buttonText?: string | undefined
  keyId?: string | undefined
  scope?: string | undefined
  servicesId?: string | undefined
  teamId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type ProviderLambdaConfiguration = { reconcileId?: string | undefined }
type IdentityProviderLinkingStrategy =
  | 'CreatePendingLink'
  | 'Disabled'
  | 'LinkAnonymously'
  | 'LinkByEmail'
  | 'LinkByEmailForExistingUser'
  | 'LinkByUsername'
  | 'LinkByUsernameForExistingUser'
  | 'Unsupported'
type IdentityProviderLimitUserLinkingPolicy = {
  maximumLinks?: number | undefined
  enabled?: boolean | undefined
}
type IdentityProviderTenantConfiguration = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  limitUserLinkCount?: IdentityProviderLimitUserLinkingPolicy | undefined
}
type IdentityProviderType =
  | 'Apple'
  | 'EpicGames'
  | 'ExternalJWT'
  | 'Facebook'
  | 'Google'
  | 'HYPR'
  | 'LinkedIn'
  | 'Nintendo'
  | 'OpenIDConnect'
  | 'SAMLv2'
  | 'SAMLv2IdPInitiated'
  | 'SonyPSN'
  | 'Steam'
  | 'Twitch'
  | 'Twitter'
  | 'Xbox'
type AppleIdentityProvider = {
  bundleId?: string | undefined
  buttonText?: string | undefined
  keyId?: string | undefined
  scope?: string | undefined
  servicesId?: string | undefined
  teamId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: AppleApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type EpicGamesApplicationConfiguration = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type EpicGamesIdentityProvider = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: EpicGamesApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type ClientAuthenticationMethod = 'none' | 'client_secret_basic' | 'client_secret_post'
type IdentityProviderOauth2Configuration = {
  authorization_endpoint?: string | undefined
  clientAuthenticationMethod?: ClientAuthenticationMethod | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  emailClaim?: string | undefined
  emailVerifiedClaim?: string | undefined
  issuer?: string | undefined
  scope?: string | undefined
  token_endpoint?: string | undefined
  uniqueIdClaim?: string | undefined
  userinfo_endpoint?: string | undefined
  usernameClaim?: string | undefined
}
type ExternalJWTApplicationConfiguration = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type ExternalJWTIdentityProvider = {
  claimMap?: { [x: string]: string } | undefined
  domains?: { [x: string]: unknown }[] | undefined
  defaultKeyId?: string | undefined
  verificationKeyIds?: string[] | undefined
  headerKeyParameter?: string | undefined
  oauth2?: IdentityProviderOauth2Configuration | undefined
  uniqueIdentityClaim?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: ExternalJWTApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type IdentityProviderLoginMethod = 'UsePopup' | 'UseRedirect' | 'UseVendorJavaScript'
type FacebookApplicationConfiguration = {
  appId?: string | undefined
  buttonText?: string | undefined
  client_secret?: string | undefined
  fields?: string | undefined
  loginMethod?: IdentityProviderLoginMethod | undefined
  permissions?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type FacebookIdentityProvider = {
  appId?: string | undefined
  buttonText?: string | undefined
  client_secret?: string | undefined
  fields?: string | undefined
  loginMethod?: IdentityProviderLoginMethod | undefined
  permissions?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: FacebookApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type GoogleIdentityProviderProperties = { api?: string | undefined; button?: string | undefined }
type GoogleApplicationConfiguration = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  loginMethod?: IdentityProviderLoginMethod | undefined
  properties?: GoogleIdentityProviderProperties | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type GoogleIdentityProvider = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  loginMethod?: IdentityProviderLoginMethod | undefined
  properties?: GoogleIdentityProviderProperties | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: GoogleApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type HYPRApplicationConfiguration = {
  relyingPartyApplicationId?: string | undefined
  relyingPartyURL?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type HYPRIdentityProvider = {
  relyingPartyApplicationId?: string | undefined
  relyingPartyURL?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: HYPRApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type LinkedInApplicationConfiguration = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type LinkedInIdentityProvider = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: LinkedInApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type NintendoApplicationConfiguration = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  emailClaim?: string | undefined
  scope?: string | undefined
  uniqueIdClaim?: string | undefined
  usernameClaim?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type NintendoIdentityProvider = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  emailClaim?: string | undefined
  scope?: string | undefined
  uniqueIdClaim?: string | undefined
  usernameClaim?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: NintendoApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type OpenIdConnectApplicationConfiguration = {
  buttonImageURL?: string | undefined
  buttonText?: string | undefined
  oauth2?: IdentityProviderOauth2Configuration | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type OpenIdConnectIdentityProvider = {
  domains?: { [x: string]: unknown }[] | undefined
  buttonImageURL?: string | undefined
  buttonText?: string | undefined
  oauth2?: IdentityProviderOauth2Configuration | undefined
  postRequest?: boolean | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: OpenIdConnectApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type SAMLv2AssertionDecryptionConfiguration = {
  keyTransportDecryptionKeyId?: string | undefined
  enabled?: boolean | undefined
}
type SAMLv2IdPInitiatedIdentityProvider = {
  issuer?: string | undefined
  assertionDecryptionConfiguration?: SAMLv2AssertionDecryptionConfiguration | undefined
  emailClaim?: string | undefined
  keyId?: string | undefined
  verificationKeyIds?: string[] | undefined
  uniqueIdClaim?: string | undefined
  useNameIdForEmail?: boolean | undefined
  usernameClaim?: string | undefined
}
type SAMLv2DestinationAssertionPolicy = 'Enabled' | 'Disabled' | 'AllowAlternates'
type SAMLv2DestinationAssertionConfiguration = {
  alternates?: string[] | undefined
  policy?: SAMLv2DestinationAssertionPolicy | undefined
}
type SAMLv2AssertionConfiguration = {
  destination?: SAMLv2DestinationAssertionConfiguration | undefined
}
type SAMLv2IdpInitiatedConfiguration = {
  issuer?: string | undefined
  enabled?: boolean | undefined
}
type SAMLv2IdentityProvider = {
  domains?: { [x: string]: unknown }[] | undefined
  assertionConfiguration?: SAMLv2AssertionConfiguration | undefined
  buttonImageURL?: string | undefined
  buttonText?: string | undefined
  idpEndpoint?: string | undefined
  idpInitiatedConfiguration?: SAMLv2IdpInitiatedConfiguration | undefined
  issuer?: string | undefined
  loginHintConfiguration?: LoginHintConfiguration | undefined
  nameIdFormat?: string | undefined
  postRequest?: boolean | undefined
  requestSigningKeyId?: string | undefined
  signRequest?: boolean | undefined
  xmlSignatureC14nMethod?: CanonicalizationMethod | undefined
  assertionDecryptionConfiguration?: SAMLv2AssertionDecryptionConfiguration | undefined
  emailClaim?: string | undefined
  keyId?: string | undefined
  verificationKeyIds?: string[] | undefined
  uniqueIdClaim?: string | undefined
  useNameIdForEmail?: boolean | undefined
  usernameClaim?: string | undefined
}
type SonyPSNApplicationConfiguration = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type SonyPSNIdentityProvider = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: SonyPSNApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type SteamAPIMode = 'Public' | 'Partner'
type SteamApplicationConfiguration = {
  apiMode?: SteamAPIMode | undefined
  buttonText?: string | undefined
  client_id?: string | undefined
  scope?: string | undefined
  webAPIKey?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type SteamIdentityProvider = {
  apiMode?: SteamAPIMode | undefined
  buttonText?: string | undefined
  client_id?: string | undefined
  scope?: string | undefined
  webAPIKey?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: SteamApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type TwitchApplicationConfiguration = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type TwitchIdentityProvider = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: TwitchApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type TwitterApplicationConfiguration = {
  buttonText?: string | undefined
  consumerKey?: string | undefined
  consumerSecret?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type TwitterIdentityProvider = {
  buttonText?: string | undefined
  consumerKey?: string | undefined
  consumerSecret?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: TwitterApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type XboxApplicationConfiguration = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  createRegistration?: boolean | undefined
}
type XboxIdentityProvider = {
  buttonText?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  scope?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationConfiguration?: { [x: string]: XboxApplicationConfiguration } | undefined
  attributeMappings?: { [x: string]: string } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lambdaConfiguration?: ProviderLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  name?: string | undefined
  source?: string | undefined
  tenantConfiguration?: { [x: string]: IdentityProviderTenantConfiguration } | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type IdentityProviderField =
  | AppleIdentityProvider
  | EpicGamesIdentityProvider
  | ExternalJWTIdentityProvider
  | FacebookIdentityProvider
  | GoogleIdentityProvider
  | HYPRIdentityProvider
  | LinkedInIdentityProvider
  | NintendoIdentityProvider
  | OpenIdConnectIdentityProvider
  | SAMLv2IdPInitiatedIdentityProvider
  | SAMLv2IdentityProvider
  | SonyPSNIdentityProvider
  | SteamIdentityProvider
  | TwitchIdentityProvider
  | TwitterIdentityProvider
  | XboxIdentityProvider
type IdentityProviderRequest = { identityProvider?: IdentityProviderField | undefined }
type IdentityProviderResponse = {
  identityProvider?: IdentityProviderField | undefined
  identityProviders?: IdentityProviderField[] | undefined
}
type IdentityProviderLink = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  displayName?: string | undefined
  identityProviderId?: string | undefined
  identityProviderName?: string | undefined
  identityProviderType?: IdentityProviderType | undefined
  identityProviderUserId?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastLoginInstant?: ZonedDateTime | undefined
  tenantId?: string | undefined
  token?: string | undefined
  userId?: string | undefined
}
type IdentityProviderLinkRequest = {
  identityProviderLink?: IdentityProviderLink | undefined
  pendingIdPLinkId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type IdentityProviderLinkResponse = {
  identityProviderLink?: IdentityProviderLink | undefined
  identityProviderLinks?: IdentityProviderLink[] | undefined
}
type LocalDate = string
type ZoneId = string
type TOTPAlgorithm = 'HmacSHA1' | 'HmacSHA256' | 'HmacSHA512'
type AuthenticatorConfiguration = {
  algorithm?: TOTPAlgorithm | undefined
  codeLength?: number | undefined
  timeStep?: number | undefined
}
type TwoFactorMethod = {
  authenticator?: AuthenticatorConfiguration | undefined
  email?: string | undefined
  id?: string | undefined
  lastUsed?: boolean | undefined
  method?: string | undefined
  mobilePhone?: string | undefined
  name?: string | undefined
  secret?: string | undefined
}
type UserTwoFactorConfiguration = {
  methods?: TwoFactorMethod[] | undefined
  recoveryCodes?: string[] | undefined
}
type ContentStatus = 'ACTIVE' | 'PENDING' | 'REJECTED'
type UserRegistration = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  preferredLanguages?: Locale[] | undefined
  tokens?: { [x: string]: string } | undefined
  applicationId?: string | undefined
  authenticationToken?: string | undefined
  cleanSpeakId?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastLoginInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  roles?: { [x: string]: unknown }[] | undefined
  timezone?: ZoneId | undefined
  username?: string | undefined
  usernameStatus?: ContentStatus | undefined
  verified?: boolean | undefined
  verifiedInstant?: ZonedDateTime | undefined
}
type IdentityType = { name?: string | undefined }
type IdentityVerifiedReason =
  | 'Skipped'
  | 'Trusted'
  | 'Unverifiable'
  | 'Implicit'
  | 'Pending'
  | 'Completed'
  | 'Disabled'
  | 'Administrative'
  | 'Import'
type UserIdentity = {
  displayValue?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastLoginInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  moderationStatus?: ContentStatus | undefined
  primary?: boolean | undefined
  type?: IdentityType | undefined
  value?: string | undefined
  verified?: boolean | undefined
  verifiedInstant?: ZonedDateTime | undefined
  verifiedReason?: IdentityVerifiedReason | undefined
}
type BreachedPasswordStatus =
  | 'None'
  | 'ExactMatch'
  | 'SubAddressMatch'
  | 'PasswordOnly'
  | 'CommonPassword'
type ChangePasswordReason = 'Administrative' | 'Breached' | 'Expired' | 'Validation'
type User = {
  preferredLanguages?: Locale[] | undefined
  active?: boolean | undefined
  birthDate?: LocalDate | undefined
  cleanSpeakId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  email?: string | undefined
  expiry?: ZonedDateTime | undefined
  firstName?: string | undefined
  fullName?: string | undefined
  imageUrl?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastName?: string | undefined
  legacyIdentifier?: string | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  middleName?: string | undefined
  mobilePhone?: string | undefined
  parentEmail?: string | undefined
  phoneNumber?: string | undefined
  tenantId?: string | undefined
  timezone?: ZoneId | undefined
  twoFactor?: UserTwoFactorConfiguration | undefined
  memberships?: GroupMember[] | undefined
  registrations?: UserRegistration[] | undefined
  identities?: UserIdentity[] | undefined
  breachedPasswordLastCheckedInstant?: ZonedDateTime | undefined
  breachedPasswordStatus?: BreachedPasswordStatus | undefined
  connectorId?: string | undefined
  encryptionScheme?: string | undefined
  factor?: number | undefined
  id?: string | undefined
  lastLoginInstant?: ZonedDateTime | undefined
  password?: string | undefined
  passwordChangeReason?: ChangePasswordReason | undefined
  passwordChangeRequired?: boolean | undefined
  passwordLastUpdateInstant?: ZonedDateTime | undefined
  salt?: string | undefined
  uniqueUsername?: string | undefined
  username?: string | undefined
  usernameStatus?: ContentStatus | undefined
  verified?: boolean | undefined
  verifiedInstant?: ZonedDateTime | undefined
}
type PendingIdPLink = {
  displayName?: string | undefined
  email?: string | undefined
  identityProviderId?: string | undefined
  identityProviderLinks?: IdentityProviderLink[] | undefined
  identityProviderName?: string | undefined
  identityProviderTenantConfiguration?: IdentityProviderTenantConfiguration | undefined
  identityProviderType?: IdentityProviderType | undefined
  identityProviderUserId?: string | undefined
  user?: User | undefined
  username?: string | undefined
}
type IdentityProviderPendingLinkResponse = {
  identityProviderTenantConfiguration?: IdentityProviderTenantConfiguration | undefined
  linkCount?: number | undefined
  pendingIdPLink?: PendingIdPLink | undefined
}
type DeviceInfo = {
  description?: string | undefined
  lastAccessedAddress?: string | undefined
  lastAccessedInstant?: ZonedDateTime | undefined
  name?: string | undefined
  type?: string | undefined
}
type MetaData = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  device?: DeviceInfo | undefined
  resources?: string[] | undefined
  scopes?: { [x: string]: unknown }[] | undefined
}
type IdentityProviderLoginRequest = {
  connectionTestId?: string | undefined
  data?: { [x: string]: string } | undefined
  identityProviderId?: string | undefined
  noLink?: boolean | undefined
  encodedJWT?: string | undefined
  applicationId?: string | undefined
  botDetectionScore?: number | undefined
  ipAddress?: string | undefined
  metaData?: MetaData | undefined
  newDevice?: boolean | undefined
  noJWT?: boolean | undefined
}
type LoginPreventedResponse = {
  actionId?: string | undefined
  actionerUserId?: string | undefined
  expiry?: ZonedDateTime | undefined
  localizedName?: string | undefined
  localizedOption?: string | undefined
  localizedReason?: string | undefined
  name?: string | undefined
  option?: string | undefined
  reason?: string | undefined
  reasonCode?: string | undefined
}
type LoginResponse = {
  actions?: LoginPreventedResponse[] | undefined
  changePasswordId?: string | undefined
  changePasswordReason?: ChangePasswordReason | undefined
  configurableMethods?: string[] | undefined
  emailVerificationId?: string | undefined
  identityVerificationId?: string | undefined
  methods?: TwoFactorMethod[] | undefined
  pendingIdPLinkId?: string | undefined
  refreshToken?: string | undefined
  refreshTokenId?: string | undefined
  registrationVerificationId?: string | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
  threatsDetected?: { [x: string]: unknown }[] | undefined
  token?: string | undefined
  tokenExpirationInstant?: ZonedDateTime | undefined
  trustToken?: string | undefined
  twoFactorId?: string | undefined
  twoFactorTrustId?: string | undefined
  user?: User | undefined
}
type IdentityProviderDetails = {
  applicationIds?: string[] | undefined
  id?: string | undefined
  idpEndpoint?: string | undefined
  name?: string | undefined
  oauth2?: IdentityProviderOauth2Configuration | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
}
type LookupResponse = { identityProvider?: IdentityProviderDetails | undefined }
type IdentityProviderSearchCriteria = {
  applicationId?: string | undefined
  name?: string | undefined
  source?: string | undefined
  tenantId?: string | undefined
  type?: IdentityProviderType | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type IdentityProviderSearchRequest = { search?: IdentityProviderSearchCriteria | undefined }
type IdentityProviderSearchResponse = {
  identityProviders?: IdentityProviderField[] | undefined
  total?: bigint | undefined
}
type IdentityProviderStartLoginRequest = {
  connectionTestId?: string | undefined
  data?: { [x: string]: string } | undefined
  identityProviderId?: string | undefined
  loginId?: string | undefined
  loginIdTypes?: string[] | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
  applicationId?: string | undefined
  botDetectionScore?: number | undefined
  ipAddress?: string | undefined
  metaData?: MetaData | undefined
  newDevice?: boolean | undefined
  noJWT?: boolean | undefined
}
type IdentityProviderStartLoginResponse = { code?: string | undefined }
type IdentityProviderLoginStep = {
  detail?: string | undefined
  success?: boolean | undefined
  title?: string | undefined
}
type IdentityProviderConnectionTestResult = {
  email?: string | undefined
  identityProviderId?: string | undefined
  identityProviderUserId?: string | undefined
  startInstant?: ZonedDateTime | undefined
  steps?: IdentityProviderLoginStep[] | undefined
  success?: boolean | undefined
  username?: string | undefined
}
type IdentityProviderConnectionTestResponse = {
  connectionTestId?: string | undefined
  result?: IdentityProviderConnectionTestResult | undefined
}
type IdentityProviderConnectionTestRequest = {
  identityProviderId?: string | undefined
  tenantId?: string | undefined
}
type VerifyRequest = {
  loginId?: string | undefined
  loginIdType?: string | undefined
  eventInfo?: EventInfo | undefined
}
type VerifyCompleteRequest = {
  oneTimeCode?: string | undefined
  verificationId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type VerifyCompleteResponse = { state?: { [x: string]: { [x: string]: unknown } } | undefined }
type VerifySendRequest = { verificationId?: string | undefined }
type ExistingUserStrategy = 'mustExist' | 'mustNotExist'
type VerifyStartRequest = {
  applicationId?: string | undefined
  existingUserStrategy?: ExistingUserStrategy | undefined
  loginId?: string | undefined
  loginIdType?: string | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
  verificationStrategy?: VerificationStrategy | undefined
}
type VerifyStartResponse = { oneTimeCode?: string | undefined; verificationId?: string | undefined }
type KafkaConfiguration = {
  defaultTopic?: string | undefined
  producer?: { [x: string]: string } | undefined
  enabled?: boolean | undefined
}
type Integrations = {
  cleanspeak?: CleanSpeakConfiguration | undefined
  kafka?: KafkaConfiguration | undefined
}
type IntegrationRequest = { integrations?: Integrations | undefined }
type IntegrationResponse = { integrations?: Integrations | undefined }
type IPAccessControlEntryAction = 'Allow' | 'Block'
type IPAccessControlEntry = {
  action?: IPAccessControlEntryAction | undefined
  endIPAddress?: string | undefined
  startIPAddress?: string | undefined
}
type IPAccessControlList = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  entries?: IPAccessControlEntry[] | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
}
type IPAccessControlListRequest = { ipAccessControlList?: IPAccessControlList | undefined }
type IPAccessControlListResponse = {
  ipAccessControlList?: IPAccessControlList | undefined
  ipAccessControlLists?: IPAccessControlList[] | undefined
}
type IPAccessControlListSearchCriteria = {
  name?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type IPAccessControlListSearchRequest = { search?: IPAccessControlListSearchCriteria | undefined }
type IPAccessControlListSearchResponse = {
  ipAccessControlLists?: IPAccessControlList[] | undefined
  total?: bigint | undefined
}
type IssueResponse = { refreshToken?: string | undefined; token?: string | undefined }
type PublicKeyResponse = {
  publicKey?: string | undefined
  publicKeys?: { [x: string]: string } | undefined
}
type RefreshRequest = {
  refreshToken?: string | undefined
  timeToLiveInSeconds?: number | undefined
  token?: string | undefined
  eventInfo?: EventInfo | undefined
}
type JWTRefreshResponse = {
  refreshToken?: string | undefined
  refreshTokenId?: string | undefined
  token?: string | undefined
}
type RefreshToken = {
  applicationId?: string | undefined
  cimdClientRegistrationId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  metaData?: MetaData | undefined
  startInstant?: ZonedDateTime | undefined
  tenantId?: string | undefined
  token?: string | undefined
  userId?: string | undefined
}
type RefreshTokenResponse = {
  refreshToken?: RefreshToken | undefined
  refreshTokens?: RefreshToken[] | undefined
}
type RefreshTokenRevokeRequest = {
  applicationId?: string | undefined
  token?: string | undefined
  userId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type JWT = {
  aud?: { [x: string]: unknown } | undefined
  exp?: ZonedDateTime | undefined
  iat?: ZonedDateTime | undefined
  iss?: string | undefined
  nbf?: ZonedDateTime | undefined
  otherClaims?: { [x: string]: { [x: string]: unknown } } | undefined
  sub?: string | undefined
  jti?: string | undefined
}
type ValidateResponse = { jwt?: JWT | undefined }
type JWTVendRequest = {
  claims?: { [x: string]: { [x: string]: unknown } } | undefined
  keyId?: string | undefined
  timeToLiveInSeconds?: number | undefined
}
type JWTVendResponse = { token?: string | undefined }
type KeyAlgorithm =
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'Ed25519'
  | 'None'
type CertificateInformation = {
  issuer?: string | undefined
  md5Fingerprint?: string | undefined
  serialNumber?: string | undefined
  sha1Fingerprint?: string | undefined
  sha1Thumbprint?: string | undefined
  sha256Fingerprint?: string | undefined
  sha256Thumbprint?: string | undefined
  subject?: string | undefined
  validFrom?: ZonedDateTime | undefined
  validTo?: ZonedDateTime | undefined
}
type Key = {
  algorithm?: KeyAlgorithm | undefined
  certificate?: string | undefined
  certificateInformation?: CertificateInformation | undefined
  expirationInstant?: ZonedDateTime | undefined
  hasPrivateKey?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  issuer?: string | undefined
  kid?: string | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  length?: number | undefined
  name?: string | undefined
  privateKey?: string | undefined
  publicKey?: string | undefined
  secret?: string | undefined
  type?: KeyType | undefined
}
type KeyResponse = { key?: Key | undefined; keys?: Key[] | undefined }
type KeyRequest = { key?: Key | undefined }
type KeySearchCriteria = {
  algorithm?: KeyAlgorithm | undefined
  name?: string | undefined
  type?: KeyType | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type KeySearchRequest = { search?: KeySearchCriteria | undefined }
type KeySearchResponse = { keys?: Key[] | undefined; total?: bigint | undefined }
type LambdaEngineType = 'GraalJS' | 'Nashorn'
type LambdaType =
  | 'JWTPopulate'
  | 'OpenIDReconcile'
  | 'SAMLv2Reconcile'
  | 'SAMLv2Populate'
  | 'AppleReconcile'
  | 'ExternalJWTReconcile'
  | 'FacebookReconcile'
  | 'GoogleReconcile'
  | 'HYPRReconcile'
  | 'TwitterReconcile'
  | 'LDAPConnectorReconcile'
  | 'LinkedInReconcile'
  | 'EpicGamesReconcile'
  | 'NintendoReconcile'
  | 'SonyPSNReconcile'
  | 'SteamReconcile'
  | 'TwitchReconcile'
  | 'XboxReconcile'
  | 'ClientCredentialsJWTPopulate'
  | 'SCIMServerGroupRequestConverter'
  | 'SCIMServerGroupResponseConverter'
  | 'SCIMServerUserRequestConverter'
  | 'SCIMServerUserResponseConverter'
  | 'SelfServiceRegistrationValidation'
  | 'UserInfoPopulate'
  | 'LoginValidation'
  | 'MFARequirement'
  | 'TokenExchangePolicy'
  | 'TokenExchangePopulate'
  | 'CimdClientRegistration'
type Lambda = {
  body?: string | undefined
  debug?: boolean | undefined
  engineType?: LambdaEngineType | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  type?: LambdaType | undefined
}
type LambdaRequest = { lambda?: Lambda | undefined }
type LambdaResponse = { lambda?: Lambda | undefined; lambdas?: Lambda[] | undefined }
type LambdaSearchCriteria = {
  body?: string | undefined
  name?: string | undefined
  type?: LambdaType | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type LambdaSearchRequest = { search?: LambdaSearchCriteria | undefined }
type LambdaSearchResponse = { lambdas?: Lambda[] | undefined; total?: bigint | undefined }
type LoginRequest = {
  loginId?: string | undefined
  loginIdTypes?: string[] | undefined
  oneTimePassword?: string | undefined
  password?: string | undefined
  twoFactorTrustId?: string | undefined
  applicationId?: string | undefined
  botDetectionScore?: number | undefined
  ipAddress?: string | undefined
  metaData?: MetaData | undefined
  newDevice?: boolean | undefined
  noJWT?: boolean | undefined
}
type LoginPingRequest = {
  userId?: string | undefined
  applicationId?: string | undefined
  botDetectionScore?: number | undefined
  ipAddress?: string | undefined
  metaData?: MetaData | undefined
  newDevice?: boolean | undefined
  noJWT?: boolean | undefined
}
type LogoutRequest = {
  global?: boolean | undefined
  refreshToken?: string | undefined
  eventInfo?: EventInfo | undefined
}
type MessageType = 'SMS' | 'Voice'
type MessageTemplate = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  name?: string | undefined
  type?: MessageType | undefined
}
type MessageTemplateRequest = { messageTemplate?: MessageTemplate | undefined }
type MessageTemplateResponse = {
  messageTemplate?: MessageTemplate | undefined
  messageTemplates?: MessageTemplate[] | undefined
}
type PreviewMessageTemplateRequest = {
  locale?: Locale | undefined
  messageTemplate?: MessageTemplate | undefined
}
type SMSMessage = {
  code?: string | undefined
  phoneNumber?: string | undefined
  textMessage?: string | undefined
  userId?: string | undefined
}
type PreviewMessageTemplateResponse = {
  errors?: Errors | undefined
  message?: SMSMessage | undefined
  previewMessage?: string | undefined
}
type MessengerType = 'Generic' | 'Kafka' | 'Twilio'
type BaseMessengerConfiguration = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  debug?: boolean | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  messageTypes?: { [x: string]: unknown }[] | undefined
  name?: string | undefined
  transport?: string | undefined
  type?: MessengerType | undefined
}
type MessengerRequest = { messenger?: BaseMessengerConfiguration | undefined }
type MessengerResponse = {
  messenger?: BaseMessengerConfiguration | undefined
  messengers?: BaseMessengerConfiguration[] | undefined
}
type PasswordlessLoginRequest = {
  code?: string | undefined
  oneTimeCode?: string | undefined
  twoFactorTrustId?: string | undefined
  applicationId?: string | undefined
  botDetectionScore?: number | undefined
  ipAddress?: string | undefined
  metaData?: MetaData | undefined
  newDevice?: boolean | undefined
  noJWT?: boolean | undefined
}
type PasswordlessSendRequest = {
  applicationId?: string | undefined
  code?: string | undefined
  loginId?: string | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
}
type PasswordlessStartRequest = {
  applicationId?: string | undefined
  loginId?: string | undefined
  loginIdTypes?: string[] | undefined
  loginStrategy?: PasswordlessStrategy | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
}
type PasswordlessStartResponse = { code?: string | undefined; oneTimeCode?: string | undefined }
type ReactorRequest = { license?: string | undefined; licenseId?: string | undefined }
type ReactorFeatureStatus = 'ACTIVE' | 'DISCONNECTED' | 'PENDING' | 'DISABLED' | 'UNKNOWN'
type ReactorStatus = {
  advancedIdentityProviders?: ReactorFeatureStatus | undefined
  advancedLambdas?: ReactorFeatureStatus | undefined
  advancedMultiFactorAuthentication?: ReactorFeatureStatus | undefined
  advancedOAuthScopes?: ReactorFeatureStatus | undefined
  advancedOAuthScopesCustomScopes?: ReactorFeatureStatus | undefined
  advancedOAuthScopesThirdPartyApplications?: ReactorFeatureStatus | undefined
  advancedRegistration?: ReactorFeatureStatus | undefined
  applicationMultiFactorAuthentication?: ReactorFeatureStatus | undefined
  applicationThemes?: ReactorFeatureStatus | undefined
  breachedPasswordDetection?: ReactorFeatureStatus | undefined
  cimd?: ReactorFeatureStatus | undefined
  clientRiskConfiguration?: ReactorFeatureStatus | undefined
  connectors?: ReactorFeatureStatus | undefined
  dPoP?: ReactorFeatureStatus | undefined
  entityManagement?: ReactorFeatureStatus | undefined
  expiration?: LocalDate | undefined
  imfaWebhooks?: ReactorFeatureStatus | undefined
  intelligentMFA?: ReactorFeatureStatus | undefined
  ipGeoLocation?: ReactorFeatureStatus | undefined
  ipReputation?: ReactorFeatureStatus | undefined
  legacyAdapter?: ReactorFeatureStatus | undefined
  licenseAttributes?: { [x: string]: string } | undefined
  licensed?: boolean | undefined
  multiFactorLambdas?: ReactorFeatureStatus | undefined
  scimServer?: ReactorFeatureStatus | undefined
  tenantManagerApplication?: ReactorFeatureStatus | undefined
  threatDetection?: ReactorFeatureStatus | undefined
  tokenExchange?: ReactorFeatureStatus | undefined
  universalApplication?: ReactorFeatureStatus | undefined
  userAgentReputation?: ReactorFeatureStatus | undefined
  webAuthn?: ReactorFeatureStatus | undefined
  webAuthnPlatformAuthenticators?: ReactorFeatureStatus | undefined
  webAuthnRoamingAuthenticators?: ReactorFeatureStatus | undefined
}
type ReactorResponse = { status?: ReactorStatus | undefined }
type BreachedPasswordTenantMetric = {
  actionRequired?: number | undefined
  matchedCommonPasswordCount?: number | undefined
  matchedExactCount?: number | undefined
  matchedPasswordCount?: number | undefined
  matchedSubAddressCount?: number | undefined
  passwordsCheckedCount?: number | undefined
}
type MFATenantMetric = {
  challengeCount?: bigint | undefined
  failedAttemptCount?: bigint | undefined
  successCount?: bigint | undefined
}
type ReactorMetrics = {
  breachedPasswordMetrics?: { [x: string]: BreachedPasswordTenantMetric } | undefined
  mfaMetrics?: { [x: string]: MFATenantMetric } | undefined
}
type ReactorMetricsResponse = { metrics?: ReactorMetrics | undefined }
type Count = { count?: number | undefined; interval?: number | undefined }
type DailyActiveUserReportResponse = {
  dailyActiveUsers?: Count[] | undefined
  total?: bigint | undefined
}
type LoginReportResponse = { hourlyCounts?: Count[] | undefined; total?: bigint | undefined }
type MonthlyActiveUserReportResponse = {
  monthlyActiveUsers?: Count[] | undefined
  total?: bigint | undefined
}
type RegistrationReportResponse = { hourlyCounts?: Count[] | undefined; total?: bigint | undefined }
type Totals = {
  logins?: bigint | undefined
  registrations?: bigint | undefined
  totalRegistrations?: bigint | undefined
}
type TotalsReportResponse = {
  applicationTotals?: { [x: string]: Totals } | undefined
  globalRegistrations?: bigint | undefined
  totalGlobalRegistrations?: bigint | undefined
}
type StatusResponse = { [x: string]: unknown }
type DeleteConfiguration = {
  numberOfDaysToRetain?: number | undefined
  enabled?: boolean | undefined
}
type AuditLogConfiguration = { delete?: DeleteConfiguration | undefined }
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH'
type CORSConfiguration = {
  allowCredentials?: boolean | undefined
  allowedHeaders?: string[] | undefined
  allowedMethods?: HTTPMethod[] | undefined
  allowedOrigins?: string[] | undefined
  debug?: boolean | undefined
  exposedHeaders?: string[] | undefined
  preflightMaxAgeInSeconds?: number | undefined
  enabled?: boolean | undefined
}
type EventLogConfiguration = { numberToRetain?: number | undefined }
type LoginRecordConfiguration = { delete?: DeleteConfiguration | undefined }
type TokenExchangeAuditLogConfiguration = { numberOfDaysToRetain?: number | undefined }
type SystemTrustedProxyConfigurationPolicy = 'All' | 'OnlyConfigured'
type SystemTrustedProxyConfiguration = {
  trustPolicy?: SystemTrustedProxyConfigurationPolicy | undefined
  trusted?: string[] | undefined
}
type UIConfiguration = {
  headerColor?: string | undefined
  logoURL?: string | undefined
  menuFontColor?: string | undefined
}
type UsageDataConfiguration = {
  numberOfDaysToRetain?: number | undefined
  enabled?: boolean | undefined
}
type WebhookEventLogConfiguration = {
  delete?: DeleteConfiguration | undefined
  enabled?: boolean | undefined
}
type SystemConfiguration = {
  auditLogConfiguration?: AuditLogConfiguration | undefined
  corsConfiguration?: CORSConfiguration | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  eventLogConfiguration?: EventLogConfiguration | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  loginRecordConfiguration?: LoginRecordConfiguration | undefined
  reportTimezone?: ZoneId | undefined
  tokenExchangeAuditLogConfiguration?: TokenExchangeAuditLogConfiguration | undefined
  trustedProxyConfiguration?: SystemTrustedProxyConfiguration | undefined
  uiConfiguration?: UIConfiguration | undefined
  usageDataConfiguration?: UsageDataConfiguration | undefined
  webhookEventLogConfiguration?: WebhookEventLogConfiguration | undefined
}
type SystemConfigurationRequest = { systemConfiguration?: SystemConfiguration | undefined }
type SystemConfigurationResponse = { systemConfiguration?: SystemConfiguration | undefined }
type AuditLog = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  id?: bigint | undefined
  insertInstant?: ZonedDateTime | undefined
  insertUser?: string | undefined
  message?: string | undefined
  newValue?: { [x: string]: unknown } | undefined
  oldValue?: { [x: string]: unknown } | undefined
  reason?: string | undefined
  tenantId?: string | undefined
}
type AuditLogRequest = { auditLog?: AuditLog | undefined; eventInfo?: EventInfo | undefined }
type AuditLogResponse = { auditLog?: AuditLog | undefined }
type AuditLogSearchCriteria = {
  end?: ZonedDateTime | undefined
  message?: string | undefined
  newValue?: string | undefined
  oldValue?: string | undefined
  reason?: string | undefined
  start?: ZonedDateTime | undefined
  tenantId?: string | undefined
  user?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type AuditLogSearchRequest = { search?: AuditLogSearchCriteria | undefined }
type AuditLogSearchResponse = { auditLogs?: AuditLog[] | undefined; total?: bigint | undefined }
type EventLogType = 'Information' | 'Debug' | 'Error'
type EventLogSearchCriteria = {
  end?: ZonedDateTime | undefined
  message?: string | undefined
  start?: ZonedDateTime | undefined
  type?: EventLogType | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type EventLogSearchRequest = { search?: EventLogSearchCriteria | undefined }
type EventLog = {
  id?: bigint | undefined
  insertInstant?: ZonedDateTime | undefined
  message?: string | undefined
  type?: EventLogType | undefined
}
type EventLogSearchResponse = { eventLogs?: EventLog[] | undefined; total?: bigint | undefined }
type EventLogResponse = { eventLog?: EventLog | undefined }
type LoginRecordSearchCriteria = {
  applicationId?: string | undefined
  end?: ZonedDateTime | undefined
  start?: ZonedDateTime | undefined
  userId?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type LoginRecordSearchRequest = {
  retrieveTotal?: boolean | undefined
  search?: LoginRecordSearchCriteria | undefined
}
type DisplayableRawLogin = {
  applicationName?: string | undefined
  location?: Location | undefined
  loginId?: string | undefined
  loginIdType?: IdentityType | undefined
  applicationId?: string | undefined
  instant?: ZonedDateTime | undefined
  ipAddress?: string | undefined
  userId?: string | undefined
}
type LoginRecordSearchResponse = {
  logins?: DisplayableRawLogin[] | undefined
  total?: bigint | undefined
}
type ReindexRequest = { index?: string | undefined }
type VersionResponse = { version?: string | undefined }
type WebhookCallResponse = {
  exception?: string | undefined
  statusCode?: number | undefined
  url?: string | undefined
}
type WebhookAttemptResult = 'Success' | 'Failure' | 'Unknown'
type WebhookAttemptLog = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  endInstant?: ZonedDateTime | undefined
  id?: string | undefined
  startInstant?: ZonedDateTime | undefined
  webhookCallResponse?: WebhookCallResponse | undefined
  webhookEventLogId?: string | undefined
  webhookId?: string | undefined
  attemptResult?: WebhookAttemptResult | undefined
}
type WebhookAttemptLogResponse = { webhookAttemptLog?: WebhookAttemptLog | undefined }
type WebhookEventResult = 'Failed' | 'Running' | 'Succeeded'
type EventType =
  | 'JWTPublicKeyUpdate'
  | 'JWTRefreshTokenRevoke'
  | 'JWTRefresh'
  | 'AuditLogCreate'
  | 'EventLogCreate'
  | 'KickstartSuccess'
  | 'GroupCreate'
  | 'GroupCreateComplete'
  | 'GroupDelete'
  | 'GroupDeleteComplete'
  | 'GroupMemberAdd'
  | 'GroupMemberAddComplete'
  | 'GroupMemberRemove'
  | 'GroupMemberRemoveComplete'
  | 'GroupMemberUpdate'
  | 'GroupMemberUpdateComplete'
  | 'GroupUpdate'
  | 'GroupUpdateComplete'
  | 'UserAction'
  | 'UserBulkCreate'
  | 'UserCreate'
  | 'UserCreateComplete'
  | 'UserDeactivate'
  | 'UserDelete'
  | 'UserDeleteComplete'
  | 'UserEmailUpdate'
  | 'UserEmailVerified'
  | 'UserIdentityProviderLink'
  | 'UserIdentityProviderUnlink'
  | 'UserLoginIdDuplicateOnCreate'
  | 'UserLoginIdDuplicateOnUpdate'
  | 'UserLoginFailed'
  | 'UserLoginNewDevice'
  | 'UserLoginSuccess'
  | 'UserLoginSuspicious'
  | 'UserTwoFactorChallenge'
  | 'UserPasswordBreach'
  | 'UserPasswordResetSend'
  | 'UserPasswordResetStart'
  | 'UserPasswordResetSuccess'
  | 'UserPasswordUpdate'
  | 'UserReactivate'
  | 'UserRegistrationCreate'
  | 'UserRegistrationCreateComplete'
  | 'UserRegistrationDelete'
  | 'UserRegistrationDeleteComplete'
  | 'UserRegistrationUpdate'
  | 'UserRegistrationUpdateComplete'
  | 'UserRegistrationVerified'
  | 'UserTwoFactorMethodAdd'
  | 'UserTwoFactorMethodRemove'
  | 'UserUpdate'
  | 'UserUpdateComplete'
  | 'Test'
  | 'UserIdentityVerified'
  | 'UserIdentityUpdate'
  | 'UserTwoFactorFailedAttempt'
  | 'UserTwoFactorSuccess'
  | 'EntityCreate'
  | 'EntityCreateComplete'
  | 'EntityDelete'
  | 'EntityDeleteComplete'
  | 'EntityUpdate'
  | 'EntityUpdateComplete'
  | 'TokenExchange'
  | 'TokenExchangeComplete'
  | 'CimdRegistrationSuccess'
  | 'CimdRegistrationFailed'
type WebhookEventLogSearchCriteria = {
  end?: ZonedDateTime | undefined
  event?: string | undefined
  eventResult?: WebhookEventResult | undefined
  eventType?: EventType | undefined
  start?: ZonedDateTime | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type WebhookEventLogSearchRequest = { search?: WebhookEventLogSearchCriteria | undefined }
type BaseEvent = {
  createInstant?: ZonedDateTime | undefined
  id?: string | undefined
  info?: EventInfo | undefined
  tenantId?: string | undefined
  type?: EventType | undefined
}
type EventRequest = { event?: BaseEvent | undefined }
type WebhookEventLog = {
  attempts?: WebhookAttemptLog[] | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  event?: EventRequest | undefined
  eventResult?: WebhookEventResult | undefined
  eventType?: EventType | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastAttemptInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkedObjectId?: string | undefined
  sequence?: bigint | undefined
  failedAttempts?: number | undefined
  successfulAttempts?: number | undefined
}
type WebhookEventLogSearchResponse = {
  total?: bigint | undefined
  webhookEventLogs?: WebhookEventLog[] | undefined
}
type WebhookEventLogResponse = { webhookEventLog?: WebhookEventLog | undefined }
type TenantAccessControlConfiguration = { uiIPAccessControlListId?: string | undefined }
type CaptchaMethod = 'GoogleRecaptchaV2' | 'GoogleRecaptchaV3' | 'HCaptcha' | 'HCaptchaEnterprise'
type TenantCaptchaConfiguration = {
  captchaMethod?: CaptchaMethod | undefined
  secretKey?: string | undefined
  siteKey?: string | undefined
  threshold?: number | undefined
  enabled?: boolean | undefined
}
type ClientRiskConfiguration = {
  blocklistedIp?: boolean | undefined
  botDetected?: boolean | undefined
  dormantAccount?: boolean | undefined
  dormantPassword?: boolean | undefined
  impossibleTravel?: boolean | undefined
  recentIdentityChange?: boolean | undefined
  recentPasswordChange?: boolean | undefined
  suspiciousUserAgent?: boolean | undefined
  unrecognizedDevice?: boolean | undefined
  untrustedDevice?: boolean | undefined
  enabled?: boolean | undefined
}
type ConnectorPolicy = {
  connectorId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  domains?: { [x: string]: unknown }[] | undefined
  migrate?: boolean | undefined
}
type EmailHeader = { name?: string | undefined; value?: string | undefined }
type EmailSecurityType = 'NONE' | 'SSL' | 'TLS'
type EmailUnverifiedOptions = {
  allowEmailChangeWhenGated?: boolean | undefined
  behavior?: UnverifiedBehavior | undefined
}
type EmailConfiguration = {
  additionalHeaders?: EmailHeader[] | undefined
  adminTwoFactorMethodRemoveEmailTemplateId?: string | undefined
  debug?: boolean | undefined
  defaultFromEmail?: string | undefined
  defaultFromName?: string | undefined
  emailUpdateEmailTemplateId?: string | undefined
  emailVerifiedEmailTemplateId?: string | undefined
  forgotPasswordEmailTemplateId?: string | undefined
  host?: string | undefined
  implicitEmailVerificationAllowed?: boolean | undefined
  loginIdInUseOnCreateEmailTemplateId?: string | undefined
  loginIdInUseOnUpdateEmailTemplateId?: string | undefined
  loginNewDeviceEmailTemplateId?: string | undefined
  loginSuspiciousEmailTemplateId?: string | undefined
  password?: string | undefined
  passwordResetSuccessEmailTemplateId?: string | undefined
  passwordUpdateEmailTemplateId?: string | undefined
  passwordlessEmailTemplateId?: string | undefined
  port?: number | undefined
  properties?: string | undefined
  security?: EmailSecurityType | undefined
  setPasswordEmailTemplateId?: string | undefined
  twoFactorMethodAddEmailTemplateId?: string | undefined
  twoFactorMethodRemoveEmailTemplateId?: string | undefined
  unverified?: EmailUnverifiedOptions | undefined
  username?: string | undefined
  verificationEmailTemplateId?: string | undefined
  verificationStrategy?: VerificationStrategy | undefined
  verifyEmail?: boolean | undefined
  verifyEmailWhenChanged?: boolean | undefined
}
type TransactionType = 'None' | 'Any' | 'SimpleMajority' | 'SuperMajority' | 'AbsoluteMajority'
type EventConfigurationData = {
  transactionType?: TransactionType | undefined
  enabled?: boolean | undefined
}
type EventConfiguration = { events?: { [x: string]: EventConfigurationData } | undefined }
type SecureGeneratorType = 'randomDigits' | 'randomBytes' | 'randomAlpha' | 'randomAlphaNumeric'
type SecureGeneratorConfiguration = {
  length?: number | undefined
  type?: SecureGeneratorType | undefined
}
type ExternalIdentifierConfiguration = {
  authorizationGrantIdTimeToLiveInSeconds?: number | undefined
  changePasswordIdGenerator?: SecureGeneratorConfiguration | undefined
  changePasswordIdTimeToLiveInSeconds?: number | undefined
  deviceCodeTimeToLiveInSeconds?: number | undefined
  deviceUserCodeIdGenerator?: SecureGeneratorConfiguration | undefined
  emailVerificationIdGenerator?: SecureGeneratorConfiguration | undefined
  emailVerificationIdTimeToLiveInSeconds?: number | undefined
  emailVerificationOneTimeCodeGenerator?: SecureGeneratorConfiguration | undefined
  externalAuthenticationIdTimeToLiveInSeconds?: number | undefined
  identityProviderConnectionTestTimeToLiveInSeconds?: number | undefined
  loginIntentTimeToLiveInSeconds?: number | undefined
  oneTimePasswordTimeToLiveInSeconds?: number | undefined
  passwordlessLoginGenerator?: SecureGeneratorConfiguration | undefined
  passwordlessLoginOneTimeCodeGenerator?: SecureGeneratorConfiguration | undefined
  passwordlessLoginTimeToLiveInSeconds?: number | undefined
  pendingAccountLinkTimeToLiveInSeconds?: number | undefined
  phoneVerificationIdGenerator?: SecureGeneratorConfiguration | undefined
  phoneVerificationIdTimeToLiveInSeconds?: number | undefined
  phoneVerificationOneTimeCodeGenerator?: SecureGeneratorConfiguration | undefined
  registrationVerificationIdGenerator?: SecureGeneratorConfiguration | undefined
  registrationVerificationIdTimeToLiveInSeconds?: number | undefined
  registrationVerificationOneTimeCodeGenerator?: SecureGeneratorConfiguration | undefined
  rememberOAuthScopeConsentChoiceTimeToLiveInSeconds?: number | undefined
  samlv2AuthNRequestIdTimeToLiveInSeconds?: number | undefined
  setupPasswordIdGenerator?: SecureGeneratorConfiguration | undefined
  setupPasswordIdTimeToLiveInSeconds?: number | undefined
  trustTokenTimeToLiveInSeconds?: number | undefined
  twoFactorIdTimeToLiveInSeconds?: number | undefined
  twoFactorOneTimeCodeIdGenerator?: SecureGeneratorConfiguration | undefined
  twoFactorOneTimeCodeIdTimeToLiveInSeconds?: number | undefined
  twoFactorTrustIdTimeToLiveInSeconds?: number | undefined
  webAuthnAuthenticationChallengeTimeToLiveInSeconds?: number | undefined
  webAuthnRegistrationChallengeTimeToLiveInSeconds?: number | undefined
}
type FailedAuthenticationActionCancelPolicy = { onPasswordReset?: boolean | undefined }
type ExpiryUnit = 'MINUTES' | 'HOURS' | 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS'
type FailedAuthenticationConfiguration = {
  actionCancelPolicy?: FailedAuthenticationActionCancelPolicy | undefined
  actionDuration?: bigint | undefined
  actionDurationUnit?: ExpiryUnit | undefined
  emailUser?: boolean | undefined
  resetCountInSeconds?: number | undefined
  tooManyAttempts?: number | undefined
  userActionId?: string | undefined
}
type FamilyConfiguration = {
  allowChildRegistrations?: boolean | undefined
  confirmChildEmailTemplateId?: string | undefined
  deleteOrphanedAccounts?: boolean | undefined
  deleteOrphanedAccountsDays?: number | undefined
  familyRequestEmailTemplateId?: string | undefined
  maximumChildAge?: number | undefined
  minimumOwnerAge?: number | undefined
  parentEmailRequired?: boolean | undefined
  parentRegistrationEmailTemplateId?: string | undefined
  enabled?: boolean | undefined
}
type TenantFormConfiguration = { adminUserFormId?: string | undefined }
type TenantLambdaConfiguration = {
  loginValidationId?: string | undefined
  multiFactorRequirementId?: string | undefined
  scimEnterpriseUserRequestConverterId?: string | undefined
  scimEnterpriseUserResponseConverterId?: string | undefined
  scimGroupRequestConverterId?: string | undefined
  scimGroupResponseConverterId?: string | undefined
  scimUserRequestConverterId?: string | undefined
  scimUserResponseConverterId?: string | undefined
}
type TenantLoginConfiguration = { requireAuthentication?: boolean | undefined }
type MaximumPasswordAge = { days?: number | undefined; enabled?: boolean | undefined }
type MinimumPasswordAge = { seconds?: number | undefined; enabled?: boolean | undefined }
type MultiFactorAuthenticatorMethod = {
  algorithm?: TOTPAlgorithm | undefined
  codeLength?: number | undefined
  timeStep?: number | undefined
  enabled?: boolean | undefined
}
type MultiFactorEmailMethod = { templateId?: string | undefined; enabled?: boolean | undefined }
type MultiFactorSMSMethod = {
  messengerId?: string | undefined
  templateId?: string | undefined
  enabled?: boolean | undefined
}
type MultiFactorVoiceMethod = {
  messengerId?: string | undefined
  templateId?: string | undefined
  enabled?: boolean | undefined
}
type TenantMultiFactorConfiguration = {
  authenticator?: MultiFactorAuthenticatorMethod | undefined
  debug?: boolean | undefined
  email?: MultiFactorEmailMethod | undefined
  loginPolicy?: MultiFactorLoginPolicy | undefined
  sms?: MultiFactorSMSMethod | undefined
  voice?: MultiFactorVoiceMethod | undefined
}
type TenantOAuth2Configuration = {
  clientCredentialsAccessTokenPopulateLambdaId?: string | undefined
}
type PasswordEncryptionConfiguration = {
  encryptionScheme?: string | undefined
  encryptionSchemeFactor?: number | undefined
  modifyEncryptionSchemeOnLogin?: boolean | undefined
}
type BreachMatchMode = 'Low' | 'Medium' | 'High'
type BreachAction = 'Off' | 'RecordOnly' | 'NotifyUser' | 'RequireChange'
type PasswordBreachDetection = {
  matchMode?: BreachMatchMode | undefined
  notifyUserEmailTemplateId?: string | undefined
  onLogin?: BreachAction | undefined
  enabled?: boolean | undefined
}
type RememberPreviousPasswords = { count?: number | undefined; enabled?: boolean | undefined }
type PasswordValidationRules = {
  breachDetection?: PasswordBreachDetection | undefined
  disallowUserLoginId?: boolean | undefined
  maxLength?: number | undefined
  minLength?: number | undefined
  rememberPreviousPasswords?: RememberPreviousPasswords | undefined
  requireMixedCase?: boolean | undefined
  requireNonAlpha?: boolean | undefined
  requireNumber?: boolean | undefined
  validateOnLogin?: boolean | undefined
}
type PhoneUnverifiedOptions = {
  allowPhoneNumberChangeWhenGated?: boolean | undefined
  behavior?: UnverifiedBehavior | undefined
}
type TenantPhoneConfiguration = {
  adminTwoFactorMethodRemoveTemplateId?: string | undefined
  forgotPasswordTemplateId?: string | undefined
  identityUpdateTemplateId?: string | undefined
  implicitPhoneVerificationAllowed?: boolean | undefined
  loginIdInUseOnCreateTemplateId?: string | undefined
  loginIdInUseOnUpdateTemplateId?: string | undefined
  loginNewDeviceTemplateId?: string | undefined
  loginSuspiciousTemplateId?: string | undefined
  messengerId?: string | undefined
  passwordResetSuccessTemplateId?: string | undefined
  passwordUpdateTemplateId?: string | undefined
  passwordlessTemplateId?: string | undefined
  setPasswordTemplateId?: string | undefined
  twoFactorMethodAddTemplateId?: string | undefined
  twoFactorMethodRemoveTemplateId?: string | undefined
  unverified?: PhoneUnverifiedOptions | undefined
  verificationCompleteTemplateId?: string | undefined
  verificationStrategy?: VerificationStrategy | undefined
  verificationTemplateId?: string | undefined
  verifyPhoneNumber?: boolean | undefined
}
type RateLimitedRequestConfiguration = {
  limit?: number | undefined
  timePeriodInSeconds?: number | undefined
  enabled?: boolean | undefined
}
type TenantRateLimitConfiguration = {
  cimdClientRegistration?: RateLimitedRequestConfiguration | undefined
  failedLogin?: RateLimitedRequestConfiguration | undefined
  forgotPassword?: RateLimitedRequestConfiguration | undefined
  sendEmailVerification?: RateLimitedRequestConfiguration | undefined
  sendPasswordless?: RateLimitedRequestConfiguration | undefined
  sendPasswordlessPhone?: RateLimitedRequestConfiguration | undefined
  sendPhoneVerification?: RateLimitedRequestConfiguration | undefined
  sendRegistrationVerification?: RateLimitedRequestConfiguration | undefined
  sendTwoFactor?: RateLimitedRequestConfiguration | undefined
}
type TenantRegistrationConfiguration = { blockedDomains?: { [x: string]: unknown }[] | undefined }
type TenantSCIMServerConfiguration = {
  clientEntityTypeId?: string | undefined
  schemas?: { [x: string]: { [x: string]: unknown } } | undefined
  serverEntityTypeId?: string | undefined
  enabled?: boolean | undefined
}
type TenantSSOConfiguration = {
  allowAccessTokenBootstrap?: boolean | undefined
  deviceTrustTimeToLiveInSeconds?: number | undefined
}
type TokenExchangePolicyEngine = 'ENTITY' | 'LAMBDA'
type TenantTokenExchangeConfiguration = {
  allowedIssuers?: string[] | undefined
  debug?: boolean | undefined
  maxClaimDepth?: number | undefined
  policyEngine?: TokenExchangePolicyEngine | undefined
  policyEngineLambdaId?: string | undefined
  populateLambdaId?: string | undefined
  enabled?: boolean | undefined
}
type TenantUserDeletePolicy = { unverified?: TimeBasedDeletePolicy | undefined }
type UniqueUsernameStrategy = 'Always' | 'OnCollision'
type UniqueUsernameConfiguration = {
  numberOfDigits?: number | undefined
  separator?: string | undefined
  strategy?: UniqueUsernameStrategy | undefined
  enabled?: boolean | undefined
}
type TenantUsernameConfiguration = { unique?: UniqueUsernameConfiguration | undefined }
type AuthenticatorAttachmentPreference = 'any' | 'platform' | 'crossPlatform'
type UserVerificationRequirement = 'required' | 'preferred' | 'discouraged'
type TenantWebAuthnWorkflowConfiguration = {
  authenticatorAttachmentPreference?: AuthenticatorAttachmentPreference | undefined
  userVerificationRequirement?: UserVerificationRequirement | undefined
  enabled?: boolean | undefined
}
type TenantWebAuthnConfiguration = {
  bootstrapWorkflow?: TenantWebAuthnWorkflowConfiguration | undefined
  debug?: boolean | undefined
  reauthenticationWorkflow?: TenantWebAuthnWorkflowConfiguration | undefined
  relyingPartyId?: string | undefined
  relyingPartyName?: string | undefined
  enabled?: boolean | undefined
}
type Tenant = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  accessControlConfiguration?: TenantAccessControlConfiguration | undefined
  baseURL?: string | undefined
  captchaConfiguration?: TenantCaptchaConfiguration | undefined
  clientRiskConfiguration?: ClientRiskConfiguration | undefined
  configured?: boolean | undefined
  connectorPolicies?: ConnectorPolicy[] | undefined
  emailConfiguration?: EmailConfiguration | undefined
  eventConfiguration?: EventConfiguration | undefined
  externalIdentifierConfiguration?: ExternalIdentifierConfiguration | undefined
  failedAuthenticationConfiguration?: FailedAuthenticationConfiguration | undefined
  familyConfiguration?: FamilyConfiguration | undefined
  formConfiguration?: TenantFormConfiguration | undefined
  httpSessionMaxInactiveInterval?: number | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  issuer?: string | undefined
  jwtConfiguration?: JWTConfiguration | undefined
  lambdaConfiguration?: TenantLambdaConfiguration | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  loginConfiguration?: TenantLoginConfiguration | undefined
  logoutURL?: string | undefined
  maximumPasswordAge?: MaximumPasswordAge | undefined
  minimumPasswordAge?: MinimumPasswordAge | undefined
  multiFactorConfiguration?: TenantMultiFactorConfiguration | undefined
  name?: string | undefined
  oauthConfiguration?: TenantOAuth2Configuration | undefined
  passwordEncryptionConfiguration?: PasswordEncryptionConfiguration | undefined
  passwordValidationRules?: PasswordValidationRules | undefined
  phoneConfiguration?: TenantPhoneConfiguration | undefined
  rateLimitConfiguration?: TenantRateLimitConfiguration | undefined
  registrationConfiguration?: TenantRegistrationConfiguration | undefined
  scimServerConfiguration?: TenantSCIMServerConfiguration | undefined
  ssoConfiguration?: TenantSSOConfiguration | undefined
  state?: ObjectState | undefined
  themeId?: string | undefined
  tokenExchangeConfiguration?: TenantTokenExchangeConfiguration | undefined
  userDeletePolicy?: TenantUserDeletePolicy | undefined
  usernameConfiguration?: TenantUsernameConfiguration | undefined
  webAuthnConfiguration?: TenantWebAuthnConfiguration | undefined
}
type TenantRequest = {
  sourceTenantId?: string | undefined
  tenant?: Tenant | undefined
  webhookIds?: string[] | undefined
  eventInfo?: EventInfo | undefined
}
type TenantResponse = { tenant?: Tenant | undefined; tenants?: Tenant[] | undefined }
type TenantManagerApplicationConfiguration = { applicationId?: string | undefined }
type TenantManagerIdentityProviderTypeConfiguration = {
  defaultAttributeMappings?: { [x: string]: string } | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  linkingStrategy?: IdentityProviderLinkingStrategy | undefined
  type?: IdentityProviderType | undefined
  enabled?: boolean | undefined
}
type TenantManagerConfiguration = {
  applicationConfigurations?: TenantManagerApplicationConfiguration[] | undefined
  attributeFormId?: string | undefined
  brandName?: string | undefined
  identityProviderTypeConfigurations?:
    | { [x: string]: TenantManagerIdentityProviderTypeConfiguration }
    | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
}
type TenantManagerConfigurationRequest = {
  tenantManagerConfiguration?: TenantManagerConfiguration | undefined
}
type TenantManagerConfigurationResponse = {
  tenantManagerConfiguration?: TenantManagerConfiguration | undefined
}
type TenantManagerIdentityProviderTypeConfigurationRequest = {
  typeConfiguration?: TenantManagerIdentityProviderTypeConfiguration | undefined
}
type TenantManagerIdentityProviderTypeConfigurationResponse = {
  typeConfiguration?: TenantManagerIdentityProviderTypeConfiguration | undefined
}
type PasswordValidationRulesResponse = {
  passwordValidationRules?: PasswordValidationRules | undefined
}
type TenantSearchCriteria = {
  name?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type TenantSearchRequest = { search?: TenantSearchCriteria | undefined }
type TenantSearchResponse = { tenants?: Tenant[] | undefined; total?: bigint | undefined }
type TenantDeleteRequest = { async?: boolean | undefined; eventInfo?: EventInfo | undefined }
type Templates = {
  accountEdit?: string | undefined
  accountIndex?: string | undefined
  accountTwoFactorDisable?: string | undefined
  accountTwoFactorEdit?: string | undefined
  accountTwoFactorEnable?: string | undefined
  accountTwoFactorIndex?: string | undefined
  accountWebAuthnAdd?: string | undefined
  accountWebAuthnDelete?: string | undefined
  accountWebAuthnIndex?: string | undefined
  confirmationRequired?: string | undefined
  emailComplete?: string | undefined
  emailSent?: string | undefined
  emailVerificationRequired?: string | undefined
  emailVerify?: string | undefined
  helpers?: string | undefined
  index?: string | undefined
  oauth2Authorize?: string | undefined
  oauth2AuthorizedNotRegistered?: string | undefined
  oauth2ChildRegistrationNotAllowed?: string | undefined
  oauth2ChildRegistrationNotAllowedComplete?: string | undefined
  oauth2CompleteRegistration?: string | undefined
  oauth2Consent?: string | undefined
  oauth2Device?: string | undefined
  oauth2DeviceComplete?: string | undefined
  oauth2Error?: string | undefined
  oauth2Logout?: string | undefined
  oauth2Passwordless?: string | undefined
  oauth2Register?: string | undefined
  oauth2StartIdPLink?: string | undefined
  oauth2TwoFactor?: string | undefined
  oauth2TwoFactorEnable?: string | undefined
  oauth2TwoFactorEnableComplete?: string | undefined
  oauth2TwoFactorMethods?: string | undefined
  oauth2Wait?: string | undefined
  oauth2WebAuthn?: string | undefined
  oauth2WebAuthnReauth?: string | undefined
  oauth2WebAuthnReauthEnable?: string | undefined
  passwordChange?: string | undefined
  passwordComplete?: string | undefined
  passwordForgot?: string | undefined
  passwordSent?: string | undefined
  phoneComplete?: string | undefined
  phoneSent?: string | undefined
  phoneVerificationRequired?: string | undefined
  phoneVerify?: string | undefined
  registrationComplete?: string | undefined
  registrationSent?: string | undefined
  registrationVerificationRequired?: string | undefined
  registrationVerify?: string | undefined
  samlv2Logout?: string | undefined
  unauthorized?: string | undefined
  emailSend?: string | undefined
  registrationSend?: string | undefined
}
type ThemeType = 'advanced' | 'simple'
type Favicon = {
  href?: string | undefined
  rel?: string | undefined
  sizes?: string | undefined
  type?: string | undefined
}
type SimpleThemeVariables = {
  alertBackgroundColor?: string | undefined
  alertFontColor?: string | undefined
  backgroundImageURL?: string | undefined
  backgroundSize?: string | undefined
  borderRadius?: string | undefined
  deleteButtonColor?: string | undefined
  deleteButtonFocusColor?: string | undefined
  deleteButtonTextColor?: string | undefined
  deleteButtonTextFocusColor?: string | undefined
  errorFontColor?: string | undefined
  errorIconColor?: string | undefined
  favicons?: Favicon[] | undefined
  fontColor?: string | undefined
  fontFamily?: string | undefined
  footerDisplay?: boolean | undefined
  iconBackgroundColor?: string | undefined
  iconColor?: string | undefined
  infoIconColor?: string | undefined
  inputBackgroundColor?: string | undefined
  inputIconColor?: string | undefined
  inputTextColor?: string | undefined
  linkTextColor?: string | undefined
  linkTextFocusColor?: string | undefined
  logoImageSize?: string | undefined
  logoImageURL?: string | undefined
  monoFontColor?: string | undefined
  monoFontFamily?: string | undefined
  pageBackgroundColor?: string | undefined
  panelBackgroundColor?: string | undefined
  primaryButtonColor?: string | undefined
  primaryButtonFocusColor?: string | undefined
  primaryButtonTextColor?: string | undefined
  primaryButtonTextFocusColor?: string | undefined
}
type Theme = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  defaultMessages?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  localizedMessages?: LocalizedStrings | undefined
  name?: string | undefined
  stylesheet?: string | undefined
  templates?: Templates | undefined
  type?: ThemeType | undefined
  variables?: SimpleThemeVariables | undefined
}
type ThemeRequest = { sourceThemeId?: string | undefined; theme?: Theme | undefined }
type ThemeResponse = { theme?: Theme | undefined; themes?: Theme[] | undefined }
type ThemeSearchCriteria = {
  name?: string | undefined
  type?: ThemeType | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type ThemeSearchRequest = { search?: ThemeSearchCriteria | undefined }
type ThemeSearchResponse = { themes?: Theme[] | undefined; total?: bigint | undefined }
type TwoFactorLoginRequest = {
  code?: string | undefined
  trustComputer?: boolean | undefined
  twoFactorId?: string | undefined
  userId?: string | undefined
  applicationId?: string | undefined
  botDetectionScore?: number | undefined
  ipAddress?: string | undefined
  metaData?: MetaData | undefined
  newDevice?: boolean | undefined
  noJWT?: boolean | undefined
}
type SecretResponse = { secret?: string | undefined; secretBase32Encoded?: string | undefined }
type TwoFactorSendRequest = {
  applicationId?: string | undefined
  email?: string | undefined
  messageType?: MessageType | undefined
  method?: string | undefined
  methodId?: string | undefined
  mobilePhone?: string | undefined
  userId?: string | undefined
}
type TwoFactorStartRequest = {
  applicationId?: string | undefined
  code?: string | undefined
  loginId?: string | undefined
  loginIdTypes?: string[] | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
  trustChallenge?: string | undefined
  userId?: string | undefined
}
type TwoFactorStartResponse = {
  code?: string | undefined
  methods?: TwoFactorMethod[] | undefined
  twoFactorId?: string | undefined
}
type MultiFactorAction = 'changePassword' | 'login' | 'stepUp'
type TwoFactorStatusRequest = {
  userId?: string | undefined
  accessToken?: string | undefined
  action?: MultiFactorAction | undefined
  applicationId?: string | undefined
  twoFactorTrustId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type TwoFactorTrust = {
  applicationId?: string | undefined
  expiration?: ZonedDateTime | undefined
  startInstant?: ZonedDateTime | undefined
}
type TwoFactorStatusResponse = {
  trusts?: TwoFactorTrust[] | undefined
  twoFactorTrustId?: string | undefined
}
type PasswordType = 'PLAINTEXT' | 'HASHED'
type SendSetPasswordIdentityType = 'email' | 'phone' | 'doNotSend'
type UserRequest = {
  applicationId?: string | undefined
  currentPassword?: string | undefined
  disableDomainBlock?: boolean | undefined
  passwordFieldType?: PasswordType | undefined
  sendSetPasswordEmail?: boolean | undefined
  sendSetPasswordIdentityType?: SendSetPasswordIdentityType | undefined
  skipVerification?: boolean | undefined
  user?: User | undefined
  verificationIds?: string[] | undefined
  eventInfo?: EventInfo | undefined
}
type VerificationId = {
  id?: string | undefined
  oneTimeCode?: string | undefined
  type?: IdentityType | undefined
  value?: string | undefined
}
type UserResponse = {
  emailVerificationId?: string | undefined
  emailVerificationOneTimeCode?: string | undefined
  registrationVerificationIds?: { [x: string]: string } | undefined
  registrationVerificationOneTimeCodes?: { [x: string]: string } | undefined
  token?: string | undefined
  tokenExpirationInstant?: ZonedDateTime | undefined
  user?: User | undefined
  verificationIds?: VerificationId[] | undefined
}
type UserActionOption = { localizedNames?: LocalizedStrings | undefined; name?: string | undefined }
type UserAction = {
  active?: boolean | undefined
  cancelEmailTemplateId?: string | undefined
  endEmailTemplateId?: string | undefined
  id?: string | undefined
  includeEmailInEventJSON?: boolean | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  localizedNames?: LocalizedStrings | undefined
  modifyEmailTemplateId?: string | undefined
  name?: string | undefined
  options?: UserActionOption[] | undefined
  preventLogin?: boolean | undefined
  sendEndEvent?: boolean | undefined
  startEmailTemplateId?: string | undefined
  temporal?: boolean | undefined
  transactionType?: TransactionType | undefined
  userEmailingEnabled?: boolean | undefined
  userNotificationsEnabled?: boolean | undefined
}
type UserActionRequest = { userAction?: UserAction | undefined }
type UserActionResponse = {
  userAction?: UserAction | undefined
  userActions?: UserAction[] | undefined
}
type UserActionReason = {
  code?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  localizedTexts?: LocalizedStrings | undefined
  text?: string | undefined
}
type UserActionReasonRequest = { userActionReason?: UserActionReason | undefined }
type UserActionReasonResponse = {
  userActionReason?: UserActionReason | undefined
  userActionReasons?: UserActionReason[] | undefined
}
type ActionData = {
  actioneeUserId?: string | undefined
  actionerUserId?: string | undefined
  applicationIds?: string[] | undefined
  comment?: string | undefined
  emailUser?: boolean | undefined
  expiry?: ZonedDateTime | undefined
  notifyUser?: boolean | undefined
  option?: string | undefined
  reasonId?: string | undefined
  userActionId?: string | undefined
}
type ActionRequest = {
  action?: ActionData | undefined
  broadcast?: boolean | undefined
  eventInfo?: EventInfo | undefined
}
type HistoryItem = {
  actionerUserId?: string | undefined
  comment?: string | undefined
  createInstant?: ZonedDateTime | undefined
  expiry?: ZonedDateTime | undefined
}
type LogHistory = { historyItems?: HistoryItem[] | undefined }
type UserActionLog = {
  actioneeUserId?: string | undefined
  actionerUserId?: string | undefined
  applicationIds?: string[] | undefined
  comment?: string | undefined
  emailUserOnEnd?: boolean | undefined
  endEventSent?: boolean | undefined
  expiry?: ZonedDateTime | undefined
  history?: LogHistory | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  localizedName?: string | undefined
  localizedOption?: string | undefined
  localizedReason?: string | undefined
  name?: string | undefined
  notifyUserOnEnd?: boolean | undefined
  option?: string | undefined
  reason?: string | undefined
  reasonCode?: string | undefined
  userActionId?: string | undefined
}
type ActionResponse = { action?: UserActionLog | undefined; actions?: UserActionLog[] | undefined }
type UserDeleteRequest = {
  dryRun?: boolean | undefined
  hardDelete?: boolean | undefined
  limit?: number | undefined
  query?: string | undefined
  queryString?: string | undefined
  userIds?: string[] | undefined
  eventInfo?: EventInfo | undefined
}
type UserDeleteResponse = {
  dryRun?: boolean | undefined
  hardDelete?: boolean | undefined
  total?: number | undefined
  userIds?: string[] | undefined
}
type ChangePasswordRequest = {
  applicationId?: string | undefined
  changePasswordId?: string | undefined
  currentPassword?: string | undefined
  loginId?: string | undefined
  loginIdTypes?: string[] | undefined
  password?: string | undefined
  refreshToken?: string | undefined
  trustChallenge?: string | undefined
  trustToken?: string | undefined
  eventInfo?: EventInfo | undefined
}
type ChangePasswordResponse = {
  oneTimePassword?: string | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
}
type UserComment = {
  comment?: string | undefined
  commenterId?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  userId?: string | undefined
}
type UserCommentRequest = { userComment?: UserComment | undefined }
type UserCommentResponse = {
  userComment?: UserComment | undefined
  userComments?: UserComment[] | undefined
}
type UserCommentSearchCriteria = {
  comment?: string | undefined
  commenterId?: string | undefined
  tenantId?: string | undefined
  userId?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type UserCommentSearchRequest = { search?: UserCommentSearchCriteria | undefined }
type UserCommentSearchResponse = {
  total?: bigint | undefined
  userComments?: UserComment[] | undefined
}
type ConsentStatus = 'Active' | 'Revoked'
type UserConsent = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  consent?: Consent | undefined
  consentId?: string | undefined
  giverUserId?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  status?: ConsentStatus | undefined
  userId?: string | undefined
  values?: string[] | undefined
}
type UserConsentRequest = { userConsent?: UserConsent | undefined }
type UserConsentResponse = {
  userConsent?: UserConsent | undefined
  userConsents?: UserConsent[] | undefined
}
type FamilyRole = 'Child' | 'Teen' | 'Adult'
type FamilyMember = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  owner?: boolean | undefined
  role?: FamilyRole | undefined
  userId?: string | undefined
}
type FamilyRequest = { familyMember?: FamilyMember | undefined }
type Family = {
  members?: FamilyMember[] | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
}
type FamilyResponse = { families?: Family[] | undefined; family?: Family | undefined }
type PendingResponse = { users?: User[] | undefined }
type FamilyEmailRequest = { parentEmail?: string | undefined }
type ForgotPasswordRequest = {
  applicationId?: string | undefined
  changePasswordId?: string | undefined
  loginId?: string | undefined
  loginIdTypes?: string[] | undefined
  sendForgotPasswordEmail?: boolean | undefined
  sendForgotPasswordMessage?: boolean | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
  email?: string | undefined
  username?: string | undefined
  eventInfo?: EventInfo | undefined
}
type ForgotPasswordResponse = { changePasswordId?: string | undefined }
type ImportRequest = {
  encryptionScheme?: string | undefined
  factor?: number | undefined
  users?: User[] | undefined
  validateDbConstraints?: boolean | undefined
  eventInfo?: EventInfo | undefined
}
type RecentLoginResponse = { logins?: DisplayableRawLogin[] | undefined }
type RefreshTokenImportRequest = {
  refreshTokens?: RefreshToken[] | undefined
  validateDbConstraints?: boolean | undefined
}
type RegistrationRequest = {
  disableDomainBlock?: boolean | undefined
  generateAuthenticationToken?: boolean | undefined
  registration?: UserRegistration | undefined
  sendSetPasswordEmail?: boolean | undefined
  sendSetPasswordIdentityType?: SendSetPasswordIdentityType | undefined
  skipRegistrationVerification?: boolean | undefined
  skipVerification?: boolean | undefined
  user?: User | undefined
  verificationIds?: string[] | undefined
  eventInfo?: EventInfo | undefined
}
type RegistrationResponse = {
  refreshToken?: string | undefined
  refreshTokenId?: string | undefined
  registration?: UserRegistration | undefined
  registrationVerificationId?: string | undefined
  registrationVerificationOneTimeCode?: string | undefined
  token?: string | undefined
  tokenExpirationInstant?: ZonedDateTime | undefined
  user?: User | undefined
  verificationIds?: VerificationId[] | undefined
}
type RegistrationDeleteRequest = { eventInfo?: EventInfo | undefined }
type SearchResponse = {
  total?: bigint | undefined
  nextResults?: string | undefined
  users?: User[] | undefined
  expandable?: string[] | undefined
}
type UserSearchCriteria = {
  accurateTotal?: boolean | undefined
  ids?: string[] | undefined
  nextResults?: string | undefined
  query?: string | undefined
  queryString?: string | undefined
  sortFields?: SortField[] | undefined
}
type SearchRequest = { search?: UserSearchCriteria | undefined; expand?: string[] | undefined }
type TwoFactorRecoveryCodeResponse = { recoveryCodes?: string[] | undefined }
type TwoFactorDisableRequest = {
  applicationId?: string | undefined
  code?: string | undefined
  methodId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type TwoFactorRequest = {
  applicationId?: string | undefined
  authenticatorId?: string | undefined
  code?: string | undefined
  email?: string | undefined
  method?: string | undefined
  mobilePhone?: string | undefined
  name?: string | undefined
  secret?: string | undefined
  secretBase32Encoded?: string | undefined
  twoFactorId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type TwoFactorResponse = { code?: string | undefined; recoveryCodes?: string[] | undefined }
type TwoFactorUpdateRequest = {
  methodId?: string | undefined
  name?: string | undefined
  eventInfo?: EventInfo | undefined
}
type VerifyEmailResponse = { oneTimeCode?: string | undefined; verificationId?: string | undefined }
type VerifyEmailRequest = {
  oneTimeCode?: string | undefined
  userId?: string | undefined
  verificationId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type VerifyRegistrationResponse = {
  oneTimeCode?: string | undefined
  verificationId?: string | undefined
}
type VerifyRegistrationRequest = {
  oneTimeCode?: string | undefined
  verificationId?: string | undefined
  eventInfo?: EventInfo | undefined
}
type UserDeleteSingleRequest = {
  hardDelete?: boolean | undefined
  eventInfo?: EventInfo | undefined
}
type CoseAlgorithmIdentifier =
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'PS256'
  | 'PS384'
  | 'PS512'
type AttestationType = 'basic' | 'self' | 'attestationCa' | 'anonymizationCa' | 'none'
type WebAuthnCredential = {
  algorithm?: CoseAlgorithmIdentifier | undefined
  attestationType?: AttestationType | undefined
  authenticatorSupportsUserVerification?: boolean | undefined
  credentialId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  discoverable?: boolean | undefined
  displayName?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUseInstant?: ZonedDateTime | undefined
  name?: string | undefined
  publicKey?: string | undefined
  relyingPartyId?: string | undefined
  signCount?: number | undefined
  tenantId?: string | undefined
  transports?: string[] | undefined
  userAgent?: string | undefined
  userId?: string | undefined
}
type WebAuthnCredentialResponse = {
  credential?: WebAuthnCredential | undefined
  credentials?: WebAuthnCredential[] | undefined
}
type CredentialPropertiesOutput = { rk?: boolean | undefined }
type WebAuthnExtensionsClientOutputs = { credProps?: CredentialPropertiesOutput | undefined }
type WebAuthnAuthenticatorAuthenticationResponse = {
  authenticatorData?: string | undefined
  clientDataJSON?: string | undefined
  signature?: string | undefined
  userHandle?: string | undefined
}
type WebAuthnPublicKeyAuthenticationRequest = {
  clientExtensionResults?: WebAuthnExtensionsClientOutputs | undefined
  id?: string | undefined
  rpId?: string | undefined
  response?: WebAuthnAuthenticatorAuthenticationResponse | undefined
  type?: string | undefined
}
type WebAuthnLoginRequest = {
  credential?: WebAuthnPublicKeyAuthenticationRequest | undefined
  origin?: string | undefined
  rpId?: string | undefined
  twoFactorTrustId?: string | undefined
  applicationId?: string | undefined
  botDetectionScore?: number | undefined
  ipAddress?: string | undefined
  metaData?: MetaData | undefined
  newDevice?: boolean | undefined
  noJWT?: boolean | undefined
}
type WebAuthnAssertResponse = { credential?: WebAuthnCredential | undefined }
type WebAuthnCredentialImportRequest = {
  credentials?: WebAuthnCredential[] | undefined
  validateDbConstraints?: boolean | undefined
}
type WebAuthnAuthenticatorRegistrationResponse = {
  attestationObject?: string | undefined
  clientDataJSON?: string | undefined
}
type WebAuthnPublicKeyRegistrationRequest = {
  clientExtensionResults?: WebAuthnExtensionsClientOutputs | undefined
  id?: string | undefined
  rpId?: string | undefined
  response?: WebAuthnAuthenticatorRegistrationResponse | undefined
  transports?: string[] | undefined
  type?: string | undefined
}
type WebAuthnRegisterCompleteRequest = {
  credential?: WebAuthnPublicKeyRegistrationRequest | undefined
  origin?: string | undefined
  rpId?: string | undefined
  userId?: string | undefined
}
type WebAuthnRegisterCompleteResponse = { credential?: WebAuthnCredential | undefined }
type WebAuthnWorkflow = 'bootstrap' | 'general' | 'reauthentication'
type WebAuthnRegisterStartRequest = {
  displayName?: string | undefined
  name?: string | undefined
  userAgent?: string | undefined
  userId?: string | undefined
  workflow?: WebAuthnWorkflow | undefined
}
type AttestationConveyancePreference = 'none' | 'indirect' | 'direct' | 'enterprise'
type AuthenticatorAttachment = 'platform' | 'crossPlatform'
type ResidentKeyRequirement = 'discouraged' | 'preferred' | 'required'
type AuthenticatorSelectionCriteria = {
  authenticatorAttachment?: AuthenticatorAttachment | undefined
  requireResidentKey?: boolean | undefined
  residentKey?: ResidentKeyRequirement | undefined
  userVerification?: UserVerificationRequirement | undefined
}
type PublicKeyCredentialType = 'publicKey'
type PublicKeyCredentialDescriptor = {
  id?: string | undefined
  transports?: string[] | undefined
  type?: PublicKeyCredentialType | undefined
}
type WebAuthnRegistrationExtensionOptions = { credProps?: boolean | undefined }
type PublicKeyCredentialParameters = {
  alg?: CoseAlgorithmIdentifier | undefined
  type?: PublicKeyCredentialType | undefined
}
type PublicKeyCredentialRelyingPartyEntity = { id?: string | undefined; name?: string | undefined }
type PublicKeyCredentialUserEntity = {
  displayName?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type PublicKeyCredentialCreationOptions = {
  attestation?: AttestationConveyancePreference | undefined
  authenticatorSelection?: AuthenticatorSelectionCriteria | undefined
  challenge?: string | undefined
  excludeCredentials?: PublicKeyCredentialDescriptor[] | undefined
  extensions?: WebAuthnRegistrationExtensionOptions | undefined
  pubKeyCredParams?: PublicKeyCredentialParameters[] | undefined
  rp?: PublicKeyCredentialRelyingPartyEntity | undefined
  timeout?: bigint | undefined
  user?: PublicKeyCredentialUserEntity | undefined
}
type WebAuthnRegisterStartResponse = { options?: PublicKeyCredentialCreationOptions | undefined }
type WebAuthnStartRequest = {
  applicationId?: string | undefined
  credentialId?: string | undefined
  loginId?: string | undefined
  loginIdTypes?: string[] | undefined
  state?: { [x: string]: { [x: string]: unknown } } | undefined
  userId?: string | undefined
  workflow?: WebAuthnWorkflow | undefined
}
type PublicKeyCredentialRequestOptions = {
  allowCredentials?: PublicKeyCredentialDescriptor[] | undefined
  challenge?: string | undefined
  rpId?: string | undefined
  timeout?: bigint | undefined
  userVerification?: UserVerificationRequirement | undefined
}
type WebAuthnStartResponse = { options?: PublicKeyCredentialRequestOptions | undefined }
type HTTPHeaders = { [x: string]: unknown }
type WebhookSignatureConfiguration = {
  signingKeyId?: string | undefined
  enabled?: boolean | undefined
}
type Webhook = {
  connectTimeout?: number | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  description?: string | undefined
  eventsEnabled?: { [x: string]: boolean } | undefined
  global?: boolean | undefined
  headers?: HTTPHeaders | undefined
  httpAuthenticationPassword?: string | undefined
  httpAuthenticationUsername?: string | undefined
  id?: string | undefined
  insertInstant?: ZonedDateTime | undefined
  lastUpdateInstant?: ZonedDateTime | undefined
  readTimeout?: number | undefined
  signatureConfiguration?: WebhookSignatureConfiguration | undefined
  sslCertificate?: string | undefined
  sslCertificateKeyId?: string | undefined
  tenantIds?: string[] | undefined
  url?: string | undefined
}
type WebhookRequest = { webhook?: Webhook | undefined }
type WebhookResponse = { webhook?: Webhook | undefined; webhooks?: Webhook[] | undefined }
type WebhookSearchCriteria = {
  description?: string | undefined
  tenantId?: string | undefined
  url?: string | undefined
  numberOfResults?: number | undefined
  orderBy?: string | undefined
  startRow?: number | undefined
}
type WebhookSearchRequest = { search?: WebhookSearchCriteria | undefined }
type WebhookSearchResponse = { total?: bigint | undefined; webhooks?: Webhook[] | undefined }
type DeviceApprovalResponse = {
  deviceGrantStatus?: string | undefined
  deviceInfo?: DeviceInfo | undefined
  identityProviderLink?: IdentityProviderLink | undefined
  tenantId?: string | undefined
  userId?: string | undefined
}
type DeviceResponse = {
  device_code?: string | undefined
  expires_in?: number | undefined
  interval?: number | undefined
  user_code?: string | undefined
  verification_uri?: string | undefined
  verification_uri_complete?: string | undefined
}
type OAuthErrorType =
  | 'invalid_request'
  | 'invalid_client'
  | 'invalid_grant'
  | 'invalid_token'
  | 'consent_required'
  | 'interaction_required'
  | 'login_required'
  | 'unauthorized_client'
  | 'invalid_scope'
  | 'server_error'
  | 'unsupported_grant_type'
  | 'unsupported_response_type'
  | 'access_denied'
  | 'change_password_required'
  | 'not_licensed'
  | 'two_factor_required'
  | 'authorization_pending'
  | 'expired_token'
  | 'unsupported_token_type'
  | 'invalid_dpop_proof'
  | 'invalid_target'
type OAuthErrorReason =
  | 'auth_code_not_found'
  | 'access_token_malformed'
  | 'access_token_expired'
  | 'access_token_unavailable_for_processing'
  | 'access_token_failed_processing'
  | 'access_token_invalid'
  | 'access_token_required'
  | 'refresh_token_not_found'
  | 'refresh_token_type_not_supported'
  | 'id_token_invalid'
  | 'unsupported_token_type'
  | 'token_type_hint_mismatch'
  | 'invalid_client_id'
  | 'invalid_expires_in'
  | 'invalid_user_credentials'
  | 'invalid_grant_type'
  | 'invalid_origin'
  | 'invalid_origin_opaque'
  | 'invalid_pkce_code_verifier'
  | 'invalid_pkce_code_challenge'
  | 'invalid_pkce_code_challenge_method'
  | 'invalid_prompt'
  | 'invalid_redirect_uri'
  | 'invalid_resource_cardinality'
  | 'invalid_response_mode'
  | 'invalid_response_type'
  | 'invalid_id_token_hint'
  | 'invalid_post_logout_redirect_uri'
  | 'invalid_device_code'
  | 'invalid_user_code'
  | 'invalid_additional_client_id'
  | 'invalid_target_entity_scope'
  | 'invalid_entity_permission_scope'
  | 'invalid_user_id'
  | 'invalid_tenant_id'
  | 'resource_parameter_not_supported'
  | 'grant_type_disabled'
  | 'missing_client_id'
  | 'missing_client_secret'
  | 'missing_code'
  | 'missing_code_challenge'
  | 'missing_code_verifier'
  | 'missing_device_code'
  | 'missing_grant_type'
  | 'missing_redirect_uri'
  | 'missing_refresh_token'
  | 'missing_response_type'
  | 'missing_token'
  | 'missing_user_code'
  | 'missing_user_id'
  | 'missing_verification_uri'
  | 'missing_tenant_id'
  | 'login_prevented'
  | 'not_licensed'
  | 'user_code_expired'
  | 'user_expired'
  | 'user_locked'
  | 'user_not_found'
  | 'client_authentication_missing'
  | 'invalid_client_authentication_scheme'
  | 'invalid_client_authentication'
  | 'client_id_mismatch'
  | 'change_password_administrative'
  | 'change_password_breached'
  | 'change_password_expired'
  | 'change_password_validation'
  | 'unknown'
  | 'missing_required_scope'
  | 'unknown_scope'
  | 'consent_canceled'
  | 'authentication_required'
  | 'email_verification_required'
  | 'multi_factor_challenge_required'
  | 'phone_verification_required'
  | 'registration_missing_requirement'
  | 'registration_required'
  | 'registration_verification_required'
  | 'consent_required'
  | 'audience_required'
  | 'invalid_audience'
  | 'invalid_intent'
  | 'invalid_jwt'
  | 'invalid_scope'
  | 'invalid_state'
  | 'invalid_resource'
  | 'lambda_denied'
type OAuthError = {
  change_password_id?: string | undefined
  error_description?: string | undefined
  error?: OAuthErrorType | undefined
  error_uri?: string | undefined
  two_factor_methods?: TwoFactorMethod[] | undefined
  error_reason?: OAuthErrorReason | undefined
  two_factor_id?: string | undefined
}
type IntrospectResponse = { [x: string]: unknown }
type TokenType = 'Bearer' | 'MAC' | 'DPoP'
type AccessToken = {
  expires_in?: number | undefined
  id_token?: string | undefined
  issued_token_type?: string | undefined
  refresh_token?: string | undefined
  refresh_token_id?: string | undefined
  scope?: string | undefined
  access_token?: string | undefined
  token_type?: TokenType | undefined
  userId?: string | undefined
}
type UserinfoResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/.well-known/jwks.json': {
      $get:
        | { input: {}; output: JWKSResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/.well-known/openid-configuration': {
      $get:
        | { input: {}; output: OpenIdConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/api-key': {
      $post:
        | {
            input: { json: APIKeyRequest }
            output: APIKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: APIKeyRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/api-key/:keyId': {
      $post:
        | {
            input: { param: { keyId: string } } & { json: APIKeyRequest }
            output: APIKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: string } } & { json: APIKeyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { keyId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { keyId: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { keyId: string } } & { json: APIKeyRequest }
            output: APIKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: string } } & { json: APIKeyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { keyId: string } }
            output: APIKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { keyId: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { keyId: string } } & { json: APIKeyRequest }
            output: APIKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: string } } & { json: APIKeyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/application': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: ApplicationRequest
            }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: ApplicationRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { inactive?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { inactive?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/application/search': {
      $post:
        | {
            input: { json: ApplicationSearchRequest }
            output: ApplicationSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/application/:applicationId': {
      $post:
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { applicationId: string } } & {
              query: { hardDelete?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              query: { hardDelete?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { applicationId: string } } & {
              query: { reactivate?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: ApplicationRequest
            }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              query: { reactivate?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: ApplicationRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/application/:applicationId/oauth-configuration': {
      $get:
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: OAuthConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/application/:applicationId/role': {
      $post:
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/application/:applicationId/role/:roleId': {
      $post:
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: ApplicationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string; roleId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/application/:applicationId/scope': {
      $post:
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: ApplicationOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/application/:applicationId/scope/:scopeId': {
      $post:
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: ApplicationOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: ApplicationOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: ApplicationOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: ApplicationOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string; scopeId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ApplicationOAuthScopeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/cimd/domain': {
      $post:
        | {
            input: { json: CimdDomainRequest }
            output: CimdDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CimdDomainRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: CimdDomainResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/cimd/domain/search': {
      $post:
        | {
            input: { json: CimdDomainSearchRequest }
            output: CimdDomainSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CimdDomainSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/cimd/domain/:domainId': {
      $post:
        | {
            input: { param: { domainId: string } } & { json: CimdDomainRequest }
            output: CimdDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } } & { json: CimdDomainRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { domainId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { domainId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { domainId: string } } & { json: CimdDomainRequest }
            output: CimdDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } } & { json: CimdDomainRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { domainId: string } }
            output: CimdDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { domainId: string } } & { json: CimdDomainRequest }
            output: CimdDomainResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } } & { json: CimdDomainRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/cimd/domain/:domainId/scope': {
      $post:
        | {
            input: { param: { domainId: string } } & { json: CimdDomainOAuthScopeRequest }
            output: CimdDomainOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } } & { json: CimdDomainOAuthScopeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/cimd/domain/:domainId/scope/:scopeId': {
      $post:
        | {
            input: { param: { domainId: string; scopeId: string } } & {
              json: CimdDomainOAuthScopeRequest
            }
            output: CimdDomainOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string; scopeId: string } } & {
              json: CimdDomainOAuthScopeRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { domainId: string; scopeId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { domainId: string; scopeId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { domainId: string; scopeId: string } } & {
              json: CimdDomainOAuthScopeRequest
            }
            output: CimdDomainOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string; scopeId: string } } & {
              json: CimdDomainOAuthScopeRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { domainId: string; scopeId: string } }
            output: CimdDomainOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string; scopeId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { domainId: string; scopeId: string } } & {
              json: CimdDomainOAuthScopeRequest
            }
            output: CimdDomainOAuthScopeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string; scopeId: string } } & {
              json: CimdDomainOAuthScopeRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/cimd/registration/search': {
      $post:
        | {
            input: { json: CimdClientRegistrationSearchRequest }
            output: CimdClientRegistrationSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CimdClientRegistrationSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/cimd/registration/:registrationId': {
      $delete:
        | {
            input: { param: { registrationId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { registrationId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { registrationId: string } }
            output: CimdClientRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { registrationId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/connector': {
      $post:
        | {
            input: { json: ConnectorRequest }
            output: ConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ConnectorRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: ConnectorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/connector/:connectorId': {
      $post:
        | {
            input: { param: { connectorId: string } } & { json: ConnectorRequest }
            output: ConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectorId: string } } & { json: ConnectorRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { connectorId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { connectorId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { connectorId: string } } & { json: ConnectorRequest }
            output: ConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectorId: string } } & { json: ConnectorRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { connectorId: string } }
            output: ConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectorId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { connectorId: string } } & { json: ConnectorRequest }
            output: ConnectorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectorId: string } } & { json: ConnectorRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/consent': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: ConsentRequest
            }
            output: ConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: ConsentRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: ConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/consent/search': {
      $post:
        | {
            input: { json: ConsentSearchRequest }
            output: ConsentSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConsentSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: ConsentSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/consent/:consentId': {
      $post:
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ConsentRequest }
            output: ConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ConsentRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ConsentRequest }
            output: ConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ConsentRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: ConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ConsentRequest }
            output: ConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consentId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: ConsentRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/email/send/:emailTemplateId': {
      $post:
        | {
            input: { param: { emailTemplateId: string } } & { json: SendRequest }
            output: SendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emailTemplateId: string } } & { json: SendRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/email/template': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: EmailTemplateRequest
            }
            output: EmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: EmailTemplateRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: EmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/email/template/preview': {
      $post:
        | {
            input: { json: PreviewRequest }
            output: PreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PreviewRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/email/template/search': {
      $post:
        | {
            input: { json: EmailTemplateSearchRequest }
            output: EmailTemplateSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmailTemplateSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/email/template/:emailTemplateId': {
      $post:
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EmailTemplateRequest }
            output: EmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EmailTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EmailTemplateRequest }
            output: EmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EmailTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: EmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EmailTemplateRequest }
            output: EmailTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emailTemplateId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EmailTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: EntityRequest
            }
            output: EntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: EntityRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity/grant/search': {
      $post:
        | {
            input: { json: EntityGrantSearchRequest }
            output: EntityGrantSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EntityGrantSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                entityId?: string | undefined
                name?: string | undefined
                userId?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: EntityGrantSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                entityId?: string | undefined
                name?: string | undefined
                userId?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity/search': {
      $post:
        | {
            input: { json: EntitySearchRequest }
            output: EntitySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EntitySearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { ids?: string | undefined } }
            output: EntitySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/entity/type': {
      $post:
        | {
            input: { json: EntityTypeRequest }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: EntityTypeRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: EntityTypeResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/entity/type/search': {
      $post:
        | {
            input: { json: EntityTypeSearchRequest }
            output: EntityTypeSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EntityTypeSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: EntityTypeSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity/type/:entityTypeId': {
      $post:
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { entityTypeId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { entityTypeId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { entityTypeId: string } }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity/type/:entityTypeId/permission': {
      $post:
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string } } & { json: EntityTypeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity/type/:entityTypeId/permission/:permissionId': {
      $post:
        | {
            input: { param: { entityTypeId: string; permissionId: string } } & {
              json: EntityTypeRequest
            }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string; permissionId: string } } & {
              json: EntityTypeRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { entityTypeId: string; permissionId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { entityTypeId: string; permissionId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { entityTypeId: string; permissionId: string } } & {
              json: EntityTypeRequest
            }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string; permissionId: string } } & {
              json: EntityTypeRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { entityTypeId: string; permissionId: string } } & {
              json: EntityTypeRequest
            }
            output: EntityTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityTypeId: string; permissionId: string } } & {
              json: EntityTypeRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity/:entityId': {
      $post:
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityRequest }
            output: EntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityRequest }
            output: EntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: EntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityRequest }
            output: EntityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/entity/:entityId/grant': {
      $delete:
        | {
            input: { param: { entityId: string } } & {
              query: { recipientEntityId?: string | undefined; userId?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              query: { recipientEntityId?: string | undefined; userId?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { entityId: string } } & {
              query: { recipientEntityId?: string | undefined; userId?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: EntityGrantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              query: { recipientEntityId?: string | undefined; userId?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityGrantRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { entityId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: EntityGrantRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/form': {
      $post:
        | { input: { json: FormRequest }; output: FormResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: FormRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: FormResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/form/field': {
      $post:
        | {
            input: { json: FormFieldRequest }
            output: FormFieldResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: FormFieldRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: FormFieldResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/form/field/:fieldId': {
      $post:
        | {
            input: { param: { fieldId: string } } & { json: FormFieldRequest }
            output: FormFieldResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & { json: FormFieldRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { fieldId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { fieldId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { fieldId: string } } & { json: FormFieldRequest }
            output: FormFieldResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & { json: FormFieldRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { fieldId: string } }
            output: FormFieldResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { fieldId: string } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { fieldId: string } } & { json: FormFieldRequest }
            output: FormFieldResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fieldId: string } } & { json: FormFieldRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/form/:formId': {
      $post:
        | {
            input: { param: { formId: string } } & { json: FormRequest }
            output: FormResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formId: string } } & { json: FormRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { formId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { formId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { formId: string } } & { json: FormRequest }
            output: FormResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formId: string } } & { json: FormRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { formId: string } }
            output: FormResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { formId: string } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { formId: string } } & { json: FormRequest }
            output: FormResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { formId: string } } & { json: FormRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/group': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: GroupRequest
            }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: GroupRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/group/member': {
      $post:
        | {
            input: { json: MemberRequest }
            output: MemberResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MemberRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: { json: MemberDeleteRequest }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: MemberDeleteRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { json: MemberRequest }
            output: MemberResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MemberRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/group/member/search': {
      $post:
        | {
            input: { json: GroupMemberSearchRequest }
            output: GroupMemberSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GroupMemberSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/group/search': {
      $post:
        | {
            input: { json: GroupSearchRequest }
            output: GroupSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GroupSearchRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/group/:groupId': {
      $post:
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: GroupRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: GroupRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: GroupRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: GroupRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: GroupRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: GroupRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/health': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/identity-provider': {
      $post:
        | {
            input: { json: IdentityProviderRequest }
            output: IdentityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityProviderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { type?: string | undefined } }
            output: IdentityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-provider/link': {
      $post:
        | {
            input: { json: IdentityProviderLinkRequest }
            output: IdentityProviderLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityProviderLinkRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              query: {
                identityProviderId?: string | undefined
                identityProviderUserId?: string | undefined
                userId?: string | undefined
              }
            }
            output: IdentityProviderLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                identityProviderId?: string | undefined
                identityProviderUserId?: string | undefined
                userId?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                identityProviderId?: string | undefined
                userId?: string | undefined
                identityProviderUserId?: string | undefined
              }
            }
            output: IdentityProviderLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                identityProviderId?: string | undefined
                userId?: string | undefined
                identityProviderUserId?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-provider/link/pending/:pendingLinkId': {
      $get:
        | {
            input: { param: { pendingLinkId: string } } & { query: { userId?: string | undefined } }
            output: IdentityProviderPendingLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pendingLinkId: string } } & { query: { userId?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-provider/login': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: IdentityProviderLoginRequest
            }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: IdentityProviderLoginRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-provider/lookup': {
      $get:
        | {
            input: { query: { domain?: string | undefined; tenantId?: string | undefined } }
            output: LookupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { domain?: string | undefined; tenantId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/identity-provider/search': {
      $post:
        | {
            input: { json: IdentityProviderSearchRequest }
            output: IdentityProviderSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityProviderSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                applicationId?: string | undefined
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
                tenantId?: string | undefined
                type?: string | undefined
              }
            }
            output: IdentityProviderSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                applicationId?: string | undefined
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
                tenantId?: string | undefined
                type?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-provider/start': {
      $post:
        | {
            input: { json: IdentityProviderStartLoginRequest }
            output: IdentityProviderStartLoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityProviderStartLoginRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-provider/test': {
      $get:
        | {
            input: { query: { connectionTestId?: string | undefined } }
            output: IdentityProviderConnectionTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { connectionTestId?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: IdentityProviderConnectionTestRequest }
            output: IdentityProviderConnectionTestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityProviderConnectionTestRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity-provider/:identityProviderId': {
      $post:
        | {
            input: { param: { identityProviderId: string } } & { json: IdentityProviderRequest }
            output: IdentityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identityProviderId: string } } & { json: IdentityProviderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { identityProviderId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { identityProviderId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { identityProviderId: string } } & { json: IdentityProviderRequest }
            output: IdentityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identityProviderId: string } } & { json: IdentityProviderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { identityProviderId: string } }
            output: IdentityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identityProviderId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { identityProviderId: string } } & { json: IdentityProviderRequest }
            output: IdentityProviderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identityProviderId: string } } & { json: IdentityProviderRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity/verify': {
      $post:
        | { input: { json: VerifyRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: VerifyRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/identity/verify/complete': {
      $post:
        | {
            input: { json: VerifyCompleteRequest }
            output: VerifyCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VerifyCompleteRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/identity/verify/send': {
      $post:
        | { input: { json: VerifySendRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: VerifySendRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/identity/verify/start': {
      $post:
        | {
            input: { json: VerifyStartRequest }
            output: VerifyStartResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: VerifyStartRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/integration': {
      $patch:
        | {
            input: { json: IntegrationRequest }
            output: IntegrationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: IntegrationRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { json: IntegrationRequest }
            output: IntegrationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: IntegrationRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: IntegrationResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/ip-acl': {
      $post:
        | {
            input: { json: IPAccessControlListRequest }
            output: IPAccessControlListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPAccessControlListRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/ip-acl/search': {
      $post:
        | {
            input: { json: IPAccessControlListSearchRequest }
            output: IPAccessControlListSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPAccessControlListSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: IPAccessControlListSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/ip-acl/:accessControlListId': {
      $post:
        | {
            input: { param: { accessControlListId: string } } & { json: IPAccessControlListRequest }
            output: IPAccessControlListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessControlListId: string } } & { json: IPAccessControlListRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { accessControlListId: string } } & { json: IPAccessControlListRequest }
            output: IPAccessControlListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessControlListId: string } } & { json: IPAccessControlListRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { accessControlListId: string } } & { json: IPAccessControlListRequest }
            output: IPAccessControlListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accessControlListId: string } } & { json: IPAccessControlListRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/ip-acl/:ipAccessControlListId': {
      $delete:
        | {
            input: { param: { ipAccessControlListId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { ipAccessControlListId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { ipAccessControlListId: string } }
            output: IPAccessControlListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ipAccessControlListId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/jwt/issue': {
      $get:
        | {
            input: {
              query: { applicationId?: string | undefined; refreshToken?: string | undefined }
            }
            output: IssueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { applicationId?: string | undefined; refreshToken?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/jwt/public-key': {
      $get:
        | {
            input: { query: { applicationId?: string | undefined; kid?: string | undefined } }
            output: PublicKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { applicationId?: string | undefined; kid?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/jwt/reconcile': {
      $post:
        | {
            input: { json: IdentityProviderLoginRequest }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityProviderLoginRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/jwt/refresh': {
      $post:
        | {
            input: { json: RefreshRequest }
            output: JWTRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: RefreshRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { query: { userId?: string | undefined } }
            output: RefreshTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: {
              query: {
                userId?: string | undefined
                applicationId?: string | undefined
                token?: string | undefined
              }
            } & { json: RefreshTokenRevokeRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                applicationId?: string | undefined
                token?: string | undefined
              }
            } & { json: RefreshTokenRevokeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/jwt/refresh/:tokenId': {
      $get:
        | {
            input: { param: { tokenId: string } }
            output: RefreshTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { tokenId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { tokenId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/jwt/validate': {
      $get:
        | { input: {}; output: ValidateResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/jwt/vend': {
      $post:
        | {
            input: { json: JWTVendRequest }
            output: JWTVendResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: JWTVendRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/key': {
      $get:
        | { input: {}; output: KeyResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/key/generate': {
      $post:
        | { input: { json: KeyRequest }; output: KeyResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: KeyRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/key/generate/:keyId': {
      $post:
        | {
            input: { param: { keyId: string } } & { json: KeyRequest }
            output: KeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: string } } & { json: KeyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/key/import': {
      $post:
        | { input: { json: KeyRequest }; output: KeyResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: KeyRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/key/import/:keyId': {
      $post:
        | {
            input: { param: { keyId: string } } & { json: KeyRequest }
            output: KeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: string } } & { json: KeyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/key/search': {
      $post:
        | {
            input: { json: KeySearchRequest }
            output: KeySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: KeySearchRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: {
              query: {
                algorithm?: string | undefined
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
                type?: string | undefined
              }
            }
            output: KeySearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                algorithm?: string | undefined
                name?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
                type?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/key/:keyId': {
      $delete:
        | { input: { param: { keyId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { keyId: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { keyId: string } }
            output: KeyResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { keyId: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { param: { keyId: string } } & { json: KeyRequest }
            output: KeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: string } } & { json: KeyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/lambda': {
      $post:
        | {
            input: { json: LambdaRequest }
            output: LambdaResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: LambdaRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { query: { type?: string | undefined } }
            output: LambdaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/lambda/search': {
      $post:
        | {
            input: { json: LambdaSearchRequest }
            output: LambdaSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LambdaSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/lambda/:lambdaId': {
      $post:
        | {
            input: { param: { lambdaId: string } } & { json: LambdaRequest }
            output: LambdaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lambdaId: string } } & { json: LambdaRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { lambdaId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { lambdaId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { lambdaId: string } } & { json: LambdaRequest }
            output: LambdaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lambdaId: string } } & { json: LambdaRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { lambdaId: string } }
            output: LambdaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lambdaId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { lambdaId: string } } & { json: LambdaRequest }
            output: LambdaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lambdaId: string } } & { json: LambdaRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/login': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: LoginRequest
            }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: LoginRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: LoginPingRequest
            }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: LoginPingRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/login/:userId/:applicationId': {
      $put:
        | {
            input: { param: { userId: string; applicationId: string } } & {
              query: { ipAddress?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; applicationId: string } } & {
              query: { ipAddress?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/logout': {
      $post:
        | {
            input: { query: { global?: string | undefined; refreshToken?: string | undefined } } & {
              json: LogoutRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { global?: string | undefined; refreshToken?: string | undefined } } & {
              json: LogoutRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/message/template': {
      $post:
        | {
            input: { json: MessageTemplateRequest }
            output: MessageTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessageTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: {}; output: MessageTemplateResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/message/template/preview': {
      $post:
        | {
            input: { json: PreviewMessageTemplateRequest }
            output: PreviewMessageTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PreviewMessageTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/message/template/:messageTemplateId': {
      $post:
        | {
            input: { param: { messageTemplateId: string } } & { json: MessageTemplateRequest }
            output: MessageTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageTemplateId: string } } & { json: MessageTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { messageTemplateId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { messageTemplateId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { messageTemplateId: string } } & { json: MessageTemplateRequest }
            output: MessageTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageTemplateId: string } } & { json: MessageTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { messageTemplateId: string } }
            output: MessageTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageTemplateId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { messageTemplateId: string } } & { json: MessageTemplateRequest }
            output: MessageTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageTemplateId: string } } & { json: MessageTemplateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/messenger': {
      $post:
        | {
            input: { json: MessengerRequest }
            output: MessengerResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MessengerRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: MessengerResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/messenger/:messengerId': {
      $post:
        | {
            input: { param: { messengerId: string } } & { json: MessengerRequest }
            output: MessengerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messengerId: string } } & { json: MessengerRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { messengerId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { messengerId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { messengerId: string } } & { json: MessengerRequest }
            output: MessengerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messengerId: string } } & { json: MessengerRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { messengerId: string } }
            output: MessengerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messengerId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { messengerId: string } } & { json: MessengerRequest }
            output: MessengerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messengerId: string } } & { json: MessengerRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/passwordless/login': {
      $post:
        | {
            input: { json: PasswordlessLoginRequest }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordlessLoginRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/passwordless/send': {
      $post:
        | {
            input: { json: PasswordlessSendRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: PasswordlessSendRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/passwordless/start': {
      $post:
        | {
            input: { json: PasswordlessStartRequest }
            output: PasswordlessStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PasswordlessStartRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/reactor': {
      $post:
        | { input: { json: ReactorRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: ReactorRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
      $get:
        | { input: {}; output: ReactorResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/reactor/metrics': {
      $get:
        | { input: {}; output: ReactorMetricsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/report/daily-active-user': {
      $get:
        | {
            input: {
              query: {
                applicationId?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: DailyActiveUserReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                applicationId?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/report/login': {
      $get:
        | {
            input: {
              query: {
                applicationId?: string | undefined
                loginId?: string | undefined
                start?: string | undefined
                end?: string | undefined
                loginIdTypes?: string[] | undefined
                userId?: string | undefined
              }
            }
            output: LoginReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                applicationId?: string | undefined
                loginId?: string | undefined
                start?: string | undefined
                end?: string | undefined
                loginIdTypes?: string[] | undefined
                userId?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/report/monthly-active-user': {
      $get:
        | {
            input: {
              query: {
                applicationId?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: MonthlyActiveUserReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                applicationId?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/report/registration': {
      $get:
        | {
            input: {
              query: {
                applicationId?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: RegistrationReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                applicationId?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/report/totals': {
      $get:
        | {
            input: { query: { excludes?: string[] | undefined } }
            output: TotalsReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { excludes?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/status': {
      $get:
        | { input: {}; output: StatusResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/system-configuration': {
      $patch:
        | {
            input: { json: SystemConfigurationRequest }
            output: SystemConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SystemConfigurationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { json: SystemConfigurationRequest }
            output: SystemConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SystemConfigurationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: {}; output: SystemConfigurationResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/system/audit-log': {
      $post:
        | {
            input: { json: AuditLogRequest }
            output: AuditLogResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AuditLogRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/audit-log/search': {
      $post:
        | {
            input: { json: AuditLogSearchRequest }
            output: AuditLogSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuditLogSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/system/audit-log/:auditLogId': {
      $get:
        | {
            input: { param: { auditLogId: string } }
            output: AuditLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auditLogId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/system/event-log/search': {
      $post:
        | {
            input: { json: EventLogSearchRequest }
            output: EventLogSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventLogSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/system/event-log/:eventLogId': {
      $get:
        | {
            input: { param: { eventLogId: string } }
            output: EventLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventLogId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/system/login-record/search': {
      $post:
        | {
            input: { json: LoginRecordSearchRequest }
            output: LoginRecordSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LoginRecordSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/system/reindex': {
      $post:
        | { input: { json: ReindexRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: ReindexRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/version': {
      $get:
        | { input: {}; output: VersionResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/webhook-attempt-log/:webhookAttemptLogId': {
      $get:
        | {
            input: { param: { webhookAttemptLogId: string } }
            output: WebhookAttemptLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookAttemptLogId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/system/webhook-event-log/search': {
      $post:
        | {
            input: { json: WebhookEventLogSearchRequest }
            output: WebhookEventLogSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhookEventLogSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/system/webhook-event-log/:webhookEventLogId': {
      $get:
        | {
            input: { param: { webhookEventLogId: string } }
            output: WebhookEventLogResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookEventLogId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/tenant': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: TenantRequest
            }
            output: TenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: TenantRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: TenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/tenant-manager': {
      $patch:
        | {
            input: { json: TenantManagerConfigurationRequest }
            output: TenantManagerConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TenantManagerConfigurationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { json: TenantManagerConfigurationRequest }
            output: TenantManagerConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TenantManagerConfigurationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {}
            output: TenantManagerConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/tenant-manager/identity-provider/:type': {
      $post:
        | {
            input: { param: { type: string } } & {
              json: TenantManagerIdentityProviderTypeConfigurationRequest
            }
            output: TenantManagerIdentityProviderTypeConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              json: TenantManagerIdentityProviderTypeConfigurationRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { type: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { type: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { type: string } } & {
              json: TenantManagerIdentityProviderTypeConfigurationRequest
            }
            output: TenantManagerIdentityProviderTypeConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              json: TenantManagerIdentityProviderTypeConfigurationRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { type: string } } & {
              json: TenantManagerIdentityProviderTypeConfigurationRequest
            }
            output: TenantManagerIdentityProviderTypeConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              json: TenantManagerIdentityProviderTypeConfigurationRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/tenant/password-validation-rules': {
      $get:
        | { input: {}; output: PasswordValidationRulesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/tenant/password-validation-rules/:tenantId': {
      $get:
        | {
            input: { param: { tenantId: string } }
            output: PasswordValidationRulesResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { tenantId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/tenant/search': {
      $post:
        | {
            input: { json: TenantSearchRequest }
            output: TenantSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TenantSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/tenant/:tenantId': {
      $post:
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantRequest }
            output: TenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { tenantId: string } } & { query: { async?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantDeleteRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tenantId: string } } & { query: { async?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantDeleteRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantRequest }
            output: TenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: TenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantRequest }
            output: TenantResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tenantId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: TenantRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/theme': {
      $post:
        | {
            input: { json: ThemeRequest }
            output: ThemeResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ThemeRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: ThemeResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/theme/search': {
      $post:
        | {
            input: { json: ThemeSearchRequest }
            output: ThemeSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ThemeSearchRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/theme/:themeId': {
      $post:
        | {
            input: { param: { themeId: string } } & { json: ThemeRequest }
            output: ThemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { themeId: string } } & { json: ThemeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { themeId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { themeId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { themeId: string } } & { json: ThemeRequest }
            output: ThemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { themeId: string } } & { json: ThemeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { themeId: string } }
            output: ThemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { themeId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { themeId: string } } & { json: ThemeRequest }
            output: ThemeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { themeId: string } } & { json: ThemeRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/two-factor/login': {
      $post:
        | {
            input: { json: TwoFactorLoginRequest }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TwoFactorLoginRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/two-factor/secret': {
      $get:
        | { input: {}; output: SecretResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/two-factor/send': {
      $post:
        | { input: { json: TwoFactorSendRequest }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: TwoFactorSendRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/two-factor/send/:twoFactorId': {
      $post:
        | {
            input: { param: { twoFactorId: string } } & { json: TwoFactorSendRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { twoFactorId: string } } & { json: TwoFactorSendRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/two-factor/start': {
      $post:
        | {
            input: { json: TwoFactorStartRequest }
            output: TwoFactorStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TwoFactorStartRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/two-factor/status': {
      $post:
        | {
            input: { json: TwoFactorStatusRequest }
            output: TwoFactorStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TwoFactorStatusRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/two-factor/status/:twoFactorTrustId': {
      $get:
        | {
            input: { param: { twoFactorTrustId: string } } & {
              query: { userId?: string | undefined; applicationId?: string | undefined }
            }
            output: TwoFactorStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { twoFactorTrustId: string } } & {
              query: { userId?: string | undefined; applicationId?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserRequest
            }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                verificationId?: string | undefined
                username?: string | undefined
                loginId?: string | undefined
                loginIdTypes?: string[] | undefined
                email?: string | undefined
                changePasswordId?: string | undefined
              }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                verificationId?: string | undefined
                username?: string | undefined
                loginId?: string | undefined
                loginIdTypes?: string[] | undefined
                email?: string | undefined
                changePasswordId?: string | undefined
              }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user-action': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserActionRequest
            }
            output: UserActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserActionRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { inactive?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: UserActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { inactive?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/user-action-reason': {
      $post:
        | {
            input: { json: UserActionReasonRequest }
            output: UserActionReasonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserActionReasonRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: {}; output: UserActionReasonResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/user-action-reason/:userActionReasonId': {
      $post:
        | {
            input: { param: { userActionReasonId: string } } & { json: UserActionReasonRequest }
            output: UserActionReasonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionReasonId: string } } & { json: UserActionReasonRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { userActionReasonId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userActionReasonId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { userActionReasonId: string } } & { json: UserActionReasonRequest }
            output: UserActionReasonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionReasonId: string } } & { json: UserActionReasonRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { userActionReasonId: string } }
            output: UserActionReasonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionReasonId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { userActionReasonId: string } } & { json: UserActionReasonRequest }
            output: UserActionReasonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionReasonId: string } } & { json: UserActionReasonRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user-action/:userActionId': {
      $post:
        | {
            input: { param: { userActionId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserActionRequest }
            output: UserActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserActionRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { userActionId: string } } & {
              query: { hardDelete?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userActionId: string } } & {
              query: { hardDelete?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { userActionId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserActionRequest }
            output: UserActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserActionRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { userActionId: string } } & {
              query: { reactivate?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserActionRequest
            }
            output: UserActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionId: string } } & {
              query: { reactivate?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserActionRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { userActionId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: UserActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userActionId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/user/action': {
      $post:
        | {
            input: { json: ActionRequest }
            output: ActionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ActionRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: {
              query: {
                userId?: string | undefined
                active?: string | undefined
                preventingLogin?: string | undefined
              }
            }
            output: ActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                active?: string | undefined
                preventingLogin?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/action/:actionId': {
      $delete:
        | {
            input: { param: { actionId: string } } & { json: ActionRequest }
            output: ActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actionId: string } } & { json: ActionRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { actionId: string } } & { json: ActionRequest }
            output: ActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actionId: string } } & { json: ActionRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { actionId: string } }
            output: ActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actionId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/bulk': {
      $delete:
        | {
            input: {
              query: {
                userId?: string | undefined
                dryRun?: string | undefined
                hardDelete?: string | undefined
              }
            } & { json: UserDeleteRequest }
            output: UserDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                dryRun?: string | undefined
                hardDelete?: string | undefined
              }
            } & { json: UserDeleteRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/change-password': {
      $post:
        | {
            input: { json: ChangePasswordRequest }
            output: ChangePasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ChangePasswordRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                loginId?: string | undefined
                loginIdTypes?: string[] | undefined
                ipAddress?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                loginId?: string | undefined
                loginIdTypes?: string[] | undefined
                ipAddress?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/change-password/:changePasswordId': {
      $post:
        | {
            input: { param: { changePasswordId: string } } & { json: ChangePasswordRequest }
            output: ChangePasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { changePasswordId: string } } & { json: ChangePasswordRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { changePasswordId: string } } & {
              query: { ipAddress?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { changePasswordId: string } } & {
              query: { ipAddress?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/comment': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserCommentRequest
            }
            output: UserCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserCommentRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/comment/search': {
      $post:
        | {
            input: { json: UserCommentSearchRequest }
            output: UserCommentSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserCommentSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/comment/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: UserCommentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/consent': {
      $post:
        | {
            input: { json: UserConsentRequest }
            output: UserConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: UserConsentRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { query: { userId?: string | undefined } }
            output: UserConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/user/consent/:userConsentId': {
      $post:
        | {
            input: { param: { userConsentId: string } } & { json: UserConsentRequest }
            output: UserConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userConsentId: string } } & { json: UserConsentRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { userConsentId: string } } & { json: UserConsentRequest }
            output: UserConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userConsentId: string } } & { json: UserConsentRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { userConsentId: string } }
            output: UserConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userConsentId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $delete:
        | {
            input: { param: { userConsentId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userConsentId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
      $put:
        | {
            input: { param: { userConsentId: string } } & { json: UserConsentRequest }
            output: UserConsentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userConsentId: string } } & { json: UserConsentRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/family': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: FamilyRequest
            }
            output: FamilyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: FamilyRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: FamilyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/user/family/pending': {
      $get:
        | {
            input: { query: { parentEmail?: string | undefined } }
            output: PendingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { parentEmail?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/family/request': {
      $post:
        | { input: { json: FamilyEmailRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: FamilyEmailRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/user/family/:familyId': {
      $put:
        | {
            input: { param: { familyId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: FamilyRequest }
            output: FamilyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { familyId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: FamilyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { familyId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: FamilyRequest }
            output: FamilyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { familyId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: FamilyRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { familyId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: FamilyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { familyId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/user/family/:familyId/:userId': {
      $delete:
        | {
            input: { param: { familyId: string; userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { familyId: string; userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/forgot-password': {
      $post:
        | {
            input: { json: ForgotPasswordRequest }
            output: ForgotPasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ForgotPasswordRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/import': {
      $post:
        | { input: { json: ImportRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: ImportRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/user/recent-login': {
      $get:
        | {
            input: {
              query: {
                userId?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: RecentLoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                offset?: string | undefined
                limit?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/refresh-token/import': {
      $post:
        | {
            input: { json: RefreshTokenImportRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: RefreshTokenImportRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/registration': {
      $post:
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: RegistrationRequest
            }
            output: RegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: RegistrationRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/registration/:userId': {
      $patch:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationRequest }
            output: RegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationRequest }
            output: RegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationRequest }
            output: RegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/registration/:userId/:applicationId': {
      $delete:
        | {
            input: { param: { userId: string; applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationDeleteRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: string; applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: RegistrationDeleteRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { userId: string; applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: RegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; applicationId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/search': {
      $get:
        | {
            input: { query: { ids?: string | undefined } }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SearchRequest }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SearchRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/user/two-factor/recovery-code/:userId': {
      $post:
        | {
            input: { param: { userId: string } }
            output: TwoFactorRecoveryCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { userId: string } }
            output: TwoFactorRecoveryCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/two-factor/:userId': {
      $delete:
        | {
            input: { param: { userId: string } } & {
              query: { methodId?: string | undefined; code?: string | undefined }
            } & { json: TwoFactorDisableRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { methodId?: string | undefined; code?: string | undefined }
            } & { json: TwoFactorDisableRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { userId: string } } & { json: TwoFactorRequest }
            output: TwoFactorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: TwoFactorRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { userId: string } } & { json: TwoFactorUpdateRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: TwoFactorUpdateRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/verify-email': {
      $put:
        | {
            input: {
              query: {
                applicationId?: string | undefined
                email?: string | undefined
                sendVerifyEmail?: string | undefined
              }
            }
            output: VerifyEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                applicationId?: string | undefined
                email?: string | undefined
                sendVerifyEmail?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: VerifyEmailRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: VerifyEmailRequest }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/user/verify-registration': {
      $put:
        | {
            input: {
              query: {
                email?: string | undefined
                applicationId?: string | undefined
                sendVerifyPasswordEmail?: string | undefined
              }
            }
            output: VerifyRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: string | undefined
                applicationId?: string | undefined
                sendVerifyPasswordEmail?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: VerifyRegistrationRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: VerifyRegistrationRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/user/:userId': {
      $post:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserRequest }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { userId: string } } & {
              query: { hardDelete?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserDeleteSingleRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { hardDelete?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & {
              json: UserDeleteSingleRequest
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserRequest }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            } & { json: UserRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { userId: string } } & {
              query: { reactivate?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & { json: UserRequest }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { reactivate?: string | undefined }
            } & { header: { 'X-FusionAuth-TenantId'?: string | undefined } } & { json: UserRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              header: { 'X-FusionAuth-TenantId'?: string | undefined }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn': {
      $delete:
        | {
            input: { query: { userId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { query: { userId?: string | undefined } }
            output: WebAuthnCredentialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn/assert': {
      $post:
        | {
            input: { json: WebAuthnLoginRequest }
            output: WebAuthnAssertResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebAuthnLoginRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn/import': {
      $post:
        | {
            input: { json: WebAuthnCredentialImportRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: WebAuthnCredentialImportRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn/login': {
      $post:
        | {
            input: { json: WebAuthnLoginRequest }
            output: LoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebAuthnLoginRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn/register/complete': {
      $post:
        | {
            input: { json: WebAuthnRegisterCompleteRequest }
            output: WebAuthnRegisterCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebAuthnRegisterCompleteRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn/register/start': {
      $post:
        | {
            input: { json: WebAuthnRegisterStartRequest }
            output: WebAuthnRegisterStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebAuthnRegisterStartRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn/start': {
      $post:
        | {
            input: { json: WebAuthnStartRequest }
            output: WebAuthnStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebAuthnStartRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webauthn/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { param: { id: string } }
            output: WebAuthnCredentialResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Errors; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/webhook': {
      $post:
        | {
            input: { json: WebhookRequest }
            output: WebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: WebhookRequest }; output: Errors; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: WebhookResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/webhook/search': {
      $post:
        | {
            input: { json: WebhookSearchRequest }
            output: WebhookSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhookSearchRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                description?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
                tenantId?: string | undefined
                url?: string | undefined
              }
            }
            output: WebhookSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                description?: string | undefined
                numberOfResults?: string | undefined
                orderBy?: string | undefined
                startRow?: string | undefined
                tenantId?: string | undefined
                url?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/webhook/:webhookId': {
      $post:
        | {
            input: { param: { webhookId: string } } & { json: WebhookRequest }
            output: WebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { webhookId: string } }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { webhookId: string } } & { json: WebhookRequest }
            output: WebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { webhookId: string } }
            output: WebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { webhookId: string } } & { json: WebhookRequest }
            output: WebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & { json: WebhookRequest }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/device/approve': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                user_code?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                user_code?: string | undefined
              }
            }
            output: DeviceApprovalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                user_code?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                user_code?: string | undefined
              }
            }
            output: Errors
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/device/user-code': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/oauth2/device/validate': {
      $get:
        | {
            input: { query: { user_code?: string | undefined; client_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { user_code?: string | undefined; client_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/oauth2/device_authorize': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                scope?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                scope?: string | undefined
              }
            }
            output: DeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                scope?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                scope?: string | undefined
              }
            }
            output: OAuthError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/introspect': {
      $post:
        | {
            input: { json: { token?: string | undefined } } & {
              form: { token?: string | undefined }
            }
            output: IntrospectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: string | undefined } } & {
              form: { token?: string | undefined }
            }
            output: OAuthError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/token': {
      $post:
        | {
            input: {
              json: {
                username?: string | undefined
                password?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                grant_type?: string | undefined
                scope?: string | undefined
                user_code?: string | undefined
              }
            } & {
              form: {
                username?: string | undefined
                password?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                grant_type?: string | undefined
                scope?: string | undefined
                user_code?: string | undefined
              }
            }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                username?: string | undefined
                password?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                grant_type?: string | undefined
                scope?: string | undefined
                user_code?: string | undefined
              }
            } & {
              form: {
                username?: string | undefined
                password?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                grant_type?: string | undefined
                scope?: string | undefined
                user_code?: string | undefined
              }
            }
            output: OAuthError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/userinfo': {
      $get:
        | { input: {}; output: UserinfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: OAuthError; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
