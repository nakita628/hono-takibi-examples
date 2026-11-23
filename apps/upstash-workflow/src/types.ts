type Error = { error: string }
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
type StepInfo = {
  stepId?: bigint | undefined
  stepName?: string | undefined
  stepType?: string | undefined
  callType?: string | undefined
  messageId?: string | undefined
  state?: string | undefined
  createdAt?: bigint | undefined
  out?: string | undefined
  callUrl?: string | undefined
  callMethod?: string | undefined
  callBody?: string | undefined
  callHeaders?: { [x: string]: string[] } | undefined
  callResponseStatus?: bigint | undefined
  callResponseBody?: string | undefined
  callResponseHeaders?: { [x: string]: string[] } | undefined
  waitEventId?: string | undefined
  waitTimeout?: boolean | undefined
  invokedWorkflowRunId?: string | undefined
  invokedWorkflowUrl?: string | undefined
  retries?: number | undefined
  nextDeliveryTime?: bigint | undefined
}
type GroupedSteps = {
  steps?: StepInfo[] | undefined
  type?: 'parallel' | 'sequential' | 'next' | undefined
}
type InvokerContext = {
  workflowRunId?: string | undefined
  workflowUrl?: string | undefined
  workflowRunCreatedAt?: bigint | undefined
}
type FailureFunction = {
  messageId?: string | undefined
  url?: string | undefined
  state?: string | undefined
  dlqId?: string | undefined
  failHeaders?: { [x: string]: string[] } | undefined
  failStatus?: number | undefined
  failResponse?: string | undefined
  responseBody?: string | undefined
  responseHeaders?: { [x: string]: string[] } | undefined
  responseStatus?: number | undefined
  maxRetries?: number | undefined
}
type WorkflowRun = {
  workflowRunId?: string | undefined
  workflowUrl?: string | undefined
  workflowState?: string | undefined
  workflowRunCreatedAt?: bigint | undefined
  workflowRunCompletedAt?: bigint | undefined
  workflowRunCallerIp?: string | undefined
  steps?: GroupedSteps[] | undefined
  workflowRunResponse?: string | undefined
  invoker?: InvokerContext | undefined
  failureFunction?: FailureFunction | undefined
  dlqId?: string | undefined
  label?: string | undefined
  labels?: string[] | undefined
  flowControlKey?: string | undefined
}
type WorkflowDLQMessage = {
  dlqId?: string | undefined
  workflowUrl?: string | undefined
  workflowRunId?: string | undefined
  workflowCreatedAt?: bigint | undefined
  url?: string | undefined
  method?: string | undefined
  header?: { [x: string]: string[] } | undefined
  body?: string | undefined
  bodyBase64?: string | undefined
  maxRetries?: number | undefined
  createdAt?: bigint | undefined
  failureCallback?: string | undefined
  callerIP?: string | undefined
  label?: string | undefined
  labels?: string[] | undefined
  flowControlKey?: string | undefined
  failureFunctionState?: string | undefined
  responseStatus?: number | undefined
  responseHeader?: { [x: string]: string[] } | undefined
  responseBody?: string | undefined
  responseBodyBase64?: string | undefined
}
type FlowControlKey = { flowControlKey?: string | undefined; waitlistSize?: number | undefined }
type SigningKeys = { current?: string | undefined; next?: string | undefined }
type Waiter = {
  url?: string | undefined
  headers?: { [x: string]: string[] } | undefined
  deadline?: bigint | undefined
  timeoutBody?: string | undefined
  timeoutUrl?: string | undefined
  timeoutHeaders?: { [x: string]: string[] } | undefined
}
type NotifyResponse = {
  waiter?: Waiter | undefined
  messageId?: string | undefined
  deduplicated?: boolean | undefined
  error?: string | undefined
  workflowRunId?: string | undefined
  workflowCreatedAt?: bigint | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/trigger/:workflowUrl': {
      $post:
        | {
            input: { param: { workflowUrl: string } } & {
              header: {
                'Upstash-Workflow-RunId'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Not-Before'?: number | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: { workflowRunId?: string | undefined; workflowCreatedAt?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowUrl: string } } & {
              header: {
                'Upstash-Workflow-RunId'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Not-Before'?: number | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowUrl: string } } & {
              header: {
                'Upstash-Workflow-RunId'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Not-Before'?: number | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowUrl: string } } & {
              header: {
                'Upstash-Workflow-RunId'?: string | undefined
                'Upstash-Forward-*'?: string | undefined
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Not-Before'?: number | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
                'Upstash-Failure-Callback-Forward-*'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
              }
            } & { json: string | { [x: string]: unknown } | File }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/batch/trigger': {
      $post:
        | {
            input: {
              json: {
                destination: string
                body?: string | undefined
                headers?: { [x: string]: string } | undefined
              }[]
            }
            output: {
              workflowRunId?: string | undefined
              workflowCreatedAt?: bigint | undefined
              deduplicated?: boolean | undefined
            }[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                destination: string
                body?: string | undefined
                headers?: { [x: string]: string } | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                destination: string
                body?: string | undefined
                headers?: { [x: string]: string } | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                destination: string
                body?: string | undefined
                headers?: { [x: string]: string } | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/runs/:workflowRunId': {
      $delete:
        | {
            input: { param: { workflowRunId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { workflowRunId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { workflowRunId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/workflows/runs': {
      $delete:
        | {
            input: {
              query: {
                workflowRunIds?: string[] | undefined
                workflowUrl?: string[] | undefined
                workflowUrlExactMatch?: boolean | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
                label?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
                async?: boolean | undefined
                count?: number | undefined
              }
            }
            output: { cancelled?: number | undefined; actionId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workflowRunIds?: string[] | undefined
                workflowUrl?: string[] | undefined
                workflowUrlExactMatch?: boolean | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
                label?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
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
                workflowRunIds?: string[] | undefined
                workflowUrl?: string[] | undefined
                workflowUrlExactMatch?: boolean | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
                label?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
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
                workflowRunIds?: string[] | undefined
                workflowUrl?: string[] | undefined
                workflowUrlExactMatch?: boolean | undefined
                fromDate?: number | undefined
                toDate?: number | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
                label?: string[] | undefined
                host?: string[] | undefined
                path?: string[] | undefined
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
        | {
            input: { param: { messageId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/bulkActions': {
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
    '/v2/workflows/bulkActions/:actionId': {
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
    '/v2/workflows/logs': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                workflowUrl?: string | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                workflowRuns?: string | undefined
                state?: string | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                count?: number | undefined
                trimBody?: number | undefined
                label?: string[] | undefined
                flowControlKey?: string | undefined
                callerIp?: string | undefined
              }
            }
            output: { cursor?: string | undefined; runs?: WorkflowRun[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                workflowUrl?: string | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                workflowRuns?: string | undefined
                state?: string | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                count?: number | undefined
                trimBody?: number | undefined
                label?: string[] | undefined
                flowControlKey?: string | undefined
                callerIp?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                workflowUrl?: string | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                workflowRuns?: string | undefined
                state?: string | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                count?: number | undefined
                trimBody?: number | undefined
                label?: string[] | undefined
                flowControlKey?: string | undefined
                callerIp?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                workflowUrl?: string | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                workflowRuns?: string | undefined
                state?: string | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                count?: number | undefined
                trimBody?: number | undefined
                label?: string[] | undefined
                flowControlKey?: string | undefined
                callerIp?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                workflowUrl?: string | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                workflowRuns?: string | undefined
                state?: string | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                count?: number | undefined
                trimBody?: number | undefined
                label?: string[] | undefined
                flowControlKey?: string | undefined
                callerIp?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/dlq': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: { cursor?: string | undefined; messages?: WorkflowDLQMessage[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: { deleted?: bigint | undefined; cursor?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/dlq/:dlqId': {
      $get:
        | {
            input: { param: { dlqId: string } }
            output: WorkflowDLQMessage
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $delete:
        | { input: { param: { dlqId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { dlqId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v2/workflows/dlq/resume/:dlqId': {
      $post:
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: { workflowRunId?: string | undefined; workflowCreatedAt?: bigint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/dlq/resume': {
      $post:
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: {
              workflowRuns?:
                | { workflowRunId?: string | undefined; workflowCreatedAt?: bigint | undefined }[]
                | undefined
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/dlq/restart/:dlqId': {
      $post:
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: { workflowRunId?: string | undefined; workflowCreatedAt?: bigint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dlqId: string } } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/dlq/restart': {
      $post:
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: {
              workflowRuns?:
                | { workflowRunId?: string | undefined; workflowCreatedAt?: bigint | undefined }[]
                | undefined
              cursor?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                dlqIds?: string[] | undefined
                cursor?: string | undefined
                count?: number | undefined
                fromDate?: bigint | undefined
                toDate?: bigint | undefined
                workflowUrl?: string[] | undefined
                workflowRunId?: string | undefined
                workflowCreatedAt?: bigint | undefined
                label?: string[] | undefined
                failureFunctionState?: string[] | undefined
                callerIp?: string[] | undefined
                flowControlKey?: string[] | undefined
              }
            } & {
              header: {
                'Upstash-Retries'?: number | undefined
                'Upstash-Delay'?: string | undefined
                'Upstash-Retry-Delay'?: string | undefined
                'Upstash-Flow-Control-Key'?: string | undefined
                'Upstash-Flow-Control-Value'?: string | undefined
                'Upstash-Label'?: string | undefined
                'Upstash-Failure-Callback'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/workflows/dlq/callback/:dlqId': {
      $post:
        | {
            input: { param: { dlqId: string } }
            output: { workflowRunId?: string | undefined; workflowCreatedAt?: bigint | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $delete:
        | { input: { param: { dlqId: string } }; output: {}; outputFormat: string; status: 302 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { dlqId: string } }; output: Error; outputFormat: 'json'; status: 500 }
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
      $get:
        | { input: {}; output: FlowControlKey; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/v2/notify/:eventId': {
      $post:
        | {
            input: { param: { eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: NotifyResponse[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/notify/:workflowRunId/:eventId': {
      $post:
        | {
            input: { param: { workflowRunId: string; eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: NotifyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workflowRunId: string; eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowRunId: string; eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowRunId: string; eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowRunId: string; eventId: string } } & {
              json: { [x: string]: unknown } | string | File
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/waiters/:eventId': {
      $get:
        | {
            input: { param: { eventId: string } }
            output: Waiter[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
