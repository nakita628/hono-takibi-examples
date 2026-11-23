declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/convertcurrency': {
      $get:
        | {
            input: { query: { license: string; from: string; to: string; amount: string } }
            output: {
              Code?: string | undefined
              Converted?: string | undefined
              Credits?: string | undefined
              Currency?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; from: string; to: string; amount: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; from: string; to: string; amount: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; from: string; to: string; amount: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; from: string; to: string; amount: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; from: string; to: string; amount: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; from: string; to: string; amount: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
