type EventRequest = {
  event?:
    | {
        name: string
        payload?: { [x: string]: unknown } | undefined
        context?: { [x: string]: unknown } | undefined
        id?: string | undefined
        timestamp?: string | undefined
        source?: string | undefined
      }
    | undefined
  options?:
    | {
        deliverAt?: string | undefined
        deliverAfter?: number | undefined
        accountId?: string | undefined
      }
    | undefined
}
type DeserializedJson = { [x: string]: unknown }
type EventResponse = {
  id?: string | undefined
  name?: string | undefined
  payload?: DeserializedJson | undefined
  context?: DeserializedJson | undefined
  timestamp?: string | undefined
  deliverAt?: (string | null) | undefined
  deliveredAt?: (string | null) | undefined
  cancelledAt?: (string | null) | undefined
}
type Error = { error?: string | undefined }
type CreateBatchRequest = {
  runCount: number
  taskIdentifiers?: string[] | undefined
  parentRunId?: string | undefined
  resumeParentOnCompletion?: boolean | undefined
  idempotencyKey?: string | undefined
}
type CreateBatchResponse = {
  id: string
  runCount: number
  isCached: boolean
  idempotencyKey?: string | undefined
}
type StreamBatchItemsResponse = {
  id: string
  itemsAccepted: number
  itemsDeduplicated: number
  sealed: boolean
  enqueuedCount?: number | undefined
  expectedCount?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/events': {
      $post:
        | {
            input: { json: EventRequest }
            output: EventResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: EventRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: EventRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: EventRequest }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/api/v3/batches': {
      $post:
        | {
            input: { json: CreateBatchRequest }
            output: CreateBatchResponse
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: CreateBatchRequest }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: CreateBatchRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CreateBatchRequest }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { json: CreateBatchRequest }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: CreateBatchRequest }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v3/batches/:batchId/items': {
      $post:
        | {
            input: { param: { batchId: string } } & { json: string }
            output: StreamBatchItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batchId: string } } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { batchId: string } } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { batchId: string } } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { batchId: string } } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { batchId: string } } & { json: string }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
