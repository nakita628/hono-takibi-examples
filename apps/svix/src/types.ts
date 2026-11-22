type HttpErrorOut = { code: string; detail: string }
type ValidationErrorItem = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail: ValidationErrorItem[] }
type ApplicationIn = {
  name: string
  throttleRate?: (number | null) | undefined
  uid?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
}
type AppPortalAccessIn = {
  featureFlags?: string[] | undefined
  application?: ApplicationIn | undefined
}
type AppPortalAccessOut = { url: string; token: string }
type Ordering = 'ascending' | 'descending'
type ApplicationOut = {
  uid?: (string | null) | undefined
  name: string
  throttleRate?: (number | null) | undefined
  id: string
  createdAt: string
  updatedAt: string
  metadata: { [x: string]: string }
}
type ListResponseApplicationOut = {
  data: ApplicationOut[]
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
  done: boolean
}
type ApplicationPatch = {
  name?: string | undefined
  throttleRate?: (number | null) | undefined
  uid?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
}
type EndpointOut = {
  id: string
  metadata: { [x: string]: string }
  description: string
  throttleRate?: (number | null) | undefined
  uid?: (string | null) | undefined
  url: string
  disabled?: boolean | undefined
  eventTypes?: (string[] | null) | undefined
  channels?: (string[] | null) | undefined
  createdAt: string
  updatedAt: string
  expiry?: (string | null) | undefined
}
type ListResponseEndpointOut = {
  data: EndpointOut[]
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
  done: boolean
}
type EndpointIn = {
  description?: string | undefined
  throttleRate?: (number | null) | undefined
  uid?: (string | null) | undefined
  url: string
  disabled?: boolean | undefined
  eventTypes?: (string[] | null) | undefined
  channels?: (string[] | null) | undefined
  secret?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
}
type EndpointUpdate = {
  description?: string | undefined
  throttleRate?: (number | null) | undefined
  uid?: (string | null) | undefined
  url: string
  disabled?: boolean | undefined
  eventTypes?: (string[] | null) | undefined
  channels?: (string[] | null) | undefined
  metadata?: { [x: string]: string } | undefined
}
type EndpointPatch = {
  description?: string | undefined
  throttleRate?: (number | null) | undefined
  uid?: (string | null) | undefined
  url?: string | undefined
  disabled?: boolean | undefined
  eventTypes?: (string[] | null) | undefined
  channels?: (string[] | null) | undefined
  metadata?: { [x: string]: string } | undefined
}
type EndpointSecretOut = { key: string }
type EndpointSecretRotateIn = {
  key?: (string | null) | undefined
  gracePeriodSeconds?: (number | null) | undefined
}
type EndpointStats = {
  success: bigint
  pending: bigint
  sending: bigint
  fail: bigint
  canceled: bigint
}
type EventExampleIn = { eventType: string }
type MessageOut = {
  eventId?: (string | null) | undefined
  eventType: string
  payload: { [x: string]: unknown }
  channels?: (string[] | null) | undefined
  id: string
  timestamp: string
}
type RecoverIn = { since: string; until?: (string | null) | undefined }
type BackgroundTaskStatus = 'running'
type BackgroundTaskType = 'endpoint.recover'
type RecoverOut = {
  id: string
  status: BackgroundTaskStatus
  task: BackgroundTaskType
  updatedAt: string
}
type EndpointHeadersOut = { headers: { [x: string]: string }; sensitive: string[] }
type EndpointHeadersIn = { headers: { [x: string]: string } }
type EndpointHeadersPatchIn = { headers: { [x: string]: string | null } }
type EventTypeOut = {
  name: string
  description: string
  archived?: boolean | undefined
  deprecated: boolean
  schemas?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  createdAt: string
  updatedAt: string
  featureFlag?: (string | null) | undefined
}
type ListResponseEventTypeOut = {
  data: EventTypeOut[]
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
  done: boolean
}
type EventTypeIn = {
  name: string
  description: string
  archived?: boolean | undefined
  deprecated?: boolean | undefined
  schemas?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  featureFlag?: (string | null) | undefined
}
type EventTypeUpdate = {
  description: string
  archived?: boolean | undefined
  deprecated?: boolean | undefined
  schemas?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  featureFlag?: (string | null) | undefined
}
type EventTypePatch = {
  description?: string | undefined
  archived?: boolean | undefined
  deprecated?: boolean | undefined
  schemas?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  featureFlag?: (string | null) | undefined
}
type ListResponseMessageOut = {
  data: MessageOut[]
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
  done: boolean
}
type MessageIn = {
  eventId?: (string | null) | undefined
  eventType: string
  payload: { [x: string]: unknown }
  channels?: (string[] | null) | undefined
  payloadRetentionPeriod?: bigint | undefined
  application?: ApplicationIn | undefined
}
type BulkExpungeContentsIn = { ids?: string[] | undefined }
type BulkExpungeStatus = 'expunged' | 'not-found'
type BulkExpungeContentsOut = { results: { [x: string]: BulkExpungeStatus } }
type MessageStatus = 0 | 1 | 2 | 3
type MessageStatusText = 'success' | 'pending' | 'fail' | 'sending'
type MessageAttemptTriggerType = 0 | 1
type MessageAttemptOut = {
  url: string
  response: string
  responseStatusCode: number
  responseDurationMs: bigint
  status: MessageStatus
  statusText: MessageStatusText
  triggerType: MessageAttemptTriggerType
  msgId: string
  endpointId: string
  id: string
  timestamp: string
}
type MessageEndpointOut = {
  id: string
  status: MessageStatus
  statusText: MessageStatusText
  nextAttempt?: (string | null) | undefined
  description: string
  throttleRate?: (number | null) | undefined
  uid?: (string | null) | undefined
  url: string
  disabled?: boolean | undefined
  eventTypes?: (string[] | null) | undefined
  channels?: (string[] | null) | undefined
  createdAt: string
  updatedAt: string
  expiry?: (string | null) | undefined
}
type ListResponseMessageEndpointOut = {
  data: MessageEndpointOut[]
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
  done: boolean
}
type EmptyResponse = { [x: string]: unknown }
type EndpointMessageOut = {
  status: MessageStatus
  statusText: MessageStatusText
  nextAttempt?: (string | null) | undefined
  eventId?: (string | null) | undefined
  eventType: string
  payload: { [x: string]: unknown }
  channels?: (string[] | null) | undefined
  id: string
  timestamp: string
}
type ListResponseEndpointMessageOut = {
  data: EndpointMessageOut[]
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
  done: boolean
}
type StatusCodeClass = 0 | 100 | 200 | 300 | 400 | 500
type ListResponseMessageAttemptOut = {
  data: MessageAttemptOut[]
  iterator?: (string | null) | undefined
  prevIterator?: (string | null) | undefined
  done: boolean
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/health/ping': {
      $get: { input: {}; output: {}; outputFormat: string; status: 204 }
      $head: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/health': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 401 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 403 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 404 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 409 }
        | { input: {}; output: HTTPValidationError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 429 }
      $head:
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 401 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 403 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 404 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 409 }
        | { input: {}; output: HTTPValidationError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v1/auth/logout': {
      $post: {
        input: { header: { 'idempotency-key'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/auth/app-portal-access/:app_id': {
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: AppPortalAccessIn }
            output: AppPortalAccessOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: AppPortalAccessIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: AppPortalAccessIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: ListResponseApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { get_if_exists?: boolean | undefined } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id': {
      $get:
        | { input: {}; output: ApplicationOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 401 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 403 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 404 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 409 }
        | { input: {}; output: HTTPValidationError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 429 }
      $put:
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: ApplicationOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & { json: ApplicationIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 401 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 403 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 404 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 409 }
        | { input: {}; output: HTTPValidationError; outputFormat: 'json'; status: 422 }
        | { input: {}; output: HttpErrorOut; outputFormat: 'json'; status: 429 }
      $patch:
        | {
            input: { json: ApplicationPatch }
            output: ApplicationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApplicationPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApplicationPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ApplicationPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ApplicationPatch }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ApplicationPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint': {
      $get:
        | {
            input: { param: { app_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: ListResponseEndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointIn }
            output: EndpointOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id': {
      $get:
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: EndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: EndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: EndpointOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointPatch }
            output: EndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointPatch }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointPatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/secret': {
      $get:
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: EndpointSecretOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/secret/rotate': {
      $post:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointSecretRotateIn }
            output: EndpointSecretOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EndpointSecretRotateIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/stats': {
      $get:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            }
            output: EndpointStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: { since?: (string | null) | undefined; until?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/send-example': {
      $post:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EventExampleIn }
            output: MessageOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EventExampleIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EventExampleIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EventExampleIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EventExampleIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EventExampleIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: EventExampleIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/recover': {
      $post:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: RecoverIn }
            output: RecoverOut
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: RecoverIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: RecoverIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/headers': {
      $get:
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: EndpointHeadersOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointHeadersIn }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointHeadersIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & { json: EndpointHeadersIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              json: EndpointHeadersPatchIn
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              json: EndpointHeadersPatchIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              json: EndpointHeadersPatchIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              json: EndpointHeadersPatchIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              json: EndpointHeadersPatchIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              json: EndpointHeadersPatchIn
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              json: EndpointHeadersPatchIn
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/event-type': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
                include_archived?: boolean | undefined
                with_content?: boolean | undefined
              }
            }
            output: ListResponseEventTypeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
                include_archived?: boolean | undefined
                with_content?: boolean | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
                include_archived?: boolean | undefined
                with_content?: boolean | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
                include_archived?: boolean | undefined
                with_content?: boolean | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
                include_archived?: boolean | undefined
                with_content?: boolean | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
                include_archived?: boolean | undefined
                with_content?: boolean | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                order?: Ordering | undefined
                include_archived?: boolean | undefined
                with_content?: boolean | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & { json: EventTypeIn }
            output: EventTypeOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & { json: EventTypeIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & { json: EventTypeIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & { json: EventTypeIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & { json: EventTypeIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & { json: EventTypeIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'idempotency-key'?: string | undefined } } & { json: EventTypeIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/event-type/:event_type_name': {
      $get:
        | {
            input: { param: { event_type_name: string } }
            output: EventTypeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_type_name: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_type_name: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_type_name: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_type_name: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_type_name: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_type_name: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: EventTypeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: EventTypeOut
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypeUpdate }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_type_name: string } } & {
              query: { expunge?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { event_type_name: string } } & { json: EventTypePatch }
            output: EventTypeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypePatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypePatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypePatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypePatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypePatch }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { event_type_name: string } } & { json: EventTypePatch }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: ListResponseMessageOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & { json: MessageIn }
            output: MessageOut
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & { json: MessageIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & { json: MessageIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & { json: MessageIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & { json: MessageIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & { json: MessageIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              query: { with_content?: boolean | undefined }
            } & { header: { 'idempotency-key'?: string | undefined } } & { json: MessageIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id': {
      $get:
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { with_content?: boolean | undefined }
            }
            output: MessageOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { with_content?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { with_content?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { with_content?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { with_content?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { with_content?: boolean | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { with_content?: boolean | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/content': {
      $delete:
        | {
            input: { param: { app_id: string; msg_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/bulk-expunge': {
      $post:
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: BulkExpungeContentsIn }
            output: BulkExpungeContentsOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: BulkExpungeContentsIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: BulkExpungeContentsIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: BulkExpungeContentsIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: BulkExpungeContentsIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: BulkExpungeContentsIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            } & { json: BulkExpungeContentsIn }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id': {
      $get:
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: MessageAttemptOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/attempt/:attempt_id/content': {
      $delete:
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string; attempt_id: string } }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/endpoint': {
      $get:
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { limit?: bigint | undefined; iterator?: (string | null) | undefined }
            }
            output: ListResponseMessageEndpointOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { limit?: bigint | undefined; iterator?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { limit?: bigint | undefined; iterator?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { limit?: bigint | undefined; iterator?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { limit?: bigint | undefined; iterator?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { limit?: bigint | undefined; iterator?: (string | null) | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: { limit?: bigint | undefined; iterator?: (string | null) | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/msg/:msg_id/endpoint/:endpoint_id/resend': {
      $post:
        | {
            input: { param: { app_id: string; msg_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            }
            output: EmptyResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { app_id: string; msg_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string; endpoint_id: string } } & {
              header: { 'idempotency-key'?: string | undefined }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/endpoint/:endpoint_id/msg': {
      $get:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: ListResponseEndpointMessageOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                channel?: (string | null) | undefined
                status?: MessageStatus | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/attempt/endpoint/:endpoint_id': {
      $get:
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: ListResponseMessageAttemptOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; endpoint_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v1/app/:app_id/attempt/msg/:msg_id': {
      $get:
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                endpoint_id?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: ListResponseMessageAttemptOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                endpoint_id?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                endpoint_id?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                endpoint_id?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                endpoint_id?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                endpoint_id?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { app_id: string; msg_id: string } } & {
              query: {
                limit?: bigint | undefined
                iterator?: (string | null) | undefined
                status?: MessageStatus | undefined
                status_code_class?: StatusCodeClass | undefined
                channel?: (string | null) | undefined
                endpoint_id?: (string | null) | undefined
                before?: (string | null) | undefined
                after?: (string | null) | undefined
                with_content?: boolean | undefined
                event_types?: (string[] | null) | undefined
              }
            }
            output: HttpErrorOut
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
