declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/email/disposable': {
      $get: {
        input: { query: { format?: 'json' | 'xml' | undefined; email: string; key: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
