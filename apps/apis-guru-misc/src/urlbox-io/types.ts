type RenderRequest = { [x: string]: unknown } | { [x: string]: unknown }
type RenderResponse = { renderUrl?: string | undefined; size?: bigint | undefined }
type RedirectResponse = { location: string; message: string }
type ErrorResponse = { error: { code?: string | undefined; message?: string | undefined } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/render/sync': {
      $post:
        | {
            input: { json: RenderRequest }
            output: RenderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RenderRequest }
            output: RedirectResponse
            outputFormat: 'json'
            status: 307
          }
        | {
            input: { json: RenderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RenderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RenderRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
