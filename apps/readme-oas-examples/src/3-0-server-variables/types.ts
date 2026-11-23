declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/global': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/operation': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & { '/path': { $put: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/combo': { $put: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes
