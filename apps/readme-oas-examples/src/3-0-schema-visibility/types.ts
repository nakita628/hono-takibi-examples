declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post: {
        input: {
          json: {
            id?: string | undefined
            propWithReadOnly?: string | undefined
            propWithWriteOnly?: string | undefined
          }
        }
        output: {
          id?: string | undefined
          propWithReadOnly?: string | undefined
          propWithWriteOnly?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
