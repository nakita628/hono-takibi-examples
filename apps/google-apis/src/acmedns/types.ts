type AcmeTxtRecord = {
  digest?: string | undefined
  fqdn?: string | undefined
  updateTime?: string | undefined
}
type AcmeChallengeSet = { record?: AcmeTxtRecord[] | undefined }
type RotateChallengesRequest = {
  accessToken?: string | undefined
  keepExpiredRecords?: boolean | undefined
  recordsToAdd?: AcmeTxtRecord[] | undefined
  recordsToRemove?: AcmeTxtRecord[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/acmeChallengeSets/:rootDomain': {
      $get: {
        input: { param: { rootDomain: string } } & {
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
        }
        output: AcmeChallengeSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/acmeChallengeSets/:rootDomain:rotateChallenges': {
      $post: {
        input: { param: { rootDomain: string } } & {
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
        } & { json: RotateChallengesRequest }
        output: AcmeChallengeSet
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
