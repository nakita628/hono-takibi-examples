type Scope = string
type CreateTokenResponse = {
  accessToken?: {} | undefined
  tokenType?: {} | undefined
  expiresIn?: {} | undefined
  refreshToken?: {} | undefined
  idToken?: {} | undefined
}
type RegisterClientResponse = {
  clientId?: {} | undefined
  clientSecret?: {} | undefined
  clientIdIssuedAt?: {} | undefined
  clientSecretExpiresAt?: {} | undefined
  authorizationEndpoint?: {} | undefined
  tokenEndpoint?: {} | undefined
}
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
      $post: {
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
    }
  } & {
    '/client/register': {
      $post: {
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
    }
  } & {
    '/device_authorization': {
      $post: {
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
    }
  },
  '/'
>
export default routes
