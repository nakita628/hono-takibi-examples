declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getfullnamematch': {
      $get:
        | {
            input: { query: { license: string; fullname: string } }
            output: {
              Code?: string | undefined
              Credits?: string | undefined
              Simkey?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; fullname: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; fullname: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; fullname: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; fullname: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; fullname: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
