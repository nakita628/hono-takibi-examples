type ApiConnectedappsV1ConnectedApp = {
  client_id: string
  client_name: string
  client_description: string
  status: string
  full_access_allowed: boolean
  client_type: string
  redirect_urls: string[]
  access_token_expiry_minutes: number
  access_token_template_content: string
  post_logout_redirect_urls: string[]
  bypass_consent_for_offline_access: boolean
  creation_method: string
  id_token_template_content: string
  client_secret_last_four?: string | undefined
  next_client_secret_last_four?: string | undefined
  access_token_custom_audience?: string | undefined
  logo_url?: string | undefined
  client_id_metadata_url?: string | undefined
}
type ApiConnectedappsV1ConnectedAppsClientsGetResponse = {
  request_id: string
  connected_app: ApiConnectedappsV1ConnectedApp
  status_code: number
}
type ApiConnectedappsV1ConnectedAppsClientsUpdateRequest = {
  client_name?: string | undefined
  client_description?: string | undefined
  redirect_urls?: string[] | undefined
  full_access_allowed?: boolean | undefined
  access_token_expiry_minutes?: number | undefined
  access_token_custom_audience?: string | undefined
  access_token_template_content?: string | undefined
  post_logout_redirect_urls?: string[] | undefined
  logo_url?: string | undefined
  bypass_consent_for_offline_access?: boolean | undefined
  id_token_template_content?: string | undefined
}
type ApiConnectedappsV1ConnectedAppsClientsUpdateResponse = {
  request_id: string
  connected_app: ApiConnectedappsV1ConnectedApp
  status_code: number
}
type ApiConnectedappsV1ConnectedAppsClientsDeleteResponse = {
  request_id: string
  client_id: string
  status_code: number
}
type ApiConnectedappsV1ConnectedAppsClientsSearchRequest = {
  cursor?: string | undefined
  limit?: number | undefined
}
type ApiConnectedappsV1ResultsMetadata = { total: number; next_cursor?: string | undefined }
type ApiConnectedappsV1ConnectedAppsClientsSearchResponse = {
  request_id: string
  connected_apps: ApiConnectedappsV1ConnectedApp[]
  results_metadata: ApiConnectedappsV1ResultsMetadata
  status_code: number
}
type ApiConnectedappsV1ConnectedAppsClientsCreateRequestClientType =
  | 'first_party'
  | 'first_party_public'
  | 'third_party'
  | 'third_party_public'
type ApiConnectedappsV1ConnectedAppsClientsCreateRequest = {
  client_type: ApiConnectedappsV1ConnectedAppsClientsCreateRequestClientType
  client_name?: string | undefined
  client_description?: string | undefined
  redirect_urls?: string[] | undefined
  full_access_allowed?: boolean | undefined
  access_token_expiry_minutes?: number | undefined
  access_token_custom_audience?: string | undefined
  access_token_template_content?: string | undefined
  post_logout_redirect_urls?: string[] | undefined
  logo_url?: string | undefined
  bypass_consent_for_offline_access?: boolean | undefined
  id_token_template_content?: string | undefined
}
type ApiConnectedappsV1ConnectedAppWithClientSecret = {
  client_id: string
  client_name: string
  client_description: string
  status: string
  full_access_allowed: boolean
  client_type: string
  redirect_urls: string[]
  access_token_expiry_minutes: number
  access_token_template_content: string
  post_logout_redirect_urls: string[]
  bypass_consent_for_offline_access: boolean
  id_token_template_content: string
  client_secret_last_four?: string | undefined
  next_client_secret_last_four?: string | undefined
  client_secret?: string | undefined
  access_token_custom_audience?: string | undefined
  logo_url?: string | undefined
  client_id_metadata_url?: string | undefined
}
type ApiConnectedappsV1ConnectedAppsClientsCreateResponse = {
  request_id: string
  connected_app: ApiConnectedappsV1ConnectedAppWithClientSecret
  status_code: number
}
type ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartRequest = { [x: string]: unknown }
type ApiConnectedappsV1ConnectedAppWithNextClientSecret = {
  client_id: string
  client_name: string
  client_description: string
  status: string
  client_secret_last_four: string
  full_access_allowed: boolean
  client_type: string
  redirect_urls: string[]
  next_client_secret: string
  access_token_expiry_minutes: number
  access_token_template_content: string
  post_logout_redirect_urls: string[]
  bypass_consent_for_offline_access: boolean
  id_token_template_content: string
  next_client_secret_last_four?: string | undefined
  access_token_custom_audience?: string | undefined
  logo_url?: string | undefined
  client_id_metadata_url?: string | undefined
}
type ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartResponse = {
  request_id: string
  connected_app: ApiConnectedappsV1ConnectedAppWithNextClientSecret
  status_code: number
}
type ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelRequest = { [x: string]: unknown }
type ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelResponse = {
  request_id: string
  connected_app: ApiConnectedappsV1ConnectedApp
  status_code: number
}
type ApiConnectedappsV1ConnectedAppsClientsSecretsRotateRequest = { [x: string]: unknown }
type ApiConnectedappsV1ConnectedAppsClientsSecretsRotateResponse = {
  request_id: string
  connected_app: ApiConnectedappsV1ConnectedApp
  status_code: number
}
type ApiB2bScimV1ScimConnectionUpdateRequestIdentityProvider =
  | 'generic'
  | 'okta'
  | 'microsoft-entra'
  | 'cyberark'
  | 'jumpcloud'
  | 'onelogin'
  | 'pingfederate'
  | 'rippling'
type ApiB2bScimV1SCIMGroupImplicitRoleAssignments = {
  role_id: string
  group_id: string
  group_name: string
}
type ApiB2bScimV1B2bScimConnectionUpdateRequest = {
  display_name?: string | undefined
  identity_provider?: ApiB2bScimV1ScimConnectionUpdateRequestIdentityProvider | undefined
  scim_group_implicit_role_assignments?: ApiB2bScimV1SCIMGroupImplicitRoleAssignments[] | undefined
}
type ApiB2bScimV1SCIMConnection = {
  organization_id: string
  connection_id: string
  status: string
  display_name: string
  identity_provider: string
  base_url: string
  bearer_token_last_four: string
  scim_group_implicit_role_assignments: ApiB2bScimV1SCIMGroupImplicitRoleAssignments[]
  next_bearer_token_last_four: string
  bearer_token_expires_at?: string | undefined
  next_bearer_token_expires_at?: string | undefined
}
type ApiB2bScimV1B2bScimConnectionUpdateResponse = {
  request_id: string
  status_code: number
  connection?: ApiB2bScimV1SCIMConnection | undefined
}
type ApiB2bScimV1B2bScimConnectionDeleteResponse = {
  request_id: string
  connection_id: string
  status_code: number
}
type ApiB2bScimV1SCIMGroup = {
  group_id: string
  group_name: string
  organization_id: string
  connection_id: string
}
type ApiB2bScimV1B2bScimConnectionGetGroupsResponse = {
  scim_groups: ApiB2bScimV1SCIMGroup[]
  status_code: number
  next_cursor?: string | undefined
}
type ApiB2bScimV1B2bScimConnectionRotateStartRequest = { [x: string]: unknown }
type ApiB2bScimV1SCIMConnectionWithNextToken = {
  organization_id: string
  connection_id: string
  status: string
  display_name: string
  base_url: string
  identity_provider: string
  bearer_token_last_four: string
  next_bearer_token: string
  scim_group_implicit_role_assignments: ApiB2bScimV1SCIMGroupImplicitRoleAssignments[]
  bearer_token_expires_at?: string | undefined
  next_bearer_token_expires_at?: string | undefined
}
type ApiB2bScimV1B2bScimConnectionRotateStartResponse = {
  request_id: string
  status_code: number
  connection?: ApiB2bScimV1SCIMConnectionWithNextToken | undefined
}
type ApiB2bScimV1B2bScimConnectionRotateCompleteRequest = { [x: string]: unknown }
type ApiB2bScimV1B2bScimConnectionRotateCompleteResponse = {
  request_id: string
  status_code: number
  connection?: ApiB2bScimV1SCIMConnection | undefined
}
type ApiB2bScimV1B2bScimConnectionRotateCancelRequest = { [x: string]: unknown }
type ApiB2bScimV1B2bScimConnectionRotateCancelResponse = {
  request_id: string
  status_code: number
  connection?: ApiB2bScimV1SCIMConnection | undefined
}
type ApiB2bScimV1ScimConnectionCreateRequestIdentityProvider =
  | 'generic'
  | 'okta'
  | 'microsoft-entra'
  | 'cyberark'
  | 'jumpcloud'
  | 'onelogin'
  | 'pingfederate'
  | 'rippling'
type ApiB2bScimV1B2bScimConnectionCreateRequest = {
  display_name?: string | undefined
  identity_provider?: ApiB2bScimV1ScimConnectionCreateRequestIdentityProvider | undefined
}
type ApiB2bScimV1SCIMConnectionWithToken = {
  organization_id: string
  connection_id: string
  status: string
  display_name: string
  identity_provider: string
  base_url: string
  bearer_token: string
  scim_group_implicit_role_assignments: ApiB2bScimV1SCIMGroupImplicitRoleAssignments[]
  bearer_token_expires_at?: string | undefined
}
type ApiB2bScimV1B2bScimConnectionCreateResponse = {
  request_id: string
  status_code: number
  connection?: ApiB2bScimV1SCIMConnectionWithToken | undefined
}
type ApiB2bScimV1B2bScimConnectionGetResponse = {
  request_id: string
  status_code: number
  connection?: ApiB2bScimV1SCIMConnection | undefined
}
type ApiOrganizationV1EmailImplicitRoleAssignment = { domain: string; role_id: string }
type ApiOrganizationV1OrganizationsCreateRequestFirstPartyConnectedAppsAllowedType =
  | 'ALL_ALLOWED'
  | 'RESTRICTED'
  | 'NOT_ALLOWED'
type ApiOrganizationV1OrganizationsCreateRequestThirdPartyConnectedAppsAllowedType =
  | 'ALL_ALLOWED'
  | 'RESTRICTED'
  | 'NOT_ALLOWED'
