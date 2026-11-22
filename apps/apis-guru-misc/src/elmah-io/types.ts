type Deployment = {
  created?: string | undefined
  createdBy?: string | undefined
  description?: string | undefined
  id?: string | undefined
  logId?: string | undefined
  userEmail?: string | undefined
  userName?: string | undefined
  version?: string | undefined
}
type CreateDeployment = {
  created?: string | undefined
  description?: string | undefined
  logId?: string | undefined
  userEmail?: string | undefined
  userName?: string | undefined
  version: string
}
type CreateDeploymentResult = { location?: string | undefined }
type CreateHeartbeat = {
  application?: string | undefined
  reason?: string | undefined
  result?: string | undefined
  took?: bigint | undefined
  version?: string | undefined
}
type Log = {
  color?: string | undefined
  disabled?: boolean | undefined
  environmentName?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type CreateLog = { name: string }
type CreateLogResult = { location?: string | undefined }
type Search = { from?: string | undefined; query?: string | undefined; to?: string | undefined }
type Breadcrumb = {
  action?: string | undefined
  dateTime?: string | undefined
  message?: string | undefined
  severity?: string | undefined
}
type Item = { key?: string | undefined; value?: string | undefined }
type MessageOverview = {
  application?: string | undefined
  breadcrumbs?: Breadcrumb[] | undefined
  category?: string | undefined
  code?: string | undefined
  cookies?: Item[] | undefined
  correlationId?: string | undefined
  data?: Item[] | undefined
  dateTime?: string | undefined
  detail?: string | undefined
  form?: Item[] | undefined
  hostname?: string | undefined
  id?: string | undefined
  method?: string | undefined
  queryString?: Item[] | undefined
  serverVariables?: Item[] | undefined
  severity?: string | undefined
  source?: string | undefined
  statusCode?: number | undefined
  title?: string | undefined
  titleTemplate?: string | undefined
  type?: string | undefined
  url?: string | undefined
  user?: string | undefined
  version?: string | undefined
}
type MessagesResult = { messages?: MessageOverview[] | undefined; total?: number | undefined }
type CreateMessage = {
  application?: string | undefined
  breadcrumbs?: Breadcrumb[] | undefined
  category?: string | undefined
  code?: string | undefined
  cookies?: Item[] | undefined
  correlationId?: string | undefined
  data?: Item[] | undefined
  dateTime?: string | undefined
  detail?: string | undefined
  form?: Item[] | undefined
  hostname?: string | undefined
  method?: string | undefined
  queryString?: Item[] | undefined
  serverVariables?: Item[] | undefined
  severity?: string | undefined
  source?: string | undefined
  statusCode?: number | undefined
  title?: string | undefined
  titleTemplate?: string | undefined
  type?: string | undefined
  url?: string | undefined
  user?: string | undefined
  version?: string | undefined
}
type CreateMessageResult = { location?: string | undefined }
type CreateBulkMessageResult = { location?: string | undefined; statusCode?: number | undefined }
type Message = {
  application?: string | undefined
  breadcrumbs?: Breadcrumb[] | undefined
  category?: string | undefined
  code?: string | undefined
  cookies?: Item[] | undefined
  correlationId?: string | undefined
  data?: Item[] | undefined
  dateTime?: string | undefined
  detail?: string | undefined
  form?: Item[] | undefined
  hostname?: string | undefined
  id?: string | undefined
  method?: string | undefined
  queryString?: Item[] | undefined
  serverVariables?: Item[] | undefined
  severity?: string | undefined
  source?: string | undefined
  statusCode?: number | undefined
  title?: string | undefined
  titleTemplate?: string | undefined
  type?: string | undefined
  url?: string | undefined
  user?: string | undefined
  version?: string | undefined
}
type UptimeCheck = {
  id?: string | undefined
  name?: string | undefined
  status?: string | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/deployments': {
      $get:
        | { input: {}; output: Deployment[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Deployment[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Deployment[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 402 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
      $post:
        | {
            input: { json: CreateDeployment }
            output: CreateDeploymentResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateDeployment }
            output: CreateDeploymentResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: CreateDeployment }
            output: CreateDeploymentResult
            outputFormat: 'text'
            status: 201
          }
        | { input: { json: CreateDeployment }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateDeployment }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateDeployment }; output: {}; outputFormat: string; status: 402 }
        | { input: { json: CreateDeployment }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: CreateDeployment }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v3/deployments/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $get:
        | {
            input: { param: { id: string } }
            output: Deployment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: Deployment
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: Deployment
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v3/heartbeats/:logId/:id': {
      $post:
        | {
            input: { param: { id: string; logId: string } } & { json: CreateHeartbeat }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; logId: string } } & { json: CreateHeartbeat }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; logId: string } } & { json: CreateHeartbeat }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; logId: string } } & { json: CreateHeartbeat }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: string; logId: string } } & { json: CreateHeartbeat }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; logId: string } } & { json: CreateHeartbeat }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/logs': {
      $get:
        | { input: {}; output: Log[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Log[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Log[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 402 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
      $post:
        | { input: { json: CreateLog }; output: CreateLogResult; outputFormat: 'json'; status: 201 }
        | { input: { json: CreateLog }; output: CreateLogResult; outputFormat: 'text'; status: 201 }
        | { input: { json: CreateLog }; output: CreateLogResult; outputFormat: 'text'; status: 201 }
        | { input: { json: CreateLog }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: CreateLog }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateLog }; output: {}; outputFormat: string; status: 402 }
        | { input: { json: CreateLog }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v3/logs/:id': {
      $get:
        | { input: { param: { id: string } }; output: Log; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Log; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Log; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v3/logs/:id/_diagnose': {
      $get:
        | { input: { param: { id: string } }; output: string[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: string[]; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v3/logs/:id/_disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v3/logs/:id/_enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 402 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v3/messages/:logId': {
      $delete:
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { logId: string } } & {
              query: {
                pageIndex?: number | undefined
                pageSize?: number | undefined
                query?: string | undefined
                from?: string | undefined
                to?: string | undefined
                includeHeaders?: boolean | undefined
              }
            }
            output: MessagesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { logId: string } } & {
              query: {
                pageIndex?: number | undefined
                pageSize?: number | undefined
                query?: string | undefined
                from?: string | undefined
                to?: string | undefined
                includeHeaders?: boolean | undefined
              }
            }
            output: MessagesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { logId: string } } & {
              query: {
                pageIndex?: number | undefined
                pageSize?: number | undefined
                query?: string | undefined
                from?: string | undefined
                to?: string | undefined
                includeHeaders?: boolean | undefined
              }
            }
            output: MessagesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { logId: string } } & {
              query: {
                pageIndex?: number | undefined
                pageSize?: number | undefined
                query?: string | undefined
                from?: string | undefined
                to?: string | undefined
                includeHeaders?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { logId: string } } & {
              query: {
                pageIndex?: number | undefined
                pageSize?: number | undefined
                query?: string | undefined
                from?: string | undefined
                to?: string | undefined
                includeHeaders?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { logId: string } } & {
              query: {
                pageIndex?: number | undefined
                pageSize?: number | undefined
                query?: string | undefined
                from?: string | undefined
                to?: string | undefined
                includeHeaders?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { logId: string } } & {
              query: {
                pageIndex?: number | undefined
                pageSize?: number | undefined
                query?: string | undefined
                from?: string | undefined
                to?: string | undefined
                includeHeaders?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: CreateMessageResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: CreateMessageResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: CreateMessageResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: CreateMessageResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: CreateMessageResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: CreateMessageResult
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/messages/:logId/_bulk': {
      $post:
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: CreateBulkMessageResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: CreateBulkMessageResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: CreateBulkMessageResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { logId: string } } & { json: CreateMessage[] }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/messages/:logId/_fix': {
      $post:
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { logId: string } } & { json: Search }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/messages/:logId/:id': {
      $delete:
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $get:
        | {
            input: { param: { id: string; logId: string } }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; logId: string } }
            output: Message
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; logId: string } }
            output: Message
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/messages/:logId/:id/_fix': {
      $post:
        | {
            input: { param: { id: string; logId: string } } & {
              query: { markAllAsFixed?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; logId: string } } & {
              query: { markAllAsFixed?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; logId: string } } & {
              query: { markAllAsFixed?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; logId: string } } & {
              query: { markAllAsFixed?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: string; logId: string } } & {
              query: { markAllAsFixed?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; logId: string } } & {
              query: { markAllAsFixed?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/messages/:logId/:id/_hide': {
      $post:
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; logId: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/sourcemaps/:logId': {
      $post:
        | {
            input: { param: { logId: string } } & {
              form: { MinifiedJavaScript: File; Path: string; SourceMap: File }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { logId: string } } & {
              form: { MinifiedJavaScript: File; Path: string; SourceMap: File }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { logId: string } } & {
              form: { MinifiedJavaScript: File; Path: string; SourceMap: File }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { logId: string } } & {
              form: { MinifiedJavaScript: File; Path: string; SourceMap: File }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { logId: string } } & {
              form: { MinifiedJavaScript: File; Path: string; SourceMap: File }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { logId: string } } & {
              form: { MinifiedJavaScript: File; Path: string; SourceMap: File }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/v3/uptimechecks': {
      $get:
        | { input: {}; output: UptimeCheck[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UptimeCheck[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: UptimeCheck[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 402 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  },
  '/'
>
export default routes
