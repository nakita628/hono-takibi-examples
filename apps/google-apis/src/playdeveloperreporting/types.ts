type GoogleTypeTimeZone = { id?: string | undefined; version?: string | undefined }
type GoogleTypeDateTime = {
  day?: number | undefined
  hours?: number | undefined
  minutes?: number | undefined
  month?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
  timeZone?: GoogleTypeTimeZone | undefined
  utcOffset?: string | undefined
  year?: number | undefined
}
type GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness = {
  aggregationPeriod?: 'AGGREGATION_PERIOD_UNSPECIFIED' | 'HOURLY' | 'DAILY' | undefined
  latestEndTime?: GoogleTypeDateTime | undefined
}
type GooglePlayDeveloperReportingV1beta1FreshnessInfo = {
  freshnesses?: GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness[] | undefined
}
type GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet = {
  freshnessInfo?: GooglePlayDeveloperReportingV1beta1FreshnessInfo | undefined
  name?: string | undefined
}
type GooglePlayDeveloperReportingV1beta1TimelineSpec = {
  aggregationPeriod?: 'AGGREGATION_PERIOD_UNSPECIFIED' | 'HOURLY' | 'DAILY' | undefined
  endTime?: GoogleTypeDateTime | undefined
  startTime?: GoogleTypeDateTime | undefined
}
type GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest = {
  dimensions?: string[] | undefined
  filter?: string | undefined
  metrics?: string[] | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec | undefined
  userCohort?: 'USER_COHORT_UNSPECIFIED' | 'OS_PUBLIC' | 'OS_BETA' | 'APP_TESTERS' | undefined
}
type GooglePlayDeveloperReportingV1beta1DimensionValue = {
  dimension?: string | undefined
  int64Value?: string | undefined
  stringValue?: string | undefined
  valueLabel?: string | undefined
}
type GoogleTypeDecimal = { value?: string | undefined }
type GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval = {
  lowerBound?: GoogleTypeDecimal | undefined
  upperBound?: GoogleTypeDecimal | undefined
}
type GooglePlayDeveloperReportingV1beta1MetricValue = {
  decimalValue?: GoogleTypeDecimal | undefined
  decimalValueConfidenceInterval?:
    | GooglePlayDeveloperReportingV1beta1DecimalConfidenceInterval
    | undefined
  metric?: string | undefined
}
type GooglePlayDeveloperReportingV1beta1MetricsRow = {
  aggregationPeriod?: 'AGGREGATION_PERIOD_UNSPECIFIED' | 'HOURLY' | 'DAILY' | undefined
  dimensions?: GooglePlayDeveloperReportingV1beta1DimensionValue[] | undefined
  metrics?: GooglePlayDeveloperReportingV1beta1MetricValue[] | undefined
  startTime?: GoogleTypeDateTime | undefined
}
type GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse = {
  nextPageToken?: string | undefined
  rows?: GooglePlayDeveloperReportingV1beta1MetricsRow[] | undefined
}
type GooglePlayDeveloperReportingV1beta1Anomaly = {
  dimensions?: GooglePlayDeveloperReportingV1beta1DimensionValue[] | undefined
  metric?: GooglePlayDeveloperReportingV1beta1MetricValue | undefined
  metricSet?: string | undefined
  name?: string | undefined
  timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec | undefined
}
type GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse = {
  anomalies?: GooglePlayDeveloperReportingV1beta1Anomaly[] | undefined
  nextPageToken?: string | undefined
}
type GooglePlayDeveloperReportingV1beta1ErrorIssue = {
  cause?: string | undefined
  location?: string | undefined
  name?: string | undefined
  type?: 'ERROR_TYPE_UNSPECIFIED' | 'APPLICATION_NOT_RESPONDING' | 'CRASH' | undefined
}
type GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse = {
  errorIssues?: GooglePlayDeveloperReportingV1beta1ErrorIssue[] | undefined
  nextPageToken?: string | undefined
}
type GooglePlayDeveloperReportingV1beta1ErrorReport = {
  issue?: string | undefined
  name?: string | undefined
  reportText?: string | undefined
  type?: 'ERROR_TYPE_UNSPECIFIED' | 'APPLICATION_NOT_RESPONDING' | 'CRASH' | undefined
}
type GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse = {
  errorReports?: GooglePlayDeveloperReportingV1beta1ErrorReport[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
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
        output: GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:query': {
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
        } & {
          json: GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest
        }
        output: GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/anomalies': {
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
        output: GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/errorIssues:search': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            'interval.endTime.day'?: number | undefined
            'interval.endTime.hours'?: number | undefined
            'interval.endTime.minutes'?: number | undefined
            'interval.endTime.month'?: number | undefined
            'interval.endTime.nanos'?: number | undefined
            'interval.endTime.seconds'?: number | undefined
            'interval.endTime.timeZone.id'?: string | undefined
            'interval.endTime.timeZone.version'?: string | undefined
            'interval.endTime.utcOffset'?: string | undefined
            'interval.endTime.year'?: number | undefined
            'interval.startTime.day'?: number | undefined
            'interval.startTime.hours'?: number | undefined
            'interval.startTime.minutes'?: number | undefined
            'interval.startTime.month'?: number | undefined
            'interval.startTime.nanos'?: number | undefined
            'interval.startTime.seconds'?: number | undefined
            'interval.startTime.timeZone.id'?: string | undefined
            'interval.startTime.timeZone.version'?: string | undefined
            'interval.startTime.utcOffset'?: string | undefined
            'interval.startTime.year'?: number | undefined
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
        output: GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/errorReports:search': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            'interval.endTime.day'?: number | undefined
            'interval.endTime.hours'?: number | undefined
            'interval.endTime.minutes'?: number | undefined
            'interval.endTime.month'?: number | undefined
            'interval.endTime.nanos'?: number | undefined
            'interval.endTime.seconds'?: number | undefined
            'interval.endTime.timeZone.id'?: string | undefined
            'interval.endTime.timeZone.version'?: string | undefined
            'interval.endTime.utcOffset'?: string | undefined
            'interval.endTime.year'?: number | undefined
            'interval.startTime.day'?: number | undefined
            'interval.startTime.hours'?: number | undefined
            'interval.startTime.minutes'?: number | undefined
            'interval.startTime.month'?: number | undefined
            'interval.startTime.nanos'?: number | undefined
            'interval.startTime.seconds'?: number | undefined
            'interval.startTime.timeZone.id'?: string | undefined
            'interval.startTime.timeZone.version'?: string | undefined
            'interval.startTime.utcOffset'?: string | undefined
            'interval.startTime.year'?: number | undefined
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
        output: GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
