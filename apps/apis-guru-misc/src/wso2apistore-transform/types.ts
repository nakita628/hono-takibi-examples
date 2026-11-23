declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/jsontoxml': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/xmltojson': {
      $post: { input: { json: string }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
