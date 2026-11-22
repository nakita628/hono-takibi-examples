type TrackingIssue = { url?: string | undefined }
type ErrorGroup = {
  groupId?: string | undefined
  name?: string | undefined
  resolutionStatus?:
    | 'RESOLUTION_STATUS_UNSPECIFIED'
    | 'OPEN'
    | 'ACKNOWLEDGED'
    | 'RESOLVED'
    | 'MUTED'
    | undefined
  trackingIssues?: TrackingIssue[] | undefined
}
type DeleteEventsResponse = { [x: string]: unknown }
type HttpRequestContext = {
  method?: string | undefined
  referrer?: string | undefined
  remoteIp?: string | undefined
  responseStatusCode?: number | undefined
  url?: string | undefined
  userAgent?: string | undefined
}
type SourceLocation = {
  filePath?: string | undefined
  functionName?: string | undefined
  lineNumber?: number | undefined
}
type SourceReference = { repository?: string | undefined; revisionId?: string | undefined }
type ErrorContext = {
  httpRequest?: HttpRequestContext | undefined
  reportLocation?: SourceLocation | undefined
  sourceReferences?: SourceReference[] | undefined
  user?: string | undefined
}
type ServiceContext = {
  resourceType?: string | undefined
  service?: string | undefined
  version?: string | undefined
}
type ErrorEvent = {
  context?: ErrorContext | undefined
  eventTime?: string | undefined
  message?: string | undefined
  serviceContext?: ServiceContext | undefined
}
type ListEventsResponse = {
  errorEvents?: ErrorEvent[] | undefined
  nextPageToken?: string | undefined
  timeRangeBegin?: string | undefined
}
type ReportedErrorEvent = {
  context?: ErrorContext | undefined
  eventTime?: string | undefined
  message?: string | undefined
  serviceContext?: ServiceContext | undefined
}
type ReportErrorEventResponse = { [x: string]: unknown }
type TimedCount = {
  count?: string | undefined
  endTime?: string | undefined
  startTime?: string | undefined
}
type ErrorGroupStats = {
  affectedServices?: ServiceContext[] | undefined
  affectedUsersCount?: string | undefined
  count?: string | undefined
  firstSeenTime?: string | undefined
  group?: ErrorGroup | undefined
  lastSeenTime?: string | undefined
  numAffectedServices?: number | undefined
  representative?: ErrorEvent | undefined
  timedCounts?: TimedCount[] | undefined
}
type ListGroupStatsResponse = {
  errorGroupStats?: ErrorGroupStats[] | undefined
  nextPageToken?: string | undefined
  timeRangeBegin?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:groupName': {
      $get: {
        input: { param: { groupName: string } } & {
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
        output: ErrorGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $put: {
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
        } & { json: ErrorGroup }
        output: ErrorGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:projectName/events': {
      $delete: {
        input: { param: { projectName: string } } & {
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
        output: DeleteEventsResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectName: string } } & {
          query: {
            groupId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            'serviceFilter.resourceType'?: string | undefined
            'serviceFilter.service'?: string | undefined
            'serviceFilter.version'?: string | undefined
            'timeRange.period'?:
              | 'PERIOD_UNSPECIFIED'
              | 'PERIOD_1_HOUR'
              | 'PERIOD_6_HOURS'
              | 'PERIOD_1_DAY'
              | 'PERIOD_1_WEEK'
              | 'PERIOD_30_DAYS'
              | undefined
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
        output: ListEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:projectName/events:report': {
      $post: {
        input: { param: { projectName: string } } & {
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
        } & { json: ReportedErrorEvent }
        output: ReportErrorEventResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:projectName/groupStats': {
      $get: {
        input: { param: { projectName: string } } & {
          query: {
            alignment?:
              | 'ERROR_COUNT_ALIGNMENT_UNSPECIFIED'
              | 'ALIGNMENT_EQUAL_ROUNDED'
              | 'ALIGNMENT_EQUAL_AT_END'
              | undefined
            alignmentTime?: string | undefined
            groupId?: string[] | undefined
            order?:
              | 'GROUP_ORDER_UNSPECIFIED'
              | 'COUNT_DESC'
              | 'LAST_SEEN_DESC'
              | 'CREATED_DESC'
              | 'AFFECTED_USERS_DESC'
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            'serviceFilter.resourceType'?: string | undefined
            'serviceFilter.service'?: string | undefined
            'serviceFilter.version'?: string | undefined
            'timeRange.period'?:
              | 'PERIOD_UNSPECIFIED'
              | 'PERIOD_1_HOUR'
              | 'PERIOD_6_HOURS'
              | 'PERIOD_1_DAY'
              | 'PERIOD_1_WEEK'
              | 'PERIOD_30_DAYS'
              | undefined
            timedCountDuration?: string | undefined
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
        output: ListGroupStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
