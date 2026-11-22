type VeteranStatusRequest = {
  birth_date: string
  first_name: string
  gender?: 'M' | 'F' | undefined
  last_name: string
  middle_name?: string | undefined
  ssn: string
}
type VeteranStatusConfirmation = { veteran_status?: 'confirmed' | 'not confirmed' | undefined }
type APIError = {
  errors?:
    | {
        code?: string | undefined
        detail?: string | undefined
        status?: string | undefined
        title?: string | undefined
      }[]
    | undefined
}
type AuthorizationError = { message?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/status': {
      $post:
        | {
            input: { json: VeteranStatusRequest }
            output: VeteranStatusConfirmation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VeteranStatusRequest }
            output: APIError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: VeteranStatusRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: VeteranStatusRequest }
            output: AuthorizationError
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: VeteranStatusRequest }; output: {}; outputFormat: string; status: 503 }
    }
  },
  '/'
>
export default routes
