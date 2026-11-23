type MemoryInfoRepresentation = {
  free?: bigint | undefined
  freeFormated?: string | undefined
  freePercentage?: bigint | undefined
  total?: bigint | undefined
  totalFormated?: string | undefined
  used?: bigint | undefined
  usedFormated?: string | undefined
}
type PasswordPolicyTypeRepresentation = {
  configType?: string | undefined
  defaultValue?: string | undefined
  displayName?: string | undefined
  id?: string | undefined
  multipleSupported?: boolean | undefined
}
type ProfileInfoRepresentation = {
  disabledFeatures?: string[] | undefined
  experimentalFeatures?: string[] | undefined
  name?: string | undefined
  previewFeatures?: string[] | undefined
}
type SystemInfoRepresentation = {
  fileEncoding?: string | undefined
  javaHome?: string | undefined
  javaRuntime?: string | undefined
  javaVendor?: string | undefined
  javaVersion?: string | undefined
  javaVm?: string | undefined
  javaVmVersion?: string | undefined
  osArchitecture?: string | undefined
  osName?: string | undefined
  osVersion?: string | undefined
  serverTime?: string | undefined
  uptime?: string | undefined
  uptimeMillis?: bigint | undefined
  userDir?: string | undefined
  userLocale?: string | undefined
  userName?: string | undefined
  userTimezone?: string | undefined
  version?: string | undefined
}
type ServerInfoRepresentation = {
  builtinProtocolMappers?: { [x: string]: unknown } | undefined
  clientImporters?: { [x: string]: unknown }[] | undefined
  clientInstallations?: { [x: string]: unknown } | undefined
  componentTypes?: { [x: string]: unknown } | undefined
  enums?: { [x: string]: unknown } | undefined
  identityProviders?: { [x: string]: unknown }[] | undefined
  memoryInfo?: MemoryInfoRepresentation | undefined
  passwordPolicies?: PasswordPolicyTypeRepresentation[] | undefined
  profileInfo?: ProfileInfoRepresentation | undefined
  protocolMapperTypes?: { [x: string]: unknown } | undefined
  providers?: { [x: string]: unknown } | undefined
  socialProviders?: { [x: string]: unknown }[] | undefined
  systemInfo?: SystemInfoRepresentation | undefined
  themes?: { [x: string]: unknown } | undefined
}
type AuthenticationExecutionExportRepresentation = {
  authenticator?: string | undefined
  authenticatorConfig?: string | undefined
  authenticatorFlow?: boolean | undefined
  autheticatorFlow?: boolean | undefined
  flowAlias?: string | undefined
  priority?: number | undefined
  requirement?: string | undefined
  userSetupAllowed?: boolean | undefined
}
type AuthenticationFlowRepresentation = {
  alias?: string | undefined
  authenticationExecutions?: AuthenticationExecutionExportRepresentation[] | undefined
  builtIn?: boolean | undefined
  description?: string | undefined
  id?: string | undefined
  providerId?: string | undefined
  topLevel?: boolean | undefined
}
type AuthenticatorConfigRepresentation = {
  alias?: string | undefined
  config?: { [x: string]: unknown } | undefined
  id?: string | undefined
}
type ProtocolMapperRepresentation = {
  config?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  protocol?: string | undefined
  protocolMapper?: string | undefined
}
type ClientScopeRepresentation = {
  attributes?: { [x: string]: unknown } | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  protocol?: string | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
}
type ScopeRepresentation = {
  displayName?: string | undefined
  iconUri?: string | undefined
  id?: string | undefined
  name?: string | undefined
  policies?: PolicyRepresentation[] | undefined
  resources?: ResourceRepresentation[] | undefined
}
type ResourceRepresentation = {
  attributes?: { [x: string]: unknown } | undefined
  displayName?: string | undefined
  icon_uri?: string | undefined
  id?: string | undefined
  name?: string | undefined
  ownerManagedAccess?: boolean | undefined
  scopes?: ScopeRepresentation[] | undefined
  type?: string | undefined
  uris?: string[] | undefined
}
type PolicyRepresentation = {
  config?: { [x: string]: unknown } | undefined
  decisionStrategy?: 'AFFIRMATIVE' | 'UNANIMOUS' | 'CONSENSUS' | undefined
  description?: string | undefined
  id?: string | undefined
  logic?: 'POSITIVE' | 'NEGATIVE' | undefined
  name?: string | undefined
  owner?: string | undefined
  policies?: string[] | undefined
  resources?: string[] | undefined
  resourcesData?: ResourceRepresentation[] | undefined
  scopes?: string[] | undefined
  scopesData?: ScopeRepresentation[] | undefined
  type?: string | undefined
}
type ResourceServerRepresentation = {
  allowRemoteResourceManagement?: boolean | undefined
  clientId?: string | undefined
  decisionStrategy?: 'AFFIRMATIVE' | 'UNANIMOUS' | 'CONSENSUS' | undefined
  id?: string | undefined
  name?: string | undefined
  policies?: PolicyRepresentation[] | undefined
  policyEnforcementMode?: 'ENFORCING' | 'PERMISSIVE' | 'DISABLED' | undefined
  resources?: ResourceRepresentation[] | undefined
  scopes?: ScopeRepresentation[] | undefined
}
type ClientRepresentation = {
  access?: { [x: string]: unknown } | undefined
  adminUrl?: string | undefined
  alwaysDisplayInConsole?: boolean | undefined
  attributes?: { [x: string]: unknown } | undefined
  authenticationFlowBindingOverrides?: { [x: string]: unknown } | undefined
  authorizationServicesEnabled?: boolean | undefined
  authorizationSettings?: ResourceServerRepresentation | undefined
  baseUrl?: string | undefined
  bearerOnly?: boolean | undefined
  clientAuthenticatorType?: string | undefined
  clientId?: string | undefined
  consentRequired?: boolean | undefined
  defaultClientScopes?: string[] | undefined
  defaultRoles?: string[] | undefined
  description?: string | undefined
  directAccessGrantsEnabled?: boolean | undefined
  enabled?: boolean | undefined
  frontchannelLogout?: boolean | undefined
  fullScopeAllowed?: boolean | undefined
  id?: string | undefined
  implicitFlowEnabled?: boolean | undefined
  name?: string | undefined
  nodeReRegistrationTimeout?: number | undefined
  notBefore?: number | undefined
  optionalClientScopes?: string[] | undefined
  origin?: string | undefined
  protocol?: string | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
  publicClient?: boolean | undefined
  redirectUris?: string[] | undefined
  registeredNodes?: { [x: string]: unknown } | undefined
  registrationAccessToken?: string | undefined
  rootUrl?: string | undefined
  secret?: string | undefined
  serviceAccountsEnabled?: boolean | undefined
  standardFlowEnabled?: boolean | undefined
  surrogateAuthRequired?: boolean | undefined
  webOrigins?: string[] | undefined
}
type MultivaluedHashMap = {
  empty?: boolean | undefined
  loadFactor?: number | undefined
  threshold?: number | undefined
}
type UserConsentRepresentation = {
  clientId?: string | undefined
  createdDate?: bigint | undefined
  grantedClientScopes?: string[] | undefined
  lastUpdatedDate?: bigint | undefined
}
type CredentialRepresentation = {
  createdDate?: bigint | undefined
  credentialData?: string | undefined
  id?: string | undefined
  priority?: number | undefined
  secretData?: string | undefined
  temporary?: boolean | undefined
  type?: string | undefined
  userLabel?: string | undefined
  value?: string | undefined
}
type FederatedIdentityRepresentation = {
  identityProvider?: string | undefined
  userId?: string | undefined
  userName?: string | undefined
}
type UserRepresentation = {
  access?: { [x: string]: unknown } | undefined
  attributes?: { [x: string]: unknown } | undefined
  clientConsents?: UserConsentRepresentation[] | undefined
  clientRoles?: { [x: string]: unknown } | undefined
  createdTimestamp?: bigint | undefined
  credentials?: CredentialRepresentation[] | undefined
  disableableCredentialTypes?: string[] | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  enabled?: boolean | undefined
  federatedIdentities?: FederatedIdentityRepresentation[] | undefined
  federationLink?: string | undefined
  firstName?: string | undefined
  groups?: string[] | undefined
  id?: string | undefined
  lastName?: string | undefined
  notBefore?: number | undefined
  origin?: string | undefined
  realmRoles?: string[] | undefined
  requiredActions?: string[] | undefined
  self?: string | undefined
  serviceAccountClientId?: string | undefined
  username?: string | undefined
}
type GroupRepresentation = {
  access?: { [x: string]: unknown } | undefined
  attributes?: { [x: string]: unknown } | undefined
  clientRoles?: { [x: string]: unknown } | undefined
  id?: string | undefined
  name?: string | undefined
  path?: string | undefined
  realmRoles?: string[] | undefined
  subGroups?: GroupRepresentation[] | undefined
}
type IdentityProviderMapperRepresentation = {
  config?: { [x: string]: unknown } | undefined
  id?: string | undefined
  identityProviderAlias?: string | undefined
  identityProviderMapper?: string | undefined
  name?: string | undefined
}
type IdentityProviderRepresentation = {
  addReadTokenRoleOnCreate?: boolean | undefined
  alias?: string | undefined
  config?: { [x: string]: unknown } | undefined
  displayName?: string | undefined
  enabled?: boolean | undefined
  firstBrokerLoginFlowAlias?: string | undefined
  internalId?: string | undefined
  linkOnly?: boolean | undefined
  postBrokerLoginFlowAlias?: string | undefined
  providerId?: string | undefined
  storeToken?: boolean | undefined
  trustEmail?: boolean | undefined
}
type RequiredActionProviderRepresentation = {
  alias?: string | undefined
  config?: { [x: string]: unknown } | undefined
  defaultAction?: boolean | undefined
  enabled?: boolean | undefined
  name?: string | undefined
  priority?: number | undefined
  providerId?: string | undefined
}
type RoleRepresentationComposites = {
  client?: { [x: string]: unknown } | undefined
  realm?: string[] | undefined
}
type RoleRepresentation = {
  attributes?: { [x: string]: unknown } | undefined
  clientRole?: boolean | undefined
  composite?: boolean | undefined
  composites?: RoleRepresentationComposites | undefined
  containerId?: string | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type RolesRepresentation = {
  client?: { [x: string]: unknown } | undefined
  realm?: RoleRepresentation[] | undefined
}
type ScopeMappingRepresentation = {
  client?: string | undefined
  clientScope?: string | undefined
  roles?: string[] | undefined
  self?: string | undefined
}
type UserFederationMapperRepresentation = {
  config?: { [x: string]: unknown } | undefined
  federationMapperType?: string | undefined
  federationProviderDisplayName?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type UserFederationProviderRepresentation = {
  changedSyncPeriod?: number | undefined
  config?: { [x: string]: unknown } | undefined
  displayName?: string | undefined
  fullSyncPeriod?: number | undefined
  id?: string | undefined
  lastSync?: number | undefined
  priority?: number | undefined
  providerName?: string | undefined
}
type RealmRepresentation = {
  accessCodeLifespan?: number | undefined
  accessCodeLifespanLogin?: number | undefined
  accessCodeLifespanUserAction?: number | undefined
  accessTokenLifespan?: number | undefined
  accessTokenLifespanForImplicitFlow?: number | undefined
  accountTheme?: string | undefined
  actionTokenGeneratedByAdminLifespan?: number | undefined
  actionTokenGeneratedByUserLifespan?: number | undefined
  adminEventsDetailsEnabled?: boolean | undefined
  adminEventsEnabled?: boolean | undefined
  adminTheme?: string | undefined
  attributes?: { [x: string]: unknown } | undefined
  authenticationFlows?: AuthenticationFlowRepresentation[] | undefined
  authenticatorConfig?: AuthenticatorConfigRepresentation[] | undefined
  browserFlow?: string | undefined
  browserSecurityHeaders?: { [x: string]: unknown } | undefined
  bruteForceProtected?: boolean | undefined
  clientAuthenticationFlow?: string | undefined
  clientScopeMappings?: { [x: string]: unknown } | undefined
  clientScopes?: ClientScopeRepresentation[] | undefined
  clientSessionIdleTimeout?: number | undefined
  clientSessionMaxLifespan?: number | undefined
  clients?: ClientRepresentation[] | undefined
  components?: MultivaluedHashMap | undefined
  defaultDefaultClientScopes?: string[] | undefined
  defaultGroups?: string[] | undefined
  defaultLocale?: string | undefined
  defaultOptionalClientScopes?: string[] | undefined
  defaultRoles?: string[] | undefined
  defaultSignatureAlgorithm?: string | undefined
  directGrantFlow?: string | undefined
  displayName?: string | undefined
  displayNameHtml?: string | undefined
  dockerAuthenticationFlow?: string | undefined
  duplicateEmailsAllowed?: boolean | undefined
  editUsernameAllowed?: boolean | undefined
  emailTheme?: string | undefined
  enabled?: boolean | undefined
  enabledEventTypes?: string[] | undefined
  eventsEnabled?: boolean | undefined
  eventsExpiration?: bigint | undefined
  eventsListeners?: string[] | undefined
  failureFactor?: number | undefined
  federatedUsers?: UserRepresentation[] | undefined
  groups?: GroupRepresentation[] | undefined
  id?: string | undefined
  identityProviderMappers?: IdentityProviderMapperRepresentation[] | undefined
  identityProviders?: IdentityProviderRepresentation[] | undefined
  internationalizationEnabled?: boolean | undefined
  keycloakVersion?: string | undefined
  loginTheme?: string | undefined
  loginWithEmailAllowed?: boolean | undefined
  maxDeltaTimeSeconds?: number | undefined
  maxFailureWaitSeconds?: number | undefined
  minimumQuickLoginWaitSeconds?: number | undefined
  notBefore?: number | undefined
  offlineSessionIdleTimeout?: number | undefined
  offlineSessionMaxLifespan?: number | undefined
  offlineSessionMaxLifespanEnabled?: boolean | undefined
  otpPolicyAlgorithm?: string | undefined
  otpPolicyDigits?: number | undefined
  otpPolicyInitialCounter?: number | undefined
  otpPolicyLookAheadWindow?: number | undefined
  otpPolicyPeriod?: number | undefined
  otpPolicyType?: string | undefined
  otpSupportedApplications?: string[] | undefined
  passwordPolicy?: string | undefined
  permanentLockout?: boolean | undefined
  protocolMappers?: ProtocolMapperRepresentation[] | undefined
  quickLoginCheckMilliSeconds?: bigint | undefined
  realm?: string | undefined
  refreshTokenMaxReuse?: number | undefined
  registrationAllowed?: boolean | undefined
  registrationEmailAsUsername?: boolean | undefined
  registrationFlow?: string | undefined
  rememberMe?: boolean | undefined
  requiredActions?: RequiredActionProviderRepresentation[] | undefined
  resetCredentialsFlow?: string | undefined
  resetPasswordAllowed?: boolean | undefined
  revokeRefreshToken?: boolean | undefined
  roles?: RolesRepresentation | undefined
  scopeMappings?: ScopeMappingRepresentation[] | undefined
  smtpServer?: { [x: string]: unknown } | undefined
  sslRequired?: string | undefined
  ssoSessionIdleTimeout?: number | undefined
  ssoSessionIdleTimeoutRememberMe?: number | undefined
  ssoSessionMaxLifespan?: number | undefined
  ssoSessionMaxLifespanRememberMe?: number | undefined
  supportedLocales?: string[] | undefined
  userFederationMappers?: UserFederationMapperRepresentation[] | undefined
  userFederationProviders?: UserFederationProviderRepresentation[] | undefined
  userManagedAccessAllowed?: boolean | undefined
  users?: UserRepresentation[] | undefined
  verifyEmail?: boolean | undefined
  waitIncrementSeconds?: number | undefined
  webAuthnPolicyAcceptableAaguids?: string[] | undefined
  webAuthnPolicyAttestationConveyancePreference?: string | undefined
  webAuthnPolicyAuthenticatorAttachment?: string | undefined
  webAuthnPolicyAvoidSameAuthenticatorRegister?: boolean | undefined
  webAuthnPolicyCreateTimeout?: number | undefined
  webAuthnPolicyPasswordlessAcceptableAaguids?: string[] | undefined
  webAuthnPolicyPasswordlessAttestationConveyancePreference?: string | undefined
  webAuthnPolicyPasswordlessAuthenticatorAttachment?: string | undefined
  webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister?: boolean | undefined
  webAuthnPolicyPasswordlessCreateTimeout?: number | undefined
  webAuthnPolicyPasswordlessRequireResidentKey?: string | undefined
  webAuthnPolicyPasswordlessRpEntityName?: string | undefined
  webAuthnPolicyPasswordlessRpId?: string | undefined
  webAuthnPolicyPasswordlessSignatureAlgorithms?: string[] | undefined
  webAuthnPolicyPasswordlessUserVerificationRequirement?: string | undefined
  webAuthnPolicyRequireResidentKey?: string | undefined
  webAuthnPolicyRpEntityName?: string | undefined
  webAuthnPolicyRpId?: string | undefined
  webAuthnPolicySignatureAlgorithms?: string[] | undefined
  webAuthnPolicyUserVerificationRequirement?: string | undefined
}
type AuthDetailsRepresentation = {
  clientId?: string | undefined
  ipAddress?: string | undefined
  realmId?: string | undefined
  userId?: string | undefined
}
type AdminEventRepresentation = {
  authDetails?: AuthDetailsRepresentation | undefined
  error?: string | undefined
  operationType?: string | undefined
  realmId?: string | undefined
  representation?: string | undefined
  resourcePath?: string | undefined
  resourceType?: string | undefined
  time?: bigint | undefined
}
type ConfigPropertyRepresentation = {
  defaultValue?: { [x: string]: unknown } | undefined
  helpText?: string | undefined
  label?: string | undefined
  name?: string | undefined
  options?: string[] | undefined
  secret?: boolean | undefined
  type?: string | undefined
}
type AuthenticatorConfigInfoRepresentation = {
  helpText?: string | undefined
  name?: string | undefined
  properties?: ConfigPropertyRepresentation[] | undefined
  providerId?: string | undefined
}
type AuthenticationExecutionRepresentation = {
  authenticator?: string | undefined
  authenticatorConfig?: string | undefined
  authenticatorFlow?: boolean | undefined
  autheticatorFlow?: boolean | undefined
  flowId?: string | undefined
  id?: string | undefined
  parentFlow?: string | undefined
  priority?: number | undefined
  requirement?: string | undefined
}
type AuthenticationExecutionInfoRepresentation = {
  alias?: string | undefined
  authenticationConfig?: string | undefined
  authenticationFlow?: boolean | undefined
  configurable?: boolean | undefined
  displayName?: string | undefined
  flowId?: string | undefined
  id?: string | undefined
  index?: number | undefined
  level?: number | undefined
  providerId?: string | undefined
  requirement?: string | undefined
  requirementChoices?: string[] | undefined
}
type ComponentTypeRepresentation = {
  helpText?: string | undefined
  id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  properties?: ConfigPropertyRepresentation[] | undefined
}
type MappingsRepresentation = {
  clientMappings?: { [x: string]: unknown } | undefined
  realmMappings?: RoleRepresentation[] | undefined
}
type ClientInitialAccessPresentation = {
  count?: number | undefined
  expiration?: number | undefined
  id?: string | undefined
  remainingCount?: number | undefined
  timestamp?: number | undefined
  token?: string | undefined
}
type ClientInitialAccessCreatePresentation = {
  count?: number | undefined
  expiration?: number | undefined
}
type CertificateRepresentation = {
  certificate?: string | undefined
  kid?: string | undefined
  privateKey?: string | undefined
  publicKey?: string | undefined
}
type KeyStoreConfig = {
  format?: string | undefined
  keyAlias?: string | undefined
  keyPassword?: string | undefined
  realmAlias?: string | undefined
  realmCertificate?: boolean | undefined
  storePassword?: string | undefined
}
type AddressClaimSet = {
  country?: string | undefined
  formatted?: string | undefined
  locality?: string | undefined
  postal_code?: string | undefined
  region?: string | undefined
  street_address?: string | undefined
}
type Permission = {
  claims?: { [x: string]: unknown } | undefined
  rsid?: string | undefined
  rsname?: string | undefined
  scopes?: string[] | undefined
}
type AccessTokenAuthorization = { permissions?: Permission[] | undefined }
type AccessTokenCertConf = { 'x5t#S256'?: string | undefined }
type AccessTokenAccess = { roles?: string[] | undefined; verify_caller?: boolean | undefined }
type AccessToken = {
  acr?: string | undefined
  address?: AddressClaimSet | undefined
  'allowed-origins'?: string[] | undefined
  at_hash?: string | undefined
  auth_time?: bigint | undefined
  authorization?: AccessTokenAuthorization | undefined
  azp?: string | undefined
  birthdate?: string | undefined
  c_hash?: string | undefined
  category?: 'INTERNAL' | 'ACCESS' | 'ID' | 'ADMIN' | 'USERINFO' | undefined
  claims_locales?: string | undefined
  cnf?: AccessTokenCertConf | undefined
  email?: string | undefined
  email_verified?: boolean | undefined
  exp?: bigint | undefined
  family_name?: string | undefined
  gender?: string | undefined
  given_name?: string | undefined
  iat?: bigint | undefined
  iss?: string | undefined
  jti?: string | undefined
  locale?: string | undefined
  middle_name?: string | undefined
  name?: string | undefined
  nbf?: bigint | undefined
  nickname?: string | undefined
  nonce?: string | undefined
  otherClaims?: { [x: string]: unknown } | undefined
  phone_number?: string | undefined
  phone_number_verified?: boolean | undefined
  picture?: string | undefined
  preferred_username?: string | undefined
  profile?: string | undefined
  realm_access?: AccessTokenAccess | undefined
  s_hash?: string | undefined
  scope?: string | undefined
  session_state?: string | undefined
  sub?: string | undefined
  'trusted-certs'?: string[] | undefined
  typ?: string | undefined
  updated_at?: bigint | undefined
  website?: string | undefined
  zoneinfo?: string | undefined
}
type ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation = {
  containerId?: string | undefined
  containerName?: string | undefined
  containerType?: string | undefined
  mapperId?: string | undefined
  mapperName?: string | undefined
  protocolMapper?: string | undefined
}
type ManagementPermissionReference = {
  enabled?: boolean | undefined
  resource?: string | undefined
  scopePermissions?: { [x: string]: unknown } | undefined
}
type UserSessionRepresentation = {
  clients?: { [x: string]: unknown } | undefined
  id?: string | undefined
  ipAddress?: string | undefined
  lastAccess?: bigint | undefined
  start?: bigint | undefined
  userId?: string | undefined
  username?: string | undefined
}
type GlobalRequestResult = {
  failedRequests?: string[] | undefined
  successRequests?: string[] | undefined
}
type ComponentRepresentation = {
  config?: MultivaluedHashMap | undefined
  id?: string | undefined
  name?: string | undefined
  parentId?: string | undefined
  providerId?: string | undefined
  providerType?: string | undefined
  subType?: string | undefined
}
type EventRepresentation = {
  clientId?: string | undefined
  details?: { [x: string]: unknown } | undefined
  error?: string | undefined
  ipAddress?: string | undefined
  realmId?: string | undefined
  sessionId?: string | undefined
  time?: bigint | undefined
  type?: string | undefined
  userId?: string | undefined
}
type RealmEventsConfigRepresentation = {
  adminEventsDetailsEnabled?: boolean | undefined
  adminEventsEnabled?: boolean | undefined
  enabledEventTypes?: string[] | undefined
  eventsEnabled?: boolean | undefined
  eventsExpiration?: bigint | undefined
  eventsListeners?: string[] | undefined
}
type KeysMetadataRepresentationKeyMetadataRepresentation = {
  algorithm?: string | undefined
  certificate?: string | undefined
  kid?: string | undefined
  providerId?: string | undefined
  providerPriority?: bigint | undefined
  publicKey?: string | undefined
  status?: string | undefined
  type?: string | undefined
}
type KeysMetadataRepresentation = {
  active?: { [x: string]: unknown } | undefined
  keys?: KeysMetadataRepresentationKeyMetadataRepresentation[] | undefined
}
type PartialImportRepresentation = {
  clients?: ClientRepresentation[] | undefined
  groups?: GroupRepresentation[] | undefined
  identityProviders?: IdentityProviderRepresentation[] | undefined
  ifResourceExists?: string | undefined
  policy?: 'SKIP' | 'OVERWRITE' | 'FAIL' | undefined
  roles?: RolesRepresentation | undefined
  users?: UserRepresentation[] | undefined
}
type TestLdapConnectionRepresentation = {
  action?: string | undefined
  bindCredential?: string | undefined
  bindDn?: string | undefined
  componentId?: string | undefined
  connectionTimeout?: string | undefined
  connectionUrl?: string | undefined
  startTls?: string | undefined
  useTruststoreSpi?: string | undefined
}
type SynchronizationResult = {
  added?: number | undefined
  failed?: number | undefined
  ignored?: boolean | undefined
  removed?: number | undefined
  status?: string | undefined
  updated?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: { input: {}; output: ServerInfoRepresentation; outputFormat: 'json'; status: 200 }
      $post: { input: { json: RealmRepresentation }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/:id/name': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm': {
      $delete: {
        input: { param: { realm: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string } }
        output: RealmRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string } } & { json: RealmRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/admin-events': {
      $delete: {
        input: { param: { realm: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string } } & {
          query: {
            authClient?: string | undefined
            authIpAddress?: string | undefined
            authRealm?: string | undefined
            authUser?: string | undefined
            dateFrom?: string | undefined
            dateTo?: string | undefined
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
    }
  } & {
    '/:realm/attack-detection/brute-force/users': {
      $delete: {
        input: { param: { realm: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/attack-detection/brute-force/users/:userId': {
      $delete: {
        input: { param: { realm: string; userId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; userId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/authenticator-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/client-authenticator-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/config-description/:providerId': {
      $get: {
        input: { param: { realm: string; providerId: string } }
        output: AuthenticatorConfigInfoRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/config/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: AuthenticatorConfigRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & {
          json: AuthenticatorConfigRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/executions': {
      $post: {
        input: { param: { realm: string } } & { json: AuthenticationExecutionRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/executions/:executionId': {
      $delete: {
        input: { param: { realm: string; executionId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; executionId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/executions/:executionId/config': {
      $post: {
        input: { param: { realm: string; executionId: string } } & {
          json: AuthenticatorConfigRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/executions/:executionId/lower-priority': {
      $post: {
        input: { param: { realm: string; executionId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/executions/:executionId/raise-priority': {
      $post: {
        input: { param: { realm: string; executionId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/flows': {
      $get: {
        input: { param: { realm: string } }
        output: AuthenticationFlowRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: AuthenticationFlowRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/flows/:flowAlias/copy': {
      $post: {
        input: { param: { realm: string; flowAlias: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/flows/:flowAlias/executions': {
      $get: {
        input: { param: { realm: string; flowAlias: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { realm: string; flowAlias: string } } & {
          json: AuthenticationExecutionInfoRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/flows/:flowAlias/executions/execution': {
      $post: {
        input: { param: { realm: string; flowAlias: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/flows/:flowAlias/executions/flow': {
      $post: {
        input: { param: { realm: string; flowAlias: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/flows/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: AuthenticationFlowRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: AuthenticationFlowRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/form-action-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/form-providers': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/per-client-config-description': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/register-required-action': {
      $post: {
        input: { param: { realm: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/required-actions': {
      $get: {
        input: { param: { realm: string } }
        output: RequiredActionProviderRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/authentication/required-actions/:alias': {
      $delete: {
        input: { param: { realm: string; alias: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; alias: string } }
        output: RequiredActionProviderRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; alias: string } } & {
          json: RequiredActionProviderRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/required-actions/:alias/lower-priority': {
      $post: {
        input: { param: { realm: string; alias: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/required-actions/:alias/raise-priority': {
      $post: {
        input: { param: { realm: string; alias: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/authentication/unregistered-required-actions': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clear-keys-cache': {
      $post: { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/:realm/clear-realm-cache': {
      $post: { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/:realm/clear-user-cache': {
      $post: { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/:realm/client-description-converter': {
      $post: {
        input: { param: { realm: string } } & { json: string }
        output: ClientRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-registration-policy/providers': {
      $get: {
        input: { param: { realm: string } }
        output: ComponentTypeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes': {
      $get: {
        input: { param: { realm: string } }
        output: ClientScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: ClientScopeRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id1/protocol-mappers/models/:id2': {
      $delete: {
        input: { param: { realm: string; id1: string; id2: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id1: string; id2: string } }
        output: ProtocolMapperRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id1: string; id2: string } } & {
          json: ProtocolMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: ClientScopeRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: ClientScopeRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/protocol-mappers/add-models': {
      $post: {
        input: { param: { realm: string; id: string } } & { json: ProtocolMapperRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/protocol-mappers/models': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string } } & { json: ProtocolMapperRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/protocol-mappers/protocol/:protocol': {
      $get: {
        input: { param: { realm: string; id: string; protocol: string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/scope-mappings': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: MappingsRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/scope-mappings/clients/:client': {
      $delete: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/available': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/scope-mappings/clients/:client/composite': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/scope-mappings/realm': {
      $delete: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/scope-mappings/realm/available': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-scopes/:id/scope-mappings/realm/composite': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/client-session-stats': {
      $get: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            clientId?: string | undefined
            first?: number | undefined
            max?: number | undefined
            search?: boolean | undefined
            viewableOnly?: boolean | undefined
          }
        }
        output: ClientRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: ClientRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients-initial-access': {
      $get: {
        input: { param: { realm: string } }
        output: ClientInitialAccessPresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: ClientInitialAccessCreatePresentation }
        output: ClientInitialAccessPresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients-initial-access/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id1/protocol-mappers/models/:id2': {
      $delete: {
        input: { param: { realm: string; id1: string; id2: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id1: string; id2: string } }
        output: ProtocolMapperRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id1: string; id2: string } } & {
          json: ProtocolMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: ClientRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: ClientRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/certificates/:attr': {
      $get: {
        input: { param: { realm: string; id: string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/certificates/:attr/download': {
      $post: {
        input: { param: { realm: string; id: string; attr: string } } & { json: KeyStoreConfig }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/certificates/:attr/generate': {
      $post: {
        input: { param: { realm: string; id: string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/certificates/:attr/generate-and-download': {
      $post: {
        input: { param: { realm: string; id: string; attr: string } } & { json: KeyStoreConfig }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/certificates/:attr/upload': {
      $post: {
        input: { param: { realm: string; id: string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/certificates/:attr/upload-certificate': {
      $post: {
        input: { param: { realm: string; id: string; attr: string } }
        output: CertificateRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/client-secret': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: CredentialRepresentation
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string } }
        output: CredentialRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/default-client-scopes': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: ClientScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/default-client-scopes/:clientScopeId': {
      $delete: {
        input: { param: { realm: string; id: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/evaluate-scopes/generate-example-access-token': {
      $get: {
        input: { param: { realm: string; id: string } } & {
          query: { scope?: string | undefined; userId?: string | undefined }
        }
        output: AccessToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/evaluate-scopes/protocol-mappers': {
      $get: {
        input: { param: { realm: string; id: string } } & { query: { scope?: string | undefined } }
        output: ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/granted': {
      $get: {
        input: { param: { realm: string; id: string; roleContainerId: string } } & {
          query: { scope?: string | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/evaluate-scopes/scope-mappings/:roleContainerId/not-granted': {
      $get: {
        input: { param: { realm: string; id: string; roleContainerId: string } } & {
          query: { scope?: string | undefined }
        }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/installation/providers/:providerId': {
      $get: {
        input: { param: { realm: string; id: string; providerId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/management/permissions': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: ManagementPermissionReference }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/nodes': {
      $post: {
        input: { param: { realm: string; id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/nodes/:node': {
      $delete: {
        input: { param: { realm: string; id: string; node: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/offline-session-count': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/offline-sessions': {
      $get: {
        input: { param: { realm: string; id: string } } & {
          query: { first?: number | undefined; max?: number | undefined }
        }
        output: UserSessionRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/optional-client-scopes': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: ClientScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/optional-client-scopes/:clientScopeId': {
      $delete: {
        input: { param: { realm: string; id: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/protocol-mappers/add-models': {
      $post: {
        input: { param: { realm: string; id: string } } & { json: ProtocolMapperRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/protocol-mappers/models': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string } } & { json: ProtocolMapperRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/protocol-mappers/protocol/:protocol': {
      $get: {
        input: { param: { realm: string; id: string; protocol: string } }
        output: ProtocolMapperRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/push-revocation': {
      $post: {
        input: { param: { realm: string; id: string } }
        output: GlobalRequestResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/registration-access-token': {
      $post: {
        input: { param: { realm: string; id: string } }
        output: ClientRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/roles': {
      $get: {
        input: { param: { realm: string; id: string } } & {
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
      $post: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/roles/:role-name': {
      $delete: {
        input: { param: { realm: string; id: string; 'role-name': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string; 'role-name': string } }
        output: RoleRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string; 'role-name': string } } & {
          json: RoleRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/roles/:role-name/composites': {
      $delete: {
        input: { param: { realm: string; id: string; 'role-name': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string; 'role-name': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string; 'role-name': string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/roles/:role-name/composites/clients/:client': {
      $get: {
        input: { param: { realm: string; id: string; 'role-name': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/roles/:role-name/composites/realm': {
      $get: {
        input: { param: { realm: string; id: string; 'role-name': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/roles/:role-name/groups': {
      $get: {
        input: { param: { realm: string; id: string; 'role-name': string } } & {
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
    }
  } & {
    '/:realm/clients/:id/roles/:role-name/management/permissions': {
      $get: {
        input: { param: { realm: string; id: string; 'role-name': string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string; 'role-name': string } } & {
          json: ManagementPermissionReference
        }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/roles/:role-name/users': {
      $get: {
        input: { param: { realm: string; id: string; 'role-name': string } } & {
          query: { first?: number | undefined; max?: number | undefined }
        }
        output: UserRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/scope-mappings': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: MappingsRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/scope-mappings/clients/:client': {
      $delete: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/scope-mappings/clients/:client/available': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/scope-mappings/clients/:client/composite': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/scope-mappings/realm': {
      $delete: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/scope-mappings/realm/available': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/scope-mappings/realm/composite': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/service-account-user': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: UserRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/session-count': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/test-nodes-available': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: GlobalRequestResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/clients/:id/user-sessions': {
      $get: {
        input: { param: { realm: string; id: string } } & {
          query: { first?: number | undefined; max?: number | undefined }
        }
        output: UserSessionRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/components': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            name?: string | undefined
            parent?: string | undefined
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
    '/:realm/components/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: ComponentRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: ComponentRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/components/:id/sub-component-types': {
      $get: {
        input: { param: { realm: string; id: string } } & { query: { type?: string | undefined } }
        output: ComponentTypeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/credential-registrators': {
      $get: {
        input: { param: { realm: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/default-default-client-scopes': {
      $get: {
        input: { param: { realm: string } }
        output: ClientScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/default-default-client-scopes/:clientScopeId': {
      $delete: {
        input: { param: { realm: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { realm: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/default-groups': {
      $get: {
        input: { param: { realm: string } }
        output: GroupRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/default-groups/:groupId': {
      $delete: {
        input: { param: { realm: string; groupId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { realm: string; groupId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/default-optional-client-scopes': {
      $get: {
        input: { param: { realm: string } }
        output: ClientScopeRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/default-optional-client-scopes/:clientScopeId': {
      $delete: {
        input: { param: { realm: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { realm: string; clientScopeId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/events': {
      $delete: {
        input: { param: { realm: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string } } & {
          query: {
            client?: string | undefined
            dateFrom?: string | undefined
            dateTo?: string | undefined
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
    }
  } & {
    '/:realm/events/config': {
      $get: {
        input: { param: { realm: string } }
        output: RealmEventsConfigRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string } } & { json: RealmEventsConfigRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/group-by-path/:path': {
      $get: {
        input: { param: { realm: string; path: string } }
        output: GroupRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/groups': {
      $get: {
        input: { param: { realm: string } } & {
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
      $post: {
        input: { param: { realm: string } } & { json: GroupRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/groups/count': {
      $get: {
        input: { param: { realm: string } } & {
          query: { search?: string | undefined; top?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: GroupRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: GroupRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/children': {
      $post: {
        input: { param: { realm: string; id: string } } & { json: GroupRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/management/permissions': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: ManagementPermissionReference }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/members': {
      $get: {
        input: { param: { realm: string; id: string } } & {
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
    '/:realm/groups/:id/role-mappings': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: MappingsRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/role-mappings/clients/:client': {
      $delete: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/role-mappings/clients/:client/available': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/role-mappings/clients/:client/composite': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/role-mappings/realm': {
      $delete: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/role-mappings/realm/available': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/groups/:id/role-mappings/realm/composite': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/identity-provider/import-config': {
      $post: {
        input: { param: { realm: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/identity-provider/instances': {
      $get: {
        input: { param: { realm: string } }
        output: IdentityProviderRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: IdentityProviderRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/identity-provider/instances/:alias': {
      $delete: {
        input: { param: { realm: string; alias: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; alias: string } }
        output: IdentityProviderRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; alias: string } } & {
          json: IdentityProviderRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/identity-provider/instances/:alias/export': {
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
    '/:realm/identity-provider/instances/:alias/management/permissions': {
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
    '/:realm/identity-provider/instances/:alias/mapper-types': {
      $get: {
        input: { param: { realm: string; alias: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/identity-provider/instances/:alias/mappers': {
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
    '/:realm/identity-provider/instances/:alias/mappers/:id': {
      $delete: {
        input: { param: { realm: string; alias: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; alias: string; id: string } }
        output: IdentityProviderMapperRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; alias: string; id: string } } & {
          json: IdentityProviderMapperRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/identity-provider/providers/:provider_id': {
      $get: {
        input: { param: { realm: string; provider_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/keys': {
      $get: {
        input: { param: { realm: string } }
        output: KeysMetadataRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/logout-all': {
      $post: { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/:realm/partial-export': {
      $post: {
        input: { param: { realm: string } } & {
          query: { exportClients?: boolean | undefined; exportGroupsAndRoles?: boolean | undefined }
        }
        output: RealmRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/partialImport': {
      $post: {
        input: { param: { realm: string } } & { json: PartialImportRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/push-revocation': {
      $post: { input: { param: { realm: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/:realm/roles': {
      $get: {
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
      $post: {
        input: { param: { realm: string } } & { json: RoleRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/roles-by-id/:role-id': {
      $delete: {
        input: { param: { realm: string; 'role-id': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; 'role-id': string } }
        output: RoleRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; 'role-id': string } } & { json: RoleRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/roles-by-id/:role-id/composites': {
      $delete: {
        input: { param: { realm: string; 'role-id': string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; 'role-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'role-id': string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/roles-by-id/:role-id/composites/clients/:client': {
      $get: {
        input: { param: { realm: string; 'role-id': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/roles-by-id/:role-id/composites/realm': {
      $get: {
        input: { param: { realm: string; 'role-id': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/roles-by-id/:role-id/management/permissions': {
      $get: {
        input: { param: { realm: string; 'role-id': string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; 'role-id': string } } & {
          json: ManagementPermissionReference
        }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/roles/:role-name': {
      $delete: {
        input: { param: { realm: string; 'role-name': string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; 'role-name': string } }
        output: RoleRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; 'role-name': string } } & { json: RoleRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/roles/:role-name/composites': {
      $delete: {
        input: { param: { realm: string; 'role-name': string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; 'role-name': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; 'role-name': string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/roles/:role-name/composites/clients/:client': {
      $get: {
        input: { param: { realm: string; 'role-name': string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/roles/:role-name/composites/realm': {
      $get: {
        input: { param: { realm: string; 'role-name': string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/roles/:role-name/groups': {
      $get: {
        input: { param: { realm: string; 'role-name': string } } & {
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
    }
  } & {
    '/:realm/roles/:role-name/management/permissions': {
      $get: {
        input: { param: { realm: string; 'role-name': string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; 'role-name': string } } & {
          json: ManagementPermissionReference
        }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/roles/:role-name/users': {
      $get: {
        input: { param: { realm: string; 'role-name': string } } & {
          query: { first?: number | undefined; max?: number | undefined }
        }
        output: UserRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/sessions/:session': {
      $delete: {
        input: { param: { realm: string; session: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/testLDAPConnection': {
      $post: {
        input: { param: { realm: string } } & { json: TestLdapConnectionRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/testSMTPConnection': {
      $post: {
        input: { param: { realm: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/user-storage/:id/name': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/user-storage/:id/remove-imported-users': {
      $post: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/user-storage/:id/sync': {
      $post: {
        input: { param: { realm: string; id: string } } & { query: { action?: string | undefined } }
        output: SynchronizationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/user-storage/:id/unlink-users': {
      $post: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/user-storage/:parentId/mappers/:id/sync': {
      $post: {
        input: { param: { realm: string; parentId: string; id: string } } & {
          query: { direction?: string | undefined }
        }
        output: SynchronizationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            briefRepresentation?: boolean | undefined
            email?: string | undefined
            first?: number | undefined
            firstName?: string | undefined
            lastName?: string | undefined
            max?: number | undefined
            search?: string | undefined
            username?: string | undefined
          }
        }
        output: UserRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string } } & { json: UserRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users-management-permissions': {
      $get: {
        input: { param: { realm: string } }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string } } & { json: ManagementPermissionReference }
        output: ManagementPermissionReference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/count': {
      $get: {
        input: { param: { realm: string } } & {
          query: {
            email?: string | undefined
            firstName?: string | undefined
            lastName?: string | undefined
            search?: string | undefined
            username?: string | undefined
          }
        }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id': {
      $delete: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: UserRepresentation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string } } & { json: UserRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/configured-user-storage-credential-types': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/consents': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/consents/:client': {
      $delete: {
        input: { param: { realm: string; id: string; client: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/credentials': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: CredentialRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/credentials/:credentialId': {
      $delete: {
        input: { param: { realm: string; id: string; credentialId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/credentials/:credentialId/moveAfter/:newPreviousCredentialId': {
      $post: {
        input: {
          param: {
            realm: string
            id: string
            credentialId: string
            newPreviousCredentialId: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/credentials/:credentialId/moveToFirst': {
      $post: {
        input: { param: { realm: string; id: string; credentialId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/credentials/:credentialId/userLabel': {
      $put: {
        input: { param: { realm: string; id: string; credentialId: string } } & { json: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/disable-credential-types': {
      $put: {
        input: { param: { realm: string; id: string } } & { json: string[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/execute-actions-email': {
      $put: {
        input: { param: { realm: string; id: string } } & {
          query: {
            client_id?: string | undefined
            lifespan?: number | undefined
            redirect_uri?: string | undefined
          }
        } & { json: string[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/federated-identity': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: FederatedIdentityRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/federated-identity/:provider': {
      $delete: {
        input: { param: { realm: string; id: string; provider: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string; provider: string } } & {
          json: FederatedIdentityRepresentation
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/groups': {
      $get: {
        input: { param: { realm: string; id: string } } & {
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
    }
  } & {
    '/:realm/users/:id/groups/count': {
      $get: {
        input: { param: { realm: string; id: string } } & { query: { search?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/groups/:groupId': {
      $delete: {
        input: { param: { realm: string; id: string; groupId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { realm: string; id: string; groupId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/impersonation': {
      $post: {
        input: { param: { realm: string; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/logout': {
      $post: {
        input: { param: { realm: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/offline-sessions/:clientId': {
      $get: {
        input: { param: { realm: string; id: string; clientId: string } }
        output: UserSessionRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/reset-password': {
      $put: {
        input: { param: { realm: string; id: string } } & { json: CredentialRepresentation }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/role-mappings': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: MappingsRepresentation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/role-mappings/clients/:client': {
      $delete: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string; client: string } } & {
          json: RoleRepresentation[]
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/role-mappings/clients/:client/available': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/role-mappings/clients/:client/composite': {
      $get: {
        input: { param: { realm: string; id: string; client: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/role-mappings/realm': {
      $delete: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { realm: string; id: string } } & { json: RoleRepresentation[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/role-mappings/realm/available': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/role-mappings/realm/composite': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: RoleRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/send-verify-email': {
      $put: {
        input: { param: { realm: string; id: string } } & {
          query: { client_id?: string | undefined; redirect_uri?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:realm/users/:id/sessions': {
      $get: {
        input: { param: { realm: string; id: string } }
        output: UserSessionRepresentation[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
