type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type DailySubEntityType = {
  dayOfWeek?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  timeOfDay?: TimeOfDay | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type DatedValue = { date?: Date | undefined; value?: string | undefined }
type TimeSeries = { datedValues?: DatedValue[] | undefined }
type DailyMetricTimeSeries = {
  dailyMetric?:
    | 'DAILY_METRIC_UNKNOWN'
    | 'BUSINESS_IMPRESSIONS_DESKTOP_MAPS'
    | 'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH'
    | 'BUSINESS_IMPRESSIONS_MOBILE_MAPS'
    | 'BUSINESS_IMPRESSIONS_MOBILE_SEARCH'
    | 'BUSINESS_CONVERSATIONS'
    | 'BUSINESS_DIRECTION_REQUESTS'
    | 'CALL_CLICKS'
    | 'WEBSITE_CLICKS'
    | 'BUSINESS_BOOKINGS'
    | 'BUSINESS_FOOD_ORDERS'
    | 'BUSINESS_FOOD_MENU_CLICKS'
    | undefined
  dailySubEntityType?: DailySubEntityType | undefined
  timeSeries?: TimeSeries | undefined
}
type MultiDailyMetricTimeSeries = { dailyMetricTimeSeries?: DailyMetricTimeSeries[] | undefined }
type FetchMultiDailyMetricsTimeSeriesResponse = {
  multiDailyMetricTimeSeries?: MultiDailyMetricTimeSeries[] | undefined
}
type GetDailyMetricsTimeSeriesResponse = { timeSeries?: TimeSeries | undefined }
type InsightsValue = { threshold?: string | undefined; value?: string | undefined }
type SearchKeywordCount = {
  insightsValue?: InsightsValue | undefined
  searchKeyword?: string | undefined
}
type ListSearchKeywordImpressionsMonthlyResponse = {
  nextPageToken?: string | undefined
  searchKeywordsCounts?: SearchKeywordCount[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:location:fetchMultiDailyMetricsTimeSeries': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            dailyMetrics?:
              | (
                  | 'DAILY_METRIC_UNKNOWN'
                  | 'BUSINESS_IMPRESSIONS_DESKTOP_MAPS'
                  | 'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH'
                  | 'BUSINESS_IMPRESSIONS_MOBILE_MAPS'
                  | 'BUSINESS_IMPRESSIONS_MOBILE_SEARCH'
                  | 'BUSINESS_CONVERSATIONS'
                  | 'BUSINESS_DIRECTION_REQUESTS'
                  | 'CALL_CLICKS'
                  | 'WEBSITE_CLICKS'
                  | 'BUSINESS_BOOKINGS'
                  | 'BUSINESS_FOOD_ORDERS'
                  | 'BUSINESS_FOOD_MENU_CLICKS'
                )[]
              | undefined
            'dailyRange.endDate.day'?: number | undefined
            'dailyRange.endDate.month'?: number | undefined
            'dailyRange.endDate.year'?: number | undefined
            'dailyRange.startDate.day'?: number | undefined
            'dailyRange.startDate.month'?: number | undefined
            'dailyRange.startDate.year'?: number | undefined
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
        output: FetchMultiDailyMetricsTimeSeriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:getDailyMetricsTimeSeries': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            dailyMetric?:
              | 'DAILY_METRIC_UNKNOWN'
              | 'BUSINESS_IMPRESSIONS_DESKTOP_MAPS'
              | 'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH'
              | 'BUSINESS_IMPRESSIONS_MOBILE_MAPS'
              | 'BUSINESS_IMPRESSIONS_MOBILE_SEARCH'
              | 'BUSINESS_CONVERSATIONS'
              | 'BUSINESS_DIRECTION_REQUESTS'
              | 'CALL_CLICKS'
              | 'WEBSITE_CLICKS'
              | 'BUSINESS_BOOKINGS'
              | 'BUSINESS_FOOD_ORDERS'
              | 'BUSINESS_FOOD_MENU_CLICKS'
              | undefined
            'dailyRange.endDate.day'?: number | undefined
            'dailyRange.endDate.month'?: number | undefined
            'dailyRange.endDate.year'?: number | undefined
            'dailyRange.startDate.day'?: number | undefined
            'dailyRange.startDate.month'?: number | undefined
            'dailyRange.startDate.year'?: number | undefined
            'dailySubEntityType.dayOfWeek'?:
              | 'DAY_OF_WEEK_UNSPECIFIED'
              | 'MONDAY'
              | 'TUESDAY'
              | 'WEDNESDAY'
              | 'THURSDAY'
              | 'FRIDAY'
              | 'SATURDAY'
              | 'SUNDAY'
              | undefined
            'dailySubEntityType.timeOfDay.hours'?: number | undefined
            'dailySubEntityType.timeOfDay.minutes'?: number | undefined
            'dailySubEntityType.timeOfDay.nanos'?: number | undefined
            'dailySubEntityType.timeOfDay.seconds'?: number | undefined
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
        output: GetDailyMetricsTimeSeriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/searchkeywords/impressions/monthly': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            'monthlyRange.endMonth.day'?: number | undefined
            'monthlyRange.endMonth.month'?: number | undefined
            'monthlyRange.endMonth.year'?: number | undefined
            'monthlyRange.startMonth.day'?: number | undefined
            'monthlyRange.startMonth.month'?: number | undefined
            'monthlyRange.startMonth.year'?: number | undefined
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
        output: ListSearchKeywordImpressionsMonthlyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
