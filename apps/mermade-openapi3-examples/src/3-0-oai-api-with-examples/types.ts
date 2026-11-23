declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/v2': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes
