declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pet/:id': {
      $put: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
      $get: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
