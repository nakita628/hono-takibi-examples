declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/latest/:base_currency': {
      $get:
        | {
            input: { param: { base_currency: string } }
            output: {
              base?: string | undefined
              date?: string | undefined
              rates?: { [x: string]: number } | undefined
              time_last_updated?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { base_currency: string } }
            output: { error_type?: string | undefined; result?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
