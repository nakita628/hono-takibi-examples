type SubMerchantData = {
  city?: string | undefined
  country?: string | undefined
  displayName: string
  email?: string | undefined
  id: string
  mcc: string
  name: string
  phoneNumber?: string | undefined
  postalCode?: string | undefined
  state?: string | undefined
  street?: string | undefined
  taxId?: string | undefined
}
type CertificateLoadingRequest = {
  merchantAccount: string
  setupToken: string
  store?: string | undefined
  subMerchantData?: SubMerchantData | undefined
}
type CertificateLoadingResponse = {
  id?: string | undefined
  installationId?: string | undefined
  merchantAccount?: string | undefined
  sdkData?: string | undefined
  store?: string | undefined
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
    '/auth/certificate': {
      $post:
        | {
            input: { header: { 'X-API-Key'?: string | undefined } } & {
              json: CertificateLoadingRequest
            }
            output: CertificateLoadingResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-API-Key'?: string | undefined } } & {
              json: CertificateLoadingRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-API-Key'?: string | undefined } } & {
              json: CertificateLoadingRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'X-API-Key'?: string | undefined } } & {
              json: CertificateLoadingRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'X-API-Key'?: string | undefined } } & {
              json: CertificateLoadingRequest
            }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
