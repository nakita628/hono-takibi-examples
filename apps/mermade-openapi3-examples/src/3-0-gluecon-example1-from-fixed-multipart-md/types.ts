declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/submit': {
      $post: {
        input: {
          json: {
            street?: string | undefined
            city?: string | undefined
            province?: string | undefined
            country?: string | undefined
            postcode?: string | undefined
            tags?: string[] | undefined
          }
        } & {
          form: {
            street?: string | undefined
            city?: string | undefined
            province?: string | undefined
            country?: string | undefined
            postcode?: string | undefined
            tags?: string[] | undefined
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
