declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/form/primitive': {
      $put: {
        input: {
          form: {
            primitive?: string | undefined
            array?: string[] | undefined
            object?: { foo?: string | undefined; bar?: string | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
