declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/subscribe': {
      $post: {
        input: { json: { url?: string | undefined } }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  },
  '/'
>
export default routes
