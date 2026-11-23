declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getglobalnumberinfo': {
      $get:
        | {
            input: { query: { license: string; intlnumber: string } }
            output: {
              Code?: string | undefined
              Country?: string | undefined
              Credits?: string | undefined
              Language2?: string | undefined
              Language3?: string | undefined
              Mobile?: string | undefined
              PrimaryCity?: string | undefined
              PrimaryLanguage?: string | undefined
              Region?: string | undefined
              Wealth?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { license: string; intlnumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { license: string; intlnumber: string } }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { query: { license: string; intlnumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { license: string; intlnumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { license: string; intlnumber: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { license: string; intlnumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
