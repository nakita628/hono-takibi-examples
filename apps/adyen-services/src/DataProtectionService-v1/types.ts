type SubjectErasureByPspReferenceRequest = {
  forceErasure?: boolean | undefined
  merchantAccount?: string | undefined
  pspReference?: string | undefined
}
type SubjectErasureResponse = {
  result?:
    | 'ACTIVE_RECURRING_TOKEN_EXISTS'
    | 'ALREADY_PROCESSED'
    | 'PAYMENT_NOT_FOUND'
    | 'SUCCESS'
    | undefined
}
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/requestSubjectErasure': {
      $post:
        | {
            input: { json: SubjectErasureByPspReferenceRequest }
            output: SubjectErasureResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubjectErasureByPspReferenceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubjectErasureByPspReferenceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubjectErasureByPspReferenceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SubjectErasureByPspReferenceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: SubjectErasureByPspReferenceRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
