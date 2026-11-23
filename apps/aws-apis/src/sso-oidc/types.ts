type Scope = string
type CreateTokenResponse = {
  accessToken?: {} | undefined
  tokenType?: {} | undefined
  expiresIn?: {} | undefined
  refreshToken?: {} | undefined
  idToken?: {} | undefined
}
type InvalidRequestException = { [x: string]: unknown }
type InvalidClientException = { [x: string]: unknown }
type InvalidGrantException = { [x: string]: unknown }
type UnauthorizedClientException = { [x: string]: unknown }
type UnsupportedGrantTypeException = { [x: string]: unknown }
type InvalidScopeException = { [x: string]: unknown }
type AuthorizationPendingException = { [x: string]: unknown }
type SlowDownException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ExpiredTokenException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type RegisterClientResponse = {
  clientId?: {} | undefined
  clientSecret?: {} | undefined
  clientIdIssuedAt?: {} | undefined
  clientSecretExpiresAt?: {} | undefined
  authorizationEndpoint?: {} | undefined
  tokenEndpoint?: {} | undefined
}
type InvalidClientMetadataException = { [x: string]: unknown }
type StartDeviceAuthorizationResponse = {
  deviceCode?: {} | undefined
  userCode?: {} | undefined
  verificationUri?: {} | undefined
  verificationUriComplete?: {} | undefined
  expiresIn?: {} | undefined
  interval?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/token': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: CreateTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: InvalidClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: InvalidGrantException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: UnauthorizedClientException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: UnsupportedGrantTypeException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: InvalidScopeException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: AuthorizationPendingException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: SlowDownException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: ExpiredTokenException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                clientId: string
                clientSecret: string
                grantType: string
                deviceCode?: string | undefined
                code?: string | undefined
                refreshToken?: string | undefined
                scope?: Scope[] | undefined
                redirectUri?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/client/register': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientName: string; clientType: string; scopes?: Scope[] | undefined } }
            output: RegisterClientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientName: string; clientType: string; scopes?: Scope[] | undefined } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientName: string; clientType: string; scopes?: Scope[] | undefined } }
            output: InvalidScopeException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientName: string; clientType: string; scopes?: Scope[] | undefined } }
            output: InvalidClientMetadataException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientName: string; clientType: string; scopes?: Scope[] | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/device_authorization': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientId: string; clientSecret: string; startUrl: string } }
            output: StartDeviceAuthorizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientId: string; clientSecret: string; startUrl: string } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientId: string; clientSecret: string; startUrl: string } }
            output: InvalidClientException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientId: string; clientSecret: string; startUrl: string } }
            output: UnauthorizedClientException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientId: string; clientSecret: string; startUrl: string } }
            output: SlowDownException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { clientId: string; clientSecret: string; startUrl: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
