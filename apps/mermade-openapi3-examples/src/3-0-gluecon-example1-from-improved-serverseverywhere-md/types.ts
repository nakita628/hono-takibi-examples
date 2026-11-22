declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/passports/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/images/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $delete: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
