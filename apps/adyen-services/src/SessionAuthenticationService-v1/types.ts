type ResourceType = 'legalEntity' | 'accountHolder' | 'paymentInstrument'
type Resource = { type?: ResourceType | undefined }
type Policy = { resources?: Resource[] | undefined; roles?: string[] | undefined }
type ProductType = 'onboarding' | 'platform' | 'bank'
type AuthenticationSessionRequest = {
  allowOrigin?: string | undefined
  policy: Policy
  product: ProductType
}
type AuthenticationSessionResponse = { id?: string | undefined; token?: string | undefined }
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
    '/sessions': {
      $post:
        | {
            input: { json: AuthenticationSessionRequest }
            output: AuthenticationSessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthenticationSessionRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuthenticationSessionRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AuthenticationSessionRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
