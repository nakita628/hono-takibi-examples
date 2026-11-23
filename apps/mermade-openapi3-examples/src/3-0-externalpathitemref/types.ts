declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/test': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/test2': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes
