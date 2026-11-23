type PlatformSummary = {
  betterAdsStatus?: 'UNKNOWN' | 'PASSING' | 'WARNING' | 'FAILING' | undefined
  enforcementTime?: string | undefined
  filterStatus?: 'UNKNOWN' | 'ON' | 'OFF' | 'PAUSED' | 'PENDING' | undefined
  lastChangeTime?: string | undefined
  region?: ('REGION_UNKNOWN' | 'REGION_A' | 'REGION_B' | 'REGION_C')[] | undefined
  reportUrl?: string | undefined
  underReview?: boolean | undefined
}
type SiteSummaryResponse = {
  desktopSummary?: PlatformSummary | undefined
  mobileSummary?: PlatformSummary | undefined
  reviewedSite?: string | undefined
}
type ViolatingSitesResponse = { violatingSites?: SiteSummaryResponse[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/violatingSites': {
      $get: {
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
        }
        output: ViolatingSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $get: {
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
        }
        output: SiteSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
