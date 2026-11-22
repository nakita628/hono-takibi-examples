type Entities = { [x: string]: unknown }[]
type Contracts = { [x: string]: unknown }[]
type ErrorDetail = { code: number; contracts?: Contracts | undefined; message: string }
type Statistics = {
  SESSION: string
  execution_time: number
  operation_id?: string | undefined
  token?: string | undefined
}
type Error = { error: ErrorDetail; statistics: Statistics; success: boolean }
type EntityData =
  | { portfolios?: { [x: string]: unknown }[] | undefined }
  | { accounts?: { [x: string]: unknown }[] | undefined }
  | { cards?: { [x: string]: unknown }[] | undefined }
  | { properties?: { [x: string]: unknown }[] | undefined }
type ErrorCodes = {
  code?: number | undefined
  description?: string | undefined
  how_to_proceed?: string | undefined
  possible_reasons?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/entities': {
      $get:
        | { input: {}; output: Entities[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error[]; outputFormat: 'json'; status: 400 }
      $post:
        | {
            input: {
              json: {
                OTP?: string | undefined
                SESSION?: string | undefined
                api_key?: string | undefined
                code?: string | undefined
                contract_code?: string | undefined
                document_type?: 'NIF' | 'Pasaporte' | 'Tarjeta de residencia' | undefined
                password?: string | undefined
                second_password?: string | undefined
                token?: string | undefined
                tokenize?: boolean | undefined
                user?: string | undefined
              }
            } & {
              form: {
                OTP?: string | undefined
                SESSION?: string | undefined
                api_key?: string | undefined
                code?: string | undefined
                contract_code?: string | undefined
                document_type?: 'NIF' | 'Pasaporte' | 'Tarjeta de residencia' | undefined
                password?: string | undefined
                second_password?: string | undefined
                token?: string | undefined
                tokenize?: boolean | undefined
                user?: string | undefined
              }
            }
            output: EntityData[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                OTP?: string | undefined
                SESSION?: string | undefined
                api_key?: string | undefined
                code?: string | undefined
                contract_code?: string | undefined
                document_type?: 'NIF' | 'Pasaporte' | 'Tarjeta de residencia' | undefined
                password?: string | undefined
                second_password?: string | undefined
                token?: string | undefined
                tokenize?: boolean | undefined
                user?: string | undefined
              }
            } & {
              form: {
                OTP?: string | undefined
                SESSION?: string | undefined
                api_key?: string | undefined
                code?: string | undefined
                contract_code?: string | undefined
                document_type?: 'NIF' | 'Pasaporte' | 'Tarjeta de residencia' | undefined
                password?: string | undefined
                second_password?: string | undefined
                token?: string | undefined
                tokenize?: boolean | undefined
                user?: string | undefined
              }
            }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/error-codes': {
      $get:
        | {
            input: { query: { lang?: 'es' | 'en' | undefined } }
            output: ErrorCodes[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { lang?: 'es' | 'en' | undefined } }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
