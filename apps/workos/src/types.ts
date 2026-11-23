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
type PaginationOrder = 'normal' | 'desc' | 'asc'
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
  claim:
    | {
        id: string
        claim_completion:
          | {
              id: string
              created_at: string
              updated_at: string
              expires_at: string
              claimed_at: string
            }
          | ({ [x: string]: unknown } | null)
        created_at: string
        updated_at: string
        expires_at: string
      }
    | ({ [x: string]: unknown } | null)
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
type ValidateApiKeyDto = { value: string }
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
  api_key: ApiKey | ({ [x: string]: unknown } | null)
  agent_registration_id?: string | undefined
}
type ExpireApiKeyDto = { expires_at?: (string | null) | undefined }
type AuditLogSchemaJson = {
  object: 'audit_log_schema'
  version: number
  actor?: { metadata: { [x: string]: { [x: string]: unknown } } } | undefined
  targets: { type: string; metadata?: { [x: string]: { [x: string]: unknown } } | undefined }[]
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  created_at: string
}
type AuditLogActionJson = {
  object: 'audit_log_action'
  name: string
  schema: AuditLogSchemaJson
  created_at: string
  updated_at: string
}
type AuditLogSchemaActorDto = { metadata: { [x: string]: unknown } }
type AuditLogSchemaTargetDto = { type: string; metadata?: { [x: string]: unknown } | undefined }
type AuditLogSchemaDto = {
  actor?: AuditLogSchemaActorDto | undefined
  targets: AuditLogSchemaTargetDto[]
  metadata?: { [x: string]: unknown } | undefined
}
type AuditLogEventActorDto = {
  id: string
  type: string
  name?: string | undefined
  metadata?: {} | undefined
}
type AuditLogEventTargetDto = {
  id: string
  type: string
  name?: string | undefined
  metadata?: {} | undefined
}
type AuditLogEventContextDto = { location: string; user_agent?: string | undefined }
type AuditLogEventDto = {
  action: string
  occurred_at?: string | undefined
  actor: AuditLogEventActorDto
  targets: AuditLogEventTargetDto[]
  context: AuditLogEventContextDto
  metadata?: {} | undefined
  version?: number | undefined
}
type AuditLogEventIngestionDto = { organization_id: string; event: AuditLogEventDto }
type AuditLogEventCreateResponse = { success: boolean }
type ErrorBodyWithCodeInstancePathError = { instancePath: string }
type ErrorBodyWithCodeInstancePathErrors = {
  errors: ErrorBodyWithCodeInstancePathError[]
  message: string
  code: string
}
type AuditLogExportCreationDto = {
  organization_id: string
  range_start: string
  range_end: string
  actions?: string[] | undefined
  actors?: string[] | undefined
  actor_names?: string[] | undefined
  actor_ids?: string[] | undefined
  targets?: string[] | undefined
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
type ChallengeAuthenticationFactorDto = { sms_template?: string | undefined }
type RateLimitExceededErrorBodyWithRetryAfter = {
  code: 'rate_limit_exceeded'
  message: string
  retry_after: number
}
type SmsChallengeRateLimitedErrorBody = { code: 'sms_challenge_rate_limited'; message: string }
type SmsChallengeQuotaReachedErrorBody = { code: 'sms_challenge_quota_reached'; message: string }
type UserObject = {
  id: string
  email: string
  first_name?: string | undefined
  last_name?: string | undefined
  name?: string | undefined
  metadata?: { [x: string]: string } | undefined
}
type UserConsentOption = {
  claim: string
  type: 'enum'
  label: string
  choices: { value?: string | undefined; label?: string | undefined }[]
}
type UserManagementLoginRequest = {
  external_auth_id: string
  user: UserObject
  user_consent_options?: UserConsentOption[] | undefined
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
type CreateGroupRoleAssignmentDto = {
  role_slug: string
  resource_id?: string | undefined
  resource_external_id?: string | undefined
  resource_type_slug?: string | undefined
}
type ReplaceGroupRoleAssignmentEntryDto = {
  role_slug: string
  resource_id?: string | undefined
  resource_external_id?: string | undefined
  resource_type_slug?: string | undefined
}
type PatchGroupRoleAssignmentsDto = {
  add?: ReplaceGroupRoleAssignmentEntryDto[] | undefined
  remove?: ReplaceGroupRoleAssignmentEntryDto[] | undefined
}
type ReplaceGroupRoleAssignmentsDto = { role_assignments: ReplaceGroupRoleAssignmentEntryDto[] }
type DeleteGroupRoleAssignmentsByCriteriaDto = {
  role_slug: string
  resource_id?: string | undefined
  resource_external_id?: string | undefined
  resource_type_slug?: string | undefined
}
type CheckAuthorizationDto = { permission_slug: string }
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
    group: { id: string; name: string } | ({ [x: string]: unknown } | null)
  }
  created_at: string
  updated_at: string
}
type UserRoleAssignmentList = {
  object: 'list'
  data: UserRoleAssignment[]
  list_metadata: { before: string | null; after: string | null }
}
type AssignRoleDto = { role_slug: string }
type PatchRoleAssignmentEntryDto = { role_slug: string }
type PatchRoleAssignmentsDto = {
  add?: PatchRoleAssignmentEntryDto[] | undefined
  remove?: PatchRoleAssignmentEntryDto[] | undefined
}
type RoleAssignmentUpdateOverlapErrorBody = {
  code: 'role_assignment_update_overlap'
  message: string
}
type RemoveRoleDto = { role_slug: string }
type CreateOrganizationRoleDto = {
  slug?: string | undefined
  name: string
  description?: (string | null) | undefined
  resource_type_slug?: string | undefined
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
type UpdateOrganizationRoleDto = {
  name?: string | undefined
  description?: (string | null) | undefined
}
type SetRolePermissionsDto = { permissions: string[] }
type AddRolePermissionDto = { slug: string }
type UpdateAuthorizationResourceDto = {
  name?: string | undefined
  description?: (string | null) | undefined
}
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
  metadata?: { [x: string]: string } | undefined
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
  custom_attributes?: { [x: string]: { [x: string]: unknown } } | undefined
  created_at: string
  updated_at: string
  user: UserlandUser
}
type UserlandUserOrganizationMembershipBaseWithUserList = {
  object: 'list'
  data: UserlandUserOrganizationMembershipBaseWithUser[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateAuthorizationPermissionDto = {
  slug: string
  name: string
  description?: (string | null) | undefined
  resource_type_slug?: string | undefined
}
type UpdateAuthorizationPermissionDto = {
  name?: string | undefined
  description?: (string | null) | undefined
}
type CreateAuthorizationResourceDto = {
  external_id: string
  name: string
  description?: (string | null) | undefined
  resource_type_slug: string
  organization_id: string
}
type CreateRoleDto = {
  slug: string
  name: string
  description?: (string | null) | undefined
  resource_type_slug?: string | undefined
}
type UpdateRoleDto = { name?: string | undefined; description?: (string | null) | undefined }
type ClientApiTokenDto = { organization_id: string; user_id: string }
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
}
type ConnectApplicationList = {
  object: 'list'
  data: ConnectApplication[]
  list_metadata: { before: string | null; after: string | null }
}
type RedirectUriDto = { uri: string; default?: (boolean | null) | undefined }
type CreateOAuthApplicationDto = {
  name: string
  application_type: 'oauth'
  description?: (string | null) | undefined
  scopes?: (string[] | null) | undefined
  redirect_uris?: (RedirectUriDto[] | null) | undefined
  cors_origins?: (string[] | null) | undefined
  uses_pkce?: (boolean | null) | undefined
  is_first_party: boolean
  organization_id?: (string | null) | undefined
}
type CreateM2MApplicationDto = {
  name: string
  application_type: 'm2m'
  description?: (string | null) | undefined
  scopes?: (string[] | null) | undefined
  organization_id: string
}
type UpdateOAuthApplicationDto = {
  name?: string | undefined
  description?: (string | null) | undefined
  scopes?: (string[] | null) | undefined
  redirect_uris?: (RedirectUriDto[] | null) | undefined
  cors_origins?: (string[] | null) | undefined
}
type CreateApplicationSecretDto = { [x: string]: unknown }
type NewConnectApplicationSecret = {
  object: 'connect_application_secret'
  id: string
  secret_hint: string
  last_used_at: string | null
  created_at: string
  updated_at: string
  secret: string
}
type CreateConnectionStandardAttributesDto = {
  idp_id?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  groups?: (string | null) | undefined
  name?: (string | null) | undefined
}
type CreateConnectionAttributeMapsDto = {
  standard_attributes?: CreateConnectionStandardAttributesDto | undefined
  custom_attributes?: { [x: string]: string } | undefined
}
type CreateConnectionDto = {
  organization_id: string
  name?: string | undefined
  external_id?: string | undefined
  connection_type?: string | undefined
  attribute_maps?: CreateConnectionAttributeMapsDto | undefined
}
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
type CreateSamlIdpSigningCertificateDto = { value: string }
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
type PatchConnectionStandardAttributesDto = {
  idp_id?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  groups?: (string | null) | undefined
  name?: (string | null) | undefined
}
type PatchConnectionAttributeMapsDto = {
  standard_attributes?: PatchConnectionStandardAttributesDto | undefined
  custom_attributes?: { [x: string]: string | ({ [x: string]: unknown } | null) } | undefined
}
type PatchConnectionDto = {
  name?: string | undefined
  external_id?: (string | null) | undefined
  connection_type?: string | undefined
  attribute_maps?: PatchConnectionAttributeMapsDto | undefined
}
type ConnectionTypeNotUpdatableErrorBody = {
  code: 'connection_type_not_updatable'
  message: string
}
type DataIntegrationCredentialsDto = {
  type: 'custom' | 'organization'
  client_id?: string | undefined
  client_secret?: string | undefined
}
type ApiKeyInstallationDto = {
  secret: string
  user_id: string
  organization_id?: string | undefined
}
type CustomProviderDefinitionDto = {
  name: string
  authorization_url?: string | undefined
  token_url?: string | undefined
  refresh_token_url?: (string | null) | undefined
  pkce_enabled?: boolean | undefined
  request_scope_separator?: string | undefined
  scopes_required?: boolean | undefined
  client_secret_required?: boolean | undefined
  additional_authorization_parameters?: { [x: string]: string } | undefined
  token_body_content_type?: string | undefined
  authenticate_via?: 'request_body' | 'basic_auth_header' | undefined
}
type CreateDataIntegrationDto = {
  provider: string
  ownership?: 'user' | 'organization' | undefined
  description?: (string | null) | undefined
  enabled?: boolean | undefined
  scopes?: (string[] | null) | undefined
  auth_methods?: ('oauth' | 'api_key' | 'client_credentials')[] | undefined
  config?: { [x: string]: string } | undefined
  credentials?: DataIntegrationCredentialsDto | undefined
  api_key?: ApiKeyInstallationDto | undefined
  custom_provider?: CustomProviderDefinitionDto | undefined
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
  scopes: string[] | ({ [x: string]: unknown } | null)
  redirect_uri: string
  auth_methods: ('oauth' | 'api_key' | 'client_credentials')[]
  credentials:
    | {
        type: 'custom' | 'organization'
        client_id: string | null
        redacted_client_secret: string | null
      }
    | ({ [x: string]: unknown } | null)
  installation:
    | {
        id: string
        connection_role: 'compatibility' | 'standard'
        account_identifier: string | null
        account_display_name: string | null
        user_id: string | null
        organization_id: string | null
        api_key_last_4: string | null
      }
    | ({ [x: string]: unknown } | null)
  config: { [x: string]: string }
  custom_provider:
    | {
        name: string
        authorization_url: string | null
        token_url: string | null
        refresh_token_url: string | null
        pkce_enabled: boolean
        request_scope_separator: string
        scopes_required: boolean
        client_secret_required: boolean
        additional_authorization_parameters: { [x: string]: string }
        token_body_content_type: string
        authenticate_via: 'request_body' | 'basic_auth_header'
      }
    | ({ [x: string]: unknown } | null)
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
  config?: { [x: string]: string } | undefined
  state: 'connected' | 'needs_reauthorization' | 'disconnected'
  established_by_user_id?: (string | null) | undefined
  state_reason?:
    | 'establishing_member_membership_ended'
    | ({ [x: string]: unknown } | null)
    | undefined
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
type UpdateCustomProviderDefinitionDto = {
  name?: string | undefined
  authorization_url?: string | undefined
  token_url?: string | undefined
  refresh_token_url?: (string | null) | undefined
  pkce_enabled?: boolean | undefined
  request_scope_separator?: string | undefined
  scopes_required?: boolean | undefined
  client_secret_required?: boolean | undefined
  additional_authorization_parameters?: { [x: string]: string } | undefined
  token_body_content_type?: string | undefined
  authenticate_via?: 'request_body' | 'basic_auth_header' | undefined
}
type UpdateDataIntegrationDto = {
  description?: (string | null) | undefined
  enabled?: boolean | undefined
  scopes?: (string[] | null) | undefined
  credentials?: DataIntegrationCredentialsDto | undefined
  api_key?: ApiKeyInstallationDto | undefined
  custom_provider?: UpdateCustomProviderDefinitionDto | undefined
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
      metadata: { [x: string]: { [x: string]: unknown } }
      config: { [x: string]: string }
    }
  | { object: 'credential'; auth_method: 'api_key'; value: string; config: { [x: string]: string } }
  | {
      object: 'credential'
      auth_method: 'client_credentials'
      value: string
      expires_at: string | null
      scopes: string[]
      missing_scopes: string[]
      metadata: { [x: string]: { [x: string]: unknown } }
      config: { [x: string]: string }
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
  raw_attributes?: { [x: string]: { [x: string]: unknown } } | undefined
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
  raw_attributes: { [x: string]: { [x: string]: unknown } }
  custom_attributes: { [x: string]: { [x: string]: unknown } }
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
  raw_attributes: { [x: string]: { [x: string]: unknown } }
  custom_attributes: { [x: string]: { [x: string]: unknown } }
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
type EventSchema = {
  object: 'event'
  id: string
  event: string
  data: { [x: string]: { [x: string]: unknown } }
  created_at: string
  context?: { [x: string]: { [x: string]: unknown } } | undefined
}
type EventList = { object: 'list'; data: EventSchema[]; list_metadata: { after: string | null } }
type Flag = {
  object: 'feature_flag'
  id: string
  slug: string
  name: string
  description: string | null
  owner:
    | { email: string; first_name: string | null; last_name: string | null }
    | ({ [x: string]: unknown } | null)
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
type CreateOrganizationDomainDto = { domain: string; organization_id: string }
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
  metadata: { [x: string]: string }
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
type OrganizationDomainDataDto = { domain: string; state: 'pending' | 'verified' }
type OrganizationDto = {
  name: string
  allow_profiles_outside_organization?: boolean | undefined
  domains?: string[] | undefined
  domain_data?: OrganizationDomainDataDto[] | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  external_id?: (string | null) | undefined
}
type UpdateOrganizationDto = {
  name?: string | undefined
  allow_profiles_outside_organization?: boolean | undefined
  domains?: string[] | undefined
  domain_data?: OrganizationDomainDataDto[] | undefined
  stripe_customer_id?: string | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  external_id?: (string | null) | undefined
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
type UpdateAuditLogsRetentionDto =
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
type CreateOrganizationApiKeyDto = {
  name: string
  permissions?: string[] | undefined
  expires_at?: string | undefined
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
  scopes: string[] | ({ [x: string]: unknown } | null)
  config: { [x: string]: string }
  created_at: string
  updated_at: string
  credentials?: DataIntegrationCredentials | undefined
}
type DataIntegrationConfigurationListResponse = {
  object: 'list'
  data: DataIntegrationConfigurationResponse[]
}
type ConfigureDataIntegrationBody = {
  enabled?: boolean | undefined
  scopes?: string[] | ({ [x: string]: unknown } | null) | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  config?: { [x: string]: string } | undefined
}
type CreateGroupDto = { name: string; description?: (string | null) | undefined }
type Group = {
  object: 'group'
  id: string
  organization_id: string
  name: string
  description: string | null
  created_at: string
  updated_at: string
}
type GroupList = {
  object: 'list'
  data: Group[]
  list_metadata: { before: string | null; after: string | null }
}
type UpdateGroupDto = { name?: string | undefined; description?: (string | null) | undefined }
type CreateGroupMembershipDto = { organization_membership_id: string }
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
    custom_attributes?: { [x: string]: { [x: string]: unknown } } | undefined
    created_at: string
    updated_at: string
  }[]
  list_metadata: { before: string | null; after: string | null }
}
type PatchGroupMembershipsDto = { add?: string[] | undefined; remove?: string[] | undefined }
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
type CreateOrganizationConnectedAccountDto = {
  account_display_name?: (string | null) | undefined
  account_identifier?: (string | null) | undefined
  config?: { [x: string]: string } | undefined
  access_token?: string | undefined
  refresh_token?: string | undefined
  expires_at?: string | undefined
  scopes?: string[] | undefined
  state?: 'connected' | 'needs_reauthorization' | undefined
  user_id: string
  metadata?: { [x: string]: unknown } | undefined
  connection_intent?: 'add' | undefined
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
type OrganizationConnectedAccountDto = {
  account_display_name?: (string | null) | undefined
  account_identifier?: (string | null) | undefined
  config?: { [x: string]: string } | undefined
  access_token?: string | undefined
  refresh_token?: string | undefined
  expires_at?: string | undefined
  scopes?: string[] | undefined
  state?: 'connected' | 'needs_reauthorization' | undefined
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
  | 'oidc_options_required'
  | 'one_time_code_expired'
  | 'one_time_code_previously_used'
  | 'one_time_code_too_many_attempts'
  | 'organization_blocked_from_sending_invites'
  | 'organization_membership_directory_managed'
  | 'organization_not_found'
  | 'organization_not_invocable'
  | 'organization_role_slug_conflict'
  | 'organization_selection_required'
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
  | 'radar_sign_up_challenge'
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
    scopes: string[] | ({ [x: string]: unknown } | null)
    auth_methods?: ('oauth' | 'api_key' | 'client_credentials')[] | undefined
    connection_owner: 'user' | 'organization'
    ownership: 'userland_user' | 'organization'
    created_at: string
    updated_at: string
    integrationType: string
    credentialsType: string
    createdAt: string
    updatedAt: string
    connected_account:
      | {
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
          config?: { [x: string]: string } | undefined
          state: 'connected' | 'needs_reauthorization' | 'disconnected'
          established_by_user_id?: (string | null) | undefined
          state_reason?:
            | 'establishing_member_membership_ended'
            | ({ [x: string]: unknown } | null)
            | undefined
          created_at: string
          updated_at: string
          warnings?: { code: 'duplicate_account_display_name'; message: string }[] | undefined
          userlandUserId: string | null
          organizationId: string | null
          createdAt: string
          updatedAt: string
        }
      | ({ [x: string]: unknown } | null)
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
      config?: { [x: string]: string } | undefined
      state: 'connected' | 'needs_reauthorization' | 'disconnected'
      established_by_user_id?: (string | null) | undefined
      state_reason?:
        | 'establishing_member_membership_ended'
        | ({ [x: string]: unknown } | null)
        | undefined
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
type CreateItContactDto = { email: string }
type InviteItContactDto = {
  intents: (
    | 'sso'
    | 'directory_sync'
    | 'log_streams'
    | 'domain_verification'
    | 'bring_your_own_key'
  )[]
}
type CreateTeamDto = { admin_email: string; name: string }
type Team = {
  object: 'team'
  id: string
  name: string
  production_state: 'Active' | 'Inactive' | 'Suspended' | 'Deleting'
  production_enabled_at: string | null
  created_at: string
  updated_at: string
}
type GenerateLinkDto = {
  return_url?: string | undefined
  success_url?: string | undefined
  organization: string
  external_user_id?: string | undefined
  intent?:
    | 'sso'
    | 'dsync'
    | 'audit_logs'
    | 'log_streams'
    | 'domain_verification'
    | 'certificate_renewal'
    | 'bring_your_own_key'
    | undefined
  it_contact_emails?: string[] | undefined
}
type PortalLinkResponse = { link: string }
type RevokeLinkDto = { organization: string; external_user_id: string }
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
  role?: SlimRole | ({ [x: string]: unknown } | null) | undefined
  roles?: SlimRole[] | ({ [x: string]: unknown } | null) | undefined
  groups?: string[] | undefined
  custom_attributes?: { [x: string]: { [x: string]: unknown } } | undefined
  raw_attributes: { [x: string]: { [x: string]: unknown } }
}
type UnauthorizedErrorBody = { error: 'Unauthorized' }
type TokenQueryDto = {
  client_id: string
  client_secret: string
  code?: string | undefined
  grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
  code_verifier?: string | undefined
  subject_token?: string | undefined
  subject_token_type?: 'urn:ietf:params:oauth:token-type:id_token' | undefined
  organization_id?: string | undefined
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
type RadarSignUpChallengeErrorBody = { code: 'radar_sign_up_challenge'; message: string }
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
type CreateAuthkitOauthResourceDto = { uri: string; default?: boolean | undefined }
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
type CreateCorsOriginDto = { origin: string }
type CorsOriginResponse = {
  object: 'cors_origin'
  id: string
  origin: string
  created_at: string
  updated_at: string
}
type ErrorBodyWithConstraintsPropertyError = {
  property?: string | undefined
  constraints?: { [x: string]: unknown } | undefined
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
type CreateUserlandUserInviteOptionsDto = {
  email: string
  organization_id?: string | undefined
  role_slug?: string | undefined
  expires_in_days?: number | undefined
  inviter_user_id?: string | undefined
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
    | undefined
}
type ResendUserlandUserInviteOptionsDto = {
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
    | undefined
}
type JwtTemplate = {
  object: 'jwt_template'
  content: string
  created_at: string
  updated_at: string
}
type UpdateJwtTemplateDto = { content: string }
type CreateUserlandMagicCodeAndReturnDto = {
  email: string
  invitation_token?: string | undefined
  ip_address?: string | undefined
  user_agent?: string | undefined
  radar_auth_attempt_id?: string | undefined
  signals_id?: string | undefined
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
    | undefined
}
type EmailDomainNotDeliverableErrorBody = { code: 'email_domain_not_deliverable'; message: string }
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
type UserlandUserOrganizationMembership = {
  object: 'organization_membership'
  id: string
  user_id: string
  organization_id: string
  status: 'active' | 'inactive' | 'pending'
  directory_managed: boolean
  organization_name?: string | undefined
  custom_attributes?: { [x: string]: { [x: string]: unknown } } | undefined
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
type CreateUserlandUserOrganizationMembershipDto = { user_id: string; organization_id: string }
type InvalidRequestParametersErrorBody = { code: 'invalid_request_parameters'; message: string }
type InvalidRoleErrorBody = { code: 'invalid_role'; message: string }
type MultipleRolesNotEnabledErrorBody = { code: 'multiple_roles_not_enabled'; message: string }
type SubResourceScopedRoleNotAllowedErrorBodyWithRoleSlug = {
  message: string
  code: 'sub_resource_scoped_role_not_allowed'
  role_slug: string
}
type UpdateUserlandUserOrganizationMembershipDto =
  | { [x: string]: unknown }
  | { role_slug: string }
  | { role_slugs: string[] }
type CreatePasswordResetTokenDto = {
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
    | undefined
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
type CreatePasswordResetDto = { token: string; new_password: string }
type ResetPasswordResponse = { user: UserlandUser }
type SendRadarSmsChallengeDto = {
  user_id: string
  pending_authentication_token: string
  phone_number: string
  ip_address?: string | undefined
  user_agent?: string | undefined
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
type CreateRedirectUriDto = { uri: string }
type RedirectUri = {
  object: 'redirect_uri'
  id: string
  uri: string
  default: boolean
  created_at: string
  updated_at: string
}
type UserlandRevokeSessionDto = { session_id: string }
type UserlandUserList = {
  object: 'list'
  data: UserlandUser[]
  list_metadata: { before: string | null; after: string | null }
}
type CreateUserlandUserDto = {
  email: string
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  name?: (string | null) | undefined
  email_verified?: (boolean | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  external_id?: (string | null) | undefined
  ip_address?: (string | null) | undefined
  user_agent?: (string | null) | undefined
  signals_id?: string | undefined
}
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
type UpdateUserlandUserDto = {
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  name?: string | undefined
  email_verified?: boolean | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  external_id?: (string | null) | undefined
  locale?: (string | null) | undefined
}
type EmailAlreadyVerifiedErrorBody = { code: 'email_already_verified'; message: string }
type ExternalIdAlreadyUsedErrorBody = { code: 'external_id_already_used'; message: string }
type InvalidLocaleErrorBody = { code: 'invalid_locale'; message: string }
type ConfirmEmailChangeDto = { code: string }
type SendEmailChangeDto = {
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
    | undefined
}
type EmailChange = {
  object: 'email_change'
  user: UserlandUser
  new_email: string
  expires_at: string
  created_at: string
}
type VerifyEmailAddressDto = { code: string }
type VerifyEmailResponse = { user: UserlandUser }
type SendVerificationEmailDto = {
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
    | undefined
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
type CreateUserApiKeyDto = {
  name: string
  organization_id: string
  permissions?: string[] | undefined
  expires_at?: string | undefined
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
type CreateConnectedAccountDto = {
  account_display_name?: (string | null) | undefined
  account_identifier?: (string | null) | undefined
  config?: { [x: string]: string } | undefined
  access_token?: string | undefined
  refresh_token?: string | undefined
  expires_at?: string | undefined
  scopes?: string[] | undefined
  state?: 'connected' | 'needs_reauthorization' | undefined
  metadata?: { [x: string]: unknown } | undefined
  connection_intent?: 'add' | undefined
}
type UserConnectedAccountImportErrorBody = {
  code:
    | 'invalid_refresh_token'
    | 'invalid_token_combination'
    | 'invalid_data_integration_state'
    | 'client_credentials_not_configured'
  message: string
}
type ConnectedAccountDto = {
  account_display_name?: (string | null) | undefined
  account_identifier?: (string | null) | undefined
  config?: { [x: string]: string } | undefined
  access_token?: string | undefined
  refresh_token?: string | undefined
  expires_at?: string | undefined
  scopes?: string[] | undefined
  state?: 'connected' | 'needs_reauthorization' | undefined
}
type InvalidRefreshTokenErrorBody = { code: 'invalid_refresh_token'; message: string }
type EnrollUserlandUserAuthenticationFactorDto = {
  type: 'totp'
  totp_issuer?: string | undefined
  totp_user?: string | undefined
  totp_secret?: string | undefined
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
  additional_fields?: { [x: string]: string } | undefined
  waitlist_id?: (string | null) | undefined
  created_at: string
  updated_at: string
  object: 'waitlist_entry'
}
type CreateWaitlistEntryDto = {
  email: string
  additional_fields?: { [x: string]: string } | undefined
  send_confirmation_email?: boolean | undefined
}
type CreateDataKeyRequest = { context: { [x: string]: string } }
type CreateDataKeyResponse = {
  context: { [x: string]: string }
  data_key: string
  encrypted_keys: string
  id: string
}
type Error = { error: string }
type DecryptRequest = { keys: string }
type DecryptResponse = { data_key: string; id: string }
type RekeyRequest = { context: { [x: string]: string }; encrypted_keys: string }
type ObjectSummary = { id: string; name: string; updated_at?: (string | null) | undefined }
type ListMetadata = { after?: (string | null) | undefined; before?: (string | null) | undefined }
type ObjectListResponse = { data: ObjectSummary[]; list_metadata: ListMetadata }
type CreateObjectRequest = { key_context: { [x: string]: string }; name: string; value: string }
type Actor = { id: string; name: string }
type ObjectMetadata = {
  context: { [x: string]: string }
  environment_id: string
  id: string
  key_id: string
  updated_at: string
  updated_by: Actor
  version_id?: (string | null) | undefined
}
type Object = { id: string; metadata: ObjectMetadata; name: string; value: string }
type DeleteObjectResponse = { name: string; success: boolean }
type UpdateObjectRequest = { value: string; version_check?: (string | null) | undefined }
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
type CreateWebhookEndpointDto = {
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
type UpdateWebhookEndpointDto = {
  endpoint_url?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  events?:
    | (
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
    | undefined
}
type WidgetSessionTokenDto = {
  organization_id?: string | undefined
  user_id?: string | undefined
  scopes?:
    | (
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
    | undefined
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
                description?: string | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds: number
                      access_token_ttl_seconds: number
                      refresh_token_ttl_seconds: number
                    }
                  | undefined
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
                description?: string | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds: number
                      access_token_ttl_seconds: number
                      refresh_token_ttl_seconds: number
                    }
                  | undefined
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
                description?: string | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds: number
                      access_token_ttl_seconds: number
                      refresh_token_ttl_seconds: number
                    }
                  | undefined
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
                description?: string | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds: number
                      access_token_ttl_seconds: number
                      refresh_token_ttl_seconds: number
                    }
                  | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: AgentBlueprint[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                name?: string | undefined
                description?: (string | null) | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds?: number | undefined
                      access_token_ttl_seconds?: number | undefined
                      refresh_token_ttl_seconds?: number | undefined
                    }
                  | undefined
              }
            }
            output: AgentBlueprint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds?: number | undefined
                      access_token_ttl_seconds?: number | undefined
                      refresh_token_ttl_seconds?: number | undefined
                    }
                  | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds?: number | undefined
                      access_token_ttl_seconds?: number | undefined
                      refresh_token_ttl_seconds?: number | undefined
                    }
                  | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds?: number | undefined
                      access_token_ttl_seconds?: number | undefined
                      refresh_token_ttl_seconds?: number | undefined
                    }
                  | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                permissions?:
                  | ({ slug: string; instance_types: ('delegated' | 'autonomous')[] } | string)[]
                  | undefined
                invocable_by?:
                  | { role_slugs?: string[] | undefined; organization_ids?: string[] | undefined }
                  | undefined
                invocable_as?:
                  | { instance_types?: ('delegated' | 'autonomous')[] | undefined }
                  | undefined
                session_settings?:
                  | {
                      max_age_seconds?: number | undefined
                      access_token_ttl_seconds?: number | undefined
                      refresh_token_ttl_seconds?: number | undefined
                    }
                  | undefined
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
                | { type: 'user_delegated'; user_access_token: string; intent?: string | undefined }
                | { type: 'autonomous'; organization_id: string; intent?: string | undefined }
                | {
                    type: 'agent_delegated'
                    agent_access_token: string
                    intent?: string | undefined
                  }
                | { type: 'refresh'; refresh_token: string; intent?: string | undefined }
            }
            output: AgentToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json:
                | { type: 'user_delegated'; user_access_token: string; intent?: string | undefined }
                | { type: 'autonomous'; organization_id: string; intent?: string | undefined }
                | {
                    type: 'agent_delegated'
                    agent_access_token: string
                    intent?: string | undefined
                  }
                | { type: 'refresh'; refresh_token: string; intent?: string | undefined }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json:
                | { type: 'user_delegated'; user_access_token: string; intent?: string | undefined }
                | { type: 'autonomous'; organization_id: string; intent?: string | undefined }
                | {
                    type: 'agent_delegated'
                    agent_access_token: string
                    intent?: string | undefined
                  }
                | { type: 'refresh'; refresh_token: string; intent?: string | undefined }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agent_blueprint_id: string } } & {
              json:
                | { type: 'user_delegated'; user_access_token: string; intent?: string | undefined }
                | { type: 'autonomous'; organization_id: string; intent?: string | undefined }
                | {
                    type: 'agent_delegated'
                    agent_access_token: string
                    intent?: string | undefined
                  }
                | { type: 'refresh'; refresh_token: string; intent?: string | undefined }
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
                organization_id?: string | undefined
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
                organization_id?: string | undefined
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
                organization_id?: string | undefined
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
                organization_id?: string | undefined
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
                organization_id?: string | undefined
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
                | { type: 'access_token'; credential: string; audience?: string | undefined }
            }
            output: AgentCredentialValidation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json:
                | { type: 'api_key'; credential: string }
                | { type: 'access_token'; credential: string; audience?: string | undefined }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                agent_blueprint_id?: string | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: AgentInstance[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                agent_blueprint_id?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                agent_blueprint_id?: string | undefined
                agent_instance_id?: string | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: AgentInstanceSession[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                agent_blueprint_id?: string | undefined
                agent_instance_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                agent_blueprint_id?: string | undefined
                agent_instance_id?: string | undefined
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
            input: { json: ValidateApiKeyDto }
            output: ApiKeyValidationResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ValidateApiKeyDto }; output: {}; outputFormat: string; status: 401 }
        | {
            input: { json: ValidateApiKeyDto }
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
            input: { param: { id: string } } & { json: ExpireApiKeyDto }
            output: ApiKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ExpireApiKeyDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ExpireApiKeyDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ExpireApiKeyDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: AuditLogActionJson[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
            input: { param: { actionName: string } } & { json: AuditLogSchemaDto }
            output: AuditLogSchemaJson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { actionName: string } } & { json: AuditLogSchemaDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { actionName: string } } & { json: AuditLogSchemaDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: AuditLogSchemaJson[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { actionName: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
            input: { header: { 'idempotency-key'?: string | undefined } } & {
              json: AuditLogEventIngestionDto
            }
            output: AuditLogEventCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & {
              json: AuditLogEventIngestionDto
            }
            output: ErrorBodyWithCodeInstancePathErrors | ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & {
              json: AuditLogEventIngestionDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & {
              json: AuditLogEventIngestionDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & {
              json: AuditLogEventIngestionDto
            }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & {
              json: AuditLogEventIngestionDto
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
            input: { json: AuditLogExportCreationDto }
            output: AuditLogExportJson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AuditLogExportCreationDto }
            output: ErrorBody | ErrorBodyWithErrorMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuditLogExportCreationDto }
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
                phone_number?: string | undefined
                totp_issuer?: string | undefined
                totp_user?: string | undefined
                user_id?: string | undefined
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
                phone_number?: string | undefined
                totp_issuer?: string | undefined
                totp_user?: string | undefined
                user_id?: string | undefined
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
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDto }
            output: AuthenticationChallenge
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ChallengeAuthenticationFactorDto }
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
            input: { json: UserManagementLoginRequest }
            output: ExternalAuthCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserManagementLoginRequest }
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
            input: { json: UserManagementLoginRequest }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserManagementLoginRequest }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: GroupRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDto }
            output: GroupRoleAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { group_id: string } } & { json: CreateGroupRoleAssignmentDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: PatchGroupRoleAssignmentsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDto }
            output: GroupRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & { json: ReplaceGroupRoleAssignmentsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { group_id: string } } & {
              json: DeleteGroupRoleAssignmentsByCriteriaDto
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
              json: CheckAuthorizationDto
            }
            output: AuthorizationCheck
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: CheckAuthorizationDto
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_resource_external_id?: string | undefined
              }
            }
            output: AuthorizationResourceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_resource_external_id?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_resource_external_id?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_resource_external_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_resource_external_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_resource_external_id?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: AuthorizationPermissionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string; resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                resource_id?: string | undefined
                resource_external_id?: string | undefined
                resource_type_slug?: string | undefined
              }
            }
            output: UserRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                resource_id?: string | undefined
                resource_external_id?: string | undefined
                resource_type_slug?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                resource_id?: string | undefined
                resource_external_id?: string | undefined
                resource_type_slug?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                resource_id?: string | undefined
                resource_external_id?: string | undefined
                resource_type_slug?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDto }
            output: UserRoleAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: AssignRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDto
            }
            output: RoleAssignmentUpdateOverlapErrorBody | ErrorBodyWithError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_membership_id: string } } & {
              json: PatchRoleAssignmentsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDto }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_membership_id: string } } & { json: RemoveRoleDto }
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
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDto }
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
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationRoleDto }
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
              json: UpdateOrganizationRoleDto
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
              json: UpdateOrganizationRoleDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: UpdateOrganizationRoleDto
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
              json: SetRolePermissionsDto
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
              json: SetRolePermissionsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: SetRolePermissionsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: SetRolePermissionsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDto
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
              json: AddRolePermissionDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              json: AddRolePermissionDto
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
            } & { json: UpdateAuthorizationResourceDto }
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
            } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: boolean | undefined } }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: boolean | undefined } }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: boolean | undefined } }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organization_id: string; resource_type_slug: string; external_id: string }
            } & { query: { cascade_delete?: boolean | undefined } }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: AuthorizationPermissionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { json: CreateAuthorizationPermissionDto }
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
            input: { json: CreateAuthorizationPermissionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAuthorizationPermissionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAuthorizationPermissionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAuthorizationPermissionDto }
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
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDto }
            output: AuthorizationPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateAuthorizationPermissionDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                resource_type_slug?: string | undefined
                resource_external_id?: string | undefined
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_external_id?: string | undefined
              }
            }
            output: AuthorizationResourceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                resource_type_slug?: string | undefined
                resource_external_id?: string | undefined
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_external_id?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                resource_type_slug?: string | undefined
                resource_external_id?: string | undefined
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_external_id?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                resource_type_slug?: string | undefined
                resource_external_id?: string | undefined
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_external_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                resource_type_slug?: string | undefined
                resource_external_id?: string | undefined
                parent_resource_id?: string | undefined
                parent_resource_type_slug?: string | undefined
                parent_external_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateAuthorizationResourceDto }
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
            input: { json: CreateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAuthorizationResourceDto }
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
            input: { param: { resource_id: string } } & { json: UpdateAuthorizationResourceDto }
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
            input: { param: { resource_id: string } } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { resource_id: string } } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { resource_id: string } } & { json: UpdateAuthorizationResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { resource_id: string } } & {
              query: { cascade_delete?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { cascade_delete?: boolean | undefined }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { cascade_delete?: boolean | undefined }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { cascade_delete?: boolean | undefined }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & {
              query: { cascade_delete?: boolean | undefined }
            }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
              }
            }
            output: UserlandUserOrganizationMembershipBaseWithUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                permission_slug: string
                assignment?: 'direct' | 'indirect' | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
              }
            }
            output: UserRoleAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resource_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                role_slug?: string | undefined
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
            input: { json: CreateRoleDto }
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
            input: { json: CreateRoleDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: CreateRoleDto }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { json: CreateRoleDto }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | {
            input: { json: CreateRoleDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | { input: { json: CreateRoleDto }; output: ErrorBody; outputFormat: 'json'; status: 422 }
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
            input: { param: { slug: string } } & { json: UpdateRoleDto }
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
            input: { param: { slug: string } } & { json: UpdateRoleDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateRoleDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/authorization/roles/:slug/permissions': {
      $put:
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDto }
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
            input: { param: { slug: string } } & { json: SetRolePermissionsDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: SetRolePermissionsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDto }
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
            input: { param: { slug: string } } & { json: AddRolePermissionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: AddRolePermissionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/client/token': {
      $post:
        | {
            input: { json: ClientApiTokenDto }
            output: ClientApiTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ClientApiTokenDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ClientApiTokenDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ClientApiTokenDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                registration_types?: ('dynamic' | 'authenticated')[] | undefined
                organization_id?: string | undefined
              }
            }
            output: ConnectApplicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                registration_types?: ('dynamic' | 'authenticated')[] | undefined
                organization_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateOAuthApplicationDto | CreateM2MApplicationDto }
            output: ConnectApplication
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateOAuthApplicationDto | CreateM2MApplicationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateOAuthApplicationDto | CreateM2MApplicationDto }
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
            input: { param: { id: string } } & { json: UpdateOAuthApplicationDto }
            output: ConnectApplication
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateOAuthApplicationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateOAuthApplicationDto }
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
            input: { param: { id: string } } & { json: CreateApplicationSecretDto }
            output: NewConnectApplicationSecret
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: CreateApplicationSecretDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateApplicationSecretDto }
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
            input: { json: CreateConnectionDto }
            output: Connection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateConnectionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateConnectionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateConnectionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateConnectionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateConnectionDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                  | undefined
                domain?: string | undefined
                organization_id?: string | undefined
                search?: string | undefined
                state?: 'active' | 'inactive' | 'validating' | undefined
              }
            }
            output: ConnectionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                  | undefined
                domain?: string | undefined
                organization_id?: string | undefined
                search?: string | undefined
                state?: 'active' | 'inactive' | 'validating' | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                  | undefined
                domain?: string | undefined
                organization_id?: string | undefined
                search?: string | undefined
                state?: 'active' | 'inactive' | 'validating' | undefined
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
              json: CreateSamlIdpSigningCertificateDto
            }
            output: SamlIdpSigningCertificate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { connectionId: string } } & {
              json: CreateSamlIdpSigningCertificateDto
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
            input: { param: { id: string } } & { json: PatchConnectionDto }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: PatchConnectionDto }
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
            input: { json: CreateDataIntegrationDto }
            output: DataIntegration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDataIntegrationDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CreateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                ownership?: 'user' | 'organization' | undefined
              }
            }
            output: DataIntegrationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                ownership?: 'user' | 'organization' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                ownership?: 'user' | 'organization' | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                ownership?: 'user' | 'organization' | undefined
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
            input: {
              json: { connect_code: string; code_verifier: string; state?: string | undefined }
            }
            output: DataIntegrationFinishConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { connect_code: string; code_verifier: string; state?: string | undefined }
            }
            output: ConnectionFinishErrorBody | ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { connect_code: string; code_verifier: string; state?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: { connect_code: string; code_verifier: string; state?: string | undefined }
            }
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
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: DataIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
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
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent: 'add'
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent: 'add'
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent: 'add'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent: 'add'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
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
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: EntityNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                secret: string
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
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
                account_display_name?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                return_to?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'S256' | undefined
                config?: { [x: string]: string } | undefined
                connection_intent?: 'add' | 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: DataIntegrationAuthorizeUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                return_to?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'S256' | undefined
                config?: { [x: string]: string } | undefined
                connection_intent?: 'add' | 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: AuthorizationUrlRequestErrorBody | ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                return_to?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'S256' | undefined
                config?: { [x: string]: string } | undefined
                connection_intent?: 'add' | 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                return_to?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'S256' | undefined
                config?: { [x: string]: string } | undefined
                connection_intent?: 'add' | 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                return_to?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'S256' | undefined
                config?: { [x: string]: string } | undefined
                connection_intent?: 'add' | 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: AuthorizationUrlNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                return_to?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'S256' | undefined
                config?: { [x: string]: string } | undefined
                connection_intent?: 'add' | 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ConnectedAccountLimitReachedErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                return_to?: string | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'S256' | undefined
                config?: { [x: string]: string } | undefined
                connection_intent?: 'add' | 'reauthorize' | undefined
                connected_account_id?: string | undefined
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
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent: 'add'
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent: 'add'
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent: 'add'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent: 'add'
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent: 'add'
              }
            }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
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
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBodyWithMessageOrMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: EntityNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & {
              json: {
                account_display_name?: (string | null) | undefined
                account_identifier?: (string | null) | undefined
                user_id: string
                organization_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                client_id: string
                client_secret: string
                config?: { [x: string]: string } | undefined
                connection_intent?: 'reauthorize' | undefined
                connected_account_id?: string | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: DataIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { slug: string } } & { json: UpdateDataIntegrationDto }
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                organization_id?: string | undefined
                connected_account_id?: string | undefined
                connection_owner?: 'user' | 'organization' | undefined
                supports_multiple_connections?: boolean | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                search?: string | undefined
                domain?: string | undefined
              }
            }
            output: DirectoryList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                search?: string | undefined
                domain?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                search?: string | undefined
                domain?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                user?: string | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: DirectoryGroup[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                user?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                user?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                user?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: DirectoryUser[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { directoryId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
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
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 202
          }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                user?: string | undefined
              }
            }
            output: DirectoryGroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                user?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                user?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                user?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
              }
            }
            output: DirectoryUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                directory?: string | undefined
                group?: string | undefined
                idp_id?: string | undefined
                email?: string | undefined
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
                after?: string | undefined
                limit?: number | undefined
                events: string[]
                range_start?: string | undefined
                range_end?: string | undefined
                organization_id?: string | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                events: string[]
                range_start?: string | undefined
                range_end?: string | undefined
                organization_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                events: string[]
                range_start?: string | undefined
                range_end?: string | undefined
                organization_id?: string | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: FlagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
              owner:
                | { email: string; first_name: string | null; last_name: string | null }
                | ({ [x: string]: unknown } | null)
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
              owner:
                | { email: string; first_name: string | null; last_name: string | null }
                | ({ [x: string]: unknown } | null)
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
            input: { json: CreateOrganizationDomainDto }
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
            input: { json: CreateOrganizationDomainDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                domains?: string[] | undefined
                search?: string | undefined
              }
            }
            output: OrganizationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                domains?: string[] | undefined
                search?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: OrganizationDto }
            output: Organization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: OrganizationDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: OrganizationDto }; output: ErrorBody; outputFormat: 'json'; status: 409 }
        | { input: { json: OrganizationDto }; output: ErrorBody; outputFormat: 'json'; status: 422 }
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
            input: { param: { id: string } } & { json: UpdateOrganizationDto }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: UpdateOrganizationDto }
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
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDto }
            output: AuditLogsRetentionJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateAuditLogsRetentionDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: OrganizationApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationApiKeyDto }
            output: OrganizationApiKeyWithValue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationApiKeyDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateOrganizationApiKeyDto }
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
              query: { ownership?: 'user' | 'organization' | undefined }
            }
            output: DataIntegrationConfigurationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { ownership?: 'user' | 'organization' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { ownership?: 'user' | 'organization' | undefined }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { ownership?: 'user' | 'organization' | undefined }
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
              query: { ownership?: 'user' | 'organization' | undefined }
            } & { json: ConfigureDataIntegrationBody }
            output: DataIntegrationConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' | undefined }
            } & { json: ConfigureDataIntegrationBody }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' | undefined }
            } & { json: ConfigureDataIntegrationBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' | undefined }
            } & { json: ConfigureDataIntegrationBody }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; slug: string } } & {
              query: { ownership?: 'user' | 'organization' | undefined }
            } & { json: ConfigureDataIntegrationBody }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: FlagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
            input: { param: { organizationId: string } } & { json: CreateGroupDto }
            output: Group
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string } } & { json: CreateGroupDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                search?: string | undefined
              }
            }
            output: GroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                search?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                search?: string | undefined
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
            input: { param: { organizationId: string; groupId: string } } & { json: UpdateGroupDto }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & { json: UpdateGroupDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & { json: UpdateGroupDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & { json: UpdateGroupDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & { json: UpdateGroupDto }
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
              json: CreateGroupMembershipDto
            }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: CreateGroupMembershipDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: UserlandUserOrganizationMembershipBaseList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; groupId: string } } & {
              json: PatchGroupMembershipsDto
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: OrganizationAuthorizedConnectApplicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: CreateOrganizationConnectedAccountDto }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: CreateOrganizationConnectedAccountDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: CreateOrganizationConnectedAccountDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: CreateOrganizationConnectedAccountDto }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: CreateOrganizationConnectedAccountDto }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: CreateOrganizationConnectedAccountDto }
            output:
              | OrganizationConnectedAccountImportErrorBody
              | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: CreateOrganizationConnectedAccountDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: OrganizationConnectedAccountDto }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: OrganizationConnectedAccountDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: OrganizationConnectedAccountDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: OrganizationConnectedAccountDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: OrganizationConnectedAccountDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: OrganizationConnectedAccountDto }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; slug: string } } & {
              query: {
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: OrganizationConnectedAccountDto }
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
              query: { supports_multiple_connections?: boolean | undefined }
            }
            output: DataIntegrationsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { supports_multiple_connections?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { supports_multiple_connections?: boolean | undefined }
            }
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
            input: { param: { organization_id: string } } & { json: CreateItContactDto }
            output: ItContact
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string } } & { json: CreateItContactDto }
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
              json: InviteItContactDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { organization_id: string; contact_id: string } } & {
              json: InviteItContactDto
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
        | { input: { json: CreateTeamDto }; output: Team; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CreateTeamDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | { input: { json: CreateTeamDto }; output: ErrorBody; outputFormat: 'json'; status: 422 }
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
            input: { json: GenerateLinkDto }
            output: PortalLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: GenerateLinkDto }; output: ErrorBody; outputFormat: 'json'; status: 400 }
        | {
            input: { json: GenerateLinkDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | { input: { json: GenerateLinkDto }; output: ErrorBody; outputFormat: 'json'; status: 403 }
        | { input: { json: GenerateLinkDto }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | { input: { json: GenerateLinkDto }; output: ErrorBody; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/portal/revoke_link': {
      $post:
        | { input: { json: RevokeLinkDto }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: RevokeLinkDto }; output: ErrorBody; outputFormat: 'json'; status: 404 }
        | { input: { json: RevokeLinkDto }; output: ErrorBody; outputFormat: 'json'; status: 422 }
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
                signals_id?: string | undefined
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
                signals_id?: string | undefined
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
                signals_id?: string | undefined
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
              json: {
                challenge_status?: 'success' | undefined
                attempt_status?: 'success' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: {
                challenge_status?: 'success' | undefined
                attempt_status?: 'success' | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                challenge_status?: 'success' | undefined
                attempt_status?: 'success' | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              json: {
                challenge_status?: 'success' | undefined
                attempt_status?: 'success' | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
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
                provider_scopes?: string[] | undefined
                provider_query_params?: { [x: string]: string } | undefined
                client_id: string
                domain?: string | undefined
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
                  | undefined
                redirect_uri: string
                response_type: 'code'
                state?: string | undefined
                connection?: string | undefined
                organization?: string | undefined
                domain_hint?: string | undefined
                login_hint?: string | undefined
                nonce?: string | undefined
                prompt?: 'login' | undefined
              }
            }
            output: SsoAuthorizeUrlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                provider_scopes?: string[] | undefined
                provider_query_params?: { [x: string]: string } | undefined
                client_id: string
                domain?: string | undefined
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
                  | undefined
                redirect_uri: string
                response_type: 'code'
                state?: string | undefined
                connection?: string | undefined
                organization?: string | undefined
                domain_hint?: string | undefined
                login_hint?: string | undefined
                nonce?: string | undefined
                prompt?: 'login' | undefined
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
                code?: string | undefined
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDto }
            output: SsoTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDto }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDto }
            output: OAuthErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: 'authorization_code' | 'urn:ietf:params:oauth:grant-type:token-exchange'
              }
            } & { json: TokenQueryDto }
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
                    client_secret?: string | undefined
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string | undefined
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string | undefined
                    phone_number?: string | undefined
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
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
                    client_secret?: string | undefined
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string | undefined
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string | undefined
                    phone_number?: string | undefined
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
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
              | {
                  error: 'sso_required'
                  error_description: string
                  connection_ids: string[]
                  email: string
                  pending_authentication_token?: string | undefined
                }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json:
                | {
                    client_id: string
                    client_secret?: string | undefined
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string | undefined
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string | undefined
                    phone_number?: string | undefined
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
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
              | RadarSignUpChallengeErrorBody
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
                    client_secret?: string | undefined
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string | undefined
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string | undefined
                    phone_number?: string | undefined
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
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
                    client_secret?: string | undefined
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string | undefined
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string | undefined
                    phone_number?: string | undefined
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
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
                    client_secret?: string | undefined
                    grant_type: 'authorization_code'
                    code: string
                    code_verifier?: string | undefined
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'password'
                    email: string
                    password: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret?: string | undefined
                    grant_type: 'refresh_token'
                    refresh_token: string
                    organization_id?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:magic-auth:code'
                    code: string
                    email: string
                    invitation_token?: string | undefined
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    radar_auth_attempt_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-verification:code'
                    code: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:mfa-totp'
                    code: string
                    pending_authentication_token: string
                    authentication_challenge_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:email-completion'
                    email_completion_token: string
                    email: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                    signals_id?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:organization-selection'
                    pending_authentication_token: string
                    organization_id: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-email-challenge:code'
                    code: string
                    radar_challenge_id: string
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    client_secret: string
                    grant_type: 'urn:workos:oauth:grant-type:radar-sms-challenge:code'
                    code: string
                    verification_id?: string | undefined
                    phone_number?: string | undefined
                    pending_authentication_token: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
                  }
                | {
                    client_id: string
                    grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
                    device_code: string
                    ip_address?: string | undefined
                    device_id?: string | undefined
                    user_agent?: string | undefined
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
            input: { json: CreateAuthkitOauthResourceDto }
            output: AuthkitOauthResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAuthkitOauthResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateAuthkitOauthResourceDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: AuthkitOauthResource[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                code_challenge_method?: 'S256' | undefined
                code_challenge?: string | undefined
                domain_hint?: string | undefined
                connection_id?: string | undefined
                provider_query_params?: { [x: string]: string } | undefined
                provider_scopes?: string[] | undefined
                invitation_token?: string | undefined
                max_age?: number | undefined
                screen_hint?: 'sign-up' | 'sign-in' | undefined
                login_hint?: string | undefined
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
                  | undefined
                prompt?: string | undefined
                state?: string | undefined
                organization_id?: string | undefined
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
                code_challenge_method?: 'S256' | undefined
                code_challenge?: string | undefined
                domain_hint?: string | undefined
                connection_id?: string | undefined
                provider_query_params?: { [x: string]: string } | undefined
                provider_scopes?: string[] | undefined
                invitation_token?: string | undefined
                max_age?: number | undefined
                screen_hint?: 'sign-up' | 'sign-in' | undefined
                login_hint?: string | undefined
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
                  | undefined
                prompt?: string | undefined
                state?: string | undefined
                organization_id?: string | undefined
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
            input: { json: CreateCorsOriginDto }
            output: CorsOriginResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateCorsOriginDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateCorsOriginDto }
            output: ErrorBodyWithConstraintsPropertyErrors
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: CorsOriginResponse[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                email?: string | undefined
              }
            }
            output: UserlandUserInviteList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                email?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateUserlandUserInviteOptionsDto }
            output: UserlandUserInvite
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserlandUserInviteOptionsDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandUserInviteOptionsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUserlandUserInviteOptionsDto }
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
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDto }
            output: UserlandUserInvite
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ResendUserlandUserInviteOptionsDto }
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
            input: { json: UpdateJwtTemplateDto }
            output: JwtTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateJwtTemplateDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/magic_auth': {
      $post:
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDto }
            output: {
              object: 'magic_auth'
              id: string
              user_id: string
              email: string
              expires_at: string
              created_at: string
              updated_at: string
              code: string
              radar_auth_attempt_id?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDto }
            output:
              | InvitationInvalidOAuthErrorBody
              | AuthenticationMethodNotAllowedOAuthErrorBody
              | SignUpNotAllowedOAuthErrorBody
              | EmailDomainNotDeliverableErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDto }
            output: PolicyDeniedErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateUserlandMagicCodeAndReturnDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                statuses?: ('active' | 'inactive' | 'pending')[] | undefined
                user_id?: string | undefined
              }
            }
            output: UserlandUserOrganizationMembershipList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                statuses?: ('active' | 'inactive' | 'pending')[] | undefined
                user_id?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                statuses?: ('active' | 'inactive' | 'pending')[] | undefined
                user_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
                statuses?: ('active' | 'inactive' | 'pending')[] | undefined
                user_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateUserlandUserOrganizationMembershipDto }
            output: {
              object: 'organization_membership'
              id: string
              user_id: string
              organization_id: string
              status: 'active' | 'inactive' | 'pending'
              directory_managed: boolean
              organization_name?: string | undefined
              custom_attributes?: { [x: string]: { [x: string]: unknown } } | undefined
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
            input: { json: CreateUserlandUserOrganizationMembershipDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandUserOrganizationMembershipDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUserlandUserOrganizationMembershipDto }
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
            input: { param: { id: string } } & { json: UpdateUserlandUserOrganizationMembershipDto }
            output: UserlandUserOrganizationMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserOrganizationMembershipDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserOrganizationMembershipDto }
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
              custom_attributes?: { [x: string]: { [x: string]: unknown } } | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: GroupList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { omId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
            input: { json: CreatePasswordResetTokenDto }
            output: PasswordReset
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreatePasswordResetTokenDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePasswordResetTokenDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePasswordResetTokenDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreatePasswordResetTokenDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/password_reset/confirm': {
      $post:
        | {
            input: { json: CreatePasswordResetDto }
            output: ResetPasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreatePasswordResetDto }
            output: ErrorBodyWithCodeErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreatePasswordResetDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreatePasswordResetDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreatePasswordResetDto }
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
        input: { json: SendRadarSmsChallengeDto }
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
            input: { json: CreateRedirectUriDto }
            output: RedirectUri
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateRedirectUriDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateRedirectUriDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateRedirectUriDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: RedirectUri[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
            input: { query: { session_id: string; return_to?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { session_id: string; return_to?: string | undefined } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { query: { session_id: string; return_to?: string | undefined } }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/sessions/revoke': {
      $post:
        | {
            input: { json: UserlandRevokeSessionDto }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: UserlandRevokeSessionDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization?: string | undefined
                organization_id?: string | undefined
                email?: string | undefined
              }
            }
            output: UserlandUserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization?: string | undefined
                organization_id?: string | undefined
                email?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { json: CreateUserlandUserDto }
            output: {
              object: 'user'
              id: string
              first_name: string | null
              last_name: string | null
              name?: (string | null) | undefined
              profile_picture_url: string | null
              email: string
              email_verified: boolean
              external_id: string | null
              metadata?: { [x: string]: string } | undefined
              last_sign_in_at: string | null
              locale?: (string | null) | undefined
              created_at: string
              updated_at: string
              radar_auth_attempt_id?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateUserlandUserDto }
            output:
              | PasswordStrengthErrorErrorBodyWithErrors
              | UserCreationErrorErrorBodyWithErrors
              | InvalidPasswordHashErrorBody
              | PasswordAndPasswordHashProvidedErrorBody
              | PasswordAndPasswordHashTypeProvidedErrorBody
              | PasswordSaltPositionRequiresPasswordHashErrorBody
              | InvalidMetadataErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateUserlandUserDto }
            output: PolicyDeniedErrorBody
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateUserlandUserDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateUserlandUserDto }
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
    '/user_management/users/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserDto }
            output: UserlandUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserDto }
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
            input: { param: { id: string } } & { json: UpdateUserlandUserDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: UpdateUserlandUserDto }
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
            input: { param: { id: string } } & { json: ConfirmEmailChangeDto }
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
                metadata?: { [x: string]: string } | undefined
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
            input: { param: { id: string } } & { json: ConfirmEmailChangeDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ConfirmEmailChangeDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/users/:id/email_change/send': {
      $post:
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDto }
            output: EmailChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SendEmailChangeDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user_management/users/:id/email_verification/confirm': {
      $post:
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDto }
            output: VerifyEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: VerifyEmailAddressDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user_management/users/:id/email_verification/send': {
      $post:
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDto }
            output: SendVerificationEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: SendVerificationEmailDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
              }
            }
            output: UserApiKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                organization_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDto }
            output: UserApiKeyWithValue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDto }
            output: ErrorBodyWithCodeFieldErrors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { userId: string } } & { json: CreateUserApiKeyDto }
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: FlagList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: AuthorizedConnectApplicationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
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
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & {
              json: CreateConnectedAccountDto
            }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & {
              json: CreateConnectedAccountDto
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & {
              json: CreateConnectedAccountDto
            }
            output: ConnectionCreationNotFoundErrorBody | ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & {
              json: CreateConnectedAccountDto
            }
            output: ConnectionCreationConflictErrorBody | ErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & {
              json: CreateConnectedAccountDto
            }
            output:
              | UserConnectedAccountImportErrorBody
              | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: { organization_id?: string | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & {
              json: CreateConnectedAccountDto
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: ConnectedAccountDto }
            output: ConnectedAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: ConnectedAccountDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: ConnectedAccountDto }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: ConnectedAccountDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: ConnectedAccountDto }
            output: AccountSelectionRequiredErrorBody
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: ConnectedAccountDto }
            output: InvalidRefreshTokenErrorBody | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { user_id: string; slug: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
                connected_account_id?: string | undefined
                connection_intent?: 'reauthorize' | undefined
              }
            } & { json: ConnectedAccountDto }
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
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
              }
            }
            output: DataIntegrationsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                organization_id?: string | undefined
                supports_multiple_connections?: boolean | undefined
              }
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
              json: EnrollUserlandUserAuthenticationFactorDto
            }
            output: UserlandUserAuthenticationFactorEnrollResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { userlandUserId: string } } & {
              json: EnrollUserlandUserAuthenticationFactorDto
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { userlandUserId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
              }
            }
            output: UserlandUserAuthenticationFactorList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userlandUserId: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
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
              additional_fields?: { [x: string]: string } | undefined
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
              additional_fields?: { [x: string]: string } | undefined
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
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                state?: 'pending' | 'approved' | 'denied' | undefined
                email?: string | undefined
              }
            }
            output: {
              object?: 'list' | undefined
              list_metadata?: { before: string | null; after: string | null } | undefined
              data?: WaitlistEntry[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                state?: 'pending' | 'approved' | 'denied' | undefined
                email?: string | undefined
              }
            }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                before?: string | undefined
                after?: string | undefined
                limit?: number | undefined
                order?: PaginationOrder | undefined
                state?: 'pending' | 'approved' | 'denied' | undefined
                email?: string | undefined
              }
            }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { id: string } } & { json: CreateWaitlistEntryDto }
            output: WaitlistEntry
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: CreateWaitlistEntryDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CreateWaitlistEntryDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vault/v1/keys/data-key': {
      $post:
        | {
            input: { json: CreateDataKeyRequest }
            output: CreateDataKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDataKeyRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDataKeyRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vault/v1/keys/decrypt': {
      $post:
        | {
            input: { json: DecryptRequest }
            output: DecryptResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DecryptRequest }; output: Error; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/vault/v1/keys/rekey': {
      $post:
        | {
            input: { json: RekeyRequest }
            output: CreateDataKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: RekeyRequest }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: RekeyRequest }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/vault/v1/kv': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                before?: string | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
                search?: string | undefined
                updatedAfter?: string | undefined
              }
            }
            output: ObjectListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                before?: string | undefined
                after?: string | undefined
                order?: 'asc' | 'desc' | undefined
                search?: string | undefined
                updatedAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: CreateObjectRequest }
            output: ObjectMetadata
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateObjectRequest }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: CreateObjectRequest }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: CreateObjectRequest }; output: Error; outputFormat: 'json'; status: 422 }
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
            input: { param: { id: string } } & { query: { version_check?: string | undefined } }
            output: DeleteObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { version_check?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { version_check?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { query: { version_check?: string | undefined } }
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
            input: { param: { id: string } } & { json: UpdateObjectRequest }
            output: ObjectWithoutValue
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: UpdateObjectRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateObjectRequest }
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
          query: {
            before?: string | undefined
            after?: string | undefined
            limit?: number | undefined
            order?: PaginationOrder | undefined
          }
        }
        output: WebhookEndpointList
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateWebhookEndpointDto }
            output: WebhookEndpointJson
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateWebhookEndpointDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateWebhookEndpointDto }
            output: InvalidUrlErrorBody | InvalidRequestParametersErrorBodyWithErrors
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/webhook_endpoints/:id': {
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDto }
            output: WebhookEndpointJson
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDto }
            output: ErrorBodyWithCode
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebhookEndpointDto }
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
            input: { json: WidgetSessionTokenDto }
            output: WidgetSessionTokenResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WidgetSessionTokenDto }
            output: ErrorBody | ErrorBodyWithErrorMessageList
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WidgetSessionTokenDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WidgetSessionTokenDto }
            output: ErrorBody
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
