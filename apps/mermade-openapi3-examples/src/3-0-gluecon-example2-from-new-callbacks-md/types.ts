declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/hooks': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/hooks/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
