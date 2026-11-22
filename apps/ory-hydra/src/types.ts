type JsonWebKey = {
  alg: string
  crv?: string | undefined
  d?: string | undefined
  dp?: string | undefined
  dq?: string | undefined
  e?: string | undefined
  k?: string | undefined
  kid: string
  kty: string
  n?: string | undefined
  p?: string | undefined
  q?: string | undefined
  qi?: string | undefined
  use: string
  x?: string | undefined
  x5c?: string[] | undefined
  y?: string | undefined
}
type JsonWebKeySet = { keys?: JsonWebKey[] | undefined }
type ErrorOAuth2 = {
  error?: string | undefined
  error_debug?: string | undefined
  error_description?: string | undefined
  error_hint?: string | undefined
  status_code?: bigint | undefined
}
type CredentialSupportedDraft00 = {
  cryptographic_binding_methods_supported?: string[] | undefined
  cryptographic_suites_supported?: string[] | undefined
  format?: string | undefined
  types?: string[] | undefined
}
type OidcConfiguration = {
  authorization_endpoint: string
  backchannel_logout_session_supported?: boolean | undefined
  backchannel_logout_supported?: boolean | undefined
  claims_parameter_supported?: boolean | undefined
  claims_supported?: string[] | undefined
  code_challenge_methods_supported?: string[] | undefined
  credentials_endpoint_draft_00?: string | undefined
  credentials_supported_draft_00?: CredentialSupportedDraft00[] | undefined
  device_authorization_endpoint: string
  end_session_endpoint?: string | undefined
  frontchannel_logout_session_supported?: boolean | undefined
  frontchannel_logout_supported?: boolean | undefined
  grant_types_supported?: string[] | undefined
  id_token_signed_response_alg: string[]
  id_token_signing_alg_values_supported: string[]
  issuer: string
  jwks_uri: string
  registration_endpoint?: string | undefined
  request_object_signing_alg_values_supported?: string[] | undefined
  request_parameter_supported?: boolean | undefined
  request_uri_parameter_supported?: boolean | undefined
  require_request_uri_registration?: boolean | undefined
  response_modes_supported?: string[] | undefined
  response_types_supported: string[]
  revocation_endpoint?: string | undefined
  scopes_supported?: string[] | undefined
  subject_types_supported: string[]
  token_endpoint: string
  token_endpoint_auth_methods_supported?: string[] | undefined
  userinfo_endpoint?: string | undefined
  userinfo_signed_response_alg: string[]
  userinfo_signing_alg_values_supported?: string[] | undefined
}
type NullDuration = string
type JSONRawMessage = { [x: string]: unknown }
type OAuth2Client = {
  access_token_strategy?: string | undefined
  allowed_cors_origins?: string[] | undefined
  audience?: string[] | undefined
  authorization_code_grant_access_token_lifespan?: NullDuration | undefined
  authorization_code_grant_id_token_lifespan?: NullDuration | undefined
  authorization_code_grant_refresh_token_lifespan?: NullDuration | undefined
  backchannel_logout_session_required?: boolean | undefined
  backchannel_logout_uri?: string | undefined
  client_credentials_grant_access_token_lifespan?: NullDuration | undefined
  client_id?: string | undefined
  client_name?: string | undefined
  client_secret?: string | undefined
  client_secret_expires_at?: bigint | undefined
  client_uri?: string | undefined
  contacts?: string[] | undefined
  created_at?: string | undefined
  device_authorization_grant_access_token_lifespan?: NullDuration | undefined
  device_authorization_grant_id_token_lifespan?: NullDuration | undefined
  device_authorization_grant_refresh_token_lifespan?: NullDuration | undefined
  frontchannel_logout_session_required?: boolean | undefined
  frontchannel_logout_uri?: string | undefined
  grant_types?: string[] | undefined
  implicit_grant_access_token_lifespan?: NullDuration | undefined
  implicit_grant_id_token_lifespan?: NullDuration | undefined
  jwks?: JsonWebKeySet | undefined
  jwks_uri?: string | undefined
  jwt_bearer_grant_access_token_lifespan?: NullDuration | undefined
  logo_uri?: string | undefined
  metadata?: JSONRawMessage | undefined
  owner?: string | undefined
  policy_uri?: string | undefined
  post_logout_redirect_uris?: string[] | undefined
  redirect_uris?: string[] | undefined
  refresh_token_grant_access_token_lifespan?: NullDuration | undefined
  refresh_token_grant_id_token_lifespan?: NullDuration | undefined
  refresh_token_grant_refresh_token_lifespan?: NullDuration | undefined
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
type GenericError = {
  code?: bigint | undefined
  debug?: string | undefined
  details?: { [x: string]: unknown } | undefined
  id?: string | undefined
  message: string
  reason?: string | undefined
  request?: string | undefined
  status?: string | undefined
}
type JsonPatch = {
  from?: string | undefined
  op: string
  path: string
  value?: { [x: string]: unknown } | undefined
}
type JsonPatchDocument = JsonPatch[]
type OAuth2ClientTokenLifespans = {
  authorization_code_grant_access_token_lifespan?: NullDuration | undefined
  authorization_code_grant_id_token_lifespan?: NullDuration | undefined
  authorization_code_grant_refresh_token_lifespan?: NullDuration | undefined
  client_credentials_grant_access_token_lifespan?: NullDuration | undefined
  device_authorization_grant_access_token_lifespan?: NullDuration | undefined
  device_authorization_grant_id_token_lifespan?: NullDuration | undefined
  device_authorization_grant_refresh_token_lifespan?: NullDuration | undefined
  implicit_grant_access_token_lifespan?: NullDuration | undefined
  implicit_grant_id_token_lifespan?: NullDuration | undefined
  jwt_bearer_grant_access_token_lifespan?: NullDuration | undefined
  refresh_token_grant_access_token_lifespan?: NullDuration | undefined
  refresh_token_grant_id_token_lifespan?: NullDuration | undefined
  refresh_token_grant_refresh_token_lifespan?: NullDuration | undefined
}
type CreateJsonWebKeySet = { alg: string; kid: string; use: string }
type OAuth2ConsentRequestOpenIDConnectContext = {
  acr_values?: string[] | undefined
  display?: string | undefined
  id_token_hint_claims?: { [x: string]: { [x: string]: unknown } } | undefined
  login_hint?: string | undefined
  ui_locales?: string[] | undefined
}
type OAuth2ConsentRequest = {
  acr?: string | undefined
  amr?: string[] | undefined
  challenge: string
  client?: OAuth2Client | undefined
  consent_request_id?: string | undefined
  context?: JSONRawMessage | undefined
  login_challenge?: string | undefined
  login_session_id?: string | undefined
  oidc_context?: OAuth2ConsentRequestOpenIDConnectContext | undefined
  request_url?: string | undefined
  requested_access_token_audience?: string[] | undefined
  requested_scope?: string[] | undefined
  skip?: boolean | undefined
  subject?: string | undefined
}
type OAuth2RedirectTo = { redirect_to: string }
type AcceptOAuth2ConsentRequestSession = {
  access_token?: { [x: string]: unknown } | undefined
  id_token?: { [x: string]: unknown } | undefined
}
type AcceptOAuth2ConsentRequest = {
  context?: JSONRawMessage | undefined
  grant_access_token_audience?: string[] | undefined
  grant_scope?: string[] | undefined
  remember?: boolean | undefined
  remember_for?: bigint | undefined
  session?: AcceptOAuth2ConsentRequestSession | undefined
}
type RejectOAuth2Request = {
  error?: string | undefined
  error_debug?: string | undefined
  error_description?: string | undefined
  error_hint?: string | undefined
  status_code?: bigint | undefined
}
type AcceptDeviceUserCodeRequest = { user_code?: string | undefined }
type OAuth2LoginRequest = {
  challenge: string
  client: OAuth2Client
  oidc_context?: OAuth2ConsentRequestOpenIDConnectContext | undefined
  request_url: string
  requested_access_token_audience?: string[] | undefined
  requested_scope?: string[] | undefined
  session_id?: string | undefined
  skip: boolean
  subject: string
}
type AcceptOAuth2LoginRequest = {
  acr?: string | undefined
  amr?: string[] | undefined
  context?: JSONRawMessage | undefined
  extend_session_lifespan?: boolean | undefined
  force_subject_identifier?: string | undefined
  identity_provider_session_id?: string | undefined
  remember?: boolean | undefined
  remember_for?: bigint | undefined
  subject: string
}
type OAuth2LogoutRequest = {
  challenge?: string | undefined
  client?: OAuth2Client | undefined
  expires_at?: string | undefined
  request_url?: string | undefined
  requested_at?: string | undefined
  rp_initiated?: boolean | undefined
  sid?: string | undefined
  subject?: string | undefined
}
type NullTime2 = string
type OAuth2ConsentSession = {
  consent_request?: OAuth2ConsentRequest | undefined
  consent_request_id?: string | undefined
  context?: JSONRawMessage | undefined
  grant_access_token_audience?: string[] | undefined
  grant_scope?: string[] | undefined
  handled_at?: NullTime2 | undefined
  remember?: boolean | undefined
  remember_for?: bigint | undefined
  session?: AcceptOAuth2ConsentRequestSession | undefined
}
type OAuth2ConsentSessions = OAuth2ConsentSession[]
type IntrospectedOAuth2Token = {
  active: boolean
  aud?: string[] | undefined
  client_id?: string | undefined
  exp?: bigint | undefined
  ext?: { [x: string]: { [x: string]: unknown } } | undefined
  iat?: bigint | undefined
  iss?: string | undefined
  nbf?: bigint | undefined
  obfuscated_subject?: string | undefined
  scope?: string | undefined
  sub?: string | undefined
  token_type?: string | undefined
  token_use?: string | undefined
  username?: string | undefined
}
type TrustedOAuth2JwtGrantJsonWebKey = { kid?: string | undefined; set?: string | undefined }
type TrustedOAuth2JwtGrantIssuer = {
  allow_any_subject?: boolean | undefined
  created_at?: string | undefined
  expires_at?: string | undefined
  id?: string | undefined
  issuer?: string | undefined
  public_key?: TrustedOAuth2JwtGrantJsonWebKey | undefined
  scope?: string[] | undefined
  subject?: string | undefined
}
type TrustedOAuth2JwtGrantIssuers = TrustedOAuth2JwtGrantIssuer[]
type TrustOAuth2JwtGrantIssuer = {
  allow_any_subject?: boolean | undefined
  expires_at: string
  issuer: string
  jwk: JsonWebKey
  scope: string[]
  subject?: string | undefined
}
type VerifiableCredentialProof = { jwt?: string | undefined; proof_type?: string | undefined }
type CreateVerifiableCredentialRequestBody = {
  format?: string | undefined
  proof?: VerifiableCredentialProof | undefined
  types?: string[] | undefined
}
type VerifiableCredentialResponse = {
  credential_draft_00?: string | undefined
  format?: string | undefined
}
type VerifiableCredentialPrimingResponse = {
  c_nonce?: string | undefined
  c_nonce_expires_in?: bigint | undefined
  error?: string | undefined
  error_debug?: string | undefined
  error_description?: string | undefined
  error_hint?: string | undefined
  format?: string | undefined
  status_code?: bigint | undefined
}
type HealthStatus = { status?: string | undefined }
type DeviceAuthorization = {
  device_code?: string | undefined
  expires_in?: bigint | undefined
  interval?: bigint | undefined
  user_code?: string | undefined
  verification_uri?: string | undefined
  verification_uri_complete?: string | undefined
}
type OAuth2TokenExchange = {
  access_token?: string | undefined
  expires_in?: bigint | undefined
  id_token?: string | undefined
  refresh_token?: string | undefined
  scope?: string | undefined
  token_type?: string | undefined
}
type OidcUserInfo = {
  birthdate?: string | undefined
  email?: string | undefined
  email_verified?: boolean | undefined
  family_name?: string | undefined
  gender?: string | undefined
  given_name?: string | undefined
  locale?: string | undefined
  middle_name?: string | undefined
  name?: string | undefined
  nickname?: string | undefined
  phone_number?: string | undefined
  phone_number_verified?: boolean | undefined
  picture?: string | undefined
  preferred_username?: string | undefined
  profile?: string | undefined
  sub?: string | undefined
  updated_at?: bigint | undefined
  website?: string | undefined
  zoneinfo?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/.well-known/jwks.json': {
      $get:
        | { input: {}; output: JsonWebKeySet; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/.well-known/openid-configuration': {
      $get:
        | { input: {}; output: OidcConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/clients': {
      $get:
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                client_name?: string | undefined
                owner?: string | undefined
              }
            }
            output: OAuth2Client[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                client_name?: string | undefined
                owner?: string | undefined
              }
            }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: OAuth2Client }; output: OAuth2Client; outputFormat: 'json'; status: 201 }
        | { input: { json: OAuth2Client }; output: ErrorOAuth2; outputFormat: 'json'; status: 400 }
        | { input: { json: OAuth2Client }; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/clients/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: JsonPatchDocument }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OAuth2Client }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OAuth2Client }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: OAuth2Client }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: OAuth2Client }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/clients/:id/lifespans': {
      $put:
        | {
            input: { param: { id: string } } & { json: OAuth2ClientTokenLifespans }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OAuth2ClientTokenLifespans }
            output: GenericError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/clients/:id/secrets/rotate': {
      $delete:
        | {
            input: { param: { id: string } }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { id: string } }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/keys/:set': {
      $delete:
        | { input: { param: { set: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { set: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { set: string } }
            output: JsonWebKeySet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { set: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { set: string } } & { json: CreateJsonWebKeySet }
            output: JsonWebKeySet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { set: string } } & { json: CreateJsonWebKeySet }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { set: string } } & { json: JsonWebKeySet }
            output: JsonWebKeySet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { set: string } } & { json: JsonWebKeySet }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/keys/:set/:kid': {
      $delete:
        | {
            input: { param: { set: string; kid: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { set: string; kid: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { set: string; kid: string } }
            output: JsonWebKeySet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { set: string; kid: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { set: string; kid: string } } & { json: JsonWebKey }
            output: JsonWebKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { set: string; kid: string } } & { json: JsonWebKey }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/consent': {
      $get:
        | {
            input: { query: { consent_challenge: string } }
            output: OAuth2ConsentRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { consent_challenge: string } }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { consent_challenge: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/consent/accept': {
      $put:
        | {
            input: { query: { consent_challenge: string } } & { json: AcceptOAuth2ConsentRequest }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { consent_challenge: string } } & { json: AcceptOAuth2ConsentRequest }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/consent/reject': {
      $put:
        | {
            input: { query: { consent_challenge: string } } & { json: RejectOAuth2Request }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { consent_challenge: string } } & { json: RejectOAuth2Request }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/device/accept': {
      $put:
        | {
            input: { query: { device_challenge: string } } & { json: AcceptDeviceUserCodeRequest }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { device_challenge: string } } & { json: AcceptDeviceUserCodeRequest }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/login': {
      $get:
        | {
            input: { query: { login_challenge: string } }
            output: OAuth2LoginRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { login_challenge: string } }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { query: { login_challenge: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/login/accept': {
      $put:
        | {
            input: { query: { login_challenge: string } } & { json: AcceptOAuth2LoginRequest }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { login_challenge: string } } & { json: AcceptOAuth2LoginRequest }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/login/reject': {
      $put:
        | {
            input: { query: { login_challenge: string } } & { json: RejectOAuth2Request }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { login_challenge: string } } & { json: RejectOAuth2Request }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/logout': {
      $get:
        | {
            input: { query: { logout_challenge: string } }
            output: OAuth2LogoutRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { logout_challenge: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/logout/accept': {
      $put:
        | {
            input: { query: { logout_challenge: string } }
            output: OAuth2RedirectTo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { logout_challenge: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/requests/logout/reject': {
      $put:
        | {
            input: { query: { logout_challenge: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { logout_challenge: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/sessions/consent': {
      $delete:
        | {
            input: {
              query: {
                subject?: string | undefined
                client?: string | undefined
                consent_request_id?: string | undefined
                all?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                subject?: string | undefined
                client?: string | undefined
                consent_request_id?: string | undefined
                all?: boolean | undefined
              }
            }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                subject: string
                login_session_id?: string | undefined
              }
            }
            output: OAuth2ConsentSessions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                subject: string
                login_session_id?: string | undefined
              }
            }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/auth/sessions/login': {
      $delete:
        | {
            input: { query: { subject?: string | undefined; sid?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { subject?: string | undefined; sid?: string | undefined } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/introspect': {
      $post:
        | {
            input: { json: { scope?: string | undefined; token: string } } & {
              form: { scope?: string | undefined; token: string }
            }
            output: IntrospectedOAuth2Token
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { scope?: string | undefined; token: string } } & {
              form: { scope?: string | undefined; token: string }
            }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/oauth2/tokens': {
      $delete:
        | { input: { query: { client_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { query: { client_id: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/trust/grants/jwt-bearer/issuers': {
      $get:
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                issuer?: string | undefined
              }
            }
            output: TrustedOAuth2JwtGrantIssuers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: bigint | undefined
                page_token?: string | undefined
                issuer?: string | undefined
              }
            }
            output: GenericError
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: TrustOAuth2JwtGrantIssuer }
            output: TrustedOAuth2JwtGrantIssuer
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TrustOAuth2JwtGrantIssuer }
            output: GenericError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/trust/grants/jwt-bearer/issuers/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } }
            output: TrustedOAuth2JwtGrantIssuer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credentials': {
      $post:
        | {
            input: { json: CreateVerifiableCredentialRequestBody }
            output: VerifiableCredentialResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateVerifiableCredentialRequestBody }
            output: VerifiableCredentialPrimingResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateVerifiableCredentialRequestBody }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/health/alive': {
      $get:
        | { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: GenericError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/health/ready': {
      $get:
        | { input: {}; output: { status?: string | undefined }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: { [x: string]: string } | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/oauth2/auth': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 302 }
        | { input: {}; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/oauth2/device/auth': {
      $post:
        | { input: {}; output: DeviceAuthorization; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/oauth2/device/verify': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 302 }
        | { input: {}; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/oauth2/register': {
      $post:
        | { input: { json: OAuth2Client }; output: OAuth2Client; outputFormat: 'json'; status: 201 }
        | { input: { json: OAuth2Client }; output: ErrorOAuth2; outputFormat: 'json'; status: 400 }
        | { input: { json: OAuth2Client }; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/oauth2/register/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: GenericError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: OAuth2Client }
            output: OAuth2Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: OAuth2Client }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: OAuth2Client }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/revoke': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token: string
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token: string
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token: string
              }
            }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth2/sessions/logout': {
      $get: { input: {}; output: {}; outputFormat: string; status: 302 }
    }
  } & {
    '/oauth2/token': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                code?: string | undefined
                grant_type: string
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                code?: string | undefined
                grant_type: string
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
              }
            }
            output: OAuth2TokenExchange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                code?: string | undefined
                grant_type: string
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                code?: string | undefined
                grant_type: string
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
              }
            }
            output: ErrorOAuth2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/userinfo': {
      $get:
        | { input: {}; output: OidcUserInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorOAuth2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/version': {
      $get: {
        input: {}
        output: { version?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
