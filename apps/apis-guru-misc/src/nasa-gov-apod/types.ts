declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apod': {
      $get:
        | {
            input: { query: { date?: string | undefined; hd?: boolean | undefined } }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { date?: string | undefined; hd?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes
