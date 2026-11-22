declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/submit': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
