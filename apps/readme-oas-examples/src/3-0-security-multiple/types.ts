declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/anything/and': { $post: { input: {}; output: {}; outputFormat: string; status: 401 } } } & {
    '/anything/or': { $post: { input: {}; output: {}; outputFormat: string; status: 401 } }
  } & {
    '/anything/and-or': { $post: { input: {}; output: {}; outputFormat: string; status: 401 } }
  } & {
    '/anything/many-and-or': { $post: { input: {}; output: {}; outputFormat: string; status: 401 } }
  },
  '/'
>
export default routes
