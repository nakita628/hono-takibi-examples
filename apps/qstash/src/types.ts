type PublishResponse = { messageId?: string | undefined; deduplicated?: boolean | undefined }
type PublishToUrlGroupResponse = {
  messageId?: string | undefined
  deduplicated?: boolean | undefined
  url?: string | undefined
}
type Error = { error: string }
type Message = {
  messageId?: string | undefined
  url?: string | undefined
  topicName?: string | undefined
  endpointName?: string | undefined
  method?: string | undefined
  header?: { [x: string]: string[] } | undefined
  body?: string | undefined
  bodyBase64?: string | undefined
  maxRetries?: number | undefined
  notBefore?: bigint | undefined
  createdAt?: bigint | undefined
  callback?: string | undefined
  failureCallback?: string | undefined
  queueName?: string | undefined
  scheduleId?: string | undefined
  callerIP?: string | undefined
  label?: string | undefined
  labels?: string[] | undefined
  flowControlKey?: string | undefined
  rate?: number | undefined
  period?: number | undefined
  parallelism?: number | undefined
}
type BulkAction = {
  actionId?: string | undefined
  kind?: 'cancel' | undefined
  state?: 'IN_PROGRESS' | 'FINISHED' | undefined
  total?: bigint | undefined
  processed?: bigint | undefined
  createdAt?: bigint | undefined
  completedAt?: bigint | undefined
  filter?: { [x: string]: string[] } | undefined
}
type Queue = {
  name?: string | undefined
  createdAt?: bigint | undefined
  updatedAt?: bigint | undefined
  parallelism?: number | undefined
  paused?: boolean | undefined
  lag?: number | undefined
}
type Schedule = {
  scheduleId: string
  cron: string
  destination: string
  createdAt: bigint
  method: string
  header?: { [x: string]: string[] } | undefined
  body?: string | undefined
  retries?: number | undefined
  delay?: number | undefined
  callback?: string | undefined
  failureCallback?: string | undefined
  callerIp?: string | undefined
  isPaused: boolean
  flowControlKey?: string | undefined
  parallelism?: number | undefined
  rate?: number | undefined
  period?: number | undefined
  retryDelayExpression?: string | undefined
  label?: string | undefined
  labels?: string[] | undefined
  lastScheduleTime?: bigint | undefined
  nextScheduleTime?: bigint | undefined
  lastScheduleStates?: { [x: string]: string } | undefined
}
type Endpoint = { name?: string | undefined; url?: string | undefined }
type URLGroup = {
  name?: string | undefined
  createdAt?: number | undefined
  updatedAt?: number | undefined
  endpoints?: Endpoint[] | undefined
}
type DLQMessage = {
  messageId?: string | undefined
  url?: string | undefined
  topicName?: string | undefined
  endpointName?: string | undefined
  method?: string | undefined
  header?: { [x: string]: string[] } | undefined
  body?: string | undefined
  bodyBase64?: string | undefined
  maxRetries?: number | undefined
  notBefore?: bigint | undefined
  createdAt?: bigint | undefined
  callback?: string | undefined
  failureCallback?: string | undefined
  queueName?: string | undefined
  scheduleId?: string | undefined
  callerIP?: string | undefined
  label?: string | undefined
  labels?: string[] | undefined
  flowControlKey?: string | undefined
  rate?: number | undefined
  period?: number | undefined
  parallelism?: number | undefined
  responseStatus?: number | undefined
  responseHeader?: { [x: string]: string[] } | undefined
  responseBody?: string | undefined
  responseBodyBase64?: string | undefined
}
type FlowControlKey = {
  flowControlKey?: string | undefined
  waitListSize?: number | undefined
  parallelismMax?: number | undefined
  parallelismCount?: number | undefined
  rateMax?: number | undefined
  rateCount?: number | undefined
  ratePeriod?: number | undefined
  ratePeriodStart?: number | undefined
  isPinnedParallelism?: boolean | undefined
  isPinnedRate?: boolean | undefined
  isPaused?: boolean | undefined
}
type SigningKeys = { current?: string | undefined; next?: string | undefined }
type LogEntry = {
  time?: bigint | undefined
  messageId?: string | undefined
  header?: { [x: string]: string[] } | undefined
  body?: string | undefined
  state?:
    | 'CREATED'
    | 'ACTIVE'
    | 'RETRY'
    | 'ERROR'
    | 'DELIVERED'
    | 'FAILED'
    | 'CANCEL_REQUESTED'
    | 'CANCELLED'
    | undefined
  error?: string | undefined
  nextDeliveryTime?: bigint | undefined
  url?: string | undefined
  topicName?: string | undefined
  endpointName?: string | undefined
  scheduleId?: string | undefined
  queueName?: string | undefined
  responseStatus?: number | undefined
  responseBody?: string | undefined
  responseHeaders?: { [x: string]: string[] } | undefined
  timeout?: number | undefined
  method?: string | undefined
  callback?: string | undefined
  callbackHeaders?: { [x: string]: string[] } | undefined
  failureCallback?: string | undefined
  failureCallbackHeaders?: { [x: string]: string[] } | undefined
  maxRetries?: number | undefined
  retryDelayExpression?: string | undefined
  label?: string | undefined
  labels?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/publish/:destination': {
      $post:
        | {
            input: { param: { destination: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Not-Before'?: number | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Deduplication-Id'?: string | undefined
                'Upstash-Content-Based-Deduplication'?: 'true' | 'false' | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: PublishResponse | { messages?: PublishToUrlGroupResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destination: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Not-Before'?: number | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Deduplication-Id'?: string | undefined
                'Upstash-Content-Based-Deduplication'?: 'true' | 'false' | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { destination: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Not-Before'?: number | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Deduplication-Id'?: string | undefined
                'Upstash-Content-Based-Deduplication'?: 'true' | 'false' | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v2/enqueue/:queueName/:destination': {
      $post:
        | {
            input: { param: { queueName: string; destination: string; queueName: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Deduplication-Id'?: string | undefined
                'Upstash-Content-Based-Deduplication'?: 'true' | 'false' | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: PublishResponse | { messages?: PublishToUrlGroupResponse[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueName: string; destination: string; queueName: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Deduplication-Id'?: string | undefined
                'Upstash-Content-Based-Deduplication'?: 'true' | 'false' | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueName: string; destination: string; queueName: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Deduplication-Id'?: string | undefined
                'Upstash-Content-Based-Deduplication'?: 'true' | 'false' | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/batch': {
      $post:
        | {
            input: {
              json: {
                destination: string
                body?: string | undefined
                headers?: { [x: string]: string } | undefined
                queue?: string | undefined
              }[]
            }
            output: PublishResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                destination: string
                body?: string | undefined
                headers?: { [x: string]: string } | undefined
                queue?: string | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/messages/:messageId': {
      $get:
        | {
            input: { param: { messageId: string } }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { messageId: string } }
            output: { cancelled?: number | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { messageId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/messages/:messageId/retry': {
      $post:
        | { input: { param: { messageId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { messageId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { messageId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/messages': {
      $delete:
        | {
            input: {
              query: {
                messageIds?: string[] | undefined
                topicName?: string[] | undefined
                queueName?: string[] | undefined
                url?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
                label?: string[] | undefined
                flowControlKey?: string[] | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                scheduleId?: string[] | undefined
                callerIp?: string[] | undefined
                callerIP?: string[] | undefined
                async?: boolean | undefined
                count?: number | undefined
              }
            }
            output: { cancelled?: number | undefined; actionId?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                messageIds?: string[] | undefined
                topicName?: string[] | undefined
                queueName?: string[] | undefined
                url?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
                label?: string[] | undefined
                flowControlKey?: string[] | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                scheduleId?: string[] | undefined
                callerIp?: string[] | undefined
                callerIP?: string[] | undefined
                async?: boolean | undefined
                count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                messageIds?: string[] | undefined
                topicName?: string[] | undefined
                queueName?: string[] | undefined
                url?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
                label?: string[] | undefined
                flowControlKey?: string[] | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                scheduleId?: string[] | undefined
                callerIp?: string[] | undefined
                callerIP?: string[] | undefined
                async?: boolean | undefined
                count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 412
          }
        | {
            input: {
              query: {
                messageIds?: string[] | undefined
                topicName?: string[] | undefined
                queueName?: string[] | undefined
                url?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
                label?: string[] | undefined
                flowControlKey?: string[] | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                scheduleId?: string[] | undefined
                callerIp?: string[] | undefined
                callerIP?: string[] | undefined
                async?: boolean | undefined
                count?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/bulkActions': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                count?: number | undefined
                state?: 'IN_PROGRESS' | 'FINISHED' | undefined
              }
            }
            output: { bulkActions?: BulkAction[] | undefined; cursor?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                count?: number | undefined
                state?: 'IN_PROGRESS' | 'FINISHED' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/bulkActions/:actionId': {
      $get:
        | {
            input: { param: { actionId: string } }
            output: BulkAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actionId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/queues': {
      $post:
        | {
            input: { json: { queueName: string; parallelism: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { queueName: string; parallelism: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { queueName: string; parallelism: number } }
            output: Error
            outputFormat: 'json'
            status: 412
          }
      $get: { input: {}; output: Queue[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/queues/:queueName': {
      $get:
        | {
            input: { param: { queueName: string } }
            output: Queue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queueName: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { queueName: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete: {
        input: { param: { queueName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/queues/:queueName/pause': {
      $post:
        | { input: { param: { queueName: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { queueName: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/queues/:queueName/resume': {
      $post:
        | { input: { param: { queueName: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { queueName: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/schedules/:destination': {
      $post:
        | {
            input: { param: { destination: string } } & {
              header: {
                'Upstash-Cron': string
                'Upstash-Schedule-Id'?: string | undefined
                'Content-Type'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
                'Upstash-Label'?: string | undefined
              }
            } & { json: { [x: string]: unknown } | string | File }
            output: { scheduleId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destination: string } } & {
              header: {
                'Upstash-Cron': string
                'Upstash-Schedule-Id'?: string | undefined
                'Content-Type'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
                'Upstash-Label'?: string | undefined
              }
            } & { json: { [x: string]: unknown } | string | File }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { destination: string } } & {
              header: {
                'Upstash-Cron': string
                'Upstash-Schedule-Id'?: string | undefined
                'Content-Type'?: string | undefined
                'Upstash-Method'?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
                'Upstash-Timeout'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Callback'?: string | undefined
                'Upstash-Callback-Forward-*'?: string | undefined
                'Upstash-Callback-*'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Failure-Callback-*'?: string | undefined
                'Upstash-Redact-Fields'?: string | undefined
                'Upstash-Label'?: string | undefined
              }
            } & { json: { [x: string]: unknown } | string | File }
            output: Error
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/v2/schedules': { $get: { input: {}; output: Schedule[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/v2/schedules/:scheduleId': {
      $get:
        | {
            input: { param: { scheduleId: string } }
            output: Schedule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scheduleId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete: {
        input: { param: { scheduleId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/schedules/:scheduleId/pause': {
      $post: {
        input: { param: { scheduleId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/schedules/:scheduleId/resume': {
      $post: {
        input: { param: { scheduleId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/topics': { $get: { input: {}; output: URLGroup[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/v2/topics/:urlGroupName': {
      $get:
        | {
            input: { param: { urlGroupName: string } }
            output: URLGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { urlGroupName: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete: {
        input: { param: { urlGroupName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/topics/:urlGroupName/endpoints': {
      $post: {
        input: { param: { urlGroupName: string } } & {
          json: { endpoints: { url: string; name?: string | undefined }[] }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { urlGroupName: string } } & { json: { endpoints: Endpoint[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/dlq': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            messageId?: string | undefined
            url?: string[] | undefined
            topicName?: string[] | undefined
            scheduleId?: string[] | undefined
            queueName?: string[] | undefined
            fromDate?: bigint | undefined
            toDate?: bigint | undefined
            responseStatus?: number[] | undefined
            callerIp?: string[] | undefined
            label?: string[] | undefined
            count?: number | undefined
          }
        }
        output: { cursor?: string | undefined; messages?: DLQMessage[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          query: {
            dlqIds?: string[] | undefined
            cursor?: string | undefined
            messageId?: string | undefined
            url?: string[] | undefined
            topicName?: string[] | undefined
            scheduleId?: string[] | undefined
            queueName?: string[] | undefined
            fromDate?: bigint | undefined
            toDate?: bigint | undefined
            responseStatus?: number[] | undefined
            callerIp?: string[] | undefined
            label?: string[] | undefined
            flowControlKey?: string[] | undefined
            count?: number | undefined
          }
        }
        output: { cursor?: string | undefined; deleted?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/dlq/:dlqId': {
      $get:
        | {
            input: { param: { dlqId: string } }
            output: DLQMessage
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { dlqId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/v2/dlq/retry/:dlqId': {
      $post:
        | {
            input: { param: { dlqId: string } }
            output: PublishResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/v2/dlq/retry': {
      $post:
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                messageId?: string | undefined
                url?: string[] | undefined
                topicName?: string[] | undefined
                scheduleId?: string[] | undefined
                queueName?: string[] | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                responseStatus?: number[] | undefined
                callerIp?: string[] | undefined
                label?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: { cursor?: string | undefined; responses?: PublishResponse[] | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                messageId?: string | undefined
                url?: string[] | undefined
                topicName?: string[] | undefined
                scheduleId?: string[] | undefined
                queueName?: string[] | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                responseStatus?: number[] | undefined
                callerIp?: string[] | undefined
                label?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/flowControl': {
      $get: { input: {}; output: FlowControlKey[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/flowControl/:flowControlKey': {
      $get:
        | {
            input: { param: { flowControlKey: string } }
            output: FlowControlKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { flowControlKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/flowControl/:flowControlKey/pause': {
      $post:
        | {
            input: { param: { flowControlKey: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { flowControlKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/flowControl/:flowControlKey/resume': {
      $post:
        | {
            input: { param: { flowControlKey: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { flowControlKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/flowControl/:flowControlKey/pin': {
      $post:
        | {
            input: { param: { flowControlKey: string } } & {
              query: {
                parallelism?: number | undefined
                rate?: number | undefined
                period?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { flowControlKey: string } } & {
              query: {
                parallelism?: number | undefined
                rate?: number | undefined
                period?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/flowControl/:flowControlKey/unpin': {
      $post:
        | {
            input: { param: { flowControlKey: string } } & {
              query: { parallelism?: boolean | undefined; rate?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { flowControlKey: string } } & {
              query: { parallelism?: boolean | undefined; rate?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/flowControl/:flowControlKey/resetRate': {
      $post:
        | {
            input: { param: { flowControlKey: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { flowControlKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { flowControlKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/globalParallelism': {
      $get: {
        input: {}
        output: { parallelismMax?: number | undefined; parallelismCount?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/keys': { $get: { input: {}; output: SigningKeys; outputFormat: 'json'; status: 200 } }
  } & {
    '/v2/keys/rotate': {
      $post: { input: {}; output: SigningKeys; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/logs': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            messageId?: string | undefined
            state?:
              | 'CREATED'
              | 'ACTIVE'
              | 'RETRY'
              | 'ERROR'
              | 'IN_PROGRESS'
              | 'DELIVERED'
              | 'CANCEL_REQUESTED'
              | 'CANCELLED'
              | undefined
            url?: string | undefined
            topicName?: string | undefined
            scheduleId?: string | undefined
            queueName?: string | undefined
            fromDate?: bigint | undefined
            toDate?: bigint | undefined
            count?: number | undefined
            label?: string[] | undefined
          }
        }
        output: { cursor?: string | undefined; logs?: LogEntry[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
