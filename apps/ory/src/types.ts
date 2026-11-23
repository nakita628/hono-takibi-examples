type GenericError = {
  code?: bigint | undefined
  debug?: string | undefined
  details?: {} | undefined
  id?: string | undefined
  message: string
  reason?: string | undefined
  request?: string | undefined
  status?: string | undefined
}
type ErrorGeneric = { error: GenericError }
type WebAuthnJavaScript = string
type CourierMessageStatus = 'queued' | 'sent' | 'processing' | 'abandoned'
type JSONRawMessage = { [x: string]: unknown }
type MessageDispatch = {
  created_at: string
  error?: JSONRawMessage | undefined
  id: string
  message_id: string
  status: 'failed' | 'success'
  updated_at: string
}
type CourierMessageType = 'email' | 'phone'
type Message = {
  body: string
  channel?: string | undefined
  created_at: string
  dispatches?: MessageDispatch[] | undefined
  id: string
  recipient: string
  send_count: bigint
  status: CourierMessageStatus
  subject: string
  template_type:
    | 'recovery_invalid'
    | 'recovery_valid'
    | 'recovery_code_invalid'
    | 'recovery_code_valid'
    | 'verification_invalid'
    | 'verification_valid'
    | 'verification_code_invalid'
    | 'verification_code_valid'
    | 'stub'
    | 'login_code_valid'
    | 'registration_code_valid'
    | 'verifiable_address_changed'
    | 'authenticator_key_added'
  type: CourierMessageType
  updated_at: string
}
type IdentityCredentials = {
  config?: JSONRawMessage | undefined
  created_at?: string | undefined
  identifiers?: string[] | undefined
  type?:
    | 'password'
    | 'oidc'
    | 'totp'
    | 'lookup_secret'
    | 'webauthn'
    | 'code'
    | 'passkey'
    | 'profile'
    | 'saml'
    | 'deviceauthn'
    | 'identifier_first'
    | 'link_recovery'
    | 'code_recovery'
    | undefined
  updated_at?: string | undefined
  version?: bigint | undefined
}
type NullJsonRawMessage = { [x: string]: unknown } | null
type NullUUID = string | null
type RecoveryIdentityAddress = {
  break_glass_for_organization?: NullUUID | undefined
  created_at?: string | undefined
  id?: string | undefined
  updated_at?: string | undefined
  value: string
  via: string
}
type NullTime2 = string
type IdentityTraits = { [x: string]: unknown }
type IdentityVerifiableAddressStatus = string
type VerifiableIdentityAddress = {
  created_at?: string | undefined
  id?: string | undefined
  status: IdentityVerifiableAddressStatus
  updated_at?: string | undefined
  value: string
  verified: boolean
  verified_at?: NullTime2 | undefined
  via: 'email' | 'sms'
}
type Identity = {
  created_at?: string | undefined
  credentials?: { [x: string]: IdentityCredentials } | undefined
  external_id?: string | undefined
  id: string
  metadata_admin?: NullJsonRawMessage | undefined
  metadata_public?: NullJsonRawMessage | undefined
  organization_id?: NullUUID | undefined
  recovery_addresses?: RecoveryIdentityAddress[] | undefined
  region?:
    | 'eu-central'
    | 'asia-northeast'
    | 'us-east'
    | 'us-west'
    | 'eu'
    | 'asia'
    | 'us'
    | 'global'
    | undefined
  schema_id: string
  schema_url: string
  state?: 'active' | 'inactive' | undefined
  state_changed_at?: NullTime2 | undefined
  traits: IdentityTraits
  updated_at?: string | undefined
  verifiable_addresses?: VerifiableIdentityAddress[] | undefined
}
type IdentityCredentialsLookupSecretCode = {
  code?: string | undefined
  used_at?: NullTime2 | undefined
}
type AdminIdentityImportCredentialsLookupSecretConfig = {
  codes?: IdentityCredentialsLookupSecretCode[] | undefined
}
type AdminIdentityImportCredentialsLookupSecret = {
  config?: AdminIdentityImportCredentialsLookupSecretConfig | undefined
}
type IdentityWithCredentialsOidcConfigProvider = {
  organization?: NullUUID | undefined
  provider: string
  subject: string
  use_auto_link?: boolean | undefined
}
type IdentityWithCredentialsOidcConfig = {
  providers?: IdentityWithCredentialsOidcConfigProvider[] | undefined
}
type IdentityWithCredentialsOidc = { config?: IdentityWithCredentialsOidcConfig | undefined }
type IdentityCredentialsWebAuthnAttestation = {
  authenticator_data?: number[] | undefined
  client_dataJSON?: number[] | undefined
  client_data_hash?: number[] | undefined
  object?: number[] | undefined
  public_key_algorithm?: bigint | undefined
}
type IdentityCredentialsWebAuthnAuthenticator = {
  aaguid?: number[] | undefined
  clone_warning?: boolean | undefined
  sign_count?: number | undefined
}
type IdentityCredentialsWebAuthnFlags = {
  backup_eligible?: boolean | undefined
  backup_state?: boolean | undefined
  user_present?: boolean | undefined
  user_verified?: boolean | undefined
}
type AuthenticatorTransport = string
type IdentityCredentialsWebAuthn = {
  added_at?: string | undefined
  attestation?: IdentityCredentialsWebAuthnAttestation | undefined
  attestation_type?: string | undefined
  authenticator?: IdentityCredentialsWebAuthnAuthenticator | undefined
  display_name?: string | undefined
  flags?: IdentityCredentialsWebAuthnFlags | undefined
  id?: number[] | undefined
  is_passwordless?: boolean | undefined
  public_key?: number[] | undefined
  transport?: AuthenticatorTransport[] | undefined
}
type IdentityCredentialsWebAuthnList = IdentityCredentialsWebAuthn[]
type IdentityWithCredentialsPasskeyConfig = {
  credentials?: IdentityCredentialsWebAuthnList | undefined
  user_handle?: number[] | undefined
}
type IdentityWithCredentialsPasskey = { config?: IdentityWithCredentialsPasskeyConfig | undefined }
type IdentityWithCredentialsPasswordConfig = {
  hashed_password?: string | undefined
  password?: string | undefined
  use_password_migration_hook?: boolean | undefined
}
type IdentityWithCredentialsPassword = {
  config?: IdentityWithCredentialsPasswordConfig | undefined
}
type IdentityWithCredentialsSamlConfigProvider = {
  organization?: NullUUID | undefined
  provider: string
  subject: string
}
type IdentityWithCredentialsSamlConfig = {
  providers?: IdentityWithCredentialsSamlConfigProvider[] | undefined
}
type IdentityWithCredentialsSaml = { config?: IdentityWithCredentialsSamlConfig | undefined }
type IdentityWithCredentialsTotpConfig = { totp_url?: string | undefined }
type IdentityWithCredentialsTotp = { config?: IdentityWithCredentialsTotpConfig | undefined }
type IdentityWithCredentialsWebAuthnConfig = {
  credentials?: IdentityCredentialsWebAuthnList | undefined
  user_handle?: number[] | undefined
}
type IdentityWithCredentialsWebAuthn = {
  config?: IdentityWithCredentialsWebAuthnConfig | undefined
}
type IdentityWithCredentials = {
  lookup_secret?: AdminIdentityImportCredentialsLookupSecret | undefined
  oidc?: IdentityWithCredentialsOidc | undefined
  passkey?: IdentityWithCredentialsPasskey | undefined
  password?: IdentityWithCredentialsPassword | undefined
  saml?: IdentityWithCredentialsSaml | undefined
  totp?: IdentityWithCredentialsTotp | undefined
  webauthn?: IdentityWithCredentialsWebAuthn | undefined
}
type CreateIdentityBody = {
  credentials?: IdentityWithCredentials | undefined
  external_id?: string | undefined
  metadata_admin?: { [x: string]: unknown } | undefined
  metadata_public?: { [x: string]: unknown } | undefined
  organization_id?: NullUUID | undefined
  recovery_addresses?: RecoveryIdentityAddress[] | undefined
  region?:
    | 'eu-central'
    | 'asia-northeast'
    | 'us-east'
    | 'us-west'
    | 'eu'
    | 'asia'
    | 'us'
    | 'global'
    | undefined
  schema_id: string
  state?: 'active' | 'inactive' | undefined
  traits: { [x: string]: unknown }
  verifiable_addresses?: VerifiableIdentityAddress[] | undefined
}
type IdentityPatch = { create?: CreateIdentityBody | undefined; patch_id?: string | undefined }
type PatchIdentitiesBody = { identities?: IdentityPatch[] | undefined }
type DefaultError = { [x: string]: unknown }
type IdentityPatchResponse = {
  action?: 'create' | 'error' | undefined
  error?: DefaultError | undefined
  identity?: string | undefined
  patch_id?: string | undefined
}
type BatchPatchIdentitiesResponse = { identities?: IdentityPatchResponse[] | undefined }
type JsonPatch = {
  from?: string | undefined
  op: string
  path: string
  value?: { [x: string]: unknown } | undefined
}
type JsonPatchDocument = JsonPatch[]
type UpdateIdentityBody = {
  credentials?: IdentityWithCredentials | undefined
  external_id?: string | undefined
  metadata_admin?: { [x: string]: unknown } | undefined
  metadata_public?: { [x: string]: unknown } | undefined
  region?:
    | 'eu-central'
    | 'asia-northeast'
    | 'us-east'
    | 'us-west'
    | 'eu'
    | 'asia'
    | 'us'
    | 'global'
    | undefined
  schema_id: string
  state: 'active' | 'inactive'
  traits: { [x: string]: unknown }
}
type AuthenticatorAssuranceLevel = 'aal0' | 'aal1' | 'aal2' | 'aal3'
type SessionAuthenticationMethod = {
  aal?: AuthenticatorAssuranceLevel | undefined
  completed_at?: string | undefined
  method?:
    | 'password'
    | 'oidc'
    | 'totp'
    | 'lookup_secret'
    | 'webauthn'
    | 'code'
    | 'passkey'
    | 'profile'
    | 'saml'
    | 'deviceauthn'
    | 'identifier_first'
    | 'link_recovery'
    | 'code_recovery'
    | undefined
  organization?: string | undefined
  provider?: string | undefined
  upstream_acr?: string | undefined
  upstream_amr?: string[] | undefined
}
type SessionAuthenticationMethods = SessionAuthenticationMethod[]
type SessionDevice = {
  id: string
  ip_address?: string | undefined
  location?: string | undefined
  user_agent?: string | undefined
}
type Session = {
  active?: boolean | undefined
  authenticated_at?: string | undefined
  authentication_methods?: SessionAuthenticationMethods | undefined
  authenticator_assurance_level?: AuthenticatorAssuranceLevel | undefined
  devices?: SessionDevice[] | undefined
  expires_at?: string | undefined
  id: string
  identity?: Identity | undefined
  issued_at?: string | undefined
  tokenized?: string | undefined
}
type SelfServiceFlowType = string
type CreateRecoveryCodeForIdentityBody = {
  expires_in?: string | undefined
  flow_type?: SelfServiceFlowType | undefined
  identity_id: string
}
type RecoveryCodeForIdentity = {
  expires_at?: string | undefined
  recovery_code: string
  recovery_link: string
}
type CreateRecoveryLinkForIdentityBody = { expires_in?: string | undefined; identity_id: string }
type RecoveryLinkForIdentity = { expires_at?: string | undefined; recovery_link: string }
type ManageSessionsBody = {
  action: 'disable' | 'delete'
  identities?: string[] | undefined
  sessions?: string[] | undefined
}
type ManageSessionsResponse = { more?: boolean | undefined; processed?: bigint | undefined }
type CreateTestLoginFlowBody = { provider_id: string }
type OAuth2Client = {
  access_token_strategy?: string | undefined
  allowed_cors_origins?: string[] | undefined
  audience?: string[] | undefined
  authorization_code_grant_access_token_lifespan?: string | undefined
  authorization_code_grant_id_token_lifespan?: string | undefined
  authorization_code_grant_refresh_token_lifespan?: string | undefined
  backchannel_logout_session_required?: boolean | undefined
  backchannel_logout_uri?: string | undefined
  client_credentials_grant_access_token_lifespan?: string | undefined
  client_id?: string | undefined
  client_name?: string | undefined
  client_secret?: string | undefined
  client_secret_expires_at?: bigint | undefined
  client_uri?: string | undefined
  contacts?: string[] | undefined
  created_at?: string | undefined
  frontchannel_logout_session_required?: boolean | undefined
  frontchannel_logout_uri?: string | undefined
  grant_types?: string[] | undefined
  implicit_grant_access_token_lifespan?: string | undefined
  implicit_grant_id_token_lifespan?: string | undefined
  jwks?: { [x: string]: unknown } | undefined
  jwks_uri?: string | undefined
  jwt_bearer_grant_access_token_lifespan?: string | undefined
  logo_uri?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  owner?: string | undefined
  policy_uri?: string | undefined
  post_logout_redirect_uris?: string[] | undefined
  redirect_uris?: string[] | undefined
  refresh_token_grant_access_token_lifespan?: string | undefined
  refresh_token_grant_id_token_lifespan?: string | undefined
  refresh_token_grant_refresh_token_lifespan?: string | undefined
  registration_access_token?: string | undefined
  registration_client_uri?: string | undefined
  request_object_signing_alg?: string | undefined
  request_uris?: string[] | undefined
  response_types?: string[] | undefined
  scope?: string | undefined
  sector_identifier_uri?: string | undefined
  skip_consent?: boolean | undefined
  skip_logout_consent?: boolean | undefined
  subject_type?: string | undefined
  token_endpoint_auth_method?: string | undefined
  token_endpoint_auth_signing_alg?: string | undefined
  tos_uri?: string | undefined
  updated_at?: string | undefined
  userinfo_signed_response_alg?: string | undefined
}
type OAuth2ConsentRequestOpenIDConnectContext = {
  acr_values?: string[] | undefined
  display?: string | undefined
  id_token_hint_claims?: { [x: string]: { [x: string]: unknown } } | undefined
  login_hint?: string | undefined
  ui_locales?: string[] | undefined
}
type OAuth2LoginRequest = {
  challenge?: string | undefined
  client?: OAuth2Client | undefined
  oidc_context?: OAuth2ConsentRequestOpenIDConnectContext | undefined
  request_url?: string | undefined
  requested_access_token_audience?: string[] | undefined
  requested_scope?: string[] | undefined
  session_id?: string | undefined
  skip?: boolean | undefined
  subject?: string | undefined
}
type LoginFlowTestStepError = {
  message?: string | undefined
  reason?: string | undefined
  step?: string | undefined
}
type LoginFlowTestSchemaValidationError = {
  message?: string | undefined
  path?: string | undefined
}
type LoginFlowTestDebugPayload = {
  error?: LoginFlowTestStepError | undefined
  id_token_claims?: { [x: string]: { [x: string]: unknown } } | undefined
  jsonnet_input?: { [x: string]: { [x: string]: unknown } } | undefined
  jsonnet_mapper_url?: string | undefined
  jsonnet_output?: { [x: string]: { [x: string]: unknown } } | undefined
  jsonnet_stderr?: string | undefined
  schema_validation_errors?: LoginFlowTestSchemaValidationError[] | undefined
  userinfo?: { [x: string]: { [x: string]: unknown } } | undefined
}
type LoginFlowTestContext = {
  debug_payload?: LoginFlowTestDebugPayload | undefined
  provider_id: string
}
type ID = bigint
type UiText = {
  context?: { [x: string]: unknown } | undefined
  id: ID
  text: string
  type: 'info' | 'error' | 'success'
}
type UiTexts = UiText[]
type UiNodeInputAttributesOption = { value: { [x: string]: unknown } }
type UiNodeInputAttributes = {
  autocomplete?:
    | 'email'
    | 'tel'
    | 'url'
    | 'current-password'
    | 'new-password'
    | 'one-time-code'
    | 'username'
    | 'username webauthn'
    | undefined
  disabled: boolean
  label?: UiText | undefined
  maxlength?: bigint | undefined
  name: string
  node_type: 'input'
  onclick?: string | undefined
  onclickTrigger?:
    | 'oryWebAuthnRegistration'
    | 'oryWebAuthnLogin'
    | 'oryPasskeyLogin'
    | 'oryPasskeyLoginAutocompleteInit'
    | 'oryPasskeyRegistration'
    | 'oryPasskeySettingsRegistration'
    | undefined
  onload?: string | undefined
  onloadTrigger?:
    | 'oryWebAuthnRegistration'
    | 'oryWebAuthnLogin'
    | 'oryPasskeyLogin'
    | 'oryPasskeyLoginAutocompleteInit'
    | 'oryPasskeyRegistration'
    | 'oryPasskeySettingsRegistration'
    | undefined
  options?: UiNodeInputAttributesOption[] | undefined
  pattern?: string | undefined
  required?: boolean | undefined
  type:
    | 'text'
    | 'password'
    | 'number'
    | 'checkbox'
    | 'hidden'
    | 'email'
    | 'tel'
    | 'submit'
    | 'button'
    | 'datetime-local'
    | 'date'
    | 'url'
  value?: ({ [x: string]: unknown } | null) | undefined
}
type UiNodeTextAttributes = { id: string; node_type: 'text'; text: UiText }
type UiNodeImageAttributes = {
  height: bigint
  id: string
  node_type: 'img'
  src: string
  width: bigint
}
type UiNodeAnchorAttributes = { href: string; id: string; node_type: 'a'; title: UiText }
type UiNodeScriptAttributes = {
  async: boolean
  crossorigin: string
  id: string
  integrity: string
  node_type: 'script'
  nonce: string
  referrerpolicy: string
  src: string
  type: string
}
type UiNodeDivisionAttributes = {
  class?: string | undefined
  data?: { [x: string]: string } | undefined
  id: string
  node_type: 'div'
}
type UiNodeAttributes =
  | UiNodeInputAttributes
  | UiNodeTextAttributes
  | UiNodeImageAttributes
  | UiNodeAnchorAttributes
  | UiNodeScriptAttributes
  | UiNodeDivisionAttributes
