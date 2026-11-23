type ExposedActionSchema = {
  description: string
  id: string
  operation_id: string
  params: { [x: string]: unknown }
}
type ExposedActionResponseSchema = { configuration_link: string; results: ExposedActionSchema[] }
type ExecuteRequest = { instructions: string; preview_only?: boolean | undefined }
type ExecuteResponse = {
  action_used: string
  error?: string | undefined
  id: string
  input_params: { [x: string]: unknown }
  result?: { [x: string]: unknown } | undefined
  review_url: string
  status?: 'success' | 'error' | 'empty' | 'preview' | undefined
}
type ErrorResponse = { error: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/api/v1/check/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/api/v1/configuration-link/': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/exposed/': {
      $get: { input: {}; output: ExposedActionResponseSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/exposed/:exposed_app_action_id/execute/': {
      $post:
        | {
            input: { param: { exposed_app_action_id: string } } & { json: ExecuteRequest }
            output: ExecuteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { exposed_app_action_id: string } } & { json: ExecuteRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
