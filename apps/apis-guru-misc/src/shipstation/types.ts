declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/questions': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { json: { choices?: string[] | undefined; question?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
