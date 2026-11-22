declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/checkCode': {
      $post:
        | {
            input: { json: { code?: string | undefined; email?: string | undefined } }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { code?: string | undefined; email?: string | undefined } }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { code?: string | undefined; email?: string | undefined } }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/sendCode': {
      $post:
        | {
            input: { json: { email?: string | undefined } }
            output: { message?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email?: string | undefined } }
            output: { message?: boolean | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { email?: string | undefined } }
            output: { message?: string | undefined; success?: boolean | undefined }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
