type AgentBlueprint = {
  object: 'agent_blueprint'
  id: string
  name: string
  description: string | null
  permissions: string[]
  scoped_permissions: { slug: string; instance_types: ('delegated' | 'autonomous')[] }[]
  invocable_by: { role_slugs: string[]; organization_ids: string[] }
  invocable_as: { instance_types: ('delegated' | 'autonomous')[] }
  session_settings: {
    max_age_seconds: number
    access_token_ttl_seconds: number
    refresh_token_ttl_seconds: number
  }
  created_at: string
  updated_at: string
}
type ErrorBodyWithCode = { code: string; message: string }
type PaginationOrderInput = 'normal' | 'desc' | 'asc'
type ErrorBody = { message: string }
type AgentToken = {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  refresh_token: string
  agent_instance_id: string
  new_instance: boolean
  agent_instance_session_id: string
  permissions: string[]
}
type AgentTokenValidation = {
  valid: true
  agent_instance_id: string
  agent_instance_session_id: string
  organization_id: string
  permissions: string[]
  intent: string | null
  acting_user_id: string | null
  session_expires_at: string
}
type ClaimViewResponse = {
  id: string
  status: 'unverified' | 'verified' | 'expired' | 'revoked'
  user_code: string
  organizations: { id: string; name: string }[]
}
type OrganizationSelectionRequiredErrorBodyWithOrganization = { id: string; name: string }
type OrganizationSelectionRequiredErrorBodyWithOrganizations = {
  code: 'organization_selection_required'
  message: string
  organizations: OrganizationSelectionRequiredErrorBodyWithOrganization[]
}
type EmailAlreadyInUseErrorBody = { code: 'email_already_in_use'; message: string }
type AlreadyClaimedErrorBody = { code: 'already_claimed'; message: string }
type AgentCredentialValidation = {
  valid: boolean
  registration_id: string | null
  expires_at: string | null
}
type AgentInstance = {
  object: 'agent_instance'
  id: string
  agent_blueprint_id: string
  organization_id: string
  organization_membership_id: string | null
  type: 'delegated' | 'autonomous'
  created_at: string
  updated_at: string
}
type AgentRegistration = {
  id: string
  agent_identity: {
    id: string
    userland_user_id: string | null
    created_at: string
    updated_at: string
  }
  organization_id: string
  status: 'unverified' | 'verified' | 'expired' | 'revoked'
  revoked_at: string | null
  kind: 'anonymous' | 'service_auth' | 'identity_assertion'
  claim: {
    id: string
    claim_completion: {
      id: string
      created_at: string
      updated_at: string
      expires_at: string
      claimed_at: string
    } | null
    created_at: string
    updated_at: string
    expires_at: string
  } | null
  created_at: string
  updated_at: string
}
type AgentInstanceSession = {
  object: 'agent_instance_session'
  id: string
  agent_instance_id: string
  status: 'active' | 'revoked' | 'expired'
  expires_at: string
  revoked_at: string | null
  created_at: string
  updated_at: string
}
type ErrorBodyWithCodeFieldError = { code: string; field: string }
type ErrorBodyWithCodeFieldErrors = { message: string; errors: ErrorBodyWithCodeFieldError[] }
type ValidateApiKeyDtoInput = { value: string }
type ApiKey = {
  object: 'api_key'
  id: string
  owner:
    | { type: 'organization'; id: string }
    | { type: 'user'; id: string; organization_id: string }
  name: string
  obfuscated_value: string
  last_used_at: string | null
  expires_at: string | null
  permissions: string[]
  created_at: string
  updated_at: string
}
type ApiKeyValidationResponse = {
  api_key: ApiKey | null
  agent_registration_id?: string | undefined
}
type ExpireApiKeyDtoInput = { expires_at?: string | null }
type AuditLogSchemaJson = {
  object: 'audit_log_schema'
  version: number
  actor?: { metadata: { [key: string]: any } } | undefined
  targets: { type: string; metadata?: { [key: string]: any } | undefined }[]
  metadata?: { [key: string]: any } | undefined
  created_at: string
}
type AuditLogActionJson = {
  object: 'audit_log_action'
  name: string
  schema: AuditLogSchemaJson
  created_at: string
  updated_at: string
}
type AuditLogSchemaActorDtoInput = { metadata: { [key: string]: unknown } }
type AuditLogSchemaTargetDtoInput = { type: string; metadata?: { [key: string]: unknown } }
type AuditLogSchemaDtoInput = {
  actor?: AuditLogSchemaActorDtoInput
  targets: AuditLogSchemaTargetDtoInput[]
  metadata?: { [key: string]: unknown }
}
type AuditLogEventActorDtoInput = {
  id: string
  type: string
  name?: string
  metadata?: { [key: string]: unknown }
}
type AuditLogEventTargetDtoInput = {
  id: string
  type: string
  name?: string
  metadata?: { [key: string]: unknown }
}
type AuditLogEventContextDtoInput = { location: string; user_agent?: string }
type AuditLogEventDtoInput = {
  action: string
  occurred_at?: string
  actor: AuditLogEventActorDtoInput
  targets: AuditLogEventTargetDtoInput[]
  context: AuditLogEventContextDtoInput
  metadata?: { [key: string]: unknown }
  version?: number
}
type AuditLogEventIngestionDtoInput = { organization_id: string; event: AuditLogEventDtoInput }
type AuditLogEventCreateResponse = { success: boolean }
type ErrorBodyWithCodeInstancePathError = { instancePath: string }
type ErrorBodyWithCodeInstancePathErrors = {
  errors: ErrorBodyWithCodeInstancePathError[]
  message: string
  code: string
}
type AuditLogExportCreationDtoInput = {
  organization_id: string
  range_start: string
  range_end: string
  actions?: string[]
  actors?: string[]
  actor_names?: string[]
  actor_ids?: string[]
  targets?: string[]
}
type AuditLogExportJson = {
  object: 'audit_log_export'
  id: string
  state: 'pending' | 'ready' | 'error' | 'expired'
  url?: (string | null) | undefined
  created_at: string
  updated_at: string
}
type ErrorBodyWithErrorMessageList = { message: string[]; error: string }
type AuthenticationChallenge = {
  object: 'authentication_challenge'
  id: string
  expires_at?: string | undefined
  code?: string | undefined
  authentication_factor_id: string
  created_at: string
  updated_at: string
}
type AuthenticationChallengeVerifyResponse = { challenge: AuthenticationChallenge; valid: boolean }
type TooManyFailedVerificationAttemptsErrorBodyWithRetryAfter = {
  code: 'too_many_failed_verification_attempts'
  message: string
  retry_after: number
}
type AuthenticationFactorEnrolled = {
  object: 'authentication_factor'
  id: string
  type: 'generic_otp' | 'sms' | 'totp' | 'webauthn'
  user_id?: string | undefined
  sms?: { phone_number: string } | undefined
  totp?: { issuer: string; user: string; secret: string; qr_code: string; uri: string } | undefined
  created_at: string
  updated_at: string
}
type AuthenticationFactor = {
  object: 'authentication_factor'
  id: string
  type: 'generic_otp' | 'sms' | 'totp' | 'webauthn'
  user_id?: string | undefined
  sms?: { phone_number: string } | undefined
  totp?: { issuer: string; user: string } | undefined
  created_at: string
  updated_at: string
}
type ChallengeAuthenticationFactorDtoInput = { sms_template?: string }
type RateLimitExceededErrorBodyWithRetryAfter = {
  code: 'rate_limit_exceeded'
  message: string
  retry_after: number
}
type SmsChallengeRateLimitedErrorBody = { code: 'sms_challenge_rate_limited'; message: string }
type SmsChallengeQuotaReachedErrorBody = { code: 'sms_challenge_quota_reached'; message: string }
type UserObjectInput = {
  id: string
  email: string
  first_name?: string
  last_name?: string
  name?: string
  metadata?: { [key: string]: string }
}
type UserConsentOptionInput = {
  claim: string
  type: 'enum'
  label: string
  choices: { value?: string; label?: string }[]
}
type UserManagementLoginRequestInput = {
  external_auth_id: string
  user: UserObjectInput
  user_consent_options?: UserConsentOptionInput[]
}
type ExternalAuthCompleteResponse = { redirect_uri: string }
type ExternalAuthSessionAlreadyCompletedErrorBody = {
  code: 'external_auth_session_already_completed'
  message: string
}
type UserConsentOptionsNotSupportedErrorBody = {
  code: 'user_consent_options_not_supported'
  message: string
}
type EmailChangeNotAllowedErrorBody = { code: 'email_change_not_allowed'; message: string }
type EmailNotAvailableErrorBody = { code: 'email_not_available'; message: string }
type InvalidEmailErrorBody = { code: 'invalid_email'; message: string }
type ErrorBodyWithError = { error: string; message: string }
type SlimRole = { slug: string }
type GroupRoleAssignment = {
  object: 'group_role_assignment'
  id: string
  group_id: string
  role: SlimRole
  resource: { id: string; external_id: string; resource_type_slug: string }
  created_at: string
  updated_at: string
}
type GroupRoleAssignmentList = {
  object: 'list'
  data: GroupRoleAssignment[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateGroupRoleAssignmentDtoInput = {
  role_slug: string
  resource_id?: string
  resource_external_id?: string
  resource_type_slug?: string
}
type ReplaceGroupRoleAssignmentEntryDtoInput = {
  role_slug: string
  resource_id?: string
  resource_external_id?: string
  resource_type_slug?: string
}
type PatchGroupRoleAssignmentsDtoInput = {
  add?: ReplaceGroupRoleAssignmentEntryDtoInput[]
  remove?: ReplaceGroupRoleAssignmentEntryDtoInput[]
}
type ReplaceGroupRoleAssignmentsDtoInput = {
  role_assignments: ReplaceGroupRoleAssignmentEntryDtoInput[]
}
type DeleteGroupRoleAssignmentsByCriteriaDtoInput = {
  role_slug: string
  resource_id?: string
  resource_external_id?: string
  resource_type_slug?: string
}
type CheckAuthorizationDtoInput = { permission_slug: string } & (
  | { resource_id: string }
  | { resource_external_id: string; resource_type_slug: string }
)
type AuthorizationCheck = { authorized: boolean }
type AuthorizationResource = {
  object: 'authorization_resource'
  name: string
  description: string | null
  organization_id: string
  parent_resource_id: string | null
  id: string
  external_id: string
  resource_type_slug: string
  created_at: string
  updated_at: string
}
type AuthorizationResourceList = {
  object: 'list'
  data: AuthorizationResource[]
  list_metadata: { before: string | null; after: string | null }
}
type AuthorizationPermission = {
  object: 'permission'
  id: string
  slug: string
  name: string
  description: string | null
  system: boolean
  resource_type_slug: string
  created_at: string
  updated_at: string
}
type AuthorizationPermissionList = {
  object: 'list'
  data: AuthorizationPermission[]
  list_metadata: { before: string | null; after: string | null }
}
type UserRoleAssignment = {
  object: 'role_assignment'
  id: string
  organization_membership_id: string
  role: SlimRole
  resource: { id: string; external_id: string; resource_type_slug: string }
  source: {
    type: 'direct' | 'group'
    group_role_assignment_id: string | null
    group: { id: string; name: string } | null
  }
  created_at: string
  updated_at: string
}
type UserRoleAssignmentList = {
  object: 'list'
  data: UserRoleAssignment[]
  list_metadata: { before: string | null; after: string | null }
}
type AssignRoleDtoInput = { role_slug: string } & (
  | { resource_id: string }
  | { resource_external_id: string; resource_type_slug: string }
)
type PatchRoleAssignmentEntryDtoInput = { role_slug: string } & (
  | { resource_id: string }
  | { resource_external_id: string; resource_type_slug: string }
)
type PatchRoleAssignmentsDtoInput = {
  add?: PatchRoleAssignmentEntryDtoInput[]
  remove?: PatchRoleAssignmentEntryDtoInput[]
}
type RoleAssignmentUpdateOverlapErrorBody = {
  code: 'role_assignment_update_overlap'
  message: string
}
type RemoveRoleDtoInput = { role_slug: string } & (
  | { resource_id: string }
  | { resource_external_id: string; resource_type_slug: string }
)
type CreateOrganizationRoleDtoInput = {
  slug?: string
  name: string
  description?: string | null
  resource_type_slug?: string
}
type Role = {
  slug: string
  object: 'role'
  id: string
  name: string
  description: string | null
  type: 'EnvironmentRole' | 'OrganizationRole'
  resource_type_slug: string
  permissions: string[]
  created_at: string
  updated_at: string
}
type RoleList = { object: 'list'; data: Role[] }
type UpdateOrganizationRoleDtoInput = { name?: string; description?: string | null }
type SetRolePermissionsDtoInput = { permissions: string[] }
type AddRolePermissionDtoInput = { slug: string }
type UpdateAuthorizationResourceDtoInput = { name?: string; description?: string | null } & (
  | { [key: string]: unknown }
  | { parent_resource_id: string }
  | { parent_resource_external_id: string; parent_resource_type_slug: string }
)
type UserlandUser = {
  object: 'user'
  id: string
  first_name: string | null
  last_name: string | null
  name?: (string | null) | undefined
  profile_picture_url: string | null
  email: string
  email_verified: boolean
  external_id: string | null
  metadata?: { [key: string]: string } | undefined
  last_sign_in_at: string | null
  locale?: (string | null) | undefined
  created_at: string
  updated_at: string
}
type UserlandUserOrganizationMembershipBaseWithUser = {
  object: 'organization_membership'
  id: string
  user_id: string
  organization_id: string
  status: 'active' | 'inactive' | 'pending'
  directory_managed: boolean
  organization_name?: string | undefined
  custom_attributes?: { [key: string]: any } | undefined
  created_at: string
  updated_at: string
  user: UserlandUser
}
type UserlandUserOrganizationMembershipBaseWithUserList = {
  object: 'list'
  data: UserlandUserOrganizationMembershipBaseWithUser[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateAuthorizationPermissionDtoInput = {
  slug: string
  name: string
  description?: string | null
  resource_type_slug?: string
}
type UpdateAuthorizationPermissionDtoInput = { name?: string; description?: string | null }
type CreateAuthorizationResourceDtoInput = {
  external_id: string
  name: string
  description?: string | null
  resource_type_slug: string
  organization_id: string
} & (
  | { [key: string]: unknown }
  | { parent_resource_id: string | null }
  | { parent_resource_external_id: string; parent_resource_type_slug: string }
)
type CreateRoleDtoInput = {
  slug: string
  name: string
  description?: string | null
  resource_type_slug?: string
}
type UpdateRoleDtoInput = { name?: string; description?: string | null }
type ClientApiTokenDtoInput = { organization_id: string; user_id: string }
type ClientApiTokenResponse = { token: string }
type ConnectApplication = {
  object: 'connect_application'
  id: string
  client_id: string
  description: string | null
  name: string
  scopes: string[]
  created_at: string
  updated_at: string
} & (
  | ({
      application_type: 'oauth'
      redirect_uris: { uri: string; default: boolean }[]
      cors_origins: string[]
      uses_pkce: boolean
    } & (
      | { is_first_party: true }
      | { is_first_party: false; was_dynamically_registered: false; organization_id: string }
      | { is_first_party: false; was_dynamically_registered: true }
    ))
  | { application_type: 'm2m'; organization_id: string }
)
type ConnectApplicationList = {
  object: 'list'
  data: ConnectApplication[]
  list_metadata: { before: string | null; after: string | null }
}
type RedirectUriDtoInput = { uri: string; default?: boolean | null }
type CreateOAuthApplicationDtoInput = {
  name: string
  application_type: 'oauth'
  description?: string | null
  scopes?: string[] | null
  redirect_uris?: RedirectUriDtoInput[] | null
  cors_origins?: string[] | null
  uses_pkce?: boolean | null
  is_first_party: boolean
  organization_id?: string | null
}
type CreateM2MApplicationDtoInput = {
  name: string
  application_type: 'm2m'
  description?: string | null
  scopes?: string[] | null
  organization_id: string
}
type UpdateOAuthApplicationDtoInput = {
  name?: string
  description?: string | null
  scopes?: string[] | null
  redirect_uris?: RedirectUriDtoInput[] | null
  cors_origins?: string[] | null
}
type CreateApplicationSecretDtoInput = { [key: string]: unknown }
type NewConnectApplicationSecret = {
  object: 'connect_application_secret'
  id: string
  secret_hint: string
  last_used_at: string | null
  created_at: string
  updated_at: string
  secret: string
}
type CreateConnectionStandardAttributesDtoInput = {
  idp_id?: string
  email?: string
  first_name?: string
  last_name?: string
  groups?: string | null
  name?: string | null
}
type CreateConnectionAttributeMapsDtoInput = {
  standard_attributes?: CreateConnectionStandardAttributesDtoInput
  custom_attributes?: { [key: string]: string }
}
type CreateConnectionKeyPairDtoInput = { key: string; cert: string }
type CreateConnectionSamlOptionsDtoInput = {
  idp_metadata_url?: string
  acs_url?: string
  sp_entity_id?: string
  idp_entity_id?: string
  idp_sso_url?: string
  idp_signing_certs?: string[]
  sp_signing_key_pair?: CreateConnectionKeyPairDtoInput
  sp_encryption_key_pairs?: CreateConnectionKeyPairDtoInput[]
}
type CreateConnectionOidcOptionsDtoInput = {
  discovery_endpoint: string
  client_id: string
  client_secret?: string
  redirect_uri?: string
  pkce?: boolean
  token_authentication_method?: 'client_secret_post' | 'client_secret_basic' | 'private_key_jwt'
  jwt_signing_key_pair?: CreateConnectionKeyPairDtoInput
  id_token_signature_algorithm?:
    | 'ES256'
    | 'ES384'
    | 'ES512'
    | 'EdDSA'
    | 'HS256'
    | 'HS384'
    | 'HS512'
    | 'PS256'
    | 'PS384'
    | 'PS512'
    | 'RS256'
    | 'RS384'
    | 'RS512'
  fetch_user_info?: boolean
}
type CreateConnectionDtoInput = {
  organization_id: string
  name?: string
  external_id?: string
  connection_type?: string
  attribute_maps?: CreateConnectionAttributeMapsDtoInput
} & (
  | { saml_options: CreateConnectionSamlOptionsDtoInput }
  | { oidc_options: CreateConnectionOidcOptionsDtoInput }
)
type Connection = {
  object: 'connection'
  id: string
  organization_id?: string | undefined
  connection_type:
    | 'Pending'
    | 'ADFSSAML'
    | 'AdpOidc'
    | 'AppleOAuth'
    | 'Auth0Migration'
    | 'Auth0SAML'
    | 'AzureSAML'
    | 'BitbucketOAuth'
    | 'CasSAML'
    | 'ClassLinkSAML'
    | 'CleverOIDC'
    | 'CloudflareSAML'
    | 'CyberArkSAML'
    | 'DuoSAML'
    | 'EntraIdOIDC'
    | 'GenericOIDC'
    | 'GenericSAML'
    | 'GitHubOAuth'
    | 'GitLabOAuth'
    | 'GoogleOAuth'
    | 'GoogleOIDC'
    | 'GoogleSAML'
    | 'IntuitOAuth'
    | 'JumpCloudSAML'
    | 'KeycloakSAML'
    | 'LastPassSAML'
    | 'LinkedInOAuth'
    | 'LoginGovOidc'
    | 'MagicLink'
    | 'MicrosoftOAuth'
    | 'MiniOrangeSAML'
    | 'NetIqSAML'
    | 'OktaOIDC'
    | 'OktaSAML'
    | 'OneLoginSAML'
    | 'OracleSAML'
    | 'PingFederateSAML'
    | 'PingOneSAML'
    | 'RipplingSAML'
    | 'SalesforceSAML'
    | 'ShibbolethGenericSAML'
    | 'ShibbolethSAML'
    | 'SimpleSamlPhpSAML'
    | 'SalesforceOAuth'
    | 'SlackOAuth'
    | 'TestIdp'
    | 'VercelMarketplaceOAuth'
    | 'VercelOAuth'
    | 'VMwareSAML'
    | 'XeroOAuth'
  name: string
  state: 'requires_type' | 'draft' | 'active' | 'validating' | 'inactive' | 'deleting'
  status: 'linked' | 'unlinked'
  domains: { id: string; object: 'connection_domain'; domain: string }[]
  created_at: string
  updated_at: string
}
type IdpMetadataFetchFailedErrorBody = { code: 'idp_metadata_fetch_failed'; message: string }
type ConnectionCouldNotBeVerifiedErrorBody = {
  code: 'connection_could_not_be_verified'
  message: string
}
type InvalidIdpSsoUrlErrorBody = { code: 'invalid_idp_sso_url'; message: string }
type ConnectionList = {
  object: 'list'
  data: Connection[]
  list_metadata: { before: string | null; after: string | null }
}
type SamlIdpSigningCertificate = {
  object: 'saml_idp_signing_certificate'
  id: string
  value: string
  not_before: string | null
  not_after: string | null
  created_at: string
}
type SamlIdpSigningCertificateList = { object: 'list'; data: SamlIdpSigningCertificate[] }
type CreateSamlIdpSigningCertificateDtoInput = { value: string }
type SamlSpEncryptionCertificate = {
  object: 'saml_sp_encryption_certificate'
  id: string
  value: string
  not_before: string | null
  not_after: string | null
  created_at: string
}
type SamlSpEncryptionCertificateList = { object: 'list'; data: SamlSpEncryptionCertificate[] }
type SamlSpSigningCertificate = {
  object: 'saml_sp_signing_certificate'
  id: string
  value: string
  not_before: string | null
  not_after: string | null
  created_at: string
}
type PatchConnectionStandardAttributesDtoInput = {
  idp_id?: string
  email?: string
  first_name?: string
  last_name?: string
  groups?: string | null
  name?: string | null
}
type PatchConnectionAttributeMapsDtoInput = {
  standard_attributes?: PatchConnectionStandardAttributesDtoInput
  custom_attributes?: { [key: string]: string | null }
}
type PatchConnectionSamlOptionsDtoInput = {
  idp_metadata_url?: string | null
  acs_url?: string | null
  sp_entity_id?: string | null
  idp_entity_id?: string
  idp_sso_url?: string
}
type PatchConnectionOidcOptionsDtoInput = {
  discovery_endpoint?: string
  client_id?: string
  client_secret?: string
  redirect_uri?: string | null
  pkce?: boolean
  token_authentication_method?: 'client_secret_post' | 'client_secret_basic' | 'private_key_jwt'
  id_token_signature_algorithm?:
    | 'ES256'
    | 'ES384'
    | 'ES512'
    | 'EdDSA'
    | 'HS256'
    | 'HS384'
    | 'HS512'
    | 'PS256'
    | 'PS384'
    | 'PS512'
    | 'RS256'
    | 'RS384'
    | 'RS512'
  fetch_user_info?: boolean
}
type PatchConnectionDtoInput = {
  name?: string
  external_id?: string | null
  connection_type?: string
  attribute_maps?: PatchConnectionAttributeMapsDtoInput
} & (
  | { [key: string]: unknown }
  | { saml_options: PatchConnectionSamlOptionsDtoInput }
  | { oidc_options: PatchConnectionOidcOptionsDtoInput }
)
type ConnectionTypeNotUpdatableErrorBody = {
  code: 'connection_type_not_updatable'
  message: string
}
type DataIntegrationCredentialsDtoInput = {
  type: 'custom' | 'organization'
  client_id?: string
  client_secret?: string
}
type ApiKeyInstallationDtoInput = { secret: string; user_id: string; organization_id?: string }
type CustomProviderDefinitionDtoInput = {
  name: string
  authorization_url?: string
  token_url?: string
  refresh_token_url?: string | null
  pkce_enabled?: boolean
  request_scope_separator?: string
  scopes_required?: boolean
  client_secret_required?: boolean
  additional_authorization_parameters?: { [key: string]: string }
  token_body_content_type?: string
  authenticate_via?: 'request_body' | 'basic_auth_header'
}
type CreateDataIntegrationDtoInput = {
  provider: string
  ownership?: 'user' | 'organization'
  description?: string | null
  enabled?: boolean
  scopes?: string[] | null
  auth_methods?: ('oauth' | 'api_key' | 'client_credentials')[]
  config?: { [key: string]: string }
  credentials?: DataIntegrationCredentialsDtoInput
  api_key?: ApiKeyInstallationDtoInput
  custom_provider?: CustomProviderDefinitionDtoInput
}
type DataIntegration = {
  object: 'data_integration'
  id: string
  slug: string
  integration_type: string
  ownership: 'user' | 'organization'
  description: string | null
  enabled: boolean
  state: 'valid' | 'invalid' | 'requested'
  scopes: string[] | null
  redirect_uri: string
  auth_methods: ('oauth' | 'api_key' | 'client_credentials')[]
  credentials: {
    type: 'custom' | 'organization'
    client_id: string | null
    redacted_client_secret: string | null
  } | null
  installation: {
    id: string
    connection_role: 'compatibility' | 'standard'
    account_identifier: string | null
    account_display_name: string | null
    user_id: string | null
    organization_id: string | null
    api_key_last_4: string | null
  } | null
  config: { [key: string]: string }
  custom_provider: {
    name: string
    authorization_url: string | null
    token_url: string | null
    refresh_token_url: string | null
    pkce_enabled: boolean
    request_scope_separator: string
    scopes_required: boolean
    client_secret_required: boolean
    additional_authorization_parameters: { [key: string]: string }
    token_body_content_type: string
    authenticate_via: 'request_body' | 'basic_auth_header'
  } | null
  created_at: string
  updated_at: string
}
type DataIntegrationList = {
  object: 'list'
  data: DataIntegration[]
  list_metadata: { before: string | null; after: string | null }
}
type ConnectedAccount = {
  object: 'connected_account'
  id: string
  connection_role: 'compatibility' | 'standard'
  account_identifier: string | null
  account_display_name: string | null
  user_id: string | null
  organization_id: string | null
  scopes: string[]
  auth_method?: 'oauth' | 'api_key' | 'client_credentials' | undefined
  api_key_last_4?: (string | null) | undefined
  client_id?: (string | null) | undefined
  client_secret_last_4?: (string | null) | undefined
  config?: { [key: string]: string } | undefined
  state: 'connected' | 'needs_reauthorization' | 'disconnected'
  established_by_user_id?: (string | null) | undefined
  state_reason?: ('establishing_member_membership_ended' | null) | undefined
  created_at: string
  updated_at: string
  warnings?: { code: 'duplicate_account_display_name'; message: string }[] | undefined
}
type DataIntegrationFinishConnectionResponse = { connected_account: ConnectedAccount }
type ConnectionFinishErrorBody = {
  code:
    | 'invalid_connect_code'
    | 'authorization_code_exchange_error'
    | 'authorization_state_expired'
    | 'auth_method_mismatch'
    | 'concurrent_request'
    | 'connected_account_limit_reached'
    | 'connected_account_not_found'
    | 'installation_failed'
    | 'invalid_authorization_url'
    | 'invalid_client_id'
    | 'invalid_data_integration'
    | 'missing_access_token'
    | 'missing_code'
    | 'multiple_connections_unavailable'
    | 'provider_error'
    | 'reauthorization_needed'
    | 'target_deleted'
    | 'unexpected_response_format'
  message: string
}
type ErrorBodyWithMessageOrMessageList = { message: string | string[] }
type UpdateCustomProviderDefinitionDtoInput = {
  name?: string
  authorization_url?: string
  token_url?: string
  refresh_token_url?: string | null
  pkce_enabled?: boolean
  request_scope_separator?: string
  scopes_required?: boolean
  client_secret_required?: boolean
  additional_authorization_parameters?: { [key: string]: string }
  token_body_content_type?: string
  authenticate_via?: 'request_body' | 'basic_auth_header'
}
type UpdateDataIntegrationDtoInput = {
  description?: string | null
  enabled?: boolean
  scopes?: string[] | null
  credentials?: DataIntegrationCredentialsDtoInput
  api_key?: ApiKeyInstallationDtoInput
  custom_provider?: UpdateCustomProviderDefinitionDtoInput
}
type ConnectionCreationNotFoundErrorBody = {
  code: 'multiple_connections_unavailable' | 'entity_not_found'
  message: string
}
type ConnectionCreationConflictErrorBody = {
  code: 'connected_account_limit_reached' | 'idempotency_key_conflict'
  message: string
}
type EntityNotFoundErrorBody = { code: 'entity_not_found'; message: string }
type AccountSelectionRequiredErrorBody = { code: 'account_selection_required'; message: string }
type AuthMethodMismatchErrorBody = { code: 'auth_method_mismatch'; message: string }
type DataIntegrationAuthorizeUrlResponse = {
  url: string
  state: string
  completion?: 'finish_required' | undefined
}
type AuthorizationUrlRequestErrorBody = {
  code: 'invalid_return_to' | 'return_to_requires_exact_match' | 'connect_finish_unavailable'
  message: string
}
type AuthorizationUrlNotFoundErrorBody = {
  code: 'multiple_connections_unavailable' | 'connected_account_not_found' | 'entity_not_found'
  message: string
}
type ConnectedAccountLimitReachedErrorBody = {
  code: 'connected_account_limit_reached'
  message: string
}
type AuthMethodMismatchError = { code: 'auth_method_mismatch'; message: string }
type DataIntegrationVendedCredential =
  | {
      object: 'credential'
      auth_method: 'oauth'
      value: string
      expires_at: string | null
      scopes: string[]
      missing_scopes: string[]
      metadata: { [key: string]: any }
      config: { [key: string]: string }
    }
  | {
      object: 'credential'
      auth_method: 'api_key'
      value: string
      config: { [key: string]: string }
    }
  | {
      object: 'credential'
      auth_method: 'client_credentials'
      value: string
      expires_at: string | null
      scopes: string[]
      missing_scopes: string[]
      metadata: { [key: string]: any }
      config: { [key: string]: string }
    }
type DataIntegrationCredentialsResponse =
  | { active: true; credential: DataIntegrationVendedCredential }
  | { active: false; error: 'not_installed' | 'needs_reauthorization' }
type AccountSelectionRequiredError = { code: 'account_selection_required'; message: string }
type DataIntegrationAccessTokenResponse =
  | {
      active: true
      access_token: {
        object: 'access_token'
        access_token: string
        expires_at: string | null
        scopes: string[]
        missing_scopes: string[]
      }
    }
  | { active: false; error: 'needs_reauthorization' | 'not_installed' }
type Directory = {
  object: 'directory'
  id: string
  organization_id: string
  external_key: string
  type:
    | 'azure scim v2.0'
    | 'bamboohr'
    | 'breathe hr'
    | 'cezanne hr'
    | 'cyberark scim v2.0'
    | 'fourth hr'
    | 'generic scim v2.0'
    | 'gsuite directory'
    | 'hibob'
    | 'sailpoint scim v2.0'
    | 'jump cloud scim v2.0'
    | 'okta scim v2.0'
    | 'onelogin scim v2.0'
    | 'people hr'
    | 'personio'
    | 'pingfederate scim v2.0'
    | 'rippling scim v2.0'
    | 's3'
    | 'sftp'
    | 'sftp workday'
    | 'workday'
  state: 'linked' | 'validating' | 'invalid_credentials' | 'unlinked' | 'deleting'
  name: string
  domain?: string | undefined
  metadata?: { users: { active: number; inactive: number }; groups: number } | undefined
  created_at: string
  updated_at: string
}
type DirectoryList = {
  object: 'list'
  data: Directory[]
  list_metadata: { before: string | null; after: string | null }
}
type DirectoryGroup = {
  object: 'directory_group'
  id: string
  idp_id: string
  directory_id: string
  organization_id: string
  name: string
  raw_attributes?: { [key: string]: any } | undefined
  created_at: string
  updated_at: string
}
type DirectoryUser = {
  object: 'directory_user'
  id: string
  directory_id: string
  organization_id: string
  idp_id: string
  email: string | null
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  name?: (string | null) | undefined
  emails?:
    | {
        primary?: boolean | undefined
        type?: string | undefined
        value?: (string | null) | undefined
      }[]
    | undefined
  job_title?: (string | null) | undefined
  username?: (string | null) | undefined
  state: 'active' | 'suspended' | 'inactive'
  raw_attributes: { [key: string]: any }
  custom_attributes: { [key: string]: any }
  role?: SlimRole | undefined
  roles?: SlimRole[] | undefined
  created_at: string
  updated_at: string
}
type DirectorySyncResponse = { status: 'queued' }
type DirectorySyncRateLimitError = {
  code: 'directory_sync_rate_limited'
  message: string
  retry_after_seconds: number
}
type DirectoryGroupList = {
  object: 'list'
  data: DirectoryGroup[]
  list_metadata: { before: string | null; after: string | null }
}
type DirectoryUserWithGroups = {
  object: 'directory_user'
  id: string
  directory_id: string
  organization_id: string
  idp_id: string
  email: string | null
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  name?: (string | null) | undefined
  emails?:
    | {
        primary?: boolean | undefined
        type?: string | undefined
        value?: (string | null) | undefined
      }[]
    | undefined
  job_title?: (string | null) | undefined
  username?: (string | null) | undefined
  state: 'active' | 'suspended' | 'inactive'
  raw_attributes: { [key: string]: any }
  custom_attributes: { [key: string]: any }
  role?: SlimRole | undefined
  roles?: SlimRole[] | undefined
  created_at: string
  updated_at: string
  groups: DirectoryGroup[]
}
type DirectoryUserList = {
  object: 'list'
  data: DirectoryUserWithGroups[]
  list_metadata: { before: string | null; after: string | null }
}
type EventContextActorDto = {
  id: string
  source: 'api' | 'dashboard' | 'admin_portal' | 'system'
  name: string | null
}
type EventContextDto = {
  google_analytics_client_id?: string | undefined
  google_analytics_sessions?:
    | { containerId: string; sessionId?: string | undefined; sessionNumber?: string | undefined }[]
    | undefined
  ajs_anonymous_id?: string | undefined
  client_id?: string | undefined
  actor?: EventContextActorDto | undefined
  previous_attributes?: { [key: string]: any } | undefined
}
type FlagRule = {
  object: 'flag_rule'
  id: string
  flag_id: string
  flag_slug: string
  environment_id: string
  target_type: string | null
  position: number
  value_type: 'boolean'
  value: boolean
  created_at: string
  updated_at: string
}
type FlagTarget =
  | {
      object: 'flag_target'
      id: string
      flag_id: string
      flag_slug: string
      environment_id: string
      target_type: string
      target_id: string
      created_at: string
      updated_at: string
      rule_id: string
    }
  | {
      object: 'flag_target'
      id: string
      flag_id: string
      flag_slug: string
      environment_id: string
      target_type: string
      target_id: string
      value_type: 'boolean'
      value: boolean
      created_at: string
      updated_at: string
    }
type Group = {
  object: 'group'
  id: string
  organization_id: string
  name: string
  description: string | null
  created_at: string
  updated_at: string
}
type IssuerTrust = {
  object: 'issuer_trust'
  id: string
  organization_id: string
  type: 'claude'
  issuer: string
  enabled: boolean
  created_at: string
  updated_at: string
}
type PipesConnectedAccount = {
  object: 'connected_account'
  id: string
  connection_role?: 'compatibility' | 'standard' | undefined
  account_identifier?: (string | null) | undefined
  account_display_name?: (string | null) | undefined
  data_integration_id: string
  provider_slug: string
  user_id: string | null
  organization_id: string | null
  scopes: string[]
  auth_method?: 'oauth' | 'api_key' | 'client_credentials' | undefined
  api_key_last_4?: (string | null) | undefined
  state: 'connected' | 'needs_reauthorization'
  established_by_user_id?: (string | null) | undefined
  state_reason?: ('establishing_member_membership_ended' | null) | undefined
  created_at: string
  updated_at: string
}
type VaultByokKeyProvider = 'AWS_KMS' | 'GCP_KMS' | 'AZURE_KEY_VAULT'
type WaitlistUser = {
  id: string
  email: string
  state: 'pending' | 'approved' | 'denied'
  approved_at: string | null
  additional_fields?: { [key: string]: string } | undefined
  waitlist_id?: (string | null) | undefined
  created_at: string
  updated_at: string
  object: 'waitlist_user'
}
type EventSchema = {
  object: 'event'
  id: string
  event: string
  data: { [key: string]: any }
  created_at: string
  context?: { [key: string]: any } | undefined
} & (
  | {
      id: string
      event: 'action.authentication.denied'
      data: {
        action_endpoint_id: string
        action_execution_id: string
        type: 'authentication'
        verdict: 'Deny'
        user_id: string
        organization_id: string | null
        email: string
        ip_address: string | null
        user_agent: string | null
      }
      context?: EventContextDto | undefined
      created_at: string
      object: 'event'
    }
  | {
      id: string
      event: 'action.user_registration.denied'
      data: {
        action_endpoint_id: string
        action_execution_id: string
        type: 'user_registration'
        verdict: 'Deny'
        organization_id: string | null
        email: string
        ip_address: string | null
        user_agent: string | null
      }
      context?: EventContextDto | undefined
      created_at: string
      object: 'event'
    }
  | {
      id: string
      event: 'agent.blueprint.created'
      data: {
        object: 'agent_blueprint'
        id: string
        name: string
        description: string | null
        permissions: string[]
        scoped_permissions?:
          | { slug: string; instance_types: ('delegated' | 'autonomous')[] }[]
          | undefined
        invocable_by: { role_slugs: string[]; organization_ids: string[] }
        invocable_as: { instance_types: ('delegated' | 'autonomous')[] }
        session_settings: {
          max_age_seconds: number
          access_token_ttl_seconds: number
          refresh_token_ttl_seconds: number
        }
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.blueprint.deleted'
      data: {
        object: 'agent_blueprint'
        id: string
        name: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.blueprint.updated'
      data: {
        object: 'agent_blueprint'
        id: string
        name: string
        description: string | null
        permissions: string[]
        scoped_permissions?:
          | { slug: string; instance_types: ('delegated' | 'autonomous')[] }[]
          | undefined
        invocable_by: { role_slugs: string[]; organization_ids: string[] }
        invocable_as: { instance_types: ('delegated' | 'autonomous')[] }
        session_settings: {
          max_age_seconds: number
          access_token_ttl_seconds: number
          refresh_token_ttl_seconds: number
        }
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.instance.created'
      data: {
        object: 'agent_instance'
        id: string
        agent_blueprint_id: string
        organization_id: string
        organization_membership_id: string | null
        type: 'delegated' | 'autonomous'
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.instance.deleted'
      data: {
        object: 'agent_instance'
        id: string
        agent_blueprint_id: string
        organization_id: string
        organization_membership_id: string | null
        type: 'delegated' | 'autonomous'
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.instance.session.created'
      data: {
        object: 'agent_instance_session'
        id: string
        agent_instance_id: string
        organization_id: string
        expires_at: string
        revoked_at: string | null
        created_at: string
        updated_at: string
        permission_slugs: string[]
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.instance.session.revoked'
      data: {
        object: 'agent_instance_session'
        id: string
        agent_instance_id: string
        organization_id: string
        expires_at: string
        revoked_at: string | null
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.claim.attempt.created'
      data: {
        object: 'agent_registration_claim_attempt'
        id: string
        agent_registration_id: string
        agent_registration_claim_id: string
        login_hint: string
        expires_at: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.claim.completed'
      data: {
        object: 'agent_registration_claim'
        id: string
        agent_registration_id: string
        organization_id?: string | undefined
        completed_by_attempt_id: string
        claimed_by: { user_id: string; organization_id: string | ('null' | null) }
        completed_at: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.created'
      data: {
        object: 'agent_registration'
        id: string
        agent_identity: {
          object: 'agent_identity'
          id: string
          userland_user_id: string | ('null' | null)
        }
        organization_id: string
        status: 'unverified' | 'verified' | 'expired' | 'revoked'
        kind: 'anonymous' | 'service_auth' | 'identity_assertion'
        method: 'anonymous' | 'service_auth' | 'id_jag'
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.credential.issued'
      data: {
        object: 'agent_registration_credential'
        id: string
        agent_registration_id: string
        detail:
          | { kind: 'api_key'; api_key_id: string }
          | { kind: 'access_token'; jti: string; expires_at: string | ('null' | null) }
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.deleted'
      data: { agent_registration_id: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.expired'
      data: { agent_registration_id: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.organization.switched'
      data: {
        agent_registration_id: string
        from_organization_id: string
        to_organization_id: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.refreshed'
      data: { agent_registration_id: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'agent.registration.revoked'
      data: { agent_registration_id: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'api_key.created'
      data: {
        object: 'api_key'
        id: string
        owner:
          | { type: 'organization'; id: string }
          | { type: 'user'; id: string; organization_id: string }
        name: string
        obfuscated_value: string
        last_used_at: string | null
        expires_at: string | null
        permissions: string[]
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'api_key.revoked'
      data: {
        object: 'api_key'
        id: string
        owner:
          | { type: 'organization'; id: string }
          | { type: 'user'; id: string; organization_id: string }
        name: string
        obfuscated_value: string
        last_used_at: string | null
        expires_at: string | null
        permissions: string[]
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'api_key.updated'
      data: {
        object: 'api_key'
        id: string
        owner:
          | { type: 'organization'; id: string }
          | { type: 'user'; id: string; organization_id: string }
        name: string
        obfuscated_value: string
        last_used_at: string | null
        expires_at: string | null
        permissions: string[]
        created_at: string
        updated_at: string
        previous_attributes: { expires_at: string | null }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'application.token_exchange_failed'
      data: {
        grant_type: string
        client_id: string
        issuer: string | null
        unverified_email_domain?: (string | null) | undefined
        signature_verified?: boolean | undefined
        error: { code: string; message: string }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'application.token_exchange_succeeded'
      data: {
        grant_type: string
        client_id: string
        user_id: string
        email: string
        organization_id: string | null
        issuer: string
        connection_id: string | null
        jti: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.email_verification_failed'
      data: {
        type: 'email_verification'
        status: 'failed'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        error: { code: string; message: string; radar_detection_id?: string | undefined }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.email_verification_succeeded'
      data: {
        type: 'email_verification'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string
        email: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.magic_auth_failed'
      data: {
        type: 'magic_auth'
        status: 'failed'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        error: { code: string; message: string; radar_detection_id?: string | undefined }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.magic_auth_succeeded'
      data: {
        type: 'magic_auth'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string
        email: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.mfa_failed'
      data: {
        type: 'mfa'
        status: 'failed'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        error: { code: string; message: string; radar_detection_id?: string | undefined }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.mfa_succeeded'
      data: {
        type: 'mfa'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string
        email: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.oauth_failed'
      data: {
        type: 'oauth'
        status: 'failed'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        error: { code: string; message: string; radar_detection_id?: string | undefined }
        provider?: string | undefined
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.oauth_succeeded'
      data: {
        type: 'oauth'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string
        provider?: string | undefined
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.passkey_failed'
      data: {
        type: 'passkey'
        status: 'failed'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        error: { code: string; message: string; radar_detection_id?: string | undefined }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.passkey_succeeded'
      data: {
        type: 'passkey'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string
        email: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.password_failed'
      data: {
        type: 'password'
        status: 'failed'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        error: { code: string; message: string; radar_detection_id?: string | undefined }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.password_succeeded'
      data: {
        type: 'password'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string
        email: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.radar_risk_detected'
      data: {
        auth_method: string
        action: 'signup' | 'login'
        control: string | null
        blocklist_type: string | null
        ip_address: string | null
        user_agent: string | null
        user_id: string
        email: string
        radar_detection_id?: string | undefined
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.reauthentication_succeeded'
      data: {
        type: 'reauthentication'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string
        email: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.sso_failed'
      data: {
        type: 'sso'
        status: 'failed'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        sso: {
          organization_id: string | null
          connection_id: string | null
          session_id: string | null
        }
        error: { code: string; message: string; radar_detection_id?: string | undefined }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.sso_started'
      data: {
        type: 'sso'
        status: 'started'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        sso: {
          organization_id: string | null
          connection_id: string | null
          session_id: string | null
        }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.sso_succeeded'
      data: {
        type: 'sso'
        status: 'succeeded'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string
        sso: {
          organization_id: string | null
          connection_id: string | null
          session_id: string | null
        }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'authentication.sso_timed_out'
      data: {
        type: 'sso'
        status: 'timed_out'
        ip_address: string | null
        user_agent: string | null
        user_id: string | null
        email: string | null
        sso: {
          organization_id: string | null
          connection_id: string | null
          session_id: string | null
        }
        error: { code: string; message: string; radar_detection_id?: string | undefined }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'connection.activated'
      data: {
        object: 'connection'
        id: string
        state: 'draft' | 'active' | 'validating' | 'inactive' | 'deleting'
        name: string
        connection_type:
          | 'ADFSSAML'
          | 'AdpOidc'
          | 'AppleOAuth'
          | 'Auth0Migration'
          | 'Auth0SAML'
          | 'AzureSAML'
          | 'BitbucketOAuth'
          | 'CasSAML'
          | 'ClassLinkSAML'
          | 'CleverOIDC'
          | 'CloudflareSAML'
          | 'CyberArkSAML'
          | 'DuoSAML'
          | 'EntraIdOIDC'
          | 'GenericOIDC'
          | 'GenericSAML'
          | 'GitHubOAuth'
          | 'GitLabOAuth'
          | 'GoogleOAuth'
          | 'GoogleOIDC'
          | 'GoogleSAML'
          | 'IntuitOAuth'
          | 'JumpCloudSAML'
          | 'KeycloakSAML'
          | 'LastPassSAML'
          | 'LinkedInOAuth'
          | 'LoginGovOidc'
          | 'MagicLink'
          | 'MicrosoftOAuth'
          | 'MiniOrangeSAML'
          | 'NetIqSAML'
          | 'OktaOIDC'
          | 'OktaSAML'
          | 'OneLoginSAML'
          | 'OracleSAML'
          | 'PingFederateSAML'
          | 'PingOneSAML'
          | 'RipplingSAML'
          | 'SalesforceSAML'
          | 'ShibbolethGenericSAML'
          | 'ShibbolethSAML'
          | 'SimpleSamlPhpSAML'
          | 'SalesforceOAuth'
          | 'SlackOAuth'
          | 'TestIdp'
          | 'VercelMarketplaceOAuth'
          | 'VercelOAuth'
          | 'VMwareSAML'
          | 'XeroOAuth'
        organization_id?: string | undefined
        created_at: string
        updated_at: string
        external_key: string
        status: 'linked' | 'unlinked'
        domains: { object: 'connection_domain'; id: string; domain: string }[]
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'connection.deactivated'
      data: {
        object: 'connection'
        id: string
        state: 'draft' | 'active' | 'validating' | 'inactive' | 'deleting'
        name: string
        connection_type:
          | 'ADFSSAML'
          | 'AdpOidc'
          | 'AppleOAuth'
          | 'Auth0Migration'
          | 'Auth0SAML'
          | 'AzureSAML'
          | 'BitbucketOAuth'
          | 'CasSAML'
          | 'ClassLinkSAML'
          | 'CleverOIDC'
          | 'CloudflareSAML'
          | 'CyberArkSAML'
          | 'DuoSAML'
          | 'EntraIdOIDC'
          | 'GenericOIDC'
          | 'GenericSAML'
          | 'GitHubOAuth'
          | 'GitLabOAuth'
          | 'GoogleOAuth'
          | 'GoogleOIDC'
          | 'GoogleSAML'
          | 'IntuitOAuth'
          | 'JumpCloudSAML'
          | 'KeycloakSAML'
          | 'LastPassSAML'
          | 'LinkedInOAuth'
          | 'LoginGovOidc'
          | 'MagicLink'
          | 'MicrosoftOAuth'
          | 'MiniOrangeSAML'
          | 'NetIqSAML'
          | 'OktaOIDC'
          | 'OktaSAML'
          | 'OneLoginSAML'
          | 'OracleSAML'
          | 'PingFederateSAML'
          | 'PingOneSAML'
          | 'RipplingSAML'
          | 'SalesforceSAML'
          | 'ShibbolethGenericSAML'
          | 'ShibbolethSAML'
          | 'SimpleSamlPhpSAML'
          | 'SalesforceOAuth'
          | 'SlackOAuth'
          | 'TestIdp'
          | 'VercelMarketplaceOAuth'
          | 'VercelOAuth'
          | 'VMwareSAML'
          | 'XeroOAuth'
        organization_id?: string | undefined
        created_at: string
        updated_at: string
        external_key: string
        status: 'linked' | 'unlinked'
        domains: { object: 'connection_domain'; id: string; domain: string }[]
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'connection.deleted'
      data: {
        object: 'connection'
        id: string
        state: 'draft' | 'active' | 'validating' | 'inactive' | 'deleting'
        name: string
        connection_type:
          | 'ADFSSAML'
          | 'AdpOidc'
          | 'AppleOAuth'
          | 'Auth0Migration'
          | 'Auth0SAML'
          | 'AzureSAML'
          | 'BitbucketOAuth'
          | 'CasSAML'
          | 'ClassLinkSAML'
          | 'CleverOIDC'
          | 'CloudflareSAML'
          | 'CyberArkSAML'
          | 'DuoSAML'
          | 'EntraIdOIDC'
          | 'GenericOIDC'
          | 'GenericSAML'
          | 'GitHubOAuth'
          | 'GitLabOAuth'
          | 'GoogleOAuth'
          | 'GoogleOIDC'
          | 'GoogleSAML'
          | 'IntuitOAuth'
          | 'JumpCloudSAML'
          | 'KeycloakSAML'
          | 'LastPassSAML'
          | 'LinkedInOAuth'
          | 'LoginGovOidc'
          | 'MagicLink'
          | 'MicrosoftOAuth'
          | 'MiniOrangeSAML'
          | 'NetIqSAML'
          | 'OktaOIDC'
          | 'OktaSAML'
          | 'OneLoginSAML'
          | 'OracleSAML'
          | 'PingFederateSAML'
          | 'PingOneSAML'
          | 'RipplingSAML'
          | 'SalesforceSAML'
          | 'ShibbolethGenericSAML'
          | 'ShibbolethSAML'
          | 'SimpleSamlPhpSAML'
          | 'SalesforceOAuth'
          | 'SlackOAuth'
          | 'TestIdp'
          | 'VercelMarketplaceOAuth'
          | 'VercelOAuth'
          | 'VMwareSAML'
          | 'XeroOAuth'
        organization_id?: string | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'connection.saml_certificate_renewal_required'
      data: {
        connection: { id: string; organization_id?: string | undefined }
        certificate: {
          certificate_type: 'ResponseSigning' | 'RequestSigning' | 'ResponseEncryption'
          expiry_date: string
          is_expired: boolean
        }
        days_until_expiry: number
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'connection.saml_certificate_renewed'
      data: {
        connection: { id: string; organization_id?: string | undefined }
        certificate: {
          certificate_type: 'ResponseSigning' | 'RequestSigning' | 'ResponseEncryption'
          expiry_date: string
        }
        renewed_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'connection.saml_certificate_replaced'
      data: {
        connection: { id: string; organization_id?: string | undefined }
        certificate: {
          certificate_type: 'ResponseSigning' | 'RequestSigning' | 'ResponseEncryption'
          expiry_date: string
          previous_expiry_date?: string | undefined
        }
        replaced_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.activated'
      data: {
        object: 'directory'
        id: string
        organization_id?: string | undefined
        type:
          | 'azure scim v2.0'
          | 'bamboohr'
          | 'breathe hr'
          | 'cezanne hr'
          | 'cyberark scim v2.0'
          | 'fourth hr'
          | 'generic scim v2.0'
          | 'gsuite directory'
          | 'gusto'
          | 'hibob'
          | 'jump cloud scim v2.0'
          | 'okta scim v2.0'
          | 'onelogin scim v2.0'
          | 'people hr'
          | 'personio'
          | 'pingfederate scim v2.0'
          | 'rippling scim v2.0'
          | 'rippling'
          | 'sailpoint scim v2.0'
          | 's3'
          | 'sftp'
          | 'sftp workday'
          | 'workday'
        state: 'active' | 'validating' | 'invalid_credentials' | 'inactive' | 'deleting'
        name: string
        created_at: string
        updated_at: string
        external_key: string
        domains: { object: 'organization_domain'; id: string; domain: string }[]
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.deleted'
      data: {
        object: 'directory'
        id: string
        organization_id?: string | undefined
        type:
          | 'azure scim v2.0'
          | 'bamboohr'
          | 'breathe hr'
          | 'cezanne hr'
          | 'cyberark scim v2.0'
          | 'fourth hr'
          | 'generic scim v2.0'
          | 'gsuite directory'
          | 'gusto'
          | 'hibob'
          | 'jump cloud scim v2.0'
          | 'okta scim v2.0'
          | 'onelogin scim v2.0'
          | 'people hr'
          | 'personio'
          | 'pingfederate scim v2.0'
          | 'rippling scim v2.0'
          | 'rippling'
          | 'sailpoint scim v2.0'
          | 's3'
          | 'sftp'
          | 'sftp workday'
          | 'workday'
        state: 'active' | 'validating' | 'invalid_credentials' | 'inactive' | 'deleting'
        name: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.group.created'
      data: DirectoryGroup
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.group.deleted'
      data: DirectoryGroup
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.group.updated'
      data: {
        object: 'directory_group'
        id: string
        idp_id: string
        directory_id: string
        organization_id: string
        name: string
        raw_attributes?: { [key: string]: any } | undefined
        created_at: string
        updated_at: string
        previous_attributes?: { [key: string]: any } | undefined
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.token.created'
      data: {
        object: 'directory_token'
        id: string
        directory_id: string
        organization_id?: string | undefined
        token_suffix: string
        created_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.token.revoked'
      data: {
        object: 'directory_token'
        id: string
        directory_id: string
        organization_id?: string | undefined
        token_suffix: string
        created_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.group.user_added'
      data: { directory_id: string; user: DirectoryUser; group: DirectoryGroup }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.user.created'
      data: DirectoryUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.user.deleted'
      data: DirectoryUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.group.user_removed'
      data: { directory_id: string; user: DirectoryUser; group: DirectoryGroup }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'dsync.user.updated'
      data: {
        object: 'directory_user'
        id: string
        directory_id: string
        organization_id: string
        idp_id: string
        email: string | null
        first_name?: (string | null) | undefined
        last_name?: (string | null) | undefined
        name?: (string | null) | undefined
        emails?:
          | {
              primary?: boolean | undefined
              type?: string | undefined
              value?: (string | null) | undefined
            }[]
          | undefined
        job_title?: (string | null) | undefined
        username?: (string | null) | undefined
        state: 'active' | 'suspended' | 'inactive'
        raw_attributes: { [key: string]: any }
        custom_attributes: { [key: string]: any }
        role?: SlimRole | undefined
        roles?: SlimRole[] | undefined
        created_at: string
        updated_at: string
        previous_attributes?: { [key: string]: any } | undefined
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'email_verification.created'
      data: {
        object: 'email_verification'
        id: string
        user_id: string
        email: string
        expires_at: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag.created'
      data: {
        object: 'feature_flag'
        id: string
        environment_id: string
        slug: string
        name: string
        description: string | null
        owner: { email: string; first_name: string | null; last_name: string | null } | null
        tags: string[]
        enabled: boolean
        default_value: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
      }
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag.deleted'
      data: {
        object: 'feature_flag'
        id: string
        environment_id: string
        slug: string
        name: string
        description: string | null
        owner: { email: string; first_name: string | null; last_name: string | null } | null
        tags: string[]
        enabled: boolean
        default_value: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
      }
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag_rule.created'
      data: FlagRule
      created_at: string
      context: {
        client_id: string
        actor?:
          | {
              id: string
              source: 'api' | 'dashboard' | 'admin_portal' | 'system'
              name: string | null
            }
          | undefined
      }
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag_rule.deleted'
      data: FlagRule
      created_at: string
      context: {
        client_id: string
        actor?:
          | {
              id: string
              source: 'api' | 'dashboard' | 'admin_portal' | 'system'
              name: string | null
            }
          | undefined
      }
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag_rule.updated'
      data: FlagRule
      created_at: string
      context: {
        client_id: string
        actor?:
          | {
              id: string
              source: 'api' | 'dashboard' | 'admin_portal' | 'system'
              name: string | null
            }
          | undefined
        previous_attributes?: { data?: { value?: boolean | undefined } | undefined } | undefined
      }
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag.updated'
      data: {
        object: 'feature_flag'
        id: string
        environment_id: string
        slug: string
        name: string
        description: string | null
        owner: { email: string; first_name: string | null; last_name: string | null } | null
        tags: string[]
        enabled: boolean
        default_value: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
        previous_attributes?:
          | {
              data?:
                | {
                    name?: string | undefined
                    description?: (string | null) | undefined
                    tags?: string[] | undefined
                    owner?:
                      | ({
                          email: string
                          first_name: string | null
                          last_name: string | null
                        } | null)
                      | undefined
                    enabled?: boolean | undefined
                    default_value?: boolean | undefined
                  }
                | undefined
            }
          | undefined
      }
      object: 'event'
    }
  | {
      id: string
      event: 'flag.created'
      data: {
        object: 'feature_flag'
        id: string
        environment_id: string
        slug: string
        name: string
        description: string | null
        owner: { email: string; first_name: string | null; last_name: string | null } | null
        tags: string[]
        enabled: boolean
        default_value: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
      }
      object: 'event'
    }
  | {
      id: string
      event: 'flag.deleted'
      data: {
        object: 'feature_flag'
        id: string
        environment_id: string
        slug: string
        name: string
        description: string | null
        owner: { email: string; first_name: string | null; last_name: string | null } | null
        tags: string[]
        enabled: boolean
        default_value: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
      }
      object: 'event'
    }
  | {
      id: string
      event: 'flag.rule_updated'
      data: {
        object: 'feature_flag'
        id: string
        environment_id: string
        slug: string
        name: string
        description: string | null
        owner: { email: string; first_name: string | null; last_name: string | null } | null
        tags: string[]
        enabled: boolean
        default_value: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
        access_type: 'none' | 'some' | 'all'
        configured_targets: {
          organizations: { id: string; name: string }[]
          users: { id: string; email: string }[]
        }
        previous_attributes: {
          data?: { enabled?: boolean | undefined; default_value?: boolean | undefined } | undefined
          context?:
            | {
                access_type?: 'none' | 'some' | 'all' | undefined
                configured_targets?:
                  | {
                      organizations: { id: string; name: string }[]
                      users: { id: string; email: string }[]
                    }
                  | undefined
              }
            | undefined
        }
      }
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag_target.created'
      data: FlagTarget
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
      }
      object: 'event'
    }
  | {
      id: string
      event: 'feature_flags.flag_target.deleted'
      data: FlagTarget
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
      }
      object: 'event'
    }
  | {
      id: string
      event: 'flag.updated'
      data: {
        object: 'feature_flag'
        id: string
        environment_id: string
        slug: string
        name: string
        description: string | null
        owner: { email: string; first_name: string | null; last_name: string | null } | null
        tags: string[]
        enabled: boolean
        default_value: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context: {
        client_id: string
        actor: {
          id: string
          source: 'api' | 'dashboard' | 'admin_portal' | 'system'
          name: string | null
        }
        previous_attributes?:
          | {
              data?:
                | {
                    name?: string | undefined
                    description?: (string | null) | undefined
                    tags?: string[] | undefined
                    owner?:
                      | ({
                          email: string
                          first_name: string | null
                          last_name: string | null
                        } | null)
                      | undefined
                    enabled?: boolean | undefined
                    default_value?: boolean | undefined
                  }
                | undefined
            }
          | undefined
      }
      object: 'event'
    }
  | {
      id: string
      event: 'group.created'
      data: Group
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'group.deleted'
      data: Group
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'group.member_added'
      data: { group_id: string; organization_membership_id: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'group.member_removed'
      data: { group_id: string; organization_membership_id: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'group.updated'
      data: Group
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'invitation.accepted'
      data: {
        object: 'invitation'
        id: string
        email: string
        state: 'pending' | 'accepted' | 'expired' | 'revoked'
        accepted_at: string | null
        revoked_at: string | null
        expires_at: string
        organization_id: string | null
        inviter_user_id: string | null
        accepted_user_id: string | null
        role_slug: string | null
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'invitation.created'
      data: {
        object: 'invitation'
        id: string
        email: string
        state: 'pending' | 'accepted' | 'expired' | 'revoked'
        accepted_at: string | null
        revoked_at: string | null
        expires_at: string
        organization_id: string | null
        inviter_user_id: string | null
        accepted_user_id: string | null
        role_slug: string | null
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'invitation.resent'
      data: {
        object: 'invitation'
        id: string
        email: string
        state: 'pending' | 'accepted' | 'expired' | 'revoked'
        accepted_at: string | null
        revoked_at: string | null
        expires_at: string
        organization_id: string | null
        inviter_user_id: string | null
        accepted_user_id: string | null
        role_slug: string | null
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'invitation.revoked'
      data: {
        object: 'invitation'
        id: string
        email: string
        state: 'pending' | 'accepted' | 'expired' | 'revoked'
        accepted_at: string | null
        revoked_at: string | null
        expires_at: string
        organization_id: string | null
        inviter_user_id: string | null
        accepted_user_id: string | null
        role_slug: string | null
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'issuer_trust.created'
      data: IssuerTrust
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'issuer_trust.deleted'
      data: IssuerTrust
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'issuer_trust.updated'
      data: IssuerTrust
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'magic_auth.created'
      data: {
        object: 'magic_auth'
        id: string
        user_id: string
        email: string
        expires_at: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization.created'
      data: {
        object: 'organization'
        id: string
        name: string
        domains: {
          object: 'organization_domain'
          id: string
          organization_id: string
          domain: string
          state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
          verification_prefix?: string | undefined
          verification_token?: string | undefined
          verification_strategy?: 'dns' | 'manual' | undefined
          created_at: string
          updated_at: string
        }[]
        metadata: { [key: string]: string }
        external_id: string | null
        stripe_customer_id?: string | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization.deleted'
      data: {
        object: 'organization'
        id: string
        name: string
        domains: {
          object: 'organization_domain'
          id: string
          organization_id: string
          domain: string
          state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
          verification_prefix?: string | undefined
          verification_token?: string | undefined
          verification_strategy?: 'dns' | 'manual' | undefined
          created_at: string
          updated_at: string
        }[]
        metadata: { [key: string]: string }
        external_id: string | null
        stripe_customer_id?: string | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_domain.created'
      data: {
        object: 'organization_domain'
        id: string
        organization_id: string
        domain: string
        state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
        verification_prefix?: string | undefined
        verification_token?: string | undefined
        verification_strategy?: 'dns' | 'manual' | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_domain.deleted'
      data: {
        object: 'organization_domain'
        id: string
        organization_id: string
        domain: string
        state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
        verification_prefix?: string | undefined
        verification_token?: string | undefined
        verification_strategy?: 'dns' | 'manual' | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_domain.updated'
      data: {
        object: 'organization_domain'
        id: string
        organization_id: string
        domain: string
        state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
        verification_prefix?: string | undefined
        verification_token?: string | undefined
        verification_strategy?: 'dns' | 'manual' | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_domain.verification_failed'
      data: {
        reason: 'domain_verification_period_expired' | 'domain_verified_by_other_organization'
        organization_domain: {
          object: 'organization_domain'
          id: string
          organization_id: string
          domain: string
          state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
          verification_prefix?: string | undefined
          verification_token?: string | undefined
          verification_strategy?: 'dns' | 'manual' | undefined
          created_at: string
          updated_at: string
        }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_domain.verified'
      data: {
        object: 'organization_domain'
        id: string
        organization_id: string
        domain: string
        state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
        verification_prefix?: string | undefined
        verification_token?: string | undefined
        verification_strategy?: 'dns' | 'manual' | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_membership.created'
      data: {
        object: 'organization_membership'
        id: string
        user_id: string
        organization_id: string
        status: 'active' | 'inactive' | 'pending'
        role: SlimRole
        roles?: SlimRole[] | undefined
        custom_attributes: { [key: string]: any }
        directory_managed: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_membership.deleted'
      data: {
        object: 'organization_membership'
        id: string
        user_id: string
        organization_id: string
        status: 'active' | 'inactive' | 'pending'
        role: SlimRole
        roles?: SlimRole[] | undefined
        custom_attributes: { [key: string]: any }
        directory_managed: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_membership.updated'
      data: {
        object: 'organization_membership'
        id: string
        user_id: string
        organization_id: string
        status: 'active' | 'inactive' | 'pending'
        role: SlimRole
        roles?: SlimRole[] | undefined
        custom_attributes: { [key: string]: any }
        directory_managed: boolean
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_role.created'
      data: {
        object: 'organization_role'
        organization_id: string
        slug: string
        name: string
        description: string | null
        resource_type_slug: string
        permissions: string[]
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_role.deleted'
      data: {
        object: 'organization_role'
        organization_id: string
        slug: string
        name: string
        description: string | null
        resource_type_slug: string
        permissions: string[]
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization_role.updated'
      data: {
        object: 'organization_role'
        organization_id: string
        slug: string
        name: string
        description: string | null
        resource_type_slug: string
        permissions: string[]
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'organization.updated'
      data: {
        object: 'organization'
        id: string
        name: string
        domains: {
          object: 'organization_domain'
          id: string
          organization_id: string
          domain: string
          state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
          verification_prefix?: string | undefined
          verification_token?: string | undefined
          verification_strategy?: 'dns' | 'manual' | undefined
          created_at: string
          updated_at: string
        }[]
        metadata: { [key: string]: string }
        external_id: string | null
        stripe_customer_id?: string | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'password_reset.created'
      data: {
        object: 'password_reset'
        id: string
        user_id: string
        email: string
        expires_at: string
        created_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'password_reset.succeeded'
      data: {
        object: 'password_reset'
        id: string
        user_id: string
        email: string
        expires_at: string
        created_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'permission.created'
      data: {
        object: 'permission'
        id: string
        slug: string
        name: string
        description: string | null
        system: boolean
        resource_type_slug: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'permission.deleted'
      data: {
        object: 'permission'
        id: string
        slug: string
        name: string
        description: string | null
        system: boolean
        resource_type_slug: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'permission.updated'
      data: {
        object: 'permission'
        id: string
        slug: string
        name: string
        description: string | null
        system: boolean
        resource_type_slug: string
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.account_connection.add_failed'
      data: {
        object: 'connection_failed'
        data_integration_id: string
        provider_slug: string
        user_id: string | null
        organization_id: string | null
        account_identifier?: (string | null) | undefined
        error_code: string
        error_reason: string | null
        provider_error: string | null
        provider_error_description: string | null
        created_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.account_connection.connected'
      data: PipesConnectedAccount
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.account_connection.connection_failed'
      data: {
        object: 'connection_failed'
        data_integration_id: string
        provider_slug: string
        user_id: string | null
        organization_id: string | null
        account_identifier?: (string | null) | undefined
        error_code: string
        error_reason: string | null
        provider_error: string | null
        provider_error_description: string | null
        created_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.account_connection.disconnected'
      data: PipesConnectedAccount
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.account_connection.reauthorization_needed'
      data: PipesConnectedAccount
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.connected_account.connected'
      data: PipesConnectedAccount
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.connected_account.connection_failed'
      data: {
        object: 'connection_failed'
        data_integration_id: string
        provider_slug: string
        user_id: string | null
        organization_id: string | null
        account_identifier?: (string | null) | undefined
        error_code: string
        error_reason: string | null
        provider_error: string | null
        provider_error_description: string | null
        created_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.connected_account.disconnected'
      data: PipesConnectedAccount
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'pipes.connected_account.reauthorization_needed'
      data: PipesConnectedAccount
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'radar.challenge_created'
      data: { type: 'email'; radar_challenge_id: string; user_id: string; email: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'resource_export.completed'
      data: {
        id: string
        resource_type:
          | 'users'
          | 'organizations'
          | 'events'
          | 'sessions'
          | 'auditLogEvents'
          | 'connections'
          | 'directoryUsers'
          | 'scimLogs'
          | 'radarDetections'
          | 'teamActivityLogEvents'
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'resource_export.created'
      data: {
        id: string
        resource_type:
          | 'users'
          | 'organizations'
          | 'events'
          | 'sessions'
          | 'auditLogEvents'
          | 'connections'
          | 'directoryUsers'
          | 'scimLogs'
          | 'radarDetections'
          | 'teamActivityLogEvents'
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'resource_export.downloaded'
      data: {
        id: string
        resource_type:
          | 'users'
          | 'organizations'
          | 'events'
          | 'sessions'
          | 'auditLogEvents'
          | 'connections'
          | 'directoryUsers'
          | 'scimLogs'
          | 'radarDetections'
          | 'teamActivityLogEvents'
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'resource_export.failed'
      data: {
        id: string
        resource_type:
          | 'users'
          | 'organizations'
          | 'events'
          | 'sessions'
          | 'auditLogEvents'
          | 'connections'
          | 'directoryUsers'
          | 'scimLogs'
          | 'radarDetections'
          | 'teamActivityLogEvents'
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'role.created'
      data: {
        object: 'role'
        slug: string
        resource_type_slug: string
        permissions?: string[] | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'role.deleted'
      data: {
        object: 'role'
        slug: string
        resource_type_slug: string
        permissions?: string[] | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'role.updated'
      data: {
        object: 'role'
        slug: string
        resource_type_slug: string
        permissions?: string[] | undefined
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'session.created'
      data: {
        object: 'session'
        id: string
        impersonator?: { email: string; reason: string | null } | undefined
        ip_address: string | null
        organization_id?: string | undefined
        user_agent: string | null
        user_id: string
        auth_method:
          | 'cross_app_auth'
          | 'external_auth'
          | 'impersonation'
          | 'magic_code'
          | 'migrated_session'
          | 'oauth'
          | 'passkey'
          | 'password'
          | 'sso'
          | 'unknown'
        status: 'active' | 'expired' | 'revoked'
        expires_at: string
        ended_at: string | null
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'session.revoked'
      data: {
        object: 'session'
        id: string
        impersonator?: { email: string; reason: string | null } | undefined
        ip_address: string | null
        organization_id?: string | undefined
        user_agent: string | null
        user_id: string
        auth_method:
          | 'cross_app_auth'
          | 'external_auth'
          | 'impersonation'
          | 'magic_code'
          | 'migrated_session'
          | 'oauth'
          | 'passkey'
          | 'password'
          | 'sso'
          | 'unknown'
        status: 'active' | 'expired' | 'revoked'
        expires_at: string
        ended_at: string | null
        created_at: string
        updated_at: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'user.created'
      data: UserlandUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'user.deleted'
      data: UserlandUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'user.updated'
      data: UserlandUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.byok_key.deleted'
      data: { organization_id: string; key_provider: VaultByokKeyProvider }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.byok_key.verification_completed'
      data: { organization_id: string; key_provider: VaultByokKeyProvider; verified: boolean }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.data.created'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        kv_name: string
        key_id: string
        key_context: { [key: string]: string }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.data.deleted'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        kv_name: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.data.read'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        kv_name: string
        key_id: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.data.updated'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        kv_name: string
        key_id: string
        key_context: { [key: string]: string }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.dek.decrypted'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        key_id: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.dek.read'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        key_ids: string[]
        key_context: { [key: string]: string }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.dek.rekeyed'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        key_ids: string[]
        key_context: { [key: string]: string }
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.kek.created'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        key_name: string
        key_id: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.kek.deleted'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        key_name: string
        key_id: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.metadata.read'
      data: {
        actor_id: string
        actor_source: 'api' | 'dashboard'
        actor_name: string
        kv_name: string
      }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'vault.names.listed'
      data: { actor_id: string; actor_source: 'api' | 'dashboard'; actor_name: string }
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'waitlist_user.approved'
      data: WaitlistUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'waitlist_user.created'
      data: WaitlistUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
  | {
      id: string
      event: 'waitlist_user.denied'
      data: WaitlistUser
      created_at: string
      context?: EventContextDto | undefined
      object: 'event'
    }
)
type EventList = { object: 'list'; data: EventSchema[]; list_metadata: { after: string | null } }
type Flag = {
  object: 'feature_flag'
  id: string
  slug: string
  name: string
  description: string | null
  owner: { email: string; first_name: string | null; last_name: string | null } | null
  tags: string[]
  enabled: boolean
  default_value: boolean
  created_at: string
  updated_at: string
}
type FlagList = {
  object: 'list'
  data: Flag[]
  list_metadata: { before: string | null; after: string | null }
}
type ErrorBodyWithCodeStatusCode = {
  message?: string | undefined
  code?: string | undefined
  statusCode?: number | undefined
}
type CreateOrganizationDomainDtoInput = { domain: string; organization_id: string }
type OrganizationDomainStandAlone = {
  object: 'organization_domain'
  id: string
  organization_id: string
  domain: string
  state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
  verification_prefix?: string | undefined
  verification_token?: string | undefined
  verification_strategy?: 'dns' | 'manual' | undefined
  created_at: string
  updated_at: string
}
type Organization = {
  object: 'organization'
  id: string
  name: string
  domains: {
    object: 'organization_domain'
    id: string
    organization_id: string
    domain: string
    state?: 'failed' | 'legacy_verified' | 'pending' | 'unverified' | 'verified' | undefined
    verification_prefix?: string | undefined
    verification_token?: string | undefined
    verification_strategy?: 'dns' | 'manual' | undefined
    created_at: string
    updated_at: string
  }[]
  metadata: { [key: string]: string }
  external_id: string | null
  stripe_customer_id?: string | undefined
  created_at: string
  updated_at: string
  allow_profiles_outside_organization?: boolean | undefined
}
type OrganizationList = {
  object: 'list'
  data: Organization[]
  list_metadata: { before: string | null; after: string | null }
}
type OrganizationDomainDataDtoInput = { domain: string; state: 'pending' | 'verified' }
type OrganizationDtoInput = {
  name: string
  allow_profiles_outside_organization?: boolean
  domains?: string[]
  domain_data?: OrganizationDomainDataDtoInput[]
  metadata?: { [key: string]: string } | null
  external_id?: string | null
}
type UpdateOrganizationDtoInput = {
  name?: string
  allow_profiles_outside_organization?: boolean
  domains?: string[]
  domain_data?: OrganizationDomainDataDtoInput[]
  stripe_customer_id?: string
  metadata?: { [key: string]: string } | null
  external_id?: string | null
}
type AuditLogConfiguration = {
  organization_id: string
  retention_period_in_days: number
  state: 'active' | 'inactive' | 'disabled'
  log_stream?:
    | {
        id: string
        type:
          | 'AzureSentinel'
          | 'Datadog'
          | 'GenericHttps'
          | 'GoogleCloudStorage'
          | 'S3'
          | 'Snowflake'
          | 'Splunk'
        state: 'active' | 'inactive' | 'error' | 'invalid'
        last_synced_at: string | null
        created_at: string
      }
    | undefined
}
type AuditLogsRetentionJson = { retention_period_in_days: number | null }
type UpdateAuditLogsRetentionDtoInput =
  | {
      retention_period:
        | '1_MONTH'
        | '2_MONTHS'
        | '3_MONTHS'
        | '4_MONTHS'
        | '5_MONTHS'
        | '6_MONTHS'
        | '7_MONTHS'
        | '8_MONTHS'
        | '9_MONTHS'
        | '10_MONTHS'
        | '11_MONTHS'
        | '1_YEAR'
        | '2_YEARS'
        | '3_YEARS'
        | '4_YEARS'
        | '5_YEARS'
        | '6_YEARS'
        | '7_YEARS'
        | '8_YEARS'
        | '9_YEARS'
        | '10_YEARS'
    }
  | { retention_period_in_days: number }
type OrganizationApiKey = {
  object: 'api_key'
  id: string
  owner: { type: 'organization'; id: string }
  name: string
  obfuscated_value: string
  last_used_at: string | null
  expires_at: string | null
  permissions: string[]
  created_at: string
  updated_at: string
}
type OrganizationApiKeyList = {
  object: 'list'
  data: OrganizationApiKey[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateOrganizationApiKeyDtoInput = {
  name: string
  permissions?: string[]
  expires_at?: string
}
type OrganizationApiKeyWithValue = {
  object: 'api_key'
  id: string
  owner: { type: 'organization'; id: string }
  name: string
  obfuscated_value: string
  last_used_at: string | null
  expires_at: string | null
  permissions: string[]
  created_at: string
  updated_at: string
  value: string
}
type DataIntegrationCredentials = {
  credentials_type: 'shared' | 'custom' | 'organization'
  has_credentials: boolean
  client_id: string | null
  client_secret_last_four: string | null
  redirect_uri: string
}
type DataIntegrationConfigurationResponse = {
  object: 'data_integration_configuration'
  id: string
  organization_id: string
  slug: string
  name: string
  enabled: boolean
  scopes: string[] | null
  config: { [key: string]: string }
  created_at: string
  updated_at: string
  credentials?: DataIntegrationCredentials | undefined
}
type DataIntegrationConfigurationListResponse = {
  object: 'list'
  data: DataIntegrationConfigurationResponse[]
}
type ConfigureDataIntegrationBodyInput = {
  enabled?: boolean
  scopes?: string[] | null
  client_id?: string
  client_secret?: string
  config?: { [key: string]: string }
}
type CreateGroupDtoInput = { name: string; description?: string | null }
type GroupList = {
  object: 'list'
  data: Group[]
  list_metadata: { before: string | null; after: string | null }
}
type UpdateGroupDtoInput = { name?: string; description?: string | null }
type CreateGroupMembershipDtoInput = { organization_membership_id: string }
type UserlandUserOrganizationMembershipBaseList = {
  object: 'list'
  data: {
    object: 'organization_membership'
    id: string
    user_id: string
    organization_id: string
    status: 'active' | 'inactive' | 'pending'
    directory_managed: boolean
    organization_name?: string | undefined
    custom_attributes?: { [key: string]: any } | undefined
    created_at: string
    updated_at: string
  }[]
  list_metadata: { before: string | null; after: string | null }
}
type PatchGroupMembershipsDtoInput = { add?: string[]; remove?: string[] }
type OrganizationAuthorizedConnectApplicationList = {
  object: 'list'
  data: {
    object: 'authorized_connect_application'
    id: string
    granted_scopes: string[]
    oauth_resource?: string | undefined
    application: ConnectApplication
    user_id: string
  }[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateOrganizationConnectedAccountDtoInput = {
  account_display_name?: string | null
  account_identifier?: string | null
  config?: { [key: string]: string }
  access_token?: string
  refresh_token?: string
  expires_at?: string
  scopes?: string[]
  state?: 'connected' | 'needs_reauthorization'
  user_id: string
  metadata?: { [key: string]: unknown }
  connection_intent?: 'add'
}
type OrganizationConnectedAccountImportErrorBody = {
  code:
    | 'invalid_token_combination'
    | 'invalid_data_integration_state'
    | 'client_credentials_not_configured'
  message: string
}
type InvalidRequestParametersErrorBodyWithErrors = {
  code: 'invalid_request_parameters'
  message: string
  errors: ErrorBodyWithCode[]
}
type OrganizationConnectedAccountDtoInput = {
  account_display_name?: string | null
  account_identifier?: string | null
  config?: { [key: string]: string }
  access_token?: string
  refresh_token?: string
  expires_at?: string
  scopes?: string[]
  state?: 'connected' | 'needs_reauthorization'
  user_id: string
}
type ErrorBodyCode =
  | 'account_selection_required'
  | 'action_denied'
  | 'already_claimed'
  | 'ambiguous_saml_options'
  | 'api_key_already_expired'
  | 'application_consent_required'
  | 'auth_method_disabled'
  | 'auth_method_mismatch'
  | 'authentication_method_not_allowed'
  | 'authorization_resource_external_id_conflict'
  | 'bad_request'
  | 'both_saml_and_oidc_options_provided'
  | 'cannot_deactivate_pending_organization_membership'
  | 'cannot_delete_last_certificate'
  | 'cannot_reactivate_pending_organization_membership'
  | 'cannot_remove_group_sourced_role'
  | 'certificate_expired'
  | 'chain_depth_exceeded'
  | 'claim_denied'
  | 'claim_expired'
  | 'client_secret_not_accepted'
  | 'client_secret_required'
  | 'code_challenge_not_found'
  | 'concurrent_flag_target_update'
  | 'concurrent_request'
  | 'connected_account_limit_reached'
  | 'connection_could_not_be_verified'
  | 'connection_deletion_in_progress'
  | 'connection_is_not_saml'
  | 'connection_type_conflicts_with_options'
  | 'connection_type_not_supported'
  | 'connection_type_not_updatable'
  | 'connection_type_or_options_required'
  | 'daily_quota_exceeded'
  | 'directory_sync_disabled'
  | 'directory_sync_in_progress'
  | 'directory_sync_rate_limited'
  | 'directory_sync_unsupported'
  | 'discovery_endpoint_must_use_https'
  | 'discovery_endpoint_tenant_not_allowed'
  | 'domain_already_exists'
  | 'domain_already_verified'
  | 'duplicate_endpoint'
  | 'duplicate_group_role_assignment'
  | 'email_already_in_use'
  | 'email_already_invited'
  | 'email_already_invited_to_organization'
  | 'email_already_verified'
  | 'email_change_code_expired'
  | 'email_change_code_incorrect'
  | 'email_change_code_previously_used'
  | 'email_change_not_allowed'
  | 'email_change_not_needed'
  | 'email_change_too_many_attempts'
  | 'email_completion_required'
  | 'email_domain_not_deliverable'
  | 'email_mismatch'
  | 'email_not_available'
  | 'email_password_auth_disabled'
  | 'email_previously_verified'
  | 'email_verification_code_expired'
  | 'email_verification_code_incorrect'
  | 'email_verification_code_previously_used'
  | 'email_verification_required'
  | 'entities_not_found'
  | 'entity_not_found'
  | 'expires_in_days_too_long'
  | 'expires_in_days_too_short'
  | 'external_auth_session_already_completed'
  | 'external_id_already_in_use'
  | 'external_id_already_used'
  | 'group_membership_limit_exceeded'
  | 'group_membership_update_overlap'
  | 'group_role_assignment_update_overlap'
  | 'id_token_signature_algorithm_not_supported'
  | 'idp_metadata_fetch_failed'
  | 'incomplete_saml_options'
  | 'invalid_agent_access_token'
  | 'invalid_certificate'
  | 'invalid_claim'
  | 'invalid_credentials'
  | 'invalid_email'
  | 'invalid_idp_sso_url'
  | 'invalid_invite'
  | 'invalid_issuer_metadata'
  | 'invalid_issuer_url'
  | 'invalid_locale'
  | 'invalid_metadata'
  | 'invalid_one_time_code'
  | 'invalid_organization'
  | 'invalid_organization_id'
  | 'invalid_password_hash'
  | 'invalid_pending_authentication_token'
  | 'invalid_refresh_token'
  | 'invalid_request'
  | 'invalid_request_parameters'
  | 'invalid_role'
  | 'invalid_state'
  | 'invalid_url'
  | 'invalid_user_access_token'
  | 'invitation_email_not_sent'
  | 'invite_accepted'
  | 'invite_expired'
  | 'invite_has_accepted_user_id'
  | 'invite_not_pending'
  | 'invite_revoked'
  | 'ip_address_required'
  | 'issuer_already_trusted'
  | 'it_contact_already_exists'
  | 'it_contact_invitation_already_active'
  | 'key_pair_not_accepted'
  | 'lock_timeout'
  | 'max_age_exceeded'
  | 'mfa_challenge'
  | 'mfa_enrollment'
  | 'missing_organization_id_or_resource_type_slug'
  | 'missing_user_id_or_organization_id'
  | 'multiple_roles_not_enabled'
  | 'name_already_in_use'
  | 'no_pending_email_change'
  | 'not_claude_issuer'
  | 'oidc_options_required'
  | 'one_time_code_expired'
  | 'one_time_code_previously_used'
  | 'one_time_code_too_many_attempts'
  | 'organization_already_has_trust'
  | 'organization_blocked_from_sending_invites'
  | 'organization_has_idp_managed_ema'
  | 'organization_membership_directory_managed'
  | 'organization_not_found'
  | 'organization_not_invocable'
  | 'organization_role_slug_conflict'
  | 'organization_selection_required'
  | 'organization_without_verified_domain'
  | 'passkey_progressive_enrollment'
  | 'password_and_password_hash_provided'
  | 'password_and_password_hash_type_provided'
  | 'password_reset_error'
  | 'password_reset_not_allowed'
  | 'password_salt_position_requires_password_hash'
  | 'password_strength_error'
  | 'permission_not_found'
  | 'permission_slug_conflict'
  | 'phone_number_required'
  | 'production_feature_requires_billing'
  | 'radar_challenge'
  | 'radar_email_challenge'
  | 'radar_sign_up_challenge'
  | 'radar_sms_challenge'
  | 'radar_sms_sign_in_challenge'
  | 'rate_limit_exceeded'
  | 'resource_has_dependents'
  | 'resource_limit_exceeded'
  | 'resource_type_update_in_progress'
  | 'role_assignment_update_overlap'
  | 'role_has_assignments'
  | 'role_has_group_role_mappings'
  | 'role_not_found'
  | 'role_not_invocable'
  | 'role_slug_conflict'
  | 'saml_options_required'
  | 'session_expired'
  | 'session_revoked'
  | 'session_settings_not_found'
  | 'sms_challenge_quota_reached'
  | 'sms_challenge_rate_limited'
  | 'sp_signing_cert_already_exists'
  | 'stripe_customer_id_already_used'
  | 'sub_resource_scoped_role_not_allowed'
  | 'team_not_found'
  | 'token_authentication_method_not_supported'
  | 'too_many_failed_verification_attempts'
  | 'too_many_sp_encryption_certs'
  | 'unsupported_invocation_type'
  | 'user_already_exists'
  | 'user_already_organization_member'
  | 'user_code_expired'
  | 'user_consent_options_not_supported'
  | 'user_creation_error'
  | 'user_mismatch'
  | 'user_not_member_of_organization'
  | 'user_session_ended'
  | 'verification_id_required'
  | 'wrong_account'
type ErrorBodyWithCodeErrors = { code: ErrorBodyCode; message: string; errors: ErrorBodyWithCode[] }
type DataIntegrationsListResponse = {
  object: 'list'
  data: {
    object: 'data_provider'
    id: string
    name: string
    description: string | null
    slug: string
    integration_type: string
    credentials_type: string
    scopes: string[] | null
    auth_methods?: ('oauth' | 'api_key' | 'client_credentials')[] | undefined
    connection_owner: 'user' | 'organization'
    ownership: 'userland_user' | 'organization'
    created_at: string
    updated_at: string
    integrationType: string
    credentialsType: string
    createdAt: string
    updatedAt: string
    connected_account: {
      object: 'connected_account'
      id: string
      connection_role: 'compatibility' | 'standard'
      account_identifier: string | null
      account_display_name: string | null
      user_id: string | null
      organization_id: string | null
      scopes: string[]
      auth_method?: 'oauth' | 'api_key' | 'client_credentials' | undefined
      api_key_last_4?: (string | null) | undefined
      client_id?: (string | null) | undefined
      client_secret_last_4?: (string | null) | undefined
      config?: { [key: string]: string } | undefined
      state: 'connected' | 'needs_reauthorization' | 'disconnected'
      established_by_user_id?: (string | null) | undefined
      state_reason?: ('establishing_member_membership_ended' | null) | undefined
      created_at: string
      updated_at: string
      warnings?: { code: 'duplicate_account_display_name'; message: string }[] | undefined
      userlandUserId: string | null
      organizationId: string | null
      createdAt: string
      updatedAt: string
    } | null
    connected_accounts: {
      object: 'connected_account'
      id: string
      connection_role: 'compatibility' | 'standard'
      account_identifier: string | null
      account_display_name: string | null
      user_id: string | null
      organization_id: string | null
      scopes: string[]
      auth_method?: 'oauth' | 'api_key' | 'client_credentials' | undefined
      api_key_last_4?: (string | null) | undefined
      client_id?: (string | null) | undefined
      client_secret_last_4?: (string | null) | undefined
      config?: { [key: string]: string } | undefined
      state: 'connected' | 'needs_reauthorization' | 'disconnected'
      established_by_user_id?: (string | null) | undefined
      state_reason?: ('establishing_member_membership_ended' | null) | undefined
      created_at: string
      updated_at: string
      warnings?: { code: 'duplicate_account_display_name'; message: string }[] | undefined
      userlandUserId: string | null
      organizationId: string | null
      createdAt: string
      updatedAt: string
    }[]
  }[]
}
type IssuerTrustList = {
  object: 'list'
  data: IssuerTrust[]
  list_metadata: { before: string | null; after: string | null }
}
type ItContact = {
  object: 'it_contact'
  id: string
  email: string
  created_at: string
  updated_at: string
}
type ItContactList = {
  object: 'list'
  data: ItContact[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateItContactDtoInput = { email: string }
type InviteItContactDtoInput = {
  intents: (
    | 'sso'
    | 'directory_sync'
    | 'log_streams'
    | 'domain_verification'
    | 'bring_your_own_key'
  )[]
}
type CreateTeamDtoInput = { admin_email: string; name: string }
type Team = {
  object: 'team'
  id: string
  name: string
  production_state: 'Active' | 'Inactive' | 'Suspended' | 'Deleting'
  production_enabled_at: string | null
  created_at: string
  updated_at: string
}
type GenerateLinkDtoInput = {
  return_url?: string
  success_url?: string
  organization: string
  external_user_id?: string
  intent?:
    | 'sso'
    | 'dsync'
    | 'audit_logs'
    | 'log_streams'
    | 'domain_verification'
    | 'certificate_renewal'
    | 'bring_your_own_key'
  it_contact_emails?: string[]
}
type PortalLinkResponse = { link: string }
type RevokeLinkDtoInput = { organization: string; external_user_id: string }
type RadarStandaloneResponse = {
  verdict: 'allow' | 'block' | 'challenge'
  reason: string
  attempt_id: string
  control?:
    | 'bot_detection'
    | 'brute_force_attack'
    | 'impossible_travel'
    | 'repeat_sign_up'
    | 'stale_account'
    | 'unrecognized_device'
    | 'restriction'
    | undefined
  blocklist_type?:
    | 'ip_address'
    | 'domain'
    | 'email'
    | 'device'
    | 'user_agent'
    | 'device_fingerprint'
    | 'country'
    | undefined
}
type RadarDetectionList = {
  type:
    | 'ip_address'
    | 'domain'
    | 'email'
    | 'device'
    | 'user_agent'
    | 'device_fingerprint'
    | 'country'
  action: 'allow' | 'block' | 'challenge' | 'log' | null
  name: string | null
  workos_managed: boolean
}
type RadarDetectionAllowedBy = {
  list_id: string
  list: RadarDetectionList | null
  entry?: string | undefined
}
type RadarDetectionBotDetectionSignal = {
  signal:
    | 'risky_ip'
    | 'anomalous_ip'
    | 'excessive_domain_sign_ups'
    | 'suspicious_browser_signals'
    | 'missing_device_fingerprint'
    | 'suspicious_email_pattern'
    | 'automated_client'
    | 'workos_risk_model'
  action?: 'block' | 'challenge' | undefined
}
type RadarDetectionIpSignUps = { count: number; window_minutes: number }
type RadarDetectionDomainSignUps = { root_domain: string; count?: number | undefined }
type RadarDetectionBotDetectionDetails = {
  signals: RadarDetectionBotDetectionSignal[]
  decided_by?:
    | 'risky_ip'
    | 'anomalous_ip'
    | 'excessive_domain_sign_ups'
    | 'suspicious_browser_signals'
    | 'missing_device_fingerprint'
    | 'suspicious_email_pattern'
    | 'automated_client'
    | 'workos_risk_model'
    | undefined
  ip_risk?: ('abuser' | 'anonymous' | 'vpn' | 'tor' | 'proxy')[] | undefined
  email_pattern?: ('generated_looking' | 'repeated_format' | 'suspicious_domain')[] | undefined
  browser_signals?:
    | (
        | 'automation_framework'
        | 'headless_browser'
        | 'tampered_signals'
        | 'inconsistent_hardware'
        | 'missing_signals'
        | 'missing_expected_signals'
      )[]
    | undefined
  ip_sign_ups?: RadarDetectionIpSignUps | undefined
  domain_sign_ups?: RadarDetectionDomainSignUps | undefined
}
type RadarDetectionBruteForceAttackDetails = {
  attempts: number
  window_minutes: number
  matched_on: 'device_fingerprint_and_email' | 'ip_and_email'
}
type RadarDetectionDomainProtectionsDetails = {
  list_id: string
  list: RadarDetectionList | null
  also_matched_list_ids?: string[] | undefined
  also_matched_lists?: (RadarDetectionList | null)[] | undefined
  matched_domain?: string | undefined
}
type RadarDetectionPreviousAttempt = {
  attempt_id: string
  ip_address?: string | undefined
  user_agent?: (string | null) | undefined
  location: { city: string | null; country: string | null }
  created_at: string
}
type RadarDetectionImpossibleTravelDetails = {
  previous: RadarDetectionPreviousAttempt
  distance_km: number
  speed_km_per_s: number
}
type RadarDetectionRepeatSignUpDetails = { [key: string]: unknown } & (
  | { matched_on: 'email'; prior_sign_ups: number; window_days: number }
  | { matched_on: 'normalized_email'; matched_user_id: string }
)
type RadarDetectionStaleAccountDetails = { last_activity_at: string | null }
type RadarDetectionUnrecognizedDeviceDetails = {
  previous_device: RadarDetectionPreviousAttempt | null
}
type RadarDetectionRestrictionDetails = { [key: string]: unknown } & (
  | { type: 'list'; list_id: string; list: RadarDetectionList | null; entry?: string | undefined }
  | { type: 'blocked_tld' }
  | { type: 'sign_up' }
  | {
      type: 'sms_sign_in'
      trigger:
        | 'country_mismatch'
        | 'non_mobile_line'
        | 'previously_selected'
        | 'unknown_line_type'
        | 'missing_signals'
      phone_country?: string | undefined
      line_type?: string | undefined
      masked_phone_number?: string | undefined
    }
)
type RadarDetectionEvidence = {
  summary: string
  allowed_by?: RadarDetectionAllowedBy | undefined
} & (
  | { control: 'bot_detection'; details: RadarDetectionBotDetectionDetails }
  | { control: 'brute_force_attack'; details: RadarDetectionBruteForceAttackDetails }
  | { control: 'domain_protections'; details: RadarDetectionDomainProtectionsDetails }
  | { control: 'impossible_travel'; details: RadarDetectionImpossibleTravelDetails }
  | { control: 'repeat_sign_up'; details: RadarDetectionRepeatSignUpDetails }
  | { control: 'stale_account'; details: RadarDetectionStaleAccountDetails }
  | { control: 'unrecognized_device'; details: RadarDetectionUnrecognizedDeviceDetails }
  | { control: 'restriction'; details: RadarDetectionRestrictionDetails }
)
type RadarDetection = {
  object: 'radar_detection'
  id: string
  attempt_id: string
  control:
    | 'bot_detection'
    | 'brute_force_attack'
    | 'domain_protections'
    | 'impossible_travel'
    | 'repeat_sign_up'
    | 'stale_account'
    | 'unrecognized_device'
    | 'restriction'
  verdict: 'allow' | 'block' | 'challenge' | 'log'
  challenge_type: 'email' | 'sms' | null
  evidence: RadarDetectionEvidence | null
  ip_address: string
  location: { city: string | null; country: string | null }
  user_agent: string
  email: string
  user_id: string | null
  action: 'signup' | 'login' | null
  auth_method:
    | 'password'
    | 'passkey'
    | 'magic_auth'
    | 'oauth'
    | 'sso'
    | 'authenticator'
    | 'sms_otp'
    | 'other'
    | null
  created_at: string
  updated_at: string
}
type RadarListEntryAlreadyPresentResponse = { message: string }
type SsoAuthorizeUrlResponse = { url: string }
type JwksResponse = {
  keys: {
    alg: 'RS256'
    kty: 'RSA'
    use: 'sig'
    x5c: string[]
    n: string
    e: string
    kid: string
    'x5t#S256': string
  }[]
}
type SsoLogoutAuthorizeResponse = { logout_url: string; logout_token: string }
type OAuthErrorBody = { error: string; error_description: string }
type Profile = {
  object: 'profile'
  id: string
  organization_id: string | null
  connection_id: string
  connection_type:
    | 'Pending'
    | 'ADFSSAML'
    | 'AdpOidc'
    | 'AppleOAuth'
    | 'Auth0Migration'
    | 'Auth0SAML'
    | 'AzureSAML'
    | 'BitbucketOAuth'
    | 'CasSAML'
    | 'ClassLinkSAML'
    | 'CleverOIDC'
    | 'CloudflareSAML'
    | 'CyberArkSAML'
    | 'DuoSAML'
    | 'EntraIdOIDC'
    | 'GenericOIDC'
    | 'GenericSAML'
    | 'GitHubOAuth'
    | 'GitLabOAuth'
    | 'GoogleOAuth'
    | 'GoogleOIDC'
    | 'GoogleSAML'
    | 'IntuitOAuth'
    | 'JumpCloudSAML'
    | 'KeycloakSAML'
    | 'LastPassSAML'
    | 'LinkedInOAuth'
    | 'LoginGovOidc'
    | 'MagicLink'
    | 'MicrosoftOAuth'
    | 'MiniOrangeSAML'
    | 'NetIqSAML'
    | 'OktaOIDC'
    | 'OktaSAML'
    | 'OneLoginSAML'
    | 'OracleSAML'
    | 'PingFederateSAML'
    | 'PingOneSAML'
    | 'RipplingSAML'
    | 'SalesforceSAML'
    | 'ShibbolethGenericSAML'
    | 'ShibbolethSAML'
    | 'SimpleSamlPhpSAML'
    | 'SalesforceOAuth'
    | 'SlackOAuth'
    | 'TestIdp'
    | 'VercelMarketplaceOAuth'
    | 'VercelOAuth'
    | 'VMwareSAML'
    | 'XeroOAuth'
  idp_id: string
  email: string
  first_name: string | null
  last_name: string | null
  name: string | null
  role?: (SlimRole | null) | undefined
  roles?: (SlimRole[] | null) | undefined
  groups?: string[] | undefined
  custom_attributes?: { [key: string]: any } | undefined
  raw_attributes: { [key: string]: any }
}
type UnauthorizedErrorBody = { error: 'Unauthorized' }
type TokenQueryDtoInput = {
  client_id: string
  client_secret: string
  code?: string
  grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
  code_verifier?: string
  subject_token?: string
  subject_token_type?: 'urn:ietf:params:oauth:token-type:id_token'
  organization_id?: string
}
type SsoTokenResponse = {
  token_type: 'Bearer'
  access_token: string
  expires_in: number
  profile: Profile
  oauth_tokens?:
    | {
        provider: string
        refresh_token: string
        access_token: string
        expires_at: number
        scopes: string[]
      }
    | undefined
}
type UserlandAuthenticateResponse = {
  user: UserlandUser
  organization_id?: string | undefined
  authkit_authorization_code?: string | undefined
  access_token: string
  refresh_token: string
  authentication_method?:
    | 'SSO'
    | 'Password'
    | 'Passkey'
    | 'AppleOAuth'
    | 'BitbucketOAuth'
    | 'CrossAppAuth'
    | 'ExternalAuth'
    | 'GitHubOAuth'
    | 'GitLabOAuth'
    | 'GoogleOAuth'
    | 'IntuitOAuth'
    | 'LinkedInOAuth'
    | 'MicrosoftOAuth'
    | 'SalesforceOAuth'
    | 'SlackOAuth'
    | 'VercelMarketplaceOAuth'
    | 'VercelOAuth'
    | 'XeroOAuth'
    | 'MagicAuth'
    | 'Impersonation'
    | 'MigratedSession'
    | undefined
  impersonator?: { email: string; reason: string | null } | undefined
  oauth_tokens?:
    | {
        provider: string
        refresh_token: string
        access_token: string
        expires_at: number
        scopes: string[]
      }
    | undefined
}
type InvalidOrganizationIdErrorBody = { code: 'invalid_organization_id'; message: string }
type CodeChallengeNotFoundErrorBody = { code: 'code_challenge_not_found'; message: string }
type InvalidCredentialsErrorBody = { code: 'invalid_credentials'; message: string }
type InvalidOneTimeCodeErrorBody = { code: 'invalid_one_time_code'; message: string }
type OneTimeCodePreviouslyUsedErrorBody = { code: 'one_time_code_previously_used'; message: string }
type OneTimeCodeExpiredErrorBody = { code: 'one_time_code_expired'; message: string }
type OneTimeCodeTooManyAttemptsErrorBody = {
  code: 'one_time_code_too_many_attempts'
  message: string
}
type InvalidPendingAuthenticationTokenErrorBody = {
  code: 'invalid_pending_authentication_token'
  message: string
}
type UserMismatchErrorBody = { code: 'user_mismatch'; message: string }
type PhoneNumberRequiredErrorBody = { code: 'phone_number_required'; message: string }
type VerificationIdRequiredErrorBody = { code: 'verification_id_required'; message: string }
type InvalidClientOAuthErrorBody = { error: 'invalid_client'; error_description: string }
type UnauthorizedClientOAuthErrorBody = { error: 'unauthorized_client'; error_description: string }
type InvalidProfileOAuthErrorBody = { error: 'invalid_profile'; error_description: string }
type InvitationInvalidOAuthErrorBody = { error: 'invitation_invalid'; error_description: string }
type InvitationCannotBeUsedForEmailOAuthErrorBody = {
  error: 'invitation_cannot_be_used_for_email'
  error_description: string
}
type AuthenticationMethodNotAllowedOAuthErrorBody = {
  error: 'authentication_method_not_allowed'
  error_description: string
}
type InvalidConnectionOAuthErrorBody = { error: 'invalid_connection'; error_description: string }
type SignUpNotAllowedOAuthErrorBody = { error: 'sign_up_not_allowed'; error_description: string }
type OrganizationAuthenticationMethodsRequiredOAuthErrorBody = {
  error: 'organization_authentication_methods_required'
  error_description: string
}
type InvalidLinkAuthorizationCodeOAuthErrorBody = {
  error: 'invalid_link_authorization_code'
  error_description: string
}
type ExtraAttributesRequiredOAuthErrorBody = {
  error: 'extra_attributes_required'
  error_description: string
}
type PkceNotSupportedOAuthErrorBody = { error: 'pkce_not_supported'; error_description: string }
type ExpiredTokenOAuthErrorBody = { error: 'expired_token'; error_description: string }
type AuthorizationPendingOAuthErrorBody = {
  error: 'authorization_pending'
  error_description: string
}
type AccessDeniedOAuthErrorBody = { error: 'access_denied'; error_description: string }
type SlowDownOAuthErrorBody = { error: 'slow_down'; error_description: string }
type MustUseSsoForSelectedOrganizationMessageErrorBody = {
  message: 'Must use SSO for selected organization'
}
type InvalidGrantOAuthErrorBody = { error: 'invalid_grant'; error_description: string }
type InvalidRequestOAuthErrorBody = { error: 'invalid_request'; error_description: string }
type OrganizationNotFoundOAuthErrorBody = {
  error: 'organization_not_found'
  error_description: string
}
type OrganizationMembershipNotFoundOAuthErrorBody = {
  error: 'organization_membership_not_found'
  error_description: string
}
type MfaEnrollmentOAuthErrorBody = { error: 'mfa_enrollment'; error_description: string }
type TokenTooBigOAuthErrorBody = { error: 'token_too_big'; error_description: string }
type MfaEnrollmentErrorBody = { code: 'mfa_enrollment'; message: string }
type MfaChallengeErrorBody = { code: 'mfa_challenge'; message: string }
type AuthenticationMethodNotAllowedErrorBody = {
  code: 'authentication_method_not_allowed'
  message: string
}
type EmailCompletionRequiredErrorBodyWithEmailCompletionToken = {
  code: 'email_completion_required'
  message: string
  email_completion_token: string
}
type EmailVerificationRequiredErrorBody = { code: 'email_verification_required'; message: string }
type EmailPasswordAuthDisabledErrorBody = { code: 'email_password_auth_disabled'; message: string }
type OrganizationSelectionRequiredErrorBody = {
  code: 'organization_selection_required'
  message: string
}
type PasskeyProgressiveEnrollmentErrorBody = {
  code: 'passkey_progressive_enrollment'
  message: string
}
type RadarChallengeErrorBody = { code: 'radar_challenge'; message: string }
type RadarEmailChallengeErrorBody = { code: 'radar_email_challenge'; message: string }
type RadarSignUpChallengeErrorBody = { code: 'radar_sign_up_challenge'; message: string }
type RadarSmsChallengeErrorBody = { code: 'radar_sms_challenge'; message: string }
type RadarSmsSignInChallengeErrorBody = { code: 'radar_sms_sign_in_challenge'; message: string }
type ApplicationConsentRequiredErrorBody = { code: 'application_consent_required'; message: string }
type PolicyDeniedErrorBody = {
  code: 'policy_denied'
  message: string
  radar_detection_id?: string | undefined
}
type ActionDeniedErrorBody = { code: 'action_denied'; message: string }
type DailyQuotaExceededErrorBody = { code: 'daily_quota_exceeded'; message: string }
type TooManyRequestsOAuthErrorBody = { error: 'too_many_requests'; error_description: string }
type CreateAuthkitOauthResourceDtoInput = { uri: string; default?: boolean }
type AuthkitOauthResource = {
  object: 'authkit_oauth_resource'
  id: string
  uri: string
  default: boolean
  created_at: string
  updated_at: string
}
type DeviceAuthorizationResponse = {
  device_code: string
  user_code: string
  verification_uri: string
  verification_uri_complete?: string | undefined
  expires_in: number
  interval?: number | undefined
}
type CreateCorsOriginDtoInput = { origin: string }
type CorsOriginResponse = {
  object: 'cors_origin'
  id: string
  origin: string
  created_at: string
  updated_at: string
}
type ErrorBodyWithConstraintsPropertyError = {
  property?: string | undefined
  constraints?: { [key: string]: unknown } | undefined
}
type ErrorBodyWithConstraintsPropertyErrors = {
  message?: string | undefined
  errors?: ErrorBodyWithConstraintsPropertyError[] | undefined
}
type EmailVerification = {
  object: 'email_verification'
  id: string
  user_id: string
  email: string
  expires_at: string
  created_at: string
  updated_at: string
  code: string
}
type UserlandUserInvite = {
  object: 'invitation'
  id: string
  email: string
  state: 'pending' | 'accepted' | 'expired' | 'revoked'
  accepted_at: string | null
  revoked_at: string | null
  expires_at: string
  organization_id: string | null
  inviter_user_id: string | null
  accepted_user_id: string | null
  role_slug: string | null
  created_at: string
  updated_at: string
  token: string
  accept_invitation_url: string
}
type UserlandUserInviteList = {
  object: 'list'
  data: UserlandUserInvite[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateUserlandUserInviteOptionsDtoInput = {
  email: string
  organization_id?: string
  role_slug?: string
  expires_in_days?: number
  inviter_user_id?: string
  locale?:
    | 'af'
    | 'am'
    | 'ar'
    | 'bg'
    | 'bn'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'de-DE'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-ES'
    | 'es-US'
    | 'et'
    | 'fa'
    | 'fi'
    | 'fil'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-FR'
    | 'fy'
    | 'gl'
    | 'gu'
    | 'ha'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'hy'
    | 'id'
    | 'is'
    | 'it'
    | 'it-IT'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'no'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu'
}
type ResendUserlandUserInviteOptionsDtoInput = {
  locale?:
    | 'af'
    | 'am'
    | 'ar'
    | 'bg'
    | 'bn'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'de-DE'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-ES'
    | 'es-US'
    | 'et'
    | 'fa'
    | 'fi'
    | 'fil'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-FR'
    | 'fy'
    | 'gl'
    | 'gu'
    | 'ha'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'hy'
    | 'id'
    | 'is'
    | 'it'
    | 'it-IT'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'no'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu'
}
type JwtTemplate = {
  object: 'jwt_template'
  content: string
  created_at: string
  updated_at: string
}
type UpdateJwtTemplateDtoInput = { content: string }
type CreateUserlandMagicCodeAndReturnDtoInput = {
  email: string
  invitation_token?: string
  ip_address?: string
  user_agent?: string
  radar_auth_attempt_id?: string
  signals_id?: string
  locale?:
    | 'af'
    | 'am'
    | 'ar'
    | 'bg'
    | 'bn'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'de-DE'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-ES'
    | 'es-US'
    | 'et'
    | 'fa'
    | 'fi'
    | 'fil'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-FR'
    | 'fy'
    | 'gl'
    | 'gu'
    | 'ha'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'hy'
    | 'id'
    | 'is'
    | 'it'
    | 'it-IT'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'no'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu'
}
type MagicAuth = {
  object: 'magic_auth'
  id: string
  user_id: string
  email: string
  expires_at: string
  created_at: string
  updated_at: string
  code: string
}
type EmailDomainNotDeliverableErrorBody = { code: 'email_domain_not_deliverable'; message: string }
type UserlandUserOrganizationMembership = {
  object: 'organization_membership'
  id: string
  user_id: string
  organization_id: string
  status: 'active' | 'inactive' | 'pending'
  directory_managed: boolean
  organization_name?: string | undefined
  custom_attributes?: { [key: string]: any } | undefined
  created_at: string
  updated_at: string
  role: SlimRole
  roles: SlimRole[]
  user: UserlandUser
}
type UserlandUserOrganizationMembershipList = {
  object: 'list'
  data: UserlandUserOrganizationMembership[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateUserlandUserOrganizationMembershipDtoInput = {
  user_id: string
  organization_id: string
} & ({ [key: string]: unknown } | { role_slug: string } | { role_slugs: string[] })
type EntitiesNotFoundErrorBodyWithIdsList = {
  code: 'entities_not_found'
  message: string
  ids: string[]
}
type EntityNotFoundErrorBodyWithEntityId = {
  code: 'entity_not_found'
  message: string
  entity_id: string
}
type InvalidRequestParametersErrorBody = { code: 'invalid_request_parameters'; message: string }
type InvalidRoleErrorBody = { code: 'invalid_role'; message: string }
type MultipleRolesNotEnabledErrorBody = { code: 'multiple_roles_not_enabled'; message: string }
type SubResourceScopedRoleNotAllowedErrorBodyWithRoleSlug = {
  message: string
  code: 'sub_resource_scoped_role_not_allowed'
  role_slug: string
}
type UpdateUserlandUserOrganizationMembershipDtoInput =
  | { [key: string]: unknown }
  | { role_slug: string }
  | { role_slugs: string[] }
type CreatePasswordResetTokenDtoInput = {
  email: string
  locale?:
    | 'af'
    | 'am'
    | 'ar'
    | 'bg'
    | 'bn'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'de-DE'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-ES'
    | 'es-US'
    | 'et'
    | 'fa'
    | 'fi'
    | 'fil'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-FR'
    | 'fy'
    | 'gl'
    | 'gu'
    | 'ha'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'hy'
    | 'id'
    | 'is'
    | 'it'
    | 'it-IT'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'no'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu'
}
type PasswordReset = {
  object: 'password_reset'
  id: string
  user_id: string
  email: string
  expires_at: string
  created_at: string
  password_reset_token: string
  password_reset_url: string
}
type CreatePasswordResetDtoInput = { token: string; new_password: string }
type ResetPasswordResponse = { user: UserlandUser }
type SendRadarSmsChallengeDtoInput = {
  user_id: string
  pending_authentication_token: string
  phone_number: string
  ip_address?: string
  user_agent?: string
}
type SendRadarSmsChallengeResponse = { verification_id: string; phone_number: string }
type RadarChallenge = {
  object: 'radar_challenge'
  id: string
  type: 'email'
  user_id: string
  email: string
  expires_at: string
  created_at: string
  updated_at: string
  code: string
}
type CreateRedirectUriDtoInput = { uri: string }
type RedirectUri = {
  object: 'redirect_uri'
  id: string
  uri: string
  default: boolean
  created_at: string
  updated_at: string
}
type UserlandRevokeSessionDtoInput = { session_id: string }
type UserlandUserList = {
  object: 'list'
  data: UserlandUser[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateUserlandUserDtoInput = {
  email: string
  first_name?: string | null
  last_name?: string | null
  name?: string | null
  email_verified?: boolean | null
  metadata?: { [key: string]: string } | null
  external_id?: string | null
  ip_address?: string | null
  user_agent?: string | null
  signals_id?: string
} & (
  | { [key: string]: unknown }
  | { password: string | null }
  | {
      password_hash: string
      password_hash_type:
        | 'bcrypt'
        | 'firebase-scrypt'
        | 'ssha'
        | 'ssha256'
        | 'scrypt'
        | 'pbkdf2'
        | 'argon2'
      password_salt_position?: 'prefix' | 'suffix'
    }
)
type PasswordStrengthErrorErrorBodyWithErrors = {
  code: 'password_strength_error'
  message: string
  errors: ErrorBodyWithCode[]
}
type UserCreationErrorErrorBodyWithErrors = {
  code: 'user_creation_error'
  message: string
  errors: ErrorBodyWithCode[]
}
type InvalidPasswordHashErrorBody = { code: 'invalid_password_hash'; message: string }
type PasswordAndPasswordHashProvidedErrorBody = {
  code: 'password_and_password_hash_provided'
  message: string
}
type PasswordAndPasswordHashTypeProvidedErrorBody = {
  code: 'password_and_password_hash_type_provided'
  message: string
}
type PasswordSaltPositionRequiresPasswordHashErrorBody = {
  code: 'password_salt_position_requires_password_hash'
  message: string
}
type InvalidMetadataErrorBody = { code: 'invalid_metadata'; message: string }
type UpdateUserlandUserDtoInput = {
  email?: string
  first_name?: string
  last_name?: string
  name?: string
  email_verified?: boolean
  metadata?: { [key: string]: string } | null
  external_id?: string | null
  locale?: string | null
} & (
  | { [key: string]: unknown }
  | { password: string }
  | {
      password_hash: string
      password_hash_type:
        | 'bcrypt'
        | 'firebase-scrypt'
        | 'ssha'
        | 'ssha256'
        | 'scrypt'
        | 'pbkdf2'
        | 'argon2'
      password_salt_position?: 'prefix' | 'suffix'
    }
)
type EmailAlreadyVerifiedErrorBody = { code: 'email_already_verified'; message: string }
type ExternalIdAlreadyUsedErrorBody = { code: 'external_id_already_used'; message: string }
type InvalidLocaleErrorBody = { code: 'invalid_locale'; message: string }
type ConfirmEmailChangeDtoInput = { code: string }
type SendEmailChangeDtoInput = {
  new_email: string
  locale?:
    | 'af'
    | 'am'
    | 'ar'
    | 'bg'
    | 'bn'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'de-DE'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-ES'
    | 'es-US'
    | 'et'
    | 'fa'
    | 'fi'
    | 'fil'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-FR'
    | 'fy'
    | 'gl'
    | 'gu'
    | 'ha'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'hy'
    | 'id'
    | 'is'
    | 'it'
    | 'it-IT'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'no'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu'
}
type EmailChange = {
  object: 'email_change'
  user: UserlandUser
  new_email: string
  expires_at: string
  created_at: string
}
type VerifyEmailAddressDtoInput = { code: string }
type VerifyEmailResponse = { user: UserlandUser }
type SendVerificationEmailDtoInput = {
  locale?:
    | 'af'
    | 'am'
    | 'ar'
    | 'bg'
    | 'bn'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'de-DE'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-ES'
    | 'es-US'
    | 'et'
    | 'fa'
    | 'fi'
    | 'fil'
    | 'fr'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-FR'
    | 'fy'
    | 'gl'
    | 'gu'
    | 'ha'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'hy'
    | 'id'
    | 'is'
    | 'it'
    | 'it-IT'
    | 'ja'
    | 'jv'
    | 'ka'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn'
    | 'no'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu'
}
type SendVerificationEmailResponse = { user: UserlandUser }
type UserApiKey = {
  object: 'api_key'
  id: string
  owner: { type: 'user'; id: string; organization_id: string }
  name: string
  obfuscated_value: string
  last_used_at: string | null
  expires_at: string | null
  permissions: string[]
  created_at: string
  updated_at: string
}
type UserApiKeyList = {
  object: 'list'
  data: UserApiKey[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateUserApiKeyDtoInput = {
  name: string
  organization_id: string
  permissions?: string[]
  expires_at?: string
}
type UserApiKeyWithValue = {
  object: 'api_key'
  id: string
  owner: { type: 'user'; id: string; organization_id: string }
  name: string
  obfuscated_value: string
  last_used_at: string | null
  expires_at: string | null
  permissions: string[]
  created_at: string
  updated_at: string
  value: string
}
type AuthorizedConnectApplicationList = {
  object: 'list'
  data: {
    object: 'authorized_connect_application'
    id: string
    granted_scopes: string[]
    oauth_resource?: string | undefined
    application: ConnectApplication
  }[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateConnectedAccountDtoInput = {
  account_display_name?: string | null
  account_identifier?: string | null
  config?: { [key: string]: string }
  access_token?: string
  refresh_token?: string
  expires_at?: string
  scopes?: string[]
  state?: 'connected' | 'needs_reauthorization'
  metadata?: { [key: string]: unknown }
  connection_intent?: 'add'
}
type UserConnectedAccountImportErrorBody = {
  code:
    | 'invalid_refresh_token'
    | 'invalid_token_combination'
    | 'invalid_data_integration_state'
    | 'client_credentials_not_configured'
  message: string
}
type ConnectedAccountDtoInput = {
  account_display_name?: string | null
  account_identifier?: string | null
  config?: { [key: string]: string }
  access_token?: string
  refresh_token?: string
  expires_at?: string
  scopes?: string[]
  state?: 'connected' | 'needs_reauthorization'
}
type InvalidRefreshTokenErrorBody = { code: 'invalid_refresh_token'; message: string }
type EnrollUserlandUserAuthenticationFactorDtoInput = {
  type: 'totp'
  totp_issuer?: string
  totp_user?: string
  totp_secret?: string
}
type UserlandUserAuthenticationFactorEnrollResponse = {
  authentication_factor: AuthenticationFactorEnrolled
  authentication_challenge: AuthenticationChallenge
}
type UserlandUserAuthenticationFactorList = {
  object: 'list'
  data: AuthenticationFactor[]
  list_metadata: { before: string | null; after: string | null }
}
type Waitlist = { object: 'waitlist'; id: string; created_at: string; updated_at: string }
type WaitlistEntry = {
  id: string
  email: string
  state: 'pending' | 'approved' | 'denied'
  approved_at: string | null
  additional_fields?: { [key: string]: string } | undefined
  waitlist_id?: (string | null) | undefined
  created_at: string
  updated_at: string
  object: 'waitlist_entry'
}
type CreateWaitlistEntryDtoInput = {
  email: string
  additional_fields?: { [key: string]: string }
  send_confirmation_email?: boolean
}
type CreateDataKeyRequestInput = { context: { [key: string]: string } }
type CreateDataKeyResponse = {
  context: { [key: string]: string }
  data_key: string
  encrypted_keys: string
  id: string
}
type Error = { error: string }
type DecryptRequestInput = { keys: string }
type DecryptResponse = { data_key: string; id: string }
type RekeyRequestInput = { context: { [key: string]: string }; encrypted_keys: string }
type ObjectSummary = { id: string; name: string; updated_at?: (string | null) | undefined }
type ListMetadata = { after?: (string | null) | undefined; before?: (string | null) | undefined }
type ObjectListResponse = { data: ObjectSummary[]; list_metadata: ListMetadata }
type CreateObjectRequestInput = {
  key_context: { [key: string]: string }
  name: string
  value: string
}
type Actor = { id: string; name: string }
type ObjectMetadata = {
  context: { [key: string]: string }
  environment_id: string
  id: string
  key_id: string
  updated_at: string
  updated_by: Actor
  version_id?: (string | null) | undefined
}
type Object = { id: string; metadata: ObjectMetadata; name: string; value: string }
type DeleteObjectResponse = { name: string; success: boolean }
type UpdateObjectRequestInput = { value: string; version_check?: string | null }
type ObjectWithoutValue = { id: string; metadata: ObjectMetadata; name: string }
type ObjectVersion = {
  created_at: string
  current_version: boolean
  etag: string
  id: string
  size: number
}
type VersionListResponse = { data: ObjectVersion[]; list_metadata: ListMetadata }
type WebhookEndpointJson = {
  object: 'webhook_endpoint'
  id: string
  endpoint_url: string
  secret: string
  status: 'enabled' | 'disabled'
  events: string[]
  created_at: string
  updated_at: string
}
type WebhookEndpointList = {
  object: 'list'
  data: WebhookEndpointJson[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateWebhookEndpointDtoInput = {
  endpoint_url: string
  events: (
    | 'agent.blueprint.created'
    | 'agent.blueprint.deleted'
    | 'agent.blueprint.updated'
    | 'agent.instance.created'
    | 'agent.instance.deleted'
    | 'agent.instance.session.created'
    | 'agent.instance.session.revoked'
    | 'agent.registration.created'
    | 'agent.registration.claim.attempt.created'
    | 'agent.registration.claim.completed'
    | 'agent.registration.credential.issued'
    | 'agent.registration.deleted'
    | 'agent.registration.refreshed'
    | 'agent.registration.expired'
    | 'agent.registration.organization.switched'
    | 'agent.registration.revoked'
    | 'authentication.email_verification_succeeded'
    | 'authentication.magic_auth_failed'
    | 'authentication.magic_auth_succeeded'
    | 'authentication.mfa_succeeded'
    | 'authentication.oauth_failed'
    | 'authentication.oauth_succeeded'
    | 'authentication.password_failed'
    | 'authentication.password_succeeded'
    | 'authentication.passkey_failed'
    | 'authentication.passkey_succeeded'
    | 'authentication.sso_failed'
    | 'authentication.sso_started'
    | 'authentication.sso_succeeded'
    | 'authentication.sso_timed_out'
    | 'radar.challenge_created'
    | 'authentication.radar_risk_detected'
    | 'authentication.reauthentication_succeeded'
    | 'api_key.created'
    | 'api_key.revoked'
    | 'api_key.updated'
    | 'application.token_exchange_failed'
    | 'application.token_exchange_succeeded'
    | 'connection.activated'
    | 'connection.deactivated'
    | 'connection.saml_certificate_renewal_required'
    | 'connection.saml_certificate_renewed'
    | 'connection.saml_certificate_replaced'
    | 'connection.deleted'
    | 'dsync.activated'
    | 'dsync.deleted'
    | 'dsync.group.created'
    | 'dsync.group.deleted'
    | 'dsync.group.updated'
    | 'dsync.group.user_added'
    | 'dsync.group.user_removed'
    | 'dsync.user.created'
    | 'dsync.user.deleted'
    | 'dsync.user.updated'
    | 'email_verification.created'
    | 'group.created'
    | 'group.deleted'
    | 'group.member_added'
    | 'group.member_removed'
    | 'group.updated'
    | 'flag.created'
    | 'flag.deleted'
    | 'flag.updated'
    | 'flag.rule_updated'
    | 'feature_flags.flag.created'
    | 'feature_flags.flag.updated'
    | 'feature_flags.flag.deleted'
    | 'feature_flags.flag_rule.created'
    | 'feature_flags.flag_rule.updated'
    | 'feature_flags.flag_target.created'
    | 'feature_flags.flag_rule.deleted'
    | 'feature_flags.flag_target.deleted'
    | 'invitation.accepted'
    | 'invitation.created'
    | 'invitation.resent'
    | 'invitation.revoked'
    | 'issuer_trust.created'
    | 'issuer_trust.deleted'
    | 'issuer_trust.updated'
    | 'magic_auth.created'
    | 'organization.created'
    | 'organization.deleted'
    | 'organization.updated'
    | 'organization_domain.created'
    | 'organization_domain.deleted'
    | 'organization_domain.updated'
    | 'organization_domain.verified'
    | 'organization_domain.verification_failed'
    | 'password_reset.created'
    | 'password_reset.succeeded'
    | 'user.created'
    | 'user.updated'
    | 'user.deleted'
    | 'organization_membership.created'
    | 'organization_membership.deleted'
    | 'organization_membership.updated'
    | 'role.created'
    | 'role.deleted'
    | 'role.updated'
    | 'organization_role.created'
    | 'organization_role.deleted'
    | 'organization_role.updated'
    | 'permission.created'
    | 'permission.deleted'
    | 'permission.updated'
    | 'pipes.account_connection.add_failed'
    | 'pipes.account_connection.connected'
    | 'pipes.account_connection.connection_failed'
    | 'pipes.account_connection.disconnected'
    | 'pipes.account_connection.reauthorization_needed'
    | 'pipes.connected_account.connected'
    | 'pipes.connected_account.connection_failed'
    | 'pipes.connected_account.disconnected'
    | 'pipes.connected_account.reauthorization_needed'
    | 'session.created'
    | 'session.revoked'
    | 'waitlist_user.approved'
    | 'waitlist_user.created'
    | 'waitlist_user.denied'
  )[]
}
type InvalidUrlErrorBody = { code: 'invalid_url'; message: string }
type UpdateWebhookEndpointDtoInput = {
  endpoint_url?: string
  status?: 'enabled' | 'disabled'
  events?: (
    | 'agent.blueprint.created'
    | 'agent.blueprint.deleted'
    | 'agent.blueprint.updated'
    | 'agent.instance.created'
    | 'agent.instance.deleted'
    | 'agent.instance.session.created'
    | 'agent.instance.session.revoked'
    | 'agent.registration.created'
    | 'agent.registration.claim.attempt.created'
    | 'agent.registration.claim.completed'
    | 'agent.registration.credential.issued'
    | 'agent.registration.deleted'
    | 'agent.registration.refreshed'
    | 'agent.registration.expired'
    | 'agent.registration.organization.switched'
    | 'agent.registration.revoked'
    | 'authentication.email_verification_succeeded'
    | 'authentication.magic_auth_failed'
    | 'authentication.magic_auth_succeeded'
    | 'authentication.mfa_succeeded'
    | 'authentication.oauth_failed'
    | 'authentication.oauth_succeeded'
    | 'authentication.password_failed'
    | 'authentication.password_succeeded'
    | 'authentication.passkey_failed'
    | 'authentication.passkey_succeeded'
    | 'authentication.sso_failed'
    | 'authentication.sso_started'
    | 'authentication.sso_succeeded'
    | 'authentication.sso_timed_out'
    | 'radar.challenge_created'
    | 'authentication.radar_risk_detected'
    | 'authentication.reauthentication_succeeded'
    | 'api_key.created'
    | 'api_key.revoked'
    | 'api_key.updated'
    | 'application.token_exchange_failed'
    | 'application.token_exchange_succeeded'
    | 'connection.activated'
    | 'connection.deactivated'
    | 'connection.saml_certificate_renewal_required'
    | 'connection.saml_certificate_renewed'
    | 'connection.saml_certificate_replaced'
    | 'connection.deleted'
    | 'dsync.activated'
    | 'dsync.deleted'
    | 'dsync.group.created'
    | 'dsync.group.deleted'
    | 'dsync.group.updated'
    | 'dsync.group.user_added'
    | 'dsync.group.user_removed'
    | 'dsync.user.created'
    | 'dsync.user.deleted'
    | 'dsync.user.updated'
    | 'email_verification.created'
    | 'group.created'
    | 'group.deleted'
    | 'group.member_added'
    | 'group.member_removed'
    | 'group.updated'
    | 'flag.created'
    | 'flag.deleted'
    | 'flag.updated'
    | 'flag.rule_updated'
    | 'feature_flags.flag.created'
    | 'feature_flags.flag.updated'
    | 'feature_flags.flag.deleted'
    | 'feature_flags.flag_rule.created'
    | 'feature_flags.flag_rule.updated'
    | 'feature_flags.flag_target.created'
    | 'feature_flags.flag_rule.deleted'
    | 'feature_flags.flag_target.deleted'
    | 'invitation.accepted'
    | 'invitation.created'
    | 'invitation.resent'
    | 'invitation.revoked'
    | 'issuer_trust.created'
    | 'issuer_trust.deleted'
    | 'issuer_trust.updated'
    | 'magic_auth.created'
    | 'organization.created'
    | 'organization.deleted'
    | 'organization.updated'
    | 'organization_domain.created'
    | 'organization_domain.deleted'
    | 'organization_domain.updated'
    | 'organization_domain.verified'
    | 'organization_domain.verification_failed'
    | 'password_reset.created'
    | 'password_reset.succeeded'
    | 'user.created'
    | 'user.updated'
    | 'user.deleted'
    | 'organization_membership.created'
    | 'organization_membership.deleted'
    | 'organization_membership.updated'
    | 'role.created'
    | 'role.deleted'
    | 'role.updated'
    | 'organization_role.created'
    | 'organization_role.deleted'
    | 'organization_role.updated'
    | 'permission.created'
    | 'permission.deleted'
    | 'permission.updated'
    | 'pipes.account_connection.add_failed'
    | 'pipes.account_connection.connected'
    | 'pipes.account_connection.connection_failed'
    | 'pipes.account_connection.disconnected'
    | 'pipes.account_connection.reauthorization_needed'
    | 'pipes.connected_account.connected'
    | 'pipes.connected_account.connection_failed'
    | 'pipes.connected_account.disconnected'
    | 'pipes.connected_account.reauthorization_needed'
    | 'session.created'
    | 'session.revoked'
    | 'waitlist_user.approved'
    | 'waitlist_user.created'
    | 'waitlist_user.denied'
  )[]
}
type WidgetSessionTokenDtoInput = {
  organization_id?: string
  user_id?: string
  scopes?: (
    | 'widgets:users-table:manage'
    | 'widgets:user-api-keys:manage-self'
    | 'widgets:user-api-keys:manage-all'
    | 'widgets:domain-verification:manage'
    | 'widgets:sso:manage'
    | 'widgets:api-keys:manage'
    | 'widgets:dsync:manage'
    | 'widgets:audit-log-streaming:manage'
    | 'widgets:pipes:manage'
  )[]
}
type WidgetSessionTokenResponse = { token: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/agents/blueprints': {
      $post:
        | {
            input: {
              json: {
                name: string
                description?: string
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds: number
                  access_token_ttl_seconds: number
                  refresh_token_ttl_seconds: number
                }
              }
            }
            output: AgentBlueprint
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                description?: string
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds: number
                  access_token_ttl_seconds: number
                  refresh_token_ttl_seconds: number
                }
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: string
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds: number
                  access_token_ttl_seconds: number
                  refresh_token_ttl_seconds: number
                }
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                name: string
                description?: string
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds: number
                  access_token_ttl_seconds: number
                  refresh_token_ttl_seconds: number
                }
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: AgentBlueprint[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/agents/blueprints/:agent_blueprint_id': {
      $get:
        | {
            input: { param: { agent_blueprint_id: string } }
            output: AgentBlueprint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_blueprint_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string
                description?: string | null
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds?: number
                  access_token_ttl_seconds?: number
                  refresh_token_ttl_seconds?: number
                }
              }
            }
            output: AgentBlueprint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string
                description?: string | null
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds?: number
                  access_token_ttl_seconds?: number
                  refresh_token_ttl_seconds?: number
                }
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string
                description?: string | null
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds?: number
                  access_token_ttl_seconds?: number
                  refresh_token_ttl_seconds?: number
                }
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string
                description?: string | null
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds?: number
                  access_token_ttl_seconds?: number
                  refresh_token_ttl_seconds?: number
                }
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string
                description?: string | null
                permissions?: (
                  | { slug: string; instance_types: ('delegated' | 'autonomous')[] }
                  | string
                )[]
                invocable_by?: { role_slugs?: string[]; organization_ids?: string[] }
                invocable_as?: { instance_types?: ('delegated' | 'autonomous')[] }
                session_settings?: {
                  max_age_seconds?: number
                  access_token_ttl_seconds?: number
                  refresh_token_ttl_seconds?: number
                }
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { agent_blueprint_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { agent_blueprint_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/agents/blueprints/:agent_blueprint_id/tokens': {
      $post:
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json:
                | { type: 'user_delegated'; user_access_token: string; intent?: string }
                | { type: 'autonomous'; organization_id: string; intent?: string }
                | { type: 'agent_delegated'; agent_access_token: string; intent?: string }
                | { type: 'refresh'; refresh_token: string; intent?: string }
            }
            output: AgentToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json:
                | { type: 'user_delegated'; user_access_token: string; intent?: string }
                | { type: 'autonomous'; organization_id: string; intent?: string }
                | { type: 'agent_delegated'; agent_access_token: string; intent?: string }
                | { type: 'refresh'; refresh_token: string; intent?: string }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json:
                | { type: 'user_delegated'; user_access_token: string; intent?: string }
                | { type: 'autonomous'; organization_id: string; intent?: string }
                | { type: 'agent_delegated'; agent_access_token: string; intent?: string }
                | { type: 'refresh'; refresh_token: string; intent?: string }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json:
                | { type: 'user_delegated'; user_access_token: string; intent?: string }
                | { type: 'autonomous'; organization_id: string; intent?: string }
                | { type: 'agent_delegated'; agent_access_token: string; intent?: string }
                | { type: 'refresh'; refresh_token: string; intent?: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/agents/blueprints/:agent_blueprint_id/tokens/validate': {
      $post:
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: { agent_access_token: string }
            }
            output: AgentTokenValidation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: { agent_access_token: string }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: { agent_access_token: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/agents/claims/attempts': {
      $patch:
        | {
            input: {
              json: {
                type: 'link_external_user'
                claim_attempt_token: string
                user: { email: string; external_id: string }
                organization_id?: string
              }
            }
            output: ClaimViewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type: 'link_external_user'
                claim_attempt_token: string
                user: { email: string; external_id: string }
                organization_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type: 'link_external_user'
                claim_attempt_token: string
                user: { email: string; external_id: string }
                organization_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                type: 'link_external_user'
                claim_attempt_token: string
                user: { email: string; external_id: string }
                organization_id?: string
              }
            }
            output:
              | OrganizationSelectionRequiredErrorBodyWithOrganizations
              | EmailAlreadyInUseErrorBody
              | AlreadyClaimedErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                type: 'link_external_user'
                claim_attempt_token: string
                user: { email: string; external_id: string }
                organization_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 410
          }
    }
  } & {
    '/agents/credentials/validate': {
      $post:
        | {
            input: {
              json:
                | { type: 'api_key'; credential: string }
                | { type: 'access_token'; credential: string; audience?: string }
            }
            output: AgentCredentialValidation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json:
                | { type: 'api_key'; credential: string }
                | { type: 'access_token'; credential: string; audience?: string }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/agents/instances': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                agent_blueprint_id?: string
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: AgentInstance[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                agent_blueprint_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/agents/instances/:agent_instance_id': {
      $get:
        | {
            input: { param: { agent_instance_id: string } }
            output: AgentInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_instance_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { agent_instance_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { agent_instance_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/agents/registrations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AgentRegistration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/agents/registrations/:id/revoke': {
      $post:
        | {
            input: { param: { id: string } }
            output: AgentRegistration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/agents/sessions': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                agent_blueprint_id?: string
                agent_instance_id?: string
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: AgentInstanceSession[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                agent_blueprint_id?: string
                agent_instance_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                agent_blueprint_id?: string
                agent_instance_id?: string
              }
            }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/agents/sessions/:agent_instance_session_id': {
      $get:
        | {
            input: { param: { agent_instance_session_id: string } }
            output: AgentInstanceSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_instance_session_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/agents/sessions/:agent_instance_session_id/revoke': {
      $post:
        | {
            input: { param: { agent_instance_session_id: string } }
            output: AgentInstanceSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_instance_session_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api_keys/validations': {
      $post:
        | {
            input: { json: ValidateApiKeyDtoInput }
            output: ApiKeyValidationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ValidateApiKeyDtoInput }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { json: ValidateApiKeyDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api_keys/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api_keys/:id/expire': {
      $post:
        | {
            input: { param: { id: string } } & { json: ExpireApiKeyDtoInput }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ExpireApiKeyDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ExpireApiKeyDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ExpireApiKeyDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/audit_logs/actions': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: AuditLogActionJson[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/audit_logs/actions/:actionName/schemas': {
      $post:
        | {
            input: { param: { actionName: string } } & { json: AuditLogSchemaDtoInput }
            output: AuditLogSchemaJson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { actionName: string } } & { json: AuditLogSchemaDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { actionName: string } } & { json: AuditLogSchemaDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: AuditLogSchemaJson[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/audit_logs/events': {
      $post:
        | {
            input: { header: { 'idempotency-key'?: string } } & {
              json: AuditLogEventIngestionDtoInput
            }
            output: AuditLogEventCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'idempotency-key'?: string } } & {
              json: AuditLogEventIngestionDtoInput
            }
            output: ErrorBodyWithCodeInstancePathErrors | ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'idempotency-key'?: string } } & {
              json: AuditLogEventIngestionDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'idempotency-key'?: string } } & {
              json: AuditLogEventIngestionDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'idempotency-key'?: string } } & {
              json: AuditLogEventIngestionDtoInput
            }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'idempotency-key'?: string } } & {
              json: AuditLogEventIngestionDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audit_logs/exports': {
      $post:
        | {
            input: { json: AuditLogExportCreationDtoInput }
            output: AuditLogExportJson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AuditLogExportCreationDtoInput }
            output: ErrorBody | ErrorBodyWithErrorMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuditLogExportCreationDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/audit_logs/exports/:auditLogExportId': {
      $get:
        | {
            input: { param: { auditLogExportId: string } }
            output: AuditLogExportJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { auditLogExportId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { auditLogExportId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/auth/challenges/:id/verify': {
      $post:
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: AuthenticationChallengeVerifyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: { code: string } }
            output: TooManyFailedVerificationAttemptsErrorBodyWithRetryAfter
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/auth/factors/enroll': {
      $post:
        | {
            input: {
              json: {
                type: 'generic_otp' | 'sms' | 'totp'
                phone_number?: string
                totp_issuer?: string
                totp_user?: string
                user_id?: string
              }
            }
            output: AuthenticationFactorEnrolled
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                type: 'generic_otp' | 'sms' | 'totp'
                phone_number?: string
                totp_issuer?: string
                totp_user?: string
                user_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/auth/factors/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AuthenticationFactor
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/auth/factors/:id/challenge': {
      $post:
        | {
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDtoInput }
            output: AuthenticationChallenge
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDtoInput }
            output:
              | RateLimitExceededErrorBodyWithRetryAfter
              | SmsChallengeRateLimitedErrorBody
              | SmsChallengeQuotaReachedErrorBody
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/authkit/oauth2/complete': {
      $post:
        | {
            input: { json: UserManagementLoginRequestInput }
            output: ExternalAuthCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserManagementLoginRequestInput }
            output:
              | ExternalAuthSessionAlreadyCompletedErrorBody
              | UserConsentOptionsNotSupportedErrorBody
              | EmailChangeNotAllowedErrorBody
              | EmailNotAvailableErrorBody
              | InvalidEmailErrorBody
              | ErrorBodyWithError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UserManagementLoginRequestInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserManagementLoginRequestInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/groups/:group_id/role_assignments': {
      $get:
        | {
            input: { param: { group_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: GroupRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDtoInput }
            output: GroupRoleAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDtoInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDtoInput }
            output: GroupRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDtoInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/groups/:group_id/role_assignments/:role_assignment_id': {
      $get:
        | {
            input: { param: { group_id: string; role_assignment_id: string } }
            output: GroupRoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string; role_assignment_id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string; role_assignment_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; role_assignment_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { group_id: string; role_assignment_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string; role_assignment_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string; role_assignment_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authorization/organization_memberships/:organization_membership_id/check': {
      $post:
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDtoInput
            }
            output: AuthorizationCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/organization_memberships/:organization_membership_id/resources': {
      $get:
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_resource_external_id?: string
              }
            }
            output: AuthorizationResourceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_resource_external_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_resource_external_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_resource_external_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_resource_external_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_resource_external_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/organization_memberships/:organization_membership_id/resources/:resource_id/permissions': {
      $get:
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: AuthorizationPermissionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/organization_memberships/:organization_membership_id/resources/:resource_type_slug/:external_id/permissions': {
      $get:
        | {
            input: {
              param: {
                organization_membership_id: string
                resource_type_slug: string
                external_id: string
              }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: AuthorizationPermissionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                organization_membership_id: string
                resource_type_slug: string
                external_id: string
              }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: {
                organization_membership_id: string
                resource_type_slug: string
                external_id: string
              }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                organization_membership_id: string
                resource_type_slug: string
                external_id: string
              }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                organization_membership_id: string
                resource_type_slug: string
                external_id: string
              }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/organization_memberships/:organization_membership_id/role_assignments': {
      $get:
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                resource_id?: string
                resource_external_id?: string
                resource_type_slug?: string
              }
            }
            output: UserRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                resource_id?: string
                resource_external_id?: string
                resource_type_slug?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                resource_id?: string
                resource_external_id?: string
                resource_type_slug?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                resource_id?: string
                resource_external_id?: string
                resource_type_slug?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDtoInput }
            output: UserRoleAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDtoInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDtoInput
            }
            output: RoleAssignmentUpdateOverlapErrorBody | ErrorBodyWithError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDtoInput }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/organization_memberships/:organization_membership_id/role_assignments/:role_assignment_id': {
      $delete:
        | {
            input: { param: { organization_membership_id: string; role_assignment_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_membership_id: string; role_assignment_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string; role_assignment_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authorization/organizations/:organizationId/roles': {
      $post:
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDtoInput }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { organizationId: string } }
            output: RoleList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authorization/organizations/:organizationId/roles/:slug': {
      $get:
        | {
            input: { param: { organizationId: string; slug: string } }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDtoInput
            }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organizationId: string; slug: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; slug: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/authorization/organizations/:organizationId/roles/:slug/permissions': {
      $put:
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: SetRolePermissionsDtoInput
            }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: SetRolePermissionsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: SetRolePermissionsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: SetRolePermissionsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDtoInput
            }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/organizations/:organizationId/roles/:slug/permissions/:permissionSlug': {
      $delete:
        | {
            input: { param: { organizationId: string; slug: string; permissionSlug: string } }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; slug: string; permissionSlug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string; permissionSlug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id': {
      $get:
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            }
            output: AuthorizationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDtoInput }
            output: {
              object: 'authorization_resource'
              name: string
              description: string | null
              organization_id: string
              parent_resource_id: string | null
              id: string
              external_id: string
              resource_type_slug: string
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id/organization_memberships': {
      $get:
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: UserlandUserOrganizationMembershipBaseWithUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/organizations/:organization_id/resources/:resource_type_slug/:external_id/role_assignments': {
      $get:
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: UserRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authorization/permissions': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: AuthorizationPermissionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreateAuthorizationPermissionDtoInput }
            output: {
              object: 'permission'
              id: string
              slug: string
              name: string
              description: string | null
              system: boolean
              resource_type_slug: string
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAuthorizationPermissionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAuthorizationPermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAuthorizationPermissionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAuthorizationPermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/permissions/:slug': {
      $get:
        | {
            input: { param: { slug: string } }
            output: AuthorizationPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDtoInput }
            output: AuthorizationPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authorization/resources': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                resource_type_slug?: string
                resource_external_id?: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_external_id?: string
              }
            }
            output: AuthorizationResourceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                resource_type_slug?: string
                resource_external_id?: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_external_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                resource_type_slug?: string
                resource_external_id?: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_external_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                resource_type_slug?: string
                resource_external_id?: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_external_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                resource_type_slug?: string
                resource_external_id?: string
                parent_resource_id?: string
                parent_resource_type_slug?: string
                parent_external_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateAuthorizationResourceDtoInput }
            output: {
              object: 'authorization_resource'
              name: string
              description: string | null
              organization_id: string
              parent_resource_id: string | null
              id: string
              external_id: string
              resource_type_slug: string
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAuthorizationResourceDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAuthorizationResourceDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateAuthorizationResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAuthorizationResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAuthorizationResourceDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAuthorizationResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/resources/:resource_id': {
      $get:
        | {
            input: { param: { resource_id: string } }
            output: AuthorizationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { resource_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { resource_id: string } } & {
              json: UpdateAuthorizationResourceDtoInput
            }
            output: {
              object: 'authorization_resource'
              name: string
              description: string | null
              organization_id: string
              parent_resource_id: string | null
              id: string
              external_id: string
              resource_type_slug: string
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & {
              json: UpdateAuthorizationResourceDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & {
              json: UpdateAuthorizationResourceDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { resource_id: string } } & {
              json: UpdateAuthorizationResourceDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & {
              json: UpdateAuthorizationResourceDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & {
              json: UpdateAuthorizationResourceDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { resource_id: string } } & {
              json: UpdateAuthorizationResourceDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { resource_id: string } } & { query: { cascade_delete?: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { resource_id: string } } & { query: { cascade_delete?: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & { query: { cascade_delete?: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & { query: { cascade_delete?: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & { query: { cascade_delete?: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/authorization/resources/:resource_id/organization_memberships': {
      $get:
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: UserlandUserOrganizationMembershipBaseWithUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                permission_slug: string
                assignment?: 'direct' | 'indirect'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/resources/:resource_id/role_assignments': {
      $get:
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: UserRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                role_slug?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/authorization/roles': {
      $post:
        | {
            input: { json: CreateRoleDtoInput }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateRoleDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateRoleDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | { input: {}; output: RoleList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorBody; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/authorization/roles/:slug': {
      $get:
        | { input: { param: { slug: string } }; output: Role; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDtoInput }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/roles/:slug/permissions': {
      $put:
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDtoInput }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDtoInput }
            output: {
              slug: string
              object: 'role'
              id: string
              name: string
              description: string | null
              type: 'EnvironmentRole' | 'OrganizationRole'
              resource_type_slug: string
              permissions: string[]
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/client/token': {
      $post:
        | {
            input: { json: ClientApiTokenDtoInput }
            output: ClientApiTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ClientApiTokenDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ClientApiTokenDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ClientApiTokenDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connect/applications': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                registration_types?: unknown
                organization_id?: string
              }
            }
            output: ConnectApplicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                registration_types?: unknown
                organization_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateOAuthApplicationDtoInput | CreateM2MApplicationDtoInput }
            output: ConnectApplication
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateOAuthApplicationDtoInput | CreateM2MApplicationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateOAuthApplicationDtoInput | CreateM2MApplicationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connect/applications/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ConnectApplication
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateOAuthApplicationDtoInput }
            output: ConnectApplication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateOAuthApplicationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateOAuthApplicationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/connect/applications/:id/client_secrets': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              object: 'connect_application_secret'
              id: string
              secret_hint: string
              last_used_at: string | null
              created_at: string
              updated_at: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: string } } & { json: CreateApplicationSecretDtoInput }
            output: NewConnectApplicationSecret
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: CreateApplicationSecretDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateApplicationSecretDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connect/client_secrets/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/connections': {
      $post:
        | {
            input: { json: CreateConnectionDtoInput }
            output: Connection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateConnectionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateConnectionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateConnectionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateConnectionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateConnectionDtoInput }
            output:
              | ErrorBody
              | IdpMetadataFetchFailedErrorBody
              | ConnectionCouldNotBeVerifiedErrorBody
              | InvalidIdpSsoUrlErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                connection_type?:
                  | 'ADFSSAML'
                  | 'AdpOidc'
                  | 'AppleOAuth'
                  | 'Auth0SAML'
                  | 'AzureSAML'
                  | 'BitbucketOAuth'
                  | 'CasSAML'
                  | 'CloudflareSAML'
                  | 'ClassLinkSAML'
                  | 'CleverOIDC'
                  | 'CyberArkSAML'
                  | 'DuoSAML'
                  | 'EntraIdOIDC'
                  | 'GenericOIDC'
                  | 'GenericSAML'
                  | 'GithubOAuth'
                  | 'GitLabOAuth'
                  | 'GoogleOAuth'
                  | 'GoogleOIDC'
                  | 'GoogleSAML'
                  | 'IntuitOAuth'
                  | 'JumpCloudSAML'
                  | 'KeycloakSAML'
                  | 'LastPassSAML'
                  | 'LinkedInOAuth'
                  | 'LoginGovOidc'
                  | 'MagicLink'
                  | 'MicrosoftOAuth'
                  | 'MiniOrangeSAML'
                  | 'NetIqSAML'
                  | 'OktaOIDC'
                  | 'OktaSAML'
                  | 'OneLoginSAML'
                  | 'OracleSAML'
                  | 'PingFederateSAML'
                  | 'PingOneSAML'
                  | 'RipplingSAML'
                  | 'SalesforceSAML'
                  | 'ShibbolethGenericSAML'
                  | 'ShibbolethSAML'
                  | 'SimpleSamlPhpSAML'
                  | 'SalesforceOAuth'
                  | 'SlackOAuth'
                  | 'VercelMarketplaceOAuth'
                  | 'VercelOAuth'
                  | 'VMwareSAML'
                  | 'XeroOAuth'
                domain?: string
                organization_id?: string
                search?: string
                state?: 'active' | 'inactive' | 'validating'
              }
            }
            output: ConnectionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                connection_type?:
                  | 'ADFSSAML'
                  | 'AdpOidc'
                  | 'AppleOAuth'
                  | 'Auth0SAML'
                  | 'AzureSAML'
                  | 'BitbucketOAuth'
                  | 'CasSAML'
                  | 'CloudflareSAML'
                  | 'ClassLinkSAML'
                  | 'CleverOIDC'
                  | 'CyberArkSAML'
                  | 'DuoSAML'
                  | 'EntraIdOIDC'
                  | 'GenericOIDC'
                  | 'GenericSAML'
                  | 'GithubOAuth'
                  | 'GitLabOAuth'
                  | 'GoogleOAuth'
                  | 'GoogleOIDC'
                  | 'GoogleSAML'
                  | 'IntuitOAuth'
                  | 'JumpCloudSAML'
                  | 'KeycloakSAML'
                  | 'LastPassSAML'
                  | 'LinkedInOAuth'
                  | 'LoginGovOidc'
                  | 'MagicLink'
                  | 'MicrosoftOAuth'
                  | 'MiniOrangeSAML'
                  | 'NetIqSAML'
                  | 'OktaOIDC'
                  | 'OktaSAML'
                  | 'OneLoginSAML'
                  | 'OracleSAML'
                  | 'PingFederateSAML'
                  | 'PingOneSAML'
                  | 'RipplingSAML'
                  | 'SalesforceSAML'
                  | 'ShibbolethGenericSAML'
                  | 'ShibbolethSAML'
                  | 'SimpleSamlPhpSAML'
                  | 'SalesforceOAuth'
                  | 'SlackOAuth'
                  | 'VercelMarketplaceOAuth'
                  | 'VercelOAuth'
                  | 'VMwareSAML'
                  | 'XeroOAuth'
                domain?: string
                organization_id?: string
                search?: string
                state?: 'active' | 'inactive' | 'validating'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                connection_type?:
                  | 'ADFSSAML'
                  | 'AdpOidc'
                  | 'AppleOAuth'
                  | 'Auth0SAML'
                  | 'AzureSAML'
                  | 'BitbucketOAuth'
                  | 'CasSAML'
                  | 'CloudflareSAML'
                  | 'ClassLinkSAML'
                  | 'CleverOIDC'
                  | 'CyberArkSAML'
                  | 'DuoSAML'
                  | 'EntraIdOIDC'
                  | 'GenericOIDC'
                  | 'GenericSAML'
                  | 'GithubOAuth'
                  | 'GitLabOAuth'
                  | 'GoogleOAuth'
                  | 'GoogleOIDC'
                  | 'GoogleSAML'
                  | 'IntuitOAuth'
                  | 'JumpCloudSAML'
                  | 'KeycloakSAML'
                  | 'LastPassSAML'
                  | 'LinkedInOAuth'
                  | 'LoginGovOidc'
                  | 'MagicLink'
                  | 'MicrosoftOAuth'
                  | 'MiniOrangeSAML'
                  | 'NetIqSAML'
                  | 'OktaOIDC'
                  | 'OktaSAML'
                  | 'OneLoginSAML'
                  | 'OracleSAML'
                  | 'PingFederateSAML'
                  | 'PingOneSAML'
                  | 'RipplingSAML'
                  | 'SalesforceSAML'
                  | 'ShibbolethGenericSAML'
                  | 'ShibbolethSAML'
                  | 'SimpleSamlPhpSAML'
                  | 'SalesforceOAuth'
                  | 'SlackOAuth'
                  | 'VercelMarketplaceOAuth'
                  | 'VercelOAuth'
                  | 'VMwareSAML'
                  | 'XeroOAuth'
                domain?: string
                organization_id?: string
                search?: string
                state?: 'active' | 'inactive' | 'validating'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connections/:connectionId/saml_idp_signing_certs': {
      $get:
        | {
            input: { param: { connectionId: string } }
            output: SamlIdpSigningCertificateList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDtoInput
            }
            output: SamlIdpSigningCertificate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connections/:connectionId/saml_idp_signing_certs/:certificateId': {
      $delete:
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connectionId/saml_sp_encryption_certs': {
      $get:
        | {
            input: { param: { connectionId: string } }
            output: SamlSpEncryptionCertificateList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { connectionId: string } }
            output: SamlSpEncryptionCertificate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/connections/:connectionId/saml_sp_encryption_certs/:certificateId': {
      $delete:
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connectionId/saml_sp_signing_cert': {
      $get:
        | {
            input: { param: { connectionId: string } }
            output: SamlSpSigningCertificate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { connectionId: string } }
            output: SamlSpSigningCertificate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { connectionId: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/connections/:connectionId/saml_sp_signing_cert/:certificateId': {
      $delete:
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string; certificateId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:id': {
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchConnectionDtoInput }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDtoInput }
            output:
              | ErrorBody
              | ConnectionTypeNotUpdatableErrorBody
              | IdpMetadataFetchFailedErrorBody
              | ConnectionCouldNotBeVerifiedErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/data-integrations': {
      $post:
        | {
            input: { json: CreateDataIntegrationDtoInput }
            output: DataIntegration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDataIntegrationDtoInput }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                ownership?: 'user' | 'organization'
              }
            }
            output: DataIntegrationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                ownership?: 'user' | 'organization'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                ownership?: 'user' | 'organization'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                ownership?: 'user' | 'organization'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data-integrations/finish': {
      $post:
        | {
            input: { json: { connect_code: string; code_verifier: string; state?: string } }
            output: DataIntegrationFinishConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { connect_code: string; code_verifier: string; state?: string } }
            output: ConnectionFinishErrorBody | ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { connect_code: string; code_verifier: string; state?: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { connect_code: string; code_verifier: string; state?: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/data-integrations/:slug': {
      $get:
        | {
            input: { param: { slug: string } }
            output: DataIntegration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: DataIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/data-integrations/:slug/api-key': {
      $post:
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent: 'add'
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent: 'add'
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent: 'add'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent: 'add'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent: 'add'
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: EntityNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                secret: string
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: AuthMethodMismatchErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data-integrations/:slug/authorize': {
      $post:
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                return_to?: string
                code_challenge?: string
                code_challenge_method?: 'S256'
                config?: { [key: string]: string }
                connection_intent?: 'add' | 'reauthorize'
                connected_account_id?: string
              }
            }
            output: DataIntegrationAuthorizeUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                return_to?: string
                code_challenge?: string
                code_challenge_method?: 'S256'
                config?: { [key: string]: string }
                connection_intent?: 'add' | 'reauthorize'
                connected_account_id?: string
              }
            }
            output: AuthorizationUrlRequestErrorBody | ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                return_to?: string
                code_challenge?: string
                code_challenge_method?: 'S256'
                config?: { [key: string]: string }
                connection_intent?: 'add' | 'reauthorize'
                connected_account_id?: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                return_to?: string
                code_challenge?: string
                code_challenge_method?: 'S256'
                config?: { [key: string]: string }
                connection_intent?: 'add' | 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                return_to?: string
                code_challenge?: string
                code_challenge_method?: 'S256'
                config?: { [key: string]: string }
                connection_intent?: 'add' | 'reauthorize'
                connected_account_id?: string
              }
            }
            output: AuthorizationUrlNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                return_to?: string
                code_challenge?: string
                code_challenge_method?: 'S256'
                config?: { [key: string]: string }
                connection_intent?: 'add' | 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ConnectedAccountLimitReachedErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                return_to?: string
                code_challenge?: string
                code_challenge_method?: 'S256'
                config?: { [key: string]: string }
                connection_intent?: 'add' | 'reauthorize'
                connected_account_id?: string
              }
            }
            output: AuthMethodMismatchError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data-integrations/:slug/client-credentials': {
      $post:
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent: 'add'
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent: 'add'
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent: 'add'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent: 'add'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & { header: { 'idempotency-key'?: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent: 'add'
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: EntityNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: string | null
                account_identifier?: string | null
                user_id: string
                organization_id?: string
                connection_owner?: 'user' | 'organization'
                client_id: string
                client_secret: string
                config?: { [key: string]: string }
                connection_intent?: 'reauthorize'
                connected_account_id?: string
              }
            }
            output: AuthMethodMismatchErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data-integrations/:slug/credentials': {
      $post:
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: DataIntegrationCredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: AccountSelectionRequiredError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/data-integrations/:slug/organization': {
      $get:
        | {
            input: { param: { slug: string } }
            output: DataIntegration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: DataIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { slug: string } }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/data-integrations/:slug/token': {
      $post:
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: DataIntegrationAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: AccountSelectionRequiredError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                user_id: string
                organization_id?: string
                connected_account_id?: string
                connection_owner?: 'user' | 'organization'
                supports_multiple_connections?: boolean
              }
            }
            output: AuthMethodMismatchError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/directories': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                search?: string
                domain?: string
              }
            }
            output: DirectoryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                search?: string
                domain?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                search?: string
                domain?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/directories/:directoryId/groups': {
      $get:
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                user?: string
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: DirectoryGroup[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                user?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                user?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                user?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/directories/:directoryId/groups/:groupId': {
      $get:
        | {
            input: { param: { directoryId: string; groupId: string } }
            output: DirectoryGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { directoryId: string; groupId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { directoryId: string; groupId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/directories/:directoryId/users': {
      $get:
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: DirectoryUser[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/directories/:directoryId/users/:userId': {
      $get:
        | {
            input: { param: { directoryId: string; userId: string } }
            output: DirectoryUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { directoryId: string; userId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { directoryId: string; userId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/directories/:id': {
      $get:
        | { input: { param: { id: string } }; output: Directory; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: any; outputFormat: 'json'; status: 202 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/directories/:id/sync': {
      $post:
        | {
            input: { param: { id: string } }
            output: DirectorySyncResponse
            outputFormat: 'json'
            status: 202
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: DirectorySyncRateLimitError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/directory_groups': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                user?: string
              }
            }
            output: DirectoryGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                user?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                user?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                user?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/directory_groups/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DirectoryGroup
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/directory_users': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: DirectoryUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                directory?: string
                group?: string
                idp_id?: string
                email?: string
              }
            }
            output: 'Ratelimited'
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/directory_users/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DirectoryUserWithGroups
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                events: unknown
                range_start?: string
                range_end?: string
                organization_id?: string
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                events: unknown
                range_start?: string
                range_end?: string
                organization_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string
                limit?: unknown
                events: unknown
                range_start?: string
                range_end?: string
                organization_id?: string
              }
            }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/feature-flags': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: FlagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/feature-flags/:slug': {
      $get:
        | { input: { param: { slug: string } }; output: Flag; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/feature-flags/:slug/disable': {
      $put:
        | {
            input: { param: { slug: string } }
            output: {
              object: 'feature_flag'
              id: string
              slug: string
              name: string
              description: string | null
              owner: { email: string; first_name: string | null; last_name: string | null } | null
              tags: string[]
              enabled: boolean
              default_value: boolean
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/feature-flags/:slug/enable': {
      $put:
        | {
            input: { param: { slug: string } }
            output: {
              object: 'feature_flag'
              id: string
              slug: string
              name: string
              description: string | null
              owner: { email: string; first_name: string | null; last_name: string | null } | null
              tags: string[]
              enabled: boolean
              default_value: boolean
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/feature-flags/:slug/targets/:resourceId': {
      $post:
        | {
            input: { param: { resourceId: string; slug: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { resourceId: string; slug: string } }
            output: ErrorBodyWithCodeStatusCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resourceId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resourceId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { resourceId: string; slug: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { resourceId: string; slug: string } }
            output: ErrorBodyWithCodeStatusCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resourceId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resourceId: string; slug: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organization_domains': {
      $post:
        | {
            input: { json: CreateOrganizationDomainDtoInput }
            output: {
              object: 'organization_domain'
              id: string
              organization_id: string
              domain: string
              state?:
                | 'failed'
                | 'legacy_verified'
                | 'pending'
                | 'unverified'
                | 'verified'
                | undefined
              verification_prefix?: string | undefined
              verification_token?: string | undefined
              verification_strategy?: 'dns' | 'manual' | undefined
              created_at: string
              updated_at: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateOrganizationDomainDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/organization_domains/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: OrganizationDomainStandAlone
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/organization_domains/:id/verify': {
      $post:
        | {
            input: { param: { id: string } }
            output: OrganizationDomainStandAlone
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/organizations': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                domains?: unknown
                search?: string
              }
            }
            output: OrganizationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                domains?: unknown
                search?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: OrganizationDtoInput }
            output: Organization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: OrganizationDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OrganizationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: OrganizationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/external_id/:external_id': {
      $get:
        | {
            input: { param: { external_id: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDtoInput }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/organizations/:id/audit_log_configuration': {
      $get:
        | {
            input: { param: { id: string } }
            output: AuditLogConfiguration
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/organizations/:id/audit_logs_retention': {
      $get:
        | {
            input: { param: { id: string } }
            output: AuditLogsRetentionJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDtoInput }
            output: AuditLogsRetentionJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organizationId/api_keys': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: OrganizationApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { organizationId: string } } & {
              json: CreateOrganizationApiKeyDtoInput
            }
            output: OrganizationApiKeyWithValue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & {
              json: CreateOrganizationApiKeyDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              json: CreateOrganizationApiKeyDtoInput
            }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organizationId/data_integration_configurations': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { ownership?: 'user' | 'organization' }
            }
            output: DataIntegrationConfigurationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { ownership?: 'user' | 'organization' }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { ownership?: 'user' | 'organization' }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { ownership?: 'user' | 'organization' }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organizationId/data_integration_configurations/:slug': {
      $put:
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' }
            } & { json: ConfigureDataIntegrationBodyInput }
            output: DataIntegrationConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' }
            } & { json: ConfigureDataIntegrationBodyInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' }
            } & { json: ConfigureDataIntegrationBodyInput }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' }
            } & { json: ConfigureDataIntegrationBodyInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' }
            } & { json: ConfigureDataIntegrationBodyInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organizationId/feature-flags': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: FlagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organizationId/groups': {
      $post:
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDtoInput }
            output: Group
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                search?: string
              }
            }
            output: GroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                search?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                search?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organizationId/groups/:groupId': {
      $get:
        | {
            input: { param: { organizationId: string; groupId: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; groupId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: UpdateGroupDtoInput
            }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: UpdateGroupDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: UpdateGroupDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: UpdateGroupDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: UpdateGroupDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organizationId: string; groupId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; groupId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organizationId/groups/:groupId/organization-memberships': {
      $post:
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDtoInput
            }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: UserlandUserOrganizationMembershipBaseList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDtoInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organizationId/groups/:groupId/organization-memberships/:omId': {
      $delete:
        | {
            input: { param: { organizationId: string; groupId: string; omId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; groupId: string; omId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string; omId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/authorized_applications': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: OrganizationAuthorizedConnectApplicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/connected_accounts/:slug': {
      $get:
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: { supports_multiple_connections?: string; connected_account_id?: string }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string }
            } & { json: CreateOrganizationConnectedAccountDtoInput }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string }
            } & { json: CreateOrganizationConnectedAccountDtoInput }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string }
            } & { json: CreateOrganizationConnectedAccountDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string }
            } & { json: CreateOrganizationConnectedAccountDtoInput }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string }
            } & { json: CreateOrganizationConnectedAccountDtoInput }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string }
            } & { json: CreateOrganizationConnectedAccountDtoInput }
            output:
              | OrganizationConnectedAccountImportErrorBody
              | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string }
            } & { json: CreateOrganizationConnectedAccountDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: OrganizationConnectedAccountDtoInput }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: OrganizationConnectedAccountDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: OrganizationConnectedAccountDtoInput }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: OrganizationConnectedAccountDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: OrganizationConnectedAccountDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: OrganizationConnectedAccountDtoInput }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: OrganizationConnectedAccountDtoInput }
            output: ErrorBodyWithCodeErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/data_providers': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: { supports_multiple_connections?: string }
            }
            output: DataIntegrationsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { supports_multiple_connections?: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { supports_multiple_connections?: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/issuer_trusts': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: IssuerTrustList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { organization_id: string } } & {
              json: { type: 'claude'; issuer: string }
            }
            output: IssuerTrust
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { type: 'claude'; issuer: string }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { type: 'claude'; issuer: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { type: 'claude'; issuer: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              json: { type: 'claude'; issuer: string }
            }
            output: ErrorBodyWithCodeErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:organization_id/issuer_trusts/:id': {
      $get:
        | {
            input: { param: { organization_id: string; id: string } }
            output: IssuerTrust
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organization_id: string; id: string } } & {
              json: { enabled?: boolean }
            }
            output: IssuerTrust
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; id: string } } & {
              json: { enabled?: boolean }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; id: string } } & {
              json: { enabled?: boolean }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; id: string } } & {
              json: { enabled?: boolean }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; id: string } } & {
              json: { enabled?: boolean }
            }
            output: ErrorBodyWithCodeErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organization_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_id: string; id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:organization_id/it_contacts': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: ItContactList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDtoInput }
            output: ItContact
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organizations/:organization_id/it_contacts/:contact_id': {
      $delete:
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organizations/:organization_id/it_contacts/:contact_id/invite': {
      $post:
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organizations/:organization_id/it_contacts/:contact_id/revoke': {
      $post:
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; contact_id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/platform/teams': {
      $post:
        | { input: { json: CreateTeamDtoInput }; output: Team; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CreateTeamDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateTeamDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/platform/teams/:team_id': {
      $get:
        | { input: { param: { team_id: string } }; output: Team; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { team_id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/portal/generate_link': {
      $post:
        | {
            input: { json: GenerateLinkDtoInput }
            output: PortalLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: GenerateLinkDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GenerateLinkDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: GenerateLinkDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GenerateLinkDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GenerateLinkDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/portal/revoke_link': {
      $post:
        | { input: { json: RevokeLinkDtoInput }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: RevokeLinkDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: RevokeLinkDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/radar/attempts': {
      $post:
        | {
            input: {
              json: {
                ip_address: string
                user_agent: string
                email: string
                auth_method:
                  | 'Password'
                  | 'Passkey'
                  | 'Authenticator'
                  | 'SMS_OTP'
                  | 'Email_OTP'
                  | 'Social'
                  | 'SSO'
                  | 'Other'
                action: 'sign-up' | 'sign-in'
                signals_id?: string
              }
            }
            output: RadarStandaloneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                ip_address: string
                user_agent: string
                email: string
                auth_method:
                  | 'Password'
                  | 'Passkey'
                  | 'Authenticator'
                  | 'SMS_OTP'
                  | 'Email_OTP'
                  | 'Social'
                  | 'SSO'
                  | 'Other'
                action: 'sign-up' | 'sign-in'
                signals_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                ip_address: string
                user_agent: string
                email: string
                auth_method:
                  | 'Password'
                  | 'Passkey'
                  | 'Authenticator'
                  | 'SMS_OTP'
                  | 'Email_OTP'
                  | 'Social'
                  | 'SSO'
                  | 'Other'
                action: 'sign-up' | 'sign-in'
                signals_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
    }
  } & {
    '/radar/attempts/:id': {
      $put:
        | {
            input: { param: { id: string } } & {
              json: { challenge_status?: 'success'; attempt_status?: 'success' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: { challenge_status?: 'success'; attempt_status?: 'success' }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { challenge_status?: 'success'; attempt_status?: 'success' }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              json: { challenge_status?: 'success'; attempt_status?: 'success' }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/radar/detections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: RadarDetection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/radar/lists/:type/:action': {
      $post:
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: RadarListEntryAlreadyPresentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
      $delete:
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                type:
                  | 'ip_address'
                  | 'domain'
                  | 'email'
                  | 'device'
                  | 'user_agent'
                  | 'device_fingerprint'
                  | 'country'
                action: 'block' | 'allow'
              }
            } & { json: { entry: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sso/authorize': {
      $get:
        | {
            input: {
              query: {
                provider_scopes?: unknown
                provider_query_params?: { [key: string]: string }
                client_id: string
                domain?: string
                provider?:
                  | 'AppleOAuth'
                  | 'BitbucketOAuth'
                  | 'GitHubOAuth'
                  | 'GitLabOAuth'
                  | 'GoogleOAuth'
                  | 'IntuitOAuth'
                  | 'LinkedInOAuth'
                  | 'MicrosoftOAuth'
                  | 'SalesforceOAuth'
                  | 'SlackOAuth'
                  | 'VercelMarketplaceOAuth'
                  | 'VercelOAuth'
                  | 'XeroOAuth'
                redirect_uri: string
                response_type: 'code'
                state?: string
                connection?: string
                organization?: string
                domain_hint?: string
                login_hint?: string
                nonce?: string
                prompt?: 'login'
              }
            }
            output: SsoAuthorizeUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                provider_scopes?: unknown
                provider_query_params?: { [key: string]: string }
                client_id: string
                domain?: string
                provider?:
                  | 'AppleOAuth'
                  | 'BitbucketOAuth'
                  | 'GitHubOAuth'
                  | 'GitLabOAuth'
                  | 'GoogleOAuth'
                  | 'IntuitOAuth'
                  | 'LinkedInOAuth'
                  | 'MicrosoftOAuth'
                  | 'SalesforceOAuth'
                  | 'SlackOAuth'
                  | 'VercelMarketplaceOAuth'
                  | 'VercelOAuth'
                  | 'XeroOAuth'
                redirect_uri: string
                response_type: 'code'
                state?: string
                connection?: string
                organization?: string
                domain_hint?: string
                login_hint?: string
                nonce?: string
                prompt?: 'login'
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
    }
  } & {
    '/sso/jwks/:clientId': {
      $get:
        | {
            input: { param: { clientId: string } }
            output: JwksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sso/logout': {
      $get:
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 302 }
        | {
            input: { query: { token: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sso/logout/authorize': {
      $post:
        | {
            input: { json: { profile_id: string } }
            output: SsoLogoutAuthorizeResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { profile_id: string } }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { json: { profile_id: string } }
            output: OAuthErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { profile_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sso/profile': {
      $get:
        | { input: {}; output: Profile; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedErrorBody; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/sso/token': {
      $post:
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDtoInput }
            output: SsoTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDtoInput }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDtoInput }
            output: OAuthErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/authenticate': {
      $post:
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string
                    phone_number?: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
            }
            output: UserlandAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string
                    phone_number?: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
            }
            output:
              | InvalidOrganizationIdErrorBody
              | CodeChallengeNotFoundErrorBody
              | InvalidCredentialsErrorBody
              | InvalidOneTimeCodeErrorBody
              | OneTimeCodePreviouslyUsedErrorBody
              | OneTimeCodeExpiredErrorBody
              | OneTimeCodeTooManyAttemptsErrorBody
              | InvalidPendingAuthenticationTokenErrorBody
              | UserMismatchErrorBody
              | PhoneNumberRequiredErrorBody
              | VerificationIdRequiredErrorBody
              | InvalidClientOAuthErrorBody
              | UnauthorizedClientOAuthErrorBody
              | InvalidProfileOAuthErrorBody
              | InvitationInvalidOAuthErrorBody
              | InvitationCannotBeUsedForEmailOAuthErrorBody
              | AuthenticationMethodNotAllowedOAuthErrorBody
              | InvalidConnectionOAuthErrorBody
              | SignUpNotAllowedOAuthErrorBody
              | OrganizationAuthenticationMethodsRequiredOAuthErrorBody
              | InvalidLinkAuthorizationCodeOAuthErrorBody
              | ExtraAttributesRequiredOAuthErrorBody
              | PkceNotSupportedOAuthErrorBody
              | ExpiredTokenOAuthErrorBody
              | AuthorizationPendingOAuthErrorBody
              | AccessDeniedOAuthErrorBody
              | SlowDownOAuthErrorBody
              | MustUseSsoForSelectedOrganizationMessageErrorBody
              | InvalidGrantOAuthErrorBody
              | InvalidRequestOAuthErrorBody
              | OrganizationNotFoundOAuthErrorBody
              | OrganizationMembershipNotFoundOAuthErrorBody
              | MfaEnrollmentOAuthErrorBody
              | TokenTooBigOAuthErrorBody
              | ({ error: 'sso_required'; error_description: string } & {
                  connection_ids: string[]
                  email: string
                  pending_authentication_token?: string | undefined
                })
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string
                    phone_number?: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
            }
            output:
              | MfaEnrollmentErrorBody
              | MfaChallengeErrorBody
              | AuthenticationMethodNotAllowedErrorBody
              | EmailCompletionRequiredErrorBodyWithEmailCompletionToken
              | EmailVerificationRequiredErrorBody
              | EmailPasswordAuthDisabledErrorBody
              | OrganizationSelectionRequiredErrorBody
              | PasskeyProgressiveEnrollmentErrorBody
              | RadarChallengeErrorBody
              | RadarEmailChallengeErrorBody
              | RadarSignUpChallengeErrorBody
              | RadarSmsChallengeErrorBody
              | RadarSmsSignInChallengeErrorBody
              | ApplicationConsentRequiredErrorBody
              | PolicyDeniedErrorBody
              | ActionDeniedErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string
                    phone_number?: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string
                    phone_number?: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret?: string
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    radar_auth_attempt_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                    signals_id?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string
                    phone_number?: string
                    pending_authentication_token: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string
                    device_id?: string
                    user_agent?: string
                  }
            }
            output:
              | DailyQuotaExceededErrorBody
              | TooManyFailedVerificationAttemptsErrorBodyWithRetryAfter
              | TooManyRequestsOAuthErrorBody
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/authkit_oauth_resources': {
      $post:
        | {
            input: { json: CreateAuthkitOauthResourceDtoInput }
            output: AuthkitOauthResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAuthkitOauthResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAuthkitOauthResourceDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: AuthkitOauthResource[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/user_management/authkit_oauth_resources/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/authorize': {
      $get:
        | {
            input: {
              query: {
                code_challenge_method?: 'S256'
                code_challenge?: string
                domain_hint?: string
                connection_id?: string
                provider_query_params?: { [key: string]: string }
                provider_scopes?: unknown
                invitation_token?: string
                max_age?: unknown
                screen_hint?: 'sign-up' | 'sign-in'
                login_hint?: string
                provider?:
                  | 'authkit'
                  | 'AppleOAuth'
                  | 'BitbucketOAuth'
                  | 'GitHubOAuth'
                  | 'GitLabOAuth'
                  | 'GoogleOAuth'
                  | 'IntuitOAuth'
                  | 'LinkedInOAuth'
                  | 'MicrosoftOAuth'
                  | 'SalesforceOAuth'
                  | 'SlackOAuth'
                  | 'VercelMarketplaceOAuth'
                  | 'VercelOAuth'
                  | 'XeroOAuth'
                prompt?: string
                state?: string
                organization_id?: string
                response_type: 'code'
                redirect_uri: string
                client_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                code_challenge_method?: 'S256'
                code_challenge?: string
                domain_hint?: string
                connection_id?: string
                provider_query_params?: { [key: string]: string }
                provider_scopes?: unknown
                invitation_token?: string
                max_age?: unknown
                screen_hint?: 'sign-up' | 'sign-in'
                login_hint?: string
                provider?:
                  | 'authkit'
                  | 'AppleOAuth'
                  | 'BitbucketOAuth'
                  | 'GitHubOAuth'
                  | 'GitLabOAuth'
                  | 'GoogleOAuth'
                  | 'IntuitOAuth'
                  | 'LinkedInOAuth'
                  | 'MicrosoftOAuth'
                  | 'SalesforceOAuth'
                  | 'SlackOAuth'
                  | 'VercelMarketplaceOAuth'
                  | 'VercelOAuth'
                  | 'XeroOAuth'
                prompt?: string
                state?: string
                organization_id?: string
                response_type: 'code'
                redirect_uri: string
                client_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
    }
  } & {
    '/user_management/authorize/device': {
      $post:
        | {
            input: { json: { client_id: string } }
            output: DeviceAuthorizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { client_id: string } }
            output: OAuthErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { client_id: string } }
            output: OAuthErrorBody
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/user_management/cors_origins': {
      $post:
        | {
            input: { json: CreateCorsOriginDtoInput }
            output: CorsOriginResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCorsOriginDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateCorsOriginDtoInput }
            output: ErrorBodyWithConstraintsPropertyErrors
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: CorsOriginResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/user_management/cors_origins/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/email_verification/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: EmailVerification
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/invitations': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                email?: string
              }
            }
            output: UserlandUserInviteList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                email?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateUserlandUserInviteOptionsDtoInput }
            output: UserlandUserInvite
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserlandUserInviteOptionsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandUserInviteOptionsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUserlandUserInviteOptionsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/invitations/by_token/:token': {
      $get:
        | {
            input: { param: { token: string } }
            output: UserlandUserInvite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/user_management/invitations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: UserlandUserInvite
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/invitations/:id/accept': {
      $post:
        | {
            input: { param: { id: string } }
            output: {
              object: 'invitation'
              id: string
              email: string
              state: 'pending' | 'accepted' | 'expired' | 'revoked'
              accepted_at: string | null
              revoked_at: string | null
              expires_at: string
              organization_id: string | null
              inviter_user_id: string | null
              accepted_user_id: string | null
              role_slug: string | null
              created_at: string
              updated_at: string
              token: string
              accept_invitation_url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/invitations/:id/resend': {
      $post:
        | {
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDtoInput }
            output: UserlandUserInvite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/invitations/:id/revoke': {
      $post:
        | {
            input: { param: { id: string } }
            output: {
              object: 'invitation'
              id: string
              email: string
              state: 'pending' | 'accepted' | 'expired' | 'revoked'
              accepted_at: string | null
              revoked_at: string | null
              expires_at: string
              organization_id: string | null
              inviter_user_id: string | null
              accepted_user_id: string | null
              role_slug: string | null
              created_at: string
              updated_at: string
              token: string
              accept_invitation_url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user_management/jwt_template': {
      $get:
        | { input: {}; output: JwtTemplate; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { json: UpdateJwtTemplateDtoInput }
            output: JwtTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateJwtTemplateDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/magic_auth': {
      $post:
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDtoInput }
            output: MagicAuth & { radar_auth_attempt_id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDtoInput }
            output:
              | InvitationInvalidOAuthErrorBody
              | AuthenticationMethodNotAllowedOAuthErrorBody
              | SignUpNotAllowedOAuthErrorBody
              | EmailDomainNotDeliverableErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDtoInput }
            output: PolicyDeniedErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/magic_auth/:id': {
      $get:
        | { input: { param: { id: string } }; output: MagicAuth; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/organization_memberships': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                statuses?: unknown
                user_id?: string
              }
            }
            output: UserlandUserOrganizationMembershipList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                statuses?: unknown
                user_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                statuses?: unknown
                user_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
                statuses?: unknown
                user_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateUserlandUserOrganizationMembershipDtoInput }
            output: {
              object: 'organization_membership'
              id: string
              user_id: string
              organization_id: string
              status: 'active' | 'inactive' | 'pending'
              directory_managed: boolean
              organization_name?: string | undefined
              custom_attributes?: { [key: string]: any } | undefined
              created_at: string
              updated_at: string
              role: SlimRole
              roles: SlimRole[]
              user: UserlandUser
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserlandUserOrganizationMembershipDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandUserOrganizationMembershipDtoInput }
            output: EntitiesNotFoundErrorBodyWithIdsList | EntityNotFoundErrorBodyWithEntityId
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUserlandUserOrganizationMembershipDtoInput }
            output:
              | InvalidRequestParametersErrorBody
              | InvalidRoleErrorBody
              | MultipleRolesNotEnabledErrorBody
              | SubResourceScopedRoleNotAllowedErrorBodyWithRoleSlug
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/organization_memberships/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: UserlandUserOrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: UpdateUserlandUserOrganizationMembershipDtoInput
            }
            output: UserlandUserOrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: UpdateUserlandUserOrganizationMembershipDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: UpdateUserlandUserOrganizationMembershipDtoInput
            }
            output:
              | InvalidRequestParametersErrorBody
              | InvalidRoleErrorBody
              | MultipleRolesNotEnabledErrorBody
              | SubResourceScopedRoleNotAllowedErrorBodyWithRoleSlug
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/organization_memberships/:id/deactivate': {
      $put:
        | {
            input: { param: { id: string } }
            output: {
              object: 'organization_membership'
              id: string
              user_id: string
              organization_id: string
              status: 'active' | 'inactive' | 'pending'
              directory_managed: boolean
              organization_name?: string | undefined
              custom_attributes?: { [key: string]: any } | undefined
              created_at: string
              updated_at: string
              role: SlimRole
              roles: SlimRole[]
              user: UserlandUser
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/organization_memberships/:id/reactivate': {
      $put:
        | {
            input: { param: { id: string } }
            output: UserlandUserOrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/organization_memberships/:omId/groups': {
      $get:
        | {
            input: { param: { omId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: GroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { omId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/user_management/password_reset': {
      $post:
        | {
            input: { json: CreatePasswordResetTokenDtoInput }
            output: PasswordReset
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePasswordResetTokenDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePasswordResetTokenDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePasswordResetTokenDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreatePasswordResetTokenDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/password_reset/confirm': {
      $post:
        | {
            input: { json: CreatePasswordResetDtoInput }
            output: ResetPasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePasswordResetDtoInput }
            output: ErrorBodyWithCodeErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePasswordResetDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePasswordResetDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePasswordResetDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/password_reset/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PasswordReset
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/radar_challenges': {
      $post: {
        input: { json: SendRadarSmsChallengeDtoInput }
        output: SendRadarSmsChallengeResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/user_management/radar_challenges/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: RadarChallenge
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/redirect_uris': {
      $post:
        | {
            input: { json: CreateRedirectUriDtoInput }
            output: RedirectUri
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateRedirectUriDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateRedirectUriDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateRedirectUriDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: RedirectUri[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/user_management/redirect_uris/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 409 }
    }
  } & {
    '/user_management/sessions/logout': {
      $get:
        | {
            input: { query: { session_id: string; return_to?: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { session_id: string; return_to?: string } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { query: { session_id: string; return_to?: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/sessions/revoke': {
      $post:
        | {
            input: { json: UserlandRevokeSessionDtoInput }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: UserlandRevokeSessionDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/user_management/users': {
      $get:
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization?: string
                organization_id?: string
                email?: string
              }
            }
            output: UserlandUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization?: string
                organization_id?: string
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateUserlandUserDtoInput }
            output: UserlandUser & { radar_auth_attempt_id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserlandUserDtoInput }
            output:
              | PasswordStrengthErrorErrorBodyWithErrors
              | UserCreationErrorErrorBodyWithErrors
              | InvalidPasswordHashErrorBody
              | PasswordAndPasswordHashProvidedErrorBody
              | PasswordAndPasswordHashTypeProvidedErrorBody
              | PasswordSaltPositionRequiresPasswordHashErrorBody
              | InvalidMetadataErrorBody
              | EmailDomainNotDeliverableErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandUserDtoInput }
            output: PolicyDeniedErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateUserlandUserDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUserlandUserDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/users/external_id/:external_id': {
      $get:
        | {
            input: { param: { external_id: string } }
            output: UserlandUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/user_management/users/identities/:provider/:idp_id': {
      $get:
        | {
            input: { param: { provider: string; idp_id: string } }
            output: UserlandUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider: string; idp_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { provider: string; idp_id: string } }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/users/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserDtoInput }
            output: UserlandUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserDtoInput }
            output:
              | PasswordStrengthErrorErrorBodyWithErrors
              | InvalidPasswordHashErrorBody
              | PasswordAndPasswordHashProvidedErrorBody
              | PasswordAndPasswordHashTypeProvidedErrorBody
              | PasswordSaltPositionRequiresPasswordHashErrorBody
              | EmailAlreadyVerifiedErrorBody
              | InvalidMetadataErrorBody
              | ExternalIdAlreadyUsedErrorBody
              | EmailChangeNotAllowedErrorBody
              | EmailNotAvailableErrorBody
              | InvalidEmailErrorBody
              | InvalidLocaleErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { id: string } }
            output: UserlandUser
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/users/:id/email_change/confirm': {
      $post:
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDtoInput }
            output: {
              object: 'email_change_confirmation'
              user: {
                object: 'user'
                id: string
                first_name: string | null
                last_name: string | null
                name?: (string | null) | undefined
                profile_picture_url: string | null
                email: string
                email_verified: boolean
                external_id: string | null
                metadata?: { [key: string]: string } | undefined
                last_sign_in_at: string | null
                locale?: (string | null) | undefined
                created_at: string
                updated_at: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/users/:id/email_change/send': {
      $post:
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDtoInput }
            output: EmailChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/users/:id/email_verification/confirm': {
      $post:
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDtoInput }
            output: VerifyEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/users/:id/email_verification/send': {
      $post:
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDtoInput }
            output: SendVerificationEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/users/:id/identities': {
      $get:
        | {
            input: { param: { id: string } }
            output: {
              idp_id: string
              type: 'OAuth'
              provider:
                | 'AppleOAuth'
                | 'BitbucketOAuth'
                | 'GithubOAuth'
                | 'GitLabOAuth'
                | 'GoogleOAuth'
                | 'IntuitOAuth'
                | 'LinkedInOAuth'
                | 'MicrosoftOAuth'
                | 'SalesforceOAuth'
                | 'SlackOAuth'
                | 'VercelMarketplaceOAuth'
                | 'VercelOAuth'
                | 'XeroOAuth'
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/users/:id/sessions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & {
              data?:
                | {
                    object: 'session'
                    id: string
                    impersonator?: { email: string; reason: string | null } | undefined
                    ip_address: string | null
                    organization_id?: string | undefined
                    user_agent: string | null
                    user_id: string
                    auth_method:
                      | 'cross_app_auth'
                      | 'external_auth'
                      | 'impersonation'
                      | 'magic_code'
                      | 'migrated_session'
                      | 'oauth'
                      | 'passkey'
                      | 'password'
                      | 'sso'
                      | 'unknown'
                    status: 'active' | 'expired' | 'revoked'
                    expires_at: string
                    ended_at: string | null
                    created_at: string
                    updated_at: string
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/users/:userId/api_keys': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
              }
            }
            output: UserApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                organization_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDtoInput }
            output: UserApiKeyWithValue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDtoInput }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/users/:userId/feature-flags': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: FlagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/user_management/users/:user_id/authorized_applications': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: AuthorizedConnectApplicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/users/:user_id/authorized_applications/:application_id': {
      $delete:
        | {
            input: { param: { application_id: string; user_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { application_id: string; user_id: string } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/user_management/users/:user_id/connected_accounts/:slug': {
      $get:
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string }
            } & { header: { 'idempotency-key'?: string } } & {
              json: CreateConnectedAccountDtoInput
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string }
            } & { header: { 'idempotency-key'?: string } } & {
              json: CreateConnectedAccountDtoInput
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string }
            } & { header: { 'idempotency-key'?: string } } & {
              json: CreateConnectedAccountDtoInput
            }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string }
            } & { header: { 'idempotency-key'?: string } } & {
              json: CreateConnectedAccountDtoInput
            }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string }
            } & { header: { 'idempotency-key'?: string } } & {
              json: CreateConnectedAccountDtoInput
            }
            output:
              | UserConnectedAccountImportErrorBody
              | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string }
            } & { header: { 'idempotency-key'?: string } } & {
              json: CreateConnectedAccountDtoInput
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: ConnectedAccountDtoInput }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: ConnectedAccountDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: ConnectedAccountDtoInput }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: ConnectedAccountDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: ConnectedAccountDtoInput }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: ConnectedAccountDtoInput }
            output: InvalidRefreshTokenErrorBody | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string
                supports_multiple_connections?: string
                connected_account_id?: string
                connection_intent?: 'reauthorize'
              }
            } & { json: ConnectedAccountDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/user_management/users/:user_id/data_providers': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: { organization_id?: string; supports_multiple_connections?: string }
            }
            output: DataIntegrationsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: { organization_id?: string; supports_multiple_connections?: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              query: { organization_id?: string; supports_multiple_connections?: string }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/user_management/users/:userlandUserId/auth_factors': {
      $post:
        | {
            input: { param: { userlandUserId: string } } & {
              json: EnrollUserlandUserAuthenticationFactorDtoInput
            }
            output: UserlandUserAuthenticationFactorEnrollResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userlandUserId: string } } & {
              json: EnrollUserlandUserAuthenticationFactorDtoInput
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { userlandUserId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: UserlandUserAuthenticationFactorList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userlandUserId: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/waitlist_entries/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/waitlist_entries/:id/approve': {
      $post:
        | {
            input: { param: { id: string } }
            output: {
              id: string
              email: string
              state: 'pending' | 'approved' | 'denied'
              approved_at: string | null
              additional_fields?: { [key: string]: string } | undefined
              waitlist_id?: (string | null) | undefined
              created_at: string
              updated_at: string
              object: 'waitlist_entry'
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/waitlist_entries/:id/deny': {
      $post:
        | {
            input: { param: { id: string } }
            output: {
              id: string
              email: string
              state: 'pending' | 'approved' | 'denied'
              approved_at: string | null
              additional_fields?: { [key: string]: string } | undefined
              waitlist_id?: (string | null) | undefined
              created_at: string
              updated_at: string
              object: 'waitlist_entry'
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/waitlists': {
      $get: {
        input: {}
        output: {
          object: 'list'
          data: Waitlist[]
          list_metadata: { before: string | null; after: string | null }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_management/waitlists/:id': {
      $get:
        | { input: { param: { id: string } }; output: Waitlist; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: ErrorBody; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user_management/waitlists/:id/entries': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                state?: 'pending' | 'approved' | 'denied'
                email?: string
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
            } & { data?: WaitlistEntry[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                state?: 'pending' | 'approved' | 'denied'
                email?: string
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string
                after?: string
                limit?: unknown
                order?: PaginationOrderInput
                state?: 'pending' | 'approved' | 'denied'
                email?: string
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CreateWaitlistEntryDtoInput }
            output: WaitlistEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: CreateWaitlistEntryDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateWaitlistEntryDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vault/v1/keys/data-key': {
      $post:
        | {
            input: { json: CreateDataKeyRequestInput }
            output: CreateDataKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDataKeyRequestInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDataKeyRequestInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vault/v1/keys/decrypt': {
      $post:
        | {
            input: { json: DecryptRequestInput }
            output: DecryptResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DecryptRequestInput }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/vault/v1/keys/rekey': {
      $post:
        | {
            input: { json: RekeyRequestInput }
            output: CreateDataKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: RekeyRequestInput }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: RekeyRequestInput }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/vault/v1/kv': {
      $get:
        | {
            input: {
              query: {
                limit?: unknown
                before?: string
                after?: string
                order?: 'asc' | 'desc'
                search?: string
                updatedAfter?: string
              }
            }
            output: ObjectListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: unknown
                before?: string
                after?: string
                order?: 'asc' | 'desc'
                search?: string
                updatedAfter?: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: CreateObjectRequestInput }
            output: ObjectMetadata
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateObjectRequestInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateObjectRequestInput }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateObjectRequestInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vault/v1/kv/name/:name': {
      $get:
        | { input: { param: { name: string } }; output: Object; outputFormat: 'json'; status: 200 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { name: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/vault/v1/kv/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { version_check?: string } }
            output: DeleteObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { version_check?: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { version_check?: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { query: { version_check?: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | { input: { param: { id: string } }; output: Object; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateObjectRequestInput }
            output: ObjectWithoutValue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: UpdateObjectRequestInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateObjectRequestInput }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/vault/v1/kv/:id/metadata': {
      $get:
        | {
            input: { param: { id: string } }
            output: ObjectWithoutValue
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/vault/v1/kv/:id/versions': {
      $get:
        | {
            input: { param: { id: string } }
            output: VersionListResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/webhook_endpoints': {
      $get: {
        input: {
          query: { before?: string; after?: string; limit?: unknown; order?: PaginationOrderInput }
        }
        output: WebhookEndpointList
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateWebhookEndpointDtoInput }
            output: WebhookEndpointJson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateWebhookEndpointDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateWebhookEndpointDtoInput }
            output: InvalidUrlErrorBody | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/webhook_endpoints/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: WebhookEndpointJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDtoInput }
            output: WebhookEndpointJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDtoInput }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDtoInput }
            output: InvalidUrlErrorBody | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/widgets/token': {
      $post:
        | {
            input: { json: WidgetSessionTokenDtoInput }
            output: WidgetSessionTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WidgetSessionTokenDtoInput }
            output: ErrorBody | ErrorBodyWithErrorMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WidgetSessionTokenDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WidgetSessionTokenDtoInput }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
