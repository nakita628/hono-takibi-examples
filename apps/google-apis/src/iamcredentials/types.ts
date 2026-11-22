type GenerateAccessTokenRequest = {
  delegates?: string[] | undefined
  lifetime?: string | undefined
  scope?: string[] | undefined
}
type GenerateAccessTokenResponse = {
  accessToken?: string | undefined
  expireTime?: string | undefined
}
type GenerateIdTokenRequest = {
  audience?: string | undefined
  delegates?: string[] | undefined
  includeEmail?: boolean | undefined
}
type GenerateIdTokenResponse = { token?: string | undefined }
type SignBlobRequest = { delegates?: string[] | undefined; payload?: string | undefined }
type SignBlobResponse = { keyId?: string | undefined; signedBlob?: string | undefined }
type SignJwtRequest = { delegates?: string[] | undefined; payload?: string | undefined }
type SignJwtResponse = { keyId?: string | undefined; signedJwt?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name:generateAccessToken': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GenerateAccessTokenRequest }
        output: GenerateAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:generateIdToken': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GenerateIdTokenRequest }
        output: GenerateIdTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:signBlob': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: SignBlobRequest }
        output: SignBlobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:signJwt': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: SignJwtRequest }
        output: SignJwtResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
