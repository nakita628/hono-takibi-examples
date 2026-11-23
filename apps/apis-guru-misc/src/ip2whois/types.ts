declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: { query: { domain: string; key: string; format?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
