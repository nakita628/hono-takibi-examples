declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getglobaltime': {
      $get:
        | {
            input: { query: { license: string; locale: string } }
            output: {
              ClockTime?: string | undefined
              Code?: string | undefined
              Credits?: string | undefined
              CurrentDate?: string | undefined
              CurrentTime?: string | undefined
              Day?: string | undefined
              Hour?: string | undefined
              Locale?: string | undefined
              Minute?: string | undefined
              Month?: string | undefined
              MonthNumber?: string | undefined
              Second?: string | undefined
              TimeStamp?: string | undefined
              Weekday?: string | undefined
              Year?: string | undefined
              Zone?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; locale: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; locale: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; locale: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; locale: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; locale: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; locale: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
