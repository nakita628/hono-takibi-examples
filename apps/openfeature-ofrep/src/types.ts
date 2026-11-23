type Context = { targetingKey?: string | undefined }
type EvaluationRequest = { context: Context }
type Key = string
type ServerEvaluationSuccess = {
  key?: Key | undefined
  reason?: 'STATIC' | 'TARGETING_MATCH' | 'SPLIT' | 'DISABLED' | 'UNKNOWN' | undefined
  variant?: string | undefined
  metadata?: {} | undefined
}
type ErrorDetails = string
type EvaluationFailure = {
  key: Key
  errorCode: 'PARSE_ERROR' | 'TARGETING_KEY_MISSING' | 'INVALID_CONTEXT' | 'GENERAL'
  errorDetails?: ErrorDetails | undefined
  metadata?: {} | undefined
}
type FlagNotFound = {
  key: Key
  errorCode: 'FLAG_NOT_FOUND'
  errorDetails?: ErrorDetails | undefined
  metadata?: {} | undefined
}
type GeneralErrorResponse = { errorDetails?: ErrorDetails | undefined }
type BulkEvaluationRequest = { context: Context }
type EvaluationSuccess = {
  key?: Key | undefined
  reason?: 'STATIC' | 'TARGETING_MATCH' | 'SPLIT' | 'DISABLED' | 'UNKNOWN' | undefined
  variant?: string | undefined
  metadata?: {} | undefined
}
type Metadata = { [x: string]: boolean | string | number }
type EventStream = { [x: string]: unknown } | { [x: string]: unknown }
type BulkEvaluationSuccess = {
  flags: (EvaluationSuccess | EvaluationFailure)[]
  metadata?: Metadata | undefined
  eventStreams?: EventStream[] | undefined
}
type BulkEvaluationFailure = { errorCode: string; errorDetails?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ofrep/v1/evaluate/flags/:key': {
      $post:
        | {
            input: { param: { key: string } } & { json: EvaluationRequest }
            output: ServerEvaluationSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { json: EvaluationRequest }
            output: EvaluationFailure
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { key: string } } & { json: EvaluationRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { key: string } } & { json: EvaluationRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { key: string } } & { json: EvaluationRequest }
            output: FlagNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { key: string } } & { json: EvaluationRequest }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { key: string } } & { json: EvaluationRequest }
            output: GeneralErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/ofrep/v1/evaluate/flags': {
      $post:
        | {
            input: {
              query: {
                flagConfigEtag?: string | undefined
                flagConfigLastModified?: number | string | undefined
              }
            } & { header: { 'If-None-Match'?: string | undefined } } & {
              json: BulkEvaluationRequest
            }
            output: BulkEvaluationSuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                flagConfigEtag?: string | undefined
                flagConfigLastModified?: number | string | undefined
              }
            } & { header: { 'If-None-Match'?: string | undefined } } & {
              json: BulkEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: {
              query: {
                flagConfigEtag?: string | undefined
                flagConfigLastModified?: number | string | undefined
              }
            } & { header: { 'If-None-Match'?: string | undefined } } & {
              json: BulkEvaluationRequest
            }
            output: BulkEvaluationFailure
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                flagConfigEtag?: string | undefined
                flagConfigLastModified?: number | string | undefined
              }
            } & { header: { 'If-None-Match'?: string | undefined } } & {
              json: BulkEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                flagConfigEtag?: string | undefined
                flagConfigLastModified?: number | string | undefined
              }
            } & { header: { 'If-None-Match'?: string | undefined } } & {
              json: BulkEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                flagConfigEtag?: string | undefined
                flagConfigLastModified?: number | string | undefined
              }
            } & { header: { 'If-None-Match'?: string | undefined } } & {
              json: BulkEvaluationRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                flagConfigEtag?: string | undefined
                flagConfigLastModified?: number | string | undefined
              }
            } & { header: { 'If-None-Match'?: string | undefined } } & {
              json: BulkEvaluationRequest
            }
            output: GeneralErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
