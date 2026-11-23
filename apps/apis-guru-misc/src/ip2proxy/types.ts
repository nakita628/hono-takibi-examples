declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {
          query: {
            package?: string | undefined
            ip: string
            format?: 'json' | 'xml' | undefined
            key: string
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
