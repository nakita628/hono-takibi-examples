type Empty = { [x: string]: unknown }
type AppEngineRouting = {
  host?: string | undefined
  instance?: string | undefined
  service?: string | undefined
  version?: string | undefined
}
type AppEngineHttpRequest = {
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
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Attempt = {
  dispatchTime?: string | undefined
  responseStatus?: Status | undefined
  responseTime?: string | undefined
  scheduleTime?: string | undefined
}
type OAuthToken = { scope?: string | undefined; serviceAccountEmail?: string | undefined }
type OidcToken = { audience?: string | undefined; serviceAccountEmail?: string | undefined }
type HttpRequest = {
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
  url?: string | undefined
}
type PullMessage = { payload?: string | undefined; tag?: string | undefined }
type Task = {
  appEngineHttpRequest?: AppEngineHttpRequest | undefined
  createTime?: string | undefined
  dispatchCount?: number | undefined
  dispatchDeadline?: string | undefined
  firstAttempt?: Attempt | undefined
  httpRequest?: HttpRequest | undefined
  lastAttempt?: Attempt | undefined
  name?: string | undefined
  pullMessage?: PullMessage | undefined
  responseCount?: number | undefined
  scheduleTime?: string | undefined
  view?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
}
type AppEngineHttpQueue = { appEngineRoutingOverride?: AppEngineRouting | undefined }
type Header = { key?: string | undefined; value?: string | undefined }
type HeaderOverride = { header?: Header | undefined }
type PathOverride = { path?: string | undefined }
type QueryOverride = { queryParams?: string | undefined }
type UriOverride = {
  host?: string | undefined
  pathOverride?: PathOverride | undefined
  port?: string | undefined
  queryOverride?: QueryOverride | undefined
  scheme?: 'SCHEME_UNSPECIFIED' | 'HTTP' | 'HTTPS' | undefined
  uriOverrideEnforceMode?:
    | 'URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED'
    | 'IF_NOT_EXISTS'
    | 'ALWAYS'
    | undefined
}
type HttpTarget = {
  headerOverrides?: HeaderOverride[] | undefined
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
  uriOverride?: UriOverride | undefined
}
type RateLimits = {
  maxBurstSize?: number | undefined
  maxConcurrentDispatches?: number | undefined
  maxDispatchesPerSecond?: number | undefined
}
type RetryConfig = {
  maxAttempts?: number | undefined
  maxBackoff?: string | undefined
  maxDoublings?: number | undefined
  maxRetryDuration?: string | undefined
  minBackoff?: string | undefined
}
type StackdriverLoggingConfig = { samplingRatio?: number | undefined }
type QueueStats = {
  concurrentDispatchesCount?: string | undefined
  effectiveExecutionRate?: number | undefined
  executedLastMinuteCount?: string | undefined
  oldestEstimatedArrivalTime?: string | undefined
  tasksCount?: string | undefined
}
type Queue = {
  appEngineHttpQueue?: AppEngineHttpQueue | undefined
  httpTarget?: HttpTarget | undefined
  name?: string | undefined
  purgeTime?: string | undefined
  rateLimits?: RateLimits | undefined
  retryConfig?: RetryConfig | undefined
  stackdriverLoggingConfig?: StackdriverLoggingConfig | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'PAUSED' | 'DISABLED' | undefined
  stats?: QueueStats | undefined
  taskTtl?: string | undefined
  tombstoneTtl?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'PULL' | 'PUSH' | undefined
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
type PauseQueueRequest = { [x: string]: unknown }
type PurgeQueueRequest = { [x: string]: unknown }
type ResumeQueueRequest = { [x: string]: unknown }
type RunTaskRequest = { responseView?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined }
type ListQueuesResponse = { nextPageToken?: string | undefined; queues?: Queue[] | undefined }
type ListTasksResponse = { nextPageToken?: string | undefined; tasks?: Task[] | undefined }
type CreateTaskRequest = {
  responseView?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
  task?: Task | undefined
}
type HttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type BufferTaskRequest = { body?: HttpBody | undefined }
type BufferTaskResponse = { task?: Task | undefined }
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2beta3/:name': {
      $delete: {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            responseView?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: Task
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
        } & { json: Queue }
        output: Queue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:name/locations': {
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
    '/v2beta3/:name:pause': {
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
        } & { json: PauseQueueRequest }
        output: Queue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:name:purge': {
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
        } & { json: PurgeQueueRequest }
        output: Queue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:name:resume': {
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
        } & { json: ResumeQueueRequest }
        output: Queue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:name:run': {
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
        } & { json: RunTaskRequest }
        output: Task
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:parent/queues': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
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
        output: ListQueuesResponse
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
        } & { json: Queue }
        output: Queue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:parent/tasks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            responseView?: 'VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ListTasksResponse
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
        } & { json: CreateTaskRequest }
        output: Task
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:queue/tasks/:taskId:buffer': {
      $post: {
        input: { param: { queue: string; taskId: string } } & {
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
        } & { json: BufferTaskRequest }
        output: BufferTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:resource:getIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta3/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
