type Token = { access_token: number; token_type: string; expires_in: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything': {
      $post:
        | {
            input: {
              json: { client_id: string; client_secret: string; scope?: number | undefined }
            } & { form: { client_id: string; client_secret: string; scope?: number | undefined } }
            output: Token
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; scope?: number | undefined }
            } & { form: { client_id: string; client_secret: string; scope?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
