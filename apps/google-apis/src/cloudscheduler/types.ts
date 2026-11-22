type Empty = { [x: string]: unknown }
type AppEngineRouting = {
  host?: string | undefined
  instance?: string | undefined
  service?: string | undefined
  version?: string | undefined
}
type AppEngineHttpTarget = {
  appEngineRouting?: AppEngineRouting | undefined
  body?: string | undefined
  headers?: { [x: string]: string } | undefined
  httpMethod?:
    | 'HTTP_METHOD_UNSPECIFIED'
    | 'POST'
    | 'GET'
    | 'HEAD'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'OPTIONS'
    | undefined
  relativeUri?: string | undefined
}
type OAuthToken = { scope?: string | undefined; serviceAccountEmail?: string | undefined }
type OidcToken = { audience?: string | undefined; serviceAccountEmail?: string | undefined }
type HttpTarget = {
  body?: string | undefined
  headers?: { [x: string]: string } | undefined
  httpMethod?:
    | 'HTTP_METHOD_UNSPECIFIED'
    | 'POST'
    | 'GET'
    | 'HEAD'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'OPTIONS'
    | undefined
  oauthToken?: OAuthToken | undefined
  oidcToken?: OidcToken | undefined
  uri?: string | undefined
}
type PubsubTarget = {
  attributes?: { [x: string]: string } | undefined
  data?: string | undefined
  topicName?: string | undefined
}
type RetryConfig = {
  maxBackoffDuration?: string | undefined
  maxDoublings?: number | undefined
  maxRetryDuration?: string | undefined
  minBackoffDuration?: string | undefined
  retryCount?: number | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Job = {
  appEngineHttpTarget?: AppEngineHttpTarget | undefined
  attemptDeadline?: string | undefined
  description?: string | undefined
  httpTarget?: HttpTarget | undefined
  lastAttemptTime?: string | undefined
  legacyAppEngineCron?: boolean | undefined
  name?: string | undefined
  pubsubTarget?: PubsubTarget | undefined
  retryConfig?: RetryConfig | undefined
  schedule?: string | undefined
  scheduleTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ENABLED' | 'PAUSED' | 'DISABLED' | 'UPDATE_FAILED' | undefined
  status?: Status | undefined
  timeZone?: string | undefined
  userUpdateTime?: string | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type PauseJobRequest = { [x: string]: unknown }
type ResumeJobRequest = { [x: string]: unknown }
type RunJobRequest = { legacyAppEngineCron?: boolean | undefined }
type ListJobsResponse = { jobs?: Job[] | undefined; nextPageToken?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            legacyAppEngineCron?: boolean | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
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
        output: Job
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:pause': {
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
        } & { json: PauseJobRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:resume': {
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
        } & { json: ResumeJobRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:run': {
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
        } & { json: RunJobRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/jobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            legacyAppEngineCron?: boolean | undefined
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
