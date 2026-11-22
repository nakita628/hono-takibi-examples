type BusinessCallsSettings = {
  callsState?: 'CALLS_STATE_UNSPECIFIED' | 'ENABLED' | 'DISABLED' | undefined
  consentTime?: string | undefined
  name?: string | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type HourlyMetrics = { hour?: number | undefined; missedCallsCount?: number | undefined }
type WeekDayMetrics = {
  day?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  missedCallsCount?: number | undefined
}
type AggregateMetrics = {
  answeredCallsCount?: number | undefined
  endDate?: Date | undefined
  hourlyMetrics?: HourlyMetrics[] | undefined
  missedCallsCount?: number | undefined
  startDate?: Date | undefined
  weekdayMetrics?: WeekDayMetrics[] | undefined
}
type BusinessCallsInsights = {
  aggregateMetrics?: AggregateMetrics | undefined
  metricType?: 'METRIC_TYPE_UNSPECIFIED' | 'AGGREGATE_COUNT' | undefined
  name?: string | undefined
}
type ListBusinessCallsInsightsResponse = {
  businessCallsInsights?: BusinessCallsInsights[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: BusinessCallsSettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: BusinessCallsSettings }
        output: BusinessCallsSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/businesscallsinsights': {
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
        output: ListBusinessCallsInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