type UiNodeMeta = { label?: UiText | undefined }
type UiNode = {
  attributes: UiNodeAttributes
  group:
    | 'default'
    | 'password'
    | 'oidc'
    | 'profile'
    | 'link'
    | 'code'
    | 'totp'
    | 'lookup_secret'
    | 'webauthn'
    | 'passkey'
    | 'identifier_first'
    | 'captcha'
    | 'saml'
    | 'deviceauthn'
  messages: UiTexts
  meta: UiNodeMeta
  type: 'text' | 'input' | 'img' | 'a' | 'script' | 'div'
}
type UiNodes = UiNode[]
type UiContainer = {
  action: string
  messages?: UiTexts | undefined
  method: string
  nodes: UiNodes
}
type LoginFlow = {
  active?:
    | 'password'
    | 'oidc'
    | 'totp'
    | 'lookup_secret'
    | 'webauthn'
    | 'code'
    | 'passkey'
    | 'profile'
    | 'saml'
    | 'deviceauthn'
    | 'identifier_first'
    | 'link_recovery'
    | 'code_recovery'
    | undefined
  created_at?: string | undefined
  expires_at: string
  id: string
  identity_schema?: string | undefined
  issued_at: string
  oauth2_login_challenge?: string | undefined
  oauth2_login_request?: OAuth2LoginRequest | undefined
  organization_id?: NullUUID | undefined
  refresh?: boolean | undefined
  request_url: string
  requested_aal?: AuthenticatorAssuranceLevel | undefined
  return_to?: string | undefined
  session_token_exchange_code?: string | undefined
  state: { [x: string]: unknown }
  test_context?: LoginFlowTestContext | undefined
  transient_payload?: { [x: string]: unknown } | undefined
  type: SelfServiceFlowType
  ui: UiContainer
  updated_at?: string | undefined
}
type IdentitySchemaContainer = { id: string; schema: { [x: string]: unknown } }
type IdentitySchemas = IdentitySchemaContainer[]
type IdentitySchema = { [x: string]: unknown }
type FlowError = {
  created_at?: string | undefined
  error?: { [x: string]: unknown } | undefined
  id: string
  updated_at?: string | undefined
}
type Provider = {
  client_id?: string | undefined
  config_url?: string | undefined
  domain_hint?: string | undefined
  fields?: string[] | undefined
  login_hint?: string | undefined
  nonce?: string | undefined
  parameters?: { [x: string]: string } | undefined
}
type CreateFedcmFlowResponse = {
  csrf_token?: string | undefined
  providers?: Provider[] | undefined
}
type UpdateFedcmFlowBody = {
  csrf_token: string
  nonce?: string | undefined
  token: string
  transient_payload?: { [x: string]: unknown } | undefined
}
type ContinueWithVerificationUiFlow = {
  id: string
  url?: string | undefined
  verifiable_address: string
}
type ContinueWithVerificationUi = {
  action: 'show_verification_ui'
  flow: ContinueWithVerificationUiFlow
}
type ContinueWithSetOrySessionToken = { action: 'set_ory_session_token'; ory_session_token: string }
type ContinueWithSettingsUiFlow = { id: string; url?: string | undefined }
type ContinueWithSettingsUi = { action: 'show_settings_ui'; flow: ContinueWithSettingsUiFlow }
type ContinueWithRecoveryUiFlow = { id: string; url?: string | undefined }
type ContinueWithRecoveryUi = { action: 'show_recovery_ui'; flow: ContinueWithRecoveryUiFlow }
type ContinueWithRedirectBrowserTo = { action: 'redirect_browser_to'; redirect_browser_to: string }
type ContinueWithDeviceAuthnPinEntryUi = {
  action: 'show_pin_entry_ui'
  data: { ciphertext: string; enc: string }
}
type ContinueWith =
  | ContinueWithVerificationUi
  | ContinueWithSetOrySessionToken
  | ContinueWithSettingsUi
  | ContinueWithRecoveryUi
  | ContinueWithRedirectBrowserTo
  | ContinueWithDeviceAuthnPinEntryUi
