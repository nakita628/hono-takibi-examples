declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/speakers': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 201 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  },
  '/'
>
export default routes
