declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/opinions': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
