declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getweather': {
      $get:
        | {
            input: { query: { license: string; city: string; state: string } }
            output: {
              City?: string | undefined
              Code?: string | undefined
              Credits?: string | undefined
              RelativeHumidity?: string | undefined
              State?: string | undefined
              TempC?: string | undefined
              TempF?: string | undefined
              VisibilityMiles?: string | undefined
              Weather?: string | undefined
              WindDir?: string | undefined
              WindMPH?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; city: string; state: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; city: string; state: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; city: string; state: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; city: string; state: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; city: string; state: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; city: string; state: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
