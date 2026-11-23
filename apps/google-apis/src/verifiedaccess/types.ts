type Empty = { [x: string]: unknown }
type Challenge = { alternativeChallenge?: string | undefined; challenge?: string | undefined }
type VerifyChallengeResponseRequest = {
  challengeResponse?: string | undefined
  expectedIdentity?: string | undefined
}
type VerifyChallengeResponseResult = {
  customerId?: string | undefined
  devicePermanentId?: string | undefined
  deviceSignal?: string | undefined
  keyTrustLevel?:
    | 'KEY_TRUST_LEVEL_UNSPECIFIED'
    | 'CHROME_OS_VERIFIED_MODE'
    | 'CHROME_OS_DEVELOPER_MODE'
    | 'CHROME_BROWSER_HW_KEY'
    | 'CHROME_BROWSER_OS_KEY'
    | undefined
  signedPublicKeyAndChallenge?: string | undefined
  virtualDeviceId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/challenge:generate': {
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
        } & { json: Empty }
        output: Challenge
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/challenge:verify': {
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
        } & { json: VerifyChallengeResponseRequest }
        output: VerifyChallengeResponseResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