type SuccessfulNativeLogin = {
  continue_with?: ContinueWith[] | undefined
  session: Session
  session_token?: string | undefined
}
type ErrorBrowserLocationChangeRequired = {
  error?: ErrorGeneric | undefined
  redirect_browser_to?: string | undefined
}
type UpdateLoginFlowWithPasswordMethod = {
  csrf_token?: string | undefined
  identifier: string
  method: string
  password: string
  password_identifier?: string | undefined
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateLoginFlowWithOidcMethod = {
  csrf_token?: string | undefined
  id_token?: string | undefined
  id_token_nonce?: string | undefined
  method: string
  provider: string
  traits?: { [x: string]: unknown } | undefined
  transient_payload?: { [x: string]: unknown } | undefined
  upstream_parameters?: { [x: string]: unknown } | undefined
}
type UpdateLoginFlowWithSamlMethod = {
  csrf_token?: string | undefined
  method: string
  provider: string
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateLoginFlowWithTotpMethod = {
  csrf_token?: string | undefined
  method: string
  totp_code: string
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateLoginFlowWithWebAuthnMethod = {
  csrf_token?: string | undefined
  identifier: string
  method: string
  transient_payload?: { [x: string]: unknown } | undefined
  webauthn_login?: string | undefined
}
type UpdateLoginFlowWithLookupSecretMethod = {
  csrf_token?: string | undefined
  lookup_secret: string
  method: string
}
type UpdateLoginFlowWithCodeMethod = {
  address?: string | undefined
  code?: string | undefined
  csrf_token: string
  identifier?: string | undefined
  method: string
  resend?: string | undefined
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateLoginFlowWithPasskeyMethod = {
  csrf_token?: string | undefined
  method: string
  passkey_login?: string | undefined
}
type UpdateLoginFlowWithIdentifierFirstMethod = {
  csrf_token?: string | undefined
  identifier: string
  method: string
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateLoginFlowBody =
  | UpdateLoginFlowWithPasswordMethod
  | UpdateLoginFlowWithOidcMethod
  | UpdateLoginFlowWithSamlMethod
  | UpdateLoginFlowWithTotpMethod
  | UpdateLoginFlowWithWebAuthnMethod
  | UpdateLoginFlowWithLookupSecretMethod
  | UpdateLoginFlowWithCodeMethod
  | UpdateLoginFlowWithPasskeyMethod
  | UpdateLoginFlowWithIdentifierFirstMethod
type PerformNativeLogoutBody = { session_token: string }
type LogoutFlow = { logout_token: string; logout_url: string }
type UpdateRecoveryFlowWithLinkMethod = {
  csrf_token?: string | undefined
  email: string
  method: 'link' | 'code'
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateRecoveryFlowWithCodeMethod = {
  code?: string | undefined
  csrf_token?: string | undefined
  email?: string | undefined
  method: 'link' | 'code'
  recovery_address?: string | undefined
  recovery_confirm_address?: string | undefined
  recovery_select_address?: string | undefined
  screen?: string | undefined
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateRecoveryFlowBody = UpdateRecoveryFlowWithLinkMethod | UpdateRecoveryFlowWithCodeMethod
type RecoveryFlow = {
  active?: string | undefined
  continue_with?: ContinueWith[] | undefined
  expires_at: string
  id: string
  issued_at: string
  request_url: string
  return_to?: string | undefined
  state: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
  type: SelfServiceFlowType
  ui: UiContainer
}
type UpdateRegistrationFlowWithPasswordMethod = {
  csrf_token?: string | undefined
  method: string
  password: string
  traits: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateRegistrationFlowWithOidcMethod = {
  csrf_token?: string | undefined
  id_token?: string | undefined
  id_token_nonce?: string | undefined
  method: string
  provider: string
  traits?: { [x: string]: unknown } | undefined
  transient_payload?: { [x: string]: unknown } | undefined
  upstream_parameters?: { [x: string]: unknown } | undefined
}
type UpdateRegistrationFlowWithSamlMethod = {
  csrf_token?: string | undefined
  method: string
  provider: string
  traits?: { [x: string]: unknown } | undefined
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateRegistrationFlowWithWebAuthnMethod = {
  csrf_token?: string | undefined
  method: string
  traits: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
  webauthn_register?: string | undefined
  webauthn_register_displayname?: string | undefined
}
type UpdateRegistrationFlowWithCodeMethod = {
  code?: string | undefined
  csrf_token?: string | undefined
  method: string
  resend?: string | undefined
  traits: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateRegistrationFlowWithPasskeyMethod = {
  csrf_token?: string | undefined
  method: string
  passkey_register?: string | undefined
  traits: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateRegistrationFlowWithProfileMethod = {
  csrf_token?: string | undefined
  method: string
  screen?: 'credential-selection' | 'previous' | undefined
  traits: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateRegistrationFlowBody =
  | UpdateRegistrationFlowWithPasswordMethod
  | UpdateRegistrationFlowWithOidcMethod
  | UpdateRegistrationFlowWithSamlMethod
  | UpdateRegistrationFlowWithWebAuthnMethod
  | UpdateRegistrationFlowWithCodeMethod
  | UpdateRegistrationFlowWithPasskeyMethod
  | UpdateRegistrationFlowWithProfileMethod
type SuccessfulNativeRegistration = {
  continue_with?: ContinueWith[] | undefined
  identity: Identity
  session?: Session | undefined
  session_token?: string | undefined
}
type RegistrationFlow = {
  active?:
    | 'password'
    | 'oidc'
    | 'totp'
    | 'lookup_secret'
    | 'webauthn'
    | 'code'
    | 'passkey'
    | 'profile'
    | 'saml'
    | 'deviceauthn'
    | 'identifier_first'
    | 'link_recovery'
    | 'code_recovery'
    | undefined
  expires_at: string
  id: string
  identity_schema?: string | undefined
  issued_at: string
  oauth2_login_challenge?: string | undefined
  oauth2_login_request?: OAuth2LoginRequest | undefined
  organization_id?: NullUUID | undefined
  request_url: string
  return_to?: string | undefined
  session_token_exchange_code?: string | undefined
  state: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
  type: SelfServiceFlowType
  ui: UiContainer
}
type UpdateSettingsFlowWithPasswordMethod = {
  csrf_token?: string | undefined
  method: string
  password: string
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateSettingsFlowWithProfileMethod = {
  csrf_token?: string | undefined
  method: string
  traits: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateSettingsFlowWithOidcMethod = {
  flow?: string | undefined
  link?: string | undefined
  method: string
  traits?: { [x: string]: unknown } | undefined
  transient_payload?: { [x: string]: unknown } | undefined
  unlink?: string | undefined
  upstream_parameters?: { [x: string]: unknown } | undefined
}
type UpdateSettingsFlowWithSamlMethod = {
  csrf_token?: string | undefined
  flow?: string | undefined
  link?: string | undefined
  method: string
  traits?: { [x: string]: unknown } | undefined
  transient_payload?: { [x: string]: unknown } | undefined
  unlink?: string | undefined
}
type UpdateSettingsFlowWithTotpMethod = {
  csrf_token?: string | undefined
  method: string
  totp_code?: string | undefined
  totp_unlink?: boolean | undefined
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateSettingsFlowWithWebAuthnMethod = {
  csrf_token?: string | undefined
  method: string
  transient_payload?: { [x: string]: unknown } | undefined
  webauthn_register?: string | undefined
  webauthn_register_displayname?: string | undefined
  webauthn_remove?: string | undefined
}
type UpdateSettingsFlowWithLookupMethod = {
  csrf_token?: string | undefined
  lookup_secret_confirm?: boolean | undefined
  lookup_secret_disable?: boolean | undefined
  lookup_secret_regenerate?: boolean | undefined
  lookup_secret_reveal?: boolean | undefined
  method: string
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateSettingsFlowWithPasskeyMethod = {
  csrf_token?: string | undefined
  method: string
  passkey_remove?: string | undefined
  passkey_settings_register?: string | undefined
}
type UpdateSettingsFlowBody =
  | UpdateSettingsFlowWithPasswordMethod
  | UpdateSettingsFlowWithProfileMethod
  | UpdateSettingsFlowWithOidcMethod
  | UpdateSettingsFlowWithSamlMethod
  | UpdateSettingsFlowWithTotpMethod
  | UpdateSettingsFlowWithWebAuthnMethod
  | UpdateSettingsFlowWithLookupMethod
  | UpdateSettingsFlowWithPasskeyMethod
type SettingsFlow = {
  active?: string | undefined
  continue_with?: ContinueWith[] | undefined
  expires_at: string
  id: string
  identity: Identity
  issued_at: string
  organization_id?: NullUUID | undefined
  request_url: string
  return_to?: string | undefined
  state: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
  type: SelfServiceFlowType
  ui: UiContainer
}
type UpdateVerificationFlowWithLinkMethod = {
  csrf_token?: string | undefined
  email: string
  method: 'link' | 'code'
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateVerificationFlowWithCodeMethod = {
  code?: string | undefined
  csrf_token?: string | undefined
  email?: string | undefined
  method: 'link' | 'code'
  transient_payload?: { [x: string]: unknown } | undefined
}
type UpdateVerificationFlowBody =
  | UpdateVerificationFlowWithLinkMethod
  | UpdateVerificationFlowWithCodeMethod
type VerificationFlow = {
  active?: string | undefined
  expires_at?: string | undefined
  id: string
  issued_at?: string | undefined
  request_url?: string | undefined
  return_to?: string | undefined
  state: { [x: string]: unknown }
  transient_payload?: { [x: string]: unknown } | undefined
  type: SelfServiceFlowType
  ui: UiContainer
}
type DeleteMySessionsCount = { count?: bigint | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/.well-known/change-password': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 303 }
        | { input: {}; output: ErrorGeneric; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/.well-known/ory/webauthn.js': {
      $get: { input: {}; output: WebAuthnJavaScript; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/courier/messages': {
      $get:
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                status?: CourierMessageStatus | undefined
                recipient?: string | undefined
              }
            }
            output: Message[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                status?: CourierMessageStatus | undefined
                recipient?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                status?: CourierMessageStatus | undefined
                recipient?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/courier/messages/:id': {
      $get:
        | { input: { param: { id: string } }; output: Message; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/identities': {
      $get:
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
                consistency?: '' | 'strong' | 'eventual' | undefined
                ids?: string[] | undefined
                credentials_identifier?: string | undefined
                preview_credentials_identifier_similar?: string | undefined
                include_credential?: string[] | undefined
                organization_id?: string | undefined
              }
            }
            output: Identity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
                consistency?: '' | 'strong' | 'eventual' | undefined
                ids?: string[] | undefined
                credentials_identifier?: string | undefined
                preview_credentials_identifier_similar?: string | undefined
                include_credential?: string[] | undefined
                organization_id?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { json: PatchIdentitiesBody }
            output: BatchPatchIdentitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PatchIdentitiesBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PatchIdentitiesBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: PatchIdentitiesBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CreateIdentityBody }
            output: Identity
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/identities/by/external/:externalID': {
      $get:
        | {
            input: { param: { externalID: string } } & {
              query: {
                include_credential?:
                  | (
                      | 'password'
                      | 'oidc'
                      | 'totp'
                      | 'lookup_secret'
                      | 'webauthn'
                      | 'code'
                      | 'passkey'
                      | 'profile'
                      | 'saml'
                      | 'deviceauthn'
                      | 'identifier_first'
                      | 'link_recovery'
                      | 'code_recovery'
                    )[]
                  | undefined
              }
            }
            output: Identity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalID: string } } & {
              query: {
                include_credential?:
                  | (
                      | 'password'
                      | 'oidc'
                      | 'totp'
                      | 'lookup_secret'
                      | 'webauthn'
                      | 'code'
                      | 'passkey'
                      | 'profile'
                      | 'saml'
                      | 'deviceauthn'
                      | 'identifier_first'
                      | 'link_recovery'
                      | 'code_recovery'
                    )[]
                  | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { externalID: string } } & {
              query: {
                include_credential?:
                  | (
                      | 'password'
                      | 'oidc'
                      | 'totp'
                      | 'lookup_secret'
                      | 'webauthn'
                      | 'code'
                      | 'passkey'
                      | 'profile'
                      | 'saml'
                      | 'deviceauthn'
                      | 'identifier_first'
                      | 'link_recovery'
                      | 'code_recovery'
                    )[]
                  | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/identities/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include_credential?:
                  | (
                      | 'password'
                      | 'oidc'
                      | 'totp'
                      | 'lookup_secret'
                      | 'webauthn'
                      | 'code'
                      | 'passkey'
                      | 'profile'
                      | 'saml'
                      | 'deviceauthn'
                      | 'identifier_first'
                      | 'link_recovery'
                      | 'code_recovery'
                    )[]
                  | undefined
              }
            }
            output: Identity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_credential?:
                  | (
                      | 'password'
                      | 'oidc'
                      | 'totp'
                      | 'lookup_secret'
                      | 'webauthn'
                      | 'code'
                      | 'passkey'
                      | 'profile'
                      | 'saml'
                      | 'deviceauthn'
                      | 'identifier_first'
                      | 'link_recovery'
                      | 'code_recovery'
                    )[]
                  | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_credential?:
                  | (
                      | 'password'
                      | 'oidc'
                      | 'totp'
                      | 'lookup_secret'
                      | 'webauthn'
                      | 'code'
                      | 'passkey'
                      | 'profile'
                      | 'saml'
                      | 'deviceauthn'
                      | 'identifier_first'
                      | 'link_recovery'
                      | 'code_recovery'
                    )[]
                  | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: Identity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateIdentityBody }
            output: Identity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: UpdateIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/identities/:id/credentials/:type': {
      $delete:
        | {
            input: {
              param: {
                id: string
                type:
                  | 'password'
                  | 'oidc'
                  | 'totp'
                  | 'lookup_secret'
                  | 'webauthn'
                  | 'code'
                  | 'passkey'
                  | 'profile'
                  | 'saml'
                  | 'deviceauthn'
                  | 'identifier_first'
                  | 'link_recovery'
                  | 'code_recovery'
              }
            } & { query: { identifier?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                id: string
                type:
                  | 'password'
                  | 'oidc'
                  | 'totp'
                  | 'lookup_secret'
                  | 'webauthn'
                  | 'code'
                  | 'passkey'
                  | 'profile'
                  | 'saml'
                  | 'deviceauthn'
                  | 'identifier_first'
                  | 'link_recovery'
                  | 'code_recovery'
              }
            } & { query: { identifier?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id: string
                type:
                  | 'password'
                  | 'oidc'
                  | 'totp'
                  | 'lookup_secret'
                  | 'webauthn'
                  | 'code'
                  | 'passkey'
                  | 'profile'
                  | 'saml'
                  | 'deviceauthn'
                  | 'identifier_first'
                  | 'link_recovery'
                  | 'code_recovery'
              }
            } & { query: { identifier?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                id: string
                type:
                  | 'password'
                  | 'oidc'
                  | 'totp'
                  | 'lookup_secret'
                  | 'webauthn'
                  | 'code'
                  | 'passkey'
                  | 'profile'
                  | 'saml'
                  | 'deviceauthn'
                  | 'identifier_first'
                  | 'link_recovery'
                  | 'code_recovery'
              }
            } & { query: { identifier?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/identities/:id/sessions': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
                active?: boolean | undefined
              }
            }
            output: Session[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
                active?: boolean | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
                active?: boolean | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
                active?: boolean | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/recovery/code': {
      $post:
        | {
            input: { json: CreateRecoveryCodeForIdentityBody }
            output: RecoveryCodeForIdentity
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateRecoveryCodeForIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateRecoveryCodeForIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateRecoveryCodeForIdentityBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/recovery/link': {
      $post:
        | {
            input: { query: { return_to?: string | undefined } } & {
              json: CreateRecoveryLinkForIdentityBody
            }
            output: RecoveryLinkForIdentity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { return_to?: string | undefined } } & {
              json: CreateRecoveryLinkForIdentityBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { return_to?: string | undefined } } & {
              json: CreateRecoveryLinkForIdentityBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { return_to?: string | undefined } } & {
              json: CreateRecoveryLinkForIdentityBody
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/sessions': {
      $get:
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                active?: boolean | undefined
                expand?: ('identity' | 'devices')[] | undefined
              }
            }
            output: Session[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                active?: boolean | undefined
                expand?: ('identity' | 'devices')[] | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                active?: boolean | undefined
                expand?: ('identity' | 'devices')[] | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ManageSessionsBody }
            output: ManageSessionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ManageSessionsBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ManageSessionsBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ManageSessionsBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/sessions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { expand?: ('identity' | 'devices')[] | undefined }
            }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: ('identity' | 'devices')[] | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { expand?: ('identity' | 'devices')[] | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/sessions/:id/extend': {
      $patch:
        | { input: { param: { id: string } }; output: Session; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/test-login-flows': {
      $post:
        | {
            input: { json: CreateTestLoginFlowBody }
            output: LoginFlow
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateTestLoginFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateTestLoginFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateTestLoginFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/health/alive': {
      $get:
        | { input: {}; output: { status: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/health/ready': {
      $get:
        | { input: {}; output: { status: string }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors: { [x: string]: string } }
            outputFormat: 'json'
            status: 503
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/schemas': {
      $get:
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
              }
            }
            output: IdentitySchemas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/schemas/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: IdentitySchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/errors': {
      $get:
        | { input: { query: { id: string } }; output: FlowError; outputFormat: 'json'; status: 200 }
        | {
            input: { query: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/self-service/fed-cm/parameters': {
      $get:
        | { input: {}; output: CreateFedcmFlowResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorGeneric; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorGeneric; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/self-service/fed-cm/token': {
      $post:
        | {
            input: { json: UpdateFedcmFlowBody } & { form: UpdateFedcmFlowBody }
            output: SuccessfulNativeLogin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateFedcmFlowBody } & { form: UpdateFedcmFlowBody }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { json: UpdateFedcmFlowBody } & { form: UpdateFedcmFlowBody }
            output: LoginFlow
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UpdateFedcmFlowBody } & { form: UpdateFedcmFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { json: UpdateFedcmFlowBody } & { form: UpdateFedcmFlowBody }
            output: ErrorBrowserLocationChangeRequired
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: UpdateFedcmFlowBody } & { form: UpdateFedcmFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/login': {
      $post:
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateLoginFlowBody } & { form: UpdateLoginFlowBody }
            output: SuccessfulNativeLogin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateLoginFlowBody } & { form: UpdateLoginFlowBody }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateLoginFlowBody } & { form: UpdateLoginFlowBody }
            output: LoginFlow
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateLoginFlowBody } & { form: UpdateLoginFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateLoginFlowBody } & { form: UpdateLoginFlowBody }
            output: ErrorBrowserLocationChangeRequired
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateLoginFlowBody } & { form: UpdateLoginFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/login/api': {
      $get:
        | {
            input: {
              query: {
                refresh?: boolean | undefined
                aal?: string | undefined
                return_session_token_exchange_code?: boolean | undefined
                return_to?: string | undefined
                organization?: string | undefined
                via?: string | undefined
                identity_schema?: string | undefined
              }
            } & { header: { 'X-Session-Token'?: string | undefined } }
            output: LoginFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                refresh?: boolean | undefined
                aal?: string | undefined
                return_session_token_exchange_code?: boolean | undefined
                return_to?: string | undefined
                organization?: string | undefined
                via?: string | undefined
                identity_schema?: string | undefined
              }
            } & { header: { 'X-Session-Token'?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                refresh?: boolean | undefined
                aal?: string | undefined
                return_session_token_exchange_code?: boolean | undefined
                return_to?: string | undefined
                organization?: string | undefined
                via?: string | undefined
                identity_schema?: string | undefined
              }
            } & { header: { 'X-Session-Token'?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/login/browser': {
      $get:
        | {
            input: {
              query: {
                refresh?: boolean | undefined
                aal?: string | undefined
                return_to?: string | undefined
                login_challenge?: string | undefined
                organization?: string | undefined
                via?: string | undefined
                identity_schema?: string | undefined
              }
            } & { header: { Cookie?: string | undefined } }
            output: LoginFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                refresh?: boolean | undefined
                aal?: string | undefined
                return_to?: string | undefined
                login_challenge?: string | undefined
                organization?: string | undefined
                via?: string | undefined
                identity_schema?: string | undefined
              }
            } & { header: { Cookie?: string | undefined } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: {
                refresh?: boolean | undefined
                aal?: string | undefined
                return_to?: string | undefined
                login_challenge?: string | undefined
                organization?: string | undefined
                via?: string | undefined
                identity_schema?: string | undefined
              }
            } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                refresh?: boolean | undefined
                aal?: string | undefined
                return_to?: string | undefined
                login_challenge?: string | undefined
                organization?: string | undefined
                via?: string | undefined
                identity_schema?: string | undefined
              }
            } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/login/flows': {
      $get:
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: LoginFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/login/test': {
      $delete:
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/logout': {
      $get:
        | {
            input: { query: { token?: string | undefined; return_to?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { token?: string | undefined; return_to?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { token?: string | undefined; return_to?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/logout/api': {
      $delete:
        | {
            input: { json: PerformNativeLogoutBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: PerformNativeLogoutBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PerformNativeLogoutBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/logout/browser': {
      $get:
        | {
            input: { query: { return_to?: string | undefined } } & {
              header: { cookie?: string | undefined }
            }
            output: LogoutFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { return_to?: string | undefined } } & {
              header: { cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { return_to?: string | undefined } } & {
              header: { cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { return_to?: string | undefined } } & {
              header: { cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/self-service/recovery': {
      $post:
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateRecoveryFlowBody } & { form: UpdateRecoveryFlowBody }
            output: RecoveryFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateRecoveryFlowBody } & { form: UpdateRecoveryFlowBody }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateRecoveryFlowBody } & { form: UpdateRecoveryFlowBody }
            output: RecoveryFlow
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateRecoveryFlowBody } & { form: UpdateRecoveryFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateRecoveryFlowBody } & { form: UpdateRecoveryFlowBody }
            output: ErrorBrowserLocationChangeRequired
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateRecoveryFlowBody } & { form: UpdateRecoveryFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/recovery/api': {
      $get:
        | { input: {}; output: RecoveryFlow; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorGeneric; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorGeneric; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/self-service/recovery/browser': {
      $get:
        | {
            input: { query: { return_to?: string | undefined; skip_settings?: string | undefined } }
            output: RecoveryFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { return_to?: string | undefined; skip_settings?: string | undefined } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { return_to?: string | undefined; skip_settings?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { return_to?: string | undefined; skip_settings?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/recovery/flows': {
      $get:
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: RecoveryFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/registration': {
      $post:
        | {
            input: { query: { flow: string } } & { header: { Cookie?: string | undefined } } & {
              json: UpdateRegistrationFlowBody
            } & { form: UpdateRegistrationFlowBody }
            output: SuccessfulNativeRegistration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { flow: string } } & { header: { Cookie?: string | undefined } } & {
              json: UpdateRegistrationFlowBody
            } & { form: UpdateRegistrationFlowBody }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { flow: string } } & { header: { Cookie?: string | undefined } } & {
              json: UpdateRegistrationFlowBody
            } & { form: UpdateRegistrationFlowBody }
            output: RegistrationFlow
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { flow: string } } & { header: { Cookie?: string | undefined } } & {
              json: UpdateRegistrationFlowBody
            } & { form: UpdateRegistrationFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { flow: string } } & { header: { Cookie?: string | undefined } } & {
              json: UpdateRegistrationFlowBody
            } & { form: UpdateRegistrationFlowBody }
            output: ErrorBrowserLocationChangeRequired
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { flow: string } } & { header: { Cookie?: string | undefined } } & {
              json: UpdateRegistrationFlowBody
            } & { form: UpdateRegistrationFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/registration/api': {
      $get:
        | {
            input: {
              query: {
                return_session_token_exchange_code?: boolean | undefined
                return_to?: string | undefined
                organization?: string | undefined
                identity_schema?: string | undefined
              }
            }
            output: RegistrationFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                return_session_token_exchange_code?: boolean | undefined
                return_to?: string | undefined
                organization?: string | undefined
                identity_schema?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                return_session_token_exchange_code?: boolean | undefined
                return_to?: string | undefined
                organization?: string | undefined
                identity_schema?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/registration/browser': {
      $get:
        | {
            input: {
              query: {
                return_to?: string | undefined
                login_challenge?: string | undefined
                after_verification_return_to?: string | undefined
                organization?: string | undefined
                identity_schema?: string | undefined
              }
            }
            output: RegistrationFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                return_to?: string | undefined
                login_challenge?: string | undefined
                after_verification_return_to?: string | undefined
                organization?: string | undefined
                identity_schema?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: {
                return_to?: string | undefined
                login_challenge?: string | undefined
                after_verification_return_to?: string | undefined
                organization?: string | undefined
                identity_schema?: string | undefined
              }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/registration/flows': {
      $get:
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: RegistrationFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { id: string } } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/settings': {
      $post:
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: SettingsFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: SettingsFlow
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: ErrorBrowserLocationChangeRequired
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { flow: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            } & { json: UpdateSettingsFlowBody } & { form: UpdateSettingsFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/settings/api': {
      $get:
        | {
            input: { query: { organization?: string | undefined } } & {
              header: { 'X-Session-Token'?: string | undefined }
            }
            output: SettingsFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { organization?: string | undefined } } & {
              header: { 'X-Session-Token'?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { organization?: string | undefined } } & {
              header: { 'X-Session-Token'?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/settings/browser': {
      $get:
        | {
            input: {
              query: { return_to?: string | undefined; organization?: string | undefined }
            } & { header: { Cookie?: string | undefined } }
            output: SettingsFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { return_to?: string | undefined; organization?: string | undefined }
            } & { header: { Cookie?: string | undefined } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: { return_to?: string | undefined; organization?: string | undefined }
            } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { return_to?: string | undefined; organization?: string | undefined }
            } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { return_to?: string | undefined; organization?: string | undefined }
            } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { return_to?: string | undefined; organization?: string | undefined }
            } & { header: { Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/settings/flows': {
      $get:
        | {
            input: { query: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: SettingsFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/verification': {
      $post:
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateVerificationFlowBody } & { form: UpdateVerificationFlowBody }
            output: VerificationFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateVerificationFlowBody } & { form: UpdateVerificationFlowBody }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateVerificationFlowBody } & { form: UpdateVerificationFlowBody }
            output: VerificationFlow
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateVerificationFlowBody } & { form: UpdateVerificationFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { flow: string; token?: string | undefined } } & {
              header: { Cookie?: string | undefined }
            } & { json: UpdateVerificationFlowBody } & { form: UpdateVerificationFlowBody }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/verification/api': {
      $get:
        | {
            input: { query: { return_to?: string | undefined } }
            output: VerificationFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { return_to?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { return_to?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/verification/browser': {
      $get:
        | {
            input: { query: { return_to?: string | undefined } }
            output: VerificationFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { return_to?: string | undefined } }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: { query: { return_to?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/self-service/verification/flows': {
      $get:
        | {
            input: { query: { id: string } } & { header: { cookie?: string | undefined } }
            output: VerificationFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id: string } } & { header: { cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { id: string } } & { header: { cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { id: string } } & { header: { cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sessions': {
      $delete:
        | {
            input: {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: DeleteMySessionsCount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
              }
            } & { header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined } }
            output: Session[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
              }
            } & { header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
              }
            } & { header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                per_page?: bigint | undefined
                page?: bigint | undefined
                page_size?: bigint | undefined
                page_token?: string | undefined
              }
            } & { header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sessions/token-exchange': {
      $get:
        | {
            input: { query: { init_code: string; return_to_code: string } }
            output: SuccessfulNativeLogin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { init_code: string; return_to_code: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { init_code: string; return_to_code: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { init_code: string; return_to_code: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { init_code: string; return_to_code: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { init_code: string; return_to_code: string } }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sessions/whoami': {
      $get:
        | {
            input: { query: { tokenize_as?: string | undefined } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: Session
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tokenize_as?: string | undefined } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { tokenize_as?: string | undefined } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { tokenize_as?: string | undefined } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sessions/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Session-Token'?: string | undefined; Cookie?: string | undefined }
            }
            output: ErrorGeneric
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/version': {
      $get: { input: {}; output: { version: string }; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
