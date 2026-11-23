declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getcitystandard': {
      $get:
        | {
            input: { query: { license: string; city: string } }
            output: {
              CityStandard?: string | undefined
              Code?: string | undefined
              Credits?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; city: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; city: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; city: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; city: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; city: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
