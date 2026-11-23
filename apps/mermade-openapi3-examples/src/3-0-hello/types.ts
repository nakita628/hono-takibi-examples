declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/hello': {
      $get: {
        input: { query: { name: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
