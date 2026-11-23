type TemplateParameterSchema = {
  title: string
  description?: string | undefined
  steps: {
    title: string
    description?: string | undefined
    when?: string | boolean | undefined
    schema: { [x: string]: unknown }
  }[]
}
type Error = {
  error: { name: string; message: string; stack?: string | undefined; code?: string | undefined }
  request?: { method: string; url: string } | undefined
  response: { statusCode: number }
}
type ActionExample = { description: string; example: string }
type JsonObject = { [x: string]: { [x: string]: unknown } }
type Action = {
  id: string
  description?: string | undefined
  examples?: ActionExample[] | undefined
  schema?: { input?: JsonObject | undefined; output?: JsonObject | undefined } | undefined
}
type ListActionsResponse = Action[]
type TaskStatus = 'cancelled' | 'completed' | 'failed' | 'open' | 'processing' | 'skipped'
type SerializedTask = {
  id: string
  spec: { [x: string]: unknown }
  status: TaskStatus
  createdAt: string
  lastHeartbeatAt?: string | undefined
  createdBy?: string | undefined
}
type ListTasksResponse = { tasks: SerializedTask[]; totalTasks?: number | undefined }
type ScaffolderScaffoldOptions = {
  templateRef: string
  values: { [x: string]: { [x: string]: unknown } }
  secrets?: { [x: string]: string } | undefined
}
type ValidationError = {
  path: (string | number)[]
  property: string
  message: string
  instance: { [x: string]: unknown }
  name: string
  argument: boolean | number | { [x: string]: unknown } | string
  stack: string
}
type TaskEventType = 'cancelled' | 'completion' | 'log' | 'recovered'
type SerializedTaskEvent = {
  id: number
  isTaskRecoverable?: boolean | undefined
  taskId: string
  body: { message: string; status?: TaskStatus | undefined; stepId?: string | undefined }
  type: TaskEventType
  createdAt: string
}
type SerializedFile = {
  path: string
  content: string
  executable?: boolean | undefined
  symlink?: boolean | undefined
}
type ScaffolderUsageExample = {
  description?: string | undefined
  example: string
  notes?: string | undefined
}
type TemplateFilter = {
  description?: string | undefined
  schema?:
    | {
        input?: JsonObject | undefined
        arguments?: JsonObject[] | undefined
        output?: JsonObject | undefined
      }
    | undefined
  examples?: ScaffolderUsageExample[] | undefined
}
type TemplateGlobalFunction = {
  description?: string | undefined
  schema?: { arguments?: JsonObject[] | undefined; output?: JsonObject | undefined } | undefined
  examples?: ScaffolderUsageExample[] | undefined
}
type TemplateGlobalValue = {
  description?: string | undefined
  value: { [x: string]: unknown } | ({ [x: string]: unknown } | null)
}
type ListTemplatingExtensionsResponse = {
  filters: { [x: string]: TemplateFilter }
  globals: {
    functions: { [x: string]: TemplateGlobalFunction }
    values: { [x: string]: TemplateGlobalValue }
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/templates/:namespace/:kind/:name/parameter-schema': {
      $get:
        | {
            input: { param: { namespace: string; kind: string; name: string } }
            output: TemplateParameterSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { namespace: string; kind: string; name: string } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { namespace: string; kind: string; name: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v2/actions': {
      $get: { input: {}; output: ListActionsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/tasks': {
      $get:
        | {
            input: {
              query: {
                createdBy?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string[] | undefined
                status?: string[] | undefined
              }
            }
            output: ListTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                createdBy?: string[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string[] | undefined
                status?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
      $post:
        | {
            input: { json: ScaffolderScaffoldOptions }
            output: { id: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ScaffolderScaffoldOptions }
            output: { errors: ValidationError[] }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/tasks/:taskId': {
      $get:
        | {
            input: { param: { taskId: string } }
            output: SerializedTask
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'text'; status: 403 }
    }
  } & {
    '/v2/tasks/:taskId/cancel': {
      $post: {
        input: { param: { taskId: string } }
        output: { status?: TaskStatus | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/tasks/:taskId/retry': {
      $post:
        | {
            input: { param: { taskId: string } } & {
              json: { secrets?: { [x: string]: string } | undefined }
            }
            output: { id: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { taskId: string } } & {
              json: { secrets?: { [x: string]: string } | undefined }
            }
            output: { errors: ValidationError[] }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taskId: string } } & {
              json: { secrets?: { [x: string]: string } | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 409
          }
    }
  } & {
    '/v2/tasks/:taskId/events': {
      $get:
        | {
            input: { param: { taskId: string } } & { query: { after?: number | undefined } }
            output: SerializedTaskEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskId: string } } & { query: { after?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
    }
  } & {
    '/v2/dry-run': {
      $post:
        | {
            input: {
              json: {
                template: { [x: string]: unknown }
                values: JsonObject
                secrets?: { [x: string]: string } | undefined
                directoryContents: {
                  path?: string | undefined
                  base64Content?: string | undefined
                }[]
              }
            }
            output: {
              log: {
                body: {
                  message: string
                  status?: TaskStatus | undefined
                  stepId?: string | undefined
                }
              }[]
              directoryContents: {
                path: string
                executable?: boolean | undefined
                base64Content: string
              }[]
              output: JsonObject
              steps: { id: string; name: string; action: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                template: { [x: string]: unknown }
                values: JsonObject
                secrets?: { [x: string]: string } | undefined
                directoryContents: {
                  path?: string | undefined
                  base64Content?: string | undefined
                }[]
              }
            }
            output: { errors: ValidationError[] }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/autocomplete/:provider/:resource': {
      $post:
        | {
            input: { param: { provider: string; resource: string } } & {
              json: { context: { [x: string]: string }; token: string }
            }
            output: { results: { title?: string | undefined; id: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider: string; resource: string } } & {
              json: { context: { [x: string]: string }; token: string }
            }
            output: { message?: string | undefined; name?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/templating-extensions': {
      $get: {
        input: {}
        output: ListTemplatingExtensionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
