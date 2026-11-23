declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/convert': {
      $post: {
        input: {
          form: {
            hundreds_form?: string | undefined
            the_number?: string | undefined
            unit?: string | undefined
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
