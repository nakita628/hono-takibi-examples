type IssueStatelessChannelTokenByJWTAssertionRequest = {
  grant_type: 'client_credentials'
  client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
  client_assertion: string
}
type IssueStatelessChannelTokenByClientSecretRequest = {
  grant_type: 'client_credentials'
  client_id: string
  client_secret: string
}
type IssueStatelessChannelAccessTokenResponse = {
  access_token: string
  expires_in: number
  token_type: string
}
type ChannelAccessTokenKeyIdsResponse = { kids: string[] }
type IssueChannelAccessTokenResponse = {
  access_token: string
  expires_in: number
  token_type: string
  key_id: string
}
type VerifyChannelAccessTokenResponse = {
  client_id: string
  expires_in: bigint
  scope?: string | undefined
}
type IssueShortLivedChannelAccessTokenResponse = {
  access_token: string
  expires_in: number
  token_type: string
}
type ErrorResponse = { error?: string | undefined; error_description?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/oauth2/v3/token': {
      $post: {
        input: {
          json:
            | IssueStatelessChannelTokenByJWTAssertionRequest
            | IssueStatelessChannelTokenByClientSecretRequest
        } & {
          form:
            | IssueStatelessChannelTokenByJWTAssertionRequest
            | IssueStatelessChannelTokenByClientSecretRequest
        }
        output: IssueStatelessChannelAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/v2.1/tokens/kid': {
      $get: {
        input: { query: { client_assertion_type: string; client_assertion: string } }
        output: ChannelAccessTokenKeyIdsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/v2.1/token': {
      $post: {
        input: {
          json: { grant_type: string; client_assertion_type: string; client_assertion: string }
        } & {
          form: { grant_type: string; client_assertion_type: string; client_assertion: string }
        }
        output: IssueChannelAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/v2.1/verify': {
      $get: {
        input: { query: { access_token: string } }
        output: VerifyChannelAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/v2.1/revoke': {
      $post: {
        input: { json: { client_id: string; client_secret: string; access_token: string } } & {
          form: { client_id: string; client_secret: string; access_token: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/oauth/accessToken': {
      $post:
        | {
            input: { json: { grant_type: string; client_id: string; client_secret: string } } & {
              form: { grant_type: string; client_id: string; client_secret: string }
            }
            output: IssueShortLivedChannelAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { grant_type: string; client_id: string; client_secret: string } } & {
              form: { grant_type: string; client_id: string; client_secret: string }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/oauth/verify': {
      $post: {
        input: { json: { access_token: string } } & { form: { access_token: string } }
        output: VerifyChannelAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/oauth/revoke': {
      $post: {
        input: { json: { access_token: string } } & { form: { access_token: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
