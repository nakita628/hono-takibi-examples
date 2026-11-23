declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/names': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } } },
  '/'
>
export default routes
