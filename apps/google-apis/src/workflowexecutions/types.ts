type Position = {
  column?: string | undefined
  length?: string | undefined
  line?: string | undefined
}
type StackTraceElement = {
  position?: Position | undefined
  routine?: string | undefined
  step?: string | undefined
}
type StackTrace = { elements?: StackTraceElement[] | undefined }
type Error = {
  context?: string | undefined
  payload?: string | undefined
  stackTrace?: StackTrace | undefined
}
type Step = { routine?: string | undefined; step?: string | undefined }
type Status = { currentSteps?: Step[] | undefined }
type Execution = {
  argument?: string | undefined
  callLogLevel?: 'CALL_LOG_LEVEL_UNSPECIFIED' | 'LOG_ALL_CALLS' | 'LOG_ERRORS_ONLY' | undefined
  endTime?: string | undefined
  error?: Error | undefined
  name?: string | undefined
  result?: string | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | undefined
  status?: Status | undefined
  workflowRevisionId?: string | undefined
}
type CancelExecutionRequest = { [x: string]: unknown }
type ListExecutionsResponse = {
  executions?: Execution[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?: 'EXECUTION_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: Execution
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:cancel': {
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
        } & { json: CancelExecutionRequest }
        output: Execution
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/executions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'EXECUTION_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ListExecutionsResponse
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
        } & { json: Execution }
        output: Execution
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
