declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getstateabbreviation': {
      $get:
        | {
            input: { query: { license: string; state: string } }
            output: {
              Abbreviation?: string | undefined
              Code?: string | undefined
              Credits?: string | undefined
              State?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; state: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; state: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; state: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; state: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; state: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
