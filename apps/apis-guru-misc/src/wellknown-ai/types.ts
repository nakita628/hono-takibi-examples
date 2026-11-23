declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/api/plugins': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/plugins': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes
