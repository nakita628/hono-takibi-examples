type GoogleCloudPolicyanalyzerV1beta1ObservationPeriod = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type GoogleCloudPolicyanalyzerV1beta1Activity = {
  activity?: { [x: string]: { [x: string]: unknown } } | undefined
  activityType?: string | undefined
  fullResourceName?: string | undefined
  observationPeriod?: GoogleCloudPolicyanalyzerV1beta1ObservationPeriod | undefined
}
type GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse = {
  activities?: GoogleCloudPolicyanalyzerV1beta1Activity[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:parent/activities:query': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
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
        output: GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
