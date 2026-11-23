type AccessTokenResponse = {
  access_token: string
  expires_in: bigint
  hub_id?: number | undefined
  id_token?: string | undefined
  refresh_token: string
  scopes?: string[] | undefined
  token_type: string
  token_use: 'access_token'
  user_id?: number | undefined
}
type ClientCredentialsTokenResponse = {
  access_token: string
  expires_in: bigint
  hub_id?: number | undefined
  id_token?: string | undefined
  scopes?: string[] | undefined
  token_type: string
  token_use: 'client_credentials'
  user_id?: number | undefined
}
type TokenResponseIF = AccessTokenResponse | ClientCredentialsTokenResponse
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type SignedAccessToken = {
  appId: number
  appInstallId: string
  audience: string
  expiresAt: bigint
  hubId: number
  hublet: string
  installingUserId: number
  isPrivateDistribution: boolean
  isServiceAccount: boolean
  isUserLevel: boolean
  newSignature: string
  scopeToScopeGroupPks: string
  scopes: string
  signature: string
  trialScopeToScopeGroupPks: string
  trialScopes: string
  userId: number
}
type PublicAccessTokenInfoResponse = {
  active: boolean
  app_id: number
  client_id: string
  expires_in: bigint
  hub_domain?: string | undefined
  hub_id: number
  is_private_distribution: boolean
  scopes: string[]
  signed_access_token: SignedAccessToken
  token: string
  token_type: string
  token_use: 'access_token'
  user?: string | undefined
  user_id: number
}
type PublicRefreshTokenInfoResponse = {
  active: boolean
  app_id: number
  client_id: string
  hub_domain?: string | undefined
  hub_id: number
  scopes: string[]
  token: string
  token_type: string
  token_use: 'refresh_token'
  user?: string | undefined
  user_id: number
}
type TokenInfoResponseBaseIF = PublicAccessTokenInfoResponse | PublicRefreshTokenInfoResponse
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/oauth/2026-09/token': {
      $post:
        | {
            input: {
              json: {
                assertion?: string | undefined
                client_assertion?: string | undefined
                client_assertion_type?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                grant_type?:
                  | 'authorization_code'
                  | 'client_credentials'
                  | 'refresh_token'
                  | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
                  | undefined
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
                scope?: string | undefined
              }
            } & {
              form: {
                assertion?: string | undefined
                client_assertion?: string | undefined
                client_assertion_type?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                grant_type?:
                  | 'authorization_code'
                  | 'client_credentials'
                  | 'refresh_token'
                  | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
                  | undefined
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
                scope?: string | undefined
              }
            }
            output: TokenResponseIF
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                assertion?: string | undefined
                client_assertion?: string | undefined
                client_assertion_type?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                grant_type?:
                  | 'authorization_code'
                  | 'client_credentials'
                  | 'refresh_token'
                  | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
                  | undefined
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
                scope?: string | undefined
              }
            } & {
              form: {
                assertion?: string | undefined
                client_assertion?: string | undefined
                client_assertion_type?: string | undefined
                client_id?: string | undefined
                client_secret?: string | undefined
                code?: string | undefined
                code_verifier?: string | undefined
                grant_type?:
                  | 'authorization_code'
                  | 'client_credentials'
                  | 'refresh_token'
                  | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
                  | undefined
                redirect_uri?: string | undefined
                refresh_token?: string | undefined
                scope?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/oauth/2026-09/token/introspect': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token?: string | undefined
                token_type_hint?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token?: string | undefined
                token_type_hint?: string | undefined
              }
            }
            output: TokenInfoResponseBaseIF
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token?: string | undefined
                token_type_hint?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token?: string | undefined
                token_type_hint?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/oauth/2026-09/token/revoke': {
      $post:
        | {
            input: {
              json: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token?: string | undefined
                token_type_hint?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token?: string | undefined
                token_type_hint?: string | undefined
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
                token?: string | undefined
                token_type_hint?: string | undefined
              }
            } & {
              form: {
                client_id?: string | undefined
                client_secret?: string | undefined
                token?: string | undefined
                token_type_hint?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
