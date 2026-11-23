declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/example': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/examples': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 201 }
        | { input: {}; output: {}; outputFormat: string; status: 202 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
