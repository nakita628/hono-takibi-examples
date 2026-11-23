type DocumentContext = 'paCbInvoice'
type DocumentUploadRequest = { context: DocumentContext; file: File; merchantAccount: string }
type DocumentUploadResponse = {
  context?: string | undefined
  fileName?: string | undefined
  merchantAccount?: string | undefined
  pspReference?: string | undefined
}
type InvalidField = { message: string; name: string; value: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/crossBorderInvoices': {
      $post:
        | {
            input: { form: DocumentUploadRequest }
            output: DocumentUploadResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { form: DocumentUploadRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: DocumentUploadRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: DocumentUploadRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: DocumentUploadRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { form: DocumentUploadRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
