type GoogleIdentityStsV1betaExchangeTokenRequest = {
  audience?: string | undefined
  grantType?: string | undefined
  options?: string | undefined
  requestedTokenType?: string | undefined
  scope?: string | undefined
  subjectToken?: string | undefined
  subjectTokenType?: string | undefined
}
type GoogleIdentityStsV1betaExchangeTokenResponse = {
  access_token?: string | undefined
  expires_in?: number | undefined
  issued_token_type?: string | undefined
  token_type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/token': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleIdentityStsV1betaExchangeTokenRequest }
        output: GoogleIdentityStsV1betaExchangeTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
