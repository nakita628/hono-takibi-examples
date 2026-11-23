declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getareacode': {
      $get:
        | {
            input: { query: { license: string; areacode: string } }
            output: {
              Abbreviation?: string | undefined
              AreaCode?: string | undefined
              Code?: string | undefined
              Credits?: string | undefined
              Locale?: string | undefined
              PrimaryCity?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; areacode: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; areacode: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; areacode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; areacode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; areacode: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; areacode: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
