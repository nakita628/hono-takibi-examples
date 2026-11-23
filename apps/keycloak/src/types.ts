type BruteForceStrategy = 'LINEAR' | 'MULTIPLE'
type Composites = {
  realm?: string[] | undefined
  client?: { [x: string]: string[] } | undefined
  application?: { [x: string]: string[] } | undefined
}
type RoleRepresentation = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  scopeParamRequired?: boolean | undefined
  composite?: boolean | undefined
  composites?: Composites | undefined
  clientRole?: boolean | undefined
  containerId?: string | undefined
  attributes?: { [x: string]: string[] } | undefined
}
type RolesRepresentation = {
  realm?: RoleRepresentation[] | undefined
  client?: { [x: string]: RoleRepresentation[] } | undefined
  application?: { [x: string]: RoleRepresentation[] } | undefined
}
type GroupRepresentation = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  path?: string | undefined
  parentId?: string | undefined
  subGroupCount?: bigint | undefined
  subGroups?: GroupRepresentation[] | undefined
  attributes?: { [x: string]: string[] } | undefined
  realmRoles?: string[] | undefined
  clientRoles?: { [x: string]: string[] } | undefined
  access?: { [x: string]: boolean } | undefined
}
type ProtocolMapperRepresentation = {
  id?: string | undefined
  name?: string | undefined
  protocol?: string | undefined
  protocolMapper?: string | undefined
  consentRequired?: boolean | undefined
  consentText?: string | undefined
  config?: { [x: string]: string } | undefined
}
type PolicyEnforcementMode = 'ENFORCING' | 'PERMISSIVE' | 'DISABLED'
type Logic = 'POSITIVE' | 'NEGATIVE'
type DecisionStrategy = 'AFFIRMATIVE' | 'UNANIMOUS' | 'CONSENSUS'
type PolicyRepresentation = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  type?: string | undefined
  policies?: string[] | undefined
  resources?: string[] | undefined
  scopes?: string[] | undefined
  logic?: Logic | undefined
  decisionStrategy?: DecisionStrategy | undefined
  owner?: string | undefined
  resourceType?: string | undefined
  resourcesData?: ResourceRepresentation[] | undefined
  scopesData?: ScopeRepresentation[] | undefined
  config?: { [x: string]: string } | undefined
}
type ScopeRepresentation = {
  id?: string | undefined
  name?: string | undefined
  iconUri?: string | undefined
  policies?: PolicyRepresentation[] | undefined
  resources?: ResourceRepresentation[] | undefined
  displayName?: string | undefined
}
type ResourceRepresentation = {
  _id?: string | undefined
  name?: string | undefined
  uris?: string[] | undefined
  type?: string | undefined
  scopes?: ScopeRepresentation[] | undefined
  icon_uri?: string | undefined
  owner?: { id?: string | undefined; name?: string | undefined } | undefined
  ownerManagedAccess?: boolean | undefined
  displayName?: string | undefined
  attributes?: { [x: string]: string[] } | undefined
  uri?: string | undefined
  scopesUma?: ScopeRepresentation[] | undefined
}
type ResourceType = {
  type?: string | undefined
  scopes?: string[] | undefined
  scopeAliases?: { [x: string]: string[] } | undefined
  groupType?: string | undefined
}
type AuthorizationSchema = { resourceTypes?: { [x: string]: ResourceType } | undefined }
type ResourceServerRepresentation = {
  id?: string | undefined
  clientId?: string | undefined
  name?: string | undefined
  allowRemoteResourceManagement?: boolean | undefined
  policyEnforcementMode?: PolicyEnforcementMode | undefined
  resources?: ResourceRepresentation[] | undefined
  policies?: PolicyRepresentation[] | undefined
  scopes?: ScopeRepresentation[] | undefined
  decisionStrategy?: DecisionStrategy | undefined
  authorizationSchema?: AuthorizationSchema | undefined
}
type ClientRepresentation = {
  id?: string | undefined
  clientId?: string | undefined
  name?: string | undefined
  description?: string | undefined
  type?: string | undefined
  rootUrl?: string | undefined
  adminUrl?: string | undefined
  baseUrl?: string | undefined
  surrogateAuthRequired?: boolean | undefined
  enabled?: boolean | undefined
  alwaysDisplayInConsole?: boolean | undefined
  clientAuthenticatorType?: string | undefined
  secret?: string | undefined
  registrationAccessToken?: string | undefined
  defaultRoles?: string[] | undefined
  redirectUris?: string[] | undefined
  webOrigins?: string[] | undefined
  notBefore?: number | undefined
  bearerOnly?: boolean | undefined
  consentRequired?: boolean | undefined
  standardFlowEnabled?: boolean | undefined
  implicitFlowEnabled?: boolean | undefined
  directAccessGrantsEnabled?: boolean | undefined
  serviceAccountsEnabled?: boolean | undefined
  authorizationServicesEnabled?: boolean | undefined
  directGrantsOnly?: boolean | undefined
  publicClient?: boolean | undefined
  frontchannelLogout?: boolean | undefined
  protocol?: string | undefined
  attributes?: { [x: string]: string } | undefined
  authenticationFlowBindingOverrides?: { [x: string]: string } | undefined
  fullScopeAllowed?: boolean | undefined
  nodeReRegistrationTimeout?: number | undefined
  registeredNodes?: { [x: string]: number } | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
  clientTemplate?: string | undefined
  useTemplateConfig?: boolean | undefined
  useTemplateScope?: boolean | undefined
  useTemplateMappers?: boolean | undefined
  defaultClientScopes?: string[] | undefined
  optionalClientScopes?: string[] | undefined
  authorizationSettings?: ResourceServerRepresentation | undefined
  access?: { [x: string]: boolean } | undefined
  origin?: string | undefined
}
type ClientPolicyExecutorRepresentation = {
  executor?: string | undefined
  configuration?:
    | { value?: { [x: string]: unknown } | undefined; empty?: boolean | undefined }
    | undefined
}
type ClientProfileRepresentation = {
  name?: string | undefined
  description?: string | undefined
  executors?: ClientPolicyExecutorRepresentation[] | undefined
}
type ClientProfilesRepresentation = {
  profiles?: ClientProfileRepresentation[] | undefined
  globalProfiles?: ClientProfileRepresentation[] | undefined
}
type ClientPolicyConditionRepresentation = {
  condition?: string | undefined
  configuration?:
    | { value?: { [x: string]: unknown } | undefined; empty?: boolean | undefined }
    | undefined
}
type ClientPolicyRepresentation = {
  name?: string | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  mode?: string | undefined
  conditions?: ClientPolicyConditionRepresentation[] | undefined
  profiles?: string[] | undefined
}
type ClientPoliciesRepresentation = {
  policies?: ClientPolicyRepresentation[] | undefined
  globalPolicies?: ClientPolicyRepresentation[] | undefined
}
type UserProfileAttributeMetadata = {
  name?: string | undefined
  displayName?: string | undefined
  required?: boolean | undefined
  readOnly?: boolean | undefined
  annotations?: { [x: string]: { [x: string]: unknown } } | undefined
  validators?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
  group?: string | undefined
  multivalued?: boolean | undefined
  defaultValue?: string | undefined
}
type UserProfileAttributeGroupMetadata = {
  name?: string | undefined
  displayHeader?: string | undefined
  displayDescription?: string | undefined
  annotations?: { [x: string]: { [x: string]: unknown } } | undefined
}
type UserProfileMetadata = {
  attributes?: UserProfileAttributeMetadata[] | undefined
  groups?: UserProfileAttributeGroupMetadata[] | undefined
}
type CredentialRepresentation = {
  id?: string | undefined
  type?: string | undefined
  userLabel?: string | undefined
  createdDate?: bigint | undefined
  secretData?: string | undefined
  credentialData?: string | undefined
  priority?: number | undefined
  value?: string | undefined
  temporary?: boolean | undefined
  device?: string | undefined
  hashedSaltedValue?: string | undefined
  salt?: string | undefined
  hashIterations?: number | undefined
  counter?: number | undefined
  algorithm?: string | undefined
  digits?: number | undefined
  period?: number | undefined
  config?: {} | undefined
  federationLink?: string | undefined
}
type FederatedIdentityRepresentation = {
  identityProvider?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
}
type UserConsentRepresentation = {
  clientId?: string | undefined
  grantedClientScopes?: string[] | undefined
  createdDate?: bigint | undefined
  lastUpdatedDate?: bigint | undefined
  grantedRealmRoles?: string[] | undefined
}
type UserVerifiableCredentialRepresentation = {
  credentialScopeName?: string | undefined
  credentialConfigurationId?: string | undefined
  revision?: string | undefined
  createdDate?: bigint | undefined
  updatedDate?: bigint | undefined
  userAttributes?: { [x: string]: string[] } | undefined
}
type IssuedVerifiableCredentialRepresentation = {
  id?: string | undefined
  userId?: string | undefined
  credentialType?: string | undefined
  issuedAt?: bigint | undefined
  expiresAt?: bigint | undefined
  clientId?: string | undefined
  clientName?: string | undefined
  clientBaseUrl?: string | undefined
  revision?: string | undefined
}
type SocialLinkRepresentation = {
  socialProvider?: string | undefined
  socialUserId?: string | undefined
  socialUsername?: string | undefined
}
type UserRepresentation = {
  id?: string | undefined
  username?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  attributes?: { [x: string]: string[] } | undefined
  userProfileMetadata?: UserProfileMetadata | undefined
  enabled?: boolean | undefined
  self?: string | undefined
  origin?: string | undefined
  createdTimestamp?: bigint | undefined
  totp?: boolean | undefined
  federationLink?: string | undefined
  serviceAccountClientId?: string | undefined
  credentials?: CredentialRepresentation[] | undefined
  disableableCredentialTypes?: string[] | undefined
  requiredActions?: string[] | undefined
  federatedIdentities?: FederatedIdentityRepresentation[] | undefined
  realmRoles?: string[] | undefined
  clientRoles?: { [x: string]: string[] } | undefined
  clientConsents?: UserConsentRepresentation[] | undefined
  notBefore?: number | undefined
  verifiableCredentials?: UserVerifiableCredentialRepresentation[] | undefined
  issuedVerifiableCredentials?: IssuedVerifiableCredentialRepresentation[] | undefined
  applicationRoles?: { [x: string]: string[] } | undefined
  socialLinks?: SocialLinkRepresentation[] | undefined
  groups?: string[] | undefined
  access?: { [x: string]: boolean } | undefined
}
type ScopeMappingRepresentation = {
  self?: string | undefined
  client?: string | undefined
  clientTemplate?: string | undefined
  clientScope?: string | undefined
  roles?: string[] | undefined
}
type ClientScopeRepresentation = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  protocol?: string | undefined
  attributes?: { [x: string]: string } | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
}
type UserFederationProviderRepresentation = {
  id?: string | undefined
  displayName?: string | undefined
  providerName?: string | undefined
  config?: { [x: string]: string } | undefined
  priority?: number | undefined
  fullSyncPeriod?: number | undefined
  changedSyncPeriod?: number | undefined
  lastSync?: number | undefined
}
type UserFederationMapperRepresentation = {
  id?: string | undefined
  name?: string | undefined
  federationProviderDisplayName?: string | undefined
  federationMapperType?: string | undefined
  config?: { [x: string]: string } | undefined
}
type OrganizationIdentityProviderLinkRepresentation = {
  organizationId?: string | undefined
  autoMembership?: boolean | undefined
  membershipType?: string | undefined
}
type IdentityProviderRepresentation = {
  alias?: string | undefined
  displayName?: string | undefined
  internalId?: string | undefined
  providerId?: string | undefined
  enabled?: boolean | undefined
  updateProfileFirstLoginMode?: string | undefined
  trustEmail?: boolean | undefined
  storeToken?: boolean | undefined
  addReadTokenRoleOnCreate?: boolean | undefined
  authenticateByDefault?: boolean | undefined
  linkOnly?: boolean | undefined
  hideOnLogin?: boolean | undefined
  firstBrokerLoginFlowAlias?: string | undefined
  postBrokerLoginFlowAlias?: string | undefined
  organizationLinks?: OrganizationIdentityProviderLinkRepresentation[] | undefined
  config?: { [x: string]: string } | undefined
  types?: string[] | undefined
  updateProfileFirstLogin?: boolean | undefined
  organizationId?: string | undefined
}
type IdentityProviderMapperRepresentation = {
  id?: string | undefined
  name?: string | undefined
  identityProviderAlias?: string | undefined
  identityProviderMapper?: string | undefined
  config?: { [x: string]: string } | undefined
}
type MultivaluedHashMapStringString = { [x: string]: string[] }
type ComponentExportRepresentation = {
  id?: string | undefined
  name?: string | undefined
  providerId?: string | undefined
  subType?: string | undefined
  subComponents?: MultivaluedHashMapStringComponentExportRepresentation | undefined
  config?: MultivaluedHashMapStringString | undefined
}
type MultivaluedHashMapStringComponentExportRepresentation = {
  [x: string]: ComponentExportRepresentation[]
}
type AuthenticationExecutionExportRepresentation = {
  authenticatorConfig?: string | undefined
  authenticator?: string | undefined
  authenticatorFlow?: boolean | undefined
  requirement?: string | undefined
  priority?: number | undefined
  autheticatorFlow?: boolean | undefined
  flowAlias?: string | undefined
  userSetupAllowed?: boolean | undefined
}
type AuthenticationFlowRepresentation = {
  id?: string | undefined
  alias?: string | undefined
  description?: string | undefined
  providerId?: string | undefined
  topLevel?: boolean | undefined
  builtIn?: boolean | undefined
  authenticationExecutions?: AuthenticationExecutionExportRepresentation[] | undefined
}
type AuthenticatorConfigRepresentation = {
  id?: string | undefined
  alias?: string | undefined
  config?: { [x: string]: string } | undefined
}
type RequiredActionProviderRepresentation = {
  alias?: string | undefined
  name?: string | undefined
  providerId?: string | undefined
  enabled?: boolean | undefined
  defaultAction?: boolean | undefined
  priority?: number | undefined
  config?: { [x: string]: string } | undefined
}
type OrganizationDomainRepresentation = {
  name?: string | undefined
  verified?: boolean | undefined
  identityProviderAlias?: string | undefined
  autoRedirect?: boolean | undefined
}
type MembershipType = 'UNMANAGED' | 'MANAGED'
type MemberRepresentation = {
  id?: string | undefined
  username?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  attributes?: { [x: string]: string[] } | undefined
  userProfileMetadata?: UserProfileMetadata | undefined
  enabled?: boolean | undefined
  self?: string | undefined
  origin?: string | undefined
  createdTimestamp?: bigint | undefined
  totp?: boolean | undefined
  federationLink?: string | undefined
  serviceAccountClientId?: string | undefined
  credentials?: CredentialRepresentation[] | undefined
  disableableCredentialTypes?: string[] | undefined
  requiredActions?: string[] | undefined
  federatedIdentities?: FederatedIdentityRepresentation[] | undefined
  realmRoles?: string[] | undefined
  clientRoles?: { [x: string]: string[] } | undefined
  clientConsents?: UserConsentRepresentation[] | undefined
  notBefore?: number | undefined
  verifiableCredentials?: UserVerifiableCredentialRepresentation[] | undefined
  issuedVerifiableCredentials?: IssuedVerifiableCredentialRepresentation[] | undefined
  applicationRoles?: { [x: string]: string[] } | undefined
  socialLinks?: SocialLinkRepresentation[] | undefined
  groups?: string[] | undefined
  access?: { [x: string]: boolean } | undefined
  membershipType?: MembershipType | undefined
}
type OrganizationRepresentation = {
  id?: string | undefined
  name?: string | undefined
  alias?: string | undefined
  enabled?: boolean | undefined
  description?: string | undefined
  redirectUrl?: string | undefined
  attributes?: { [x: string]: string[] } | undefined
  domains?: OrganizationDomainRepresentation[] | undefined
  members?: MemberRepresentation[] | undefined
  identityProviders?: IdentityProviderRepresentation[] | undefined
  groups?: GroupRepresentation[] | undefined
}
type ApplicationRepresentation = {
  id?: string | undefined
  clientId?: string | undefined
  description?: string | undefined
  type?: string | undefined
  rootUrl?: string | undefined
  adminUrl?: string | undefined
  baseUrl?: string | undefined
  surrogateAuthRequired?: boolean | undefined
  enabled?: boolean | undefined
  alwaysDisplayInConsole?: boolean | undefined
  clientAuthenticatorType?: string | undefined
  secret?: string | undefined
  registrationAccessToken?: string | undefined
  defaultRoles?: string[] | undefined
  redirectUris?: string[] | undefined
  webOrigins?: string[] | undefined
  notBefore?: number | undefined
  bearerOnly?: boolean | undefined
  consentRequired?: boolean | undefined
  standardFlowEnabled?: boolean | undefined
  implicitFlowEnabled?: boolean | undefined
  directAccessGrantsEnabled?: boolean | undefined
  serviceAccountsEnabled?: boolean | undefined
  authorizationServicesEnabled?: boolean | undefined
  directGrantsOnly?: boolean | undefined
  publicClient?: boolean | undefined
  frontchannelLogout?: boolean | undefined
  protocol?: string | undefined
  attributes?: { [x: string]: string } | undefined
  authenticationFlowBindingOverrides?: { [x: string]: string } | undefined
  fullScopeAllowed?: boolean | undefined
  nodeReRegistrationTimeout?: number | undefined
  registeredNodes?: { [x: string]: number } | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
  clientTemplate?: string | undefined
  useTemplateConfig?: boolean | undefined
  useTemplateScope?: boolean | undefined
  useTemplateMappers?: boolean | undefined
  defaultClientScopes?: string[] | undefined
  optionalClientScopes?: string[] | undefined
  authorizationSettings?: ResourceServerRepresentation | undefined
  access?: { [x: string]: boolean } | undefined
  origin?: string | undefined
  name?: string | undefined
  claims?:
    | {
        name?: boolean | undefined
        username?: boolean | undefined
        profile?: boolean | undefined
        picture?: boolean | undefined
        website?: boolean | undefined
        email?: boolean | undefined
        gender?: boolean | undefined
        locale?: boolean | undefined
        address?: boolean | undefined
        phone?: boolean | undefined
      }
    | undefined
}
type OAuthClientRepresentation = {
  id?: string | undefined
  clientId?: string | undefined
  description?: string | undefined
  type?: string | undefined
  rootUrl?: string | undefined
  adminUrl?: string | undefined
  baseUrl?: string | undefined
  surrogateAuthRequired?: boolean | undefined
  enabled?: boolean | undefined
  alwaysDisplayInConsole?: boolean | undefined
  clientAuthenticatorType?: string | undefined
  secret?: string | undefined
  registrationAccessToken?: string | undefined
  defaultRoles?: string[] | undefined
  redirectUris?: string[] | undefined
  webOrigins?: string[] | undefined
  notBefore?: number | undefined
  bearerOnly?: boolean | undefined
  consentRequired?: boolean | undefined
  standardFlowEnabled?: boolean | undefined
  implicitFlowEnabled?: boolean | undefined
  directAccessGrantsEnabled?: boolean | undefined
  serviceAccountsEnabled?: boolean | undefined
  authorizationServicesEnabled?: boolean | undefined
  directGrantsOnly?: boolean | undefined
  publicClient?: boolean | undefined
  frontchannelLogout?: boolean | undefined
  protocol?: string | undefined
  attributes?: { [x: string]: string } | undefined
  authenticationFlowBindingOverrides?: { [x: string]: string } | undefined
  fullScopeAllowed?: boolean | undefined
  nodeReRegistrationTimeout?: number | undefined
  registeredNodes?: { [x: string]: number } | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
  clientTemplate?: string | undefined
  useTemplateConfig?: boolean | undefined
  useTemplateScope?: boolean | undefined
  useTemplateMappers?: boolean | undefined
  defaultClientScopes?: string[] | undefined
  optionalClientScopes?: string[] | undefined
  authorizationSettings?: ResourceServerRepresentation | undefined
  access?: { [x: string]: boolean } | undefined
  origin?: string | undefined
  name?: string | undefined
  claims?:
    | {
        name?: boolean | undefined
        username?: boolean | undefined
        profile?: boolean | undefined
        picture?: boolean | undefined
        website?: boolean | undefined
        email?: boolean | undefined
        gender?: boolean | undefined
        locale?: boolean | undefined
        address?: boolean | undefined
        phone?: boolean | undefined
      }
    | undefined
}
type ClientTemplateRepresentation = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  protocol?: string | undefined
  fullScopeAllowed?: boolean | undefined
  bearerOnly?: boolean | undefined
  consentRequired?: boolean | undefined
  standardFlowEnabled?: boolean | undefined
  implicitFlowEnabled?: boolean | undefined
  directAccessGrantsEnabled?: boolean | undefined
  serviceAccountsEnabled?: boolean | undefined
  publicClient?: boolean | undefined
  frontchannelLogout?: boolean | undefined
  attributes?: { [x: string]: string } | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
}
type RealmRepresentation = {
  id?: string | undefined
  realm?: string | undefined
  displayName?: string | undefined
  displayNameHtml?: string | undefined
  notBefore?: number | undefined
  defaultSignatureAlgorithm?: string | undefined
  revokeRefreshToken?: boolean | undefined
  refreshTokenMaxReuse?: number | undefined
  accessTokenLifespan?: number | undefined
  accessTokenLifespanForImplicitFlow?: number | undefined
  ssoSessionIdleTimeout?: number | undefined
  ssoSessionMaxLifespan?: number | undefined
  ssoSessionIdleTimeoutRememberMe?: number | undefined
  ssoSessionMaxLifespanRememberMe?: number | undefined
  offlineSessionIdleTimeout?: number | undefined
  offlineSessionMaxLifespanEnabled?: boolean | undefined
  offlineSessionMaxLifespan?: number | undefined
  clientSessionIdleTimeout?: number | undefined
  clientSessionMaxLifespan?: number | undefined
  clientOfflineSessionIdleTimeout?: number | undefined
  clientOfflineSessionMaxLifespan?: number | undefined
  accessCodeLifespan?: number | undefined
  accessCodeLifespanUserAction?: number | undefined
  accessCodeLifespanLogin?: number | undefined
  actionTokenGeneratedByAdminLifespan?: number | undefined
  actionTokenGeneratedByUserLifespan?: number | undefined
  oauth2DeviceCodeLifespan?: number | undefined
  oauth2DevicePollingInterval?: number | undefined
  enabled?: boolean | undefined
  sslRequired?: string | undefined
  passwordCredentialGrantAllowed?: boolean | undefined
  registrationAllowed?: boolean | undefined
  registrationEmailAsUsername?: boolean | undefined
  rememberMe?: boolean | undefined
  verifyEmail?: boolean | undefined
  loginWithEmailAllowed?: boolean | undefined
  duplicateEmailsAllowed?: boolean | undefined
  resetPasswordAllowed?: boolean | undefined
  editUsernameAllowed?: boolean | undefined
  userCacheEnabled?: boolean | undefined
  realmCacheEnabled?: boolean | undefined
  bruteForceProtected?: boolean | undefined
  permanentLockout?: boolean | undefined
  maxTemporaryLockouts?: number | undefined
  bruteForceStrategy?: BruteForceStrategy | undefined
  maxFailureWaitSeconds?: number | undefined
  minimumQuickLoginWaitSeconds?: number | undefined
  waitIncrementSeconds?: number | undefined
  quickLoginCheckMilliSeconds?: bigint | undefined
  maxDeltaTimeSeconds?: number | undefined
  failureFactor?: number | undefined
  maxSecondaryAuthFailures?: number | undefined
  privateKey?: string | undefined
  publicKey?: string | undefined
  certificate?: string | undefined
  codeSecret?: string | undefined
  roles?: RolesRepresentation | undefined
  groups?: GroupRepresentation[] | undefined
  defaultRoles?: string[] | undefined
  defaultRole?: RoleRepresentation | undefined
  adminPermissionsClient?: ClientRepresentation | undefined
  defaultGroups?: string[] | undefined
  requiredCredentials?: string[] | undefined
  passwordPolicy?: string | undefined
  otpPolicyType?: string | undefined
  otpPolicyAlgorithm?: string | undefined
  otpPolicyInitialCounter?: number | undefined
  otpPolicyDigits?: number | undefined
  otpPolicyLookAheadWindow?: number | undefined
  otpPolicyPeriod?: number | undefined
  otpPolicyCodeReusable?: boolean | undefined
  otpSupportedApplications?: string[] | undefined
  localizationTexts?: { [x: string]: { [x: string]: string } } | undefined
  webAuthnPolicyRpEntityName?: string | undefined
  webAuthnPolicySignatureAlgorithms?: string[] | undefined
  webAuthnPolicyRpId?: string | undefined
  webAuthnPolicyAttestationConveyancePreference?: string | undefined
  webAuthnPolicyAuthenticatorAttachment?: string | undefined
  webAuthnPolicyRequireResidentKey?: string | undefined
  webAuthnPolicyResidentKey?: string | undefined
  webAuthnPolicyUserVerificationRequirement?: string | undefined
  webAuthnPolicyCreateTimeout?: number | undefined
  webAuthnPolicyAvoidSameAuthenticatorRegister?: boolean | undefined
  webAuthnPolicyAcceptableAaguids?: string[] | undefined
  webAuthnPolicyExtraOrigins?: string[] | undefined
  webAuthnPolicyPasswordlessRpEntityName?: string | undefined
  webAuthnPolicyPasswordlessSignatureAlgorithms?: string[] | undefined
  webAuthnPolicyPasswordlessRpId?: string | undefined
  webAuthnPolicyPasswordlessAttestationConveyancePreference?: string | undefined
  webAuthnPolicyPasswordlessAuthenticatorAttachment?: string | undefined
  webAuthnPolicyPasswordlessRequireResidentKey?: string | undefined
  webAuthnPolicyPasswordlessResidentKey?: string | undefined
  webAuthnPolicyPasswordlessUserVerificationRequirement?: string | undefined
  webAuthnPolicyPasswordlessCreateTimeout?: number | undefined
  webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister?: boolean | undefined
  webAuthnPolicyPasswordlessAcceptableAaguids?: string[] | undefined
  webAuthnPolicyPasswordlessExtraOrigins?: string[] | undefined
  webAuthnPolicyPasswordlessPasskeysEnabled?: boolean | undefined
  webAuthnPolicyPasswordlessMediation?: string | undefined
  clientProfiles?: ClientProfilesRepresentation | undefined
  clientPolicies?: ClientPoliciesRepresentation | undefined
  users?: UserRepresentation[] | undefined
  federatedUsers?: UserRepresentation[] | undefined
  scopeMappings?: ScopeMappingRepresentation[] | undefined
  clientScopeMappings?: { [x: string]: ScopeMappingRepresentation[] } | undefined
  clients?: ClientRepresentation[] | undefined
  clientScopes?: ClientScopeRepresentation[] | undefined
  defaultDefaultClientScopes?: string[] | undefined
  defaultOptionalClientScopes?: string[] | undefined
  browserSecurityHeaders?: { [x: string]: string } | undefined
  smtpServer?: { [x: string]: string } | undefined
  userFederationProviders?: UserFederationProviderRepresentation[] | undefined
  userFederationMappers?: UserFederationMapperRepresentation[] | undefined
  loginTheme?: string | undefined
  accountTheme?: string | undefined
  adminTheme?: string | undefined
  emailTheme?: string | undefined
  eventsEnabled?: boolean | undefined
  eventsExpiration?: bigint | undefined
  eventsListeners?: string[] | undefined
  enabledEventTypes?: string[] | undefined
  adminEventsEnabled?: boolean | undefined
  adminEventsDetailsEnabled?: boolean | undefined
  identityProviders?: IdentityProviderRepresentation[] | undefined
  identityProviderMappers?: IdentityProviderMapperRepresentation[] | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
  components?: MultivaluedHashMapStringComponentExportRepresentation | undefined
  internationalizationEnabled?: boolean | undefined
  supportedLocales?: string[] | undefined
  defaultLocale?: string | undefined
  authenticationFlows?: AuthenticationFlowRepresentation[] | undefined
  authenticatorConfig?: AuthenticatorConfigRepresentation[] | undefined
  requiredActions?: RequiredActionProviderRepresentation[] | undefined
  browserFlow?: string | undefined
  registrationFlow?: string | undefined
  directGrantFlow?: string | undefined
  resetCredentialsFlow?: string | undefined
  clientAuthenticationFlow?: string | undefined
  dockerAuthenticationFlow?: string | undefined
  firstBrokerLoginFlow?: string | undefined
  attributes?: { [x: string]: string } | undefined
  keycloakVersion?: string | undefined
  userManagedAccessAllowed?: boolean | undefined
  organizationsEnabled?: boolean | undefined
  organizations?: OrganizationRepresentation[] | undefined
  verifiableCredentialsEnabled?: boolean | undefined
  adminPermissionsEnabled?: boolean | undefined
  social?: boolean | undefined
  updateProfileOnInitialSocialLogin?: boolean | undefined
  socialProviders?: { [x: string]: string } | undefined
  applicationScopeMappings?: { [x: string]: ScopeMappingRepresentation[] } | undefined
  applications?: ApplicationRepresentation[] | undefined
  oauthClients?: OAuthClientRepresentation[] | undefined
  clientTemplates?: ClientTemplateRepresentation[] | undefined
  scimApiEnabled?: boolean | undefined
}
type AuthDetailsRepresentation = {
  realmId?: string | undefined
  clientId?: string | undefined
  userId?: string | undefined
  ipAddress?: string | undefined
}
type AdminEventRepresentation = {
  id?: string | undefined
  time?: bigint | undefined
  realmId?: string | undefined
  authDetails?: AuthDetailsRepresentation | undefined
  operationType?: string | undefined
  resourceType?: string | undefined
  resourcePath?: string | undefined
  representation?: string | undefined
  error?: string | undefined
  details?: { [x: string]: string } | undefined
}
type ConfigPropertyRepresentation = {
  name?: string | undefined
  label?: string | undefined
  helpText?: string | undefined
  type?: string | undefined
  defaultValue?: { [x: string]: unknown } | undefined
  options?: string[] | undefined
  secret?: boolean | undefined
  required?: boolean | undefined
  readOnly?: boolean | undefined
}
type AuthenticatorConfigInfoRepresentation = {
  name?: string | undefined
  providerId?: string | undefined
  helpText?: string | undefined
  properties?: ConfigPropertyRepresentation[] | undefined
}
type AuthenticationExecutionRepresentation = {
  authenticatorConfig?: string | undefined
  authenticator?: string | undefined
  authenticatorFlow?: boolean | undefined
  requirement?: string | undefined
  priority?: number | undefined
  autheticatorFlow?: boolean | undefined
  id?: string | undefined
  flowId?: string | undefined
  parentFlow?: string | undefined
}
type AuthenticationExecutionInfoRepresentation = {
  id?: string | undefined
  requirement?: string | undefined
  displayName?: string | undefined
  alias?: string | undefined
  description?: string | undefined
  requirementChoices?: string[] | undefined
  configurable?: boolean | undefined
  authenticationFlow?: boolean | undefined
  providerId?: string | undefined
  authenticationConfig?: string | undefined
  flowId?: string | undefined
  level?: number | undefined
  index?: number | undefined
  priority?: number | undefined
}
type RequiredActionConfigRepresentation = { config?: { [x: string]: string } | undefined }
type RequiredActionConfigInfoRepresentation = {
  properties?: ConfigPropertyRepresentation[] | undefined
}
type ComponentTypeRepresentation = {
  id?: string | undefined
  helpText?: string | undefined
  properties?: ConfigPropertyRepresentation[] | undefined
  clientProperties?: ConfigPropertyRepresentation[] | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ClientMappingsRepresentation = {
  id?: string | undefined
  client?: string | undefined
  mappings?: RoleRepresentation[] | undefined
}
type MappingsRepresentation = {
  realmMappings?: RoleRepresentation[] | undefined
  clientMappings?: { [x: string]: ClientMappingsRepresentation } | undefined
}
type PropertyConfig = {
  applicable?: boolean | undefined
  value?: { [x: string]: unknown } | undefined
}
type ClientTypeRepresentation = {
  name?: string | undefined
  provider?: string | undefined
  parent?: string | undefined
  config?: { [x: string]: PropertyConfig } | undefined
}
type ClientTypesRepresentation = {
  'client-types'?: ClientTypeRepresentation[] | undefined
  'global-client-types'?: ClientTypeRepresentation[] | undefined
}
type ClientInitialAccessPresentation = {
  id?: string | undefined
  token?: string | undefined
  timestamp?: number | undefined
  expiration?: number | undefined
  count?: number | undefined
  remainingCount?: number | undefined
}
type ClientInitialAccessCreatePresentation = {
  expiration?: number | undefined
  count?: number | undefined
  webOrigins?: string[] | undefined
}
type AbstractPolicyRepresentation = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  type?: string | undefined
  policies?: string[] | undefined
  resources?: string[] | undefined
  scopes?: string[] | undefined
  logic?: Logic | undefined
  decisionStrategy?: DecisionStrategy | undefined
  owner?: string | undefined
  resourceType?: string | undefined
  resourcesData?: ResourceRepresentation[] | undefined
  scopesData?: ScopeRepresentation[] | undefined
}
type PolicyEvaluationRequest = {
  context?: { [x: string]: { [x: string]: string } } | undefined
  resources?: ResourceRepresentation[] | undefined
  resourceType?: string | undefined
  clientId?: string | undefined
  userId?: string | undefined
  roleIds?: string[] | undefined
  entitlements?: boolean | undefined
}
type DecisionEffect = 'PERMIT' | 'DENY'
type PolicyResultRepresentation = {
  policy?: PolicyRepresentation | undefined
  status?: DecisionEffect | undefined
  associatedPolicies?: PolicyResultRepresentation[] | undefined
  scopes?: string[] | undefined
  resourceType?: string | undefined
}
type EvaluationResultRepresentation = {
  resource?: ResourceRepresentation | undefined
  scopes?: ScopeRepresentation[] | undefined
  policies?: PolicyResultRepresentation[] | undefined
  status?: DecisionEffect | undefined
  allowedScopes?: ScopeRepresentation[] | undefined
  deniedScopes?: ScopeRepresentation[] | undefined
}
type Access = { roles?: string[] | undefined; verify_caller?: boolean | undefined }
type Permission = {
  rsid?: string | undefined
  rsname?: string | undefined
  scopes?: string[] | undefined
  claims?: { [x: string]: string[] } | undefined
}
type Authorization = { permissions?: Permission[] | undefined }
type Confirmation = {
  'x5t#S256'?: string | undefined
  jkt?: string | undefined
  'kc-jkt-type'?: string | undefined
}
type AuthorizationDetailsJSONRepresentation = {
  type?: string | undefined
  locations?: string[] | undefined
  actions?: string[] | undefined
  datatypes?: string[] | undefined
  identifier?: string | undefined
  privileges?: string[] | undefined
  customData?: { [x: string]: { [x: string]: unknown } } | undefined
}
type AccessToken = {
  jti?: string | undefined
  exp?: bigint | undefined
  nbf?: bigint | undefined
  iat?: bigint | undefined
  iss?: string | undefined
  sub?: string | undefined
  typ?: string | undefined
  azp?: string | undefined
  otherClaims?: { [x: string]: { [x: string]: unknown } } | undefined
  nonce?: string | undefined
  auth_time?: bigint | undefined
  sid?: string | undefined
  at_hash?: string | undefined
  c_hash?: string | undefined
  name?: string | undefined
  given_name?: string | undefined
  family_name?: string | undefined
  middle_name?: string | undefined
  nickname?: string | undefined
  preferred_username?: string | undefined
  profile?: string | undefined
  picture?: string | undefined
  website?: string | undefined
  email?: string | undefined
  email_verified?: boolean | undefined
  gender?: string | undefined
  birthdate?: string | undefined
  zoneinfo?: string | undefined
  locale?: string | undefined
  phone_number?: string | undefined
  phone_number_verified?: boolean | undefined
  updated_at?: bigint | undefined
  claims_locales?: string | undefined
  acr?: string | undefined
  s_hash?: string | undefined
  'trusted-certs'?: string[] | undefined
  'allowed-origins'?: string[] | undefined
  realm_access?: Access | undefined
  resource_access?: { [x: string]: Access } | undefined
  authorization?: Authorization | undefined
  cnf?: Confirmation | undefined
  scope?: string | undefined
  authorization_details?: AuthorizationDetailsJSONRepresentation[] | undefined
}
type PolicyEvaluationResponse = {
  results?: EvaluationResultRepresentation[] | undefined
  entitlements?: boolean | undefined
  status?: DecisionEffect | undefined
  rpt?: AccessToken | undefined
}
type PolicyProviderRepresentation = {
  type?: string | undefined
  name?: string | undefined
  group?: string | undefined
  description?: string | undefined
  code?: string | undefined
}
type CertificateRepresentation = {
  privateKey?: string | undefined
  publicKey?: string | undefined
  certificate?: string | undefined
  kid?: string | undefined
  jwks?: string | undefined
}
type KeyStoreConfig = {
  realmCertificate?: boolean | undefined
  storePassword?: string | undefined
  keyPassword?: string | undefined
  keyAlias?: string | undefined
  realmAlias?: string | undefined
  format?: string | undefined
  keySize?: number | undefined
  validity?: number | undefined
}
type IDToken = {
  jti?: string | undefined
  exp?: bigint | undefined
  nbf?: bigint | undefined
  iat?: bigint | undefined
  iss?: string | undefined
  sub?: string | undefined
  typ?: string | undefined
  azp?: string | undefined
  otherClaims?: { [x: string]: { [x: string]: unknown } } | undefined
  nonce?: string | undefined
  auth_time?: bigint | undefined
  sid?: string | undefined
  at_hash?: string | undefined
  c_hash?: string | undefined
  name?: string | undefined
  given_name?: string | undefined
  family_name?: string | undefined
  middle_name?: string | undefined
  nickname?: string | undefined
  preferred_username?: string | undefined
  profile?: string | undefined
  picture?: string | undefined
  website?: string | undefined
  email?: string | undefined
  email_verified?: boolean | undefined
  gender?: string | undefined
  birthdate?: string | undefined
  zoneinfo?: string | undefined
  locale?: string | undefined
  phone_number?: string | undefined
  phone_number_verified?: boolean | undefined
  updated_at?: bigint | undefined
  claims_locales?: string | undefined
  acr?: string | undefined
  s_hash?: string | undefined
}
type SamlExampleResponse = { samlResponse?: string | undefined }
type ProtocolMapperEvaluationRepresentation = {
  mapperId?: string | undefined
  mapperName?: string | undefined
  containerId?: string | undefined
  containerName?: string | undefined
  containerType?: string | undefined
  protocolMapper?: string | undefined
}
type ManagementPermissionReference = {
  enabled?: boolean | undefined
  resource?: string | undefined
  scopePermissions?: { [x: string]: string } | undefined
}
type UserSessionRepresentation = {
  id?: string | undefined
  username?: string | undefined
  userId?: string | undefined
  ipAddress?: string | undefined
  start?: bigint | undefined
  lastAccess?: bigint | undefined
  rememberMe?: boolean | undefined
  clients?: { [x: string]: string } | undefined
  transientUser?: boolean | undefined
}
type GlobalRequestResult = {
  successRequests?: string[] | undefined
  failedRequests?: string[] | undefined
}
type ComponentRepresentation = {
  id?: string | undefined
  name?: string | undefined
  providerId?: string | undefined
  providerType?: string | undefined
  parentId?: string | undefined
  subType?: string | undefined
  config?: MultivaluedHashMapStringString | undefined
}
type EventRepresentation = {
  id?: string | undefined
  time?: bigint | undefined
  type?: string | undefined
  realmId?: string | undefined
  clientId?: string | undefined
  userId?: string | undefined
  sessionId?: string | undefined
  ipAddress?: string | undefined
  error?: string | undefined
  details?: { [x: string]: string } | undefined
}
type RealmEventsConfigRepresentation = {
  eventsEnabled?: boolean | undefined
  eventsExpiration?: bigint | undefined
  eventsListeners?: string[] | undefined
  enabledEventTypes?: string[] | undefined
  adminEventsEnabled?: boolean | undefined
  adminEventsDetailsEnabled?: boolean | undefined
}
type IdentityProviderMapperTypeRepresentation = {
  id?: string | undefined
  name?: string | undefined
  category?: string | undefined
  helpText?: string | undefined
  properties?: ConfigPropertyRepresentation[] | undefined
}
type KeyUse = 'SIG' | 'ENC' | 'JWT_SVID'
type KeyMetadataRepresentation = {
  providerId?: string | undefined
  providerPriority?: bigint | undefined
  kid?: string | undefined
  status?: string | undefined
  type?: string | undefined
  algorithm?: string | undefined
  publicKey?: string | undefined
  certificate?: string | undefined
  use?: KeyUse | undefined
  validTo?: bigint | undefined
}
type KeysMetadataRepresentation = {
  active?: { [x: string]: string } | undefined
  keys?: KeyMetadataRepresentation[] | undefined
}
type Status = 'PENDING' | 'EXPIRED'
type OrganizationInvitationRepresentation = {
  id?: string | undefined
  organizationId?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  sentDate?: number | undefined
  expiresAt?: number | undefined
  status?: Status | undefined
  inviteLink?: string | undefined
}
type UPAttributeRequired = { roles?: string[] | undefined; scopes?: string[] | undefined }
type UPAttributePermissions = { view?: string[] | undefined; edit?: string[] | undefined }
type UPAttributeSelector = { scopes?: string[] | undefined }
type UPAttribute = {
  name?: string | undefined
  displayName?: string | undefined
  validations?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
  annotations?: { [x: string]: { [x: string]: unknown } } | undefined
  required?: UPAttributeRequired | undefined
  permissions?: UPAttributePermissions | undefined
  selector?: UPAttributeSelector | undefined
  group?: string | undefined
  multivalued?: boolean | undefined
  defaultValue?: string | undefined
}
type UPGroup = {
  name?: string | undefined
  displayHeader?: string | undefined
  displayDescription?: string | undefined
  annotations?: { [x: string]: { [x: string]: unknown } } | undefined
}
type UnmanagedAttributePolicy = 'ENABLED' | 'ADMIN_VIEW' | 'ADMIN_EDIT'
type UPConfig = {
  attributes?: UPAttribute[] | undefined
  groups?: UPGroup[] | undefined
  unmanagedAttributePolicy?: UnmanagedAttributePolicy | undefined
}
type ErrorRepresentation = {
  field?: string | undefined
  errorMessage?: string | undefined
  params?: { [x: string]: unknown }[] | undefined
  errors?: ErrorRepresentation[] | undefined
}
type WorkflowScheduleRepresentation = {
  after?: string | undefined
  'batch-size'?: number | undefined
}
type WorkflowConcurrencyRepresentation = {
  'cancel-in-progress'?: string | undefined
  'restart-in-progress'?: string | undefined
}
type StepExecutionStatus = 'COMPLETED' | 'PENDING'
type WorkflowStepRepresentation = {
  uses?: string | undefined
  after?: string | undefined
  'scheduled-at'?: bigint | undefined
  status?: StepExecutionStatus | undefined
  id?: string | undefined
  config?: MultivaluedHashMapStringString | undefined
}
type WorkflowStateRepresentation = { errors?: string[] | undefined }
type WorkflowRepresentation = {
  id?: string | undefined
  name?: string | undefined
  enabled?: boolean | undefined
  on?: string | undefined
  schedule?: WorkflowScheduleRepresentation | undefined
  concurrency?: WorkflowConcurrencyRepresentation | undefined
  if?: string | undefined
  steps?: WorkflowStepRepresentation[] | undefined
  state?: WorkflowStateRepresentation | undefined
  with?: MultivaluedHashMapStringString | undefined
  cancelInProgress?: string | undefined
  restartInProgress?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/admin/realms': {
      $get:
        | {
            input: { query: { briefRepresentation?: boolean | undefined } }
            output: RealmRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { briefRepresentation?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | { input: { json: File }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: File }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: File }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: File }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: File }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/admin/realms/:realm': {
      $get:
        | {
            input: { param: { realm: string } }
            output: RealmRepresentation
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { param: { realm: string } } & { json: RealmRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string } } & { json: RealmRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & { json: RealmRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & { json: RealmRepresentation }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string } } & { json: RealmRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { realm: string } } & { json: RealmRepresentation }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/admin/realms/:realm/admin-events': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                authClient?: string | undefined
                authIpAddress?: string | undefined
                authRealm?: string | undefined
                authUser?: string | undefined
                dateFrom?: string | undefined
                dateTo?: string | undefined
                direction?: string | undefined
                first?: number | undefined
                max?: number | undefined
                operationTypes?: string[] | undefined
                resourcePath?: string | undefined
                resourceTypes?: string[] | undefined
              }
            }
            output: AdminEventRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                authClient?: string | undefined
                authIpAddress?: string | undefined
                authRealm?: string | undefined
                authUser?: string | undefined
                dateFrom?: string | undefined
                dateTo?: string | undefined
                direction?: string | undefined
                first?: number | undefined
                max?: number | undefined
                operationTypes?: string[] | undefined
                resourcePath?: string | undefined
                resourceTypes?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                authClient?: string | undefined
                authIpAddress?: string | undefined
                authRealm?: string | undefined
                authUser?: string | undefined
                dateFrom?: string | undefined
                dateTo?: string | undefined
                direction?: string | undefined
                first?: number | undefined
                max?: number | undefined
                operationTypes?: string[] | undefined
                resourcePath?: string | undefined
                resourceTypes?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/attack-detection/brute-force/users': {
      $delete: {
        input: { param: { realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/attack-detection/brute-force/users/:userId': {
      $get: {
        input: { param: { userId: string; realm: string } }
        output: { [x: string]: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { userId: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/authenticator-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: { [x: string]: unknown } }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/client-authenticator-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: { [x: string]: unknown } }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/config': {
      $post:
        | {
            input: { param: { realm: string } } & { json: AuthenticatorConfigRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: AuthenticatorConfigRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/authentication/config-description/:providerId': {
      $get: {
        input: { param: { providerId: string; realm: string } }
        output: AuthenticatorConfigInfoRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/config/:id': {
      $get: {
        input: { param: { id: string; realm: string } }
        output: AuthenticatorConfigRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; realm: string } } & {
          json: AuthenticatorConfigRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { id: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/executions': {
      $post: {
        input: { param: { realm: string } } & { json: AuthenticationExecutionRepresentation }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/admin/realms/:realm/authentication/executions/:executionId': {
      $get: {
        input: { param: { executionId: string; realm: string } }
        output: AuthenticationExecutionRepresentation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { executionId: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/executions/:executionId/config': {
      $post:
        | {
            input: { param: { executionId: string; realm: string } } & {
              json: AuthenticatorConfigRepresentation
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { executionId: string; realm: string } } & {
              json: AuthenticatorConfigRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/authentication/executions/:executionId/config/:id': {
      $get: {
        input: { param: { executionId: string; id: string; realm: string } }
        output: AuthenticatorConfigRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/executions/:executionId/lower-priority': {
      $post: {
        input: { param: { executionId: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/executions/:executionId/raise-priority': {
      $post: {
        input: { param: { executionId: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/flows': {
      $get: {
        input: { param: { realm: string } }
        output: AuthenticationFlowRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string } } & { json: AuthenticationFlowRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: AuthenticationFlowRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/authentication/flows/:flowAlias/copy': {
      $post:
        | {
            input: { param: { flowAlias: string; realm: string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { flowAlias: string; realm: string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/authentication/flows/:flowAlias/executions': {
      $get: {
        input: { param: { flowAlias: string; realm: string } }
        output: AuthenticationExecutionInfoRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { flowAlias: string; realm: string } } & {
              json: AuthenticationExecutionInfoRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { flowAlias: string; realm: string } } & {
              json: AuthenticationExecutionInfoRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/authentication/flows/:flowAlias/executions/execution': {
      $post: {
        input: { param: { flowAlias: string; realm: string } } & {
          json: { [x: string]: { [x: string]: unknown } }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/admin/realms/:realm/authentication/flows/:flowAlias/executions/flow': {
      $post:
        | {
            input: { param: { flowAlias: string; realm: string } } & {
              json: { [x: string]: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { flowAlias: string; realm: string } } & {
              json: { [x: string]: { [x: string]: unknown } }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/authentication/flows/:id': {
      $get: {
        input: { param: { id: string; realm: string } }
        output: AuthenticationFlowRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { id: string; realm: string } } & {
              json: AuthenticationFlowRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; realm: string } } & {
              json: AuthenticationFlowRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete: {
        input: { param: { id: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/form-action-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: { [x: string]: unknown } }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/form-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: { [x: string]: unknown } }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/per-client-config-description': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: ConfigPropertyRepresentation[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/register-required-action': {
      $post: {
        input: { param: { realm: string } } & { json: { [x: string]: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/required-actions': {
      $get: {
        input: { param: { realm: string } }
        output: RequiredActionProviderRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/required-actions/:alias': {
      $get: {
        input: { param: { alias: string; realm: string } }
        output: RequiredActionProviderRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { alias: string; realm: string } } & {
          json: RequiredActionProviderRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { alias: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/required-actions/:alias/config': {
      $get: {
        input: { param: { alias: string; realm: string } }
        output: RequiredActionConfigRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { alias: string; realm: string } } & {
          json: RequiredActionConfigRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { alias: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/required-actions/:alias/config-description': {
      $get: {
        input: { param: { alias: string; realm: string } }
        output: RequiredActionConfigInfoRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/authentication/required-actions/:alias/lower-priority': {
      $post: {
        input: { param: { alias: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/required-actions/:alias/raise-priority': {
      $post: {
        input: { param: { alias: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/authentication/unregistered-required-actions': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-description-converter': {
      $post:
        | {
            input: { param: { realm: string } } & { json: string }
            output: ClientRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/client-policies/policies': {
      $get: {
        input: { param: { realm: string } } & {
          query: { 'include-global-policies'?: boolean | undefined }
        }
        output: ClientPoliciesRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string } } & { json: ClientPoliciesRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-policies/profiles': {
      $get: {
        input: { param: { realm: string } } & {
          query: { 'include-global-profiles'?: boolean | undefined }
        }
        output: ClientProfilesRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string } } & { json: ClientProfilesRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-registration-policy/providers': {
      $get: {
        input: { param: { realm: string } }
        output: ComponentTypeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes': {
      $get:
        | {
            input: { param: { realm: string } }
            output: ClientScopeRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { param: { realm: string } } & { json: ClientScopeRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: ClientScopeRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & { json: ClientScopeRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id': {
      $get:
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: ClientScopeRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/protocol-mappers/add-models': {
      $post: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          json: ProtocolMapperRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/protocol-mappers/models': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ProtocolMapperRepresentation
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ProtocolMapperRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/protocol-mappers/models/:id': {
      $get: {
        input: { param: { id: string; realm: string; 'client-scope-id': string } }
        output: ProtocolMapperRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; realm: string; 'client-scope-id': string } } & {
          json: ProtocolMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { id: string; realm: string; 'client-scope-id': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/protocol-mappers/protocol/:protocol': {
      $get: {
        input: { param: { protocol: string; realm: string; 'client-scope-id': string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/scope-mappings': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: MappingsRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/scope-mappings/clients/:client': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/scope-mappings/clients/:client/available': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/scope-mappings/clients/:client/composite': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/scope-mappings/realm': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/scope-mappings/realm/available': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-scopes/:client-scope-id/scope-mappings/realm/composite': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-session-stats': {
      $get:
        | {
            input: { param: { realm: string } }
            output: { [x: string]: string }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/client-templates': {
      $get:
        | {
            input: { param: { realm: string } }
            output: ClientScopeRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { param: { realm: string } } & { json: ClientScopeRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: ClientScopeRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & { json: ClientScopeRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id': {
      $get:
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: ClientScopeRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ClientScopeRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/protocol-mappers/add-models': {
      $post: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          json: ProtocolMapperRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/protocol-mappers/models': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ProtocolMapperRepresentation
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'client-scope-id': string } } & {
              json: ProtocolMapperRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/protocol-mappers/models/:id': {
      $get: {
        input: { param: { id: string; realm: string; 'client-scope-id': string } }
        output: ProtocolMapperRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; realm: string; 'client-scope-id': string } } & {
          json: ProtocolMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { id: string; realm: string; 'client-scope-id': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/protocol-mappers/protocol/:protocol': {
      $get: {
        input: { param: { protocol: string; realm: string; 'client-scope-id': string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/scope-mappings': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: MappingsRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/scope-mappings/clients/:client': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/scope-mappings/clients/:client/available': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/scope-mappings/clients/:client/composite': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string; client: string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/scope-mappings/realm': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/scope-mappings/realm/available': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-templates/:client-scope-id/scope-mappings/realm/composite': {
      $get: {
        input: { param: { realm: string; 'client-scope-id': string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/client-types': {
      $get: {
        input: { param: { realm: string } }
        output: ClientTypesRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string } } & { json: ClientTypesRepresentation }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            clientId?: string | undefined
            first?: number | undefined
            max?: number | undefined
            q?: string | undefined
            search?: boolean | undefined
            viewableOnly?: boolean | undefined
          }
        }
        output: ClientRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string } } & { json: ClientRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: ClientRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/clients-initial-access': {
      $get: {
        input: { param: { realm: string } }
        output: ClientInitialAccessPresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: ClientInitialAccessCreatePresentation }
        output: ClientInitialAccessCreatePresentation
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/realms/:realm/clients-initial-access/:id': {
      $delete: {
        input: { param: { id: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ClientRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: ClientRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: ClientRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: ClientRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ResourceServerRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          json: ResourceServerRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/import': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          json: ResourceServerRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/permission': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                fields?: string | undefined
                first?: number | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                permission?: boolean | undefined
                policyId?: string | undefined
                resource?: string | undefined
                resourceType?: string | undefined
                scope?: string | undefined
                type?: string | undefined
              }
            }
            output: AbstractPolicyRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                fields?: string | undefined
                first?: number | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                permission?: boolean | undefined
                policyId?: string | undefined
                resource?: string | undefined
                resourceType?: string | undefined
                scope?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
      $post: {
        input: { param: { realm: string; 'client-uuid': string } } & { json: string }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/permission/evaluate': {
      $post:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: PolicyEvaluationRequest
            }
            output: PolicyEvaluationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: PolicyEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: PolicyEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/permission/providers': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: PolicyProviderRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/permission/search': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { fields?: string | undefined; name?: string | undefined }
            }
            output: AbstractPolicyRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { fields?: string | undefined; name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { fields?: string | undefined; name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/policy': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                fields?: string | undefined
                first?: number | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                permission?: boolean | undefined
                policyId?: string | undefined
                resource?: string | undefined
                resourceType?: string | undefined
                scope?: string | undefined
                type?: string | undefined
              }
            }
            output: AbstractPolicyRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                fields?: string | undefined
                first?: number | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                permission?: boolean | undefined
                policyId?: string | undefined
                resource?: string | undefined
                resourceType?: string | undefined
                scope?: string | undefined
                type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
      $post: {
        input: { param: { realm: string; 'client-uuid': string } } & { json: string }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/policy/evaluate': {
      $post:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: PolicyEvaluationRequest
            }
            output: PolicyEvaluationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: PolicyEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: PolicyEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/policy/providers': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: PolicyProviderRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/policy/search': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { fields?: string | undefined; name?: string | undefined }
            }
            output: AbstractPolicyRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { fields?: string | undefined; name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { fields?: string | undefined; name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/resource': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          query: {
            _id?: string | undefined
            deep?: boolean | undefined
            exactName?: boolean | undefined
            first?: number | undefined
            matchingUri?: boolean | undefined
            max?: number | undefined
            name?: string | undefined
            owner?: string | undefined
            scope?: string | undefined
            type?: string | undefined
            uri?: string | undefined
          }
        }
        output: ResourceRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            } & { json: ResourceRepresentation }
            output: ResourceRepresentation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            } & { json: ResourceRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/resource/search': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                name?: string | undefined
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: ResourceRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                name?: string | undefined
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                name?: string | undefined
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/resource/:resource-id': {
      $get:
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: ResourceRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            } & { json: ResourceRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            } & { json: ResourceRepresentation }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/resource/:resource-id/attributes': {
      $get: {
        input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
          query: {
            _id?: string | undefined
            deep?: boolean | undefined
            exactName?: boolean | undefined
            first?: number | undefined
            matchingUri?: boolean | undefined
            max?: number | undefined
            name?: string | undefined
            owner?: string | undefined
            scope?: string | undefined
            type?: string | undefined
            uri?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/resource/:resource-id/permissions': {
      $get:
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: PolicyRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/resource/:resource-id/scopes': {
      $get:
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: ScopeRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'resource-id': string; realm: string; 'client-uuid': string } } & {
              query: {
                _id?: string | undefined
                deep?: boolean | undefined
                exactName?: boolean | undefined
                first?: number | undefined
                matchingUri?: boolean | undefined
                max?: number | undefined
                name?: string | undefined
                owner?: string | undefined
                scope?: string | undefined
                type?: string | undefined
                uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/scope': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          query: {
            first?: number | undefined
            max?: number | undefined
            name?: string | undefined
            scopeId?: string | undefined
          }
        }
        output: ScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-uuid': string } } & { json: ScopeRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/scope/search': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { name?: string | undefined }
            }
            output: ScopeRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/scope/:scope-id': {
      $get:
        | {
            input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } }
            output: ScopeRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put: {
        input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } } & {
          json: ScopeRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/scope/:scope-id/permissions': {
      $get:
        | {
            input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } }
            output: PolicyRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/scope/:scope-id/resources': {
      $get:
        | {
            input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } }
            output: ResourceRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'scope-id': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/authz/resource-server/settings': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ResourceServerRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/certificates/:attr': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/certificates/:attr/download': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string; attr: string } } & {
          json: KeyStoreConfig
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/certificates/:attr/generate': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/certificates/:attr/generate-and-download': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string; attr: string } } & {
          json: KeyStoreConfig
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/certificates/:attr/upload': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/certificates/:attr/upload-certificate': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/client-secret': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: CredentialRepresentation
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: CredentialRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/client-secret/rotated': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: CredentialRepresentation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/default-client-scopes': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ClientScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/default-client-scopes/:clientScopeId': {
      $put: {
        input: { param: { clientScopeId: string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { clientScopeId: string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/evaluate-scopes/generate-example-access-token': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                audience?: string | undefined
                scope?: string | undefined
                userId?: string | undefined
              }
            }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                audience?: string | undefined
                scope?: string | undefined
                userId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                audience?: string | undefined
                scope?: string | undefined
                userId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/evaluate-scopes/generate-example-id-token': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                audience?: string | undefined
                scope?: string | undefined
                userId?: string | undefined
              }
            }
            output: IDToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                audience?: string | undefined
                scope?: string | undefined
                userId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                audience?: string | undefined
                scope?: string | undefined
                userId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/evaluate-scopes/generate-example-saml-response': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          query: {
            audience?: string | undefined
            scope?: string | undefined
            userId?: string | undefined
          }
        }
        output: SamlExampleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/evaluate-scopes/generate-example-userinfo': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { scope?: string | undefined; userId?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { scope?: string | undefined; userId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/evaluate-scopes/protocol-mappers': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { scope?: string | undefined }
            }
            output: ProtocolMapperEvaluationRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: { scope?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/evaluate-scopes/scope-mappings/:roleContainerId/granted': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string; roleContainerId: string } } & {
              query: { scope?: string | undefined }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string; roleContainerId: string } } & {
              query: { scope?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/evaluate-scopes/scope-mappings/:roleContainerId/not-granted': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string; roleContainerId: string } } & {
              query: { scope?: string | undefined }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string; roleContainerId: string } } & {
              query: { scope?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/installation/providers/:providerId': {
      $get: {
        input: { param: { providerId: string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/management/permissions': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          json: ManagementPermissionReference
        }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/nodes': {
      $post:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: { [x: string]: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/nodes/:node': {
      $delete: {
        input: { param: { node: string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/offline-session-count': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: { [x: string]: bigint }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/offline-sessions': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          query: { first?: number | undefined; max?: number | undefined }
        }
        output: UserSessionRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/optional-client-scopes': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ClientScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/optional-client-scopes/:clientScopeId': {
      $put: {
        input: { param: { clientScopeId: string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { clientScopeId: string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/protocol-mappers/add-models': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          json: ProtocolMapperRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/protocol-mappers/models': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: ProtocolMapperRepresentation
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: ProtocolMapperRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/protocol-mappers/models/:id': {
      $get: {
        input: { param: { id: string; realm: string; 'client-uuid': string } }
        output: ProtocolMapperRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; realm: string; 'client-uuid': string } } & {
          json: ProtocolMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { id: string; realm: string; 'client-uuid': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/protocol-mappers/protocol/:protocol': {
      $get: {
        input: { param: { protocol: string; realm: string; 'client-uuid': string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/push-revocation': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: GlobalRequestResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/registration-access-token': {
      $post: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: ClientRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles': {
      $get:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles/:role-name': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: RoleRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles/:role-name/composites': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles/:role-name/composites/clients/:targetClientUuid': {
      $get:
        | {
            input: {
              param: {
                'role-name': string
                targetClientUuid: string
                realm: string
                'client-uuid': string
              }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                'role-name': string
                targetClientUuid: string
                realm: string
                'client-uuid': string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                'role-name': string
                targetClientUuid: string
                realm: string
                'client-uuid': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles/:role-name/composites/realm': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles/:role-name/groups': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles/:role-name/management/permissions': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: ManagementPermissionReference
            }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: ManagementPermissionReference
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              json: ManagementPermissionReference
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/roles/:role-name/users': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: UserRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string; 'client-uuid': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/scope-mappings': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: MappingsRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/scope-mappings/clients/:client': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-uuid': string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'client-uuid': string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/scope-mappings/clients/:client/available': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/scope-mappings/clients/:client/composite': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string; client: string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/scope-mappings/realm': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'client-uuid': string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'client-uuid': string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/scope-mappings/realm/available': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/scope-mappings/realm/composite': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/service-account-user': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: UserRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/session-count': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: { [x: string]: bigint }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/test-nodes-available': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } }
        output: GlobalRequestResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/clients/:client-uuid/user-sessions': {
      $get: {
        input: { param: { realm: string; 'client-uuid': string } } & {
          query: { first?: number | undefined; max?: number | undefined }
        }
        output: UserSessionRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/components': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            name?: string | undefined
            parent?: string | undefined
            providerId?: string | undefined
            type?: string | undefined
          }
        }
        output: ComponentRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: ComponentRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/components/:id': {
      $get: {
        input: { param: { id: string; realm: string } }
        output: ComponentRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; realm: string } } & { json: ComponentRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { id: string; realm: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/components/:id/sub-component-types': {
      $get: {
        input: { param: { id: string; realm: string } } & { query: { type?: string | undefined } }
        output: ComponentTypeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/credential-registrators': {
      $get:
        | {
            input: { param: { realm: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/default-default-client-scopes': {
      $get:
        | {
            input: { param: { realm: string } }
            output: ClientScopeRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/default-default-client-scopes/:clientScopeId': {
      $put:
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/default-groups': {
      $get:
        | {
            input: { param: { realm: string } }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/default-groups/:groupId': {
      $put:
        | {
            input: { param: { groupId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { groupId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/default-optional-client-scopes': {
      $get:
        | {
            input: { param: { realm: string } }
            output: ClientScopeRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/default-optional-client-scopes/:clientScopeId': {
      $put:
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { clientScopeId: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/events': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                client?: string | undefined
                dateFrom?: string | undefined
                dateTo?: string | undefined
                direction?: string | undefined
                first?: number | undefined
                ipAddress?: string | undefined
                max?: number | undefined
                type?: string[] | undefined
                user?: string | undefined
              }
            }
            output: EventRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                client?: string | undefined
                dateFrom?: string | undefined
                dateTo?: string | undefined
                direction?: string | undefined
                first?: number | undefined
                ipAddress?: string | undefined
                max?: number | undefined
                type?: string[] | undefined
                user?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                client?: string | undefined
                dateFrom?: string | undefined
                dateTo?: string | undefined
                direction?: string | undefined
                first?: number | undefined
                ipAddress?: string | undefined
                max?: number | undefined
                type?: string[] | undefined
                user?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/events/config': {
      $get:
        | {
            input: { param: { realm: string } }
            output: RealmEventsConfigRepresentation
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { param: { realm: string } } & { json: RealmEventsConfigRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string } } & { json: RealmEventsConfigRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/group-by-path/:path': {
      $get:
        | {
            input: { param: { path: string; realm: string } }
            output: GroupRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { path: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/groups': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            briefRepresentation?: boolean | undefined
            exact?: boolean | undefined
            first?: number | undefined
            max?: number | undefined
            populateHierarchy?: boolean | undefined
            q?: string | undefined
            search?: string | undefined
            subGroupsCount?: boolean | undefined
          }
        }
        output: GroupRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/groups/count': {
      $get: {
        input: { param: { realm: string } } & {
          query: { search?: string | undefined; top?: boolean | undefined }
        }
        output: { [x: string]: bigint }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id': {
      $get: {
        input: { param: { realm: string; 'group-id': string } }
        output: GroupRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete: {
        input: { param: { realm: string; 'group-id': string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/children': {
      $get: {
        input: { param: { realm: string; 'group-id': string } } & {
          query: {
            briefRepresentation?: boolean | undefined
            exact?: boolean | undefined
            first?: number | undefined
            max?: number | undefined
            search?: string | undefined
            subGroupsCount?: boolean | undefined
          }
        }
        output: GroupRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/management/permissions': {
      $get: {
        input: { param: { realm: string; 'group-id': string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; 'group-id': string } } & {
          json: ManagementPermissionReference
        }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/members': {
      $get: {
        input: { param: { realm: string; 'group-id': string } } & {
          query: {
            briefRepresentation?: boolean | undefined
            first?: number | undefined
            max?: number | undefined
          }
        }
        output: UserRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/role-mappings': {
      $get:
        | {
            input: { param: { realm: string; 'group-id': string } }
            output: MappingsRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/role-mappings/clients/:client-id': {
      $get: {
        input: { param: { realm: string; 'group-id': string; 'client-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'group-id': string; 'client-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'group-id': string; 'client-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/role-mappings/clients/:client-id/available': {
      $get: {
        input: { param: { realm: string; 'group-id': string; 'client-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/role-mappings/clients/:client-id/composite': {
      $get: {
        input: { param: { realm: string; 'group-id': string; 'client-id': string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/role-mappings/realm': {
      $get:
        | {
            input: { param: { realm: string; 'group-id': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/role-mappings/realm/available': {
      $get:
        | {
            input: { param: { realm: string; 'group-id': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/groups/:group-id/role-mappings/realm/composite': {
      $get:
        | {
            input: { param: { realm: string; 'group-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'group-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/identity-provider/import-config': {
      $post: {
        input: { param: { realm: string } } & { json: { [x: string]: { [x: string]: unknown } } }
        output: { [x: string]: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            briefRepresentation?: boolean | undefined
            capability?: string | undefined
            first?: number | undefined
            max?: number | undefined
            realmOnly?: boolean | undefined
            search?: string | undefined
            type?: string | undefined
          }
        }
        output: IdentityProviderRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { realm: string } } & { json: IdentityProviderRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: IdentityProviderRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & { json: IdentityProviderRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances/:alias': {
      $get: {
        input: { param: { realm: string; alias: string } }
        output: IdentityProviderRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { realm: string; alias: string } } & {
              json: IdentityProviderRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; alias: string } } & {
              json: IdentityProviderRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; alias: string } } & {
              json: IdentityProviderRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete: {
        input: { param: { realm: string; alias: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances/:alias/export': {
      $get: {
        input: { param: { realm: string; alias: string } } & {
          query: { format?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances/:alias/management/permissions': {
      $get: {
        input: { param: { realm: string; alias: string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; alias: string } } & { json: ManagementPermissionReference }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances/:alias/mapper-types': {
      $get: {
        input: { param: { realm: string; alias: string } }
        output: { [x: string]: IdentityProviderMapperTypeRepresentation }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances/:alias/mappers': {
      $get: {
        input: { param: { realm: string; alias: string } }
        output: IdentityProviderMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; alias: string } } & {
          json: IdentityProviderMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances/:alias/mappers/:id': {
      $get: {
        input: { param: { id: string; realm: string; alias: string } }
        output: IdentityProviderMapperRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; realm: string; alias: string } } & {
          json: IdentityProviderMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { id: string; realm: string; alias: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/instances/:alias/reload-keys': {
      $get: {
        input: { param: { realm: string; alias: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/providers/:provider_id': {
      $get: {
        input: { param: { provider_id: string; realm: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/identity-provider/upload-certificate': {
      $post: {
        input: { param: { realm: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/keys': {
      $get: {
        input: { param: { realm: string } }
        output: KeysMetadataRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/localization': {
      $get:
        | {
            input: { param: { realm: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/localization/:locale': {
      $get:
        | {
            input: { param: { locale: string; realm: string } } & {
              query: { useRealmDefaultLocaleFallback?: boolean | undefined }
            }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { locale: string; realm: string } } & {
              query: { useRealmDefaultLocaleFallback?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { locale: string; realm: string } } & { json: { [x: string]: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { locale: string; realm: string } } & { json: { [x: string]: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { locale: string; realm: string } } & { json: { [x: string]: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { param: { locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/localization/:locale/:key': {
      $get:
        | {
            input: { param: { key: string; locale: string; realm: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string; locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key: string; locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { key: string; locale: string; realm: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key: string; locale: string; realm: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { key: string; locale: string; realm: string } } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { param: { key: string; locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { key: string; locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key: string; locale: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/logout-all': {
      $post:
        | {
            input: { param: { realm: string } }
            output: GlobalRequestResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/organizations': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                identityProvider?: string | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
              }
            }
            output: OrganizationRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                identityProvider?: string | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                identityProvider?: string | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { realm: string } } & { json: OrganizationRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: OrganizationRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & { json: OrganizationRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/count': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                exact?: boolean | undefined
                identityProvider?: string | undefined
                q?: string | undefined
                search?: string | undefined
              }
            }
            output: bigint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                exact?: boolean | undefined
                identityProvider?: string | undefined
                q?: string | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/members/:member-id/organizations': {
      $get:
        | {
            input: { param: { 'member-id': string; realm: string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: OrganizationRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'member-id': string; realm: string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'member-id': string; realm: string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: OrganizationRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: OrganizationRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: OrganizationRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: OrganizationRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: OrganizationRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                populateHierarchy?: boolean | undefined
                q?: string | undefined
                search?: string | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                populateHierarchy?: boolean | undefined
                q?: string | undefined
                search?: string | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: GroupRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/group-by-path/:path': {
      $get:
        | {
            input: { param: { path: string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: GroupRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { path: string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { path: string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: { subGroupsCount?: boolean | undefined }
            }
            output: GroupRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: { subGroupsCount?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/children': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: {
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: {
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: GroupRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/members': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: MemberRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/members/:userId': {
      $put:
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: { userId: string; realm: string; 'org-id': string; 'group-id': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/role-mappings': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: MappingsRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/role-mappings/clients/:client-id': {
      $get: {
        input: {
          param: { realm: string; 'org-id': string; 'group-id': string; 'client-id': string }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: { realm: string; 'org-id': string; 'group-id': string; 'client-id': string }
        } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: {
          param: { realm: string; 'org-id': string; 'group-id': string; 'client-id': string }
        } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/role-mappings/clients/:client-id/available': {
      $get: {
        input: {
          param: { realm: string; 'org-id': string; 'group-id': string; 'client-id': string }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/role-mappings/clients/:client-id/composite': {
      $get: {
        input: {
          param: { realm: string; 'org-id': string; 'group-id': string; 'client-id': string }
        } & { query: { briefRepresentation?: boolean | undefined } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/role-mappings/realm': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/role-mappings/realm/available': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/groups/:group-id/role-mappings/realm/composite': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string; 'group-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/identity-providers': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: IdentityProviderRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/identity-providers/:alias': {
      $get:
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } }
            output: IdentityProviderRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } } & {
              json: OrganizationIdentityProviderLinkRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } } & {
              json: OrganizationIdentityProviderLinkRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } } & {
              json: OrganizationIdentityProviderLinkRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } } & {
              json: OrganizationIdentityProviderLinkRepresentation
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/identity-providers/:alias/groups': {
      $get:
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { alias: string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
                subGroupsCount?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/invitations': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: {
                email?: string | undefined
                first?: number | undefined
                firstName?: string | undefined
                lastName?: string | undefined
                max?: number | undefined
                search?: string | undefined
                status?: string | undefined
              }
            }
            output: OrganizationInvitationRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: {
                email?: string | undefined
                first?: number | undefined
                firstName?: string | undefined
                lastName?: string | undefined
                max?: number | undefined
                search?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/invitations/:id': {
      $get:
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: OrganizationInvitationRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/invitations/:id/resend': {
      $post:
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                membershipType?: string | undefined
                search?: string | undefined
              }
            }
            output: MemberRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                membershipType?: string | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & { json: string }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members/count': {
      $get:
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: bigint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members/invite-existing-user': {
      $post:
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: { id?: string | undefined }
            } & { form: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: { id?: string | undefined }
            } & { form: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: { id?: string | undefined }
            } & { form: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              json: { id?: string | undefined }
            } & { form: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members/invite-user': {
      $post:
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: { client_id?: string | undefined }
            } & {
              json: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            } & {
              form: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: { client_id?: string | undefined }
            } & {
              json: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            } & {
              form: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: { client_id?: string | undefined }
            } & {
              json: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            } & {
              form: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: { client_id?: string | undefined }
            } & {
              json: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            } & {
              form: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { realm: string; 'org-id': string } } & {
              query: { client_id?: string | undefined }
            } & {
              json: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            } & {
              form: {
                email?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members/:member-id': {
      $get:
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } }
            output: MemberRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members/:member-id/groups': {
      $get:
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members/:member-id/membership-type': {
      $put:
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              json: MembershipType
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              json: MembershipType
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              json: MembershipType
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              json: MembershipType
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/organizations/:org-id/members/:member-id/organizations': {
      $get:
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: OrganizationRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'member-id': string; realm: string; 'org-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/partial-export': {
      $post:
        | {
            input: { param: { realm: string } } & {
              query: {
                exportClients?: boolean | undefined
                exportGroupsAndRoles?: boolean | undefined
              }
            }
            output: RealmRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                exportClients?: boolean | undefined
                exportGroupsAndRoles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/partialImport': {
      $post:
        | {
            input: { param: { realm: string } } & { json: File }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/admin/realms/:realm/push-revocation': {
      $post:
        | {
            input: { param: { realm: string } }
            output: GlobalRequestResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/roles': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/roles-by-id/:role-id': {
      $get:
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: RoleRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { 'role-id': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-id': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'role-id': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/roles-by-id/:role-id/composites': {
      $get:
        | {
            input: { param: { 'role-id': string; realm: string } } & {
              query: {
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-id': string; realm: string } } & {
              query: {
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { 'role-id': string; realm: string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-id': string; realm: string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { param: { 'role-id': string; realm: string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-id': string; realm: string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/roles-by-id/:role-id/composites/clients/:clientUuid': {
      $get:
        | {
            input: { param: { clientUuid: string; 'role-id': string; realm: string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientUuid: string; 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { clientUuid: string; 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/roles-by-id/:role-id/composites/realm': {
      $get:
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/roles-by-id/:role-id/management/permissions': {
      $get:
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { 'role-id': string; realm: string } } & {
              json: ManagementPermissionReference
            }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-id': string; realm: string } } & {
              json: ManagementPermissionReference
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/roles/:role-name': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: RoleRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { 'role-name': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & { json: RoleRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/roles/:role-name/composites': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: RoleRepresentation[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/roles/:role-name/composites/clients/:targetClientUuid': {
      $get:
        | {
            input: { param: { 'role-name': string; targetClientUuid: string; realm: string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; targetClientUuid: string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; targetClientUuid: string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/roles/:role-name/composites/realm': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/roles/:role-name/groups': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/roles/:role-name/management/permissions': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: ManagementPermissionReference
            }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: ManagementPermissionReference
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              json: ManagementPermissionReference
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/roles/:role-name/users': {
      $get:
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: UserRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { 'role-name': string; realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/sessions/:session': {
      $delete:
        | {
            input: { param: { session: string; realm: string } } & {
              query: { isOffline?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { session: string; realm: string } } & {
              query: { isOffline?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { session: string; realm: string } } & {
              query: { isOffline?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/testSMTPConnection': {
      $post:
        | {
            input: { param: { realm: string } } & {
              json: { [x: string]: string } | { config?: string | undefined }
            } & { form: { config?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string } } & {
              json: { [x: string]: string } | { config?: string | undefined }
            } & { form: { config?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                email?: string | undefined
                emailVerified?: boolean | undefined
                enabled?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                firstName?: string | undefined
                idpAlias?: string | undefined
                idpUserId?: string | undefined
                lastName?: string | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
                username?: string | undefined
              }
            }
            output: UserRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                email?: string | undefined
                emailVerified?: boolean | undefined
                enabled?: boolean | undefined
                exact?: boolean | undefined
                first?: number | undefined
                firstName?: string | undefined
                idpAlias?: string | undefined
                idpUserId?: string | undefined
                lastName?: string | undefined
                max?: number | undefined
                q?: string | undefined
                search?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { realm: string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users-management-permissions': {
      $get:
        | {
            input: { param: { realm: string } }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { param: { realm: string } } & { json: ManagementPermissionReference }
            output: ManagementPermissionReference
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & { json: ManagementPermissionReference }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/count': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                email?: string | undefined
                emailVerified?: boolean | undefined
                enabled?: boolean | undefined
                exact?: boolean | undefined
                firstName?: string | undefined
                idpAlias?: string | undefined
                idpUserId?: string | undefined
                lastName?: string | undefined
                q?: string | undefined
                search?: string | undefined
                username?: string | undefined
              }
            }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                createdAfter?: string | undefined
                createdBefore?: string | undefined
                email?: string | undefined
                emailVerified?: boolean | undefined
                enabled?: boolean | undefined
                exact?: boolean | undefined
                firstName?: string | undefined
                idpAlias?: string | undefined
                idpUserId?: string | undefined
                lastName?: string | undefined
                q?: string | undefined
                search?: string | undefined
                username?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/profile': {
      $get:
        | {
            input: { param: { realm: string } }
            output: UPConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
      $put:
        | {
            input: { param: { realm: string } } & { json: UPConfig }
            output: UPConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & { json: UPConfig }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/profile/metadata': {
      $get:
        | {
            input: { param: { realm: string } }
            output: UserProfileMetadata
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/admin/realms/:realm/users/:user-id': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { userProfileMetadata?: boolean | undefined }
            }
            output: UserRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { userProfileMetadata?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: UserRepresentation }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/configured-user-storage-credential-types': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/consents': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: { [x: string]: { [x: string]: unknown } }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/consents/:client': {
      $delete:
        | {
            input: { param: { client: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { client: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { client: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/credentials': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: CredentialRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/credentials/:credentialId': {
      $delete:
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/credentials/:credentialId/moveAfter/:newPreviousCredentialId': {
      $post:
        | {
            input: {
              param: {
                credentialId: string
                newPreviousCredentialId: string
                realm: string
                'user-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                credentialId: string
                newPreviousCredentialId: string
                realm: string
                'user-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                credentialId: string
                newPreviousCredentialId: string
                realm: string
                'user-id': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/credentials/:credentialId/moveToFirst': {
      $post:
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/credentials/:credentialId/userLabel': {
      $put:
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } } & {
              json: string
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } } & {
              json: string
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { credentialId: string; realm: string; 'user-id': string } } & {
              json: string
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/disable-credential-types': {
      $put:
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/execute-actions-email': {
      $put:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/federated-identity': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: FederatedIdentityRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/federated-identity/:provider': {
      $post:
        | {
            input: { param: { provider: string; realm: string; 'user-id': string } } & {
              json: FederatedIdentityRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { provider: string; realm: string; 'user-id': string } } & {
              json: FederatedIdentityRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { provider: string; realm: string; 'user-id': string } } & {
              json: FederatedIdentityRepresentation
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { provider: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { provider: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { provider: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/groups': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: GroupRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                briefRepresentation?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/groups/count': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { search?: string | undefined }
            }
            output: { [x: string]: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { search?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/groups/:groupId': {
      $put:
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { groupId: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/impersonation': {
      $post:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: ErrorRepresentation
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/logout': {
      $post:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/offline-sessions/:clientUuid': {
      $get:
        | {
            input: { param: { clientUuid: string; realm: string; 'user-id': string } }
            output: UserSessionRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientUuid: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { clientUuid: string; realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/reset-password': {
      $put:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              json: CredentialRepresentation
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              json: CredentialRepresentation
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              json: CredentialRepresentation
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              json: CredentialRepresentation
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/reset-password-email': {
      $put:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { client_id?: string | undefined; redirect_uri?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { client_id?: string | undefined; redirect_uri?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { client_id?: string | undefined; redirect_uri?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { client_id?: string | undefined; redirect_uri?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { client_id?: string | undefined; redirect_uri?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/role-mappings': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: MappingsRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/role-mappings/clients/:client-id': {
      $get: {
        input: { param: { realm: string; 'user-id': string; 'client-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'user-id': string; 'client-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { realm: string; 'user-id': string; 'client-id': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/role-mappings/clients/:client-id/available': {
      $get: {
        input: { param: { realm: string; 'user-id': string; 'client-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/role-mappings/clients/:client-id/composite': {
      $get: {
        input: { param: { realm: string; 'user-id': string; 'client-id': string } } & {
          query: { briefRepresentation?: boolean | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/role-mappings/realm': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & { json: RoleRepresentation[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/role-mappings/realm/available': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/role-mappings/realm/composite': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: RoleRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: { briefRepresentation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/send-verify-email': {
      $put:
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { realm: string; 'user-id': string } } & {
              query: {
                client_id?: string | undefined
                lifespan?: number | undefined
                redirect_uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/sessions': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: UserSessionRepresentation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/users/:user-id/unmanagedAttributes': {
      $get:
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: { [x: string]: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; 'user-id': string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/admin/realms/:realm/workflows': {
      $get:
        | {
            input: { param: { realm: string } } & {
              query: {
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: WorkflowRepresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: WorkflowRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string } } & {
              query: {
                exact?: boolean | undefined
                first?: number | undefined
                max?: number | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { realm: string } } & { json: WorkflowRepresentation }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { realm: string } } & { json: WorkflowRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/workflows/migrate': {
      $post:
        | {
            input: { param: { realm: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/workflows/scheduled/:resource-id': {
      $get:
        | {
            input: { param: { 'resource-id': string; realm: string } }
            output: WorkflowRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'resource-id': string; realm: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/workflows/:id': {
      $get:
        | {
            input: { param: { realm: string; id: string } } & {
              query: { includeId?: boolean | undefined }
            }
            output: WorkflowRepresentation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { realm: string; id: string } } & {
              query: { includeId?: boolean | undefined }
            }
            output: WorkflowRepresentation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { realm: string; id: string } } & {
              query: { includeId?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { realm: string; id: string } } & { json: WorkflowRepresentation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; id: string } } & { json: WorkflowRepresentation }
            output: {}
            outputFormat: string
            status: 400
          }
      $delete:
        | {
            input: { param: { realm: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { realm: string; id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/workflows/:id/activate/:type/:resourceId': {
      $post:
        | {
            input: {
              param: {
                resourceId: string
                type: { [x: string]: unknown }
                realm: string
                id: string
              }
            } & { query: { notBefore?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                resourceId: string
                type: { [x: string]: unknown }
                realm: string
                id: string
              }
            } & { query: { notBefore?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/admin/realms/:realm/workflows/:id/deactivate/:type/:resourceId': {
      $post:
        | {
            input: {
              param: {
                resourceId: string
                type: { [x: string]: unknown }
                realm: string
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                resourceId: string
                type: { [x: string]: unknown }
                realm: string
                id: string
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
