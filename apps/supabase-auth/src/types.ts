type GoTrueSecurity = { captcha_token?: string | undefined }
type MFAFactorSchema = {
  id?: string | undefined
  status?: string | undefined
  friendly_name?: string | undefined
  factor_type?: string | undefined
  webauthn_credential?: string | undefined
  phone?: (string | null) | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  last_challenged_at?: (string | null) | undefined
}
type IdentitySchema = {
  identity_id?: string | undefined
  id?: string | undefined
  user_id?: string | undefined
  identity_data?: { [x: string]: unknown } | undefined
  provider?: string | undefined
  last_sign_in_at?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  email?: string | undefined
}
type UserSchema = {
  id?: string | undefined
  aud?: string | undefined
  role?: string | undefined
  email?: string | undefined
  email_confirmed_at?: string | undefined
  phone?: string | undefined
  phone_confirmed_at?: string | undefined
  confirmation_sent_at?: string | undefined
  confirmed_at?: string | undefined
  recovery_sent_at?: string | undefined
  new_email?: string | undefined
  email_change_sent_at?: string | undefined
  new_phone?: string | undefined
  phone_change_sent_at?: string | undefined
  reauthentication_sent_at?: string | undefined
  last_sign_in_at?: string | undefined
  app_metadata?: { [x: string]: unknown } | undefined
  user_metadata?: { [x: string]: unknown } | undefined
  factors?: MFAFactorSchema[] | undefined
  identities?: IdentitySchema[] | undefined
  banned_until?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
  is_anonymous?: boolean | undefined
}
type AccessTokenResponseSchema = {
  access_token?: string | undefined
  refresh_token?: string | undefined
  token_type?: string | undefined
  expires_in?: number | undefined
  expires_at?: number | undefined
  weak_password?:
    | { reasons?: ('length' | 'characters' | 'pwned')[] | undefined; message?: string | undefined }
    | undefined
  user?: UserSchema | undefined
}
type ErrorSchema = {
  error?: string | undefined
  error_description?: string | undefined
  code?: number | undefined
  msg?: string | undefined
  error_code?: string | undefined
  weak_password?: { reasons?: ('length' | 'characters' | 'pwned')[] | undefined } | undefined
}
type TOTPPhoneChallengeResponse = { id: string; type: 'totp' | 'phone'; expires_at: number }
type PublicKeyCredentialDescriptor = {
  type: 'public-key'
  id: string
  transports?: ('usb' | 'nfc' | 'ble' | 'internal' | 'hybrid')[] | undefined
}
type CredentialCreationOptions = {
  rp: { id: string; name: string }
  user: { id: string | string; name: string; displayName: string }
  challenge: string
  pubKeyCredParams: { type: 'public-key'; alg: number }[]
  timeout?: number | undefined
  excludeCredentials?: PublicKeyCredentialDescriptor[] | undefined
  authenticatorSelection?:
    | {
        authenticatorAttachment?: 'platform' | 'cross-platform' | undefined
        requireResidentKey?: boolean | undefined
        residentKey?: 'required' | 'preferred' | 'discouraged' | undefined
        userVerification?: 'required' | 'preferred' | 'discouraged' | undefined
      }
    | undefined
  attestation?: 'none' | 'indirect' | 'direct' | 'enterprise' | undefined
  attestationFormats?: string[] | undefined
  hints?: ('security-key' | 'client-device' | 'hybrid')[] | undefined
  extensions?: { [x: string]: unknown } | undefined
}
type CredentialRequestOptions = {
  challenge: string
  timeout?: number | undefined
  rpId?: string | undefined
  allowCredentials?: PublicKeyCredentialDescriptor[] | undefined
  userVerification?: 'required' | 'preferred' | 'discouraged' | undefined
  hints?: ('security-key' | 'client-device' | 'hybrid')[] | undefined
  extensions?: { [x: string]: unknown } | undefined
}
type WebAuthnChallengeResponse = {
  id: string
  type: 'webauthn'
  expires_at?: number | undefined
  webauthn:
    | { type: 'create'; credential_options: { publicKey: CredentialCreationOptions } }
    | { type: 'request'; credential_options: { publicKey: CredentialRequestOptions } }
}
type MFARecoveryCodesStatusSchema = {
  id?: string | undefined
  type?: string | undefined
  total?: number | undefined
  remaining?: number | undefined
}
type MFARecoveryCodesSchema = {
  id?: string | undefined
  type?: string | undefined
  friendly_name?: string | undefined
  total?: number | undefined
  codes?: string[] | undefined
}
type SAMLAttributeMappingSchema = { keys?: { [x: string]: unknown } | undefined }
type SSOProviderSchema = {
  id?: string | undefined
  sso_domains?: { domain?: string | undefined }[] | undefined
  saml?:
    | {
        entity_id?: string | undefined
        metadata_xml?: string | undefined
        metadata_url?: string | undefined
        attribute_mapping?: SAMLAttributeMappingSchema | undefined
        dedicated_scope?: boolean | undefined
      }
    | undefined
}
type OAuthClientSchema = {
  client_id?: string | undefined
  client_name?: string | undefined
  client_secret?: string | undefined
  client_type?: 'public' | 'confidential' | undefined
  token_endpoint_auth_method?: 'none' | 'client_secret_basic' | 'client_secret_post' | undefined
  registration_type?: 'dynamic' | 'manual' | undefined
  client_uri?: string | undefined
  logo_uri?: string | undefined
  redirect_uris?: string[] | undefined
  grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
  response_types?: 'code'[] | undefined
  scope?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type CustomOAuthProviderSchema = {
  id: string
  provider_type: 'oauth2' | 'oidc'
  identifier: string
  name: string
  client_id: string
  client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
  client_assertion_audience?: string | undefined
  acceptable_client_ids?: string[] | undefined
  scopes?: string[] | undefined
  pkce_enabled?: boolean | undefined
  attribute_mapping?: { [x: string]: unknown } | undefined
  custom_claims_allowlist?: string[] | undefined
  authorization_params?: { [x: string]: string } | undefined
  enabled?: boolean | undefined
  email_optional?: boolean | undefined
  issuer?: string | undefined
  discovery_url?: string | undefined
  skip_nonce_check?: boolean | undefined
  authorization_url?: string | undefined
  token_url?: string | undefined
  userinfo_url?: string | undefined
  jwks_uri?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/token': {
      $post:
        | {
            input: {
              query: { grant_type: 'password' | 'refresh_token' | 'id_token' | 'pkce' | 'web3' }
            } & {
              json: {
                refresh_token?: string | undefined
                password?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                id_token?: string | undefined
                access_token?: string | undefined
                nonce?: string | undefined
                provider?: 'google' | 'apple' | 'azure' | 'facebook' | 'keycloak' | undefined
                client_id?: string | undefined
                issuer?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
                auth_code?: string | undefined
                code_verifier?: string | undefined
                message?: string | undefined
                signature?: string | undefined
                chain?: 'solana' | 'ethereum' | undefined
              }
            }
            output: AccessTokenResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { grant_type: 'password' | 'refresh_token' | 'id_token' | 'pkce' | 'web3' }
            } & {
              json: {
                refresh_token?: string | undefined
                password?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                id_token?: string | undefined
                access_token?: string | undefined
                nonce?: string | undefined
                provider?: 'google' | 'apple' | 'azure' | 'facebook' | 'keycloak' | undefined
                client_id?: string | undefined
                issuer?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
                auth_code?: string | undefined
                code_verifier?: string | undefined
                message?: string | undefined
                signature?: string | undefined
                chain?: 'solana' | 'ethereum' | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { grant_type: 'password' | 'refresh_token' | 'id_token' | 'pkce' | 'web3' }
            } & {
              json: {
                refresh_token?: string | undefined
                password?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                id_token?: string | undefined
                access_token?: string | undefined
                nonce?: string | undefined
                provider?: 'google' | 'apple' | 'azure' | 'facebook' | 'keycloak' | undefined
                client_id?: string | undefined
                issuer?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
                auth_code?: string | undefined
                code_verifier?: string | undefined
                message?: string | undefined
                signature?: string | undefined
                chain?: 'solana' | 'ethereum' | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { grant_type: 'password' | 'refresh_token' | 'id_token' | 'pkce' | 'web3' }
            } & {
              json: {
                refresh_token?: string | undefined
                password?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                id_token?: string | undefined
                access_token?: string | undefined
                nonce?: string | undefined
                provider?: 'google' | 'apple' | 'azure' | 'facebook' | 'keycloak' | undefined
                client_id?: string | undefined
                issuer?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
                auth_code?: string | undefined
                code_verifier?: string | undefined
                message?: string | undefined
                signature?: string | undefined
                chain?: 'solana' | 'ethereum' | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { grant_type: 'password' | 'refresh_token' | 'id_token' | 'pkce' | 'web3' }
            } & {
              json: {
                refresh_token?: string | undefined
                password?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                id_token?: string | undefined
                access_token?: string | undefined
                nonce?: string | undefined
                provider?: 'google' | 'apple' | 'azure' | 'facebook' | 'keycloak' | undefined
                client_id?: string | undefined
                issuer?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
                auth_code?: string | undefined
                code_verifier?: string | undefined
                message?: string | undefined
                signature?: string | undefined
                chain?: 'solana' | 'ethereum' | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { grant_type: 'password' | 'refresh_token' | 'id_token' | 'pkce' | 'web3' }
            } & {
              json: {
                refresh_token?: string | undefined
                password?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                id_token?: string | undefined
                access_token?: string | undefined
                nonce?: string | undefined
                provider?: 'google' | 'apple' | 'azure' | 'facebook' | 'keycloak' | undefined
                client_id?: string | undefined
                issuer?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
                auth_code?: string | undefined
                code_verifier?: string | undefined
                message?: string | undefined
                signature?: string | undefined
                chain?: 'solana' | 'ethereum' | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/logout': {
      $post:
        | {
            input: { query: { scope?: 'global' | 'local' | 'others' | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { scope?: 'global' | 'local' | 'others' | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/verify': {
      $get: {
        input: {
          query: {
            token: string
            type: 'signup' | 'invite' | 'recovery' | 'magiclink' | 'email_change'
            redirect_to?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 302
      }
      $post:
        | {
            input: {
              json: {
                type?:
                  | 'signup'
                  | 'recovery'
                  | 'invite'
                  | 'magiclink'
                  | 'email_change'
                  | 'sms'
                  | 'phone_change'
                  | undefined
                token?: string | undefined
                token_hash?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                redirect_to?: string | undefined
              }
            }
            output: AccessTokenResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type?:
                  | 'signup'
                  | 'recovery'
                  | 'invite'
                  | 'magiclink'
                  | 'email_change'
                  | 'sms'
                  | 'phone_change'
                  | undefined
                token?: string | undefined
                token_hash?: string | undefined
                email?: string | undefined
                phone?: string | undefined
                redirect_to?: string | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/authorize': {
      $get: {
        input: {
          query: {
            provider: string
            scopes: string
            invite_token?: string | undefined
            redirect_to?: string | undefined
            code_challenge_method?: 'plain' | 's256' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/signup': {
      $post:
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                channel?: 'sms' | 'whatsapp' | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: AccessTokenResponseSchema | UserSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                channel?: 'sms' | 'whatsapp' | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                channel?: 'sms' | 'whatsapp' | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/recover': {
      $post:
        | {
            input: {
              json: {
                email: string
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email: string
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email: string
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                email: string
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/resend': {
      $post:
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                type?: 'signup' | 'email_change' | 'sms' | 'phone_change' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { message_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                type?: 'signup' | 'email_change' | 'sms' | 'phone_change' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                type?: 'signup' | 'email_change' | 'sms' | 'phone_change' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                type?: 'signup' | 'email_change' | 'sms' | 'phone_change' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/magiclink': {
      $post:
        | {
            input: {
              json: {
                email: string
                data?: { [x: string]: unknown } | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email: string
                data?: { [x: string]: unknown } | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email: string
                data?: { [x: string]: unknown } | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                email: string
                data?: { [x: string]: unknown } | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/otp': {
      $post:
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                channel?: 'sms' | 'whatsapp' | undefined
                create_user?: boolean | undefined
                data?: { [x: string]: unknown } | undefined
                code_challenge_method?: 's256' | 'plain' | undefined
                code_challenge?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { message_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                channel?: 'sms' | 'whatsapp' | undefined
                create_user?: boolean | undefined
                data?: { [x: string]: unknown } | undefined
                code_challenge_method?: 's256' | 'plain' | undefined
                code_challenge?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                channel?: 'sms' | 'whatsapp' | undefined
                create_user?: boolean | undefined
                data?: { [x: string]: unknown } | undefined
                code_challenge_method?: 's256' | 'plain' | undefined
                code_challenge?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                channel?: 'sms' | 'whatsapp' | undefined
                create_user?: boolean | undefined
                data?: { [x: string]: unknown } | undefined
                code_challenge_method?: 's256' | 'plain' | undefined
                code_challenge?: string | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user': {
      $get: { input: {}; output: UserSchema; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                password?: string | undefined
                nonce?: string | undefined
                data?: { [x: string]: unknown } | undefined
                app_metadata?: { [x: string]: unknown } | undefined
                channel?: 'sms' | 'whatsapp' | undefined
              }
            }
            output: UserSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                password?: string | undefined
                nonce?: string | undefined
                data?: { [x: string]: unknown } | undefined
                app_metadata?: { [x: string]: unknown } | undefined
                channel?: 'sms' | 'whatsapp' | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                email?: string | undefined
                phone?: string | undefined
                password?: string | undefined
                nonce?: string | undefined
                data?: { [x: string]: unknown } | undefined
                app_metadata?: { [x: string]: unknown } | undefined
                channel?: 'sms' | 'whatsapp' | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/user/identities/authorize': {
      $get: {
        input: {
          query: {
            provider: string
            scopes: string
            redirect_to?: string | undefined
            code_challenge_method?: 'plain' | 's256' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/user/identities/:identityId': {
      $delete:
        | {
            input: { param: { identityId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identityId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identityId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identityId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identityId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user/oauth/grants': {
      $get:
        | {
            input: {}
            output: {
              client?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    uri?: string | undefined
                    logo_uri?: string | undefined
                  }
                | undefined
              scopes?: string[] | undefined
              granted_at?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 403 }
      $delete:
        | { input: { query: { client_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { query: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/reauthenticate': {
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 400 }
        | {
            input: {}
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/factors': {
      $post:
        | {
            input: {
              json: {
                factor_type: 'totp' | 'phone' | 'webauthn'
                friendly_name?: string | undefined
                issuer?: string | undefined
                phone?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              type?: 'totp' | 'phone' | 'webauthn' | undefined
              totp?:
                | {
                    qr_code?: string | undefined
                    secret?: string | undefined
                    uri?: string | undefined
                  }
                | undefined
              phone?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                factor_type: 'totp' | 'phone' | 'webauthn'
                friendly_name?: string | undefined
                issuer?: string | undefined
                phone?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/factors/:factorId/challenge': {
      $post:
        | {
            input: { param: { factorId: string } } & {
              json: { channel?: 'sms' | 'whatsapp' | undefined }
            }
            output: TOTPPhoneChallengeResponse | WebAuthnChallengeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { factorId: string } } & {
              json: { channel?: 'sms' | 'whatsapp' | undefined }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { factorId: string } } & {
              json: { channel?: 'sms' | 'whatsapp' | undefined }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/factors/:factorId/verify': {
      $post:
        | {
            input: { param: { factorId: string } } & {
              json: {
                challenge_id: string
                code?: string | undefined
                webauthn?:
                  | { type: 'create' | 'request'; credential_response: { [x: string]: unknown } }
                  | undefined
              }
            }
            output: AccessTokenResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { factorId: string } } & {
              json: {
                challenge_id: string
                code?: string | undefined
                webauthn?:
                  | { type: 'create' | 'request'; credential_response: { [x: string]: unknown } }
                  | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { factorId: string } } & {
              json: {
                challenge_id: string
                code?: string | undefined
                webauthn?:
                  | { type: 'create' | 'request'; credential_response: { [x: string]: unknown } }
                  | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/factors/:factorId': {
      $delete:
        | {
            input: { param: { factorId: string } }
            output: { id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { factorId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { factorId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/factors/recovery-codes': {
      $get:
        | { input: {}; output: MFARecoveryCodesStatusSchema; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: { friendly_name?: string | undefined } }
            output: MFARecoveryCodesSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { friendly_name?: string | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { friendly_name?: string | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { friendly_name?: string | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: {}; output: { id?: string | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/factors/recovery-codes/verify': {
      $post:
        | {
            input: { json: { code: string } }
            output: AccessTokenResponseSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { code: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { code: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { code: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: { code: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/factors/recovery-codes/regenerate': {
      $post:
        | { input: {}; output: MFARecoveryCodesSchema; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorSchema; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/callback': {
      $get: { input: {}; output: {}; outputFormat: string; status: 302 }
      $post: { input: {}; output: {}; outputFormat: string; status: 302 }
    }
  } & {
    '/sso': {
      $post:
        | {
            input: {
              json: {
                domain?: string | undefined
                provider_id?: string | undefined
                redirect_to?: string | undefined
                skip_http_redirect?: boolean | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                domain?: string | undefined
                provider_id?: string | undefined
                redirect_to?: string | undefined
                skip_http_redirect?: boolean | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              json: {
                domain?: string | undefined
                provider_id?: string | undefined
                redirect_to?: string | undefined
                skip_http_redirect?: boolean | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                domain?: string | undefined
                provider_id?: string | undefined
                redirect_to?: string | undefined
                skip_http_redirect?: boolean | undefined
                code_challenge?: string | undefined
                code_challenge_method?: 'plain' | 's256' | undefined
                gotrue_meta_security?: GoTrueSecurity | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/saml/metadata': {
      $get: {
        input: { query: { download?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/saml/acs': {
      $post:
        | {
            input: {
              query: {
                RelayState?: string | string | undefined
                SAMLArt?: string | undefined
                SAMLResponse?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              query: {
                RelayState?: string | string | undefined
                SAMLArt?: string | undefined
                SAMLResponse?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                RelayState?: string | string | undefined
                SAMLArt?: string | undefined
                SAMLResponse?: string | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/invite': {
      $post:
        | {
            input: { json: { email: string; data?: { [x: string]: unknown } | undefined } }
            output: UserSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; data?: { [x: string]: unknown } | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { email: string; data?: { [x: string]: unknown } | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/admin/generate_link': {
      $post:
        | {
            input: {
              json: {
                type:
                  | 'magiclink'
                  | 'signup'
                  | 'recovery'
                  | 'email_change_current'
                  | 'email_change_new'
                email: string
                new_email?: string | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                redirect_to?: string | undefined
              }
            }
            output: {
              action_link?: string | undefined
              email_otp?: string | undefined
              hashed_token?: string | undefined
              verification_type?: string | undefined
              redirect_to?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type:
                  | 'magiclink'
                  | 'signup'
                  | 'recovery'
                  | 'email_change_current'
                  | 'email_change_new'
                email: string
                new_email?: string | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                redirect_to?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type:
                  | 'magiclink'
                  | 'signup'
                  | 'recovery'
                  | 'email_change_current'
                  | 'email_change_new'
                email: string
                new_email?: string | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                redirect_to?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                type:
                  | 'magiclink'
                  | 'signup'
                  | 'recovery'
                  | 'email_change_current'
                  | 'email_change_new'
                email: string
                new_email?: string | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                redirect_to?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                type:
                  | 'magiclink'
                  | 'signup'
                  | 'recovery'
                  | 'email_change_current'
                  | 'email_change_new'
                email: string
                new_email?: string | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                redirect_to?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                type:
                  | 'magiclink'
                  | 'signup'
                  | 'recovery'
                  | 'email_change_current'
                  | 'email_change_new'
                email: string
                new_email?: string | undefined
                password?: string | undefined
                data?: { [x: string]: unknown } | undefined
                redirect_to?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/admin/audit': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: {
              id?: string | undefined
              payload?:
                | {
                    actor_id?: string | undefined
                    actor_via_sso?: boolean | undefined
                    actor_username?: string | undefined
                    actor_name?: string | undefined
                    traits?: { [x: string]: unknown } | undefined
                    action?: string | undefined
                    log_type?: string | undefined
                  }
                | undefined
              created_at?: string | undefined
              ip_address?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admin/users': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: { aud?: string | undefined; users?: UserSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admin/users/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: UserSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { userId: string } } & { json: UserSchema }
            output: UserSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { json: UserSchema }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { json: UserSchema }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & { json: UserSchema }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { userId: string } } & {
              json: { should_soft_delete?: boolean | undefined }
            }
            output: {}
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              json: { should_soft_delete?: boolean | undefined }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              json: { should_soft_delete?: boolean | undefined }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              json: { should_soft_delete?: boolean | undefined }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admin/users/:userId/factors': {
      $get:
        | {
            input: { param: { userId: string } }
            output: MFAFactorSchema[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admin/users/:userId/factors/:factorId': {
      $put:
        | {
            input: { param: { userId: string; factorId: string } } & {
              json: { [x: string]: unknown }
            }
            output: MFAFactorSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; factorId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; factorId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; factorId: string } } & {
              json: { [x: string]: unknown }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { userId: string; factorId: string } }
            output: MFAFactorSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string; factorId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userId: string; factorId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string; factorId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admin/sso/providers': {
      $get: {
        input: {}
        output: { items?: SSOProviderSchema[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                type: 'saml'
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
                dedicated_scope?: boolean | undefined
              }
            }
            output: SSOProviderSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type: 'saml'
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
                dedicated_scope?: boolean | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type: 'saml'
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
                dedicated_scope?: boolean | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                type: 'saml'
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
                dedicated_scope?: boolean | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admin/sso/providers/:ssoProviderId': {
      $get:
        | {
            input: { param: { ssoProviderId: string } }
            output: SSOProviderSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ssoProviderId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ssoProviderId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ssoProviderId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { ssoProviderId: string } } & {
              json: {
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
              }
            }
            output: SSOProviderSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ssoProviderId: string } } & {
              json: {
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ssoProviderId: string } } & {
              json: {
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ssoProviderId: string } } & {
              json: {
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ssoProviderId: string } } & {
              json: {
                metadata_url?: string | undefined
                metadata_xml?: string | undefined
                domains?: string[] | undefined
                attribute_mapping?: SAMLAttributeMappingSchema | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { ssoProviderId: string } }
            output: SSOProviderSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ssoProviderId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ssoProviderId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ssoProviderId: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admin/oauth/clients': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: { clients?: OAuthClientSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              json: {
                client_name: string
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris: string[]
                client_type?: 'public' | 'confidential' | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                response_types?: 'code'[] | undefined
                scope?: string | undefined
              }
            }
            output: OAuthClientSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                client_name: string
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris: string[]
                client_type?: 'public' | 'confidential' | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                response_types?: 'code'[] | undefined
                scope?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                client_name: string
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris: string[]
                client_type?: 'public' | 'confidential' | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                response_types?: 'code'[] | undefined
                scope?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                client_name: string
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris: string[]
                client_type?: 'public' | 'confidential' | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                response_types?: 'code'[] | undefined
                scope?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admin/oauth/clients/:client_id': {
      $get:
        | {
            input: { param: { client_id: string } }
            output: OAuthClientSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { client_id: string } } & {
              json: {
                client_name?: string | undefined
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris?: string[] | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
              }
            }
            output: OAuthClientSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } } & {
              json: {
                client_name?: string | undefined
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris?: string[] | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client_id: string } } & {
              json: {
                client_name?: string | undefined
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris?: string[] | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } } & {
              json: {
                client_name?: string | undefined
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris?: string[] | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: string } } & {
              json: {
                client_name?: string | undefined
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris?: string[] | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { client_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admin/oauth/clients/:client_id/regenerate_secret': {
      $post:
        | {
            input: { param: { client_id: string } }
            output: OAuthClientSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { client_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admin/custom-providers': {
      $get:
        | {
            input: { query: { type?: 'oauth2' | 'oidc' | undefined } }
            output: { providers?: CustomOAuthProviderSchema[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: 'oauth2' | 'oidc' | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { type?: 'oauth2' | 'oidc' | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { type?: 'oauth2' | 'oidc' | undefined } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              json: {
                provider_type: 'oauth2' | 'oidc'
                identifier: string
                name: string
                client_id: string
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: CustomOAuthProviderSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                provider_type: 'oauth2' | 'oidc'
                identifier: string
                name: string
                client_id: string
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                provider_type: 'oauth2' | 'oidc'
                identifier: string
                name: string
                client_id: string
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                provider_type: 'oauth2' | 'oidc'
                identifier: string
                name: string
                client_id: string
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admin/custom-providers/:identifier': {
      $get:
        | {
            input: { param: { identifier: string } }
            output: CustomOAuthProviderSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { identifier: string } } & {
              json: {
                name?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: CustomOAuthProviderSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } } & {
              json: {
                name?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & {
              json: {
                name?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & {
              json: {
                name?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & {
              json: {
                name?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                client_auth_method?: 'client_secret' | 'private_key_jwt' | undefined
                client_assertion_audience?: string | undefined
                acceptable_client_ids?: string[] | undefined
                scopes?: string[] | undefined
                pkce_enabled?: boolean | undefined
                attribute_mapping?: { [x: string]: unknown } | undefined
                custom_claims_allowlist?: string[] | undefined
                authorization_params?: { [x: string]: string } | undefined
                enabled?: boolean | undefined
                email_optional?: boolean | undefined
                issuer?: string | undefined
                discovery_url?: string | undefined
                skip_nonce_check?: boolean | undefined
                authorization_url?: string | undefined
                token_url?: string | undefined
                userinfo_url?: string | undefined
                jwks_uri?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/oauth/clients/register': {
      $post:
        | {
            input: {
              json: {
                client_name: string
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris: string[]
                client_type?: 'public' | 'confidential' | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                response_types?: 'code'[] | undefined
                scope?: string | undefined
              }
            }
            output: OAuthClientSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                client_name: string
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris: string[]
                client_type?: 'public' | 'confidential' | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                response_types?: 'code'[] | undefined
                scope?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                client_name: string
                client_uri?: string | undefined
                logo_uri?: string | undefined
                redirect_uris: string[]
                client_type?: 'public' | 'confidential' | undefined
                token_endpoint_auth_method?:
                  | 'none'
                  | 'client_secret_basic'
                  | 'client_secret_post'
                  | undefined
                grant_types?: ('authorization_code' | 'refresh_token')[] | undefined
                response_types?: 'code'[] | undefined
                scope?: string | undefined
              }
            }
            output: { code?: number | undefined; msg?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/oauth/token': {
      $post:
        | {
            input: {
              json: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: string | undefined
                redirect_uri?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            } & {
              form: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: string | undefined
                redirect_uri?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: {
              access_token?: string | undefined
              token_type?: string | undefined
              expires_in?: number | undefined
              refresh_token?: string | undefined
              scope?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: string | undefined
                redirect_uri?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            } & {
              form: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: string | undefined
                redirect_uri?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: string | undefined
                redirect_uri?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            } & {
              form: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: string | undefined
                redirect_uri?: string | undefined
                code_verifier?: string | undefined
                refresh_token?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/oauth/authorize': {
      $get:
        | {
            input: {
              query: {
                response_type: 'code'
                client_id: string
                redirect_uri: string
                scope?: string | undefined
                state?: string | undefined
                code_challenge: string
                code_challenge_method: 'S256'
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              query: {
                response_type: 'code'
                client_id: string
                redirect_uri: string
                scope?: string | undefined
                state?: string | undefined
                code_challenge: string
                code_challenge_method: 'S256'
              }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/oauth/authorizations/:authorization_id': {
      $get:
        | {
            input: { param: { authorization_id: string } }
            output: {
              authorization_id?: string | undefined
              redirect_uri?: string | undefined
              client?:
                | {
                    id?: string | undefined
                    name?: string | undefined
                    uri?: string | undefined
                    logo_uri?: string | undefined
                  }
                | undefined
              user?: { id?: string | undefined; email?: string | undefined } | undefined
              scope?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorization_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { authorization_id: string } }
            output: ErrorSchema
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/oauth/authorizations/:authorization_id/consent': {
      $post:
        | {
            input: { param: { authorization_id: string } } & {
              json: { action: 'approve' | 'deny' }
            }
            output: { redirect_url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authorization_id: string } } & {
              json: { action: 'approve' | 'deny' }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { authorization_id: string } } & {
              json: { action: 'approve' | 'deny' }
            }
            output: ErrorSchema
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/health': {
      $get:
        | {
            input: {}
            output: {
              version?: string | undefined
              name?: string | undefined
              description?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/settings': {
      $get: {
        input: {}
        output: {
          disable_signup?: boolean | undefined
          mailer_autoconfirm?: boolean | undefined
          phone_autoconfirm?: boolean | undefined
          sms_provider?: string | undefined
          saml_enabled?: boolean | undefined
          external?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
