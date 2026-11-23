declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/content.json': {
      $get:
        | {
            input: { query: { sql: string; _shape: 'array' } }
            output: { [x: string]: unknown }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sql: string; _shape: 'array' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { sql: string; _shape: 'array' } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
