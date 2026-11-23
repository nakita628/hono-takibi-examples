declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/nutrition': {
      $get: { input: { query: { query: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
