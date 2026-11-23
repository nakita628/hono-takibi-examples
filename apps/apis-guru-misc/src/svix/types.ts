type ApplicationOut = {
  createdAt: string
  id: string
  metadata?: ({ [x: string]: string } | null) | undefined
  name: string
  rateLimit?: (number | null) | undefined
  uid?: (string | null) | undefined
  updatedAt: string
}
type ListResponseApplicationOut = {
  data: ApplicationOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type HttpErrorOut = { code: string; detail: string }
type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type ApplicationIn = {
  metadata?: ({ [x: string]: string } | null) | undefined
  name: string
  rateLimit?: (number | null) | undefined
  uid?: (string | null) | undefined
}
type MessageStatus = 0 | 1 | 2 | 3
type StatusCodeClass = 0 | 100 | 200 | 300 | 400 | 500
type MessageAttemptTriggerType = 0 | 1
type MessageAttemptOut = {
  endpointId: string
  id: string
  msgId: string
  response: string
  responseStatusCode: number
  status: MessageStatus
  timestamp: string
  triggerType: MessageAttemptTriggerType
  url: string
}
type ListResponseMessageAttemptOut = {
  data: MessageAttemptOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type EndpointOut = {
  channels?: (string[] | null) | undefined
  createdAt: string
  description?: string | undefined
  disabled?: boolean | undefined
  filterTypes?: (string[] | null) | undefined
  id: string
  metadata?: ({ [x: string]: string } | null) | undefined
  rateLimit?: (number | null) | undefined
  uid?: (string | null) | undefined
  updatedAt: string
  url: string
  version: number
}
type ListResponseEndpointOut = {
  data: EndpointOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type EndpointIn = {
  channels?: (string[] | null) | undefined
  description?: string | undefined
  disabled?: boolean | undefined
  filterTypes?: (string[] | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  rateLimit?: (number | null) | undefined
  secret?: (string | null) | undefined
  uid?: (string | null) | undefined
  url: string
  version: number
}
type EndpointUpdate = {
  channels?: (string[] | null) | undefined
  description?: string | undefined
  disabled?: boolean | undefined
  filterTypes?: (string[] | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  rateLimit?: (number | null) | undefined
  uid?: (string | null) | undefined
  url: string
  version: number
}
type EndpointHeadersOut = { headers: { [x: string]: string }; sensitive: string[] }
type EndpointHeadersPatchIn = { headers: { [x: string]: string } }
type EndpointHeadersIn = { headers: { [x: string]: string } }
type EndpointMessageOut = {
  channels?: (string[] | null) | undefined
  eventId?: (string | null) | undefined
  eventType: string
  id: string
  nextAttempt?: (string | null) | undefined
  payload: { [x: string]: unknown }
  status: MessageStatus
  timestamp: string
}
type ListResponseEndpointMessageOut = {
  data: EndpointMessageOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type RecoverIn = { since: string; until?: (string | null) | undefined }
type BackgroundTaskStatus = 'running' | 'finished' | 'failed'
type RecoverOut = {
  id: string
  status: BackgroundTaskStatus
  task?: 'endpoint.recover' | undefined
}
type ReplayIn = { since: string; until?: (string | null) | undefined }
type ReplayOut = { id: string; status: BackgroundTaskStatus; task?: 'endpoint.replay' | undefined }
type EndpointSecretOut = { key: string }
type EndpointSecretRotateIn = { key?: (string | null) | undefined }
type EndpointStats = { fail: number; pending: number; sending: number; success: number }
type EndpointTransformationOut = {
  code?: (string | null) | undefined
  enabled?: boolean | undefined
}
type EndpointTransformationIn = {
  code?: (string | null) | undefined
  enabled?: boolean | undefined
}
type IntegrationOut = { createdAt: string; id: string; name: string; updatedAt: string }
type ListResponseIntegrationOut = {
  data: IntegrationOut[]
  done: boolean
  iterator?: (string | null) | undefined
}
type IntegrationIn = { name: string }
type IntegrationUpdate = { name: string }
type IntegrationKeyOut = { key: string }
type MessageOut = {
  channels?: (string[] | null) | undefined
  eventId?: (string | null) | undefined
  eventType: string
  id: string
  payload: { [x: string]: unknown }
  timestamp: string
}
type ListResponseMessageOut = {
  data: MessageOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type MessageIn = {
  application?: ApplicationIn | undefined
  channels?: (string[] | null) | undefined
  eventId?: (string | null) | undefined
  eventType: string
  payload: { [x: string]: unknown }
  payloadRetentionPeriod?: number | undefined
}
type MessageEndpointOut = {
  channels?: (string[] | null) | undefined
  createdAt: string
  description?: string | undefined
  disabled?: boolean | undefined
  filterTypes?: (string[] | null) | undefined
  id: string
  metadata?: ({ [x: string]: string } | null) | undefined
  nextAttempt?: (string | null) | undefined
  rateLimit?: (number | null) | undefined
  status: MessageStatus
  uid?: (string | null) | undefined
  url: string
  version: number
}
type ListResponseMessageEndpointOut = {
  data: MessageEndpointOut[]
  done: boolean
  iterator?: (string | null) | undefined
}
type MessageAttemptEndpointOut = {
  endpointId: string
  id: string
  msgId: string
  response: string
  responseStatusCode: number
  status: MessageStatus
  timestamp: string
  triggerType: MessageAttemptTriggerType
  url: string
}
type ListResponseMessageAttemptEndpointOut = {
  data: MessageAttemptEndpointOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type AppPortalAccessIn = { featureFlags?: string[] | undefined }
type AppPortalAccessOut = { token: string; url: string }
type ApplicationTokenExpireIn = { expiry?: (number | null) | undefined }
type DashboardAccessOut = { token: string; url: string }
type BackgroundTaskType = 'endpoint.replay' | 'endpoint.recover' | 'application.stats'
type BackgroundTaskOut = {
  data: { [x: string]: unknown }
  id: string
  status: BackgroundTaskStatus
  task: BackgroundTaskType
}
type ListResponseBackgroundTaskOut = {
  data: BackgroundTaskOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type EventTypeOut = {
  archived?: boolean | undefined
  createdAt: string
  description: string
  featureFlag?: (string | null) | undefined
  name: string
  schemas?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  updatedAt: string
}
type ListResponseEventTypeOut = {
  data: EventTypeOut[]
  done: boolean
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
}
type EventTypeIn = {
  archived?: boolean | undefined
  description: string
  featureFlag?: (string | null) | undefined
  name: string
  schemas?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type EventTypeUpdate = {
  archived?: boolean | undefined
  description: string
  featureFlag?: (string | null) | undefined
  schemas?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/app/': {
      $get:
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/': {
      $delete:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: ApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id/': {
      $get:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseMessageAttemptOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/attempt/msg/:msg_id/': {
      $get:
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                endpoint_id?: (string | null) | undefined
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseMessageAttemptOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                endpoint_id?: (string | null) | undefined
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                endpoint_id?: (string | null) | undefined
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                endpoint_id?: (string | null) | undefined
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                endpoint_id?: (string | null) | undefined
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                endpoint_id?: (string | null) | undefined
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                endpoint_id?: (string | null) | undefined
                iterator?: (string | null) | undefined
                limit?: number | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/': {
      $get:
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseEndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointIn }
            output: EndpointOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/': {
      $delete:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: EndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: EndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: EndpointOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/headers/': {
      $get:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: EndpointHeadersOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersPatchIn }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersPatchIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersPatchIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersPatchIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersPatchIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersPatchIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersPatchIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersIn }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/msg/': {
      $get:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseEndpointMessageOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/recover/': {
      $post:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: RecoverIn }
            output: RecoverOut
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: RecoverIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/replay-missing/': {
      $post:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ReplayIn }
            output: ReplayOut
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ReplayIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ReplayIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ReplayIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ReplayIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ReplayIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ReplayIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/': {
      $get:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: EndpointSecretOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/rotate/': {
      $post:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/stats/': {
      $get:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: EndpointStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/transformation/': {
      $get:
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: EndpointTransformationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointTransformationIn }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointTransformationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointTransformationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointTransformationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointTransformationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointTransformationIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EndpointTransformationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/integration/': {
      $get:
        | {
            input: { param: { app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseIntegrationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationIn }
            output: IntegrationOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/integration/:integ_id/': {
      $delete:
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: IntegrationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationUpdate }
            output: IntegrationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationUpdate }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: IntegrationUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/integration/:integ_id/key/': {
      $get:
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: IntegrationKeyOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/integration/:integ_id/key/rotate/': {
      $post:
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: IntegrationKeyOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integ_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/': {
      $get:
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseMessageOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: MessageOut
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: MessageIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/': {
      $get:
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: MessageOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/attempt/': {
      $get:
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                endpoint_id?: (string | null) | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseMessageAttemptOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                endpoint_id?: (string | null) | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                endpoint_id?: (string | null) | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                endpoint_id?: (string | null) | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                endpoint_id?: (string | null) | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                endpoint_id?: (string | null) | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                endpoint_id?: (string | null) | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/': {
      $get:
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: MessageAttemptOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/content/': {
      $delete:
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { attempt_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/content/': {
      $delete:
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/endpoint/': {
      $get:
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseMessageEndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { msg_id: string; app_id: string } } & {
              query: { iterator?: (string | null) | undefined; limit?: number | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/attempt/': {
      $get:
        | {
            input: { param: { msg_id: string; app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseMessageAttemptEndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { msg_id: string; app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { msg_id: string; app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { msg_id: string; app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { msg_id: string; app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { msg_id: string; app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { msg_id: string; app_id: string; endpoint_id: string } } & {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                event_types?: (string[] | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/resend/': {
      $post:
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { endpoint_id: string; msg_id: string; app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/auth/app-portal-access/:app_id/': {
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: AppPortalAccessIn }
            output: AppPortalAccessOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: AppPortalAccessIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/auth/app/:app_id/expire-all/': {
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationTokenExpireIn }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationTokenExpireIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationTokenExpireIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationTokenExpireIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationTokenExpireIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationTokenExpireIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: ApplicationTokenExpireIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/auth/dashboard-access/:app_id/': {
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: DashboardAccessOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/auth/logout/': {
      $post:
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/background-task/': {
      $get:
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseBackgroundTaskOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                order?: {} | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/background-task/:task_id/': {
      $get:
        | {
            input: { param: { task_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: BackgroundTaskOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { task_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { task_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { task_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { task_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { task_id: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/event-type/': {
      $get:
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                with_content?: boolean | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: ListResponseEventTypeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                with_content?: boolean | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                with_content?: boolean | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                with_content?: boolean | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                with_content?: boolean | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                with_content?: boolean | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                iterator?: (string | null) | undefined
                limit?: number | undefined
                with_content?: boolean | undefined
                include_archived?: boolean | undefined
              }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: EventTypeIn
            }
            output: EventTypeOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: EventTypeIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: EventTypeIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: EventTypeIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: EventTypeIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: EventTypeIn
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } } & {
              json: EventTypeIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/event-type/:event_type_name/': {
      $delete:
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            } & { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: EventTypeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: EventTypeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: EventTypeOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_type_name: string } } & {
              header: { 'idempotency-key'?: (string | null) | undefined }
            } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/health/': {
      $get:
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'idempotency-key'?: (string | null) | undefined } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
