type GetStatus = {
  answered_by?: string | undefined
  error?: string | undefined
  option_selected?: string | undefined
  phone_number?: string | undefined
  previously_verified_at?: string | undefined
  progress?: string | undefined
  token?: string | undefined
}
type VerifyNameMeta = { job_id?: string | undefined; job_time?: number | undefined; query: string }
type StatusCall = { data: GetStatus; meta: VerifyNameMeta }
type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type VerifyNameData = {
  business_name?: string | undefined
  city?: string | undefined
  department_code_and_type?: string[] | undefined
  entity_type?: string | undefined
  is_gstn_verified?: boolean | undefined
  nature_of_business?: string[] | undefined
  pincode?: number | undefined
  registration_date?: string | undefined
  registration_type?: string | undefined
  state?: string | undefined
}
type VerifyName = { data: VerifyNameData[]; meta: VerifyNameMeta }
type PlaceCall = {
  answered_by?: string | undefined
  error?: string | undefined
  option_selected?: string | undefined
  phone_number?: string | undefined
  previously_verified_at?: string | undefined
  progress?: string | undefined
  token?: string | undefined
}
type VerifyPhone = { data: PlaceCall; meta: VerifyNameMeta }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/status/call': {
      $get:
        | {
            input: { query: { query: string } }
            output: StatusCall
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/status/sku': {
      $get:
        | {
            input: { query: { query: string } }
            output: StatusCall
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/verify/name': {
      $get:
        | {
            input: {
              query: { query: string; state?: string | undefined; city?: string | undefined }
            }
            output: VerifyName
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; state?: string | undefined; city?: string | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/verify/phone': {
      $get:
        | {
            input: {
              query: { query: string; locking_period?: { [x: string]: unknown } | undefined }
            }
            output: VerifyPhone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; locking_period?: { [x: string]: unknown } | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/verify/sku': {
      $get:
        | {
            input: {
              query: { query: string; locking_period?: { [x: string]: unknown } | undefined }
            }
            output: VerifyPhone
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; locking_period?: { [x: string]: unknown } | undefined }
            }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
