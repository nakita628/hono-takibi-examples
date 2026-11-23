declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getcurrencyrate': {
      $get:
        | {
            input: { query: { license: string; symbol: string } }
            output: {
              Code?: string | undefined
              Country?: string | undefined
              Credits?: string | undefined
              Name?: string | undefined
              Rate?: string | undefined
              Symbol?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; symbol: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