type ApiOrganizationV1CreateRequest = {
  organization_name: string
  organization_slug?: string | undefined
  organization_logo_url?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  organization_external_id?: string | undefined
  sso_jit_provisioning?: string | undefined
  email_allowed_domains?: string[] | undefined
  email_jit_provisioning?: string | undefined
  email_invites?: string | undefined
  auth_methods?: string | undefined
  allowed_auth_methods?: string[] | undefined
  mfa_policy?: string | undefined
  rbac_email_implicit_role_assignments?: ApiOrganizationV1EmailImplicitRoleAssignment[] | undefined
  mfa_methods?: string | undefined
  allowed_mfa_methods?: string[] | undefined
  oauth_tenant_jit_provisioning?: string | undefined
  allowed_oauth_tenants?: { [x: string]: unknown } | undefined
  claimed_email_domains?: string[] | undefined
  first_party_connected_apps_allowed_type?:
    | ApiOrganizationV1OrganizationsCreateRequestFirstPartyConnectedAppsAllowedType
    | undefined
  allowed_first_party_connected_apps?: string[] | undefined
  third_party_connected_apps_allowed_type?:
    | ApiOrganizationV1OrganizationsCreateRequestThirdPartyConnectedAppsAllowedType
    | undefined
  allowed_third_party_connected_apps?: string[] | undefined
}
type ApiOrganizationV1ActiveSSOConnection = {
  connection_id: string
  display_name: string
  identity_provider: string
}
type ApiOrganizationV1CustomRolePermission = { resource_id: string; actions: string[] }
type ApiOrganizationV1CustomRole = {
  role_id: string
  description: string
  permissions: ApiOrganizationV1CustomRolePermission[]
}
type ApiOrganizationV1ActiveSCIMConnection = {
  connection_id: string
  display_name: string
  bearer_token_last_four: string
  bearer_token_expires_at?: string | undefined
}
type ApiOrganizationV1Organization = {
  organization_id: string
  organization_name: string
  organization_logo_url: string
  organization_slug: string
  sso_jit_provisioning: string
  sso_jit_provisioning_allowed_connections: string[]
  sso_active_connections: ApiOrganizationV1ActiveSSOConnection[]
  email_allowed_domains: string[]
  email_jit_provisioning: string
  email_invites: string
  auth_methods: string
  allowed_auth_methods: string[]
  mfa_policy: string
  rbac_email_implicit_role_assignments: ApiOrganizationV1EmailImplicitRoleAssignment[]
  mfa_methods: string
  allowed_mfa_methods: string[]
  oauth_tenant_jit_provisioning: string
  claimed_email_domains: string[]
  first_party_connected_apps_allowed_type: string
  allowed_first_party_connected_apps: string[]
  third_party_connected_apps_allowed_type: string
  allowed_third_party_connected_apps: string[]
  custom_roles: ApiOrganizationV1CustomRole[]
  trusted_metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  organization_external_id?: string | undefined
  sso_default_connection_id?: string | undefined
  scim_active_connection?: ApiOrganizationV1ActiveSCIMConnection | undefined
  allowed_oauth_tenants?: { [x: string]: unknown } | undefined
}
type ApiOrganizationV1CreateResponse = {
  request_id: string
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1GetResponse = {
  request_id: string
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsUpdateRequestFirstPartyConnectedAppsAllowedType =
  | 'ALL_ALLOWED'
  | 'RESTRICTED'
  | 'NOT_ALLOWED'
type ApiOrganizationV1OrganizationsUpdateRequestThirdPartyConnectedAppsAllowedType =
  | 'ALL_ALLOWED'
  | 'RESTRICTED'
  | 'NOT_ALLOWED'
type ApiOrganizationV1UpdateRequest = {
  organization_name?: string | undefined
  organization_slug?: string | undefined
  organization_logo_url?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  organization_external_id?: string | undefined
  sso_default_connection_id?: string | undefined
  sso_jit_provisioning?: string | undefined
  sso_jit_provisioning_allowed_connections?: string[] | undefined
  email_allowed_domains?: string[] | undefined
  email_jit_provisioning?: string | undefined
  email_invites?: string | undefined
  auth_methods?: string | undefined
  allowed_auth_methods?: string[] | undefined
  mfa_policy?: string | undefined
  rbac_email_implicit_role_assignments?: ApiOrganizationV1EmailImplicitRoleAssignment[] | undefined
  mfa_methods?: string | undefined
  allowed_mfa_methods?: string[] | undefined
  oauth_tenant_jit_provisioning?: string | undefined
  allowed_oauth_tenants?: { [x: string]: unknown } | undefined
  claimed_email_domains?: string[] | undefined
  first_party_connected_apps_allowed_type?:
    | ApiOrganizationV1OrganizationsUpdateRequestFirstPartyConnectedAppsAllowedType
    | undefined
  allowed_first_party_connected_apps?: string[] | undefined
  third_party_connected_apps_allowed_type?:
    | ApiOrganizationV1OrganizationsUpdateRequestThirdPartyConnectedAppsAllowedType
    | undefined
  allowed_third_party_connected_apps?: string[] | undefined
}
type ApiOrganizationV1UpdateResponse = {
  request_id: string
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1DeleteResponse = {
  request_id: string
  organization_id: string
  status_code: number
}
type ApiOrganizationV1OrganizationsSearchQueryOperator = 'OR' | 'AND'
type ApiOrganizationV1SearchQuery = {
  operator: ApiOrganizationV1OrganizationsSearchQueryOperator
  operands: { [x: string]: unknown }[]
}
type ApiOrganizationV1SearchRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: ApiOrganizationV1SearchQuery | undefined
}
type ApiOrganizationV1ResultsMetadata = { total: number; next_cursor?: string | undefined }
type ApiOrganizationV1SearchResponse = {
  request_id: string
  organizations: ApiOrganizationV1Organization[]
  results_metadata: ApiOrganizationV1ResultsMetadata
  status_code: number
}
type ApiOrganizationV1MetricsResponse = {
  request_id: string
  member_count: number
  status_code: number
}
type ApiOrganizationV1OrganizationConnectedApp = {
  connected_app_id: string
  name: string
  description: string
  client_type: string
  logo_url?: string | undefined
}
type ApiOrganizationV1ConnectedAppsResponse = {
  request_id: string
  connected_apps: ApiOrganizationV1OrganizationConnectedApp[]
  status_code: number
}
type ApiOrganizationV1OrganizationConnectedAppActiveMember = {
  member_id: string
  granted_scopes: string[]
}
type ApiOrganizationV1GetConnectedAppResponse = {
  connected_app_id: string
  name: string
  description: string
  client_type: string
  active_members: ApiOrganizationV1OrganizationConnectedAppActiveMember[]
  status_code: number
  logo_url?: string | undefined
}
type ApiOrganizationV1DeleteExternalIdResponse = {
  request_id: string
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersUpdateRequest = {
  name?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  is_breakglass?: boolean | undefined
  mfa_phone_number?: string | undefined
  mfa_enrolled?: boolean | undefined
  roles?: string[] | undefined
  preserve_existing_sessions?: boolean | undefined
  default_mfa_method?: string | undefined
  email_address?: string | undefined
  external_id?: string | undefined
  unlink_email?: boolean | undefined
}
type ApiOrganizationV1SSORegistration = {
  connection_id: string
  external_id: string
  registration_id: string
  sso_attributes?: { [x: string]: unknown } | undefined
}
type ApiOrganizationV1OAuthRegistration = {
  provider_type: string
  provider_subject: string
  member_oauth_registration_id: string
  profile_picture_url?: string | undefined
  locale?: string | undefined
}
type ApiOrganizationV1RetiredEmail = { email_id: string; email_address: string }
type ApiOrganizationV1MemberRoleSource = {
  type: string
  details?: { [x: string]: unknown } | undefined
}
type ApiOrganizationV1MemberRole = { role_id: string; sources: ApiOrganizationV1MemberRoleSource[] }
type ApiB2bScimV1Group = { value: string; display: string }
type ApiB2bScimV1Email = { value: string; type: string; primary: boolean }
type ApiB2bScimV1PhoneNumber = { value: string; type: string; primary: boolean }
type ApiB2bScimV1Address = {
  formatted: string
  street_address: string
  locality: string
  region: string
  postal_code: string
  country: string
  type: string
  primary: boolean
}
type ApiB2bScimV1IMs = { value: string; type: string; primary: boolean }
type ApiB2bScimV1Photo = { value: string; type: string; primary: boolean }
type ApiB2bScimV1Entitlement = { value: string; type: string; primary: boolean }
type ApiB2bScimV1Role = { value: string; type: string; primary: boolean }
type ApiB2bScimV1X509Certificate = { value: string; type: string; primary: boolean }
type ApiB2bScimV1Name = {
  formatted: string
  family_name: string
  given_name: string
  middle_name: string
  honorific_prefix: string
  honorific_suffix: string
}
type ApiB2bScimV1Manager = { value: string; ref: string; display_name: string }
type ApiB2bScimV1EnterpriseExtension = {
  employee_number: string
  cost_center: string
  division: string
  department: string
  organization: string
  manager?: ApiB2bScimV1Manager | undefined
}
type ApiB2bScimV1SCIMAttributes = {
  user_name: string
  id: string
  external_id: string
  active: boolean
  groups: ApiB2bScimV1Group[]
  display_name: string
  nick_name: string
  profile_url: string
  user_type: string
  title: string
  preferred_language: string
  locale: string
  timezone: string
  emails: ApiB2bScimV1Email[]
  phone_numbers: ApiB2bScimV1PhoneNumber[]
  addresses: ApiB2bScimV1Address[]
  ims: ApiB2bScimV1IMs[]
  photos: ApiB2bScimV1Photo[]
  entitlements: ApiB2bScimV1Entitlement[]
  roles: ApiB2bScimV1Role[]
  x509certificates: ApiB2bScimV1X509Certificate[]
  name?: ApiB2bScimV1Name | undefined
  enterprise_extension?: ApiB2bScimV1EnterpriseExtension | undefined
}
type ApiOrganizationV1SCIMRegistration = {
  connection_id: string
  registration_id: string
  external_id?: string | undefined
  scim_attributes?: ApiB2bScimV1SCIMAttributes | undefined
}
type ApiOrganizationV1Member = {
  organization_id: string
  member_id: string
  email_address: string
  status: string
  name: string
  sso_registrations: ApiOrganizationV1SSORegistration[]
  is_breakglass: boolean
  member_password_id: string
  oauth_registrations: ApiOrganizationV1OAuthRegistration[]
  email_address_verified: boolean
  mfa_phone_number_verified: boolean
  is_admin: boolean
  totp_registration_id: string
  retired_email_addresses: ApiOrganizationV1RetiredEmail[]
  is_locked: boolean
  mfa_enrolled: boolean
  mfa_phone_number: string
  default_mfa_method: string
  roles: ApiOrganizationV1MemberRole[]
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  scim_registration?: ApiOrganizationV1SCIMRegistration | undefined
  external_id?: string | undefined
  lock_created_at?: string | undefined
  lock_expires_at?: string | undefined
}
type ApiOrganizationV1OrganizationsMembersUpdateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersDeleteResponse = {
  request_id: string
  member_id: string
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersReactivateRequest = { [x: string]: unknown }
type ApiOrganizationV1OrganizationsMembersReactivateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersDeleteMFAPhoneNumberResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersDeleteTOTPResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersSearchRequest = {
  organization_ids: string[]
  cursor?: string | undefined
  limit?: number | undefined
  query?: ApiOrganizationV1SearchQuery | undefined
}
type ApiOrganizationV1OrganizationsMembersSearchResponse = {
  request_id: string
  members: ApiOrganizationV1Member[]
  results_metadata: ApiOrganizationV1ResultsMetadata
  organizations: { [x: string]: ApiOrganizationV1Organization }
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersDeletePasswordResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersGetResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OIDCProviderInfo = {
  provider_subject: string
  id_token: string
  access_token: string
  access_token_expires_in: number
  scopes: string[]
  connection_id: string
  refresh_token?: string | undefined
}
type ApiOrganizationV1OrganizationsMembersOIDCProvidersResponse = {
  request_id: string
  registrations: ApiOrganizationV1OIDCProviderInfo[]
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailRequest = {
  email_id?: string | undefined
  email_address?: string | undefined
}
type ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailResponse = {
  request_id: string
  member_id: string
  organization_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
type ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequestDeliveryMethod =
  | 'EMAIL_MAGIC_LINK'
  | 'EMAIL_OTP'
type ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequest = {
  email_address: string
  login_redirect_url?: string | undefined
  locale?: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequestLocale | undefined
  login_template_id?: string | undefined
  delivery_method?:
    | ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequestDeliveryMethod
    | undefined
}
type ApiOrganizationV1OrganizationsMembersStartEmailUpdateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1MemberConnectedApp = {
  connected_app_id: string
  name: string
  description: string
  client_type: string
  scopes_granted: string
  logo_url?: string | undefined
}
type ApiOrganizationV1OrganizationsMembersGetConnectedAppsResponse = {
  request_id: string
  connected_apps: ApiOrganizationV1MemberConnectedApp[]
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersDeleteExternalIdResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersCreateRequest = {
  email_address: string
  name?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  create_member_as_pending?: boolean | undefined
  is_breakglass?: boolean | undefined
  mfa_phone_number?: string | undefined
  mfa_enrolled?: boolean | undefined
  roles?: string[] | undefined
  external_id?: string | undefined
}
type ApiOrganizationV1OrganizationsMembersCreateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersOauthProvidersGoogleResponse = {
  request_id: string
  provider_type: string
  provider_subject: string
  id_token: string
  scopes: string[]
  status_code: number
  access_token?: string | undefined
  access_token_expires_in?: number | undefined
  refresh_token?: string | undefined
}
type ApiOrganizationV1OrganizationsMembersOauthProvidersMicrosoftResponse = {
  request_id: string
  provider_type: string
  provider_subject: string
  access_token: string
  access_token_expires_in: number
  id_token: string
  scopes: string[]
  status_code: number
  refresh_token?: string | undefined
}
type ApiOrganizationV1SlackProviderInfo = {
  provider_subject: string
  provider_tenant_id: string
  access_token: string
  scopes: string[]
  bot_access_token: string
  bot_scopes: string[]
}
type ApiOrganizationV1OrganizationsMembersOauthProvidersSlackResponse = {
  request_id: string
  provider_type: string
  registrations: ApiOrganizationV1SlackProviderInfo[]
  status_code: number
}
type ApiOrganizationV1HubspotProviderInfo = {
  provider_subject: string
  provider_tenant_id: string
  access_token: string
  access_token_expires_in: number
  scopes: string[]
  refresh_token?: string | undefined
}
type ApiOrganizationV1OrganizationsMembersOauthProvidersHubspotResponse = {
  request_id: string
  provider_type: string
  registrations: ApiOrganizationV1HubspotProviderInfo[]
  status_code: number
}
type ApiOrganizationV1GithubProviderInfo = {
  provider_subject: string
  provider_tenant_ids: string[]
  access_token: string
  scopes: string[]
}
type ApiOrganizationV1OrganizationsMembersOauthProvidersGithubResponse = {
  request_id: string
  provider_type: string
  registrations: ApiOrganizationV1GithubProviderInfo[]
  status_code: number
}
type ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeRequest = { [x: string]: unknown }
type ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeResponse = {
  request_id: string
  status_code: number
}
type ApiB2bIdpV1B2bIdpOauthAuthorizeStartRequest = {
  client_id: string
  redirect_uri: string
  response_type: string
  scopes: string[]
  organization_id?: string | undefined
  member_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  prompt?: string | undefined
}
type ApiConnectedappsV1ConnectedAppPublic = {
  client_id: string
  client_name: string
  client_description: string
  client_type: string
  logo_url?: string | undefined
}
type ApiB2bIdpV1ScopeResult = { scope: string; description: string; is_grantable: boolean }
type ApiB2bIdpV1B2bIdpOauthAuthorizeStartResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  client: ApiConnectedappsV1ConnectedAppPublic
  consent_required: boolean
  scope_results: ApiB2bIdpV1ScopeResult[]
  status_code: number
}
type ApiB2bIdpV1B2bIdpOauthAuthorizeRequest = {
  consent_granted: boolean
  scopes: string[]
  client_id: string
  redirect_uri: string
  response_type: string
  organization_id?: string | undefined
  member_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  prompt?: string | undefined
  state?: string | undefined
  nonce?: string | undefined
  code_challenge?: string | undefined
  resources?: string[] | undefined
}
type ApiB2bIdpV1B2bIdpOauthAuthorizeResponse = {
  request_id: string
  redirect_uri: string
  status_code: number
  authorization_code?: string | undefined
}
type ApiUserV1Name = {
  first_name?: string | undefined
  middle_name?: string | undefined
  last_name?: string | undefined
}
type ApiAttributeV1Attributes = { ip_address?: string | undefined; user_agent?: string | undefined }
type ApiUserV1CreateRequest = {
  email?: string | undefined
  name?: ApiUserV1Name | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  phone_number?: string | undefined
  create_user_as_pending?: boolean | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  external_id?: string | undefined
  roles?: string[] | undefined
}
type ApiUserV1Email = { email_id: string; email: string; verified: boolean }
type ApiUserV1PhoneNumber = { phone_id: string; phone_number: string; verified: boolean }
type ApiUserV1WebAuthnRegistration = {
  webauthn_registration_id: string
  domain: string
  user_agent: string
  verified: boolean
  authenticator_type: string
  name: string
}
type ApiUserV1OAuthProvider = {
  provider_type: string
  provider_subject: string
  profile_picture_url: string
  locale: string
  oauth_user_registration_id: string
}
type ApiUserV1TOTP = { totp_id: string; verified: boolean }
type ApiUserV1CryptoWallet = {
  crypto_wallet_id: string
  crypto_wallet_address: string
  crypto_wallet_type: string
  verified: boolean
}
type ApiUserV1BiometricRegistration = { biometric_registration_id: string; verified: boolean }
type ApiUserV1Password = { password_id: string; requires_reset: boolean }
type ApiUserV1User = {
  user_id: string
  emails: ApiUserV1Email[]
  status: string
  phone_numbers: ApiUserV1PhoneNumber[]
  webauthn_registrations: ApiUserV1WebAuthnRegistration[]
  providers: ApiUserV1OAuthProvider[]
  totps: ApiUserV1TOTP[]
  crypto_wallets: ApiUserV1CryptoWallet[]
  biometric_registrations: ApiUserV1BiometricRegistration[]
  is_locked: boolean
  roles: string[]
  name?: ApiUserV1Name | undefined
  created_at?: string | undefined
  password?: ApiUserV1Password | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  external_id?: string | undefined
  lock_created_at?: string | undefined
  lock_expires_at?: string | undefined
}
type ApiUserV1CreateResponse = {
  request_id: string
  user_id: string
  email_id: string
  status: string
  phone_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1GetResponse = {
  request_id: string
  user_id: string
  emails: ApiUserV1Email[]
  status: string
  phone_numbers: ApiUserV1PhoneNumber[]
  webauthn_registrations: ApiUserV1WebAuthnRegistration[]
  providers: ApiUserV1OAuthProvider[]
  totps: ApiUserV1TOTP[]
  crypto_wallets: ApiUserV1CryptoWallet[]
  biometric_registrations: ApiUserV1BiometricRegistration[]
  is_locked: boolean
  roles: string[]
  status_code: number
  name?: ApiUserV1Name | undefined
  created_at?: string | undefined
  password?: ApiUserV1Password | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  external_id?: string | undefined
  lock_created_at?: string | undefined
  lock_expires_at?: string | undefined
}
type ApiUserV1UpdateRequest = {
  name?: ApiUserV1Name | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  external_id?: string | undefined
  roles?: string[] | undefined
}
type ApiUserV1UpdateResponse = {
  request_id: string
  user_id: string
  emails: ApiUserV1Email[]
  phone_numbers: ApiUserV1PhoneNumber[]
  crypto_wallets: ApiUserV1CryptoWallet[]
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteResponse = { request_id: string; user_id: string; status_code: number }
type ApiUserV1UsersSearchUsersQueryOperator = 'OR' | 'AND'
type ApiUserV1SearchUsersQuery = {
  operator: ApiUserV1UsersSearchUsersQueryOperator
  operands: { [x: string]: unknown }[]
}
type ApiUserV1SearchRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: ApiUserV1SearchUsersQuery | undefined
}
type ApiUserV1ResultsMetadata = { total: number; next_cursor?: string | undefined }
type ApiUserV1SearchResponse = {
  request_id: string
  results: ApiUserV1User[]
  results_metadata: ApiUserV1ResultsMetadata
  status_code: number
}
type ApiUserV1ExchangePrimaryFactorRequest = {
  email_address?: string | undefined
  phone_number?: string | undefined
}
type ApiUserV1ExchangePrimaryFactorResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteEmailResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeletePhoneNumberResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteWebAuthnRegistrationResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteBiometricRegistrationResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteTOTPResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteCryptoWalletResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeletePasswordResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteOAuthRegistrationResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1DeleteExternalIdResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  status_code: number
}
type ApiUserV1UserConnectedApp = {
  connected_app_id: string
  name: string
  description: string
  client_type: string
  scopes_granted: string
  logo_url?: string | undefined
}
type ApiUserV1ConnectedAppsResponse = {
  request_id: string
  connected_apps: ApiUserV1UserConnectedApp[]
  status_code: number
}
type ApiUserV1RevokeRequest = { [x: string]: unknown }
type ApiUserV1RevokeResponse = { request_id: string; status_code: number }
type ApiSessionV1SessionsAuthenticationFactorType =
  | 'magic_link'
  | 'otp'
  | 'oauth'
  | 'webauthn'
  | 'totp'
  | 'crypto'
  | 'password'
  | 'signature_challenge'
  | 'sso'
  | 'imported'
  | 'recovery_codes'
  | 'email_otp'
  | 'impersonated'
  | 'trusted_auth_token'
type ApiSessionV1SessionsAuthenticationFactorDeliveryMethod =
  | 'email'
  | 'sms'
  | 'whatsapp'
  | 'embedded'
  | 'oauth_google'
  | 'oauth_microsoft'
  | 'oauth_apple'
  | 'webauthn_registration'
  | 'authenticator_app'
  | 'oauth_github'
  | 'recovery_code'
  | 'oauth_facebook'
  | 'crypto_wallet'
  | 'oauth_amazon'
  | 'oauth_bitbucket'
  | 'oauth_coinbase'
  | 'oauth_discord'
  | 'oauth_figma'
  | 'oauth_gitlab'
  | 'oauth_instagram'
  | 'oauth_linkedin'
  | 'oauth_shopify'
  | 'oauth_slack'
  | 'oauth_snapchat'
  | 'oauth_spotify'
  | 'oauth_steam'
  | 'oauth_tiktok'
  | 'oauth_twitch'
  | 'oauth_twitter'
  | 'knowledge'
  | 'biometric'
  | 'sso_saml'
  | 'sso_oidc'
  | 'oauth_salesforce'
  | 'oauth_yahoo'
  | 'oauth_hubspot'
  | 'imported_auth0'
  | 'oauth_exchange_slack'
  | 'oauth_exchange_hubspot'
  | 'oauth_exchange_github'
  | 'oauth_exchange_google'
  | 'impersonation'
  | 'oauth_access_token_exchange'
  | 'trusted_token_exchange'
type ApiSessionV1EmailFactor = { email_id: string; email_address: string }
type ApiSessionV1PhoneNumberFactor = { phone_id: string; phone_number: string }
type ApiSessionV1GoogleOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1MicrosoftOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1AppleOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1WebAuthnFactor = {
  webauthn_registration_id: string
  domain: string
  user_agent?: string | undefined
}
type ApiSessionV1AuthenticatorAppFactor = { totp_id: string }
type ApiSessionV1GithubOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1RecoveryCodeFactor = { totp_recovery_code_id: string }
type ApiSessionV1FacebookOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1CryptoWalletFactor = {
  crypto_wallet_id: string
  crypto_wallet_address: string
  crypto_wallet_type: string
}
type ApiSessionV1AmazonOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1BitbucketOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1CoinbaseOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1DiscordOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1FigmaOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1GitLabOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1InstagramOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1LinkedInOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1ShopifyOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1SlackOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1SnapchatOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1SpotifyOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1SteamOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1TikTokOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1TwitchOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1TwitterOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1EmbeddableMagicLinkFactor = { embedded_id: string }
type ApiSessionV1BiometricFactor = { biometric_registration_id: string }
type ApiSessionV1SAMLSSOFactor = { id: string; provider_id: string; external_id: string }
type ApiSessionV1OIDCSSOFactor = { id: string; provider_id: string; external_id: string }
type ApiSessionV1SalesforceOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1YahooOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1HubspotOAuthFactor = {
  id: string
  provider_subject: string
  email_id?: string | undefined
}
type ApiSessionV1SlackOAuthExchangeFactor = { email_id: string }
type ApiSessionV1HubspotOAuthExchangeFactor = { email_id: string }
type ApiSessionV1GithubOAuthExchangeFactor = { email_id: string }
type ApiSessionV1GoogleOAuthExchangeFactor = { email_id: string }
type ApiSessionV1ImpersonatedFactor = {
  impersonator_id: string
  impersonator_email_address: string
}
type ApiSessionV1OAuthAccessTokenExchangeFactor = { client_id: string }
type ApiSessionV1TrustedAuthTokenFactor = { token_id: string }
type ApiSessionV1AuthenticationFactor = {
  type: ApiSessionV1SessionsAuthenticationFactorType
  delivery_method: ApiSessionV1SessionsAuthenticationFactorDeliveryMethod
  last_authenticated_at?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  email_factor?: ApiSessionV1EmailFactor | undefined
  phone_number_factor?: ApiSessionV1PhoneNumberFactor | undefined
  google_oauth_factor?: ApiSessionV1GoogleOAuthFactor | undefined
  microsoft_oauth_factor?: ApiSessionV1MicrosoftOAuthFactor | undefined
  apple_oauth_factor?: ApiSessionV1AppleOAuthFactor | undefined
  webauthn_factor?: ApiSessionV1WebAuthnFactor | undefined
  authenticator_app_factor?: ApiSessionV1AuthenticatorAppFactor | undefined
  github_oauth_factor?: ApiSessionV1GithubOAuthFactor | undefined
  recovery_code_factor?: ApiSessionV1RecoveryCodeFactor | undefined
  facebook_oauth_factor?: ApiSessionV1FacebookOAuthFactor | undefined
  crypto_wallet_factor?: ApiSessionV1CryptoWalletFactor | undefined
  amazon_oauth_factor?: ApiSessionV1AmazonOAuthFactor | undefined
  bitbucket_oauth_factor?: ApiSessionV1BitbucketOAuthFactor | undefined
  coinbase_oauth_factor?: ApiSessionV1CoinbaseOAuthFactor | undefined
  discord_oauth_factor?: ApiSessionV1DiscordOAuthFactor | undefined
  figma_oauth_factor?: ApiSessionV1FigmaOAuthFactor | undefined
  git_lab_oauth_factor?: ApiSessionV1GitLabOAuthFactor | undefined
  instagram_oauth_factor?: ApiSessionV1InstagramOAuthFactor | undefined
  linked_in_oauth_factor?: ApiSessionV1LinkedInOAuthFactor | undefined
  shopify_oauth_factor?: ApiSessionV1ShopifyOAuthFactor | undefined
  slack_oauth_factor?: ApiSessionV1SlackOAuthFactor | undefined
  snapchat_oauth_factor?: ApiSessionV1SnapchatOAuthFactor | undefined
  spotify_oauth_factor?: ApiSessionV1SpotifyOAuthFactor | undefined
  steam_oauth_factor?: ApiSessionV1SteamOAuthFactor | undefined
  tik_tok_oauth_factor?: ApiSessionV1TikTokOAuthFactor | undefined
  twitch_oauth_factor?: ApiSessionV1TwitchOAuthFactor | undefined
  twitter_oauth_factor?: ApiSessionV1TwitterOAuthFactor | undefined
  embeddable_magic_link_factor?: ApiSessionV1EmbeddableMagicLinkFactor | undefined
  biometric_factor?: ApiSessionV1BiometricFactor | undefined
  saml_sso_factor?: ApiSessionV1SAMLSSOFactor | undefined
  oidc_sso_factor?: ApiSessionV1OIDCSSOFactor | undefined
  salesforce_oauth_factor?: ApiSessionV1SalesforceOAuthFactor | undefined
  yahoo_oauth_factor?: ApiSessionV1YahooOAuthFactor | undefined
  hubspot_oauth_factor?: ApiSessionV1HubspotOAuthFactor | undefined
  slack_oauth_exchange_factor?: ApiSessionV1SlackOAuthExchangeFactor | undefined
  hubspot_oauth_exchange_factor?: ApiSessionV1HubspotOAuthExchangeFactor | undefined
  github_oauth_exchange_factor?: ApiSessionV1GithubOAuthExchangeFactor | undefined
  google_oauth_exchange_factor?: ApiSessionV1GoogleOAuthExchangeFactor | undefined
  impersonated_factor?: ApiSessionV1ImpersonatedFactor | undefined
  oauth_access_token_exchange_factor?: ApiSessionV1OAuthAccessTokenExchangeFactor | undefined
  trusted_auth_token_factor?: ApiSessionV1TrustedAuthTokenFactor | undefined
}
type ApiSessionV1Session = {
  session_id: string
  user_id: string
  authentication_factors: ApiSessionV1AuthenticationFactor[]
  roles: string[]
  started_at?: string | undefined
  last_accessed_at?: string | undefined
  expires_at?: string | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  custom_claims?: { [x: string]: unknown } | undefined
}
type ApiSessionV1GetResponse = {
  request_id: string
  sessions: ApiSessionV1Session[]
  status_code: number
}
type ApiSessionV1AuthorizationCheck = { resource_id: string; action: string }
type ApiSessionV1AuthenticateRequest = {
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  authorization_check?: ApiSessionV1AuthorizationCheck | undefined
}
type ApiSessionV1AuthorizationVerdict = { authorized: boolean; granting_roles: string[] }
type ApiSessionV1AuthenticateResponse = {
  request_id: string
  session: ApiSessionV1Session
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  verdict?: ApiSessionV1AuthorizationVerdict | undefined
}
type ApiSessionV1RevokeRequest = {
  session_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
}
type ApiSessionV1RevokeResponse = { request_id: string; status_code: number }
type ApiSessionV1MigrateRequest = {
  session_token: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiDeviceHistoryV1DeviceAttributeDetails = {
  is_new: boolean
  first_seen_at?: string | undefined
  last_seen_at?: string | undefined
}
type ApiDeviceHistoryV1DeviceInfo = {
  visitor_id: string
  visitor_id_details?: ApiDeviceHistoryV1DeviceAttributeDetails | undefined
  ip_address?: string | undefined
  ip_address_details?: ApiDeviceHistoryV1DeviceAttributeDetails | undefined
  ip_geo_city?: string | undefined
  ip_geo_region?: string | undefined
  ip_geo_country?: string | undefined
  ip_geo_country_details?: ApiDeviceHistoryV1DeviceAttributeDetails | undefined
}
type ApiSessionV1MigrateResponse = {
  request_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiSessionV1ExchangeAccessTokenRequest = {
  access_token: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiSessionV1ExchangeAccessTokenResponse = {
  request_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiSessionV1JWK = {
  kty: string
  use: string
  key_ops: string[]
  alg: string
  kid: string
  x5c: string[]
  x5tS256: string
  n: string
  e: string
}
type ApiSessionV1GetJWKSResponse = {
  keys: ApiSessionV1JWK[]
  request_id: string
  status_code: number
}
type ApiSessionV1AttestRequest = {
  profile_id: string
  token: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  telemetry_id?: string | undefined
}
type ApiSessionV1AttestResponse = {
  request_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiB2bSessionV1MemberSession = {
  member_session_id: string
  member_id: string
  started_at: string
  last_accessed_at: string
  expires_at: string
  authentication_factors: ApiSessionV1AuthenticationFactor[]
  organization_id: string
  roles: string[]
  organization_slug: string
  custom_claims?: { [x: string]: unknown } | undefined
}
type ApiB2bSessionV1GetResponse = {
  request_id: string
  member_sessions: ApiB2bSessionV1MemberSession[]
  status_code: number
}
type ApiB2bSessionV1AuthorizationCheck = {
  organization_id: string
  resource_id: string
  action: string
}
type ApiB2bSessionV1AuthenticateRequest = {
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  authorization_check?: ApiB2bSessionV1AuthorizationCheck | undefined
}
type ApiB2bSessionV1AuthorizationVerdict = { authorized: boolean; granting_roles: string[] }
type ApiB2bSessionV1AuthenticateResponse = {
  request_id: string
  member_session: ApiB2bSessionV1MemberSession
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
  verdict?: ApiB2bSessionV1AuthorizationVerdict | undefined
}
type ApiB2bSessionV1RevokeRequest = {
  member_session_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  member_id?: string | undefined
}
type ApiB2bSessionV1RevokeResponse = { request_id: string; status_code: number }
type ApiB2bSessionV1SessionsExchangeRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiB2bSessionV1ExchangeRequest = {
  organization_id: string
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiB2bSessionV1SessionsExchangeRequestLocale | undefined
  telemetry_id?: string | undefined
}
type ApiB2bMfaV1MemberOptions = { mfa_phone_number: string; totp_registration_id: string }
type ApiB2bMfaV1MfaRequired = {
  member_options?: ApiB2bMfaV1MemberOptions | undefined
  secondary_auth_initiated?: string | undefined
}
type ApiB2bSessionV1PrimaryRequired = { allowed_auth_methods: string[] }
type ApiB2bSessionV1ExchangeResponse = {
  request_id: string
  member_id: string
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  member_authenticated: boolean
  intermediate_session_token: string
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bSessionV1ExchangeAccessTokenRequest = {
  access_token: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiB2bSessionV1ExchangeAccessTokenResponse = {
  request_id: string
  member_id: string
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiB2bSessionV1AttestRequest = {
  profile_id: string
  token: string
  organization_id?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  telemetry_id?: string | undefined
}
type ApiB2bSessionV1AttestResponse = {
  request_id: string
  member_id: string
  member_session: ApiB2bSessionV1MemberSession
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiB2bSessionV1MigrateRequest = {
  session_token: string
  organization_id: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
}
type ApiB2bSessionV1MigrateResponse = {
  request_id: string
  member_id: string
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
}
type ApiB2bSessionV1GetJWKSResponse = {
  keys: ApiSessionV1JWK[]
  request_id: string
  status_code: number
}
type ApiB2bImpersonationV1AuthenticateRequest = { impersonation_token: string }
type ApiB2bImpersonationV1AuthenticateResponse = {
  request_id: string
  member_id: string
  organization_id: string
  member: ApiOrganizationV1Member
  session_token: string
  session_jwt: string
  organization: ApiOrganizationV1Organization
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bRbacV1PolicyRolePermission = { resource_id: string; actions: string[] }
type ApiB2bRbacV1PolicyRole = {
  role_id: string
  description: string
  permissions: ApiB2bRbacV1PolicyRolePermission[]
}
type ApiB2bRbacV1PolicyResource = { resource_id: string; description: string; actions: string[] }
type ApiB2bRbacV1PolicyScopePermission = { resource_id: string; actions: string[] }
type ApiB2bRbacV1PolicyScope = {
  scope: string
  description: string
  permissions: ApiB2bRbacV1PolicyScopePermission[]
}
type ApiB2bRbacV1Policy = {
  roles: ApiB2bRbacV1PolicyRole[]
  resources: ApiB2bRbacV1PolicyResource[]
  scopes: ApiB2bRbacV1PolicyScope[]
}
type ApiB2bRbacV1PolicyResponse = {
  request_id: string
  status_code: number
  policy?: ApiB2bRbacV1Policy | undefined
}
type ApiB2bRbacV1OrgPolicy = { roles: ApiB2bRbacV1PolicyRole[] }
type ApiB2bRbacV1B2bRbacOrganizationsGetOrgPolicyResponse = {
  request_id: string
  org_policy: ApiB2bRbacV1OrgPolicy
  status_code: number
}
type ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyRequest = { org_policy: ApiB2bRbacV1OrgPolicy }
type ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyResponse = {
  request_id: string
  org_policy: ApiB2bRbacV1OrgPolicy
  status_code: number
}
type ApiB2bRecoveryCodesV1RecoverRequest = {
  organization_id: string
  member_id: string
  recovery_code: string
  intermediate_session_token?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiB2bRecoveryCodesV1RecoverResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  session_token: string
  session_jwt: string
  recovery_codes_remaining: number
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiB2bRecoveryCodesV1GetResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  recovery_codes: string[]
  status_code: number
}
type ApiB2bRecoveryCodesV1RotateRequest = { organization_id: string; member_id: string }
type ApiB2bRecoveryCodesV1RotateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  recovery_codes: string[]
  status_code: number
}
type ApiB2bTotpV1CreateRequest = {
  organization_id: string
  member_id: string
  expiration_minutes?: number | undefined
  intermediate_session_token?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
}
type ApiB2bTotpV1CreateResponse = {
  request_id: string
  member_id: string
  totp_registration_id: string
  secret: string
  qr_code: string
  recovery_codes: string[]
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiB2bTotpV1AuthenticateRequest = {
  organization_id: string
  member_id: string
  code: string
  intermediate_session_token?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  set_mfa_enrollment?: string | undefined
  set_default_mfa?: boolean | undefined
  telemetry_id?: string | undefined
}
type ApiB2bTotpV1AuthenticateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  session_token: string
  session_jwt: string
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiB2bTotpV1MigrateRequest = {
  organization_id: string
  member_id: string
  secret: string
  recovery_codes: string[]
}
type ApiB2bTotpV1MigrateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  totp_registration_id: string
  recovery_codes: string[]
  status_code: number
}
type ApiConsumerRbacV1PolicyRolePermission = { resource_id: string; actions: string[] }
type ApiConsumerRbacV1PolicyRole = {
  role_id: string
  description: string
  permissions: ApiConsumerRbacV1PolicyRolePermission[]
}
type ApiConsumerRbacV1PolicyResource = {
  resource_id: string
  description: string
  actions: string[]
}
type ApiConsumerRbacV1PolicyScopePermission = { resource_id: string; actions: string[] }
type ApiConsumerRbacV1PolicyScope = {
  scope: string
  description: string
  permissions: ApiConsumerRbacV1PolicyScopePermission[]
}
type ApiConsumerRbacV1Policy = {
  roles: ApiConsumerRbacV1PolicyRole[]
  resources: ApiConsumerRbacV1PolicyResource[]
  scopes: ApiConsumerRbacV1PolicyScope[]
}
type ApiConsumerRbacV1PolicyResponse = {
  request_id: string
  status_code: number
  policy?: ApiConsumerRbacV1Policy | undefined
}
type ApiCryptoWalletV1SIWEParams = {
  domain: string
  uri: string
  resources: string[]
  chain_id?: string | undefined
  statement?: string | undefined
  issued_at?: string | undefined
  not_before?: string | undefined
  message_request_id?: string | undefined
}
type ApiCryptoWalletV1AuthenticateStartRequest = {
  crypto_wallet_type: string
  crypto_wallet_address: string
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  siwe_params?: ApiCryptoWalletV1SIWEParams | undefined
}
type ApiCryptoWalletV1AuthenticateStartResponse = {
  request_id: string
  user_id: string
  challenge: string
  user_created: boolean
  status_code: number
}
type ApiCryptoWalletV1AuthenticateRequest = {
  crypto_wallet_type: string
  crypto_wallet_address: string
  signature: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiCryptoWalletV1SIWEParamsResponse = {
  domain: string
  uri: string
  chain_id: string
  resources: string[]
  status_code: number
  issued_at?: string | undefined
  message_request_id?: string | undefined
}
type ApiCryptoWalletV1AuthenticateResponse = {
  request_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  siwe_params?: ApiCryptoWalletV1SIWEParamsResponse | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiDebugV1WhoamiResponse = {
  request_id: string
  project_id: string
  name: string
  status_code: number
}
type ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequest = {
  intermediate_session_token: string
  organization_id: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequestLocale | undefined
  telemetry_id?: string | undefined
}
type ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeResponse = {
  request_id: string
  member_id: string
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  member_authenticated: boolean
  intermediate_session_token: string
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiDiscoveryV1DiscoveryOrganizationsCreateRequestFirstPartyConnectedAppsAllowedType =
  | 'ALL_ALLOWED'
  | 'RESTRICTED'
  | 'NOT_ALLOWED'
type ApiDiscoveryV1DiscoveryOrganizationsCreateRequestThirdPartyConnectedAppsAllowedType =
  | 'ALL_ALLOWED'
  | 'RESTRICTED'
  | 'NOT_ALLOWED'
type ApiDiscoveryV1DiscoveryOrganizationsCreateRequest = {
  intermediate_session_token: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  organization_name?: string | undefined
  organization_slug?: string | undefined
  organization_external_id?: string | undefined
  organization_logo_url?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  sso_jit_provisioning?: string | undefined
  email_allowed_domains?: string[] | undefined
  email_jit_provisioning?: string | undefined
  email_invites?: string | undefined
  auth_methods?: string | undefined
  allowed_auth_methods?: string[] | undefined
  mfa_policy?: string | undefined
  rbac_email_implicit_role_assignments?: ApiOrganizationV1EmailImplicitRoleAssignment[] | undefined
  mfa_methods?: string | undefined
  allowed_mfa_methods?: string[] | undefined
  oauth_tenant_jit_provisioning?: string | undefined
  allowed_oauth_tenants?: { [x: string]: unknown } | undefined
  first_party_connected_apps_allowed_type?:
    | ApiDiscoveryV1DiscoveryOrganizationsCreateRequestFirstPartyConnectedAppsAllowedType
    | undefined
  allowed_first_party_connected_apps?: string[] | undefined
  third_party_connected_apps_allowed_type?:
    | ApiDiscoveryV1DiscoveryOrganizationsCreateRequestThirdPartyConnectedAppsAllowedType
    | undefined
  allowed_third_party_connected_apps?: string[] | undefined
  telemetry_id?: string | undefined
}
type ApiDiscoveryV1DiscoveryOrganizationsCreateResponse = {
  request_id: string
  member_id: string
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  member_authenticated: boolean
  intermediate_session_token: string
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiDiscoveryV1DiscoveryListRequest = {
  intermediate_session_token?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
}
type ApiDiscoveryV1Membership = {
  type: string
  details?: { [x: string]: unknown } | undefined
  member?: ApiOrganizationV1Member | undefined
}
type ApiDiscoveryV1DiscoveredOrganization = {
  member_authenticated: boolean
  organization?: ApiOrganizationV1Organization | undefined
  membership?: ApiDiscoveryV1Membership | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
}
type ApiDiscoveryV1DiscoveryListResponse = {
  request_id: string
  email_address: string
  discovered_organizations: ApiDiscoveryV1DiscoveredOrganization[]
  status_code: number
  organization_id_hint?: string | undefined
}
type ApiFraudV1Metadata = {
  external_id?: string | undefined
  organization_id?: string | undefined
  user_action?: string | undefined
}
type ApiFraudV1FraudFingerprintLookupRequest = {
  telemetry_id: string
  external_metadata?: ApiFraudV1Metadata | undefined
}
type ApiFraudV1Fingerprints = {
  network_fingerprint: string
  hardware_fingerprint: string
  browser_fingerprint: string
  visitor_fingerprint: string
  visitor_id?: string | undefined
  browser_id?: string | undefined
}
type ApiFraudV1FraudVerdictAction = 'ALLOW' | 'CHALLENGE' | 'BLOCK'
type ApiFraudV1FraudVerdictReasonOverrideAction = 'ALLOW' | 'CHALLENGE' | 'BLOCK'
type ApiFraudV1VerdictReasonOverride = {
  verdict_reason: string
  override_action: ApiFraudV1FraudVerdictReasonOverrideAction
}
type ApiFraudV1RuleType =
  | 'VISITOR_ID'
  | 'BROWSER_ID'
  | 'VISITOR_FINGERPRINT'
  | 'BROWSER_FINGERPRINT'
  | 'HARDWARE_FINGERPRINT'
  | 'NETWORK_FINGERPRINT'
  | 'CIDR_BLOCK'
  | 'ASN'
  | 'COUNTRY_CODE'
type ApiFraudV1Verdict = {
  action: ApiFraudV1FraudVerdictAction
  reasons: string[]
  detected_device_type: string
  is_authentic_device: boolean
  verdict_reason_overrides: ApiFraudV1VerdictReasonOverride[]
  rule_match_type?: ApiFraudV1RuleType | undefined
  rule_match_identifier?: string | undefined
}
type ApiFraudV1ASNProperties = { asn: string; name: string; network: string }
type ApiFraudV1IPGeoProperties = { city: string; region: string; country: string }
type ApiFraudV1NetworkProperties = {
  ip_address: string
  asn: ApiFraudV1ASNProperties
  ip_geolocation: ApiFraudV1IPGeoProperties
  is_proxy: boolean
  is_vpn: boolean
}
type ApiFraudV1BrowserProperties = { user_agent: string }
type ApiFraudV1Properties = {
  network_properties: ApiFraudV1NetworkProperties
  browser_properties: ApiFraudV1BrowserProperties
}
type ApiFraudV1FraudFingerprintLookupResponse = {
  request_id: string
  telemetry_id: string
  fingerprints: ApiFraudV1Fingerprints
  verdict: ApiFraudV1Verdict
  external_metadata: ApiFraudV1Metadata
  created_at: string
  expires_at: string
  status_code: number
  properties?: ApiFraudV1Properties | undefined
  raw_signals?: { [x: string]: unknown } | undefined
}
type ApiFraudV1RuleAction = 'ALLOW' | 'CHALLENGE' | 'BLOCK' | 'NONE'
type ApiFraudV1FraudRulesSetRequest = {
  action: ApiFraudV1RuleAction
  visitor_id?: string | undefined
  browser_id?: string | undefined
  visitor_fingerprint?: string | undefined
  browser_fingerprint?: string | undefined
  hardware_fingerprint?: string | undefined
  network_fingerprint?: string | undefined
  expires_in_minutes?: number | undefined
  description?: string | undefined
  cidr_block?: string | undefined
  country_code?: string | undefined
  asn?: string | undefined
}
type ApiFraudV1FraudRulesSetResponse = {
  request_id: string
  action: ApiFraudV1RuleAction
  status_code: number
  visitor_id?: string | undefined
  browser_id?: string | undefined
  visitor_fingerprint?: string | undefined
  browser_fingerprint?: string | undefined
  hardware_fingerprint?: string | undefined
  network_fingerprint?: string | undefined
  expires_at?: string | undefined
  cidr_block?: string | undefined
  country_code?: string | undefined
  asn?: string | undefined
}
type ApiFraudV1FraudRulesListRequest = { cursor?: string | undefined; limit?: number | undefined }
type ApiFraudV1Rule = {
  rule_type: ApiFraudV1RuleType
  action: ApiFraudV1RuleAction
  created_at: string
  visitor_id?: string | undefined
  browser_id?: string | undefined
  visitor_fingerprint?: string | undefined
  browser_fingerprint?: string | undefined
  hardware_fingerprint?: string | undefined
  network_fingerprint?: string | undefined
  cidr_block?: string | undefined
  country_code?: string | undefined
  asn?: string | undefined
  description?: string | undefined
  expires_at?: string | undefined
  last_updated_at?: string | undefined
}
type ApiFraudV1FraudRulesListResponse = {
  request_id: string
  next_cursor: string
  rules: ApiFraudV1Rule[]
  status_code: number
}
type ApiFraudV1FraudVerdictReasonsOverrideRequestAction = 'ALLOW' | 'CHALLENGE' | 'BLOCK' | 'NONE'
type ApiFraudV1FraudVerdictReasonsOverrideRequest = {
  verdict_reason: string
  override_action: ApiFraudV1FraudVerdictReasonsOverrideRequestAction
  override_description?: string | undefined
}
type ApiFraudV1FraudVerdictReasonActionAction = 'ALLOW' | 'CHALLENGE' | 'BLOCK'
type ApiFraudV1VerdictReasonAction = {
  verdict_reason: string
  default_action: ApiFraudV1FraudVerdictReasonActionAction
  override_action?: ApiFraudV1FraudVerdictReasonActionAction | undefined
  override_created_at?: string | undefined
  override_description?: string | undefined
}
type ApiFraudV1FraudVerdictReasonsOverrideResponse = {
  request_id: string
  verdict_reason_action: ApiFraudV1VerdictReasonAction
  status_code: number
}
type ApiFraudV1FraudVerdictReasonsListRequest = { overrides_only?: boolean | undefined }
type ApiFraudV1FraudVerdictReasonsListResponse = {
  request_id: string
  verdict_reason_actions: ApiFraudV1VerdictReasonAction[]
  status_code: number
}
type ApiFraudV1FraudEmailRiskRequest = { email_address: string }
type ApiFraudV1AddressInformation = {
  has_known_bounces: boolean
  has_valid_syntax: boolean
  is_suspected_role_address: boolean
  normalized_email: string
  tumbling_character_count: number
}
type ApiFraudV1DomainInformation = { has_mx_or_a_record: boolean; is_disposable_domain: boolean }
type ApiFraudV1FraudEmailRiskResponseAction = 'ALLOW' | 'CHALLENGE' | 'BLOCK'
type ApiFraudV1FraudEmailRiskResponse = {
  request_id: string
  address_information: ApiFraudV1AddressInformation
  domain_information: ApiFraudV1DomainInformation
  action: ApiFraudV1FraudEmailRiskResponseAction
  risk_score: number
  status_code: number
}
type ApiIdpV1IdpOauthAuthorizeStartRequest = {
  client_id: string
  redirect_uri: string
  response_type: string
  scopes: string[]
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  prompt?: string | undefined
}
type ApiIdpV1ScopeResult = { scope: string; description: string; is_grantable: boolean }
type ApiIdpV1IdpOauthAuthorizeStartResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  client: ApiConnectedappsV1ConnectedAppPublic
  consent_required: boolean
  scope_results: ApiIdpV1ScopeResult[]
  status_code: number
}
type ApiIdpV1IdpOauthAuthorizeRequest = {
  consent_granted: boolean
  scopes: string[]
  client_id: string
  redirect_uri: string
  response_type: string
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  prompt?: string | undefined
  state?: string | undefined
  nonce?: string | undefined
  code_challenge?: string | undefined
  resources?: string[] | undefined
}
type ApiIdpV1IdpOauthAuthorizeResponse = {
  request_id: string
  redirect_uri: string
  status_code: number
  authorization_code?: string | undefined
}
type ApiImpersonationV1AuthenticateRequest = { impersonation_token: string }
type ApiImpersonationV1AuthenticateResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  session_token: string
  session_jwt: string
  status_code: number
  session?: ApiSessionV1Session | undefined
}
type ApiM2mV1M2MClient = {
  client_id: string
  client_name: string
  client_description: string
  status: string
  scopes: string[]
  client_secret_last_four: string
  trusted_metadata?: { [x: string]: unknown } | undefined
  next_client_secret_last_four?: string | undefined
}
type ApiM2mV1M2mClientsGetResponse = {
  request_id: string
  m2m_client: ApiM2mV1M2MClient
  status_code: number
}
type ApiM2mV1M2mClientsUpdateRequestStatus = 'active' | 'inactive'
type ApiM2mV1M2mClientsUpdateRequest = {
  client_name?: string | undefined
  client_description?: string | undefined
  status?: ApiM2mV1M2mClientsUpdateRequestStatus | undefined
  scopes?: string[] | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
}
type ApiM2mV1M2mClientsUpdateResponse = {
  request_id: string
  m2m_client: ApiM2mV1M2MClient
  status_code: number
}
type ApiM2mV1M2mClientsDeleteResponse = {
  request_id: string
  client_id: string
  status_code: number
}
type ApiM2mV1M2mM2MSearchQueryOperator = 'OR' | 'AND'
type ApiM2mV1M2MSearchQuery = {
  operator: ApiM2mV1M2mM2MSearchQueryOperator
  operands: { [x: string]: unknown }[]
}
type ApiM2mV1M2mClientsSearchRequest = {
  cursor?: string | undefined
  limit?: number | undefined
  query?: ApiM2mV1M2MSearchQuery | undefined
}
type ApiM2mV1ResultsMetadata = { total: number; next_cursor?: string | undefined }
type ApiM2mV1M2mClientsSearchResponse = {
  request_id: string
  m2m_clients: ApiM2mV1M2MClient[]
  results_metadata: ApiM2mV1ResultsMetadata
  status_code: number
}
type ApiM2mV1M2mClientsCreateRequest = {
  scopes: string[]
  client_id?: string | undefined
  client_secret?: string | undefined
  client_name?: string | undefined
  client_description?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
}
type ApiM2mV1M2MClientWithClientSecret = {
  client_id: string
  client_secret: string
  client_name: string
  client_description: string
  status: string
  scopes: string[]
  client_secret_last_four: string
  trusted_metadata?: { [x: string]: unknown } | undefined
  next_client_secret_last_four?: string | undefined
}
type ApiM2mV1M2mClientsCreateResponse = {
  request_id: string
  m2m_client: ApiM2mV1M2MClientWithClientSecret
  status_code: number
}
type ApiM2mV1M2mClientsSecretsRotateStartRequest = { [x: string]: unknown }
type ApiM2mV1M2MClientWithNextClientSecret = {
  client_id: string
  next_client_secret: string
  client_name: string
  client_description: string
  status: string
  scopes: string[]
  client_secret_last_four: string
  trusted_metadata?: { [x: string]: unknown } | undefined
  next_client_secret_last_four?: string | undefined
}
type ApiM2mV1M2mClientsSecretsRotateStartResponse = {
  request_id: string
  m2m_client: ApiM2mV1M2MClientWithNextClientSecret
  status_code: number
}
type ApiM2mV1M2mClientsSecretsRotateCancelRequest = { [x: string]: unknown }
type ApiM2mV1M2mClientsSecretsRotateCancelResponse = {
  request_id: string
  m2m_client: ApiM2mV1M2MClient
  status_code: number
}
type ApiM2mV1M2mClientsSecretsRotateRequest = { [x: string]: unknown }
type ApiM2mV1M2mClientsSecretsRotateResponse = {
  request_id: string
  m2m_client: ApiM2mV1M2MClient
  status_code: number
}
type ApiMagicV1Options = { ip_match_required: boolean; user_agent_match_required: boolean }
type ApiMagicV1AuthenticateRequest = {
  token: string
  attributes?: ApiAttributeV1Attributes | undefined
  options?: ApiMagicV1Options | undefined
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  code_verifier?: string | undefined
  telemetry_id?: string | undefined
}
type ApiMagicV1AuthenticateResponse = {
  request_id: string
  user_id: string
  method_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  reset_sessions: boolean
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiMagicV1CreateRequest = {
  user_id: string
  expiration_minutes?: number | undefined
  attributes?: ApiAttributeV1Attributes | undefined
}
type ApiMagicV1CreateResponse = {
  request_id: string
  user_id: string
  token: string
  status_code: number
}
type ApiMagicV1MagicLinksEmailSendRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiMagicV1MagicLinksEmailSendRequest = {
  email: string
  login_template_id?: string | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  login_magic_link_url?: string | undefined
  signup_magic_link_url?: string | undefined
  login_expiration_minutes?: number | undefined
  signup_expiration_minutes?: number | undefined
  code_challenge?: string | undefined
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  locale?: ApiMagicV1MagicLinksEmailSendRequestLocale | undefined
  signup_template_id?: string | undefined
}
type ApiMagicV1MagicLinksEmailSendResponse = {
  request_id: string
  user_id: string
  email_id: string
  status_code: number
}
type ApiMagicV1MagicLinksEmailLoginOrCreateRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiMagicV1MagicLinksEmailLoginOrCreateRequest = {
  email: string
  login_magic_link_url?: string | undefined
  signup_magic_link_url?: string | undefined
  login_expiration_minutes?: number | undefined
  signup_expiration_minutes?: number | undefined
  login_template_id?: string | undefined
  signup_template_id?: string | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  create_user_as_pending?: boolean | undefined
  code_challenge?: string | undefined
  locale?: ApiMagicV1MagicLinksEmailLoginOrCreateRequestLocale | undefined
}
type ApiMagicV1MagicLinksEmailLoginOrCreateResponse = {
  request_id: string
  user_id: string
  email_id: string
  user_created: boolean
  status_code: number
}
type ApiMagicV1MagicLinksEmailInviteRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiMagicV1MagicLinksEmailInviteRequest = {
  email: string
  invite_template_id?: string | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  name?: ApiUserV1Name | undefined
  invite_magic_link_url?: string | undefined
  invite_expiration_minutes?: number | undefined
  locale?: ApiMagicV1MagicLinksEmailInviteRequestLocale | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
}
type ApiMagicV1MagicLinksEmailInviteResponse = {
  request_id: string
  user_id: string
  email_id: string
  status_code: number
}
type ApiMagicV1MagicLinksEmailRevokeInviteRequest = { email: string }
type ApiMagicV1MagicLinksEmailRevokeInviteResponse = { request_id: string; status_code: number }
type ApiB2bMagicV1MagicLinksAuthenticateRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bMagicV1AuthenticateRequest = {
  magic_links_token: string
  pkce_code_verifier?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiB2bMagicV1MagicLinksAuthenticateRequestLocale | undefined
  intermediate_session_token?: string | undefined
  telemetry_id?: string | undefined
}
type ApiB2bMagicV1AuthenticateResponse = {
  request_id: string
  member_id: string
  method_id: string
  reset_sessions: boolean
  organization_id: string
  member: ApiOrganizationV1Member
  session_token: string
  session_jwt: string
  organization: ApiOrganizationV1Organization
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bMagicV1MagicLinksEmailLoginOrSignupRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupRequest = {
  organization_id: string
  email_address: string
  login_redirect_url?: string | undefined
  signup_redirect_url?: string | undefined
  pkce_code_challenge?: string | undefined
  login_template_id?: string | undefined
  signup_template_id?: string | undefined
  locale?: ApiB2bMagicV1MagicLinksEmailLoginOrSignupRequestLocale | undefined
  login_expiration_minutes?: number | undefined
  signup_expiration_minutes?: number | undefined
}
type ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupResponse = {
  request_id: string
  member_id: string
  member_created: boolean
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiB2bMagicV1MagicLinksEmailInviteRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bMagicV1B2bMagicLinksEmailInviteRequest = {
  organization_id: string
  email_address: string
  invite_redirect_url?: string | undefined
  invited_by_member_id?: string | undefined
  name?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  invite_template_id?: string | undefined
  locale?: ApiB2bMagicV1MagicLinksEmailInviteRequestLocale | undefined
  roles?: string[] | undefined
  invite_expiration_minutes?: number | undefined
}
type ApiB2bMagicV1B2bMagicLinksEmailInviteResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiB2bMagicV1MagicLinksEmailDiscoverySendRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendRequest = {
  email_address: string
  discovery_redirect_url?: string | undefined
  pkce_code_challenge?: string | undefined
  login_template_id?: string | undefined
  locale?: ApiB2bMagicV1MagicLinksEmailDiscoverySendRequestLocale | undefined
  discovery_expiration_minutes?: number | undefined
}
type ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendResponse = {
  request_id: string
  status_code: number
}
type ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateRequest = {
  discovery_magic_links_token: string
  pkce_code_verifier?: string | undefined
}
type ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateResponse = {
  request_id: string
  intermediate_session_token: string
  email_address: string
  discovered_organizations: ApiDiscoveryV1DiscoveredOrganization[]
  status_code: number
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bOauthV1OauthAuthenticateRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiB2bOauthV1AuthenticateRequest = {
  oauth_token: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  pkce_code_verifier?: string | undefined
  locale?: ApiB2bOauthV1OauthAuthenticateRequestLocale | undefined
  intermediate_session_token?: string | undefined
  telemetry_id?: string | undefined
}
type ApiB2bOauthV1ProviderValues = {
  scopes: string[]
  access_token?: string | undefined
  refresh_token?: string | undefined
  expires_at?: string | undefined
  id_token?: string | undefined
}
type ApiB2bOauthV1AuthenticateResponse = {
  request_id: string
  member_id: string
  provider_subject: string
  provider_type: string
  session_token: string
  session_jwt: string
  member: ApiOrganizationV1Member
  organization_id: string
  organization: ApiOrganizationV1Organization
  reset_sessions: boolean
  member_authenticated: boolean
  intermediate_session_token: string
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  provider_values?: ApiB2bOauthV1ProviderValues | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bOauthV1B2bOauthDiscoveryAuthenticateRequest = {
  discovery_oauth_token: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  pkce_code_verifier?: string | undefined
}
type ApiB2bOauthV1B2bOauthDiscoveryAuthenticateResponse = {
  request_id: string
  intermediate_session_token: string
  email_address: string
  discovered_organizations: ApiDiscoveryV1DiscoveredOrganization[]
  provider_type: string
  provider_tenant_id: string
  provider_tenant_ids: string[]
  full_name: string
  status_code: number
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bOtpV1OtpSmsSendRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiB2bOtpV1B2bOtpSmsSendRequest = {
  organization_id: string
  member_id: string
  mfa_phone_number?: string | undefined
  locale?: ApiB2bOtpV1OtpSmsSendRequestLocale | undefined
  intermediate_session_token?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
}
type ApiB2bOtpV1B2bOtpSmsSendResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiB2bOtpV1B2bOtpSmsAuthenticateRequest = {
  organization_id: string
  member_id: string
  code: string
  intermediate_session_token?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  set_mfa_enrollment?: string | undefined
  set_default_mfa?: boolean | undefined
  telemetry_id?: string | undefined
}
type ApiB2bOtpV1B2bOtpSmsAuthenticateResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  session_token: string
  session_jwt: string
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiB2bOtpV1OtpEmailLoginOrSignupRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bOtpV1B2bOtpEmailLoginOrSignupRequest = {
  organization_id: string
  email_address: string
  login_template_id?: string | undefined
  signup_template_id?: string | undefined
  locale?: ApiB2bOtpV1OtpEmailLoginOrSignupRequestLocale | undefined
  login_expiration_minutes?: number | undefined
  signup_expiration_minutes?: number | undefined
}
type ApiB2bOtpV1B2bOtpEmailLoginOrSignupResponse = {
  request_id: string
  member_id: string
  member_created: boolean
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiB2bOtpV1OtpEmailAuthenticateRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bOtpV1B2bOtpEmailAuthenticateRequest = {
  organization_id: string
  email_address: string
  code: string
  session_token?: string | undefined
  session_jwt?: string | undefined
  intermediate_session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiB2bOtpV1OtpEmailAuthenticateRequestLocale | undefined
  telemetry_id?: string | undefined
}
type ApiB2bOtpV1B2bOtpEmailAuthenticateResponse = {
  request_id: string
  member_id: string
  method_id: string
  organization_id: string
  member: ApiOrganizationV1Member
  session_token: string
  session_jwt: string
  organization: ApiOrganizationV1Organization
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bOtpV1OtpEmailDiscoverySendRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bOtpV1B2bOtpEmailDiscoverySendRequest = {
  email_address: string
  login_template_id?: string | undefined
  locale?: ApiB2bOtpV1OtpEmailDiscoverySendRequestLocale | undefined
  discovery_expiration_minutes?: number | undefined
}
type ApiB2bOtpV1B2bOtpEmailDiscoverySendResponse = { request_id: string; status_code: number }
type ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateRequest = { email_address: string; code: string }
type ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateResponse = {
  request_id: string
  intermediate_session_token: string
  email_address: string
  discovered_organizations: ApiDiscoveryV1DiscoveredOrganization[]
  status_code: number
  intermediate_session_token_expires_at?: string | undefined
}
type ApiPasswordV1CreateRequest = {
  email: string
  password: string
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  name?: ApiUserV1Name | undefined
  telemetry_id?: string | undefined
}
type ApiPasswordV1CreateResponse = {
  request_id: string
  user_id: string
  email_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiPasswordV1AuthenticateRequest = {
  email: string
  password: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiPasswordV1AuthenticateResponse = {
  request_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiPasswordV1StrengthCheckRequest = { password: string; email?: string | undefined }
type ApiPasswordV1LUDSRequirements = {
  has_lower_case: boolean
  has_upper_case: boolean
  has_digit: boolean
  has_symbol: boolean
  missing_complexity: number
  missing_characters: number
}
type ApiPasswordV1Feedback = {
  warning: string
  suggestions: string[]
  luds_requirements?: ApiPasswordV1LUDSRequirements | undefined
}
type ApiPasswordV1StrengthCheckResponse = {
  request_id: string
  valid_password: boolean
  score: number
  breached_password: boolean
  strength_policy: string
  breach_detection_on_create: boolean
  status_code: number
  feedback?: ApiPasswordV1Feedback | undefined
}
type ApiPasswordV1PasswordsMigrateRequestHashType =
  | 'bcrypt'
  | 'md_5'
  | 'argon_2i'
  | 'argon_2id'
  | 'sha_1'
  | 'sha_512'
  | 'scrypt'
  | 'phpass'
  | 'pbkdf_2'
type ApiPasswordV1MD5Config = { prepend_salt: string; append_salt: string }
type ApiPasswordV1Argon2Config = {
  salt: string
  iteration_amount: number
  memory: number
  threads: number
  key_length: number
}
type ApiPasswordV1SHA1Config = { prepend_salt: string; append_salt: string }
type ApiPasswordV1SHA512Config = { prepend_salt: string; append_salt: string }
type ApiPasswordV1ScryptConfig = {
  salt: string
  n_parameter: number
  r_parameter: number
  p_parameter: number
  key_length: number
}
type ApiPasswordV1PBKDF2Config = {
  salt: string
  iteration_amount: number
  key_length: number
  algorithm: string
}
type ApiPasswordV1MigrateRequest = {
  email: string
  hash: string
  hash_type: ApiPasswordV1PasswordsMigrateRequestHashType
  md_5_config?: ApiPasswordV1MD5Config | undefined
  argon_2_config?: ApiPasswordV1Argon2Config | undefined
  sha_1_config?: ApiPasswordV1SHA1Config | undefined
  sha_512_config?: ApiPasswordV1SHA512Config | undefined
  scrypt_config?: ApiPasswordV1ScryptConfig | undefined
  pbkdf_2_config?: ApiPasswordV1PBKDF2Config | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  set_email_verified?: boolean | undefined
  name?: ApiUserV1Name | undefined
  phone_number?: string | undefined
  set_phone_number_verified?: boolean | undefined
  external_id?: string | undefined
  roles?: string[] | undefined
}
type ApiPasswordV1MigrateResponse = {
  request_id: string
  user_id: string
  email_id: string
  user_created: boolean
  user: ApiUserV1User
  status_code: number
}
type ApiPasswordV1PasswordsEmailResetStartRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiPasswordV1PasswordsEmailResetStartRequest = {
  email: string
  reset_password_redirect_url?: string | undefined
  reset_password_expiration_minutes?: number | undefined
  code_challenge?: string | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  login_redirect_url?: string | undefined
  locale?: ApiPasswordV1PasswordsEmailResetStartRequestLocale | undefined
  reset_password_template_id?: string | undefined
}
type ApiPasswordV1PasswordsEmailResetStartResponse = {
  request_id: string
  user_id: string
  email_id: string
  status_code: number
}
type ApiPasswordV1PasswordsEmailResetRequest = {
  token: string
  password: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  code_verifier?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  options?: ApiMagicV1Options | undefined
  telemetry_id?: string | undefined
}
type ApiPasswordV1PasswordsEmailResetResponse = {
  request_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiPasswordV1PasswordsExistingPasswordResetRequest = {
  email: string
  existing_password: string
  new_password: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiPasswordV1PasswordsExistingPasswordResetResponse = {
  request_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiPasswordV1PasswordsSessionResetRequest = {
  password: string
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiPasswordV1PasswordsSessionResetResponse = {
  request_id: string
  user_id: string
  user: ApiUserV1User
  session_token: string
  session_jwt: string
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiB2bPasswordV1StrengthCheckRequest = { password: string; email_address?: string | undefined }
type ApiB2bPasswordV1LudsFeedback = {
  has_lower_case: boolean
  has_upper_case: boolean
  has_digit: boolean
  has_symbol: boolean
  missing_complexity: number
  missing_characters: number
}
type ApiB2bPasswordV1ZxcvbnFeedback = { warning: string; suggestions: string[] }
type ApiB2bPasswordV1StrengthCheckResponse = {
  request_id: string
  valid_password: boolean
  score: number
  breached_password: boolean
  strength_policy: string
  breach_detection_on_create: boolean
  status_code: number
  luds_feedback?: ApiB2bPasswordV1LudsFeedback | undefined
  zxcvbn_feedback?: ApiB2bPasswordV1ZxcvbnFeedback | undefined
}
type ApiB2bPasswordV1PasswordsMigrateRequestHashType =
  | 'bcrypt'
  | 'md_5'
  | 'argon_2i'
  | 'argon_2id'
  | 'sha_1'
  | 'sha_512'
  | 'scrypt'
  | 'phpass'
  | 'pbkdf_2'
type ApiB2bPasswordV1MigrateRequest = {
  email_address: string
  hash: string
  hash_type: ApiB2bPasswordV1PasswordsMigrateRequestHashType
  organization_id: string
  md_5_config?: ApiPasswordV1MD5Config | undefined
  argon_2_config?: ApiPasswordV1Argon2Config | undefined
  sha_1_config?: ApiPasswordV1SHA1Config | undefined
  sha_512_config?: ApiPasswordV1SHA512Config | undefined
  scrypt_config?: ApiPasswordV1ScryptConfig | undefined
  pbkdf_2_config?: ApiPasswordV1PBKDF2Config | undefined
  name?: string | undefined
  trusted_metadata?: { [x: string]: unknown } | undefined
  untrusted_metadata?: { [x: string]: unknown } | undefined
  roles?: string[] | undefined
  preserve_existing_sessions?: boolean | undefined
  mfa_phone_number?: string | undefined
  set_phone_number_verified?: boolean | undefined
  external_id?: string | undefined
}
type ApiB2bPasswordV1MigrateResponse = {
  request_id: string
  member_id: string
  member_created: boolean
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  status_code: number
}
type ApiB2bPasswordV1PasswordsAuthenticateRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bPasswordV1AuthenticateRequest = {
  organization_id: string
  email_address: string
  password: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiB2bPasswordV1PasswordsAuthenticateRequestLocale | undefined
  intermediate_session_token?: string | undefined
  telemetry_id?: string | undefined
}
type ApiB2bPasswordV1AuthenticateResponse = {
  request_id: string
  member_id: string
  organization_id: string
  member: ApiOrganizationV1Member
  session_token: string
  session_jwt: string
  organization: ApiOrganizationV1Organization
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bPasswordV1PasswordsEmailResetStartRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bPasswordV1B2bPasswordsEmailResetStartRequest = {
  organization_id: string
  email_address: string
  reset_password_redirect_url?: string | undefined
  reset_password_expiration_minutes?: number | undefined
  code_challenge?: string | undefined
  login_redirect_url?: string | undefined
  locale?: ApiB2bPasswordV1PasswordsEmailResetStartRequestLocale | undefined
  reset_password_template_id?: string | undefined
  verify_email_template_id?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsEmailResetStartResponse = {
  request_id: string
  member_id: string
  member_email_id: string
  member: ApiOrganizationV1Member
  status_code: number
}
type ApiB2bPasswordV1PasswordsEmailResetRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bPasswordV1B2bPasswordsEmailResetRequest = {
  password_reset_token: string
  password: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  code_verifier?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiB2bPasswordV1PasswordsEmailResetRequestLocale | undefined
  intermediate_session_token?: string | undefined
  telemetry_id?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsEmailResetResponse = {
  request_id: string
  member_id: string
  member_email_id: string
  organization_id: string
  member: ApiOrganizationV1Member
  session_token: string
  session_jwt: string
  organization: ApiOrganizationV1Organization
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsEmailRequireResetRequest = {
  email_address: string
  organization_id?: string | undefined
  member_id?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsEmailRequireResetResponse = {
  request_id: string
  status_code: number
  member_id?: string | undefined
  member?: ApiOrganizationV1Member | undefined
  organization?: ApiOrganizationV1Organization | undefined
}
type ApiB2bPasswordV1PasswordsSessionResetRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bPasswordV1B2bPasswordsSessionResetRequest = {
  organization_id: string
  password: string
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiB2bPasswordV1PasswordsSessionResetRequestLocale | undefined
  telemetry_id?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsSessionResetResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  organization: ApiOrganizationV1Organization
  session_token: string
  session_jwt: string
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bPasswordV1PasswordsExistingPasswordResetRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiB2bPasswordV1B2bPasswordsExistingPasswordResetRequest = {
  email_address: string
  existing_password: string
  new_password: string
  organization_id: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiB2bPasswordV1PasswordsExistingPasswordResetRequestLocale | undefined
  telemetry_id?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsExistingPasswordResetResponse = {
  request_id: string
  member_id: string
  member: ApiOrganizationV1Member
  session_token: string
  session_jwt: string
  organization: ApiOrganizationV1Organization
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateRequest = {
  email_address: string
  password: string
}
type ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateResponse = {
  request_id: string
  email_address: string
  intermediate_session_token: string
  discovered_organizations: ApiDiscoveryV1DiscoveredOrganization[]
  status_code: number
  intermediate_session_token_expires_at?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartRequest = {
  email_address: string
  reset_password_redirect_url?: string | undefined
  discovery_redirect_url?: string | undefined
  reset_password_template_id?: string | undefined
  reset_password_expiration_minutes?: number | undefined
  pkce_code_challenge?: string | undefined
  locale?: string | undefined
  verify_email_template_id?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartResponse = {
  request_id: string
  status_code: number
}
type ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetRequest = {
  password_reset_token: string
  password: string
  pkce_code_verifier?: string | undefined
}
type ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetResponse = {
  request_id: string
  intermediate_session_token: string
  email_address: string
  discovered_organizations: ApiDiscoveryV1DiscoveredOrganization[]
  status_code: number
  intermediate_session_token_expires_at?: string | undefined
}
type ApiOauthV1AttachRequest = {
  provider: string
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
}
type ApiOauthV1AttachResponse = {
  request_id: string
  oauth_attach_token: string
  status_code: number
}
type ApiOauthV1AuthenticateRequest = {
  token: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  code_verifier?: string | undefined
  telemetry_id?: string | undefined
}
type ApiOauthV1ProviderValues = {
  access_token: string
  refresh_token: string
  id_token: string
  scopes: string[]
  expires_at?: string | undefined
}
type ApiOauthV1AuthenticateResponse = {
  request_id: string
  user_id: string
  provider_subject: string
  provider_type: string
  session_token: string
  session_jwt: string
  provider_values: ApiOauthV1ProviderValues
  user: ApiUserV1User
  reset_sessions: boolean
  oauth_user_registration_id: string
  status_code: number
  user_session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiOtpV1AuthenticateRequest = {
  method_id: string
  code: string
  attributes?: ApiAttributeV1Attributes | undefined
  options?: ApiMagicV1Options | undefined
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiOtpV1AuthenticateResponse = {
  request_id: string
  user_id: string
  method_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  reset_sessions: boolean
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiOtpV1OtpSmsSendRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiOtpV1OtpSmsSendRequest = {
  phone_number: string
  expiration_minutes?: number | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  locale?: ApiOtpV1OtpSmsSendRequestLocale | undefined
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
}
type ApiOtpV1OtpSmsSendResponse = {
  request_id: string
  user_id: string
  phone_id: string
  status_code: number
}
type ApiOtpV1OtpSmsLoginOrCreateRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiOtpV1OtpSmsLoginOrCreateRequest = {
  phone_number: string
  expiration_minutes?: number | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  create_user_as_pending?: boolean | undefined
  locale?: ApiOtpV1OtpSmsLoginOrCreateRequestLocale | undefined
}
type ApiOtpV1OtpSmsLoginOrCreateResponse = {
  request_id: string
  user_id: string
  phone_id: string
  user_created: boolean
  status_code: number
}
type ApiOtpV1OtpWhatsappSendRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiOtpV1OtpWhatsappSendRequest = {
  phone_number: string
  expiration_minutes?: number | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  locale?: ApiOtpV1OtpWhatsappSendRequestLocale | undefined
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
}
type ApiOtpV1OtpWhatsappSendResponse = {
  request_id: string
  user_id: string
  phone_id: string
  status_code: number
}
type ApiOtpV1OtpWhatsappLoginOrCreateRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiOtpV1OtpWhatsappLoginOrCreateRequest = {
  phone_number: string
  expiration_minutes?: number | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  create_user_as_pending?: boolean | undefined
  locale?: ApiOtpV1OtpWhatsappLoginOrCreateRequestLocale | undefined
}
type ApiOtpV1OtpWhatsappLoginOrCreateResponse = {
  request_id: string
  user_id: string
  phone_id: string
  user_created: boolean
  status_code: number
}
type ApiOtpV1OtpEmailSendRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiOtpV1OtpEmailSendRequest = {
  email: string
  expiration_minutes?: number | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  locale?: ApiOtpV1OtpEmailSendRequestLocale | undefined
  user_id?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  login_template_id?: string | undefined
  signup_template_id?: string | undefined
}
type ApiOtpV1OtpEmailSendResponse = {
  request_id: string
  user_id: string
  email_id: string
  status_code: number
}
type ApiOtpV1OtpEmailLoginOrCreateRequestLocale = 'en' | 'es' | 'pt-br' | 'fr'
type ApiOtpV1OtpEmailLoginOrCreateRequest = {
  email: string
  expiration_minutes?: number | undefined
  attributes?: ApiAttributeV1Attributes | undefined
  create_user_as_pending?: boolean | undefined
  locale?: ApiOtpV1OtpEmailLoginOrCreateRequestLocale | undefined
  login_template_id?: string | undefined
  signup_template_id?: string | undefined
}
type ApiOtpV1OtpEmailLoginOrCreateResponse = {
  request_id: string
  user_id: string
  email_id: string
  user_created: boolean
  status_code: number
}
type ApiProjectV1ProjectProjectMetricMetricType =
  | 'UNKNOWN'
  | 'USER_COUNT'
  | 'ORGANIZATION_COUNT'
  | 'MEMBER_COUNT'
  | 'M2M_CLIENT_COUNT'
type ApiProjectV1ProjectMetric = {
  metric_type: ApiProjectV1ProjectProjectMetricMetricType
  count: number
}
type ApiProjectV1MetricsResponse = {
  request_id: string
  project_id: string
  metrics: ApiProjectV1ProjectMetric[]
  status_code: number
}
type ApiSsoV1X509Certificate = {
  certificate_id: string
  certificate: string
  issuer: string
  created_at?: string | undefined
  expires_at?: string | undefined
  updated_at?: string | undefined
}
type ApiSsoV1EncryptionPrivateKey = {
  private_key_id: string
  private_key: string
  created_at?: string | undefined
}
type ApiSsoV1SAMLConnectionImplicitRoleAssignment = { role_id: string }
type ApiSsoV1SAMLGroupImplicitRoleAssignment = { role_id: string; group: string }
type ApiSsoV1SAMLConnection = {
  organization_id: string
  connection_id: string
  status: string
  idp_entity_id: string
  display_name: string
  idp_sso_url: string
  acs_url: string
  audience_uri: string
  signing_certificates: ApiSsoV1X509Certificate[]
  verification_certificates: ApiSsoV1X509Certificate[]
  encryption_private_keys: ApiSsoV1EncryptionPrivateKey[]
  saml_connection_implicit_role_assignments: ApiSsoV1SAMLConnectionImplicitRoleAssignment[]
  saml_group_implicit_role_assignments: ApiSsoV1SAMLGroupImplicitRoleAssignment[]
  alternative_audience_uri: string
  identity_provider: string
  nameid_format: string
  alternative_acs_url: string
  idp_initiated_auth_disabled: boolean
  allow_gateway_callback: boolean
  attribute_mapping?: { [x: string]: unknown } | undefined
}
type ApiSsoV1OIDCConnection = {
  organization_id: string
  connection_id: string
  status: string
  display_name: string
  redirect_url: string
  client_id: string
  client_secret: string
  issuer: string
  authorization_url: string
  token_url: string
  userinfo_url: string
  jwks_url: string
  identity_provider: string
  custom_scopes: string
  attribute_mapping?: { [x: string]: unknown } | undefined
}
type ApiSsoV1ConnectionImplicitRoleAssignment = { role_id: string }
type ApiSsoV1GroupImplicitRoleAssignment = { role_id: string; group: string }
type ApiSsoV1Connection = {
  organization_id: string
  connection_id: string
  external_organization_id: string
  external_connection_id: string
  display_name: string
  status: string
  external_connection_implicit_role_assignments: ApiSsoV1ConnectionImplicitRoleAssignment[]
  external_group_implicit_role_assignments: ApiSsoV1GroupImplicitRoleAssignment[]
}
type ApiSsoV1GetConnectionsResponse = {
  request_id: string
  saml_connections: ApiSsoV1SAMLConnection[]
  oidc_connections: ApiSsoV1OIDCConnection[]
  external_connections: ApiSsoV1Connection[]
  status_code: number
}
type ApiSsoV1DeleteConnectionResponse = {
  request_id: string
  connection_id: string
  status_code: number
}
type ApiSsoV1SsoAuthenticateRequestLocale =
  | 'en'
  | 'es'
  | 'pt-br'
  | 'fr'
  | 'it'
  | 'de-DE'
  | 'zh-Hans'
  | 'ca-ES'
  | 'ja'
  | 'ru'
  | 'nl'
  | 'pl'
  | 'tr'
  | 'fa'
  | 'vi'
  | 'cs'
type ApiSsoV1AuthenticateRequest = {
  sso_token: string
  pkce_code_verifier?: string | undefined
  session_token?: string | undefined
  session_jwt?: string | undefined
  session_duration_minutes?: number | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  locale?: ApiSsoV1SsoAuthenticateRequestLocale | undefined
  intermediate_session_token?: string | undefined
  telemetry_id?: string | undefined
}
type ApiSsoV1AuthenticateResponse = {
  request_id: string
  member_id: string
  organization_id: string
  member: ApiOrganizationV1Member
  session_token: string
  session_jwt: string
  reset_session: boolean
  organization: ApiOrganizationV1Organization
  intermediate_session_token: string
  member_authenticated: boolean
  status_code: number
  member_session?: ApiB2bSessionV1MemberSession | undefined
  mfa_required?: ApiB2bMfaV1MfaRequired | undefined
  primary_required?: ApiB2bSessionV1PrimaryRequired | undefined
  member_device?: ApiDeviceHistoryV1DeviceInfo | undefined
  intermediate_session_token_expires_at?: string | undefined
}
type ApiSsoV1SsoOidcCreateConnectionRequestIdentityProvider =
  | 'classlink'
  | 'cyberark'
  | 'duo'
  | 'generic'
  | 'google-workspace'
  | 'jumpcloud'
  | 'keycloak'
  | 'miniorange'
  | 'microsoft-entra'
  | 'okta'
  | 'onelogin'
  | 'pingfederate'
  | 'rippling'
  | 'salesforce'
  | 'shibboleth'
type ApiSsoV1SsoOidcCreateConnectionRequest = {
  display_name?: string | undefined
  identity_provider?: ApiSsoV1SsoOidcCreateConnectionRequestIdentityProvider | undefined
}
type ApiSsoV1SsoOidcCreateConnectionResponse = {
  request_id: string
  status_code: number
  connection?: ApiSsoV1OIDCConnection | undefined
}
type ApiSsoV1SsoOidcUpdateConnectionRequestIdentityProvider =
  | 'classlink'
  | 'cyberark'
  | 'duo'
  | 'generic'
  | 'google-workspace'
  | 'jumpcloud'
  | 'keycloak'
  | 'miniorange'
  | 'microsoft-entra'
  | 'okta'
  | 'onelogin'
  | 'pingfederate'
  | 'rippling'
  | 'salesforce'
  | 'shibboleth'
type ApiSsoV1SsoOidcUpdateConnectionRequest = {
  display_name?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  issuer?: string | undefined
  authorization_url?: string | undefined
  token_url?: string | undefined
  userinfo_url?: string | undefined
  jwks_url?: string | undefined
  identity_provider?: ApiSsoV1SsoOidcUpdateConnectionRequestIdentityProvider | undefined
  custom_scopes?: string | undefined
  attribute_mapping?: { [x: string]: unknown } | undefined
}
type ApiSsoV1SsoOidcUpdateConnectionResponse = {
  request_id: string
  status_code: number
  connection?: ApiSsoV1OIDCConnection | undefined
  warning?: string | undefined
}
type ApiSsoV1SsoSamlCreateConnectionRequestIdentityProvider =
  | 'classlink'
  | 'cyberark'
  | 'duo'
  | 'generic'
  | 'google-workspace'
  | 'jumpcloud'
  | 'keycloak'
  | 'miniorange'
  | 'microsoft-entra'
  | 'okta'
  | 'onelogin'
  | 'pingfederate'
  | 'rippling'
  | 'salesforce'
  | 'shibboleth'
type ApiSsoV1SsoSamlCreateConnectionRequest = {
  display_name?: string | undefined
  identity_provider?: ApiSsoV1SsoSamlCreateConnectionRequestIdentityProvider | undefined
}
type ApiSsoV1SsoSamlCreateConnectionResponse = {
  request_id: string
  status_code: number
  connection?: ApiSsoV1SAMLConnection | undefined
}
type ApiSsoV1SsoSamlUpdateConnectionRequestIdentityProvider =
  | 'classlink'
  | 'cyberark'
  | 'duo'
  | 'generic'
  | 'google-workspace'
  | 'jumpcloud'
  | 'keycloak'
  | 'miniorange'
  | 'microsoft-entra'
  | 'okta'
  | 'onelogin'
  | 'pingfederate'
  | 'rippling'
  | 'salesforce'
  | 'shibboleth'
type ApiSsoV1SsoSamlUpdateConnectionRequest = {
  idp_entity_id?: string | undefined
  display_name?: string | undefined
  attribute_mapping?: { [x: string]: unknown } | undefined
  x509_certificate?: string | undefined
  idp_sso_url?: string | undefined
  saml_connection_implicit_role_assignments?:
    | ApiSsoV1SAMLConnectionImplicitRoleAssignment[]
    | undefined
  saml_group_implicit_role_assignments?: ApiSsoV1SAMLGroupImplicitRoleAssignment[] | undefined
  alternative_audience_uri?: string | undefined
  identity_provider?: ApiSsoV1SsoSamlUpdateConnectionRequestIdentityProvider | undefined
  signing_private_key?: string | undefined
  nameid_format?: string | undefined
  alternative_acs_url?: string | undefined
  idp_initiated_auth_disabled?: boolean | undefined
  saml_encryption_private_key?: string | undefined
  allow_gateway_callback?: boolean | undefined
}
type ApiSsoV1SsoSamlUpdateConnectionResponse = {
  request_id: string
  status_code: number
  connection?: ApiSsoV1SAMLConnection | undefined
}
type ApiSsoV1SsoSamlUpdateByURLRequest = { metadata_url: string }
type ApiSsoV1SsoSamlUpdateByURLResponse = {
  request_id: string
  status_code: number
  connection?: ApiSsoV1SAMLConnection | undefined
}
type ApiSsoV1SsoSamlDeleteVerificationCertificateResponse = {
  request_id: string
  certificate_id: string
  status_code: number
}
type ApiSsoV1SsoSamlDeleteEncryptionPrivateKeyResponse = {
  request_id: string
  private_key_id: string
  status_code: number
}
type ApiSsoV1SsoExternalCreateConnectionRequest = {
  external_organization_id: string
  external_connection_id: string
  display_name?: string | undefined
  connection_implicit_role_assignments?: ApiSsoV1SAMLConnectionImplicitRoleAssignment[] | undefined
  group_implicit_role_assignments?: ApiSsoV1SAMLGroupImplicitRoleAssignment[] | undefined
}
type ApiSsoV1SsoExternalCreateConnectionResponse = {
  request_id: string
  status_code: number
  connection?: ApiSsoV1Connection | undefined
}
type ApiSsoV1SsoExternalUpdateConnectionRequest = {
  display_name?: string | undefined
  external_connection_implicit_role_assignments?:
    | ApiSsoV1ConnectionImplicitRoleAssignment[]
    | undefined
  external_group_implicit_role_assignments?: ApiSsoV1GroupImplicitRoleAssignment[] | undefined
}
type ApiSsoV1SsoExternalUpdateConnectionResponse = {
  request_id: string
  status_code: number
  connection?: ApiSsoV1Connection | undefined
}
type ApiTotpV1CreateRequest = { user_id: string; expiration_minutes?: number | undefined }
type ApiTotpV1CreateResponse = {
  request_id: string
  totp_id: string
  secret: string
  qr_code: string
  recovery_codes: string[]
  user: ApiUserV1User
  user_id: string
  status_code: number
}
type ApiTotpV1AuthenticateRequest = {
  user_id: string
  totp_code: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiTotpV1AuthenticateResponse = {
  request_id: string
  user_id: string
  session_token: string
  totp_id: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiTotpV1RecoveryCodesRequest = { user_id: string }
type ApiTotpV1TOTP = { totp_id: string; verified: boolean; recovery_codes: string[] }
type ApiTotpV1RecoveryCodesResponse = {
  request_id: string
  user_id: string
  totps: ApiTotpV1TOTP[]
  status_code: number
}
type ApiTotpV1RecoverRequest = {
  user_id: string
  recovery_code: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiTotpV1RecoverResponse = {
  request_id: string
  totp_id: string
  user_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiWebauthnV1RegisterStartRequest = {
  user_id: string
  domain: string
  user_agent?: string | undefined
  authenticator_type?: string | undefined
  return_passkey_credential_options?: boolean | undefined
  override_id?: string | undefined
  override_name?: string | undefined
  override_display_name?: string | undefined
  use_base64_url_encoding?: boolean | undefined
}
type ApiWebauthnV1RegisterStartResponse = {
  request_id: string
  user_id: string
  public_key_credential_creation_options: string
  status_code: number
}
type ApiWebauthnV1RegisterRequest = {
  user_id: string
  public_key_credential: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiWebauthnV1RegisterResponse = {
  request_id: string
  user_id: string
  webauthn_registration_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiWebauthnV1AuthenticateStartRequest = {
  domain: string
  user_id?: string | undefined
  return_passkey_credential_options?: boolean | undefined
  use_base64_url_encoding?: boolean | undefined
}
type ApiWebauthnV1AuthenticateStartResponse = {
  request_id: string
  user_id: string
  public_key_credential_request_options: string
  status_code: number
}
type ApiWebauthnV1AuthenticateRequest = {
  public_key_credential: string
  session_token?: string | undefined
  session_duration_minutes?: number | undefined
  session_jwt?: string | undefined
  session_custom_claims?: { [x: string]: unknown } | undefined
  telemetry_id?: string | undefined
}
type ApiWebauthnV1AuthenticateResponse = {
  request_id: string
  user_id: string
  webauthn_registration_id: string
  session_token: string
  session_jwt: string
  user: ApiUserV1User
  status_code: number
  session?: ApiSessionV1Session | undefined
  user_device?: ApiDeviceHistoryV1DeviceInfo | undefined
}
type ApiWebauthnV1UpdateRequest = { name: string }
type ApiWebauthnV1UpdateResponse = {
  request_id: string
  status_code: number
  webauthn_registration?: ApiUserV1WebAuthnRegistration | undefined
}
type ApiWebauthnV1WebAuthnCredential = {
  credential_id: string
  webauthn_registration_id: string
  type: string
  public_key: string
}
type ApiWebauthnV1ListCredentialsResponse = {
  credentials: ApiWebauthnV1WebAuthnCredential[]
  request_id: string
  status_code: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/connected_apps/clients/:client_id': {
      $get:
        | {
            input: { param: { client_id: string } }
            output: ApiConnectedappsV1ConnectedAppsClientsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsUpdateRequest
            }
            output: ApiConnectedappsV1ConnectedAppsClientsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { client_id: string } }
            output: ApiConnectedappsV1ConnectedAppsClientsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/connected_apps/clients/search': {
      $post:
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsSearchRequest }
            output: ApiConnectedappsV1ConnectedAppsClientsSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/connected_apps/clients': {
      $post:
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsCreateRequest }
            output: ApiConnectedappsV1ConnectedAppsClientsCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiConnectedappsV1ConnectedAppsClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/connected_apps/clients/:client_id/secrets/rotate/start': {
      $post:
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartRequest
            }
            output: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/connected_apps/clients/:client_id/secrets/rotate/cancel': {
      $post:
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelRequest
            }
            output: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/connected_apps/clients/:client_id/secrets/rotate': {
      $post:
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateRequest
            }
            output: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiConnectedappsV1ConnectedAppsClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/scim/:organization_id/connection/:connection_id': {
      $put:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionUpdateRequest }
            output: ApiB2bScimV1B2bScimConnectionUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionUpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiB2bScimV1B2bScimConnectionDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiB2bScimV1B2bScimConnectionGetGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/start': {
      $post:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateStartRequest }
            output: ApiB2bScimV1B2bScimConnectionRotateStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/complete': {
      $post:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCompleteRequest }
            output: ApiB2bScimV1B2bScimConnectionRotateCompleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCompleteRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCompleteRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCompleteRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCompleteRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/scim/:organization_id/connection/:connection_id/rotate/cancel': {
      $post:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCancelRequest }
            output: ApiB2bScimV1B2bScimConnectionRotateCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCancelRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCancelRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCancelRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionRotateCancelRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/scim/:organization_id/connection': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionCreateRequest }
            output: ApiB2bScimV1B2bScimConnectionCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bScimV1B2bScimConnectionCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiB2bScimV1B2bScimConnectionGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations': {
      $post:
        | {
            input: { json: ApiOrganizationV1CreateRequest }
            output: ApiOrganizationV1CreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOrganizationV1CreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOrganizationV1CreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOrganizationV1CreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOrganizationV1CreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: ApiOrganizationV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1UpdateRequest }
            output: ApiOrganizationV1UpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1DeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/search': {
      $post:
        | {
            input: { json: ApiOrganizationV1SearchRequest }
            output: ApiOrganizationV1SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOrganizationV1SearchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOrganizationV1SearchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOrganizationV1SearchRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOrganizationV1SearchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/metrics': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: ApiOrganizationV1MetricsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/connected_apps': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1ConnectedAppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/connected_apps/:connected_app_id': {
      $get:
        | {
            input: { param: { organization_id: string; connected_app_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1GetConnectedAppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connected_app_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connected_app_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connected_app_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connected_app_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/external_id': {
      $delete:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1DeleteExternalIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id': {
      $put:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUpdateRequest }
            output: ApiOrganizationV1OrganizationsMembersUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1OrganizationsMembersDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/reactivate': {
      $put:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersReactivateRequest }
            output: ApiOrganizationV1OrganizationsMembersReactivateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersReactivateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersReactivateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersReactivateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersReactivateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/mfa_phone_numbers/:member_id': {
      $delete:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1OrganizationsMembersDeleteMFAPhoneNumberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/totp': {
      $delete:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1OrganizationsMembersDeleteTOTPResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/members/search': {
      $post:
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersSearchRequest }
            output: ApiOrganizationV1OrganizationsMembersSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersSearchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersSearchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersSearchRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersSearchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/passwords/:member_password_id': {
      $delete:
        | {
            input: { param: { organization_id: string; member_password_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1OrganizationsMembersDeletePasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_password_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_password_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_password_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_password_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/members/dangerously_get/:member_id': {
      $get:
        | {
            input: { param: { member_id: string } } & {
              query: { include_deleted?: boolean | undefined }
            }
            output: ApiOrganizationV1OrganizationsMembersGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { member_id: string } } & {
              query: { include_deleted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { member_id: string } } & {
              query: { include_deleted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { member_id: string } } & {
              query: { include_deleted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { member_id: string } } & {
              query: { include_deleted?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/oidc_providers': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: ApiOrganizationV1OrganizationsMembersOIDCProvidersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/unlink_retired_email': {
      $post:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailRequest }
            output: ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersUnlinkRetiredEmailRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/start_email_update': {
      $post:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequest }
            output: ApiOrganizationV1OrganizationsMembersStartEmailUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersStartEmailUpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/connected_apps': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1OrganizationsMembersGetConnectedAppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/external_id': {
      $delete:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiOrganizationV1OrganizationsMembersDeleteExternalIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersCreateRequest }
            output: ApiOrganizationV1OrganizationsMembersCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/member': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: { member_id?: string | undefined; email_address?: string | undefined }
            }
            output: ApiOrganizationV1OrganizationsMembersGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { member_id?: string | undefined; email_address?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { member_id?: string | undefined; email_address?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { member_id?: string | undefined; email_address?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { member_id?: string | undefined; email_address?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/google': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: ApiOrganizationV1OrganizationsMembersOauthProvidersGoogleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/microsoft': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: ApiOrganizationV1OrganizationsMembersOauthProvidersMicrosoftResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/slack': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: ApiOrganizationV1OrganizationsMembersOauthProvidersSlackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/hubspot': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: ApiOrganizationV1OrganizationsMembersOauthProvidersHubspotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/oauth_providers/github': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: ApiOrganizationV1OrganizationsMembersOauthProvidersGithubResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } } & {
              query: { include_refresh_token?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/organizations/:organization_id/members/:member_id/connected_apps/:connected_app_id/revoke': {
      $post:
        | {
            input: {
              param: { organization_id: string; member_id: string; connected_app_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeRequest }
            output: ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; member_id: string; connected_app_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; member_id: string; connected_app_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { organization_id: string; member_id: string; connected_app_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: { organization_id: string; member_id: string; connected_app_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiOrganizationV1OrganizationsMembersConnectedAppsRevokeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/idp/oauth/authorize/start': {
      $post:
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeStartRequest }
            output: ApiB2bIdpV1B2bIdpOauthAuthorizeStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/idp/oauth/authorize': {
      $post:
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeRequest }
            output: ApiB2bIdpV1B2bIdpOauthAuthorizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bIdpV1B2bIdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/users': {
      $post:
        | {
            input: { json: ApiUserV1CreateRequest }
            output: ApiUserV1CreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ApiUserV1CreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ApiUserV1CreateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ApiUserV1CreateRequest }; output: {}; outputFormat: string; status: 429 }
        | { input: { json: ApiUserV1CreateRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/:user_id': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: ApiUserV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1UpdateRequest }
            output: ApiUserV1UpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1UpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { user_id: string } }
            output: ApiUserV1DeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/search': {
      $post:
        | {
            input: { json: ApiUserV1SearchRequest }
            output: ApiUserV1SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ApiUserV1SearchRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ApiUserV1SearchRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ApiUserV1SearchRequest }; output: {}; outputFormat: string; status: 429 }
        | { input: { json: ApiUserV1SearchRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/:user_id/exchange_primary_factor': {
      $put:
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1ExchangePrimaryFactorRequest }
            output: ApiUserV1ExchangePrimaryFactorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1ExchangePrimaryFactorRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1ExchangePrimaryFactorRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1ExchangePrimaryFactorRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { user_id: string } } & { json: ApiUserV1ExchangePrimaryFactorRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/users/emails/:email_id': {
      $delete:
        | {
            input: { param: { email_id: string } }
            output: ApiUserV1DeleteEmailResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { email_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { email_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { email_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { email_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/phone_numbers/:phone_id': {
      $delete:
        | {
            input: { param: { phone_id: string } }
            output: ApiUserV1DeletePhoneNumberResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { phone_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { phone_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { phone_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { phone_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/webauthn_registrations/:webauthn_registration_id': {
      $delete:
        | {
            input: { param: { webauthn_registration_id: string } }
            output: ApiUserV1DeleteWebAuthnRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webauthn_registration_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { webauthn_registration_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { webauthn_registration_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { webauthn_registration_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/users/biometric_registrations/:biometric_registration_id': {
      $delete:
        | {
            input: { param: { biometric_registration_id: string } }
            output: ApiUserV1DeleteBiometricRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { biometric_registration_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { biometric_registration_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { biometric_registration_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { biometric_registration_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/users/totps/:totp_id': {
      $delete:
        | {
            input: { param: { totp_id: string } }
            output: ApiUserV1DeleteTOTPResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { totp_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { totp_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { totp_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { totp_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/crypto_wallets/:crypto_wallet_id': {
      $delete:
        | {
            input: { param: { crypto_wallet_id: string } }
            output: ApiUserV1DeleteCryptoWalletResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { crypto_wallet_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { crypto_wallet_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { crypto_wallet_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { crypto_wallet_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/users/passwords/:password_id': {
      $delete:
        | {
            input: { param: { password_id: string } }
            output: ApiUserV1DeletePasswordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { password_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { password_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { password_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { password_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/users/oauth/:oauth_user_registration_id': {
      $delete:
        | {
            input: { param: { oauth_user_registration_id: string } }
            output: ApiUserV1DeleteOAuthRegistrationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { oauth_user_registration_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { oauth_user_registration_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { oauth_user_registration_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { oauth_user_registration_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/users/:user_id/external_id': {
      $delete:
        | {
            input: { param: { user_id: string } }
            output: ApiUserV1DeleteExternalIdResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/:user_id/connected_apps': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: ApiUserV1ConnectedAppsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/users/:user_id/connected_apps/:connected_app_id/revoke': {
      $post:
        | {
            input: { param: { user_id: string; connected_app_id: string } } & {
              json: ApiUserV1RevokeRequest
            }
            output: ApiUserV1RevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; connected_app_id: string } } & {
              json: ApiUserV1RevokeRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string; connected_app_id: string } } & {
              json: ApiUserV1RevokeRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; connected_app_id: string } } & {
              json: ApiUserV1RevokeRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { user_id: string; connected_app_id: string } } & {
              json: ApiUserV1RevokeRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/sessions': {
      $get:
        | {
            input: { query: { user_id: string } }
            output: ApiSessionV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { user_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { user_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { query: { user_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/sessions/authenticate': {
      $post:
        | {
            input: { json: ApiSessionV1AuthenticateRequest }
            output: ApiSessionV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/sessions/revoke': {
      $post:
        | {
            input: { json: ApiSessionV1RevokeRequest }
            output: ApiSessionV1RevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/sessions/migrate': {
      $post:
        | {
            input: { json: ApiSessionV1MigrateRequest }
            output: ApiSessionV1MigrateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/sessions/exchange_access_token': {
      $post:
        | {
            input: { json: ApiSessionV1ExchangeAccessTokenRequest }
            output: ApiSessionV1ExchangeAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/sessions/jwks/:project_id': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ApiSessionV1GetJWKSResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/sessions/attest': {
      $post:
        | {
            input: { json: ApiSessionV1AttestRequest }
            output: ApiSessionV1AttestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions': {
      $get:
        | {
            input: { query: { organization_id: string; member_id: string } }
            output: ApiB2bSessionV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions/authenticate': {
      $post:
        | {
            input: { json: ApiB2bSessionV1AuthenticateRequest }
            output: ApiB2bSessionV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bSessionV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions/revoke': {
      $post:
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bSessionV1RevokeRequest }
            output: ApiB2bSessionV1RevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bSessionV1RevokeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions/exchange': {
      $post:
        | {
            input: { json: ApiB2bSessionV1ExchangeRequest }
            output: ApiB2bSessionV1ExchangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions/exchange_access_token': {
      $post:
        | {
            input: { json: ApiB2bSessionV1ExchangeAccessTokenRequest }
            output: ApiB2bSessionV1ExchangeAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bSessionV1ExchangeAccessTokenRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions/attest': {
      $post:
        | {
            input: { json: ApiB2bSessionV1AttestRequest }
            output: ApiB2bSessionV1AttestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bSessionV1AttestRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions/migrate': {
      $post:
        | {
            input: { json: ApiB2bSessionV1MigrateRequest }
            output: ApiB2bSessionV1MigrateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bSessionV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sessions/jwks/:project_id': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ApiB2bSessionV1GetJWKSResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { project_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/impersonation/authenticate': {
      $post:
        | {
            input: { json: ApiB2bImpersonationV1AuthenticateRequest }
            output: ApiB2bImpersonationV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/rbac/policy': {
      $get:
        | { input: {}; output: ApiB2bRbacV1PolicyResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/b2b/rbac/organizations/:organization_id': {
      $get:
        | {
            input: { param: { organization_id: string } }
            output: ApiB2bRbacV1B2bRbacOrganizationsGetOrgPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { organization_id: string } } & {
              json: ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyRequest
            }
            output: ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              json: ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              json: ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              json: ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              json: ApiB2bRbacV1B2bRbacOrganizationsSetOrgPolicyRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/recovery_codes/recover': {
      $post:
        | {
            input: { json: ApiB2bRecoveryCodesV1RecoverRequest }
            output: ApiB2bRecoveryCodesV1RecoverResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/recovery_codes/:organization_id/:member_id': {
      $get:
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: ApiB2bRecoveryCodesV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; member_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/recovery_codes/rotate': {
      $post:
        | {
            input: { json: ApiB2bRecoveryCodesV1RotateRequest }
            output: ApiB2bRecoveryCodesV1RotateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RotateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RotateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RotateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bRecoveryCodesV1RotateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/totp': {
      $post:
        | {
            input: { json: ApiB2bTotpV1CreateRequest }
            output: ApiB2bTotpV1CreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bTotpV1CreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bTotpV1CreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bTotpV1CreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bTotpV1CreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/totp/authenticate': {
      $post:
        | {
            input: { json: ApiB2bTotpV1AuthenticateRequest }
            output: ApiB2bTotpV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/totp/migrate': {
      $post:
        | {
            input: { json: ApiB2bTotpV1MigrateRequest }
            output: ApiB2bTotpV1MigrateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bTotpV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bTotpV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bTotpV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bTotpV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/rbac/policy': {
      $get:
        | { input: {}; output: ApiConsumerRbacV1PolicyResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/crypto_wallets/authenticate/start': {
      $post:
        | {
            input: { json: ApiCryptoWalletV1AuthenticateStartRequest }
            output: ApiCryptoWalletV1AuthenticateStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/crypto_wallets/authenticate': {
      $post:
        | {
            input: { json: ApiCryptoWalletV1AuthenticateRequest }
            output: ApiCryptoWalletV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiCryptoWalletV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/debug/whoami': {
      $get:
        | { input: {}; output: ApiDebugV1WhoamiResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/b2b/discovery/intermediate_sessions/exchange': {
      $post:
        | {
            input: { json: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequest }
            output: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryIntermediateSessionsExchangeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/discovery/organizations/create': {
      $post:
        | {
            input: { json: ApiDiscoveryV1DiscoveryOrganizationsCreateRequest }
            output: ApiDiscoveryV1DiscoveryOrganizationsCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryOrganizationsCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryOrganizationsCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryOrganizationsCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryOrganizationsCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/discovery/organizations': {
      $post:
        | {
            input: { json: ApiDiscoveryV1DiscoveryListRequest }
            output: ApiDiscoveryV1DiscoveryListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryListRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryListRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryListRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiDiscoveryV1DiscoveryListRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/fingerprint/lookup': {
      $post:
        | {
            input: { json: ApiFraudV1FraudFingerprintLookupRequest }
            output: ApiFraudV1FraudFingerprintLookupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiFraudV1FraudFingerprintLookupRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiFraudV1FraudFingerprintLookupRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiFraudV1FraudFingerprintLookupRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiFraudV1FraudFingerprintLookupRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/rules/set': {
      $post:
        | {
            input: { json: ApiFraudV1FraudRulesSetRequest }
            output: ApiFraudV1FraudRulesSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiFraudV1FraudRulesSetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiFraudV1FraudRulesSetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiFraudV1FraudRulesSetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiFraudV1FraudRulesSetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/rules/list': {
      $post:
        | {
            input: { json: ApiFraudV1FraudRulesListRequest }
            output: ApiFraudV1FraudRulesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiFraudV1FraudRulesListRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiFraudV1FraudRulesListRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiFraudV1FraudRulesListRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiFraudV1FraudRulesListRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/verdict_reasons/override': {
      $post:
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsOverrideRequest }
            output: ApiFraudV1FraudVerdictReasonsOverrideResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsOverrideRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsOverrideRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsOverrideRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsOverrideRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/verdict_reasons/list': {
      $post:
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsListRequest }
            output: ApiFraudV1FraudVerdictReasonsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsListRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsListRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsListRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiFraudV1FraudVerdictReasonsListRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/email/risk': {
      $post:
        | {
            input: { json: ApiFraudV1FraudEmailRiskRequest }
            output: ApiFraudV1FraudEmailRiskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiFraudV1FraudEmailRiskRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiFraudV1FraudEmailRiskRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiFraudV1FraudEmailRiskRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiFraudV1FraudEmailRiskRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/idp/oauth/authorize/start': {
      $post:
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeStartRequest }
            output: ApiIdpV1IdpOauthAuthorizeStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/idp/oauth/authorize': {
      $post:
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeRequest }
            output: ApiIdpV1IdpOauthAuthorizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiIdpV1IdpOauthAuthorizeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/impersonation/authenticate': {
      $post:
        | {
            input: { json: ApiImpersonationV1AuthenticateRequest }
            output: ApiImpersonationV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiImpersonationV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/m2m/clients/:client_id': {
      $get:
        | {
            input: { param: { client_id: string } }
            output: ApiM2mV1M2mClientsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { client_id: string } } & { json: ApiM2mV1M2mClientsUpdateRequest }
            output: ApiM2mV1M2mClientsUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & { json: ApiM2mV1M2mClientsUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & { json: ApiM2mV1M2mClientsUpdateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & { json: ApiM2mV1M2mClientsUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & { json: ApiM2mV1M2mClientsUpdateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
      $delete:
        | {
            input: { param: { client_id: string } }
            output: ApiM2mV1M2mClientsDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/m2m/clients/search': {
      $post:
        | {
            input: { json: ApiM2mV1M2mClientsSearchRequest }
            output: ApiM2mV1M2mClientsSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiM2mV1M2mClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiM2mV1M2mClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiM2mV1M2mClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiM2mV1M2mClientsSearchRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/m2m/clients': {
      $post:
        | {
            input: { json: ApiM2mV1M2mClientsCreateRequest }
            output: ApiM2mV1M2mClientsCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiM2mV1M2mClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiM2mV1M2mClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiM2mV1M2mClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiM2mV1M2mClientsCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/m2m/clients/:client_id/secrets/rotate/start': {
      $post:
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateStartRequest
            }
            output: ApiM2mV1M2mClientsSecretsRotateStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateStartRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/m2m/clients/:client_id/secrets/rotate/cancel': {
      $post:
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateCancelRequest
            }
            output: ApiM2mV1M2mClientsSecretsRotateCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateCancelRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/m2m/clients/:client_id/secrets/rotate': {
      $post:
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateRequest
            }
            output: ApiM2mV1M2mClientsSecretsRotateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { client_id: string } } & {
              json: ApiM2mV1M2mClientsSecretsRotateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/magic_links/authenticate': {
      $post:
        | {
            input: { json: ApiMagicV1AuthenticateRequest }
            output: ApiMagicV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/magic_links': {
      $post:
        | {
            input: { json: ApiMagicV1CreateRequest }
            output: ApiMagicV1CreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiMagicV1CreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiMagicV1CreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiMagicV1CreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiMagicV1CreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/magic_links/email/send': {
      $post:
        | {
            input: { json: ApiMagicV1MagicLinksEmailSendRequest }
            output: ApiMagicV1MagicLinksEmailSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailSendRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailSendRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailSendRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailSendRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/magic_links/email/login_or_create': {
      $post:
        | {
            input: { json: ApiMagicV1MagicLinksEmailLoginOrCreateRequest }
            output: ApiMagicV1MagicLinksEmailLoginOrCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/magic_links/email/invite': {
      $post:
        | {
            input: { json: ApiMagicV1MagicLinksEmailInviteRequest }
            output: ApiMagicV1MagicLinksEmailInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/magic_links/email/revoke_invite': {
      $post:
        | {
            input: { json: ApiMagicV1MagicLinksEmailRevokeInviteRequest }
            output: ApiMagicV1MagicLinksEmailRevokeInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailRevokeInviteRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailRevokeInviteRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailRevokeInviteRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiMagicV1MagicLinksEmailRevokeInviteRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/magic_links/authenticate': {
      $post:
        | {
            input: { json: ApiB2bMagicV1AuthenticateRequest }
            output: ApiB2bMagicV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bMagicV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/magic_links/email/login_or_signup': {
      $post:
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupRequest }
            output: ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/magic_links/email/invite': {
      $post:
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bMagicV1B2bMagicLinksEmailInviteRequest }
            output: ApiB2bMagicV1B2bMagicLinksEmailInviteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bMagicV1B2bMagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bMagicV1B2bMagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bMagicV1B2bMagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bMagicV1B2bMagicLinksEmailInviteRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/magic_links/email/discovery/send': {
      $post:
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendRequest }
            output: ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/magic_links/discovery/authenticate': {
      $post:
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateRequest }
            output: ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bMagicV1B2bMagicLinksDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/oauth/authenticate': {
      $post:
        | {
            input: { json: ApiB2bOauthV1AuthenticateRequest }
            output: ApiB2bOauthV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/oauth/discovery/authenticate': {
      $post:
        | {
            input: { json: ApiB2bOauthV1B2bOauthDiscoveryAuthenticateRequest }
            output: ApiB2bOauthV1B2bOauthDiscoveryAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOauthV1B2bOauthDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOauthV1B2bOauthDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOauthV1B2bOauthDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOauthV1B2bOauthDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/otps/sms/send': {
      $post:
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsSendRequest }
            output: ApiB2bOtpV1B2bOtpSmsSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/otps/sms/authenticate': {
      $post:
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsAuthenticateRequest }
            output: ApiB2bOtpV1B2bOtpSmsAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpSmsAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/otps/email/login_or_signup': {
      $post:
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailLoginOrSignupRequest }
            output: ApiB2bOtpV1B2bOtpEmailLoginOrSignupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailLoginOrSignupRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/otps/email/authenticate': {
      $post:
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailAuthenticateRequest }
            output: ApiB2bOtpV1B2bOtpEmailAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/otps/email/discovery/send': {
      $post:
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoverySendRequest }
            output: ApiB2bOtpV1B2bOtpEmailDiscoverySendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoverySendRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/otps/email/discovery/authenticate': {
      $post:
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateRequest }
            output: ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bOtpV1B2bOtpEmailDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords': {
      $post:
        | {
            input: { json: ApiPasswordV1CreateRequest }
            output: ApiPasswordV1CreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1CreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1CreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1CreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1CreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords/authenticate': {
      $post:
        | {
            input: { json: ApiPasswordV1AuthenticateRequest }
            output: ApiPasswordV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords/strength_check': {
      $post:
        | {
            input: { json: ApiPasswordV1StrengthCheckRequest }
            output: ApiPasswordV1StrengthCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords/migrate': {
      $post:
        | {
            input: { json: ApiPasswordV1MigrateRequest }
            output: ApiPasswordV1MigrateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords/email/reset/start': {
      $post:
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetStartRequest }
            output: ApiPasswordV1PasswordsEmailResetStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords/email/reset': {
      $post:
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetRequest }
            output: ApiPasswordV1PasswordsEmailResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1PasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords/existing_password/reset': {
      $post:
        | {
            input: { json: ApiPasswordV1PasswordsExistingPasswordResetRequest }
            output: ApiPasswordV1PasswordsExistingPasswordResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1PasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1PasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1PasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1PasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/passwords/session/reset': {
      $post:
        | {
            input: { json: ApiPasswordV1PasswordsSessionResetRequest }
            output: ApiPasswordV1PasswordsSessionResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiPasswordV1PasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiPasswordV1PasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiPasswordV1PasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiPasswordV1PasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/strength_check': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1StrengthCheckRequest }
            output: ApiB2bPasswordV1StrengthCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1StrengthCheckRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/migrate': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1MigrateRequest }
            output: ApiB2bPasswordV1MigrateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1MigrateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/authenticate': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1AuthenticateRequest }
            output: ApiB2bPasswordV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/email/reset/start': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetStartRequest }
            output: ApiB2bPasswordV1B2bPasswordsEmailResetStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/email/reset': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetRequest }
            output: ApiB2bPasswordV1B2bPasswordsEmailResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsEmailResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/email/require_reset': {
      $post:
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bPasswordV1B2bPasswordsEmailRequireResetRequest }
            output: ApiB2bPasswordV1B2bPasswordsEmailRequireResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bPasswordV1B2bPasswordsEmailRequireResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bPasswordV1B2bPasswordsEmailRequireResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bPasswordV1B2bPasswordsEmailRequireResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiB2bPasswordV1B2bPasswordsEmailRequireResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/session/reset': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsSessionResetRequest }
            output: ApiB2bPasswordV1B2bPasswordsSessionResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsSessionResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/existing_password/reset': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsExistingPasswordResetRequest }
            output: ApiB2bPasswordV1B2bPasswordsExistingPasswordResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsExistingPasswordResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/discovery/authenticate': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateRequest }
            output: ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryAuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/discovery/email/reset/start': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartRequest }
            output: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/passwords/discovery/email/reset': {
      $post:
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetRequest }
            output: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiB2bPasswordV1B2bPasswordsDiscoveryEmailResetRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/oauth/attach': {
      $post:
        | {
            input: { json: ApiOauthV1AttachRequest }
            output: ApiOauthV1AttachResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOauthV1AttachRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOauthV1AttachRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOauthV1AttachRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOauthV1AttachRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/oauth/authenticate': {
      $post:
        | {
            input: { json: ApiOauthV1AuthenticateRequest }
            output: ApiOauthV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOauthV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/otps/authenticate': {
      $post:
        | {
            input: { json: ApiOtpV1AuthenticateRequest }
            output: ApiOtpV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOtpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOtpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOtpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOtpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/otps/sms/send': {
      $post:
        | {
            input: { json: ApiOtpV1OtpSmsSendRequest }
            output: ApiOtpV1OtpSmsSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOtpV1OtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOtpV1OtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOtpV1OtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOtpV1OtpSmsSendRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/otps/sms/login_or_create': {
      $post:
        | {
            input: { json: ApiOtpV1OtpSmsLoginOrCreateRequest }
            output: ApiOtpV1OtpSmsLoginOrCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOtpV1OtpSmsLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOtpV1OtpSmsLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOtpV1OtpSmsLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOtpV1OtpSmsLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/otps/whatsapp/send': {
      $post:
        | {
            input: { json: ApiOtpV1OtpWhatsappSendRequest }
            output: ApiOtpV1OtpWhatsappSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappSendRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappSendRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappSendRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappSendRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/otps/whatsapp/login_or_create': {
      $post:
        | {
            input: { json: ApiOtpV1OtpWhatsappLoginOrCreateRequest }
            output: ApiOtpV1OtpWhatsappLoginOrCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOtpV1OtpWhatsappLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/otps/email/send': {
      $post:
        | {
            input: { json: ApiOtpV1OtpEmailSendRequest }
            output: ApiOtpV1OtpEmailSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOtpV1OtpEmailSendRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOtpV1OtpEmailSendRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOtpV1OtpEmailSendRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOtpV1OtpEmailSendRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/otps/email/login_or_create': {
      $post:
        | {
            input: { json: ApiOtpV1OtpEmailLoginOrCreateRequest }
            output: ApiOtpV1OtpEmailLoginOrCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiOtpV1OtpEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiOtpV1OtpEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiOtpV1OtpEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiOtpV1OtpEmailLoginOrCreateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/projects/metrics': {
      $get:
        | { input: {}; output: ApiProjectV1MetricsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/b2b/sso/:organization_id': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiSsoV1GetConnectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/:organization_id/connections/:connection_id': {
      $delete:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiSsoV1DeleteConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/authenticate': {
      $post:
        | {
            input: { json: ApiSsoV1AuthenticateRequest }
            output: ApiSsoV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiSsoV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiSsoV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiSsoV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiSsoV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/oidc/:organization_id': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcCreateConnectionRequest }
            output: ApiSsoV1SsoOidcCreateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/oidc/:organization_id/connections/:connection_id': {
      $put:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcUpdateConnectionRequest }
            output: ApiSsoV1SsoOidcUpdateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoOidcUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/saml/:organization_id': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlCreateConnectionRequest }
            output: ApiSsoV1SsoSamlCreateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id': {
      $put:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateConnectionRequest }
            output: ApiSsoV1SsoSamlUpdateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/url': {
      $put:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateByURLRequest }
            output: ApiSsoV1SsoSamlUpdateByURLResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateByURLRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateByURLRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateByURLRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoSamlUpdateByURLRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/verification_certificates/:certificate_id': {
      $delete:
        | {
            input: {
              param: { organization_id: string; connection_id: string; certificate_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiSsoV1SsoSamlDeleteVerificationCertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; certificate_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; certificate_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; certificate_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; certificate_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/saml/:organization_id/connections/:connection_id/encryption_private_keys/:private_key_id': {
      $delete:
        | {
            input: {
              param: { organization_id: string; connection_id: string; private_key_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: ApiSsoV1SsoSamlDeleteEncryptionPrivateKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; private_key_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; private_key_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; private_key_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: { organization_id: string; connection_id: string; private_key_id: string }
            } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/external/:organization_id': {
      $post:
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalCreateConnectionRequest }
            output: ApiSsoV1SsoExternalCreateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalCreateConnectionRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/b2b/sso/external/:organization_id/connections/:connection_id': {
      $put:
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalUpdateConnectionRequest }
            output: ApiSsoV1SsoExternalUpdateConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { organization_id: string; connection_id: string } } & {
              header: {
                'X-Stytch-Member-Session'?: string | undefined
                'X-Stytch-Member-SessionJWT'?: string | undefined
              }
            } & { json: ApiSsoV1SsoExternalUpdateConnectionRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/totps': {
      $post:
        | {
            input: { json: ApiTotpV1CreateRequest }
            output: ApiTotpV1CreateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ApiTotpV1CreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ApiTotpV1CreateRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ApiTotpV1CreateRequest }; output: {}; outputFormat: string; status: 429 }
        | { input: { json: ApiTotpV1CreateRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v1/totps/authenticate': {
      $post:
        | {
            input: { json: ApiTotpV1AuthenticateRequest }
            output: ApiTotpV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiTotpV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/totps/recovery_codes': {
      $post:
        | {
            input: { json: ApiTotpV1RecoveryCodesRequest }
            output: ApiTotpV1RecoveryCodesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiTotpV1RecoveryCodesRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiTotpV1RecoveryCodesRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiTotpV1RecoveryCodesRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiTotpV1RecoveryCodesRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/totps/recover': {
      $post:
        | {
            input: { json: ApiTotpV1RecoverRequest }
            output: ApiTotpV1RecoverResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiTotpV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiTotpV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiTotpV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiTotpV1RecoverRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/webauthn/register/start': {
      $post:
        | {
            input: { json: ApiWebauthnV1RegisterStartRequest }
            output: ApiWebauthnV1RegisterStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiWebauthnV1RegisterStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiWebauthnV1RegisterStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiWebauthnV1RegisterStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiWebauthnV1RegisterStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/webauthn/register': {
      $post:
        | {
            input: { json: ApiWebauthnV1RegisterRequest }
            output: ApiWebauthnV1RegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiWebauthnV1RegisterRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiWebauthnV1RegisterRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiWebauthnV1RegisterRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiWebauthnV1RegisterRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/webauthn/authenticate/start': {
      $post:
        | {
            input: { json: ApiWebauthnV1AuthenticateStartRequest }
            output: ApiWebauthnV1AuthenticateStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateStartRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/webauthn/authenticate': {
      $post:
        | {
            input: { json: ApiWebauthnV1AuthenticateRequest }
            output: ApiWebauthnV1AuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: ApiWebauthnV1AuthenticateRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/webauthn/:webauthn_registration_id': {
      $put:
        | {
            input: { param: { webauthn_registration_id: string } } & {
              json: ApiWebauthnV1UpdateRequest
            }
            output: ApiWebauthnV1UpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webauthn_registration_id: string } } & {
              json: ApiWebauthnV1UpdateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { webauthn_registration_id: string } } & {
              json: ApiWebauthnV1UpdateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { webauthn_registration_id: string } } & {
              json: ApiWebauthnV1UpdateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { webauthn_registration_id: string } } & {
              json: ApiWebauthnV1UpdateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/webauthn/credentials/:user_id/:domain': {
      $get:
        | {
            input: { param: { user_id: string; domain: string } }
            output: ApiWebauthnV1ListCredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string; domain: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string; domain: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { user_id: string; domain: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { user_id: string; domain: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
