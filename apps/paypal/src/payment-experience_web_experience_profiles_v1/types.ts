type FlowConfig = {
  landing_page_type?: 'login' | 'billing' | undefined
  bank_txn_pending_url?: string | undefined
  user_action?: 'COMMIT' | undefined
  return_uri_http_method?: 'GET' | 'POST' | undefined
}
type InputFields = { no_shipping?: number | undefined; address_override?: number | undefined }
type Presentation = {
  brand_name?: string | undefined
  logo_image?: string | undefined
  locale_code?: string | undefined
}
type WebProfile = {
  id?: string | undefined
  name: string
  temporary?: boolean | undefined
  flow_config?: FlowConfig | undefined
  input_fields?: InputFields | undefined
  presentation?: Presentation | undefined
}
type ErrorDetails_2 = { field: string; issue: string }
type ErrorDetailsList = ErrorDetails_2[]
type Error = {
  name: string
  debug_id?: string | undefined
  message: string
  information_link: string
  details?: ErrorDetailsList | undefined
}
type WebProfileList = WebProfile[]
type Patch = {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
  path?: string | undefined
  value?:
    | (number | number | string | boolean | unknown[] | { [x: string]: unknown } | null)
    | undefined
  from?: string | undefined
}
type PatchRequest = Patch[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/payment-experience/web-profiles': {
      $post:
        | {
            input: { header: { 'PayPal-Request-Id': string } } & { json: WebProfile }
            output: WebProfile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'PayPal-Request-Id': string } } & { json: WebProfile }
            output: WebProfile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'PayPal-Request-Id': string } } & { json: WebProfile }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'PayPal-Request-Id': string } } & { json: WebProfile }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | { input: {}; output: WebProfileList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/payment-experience/web-profiles/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: WebProfile }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: WebProfile }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: WebProfile }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } }
            output: WebProfile
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
