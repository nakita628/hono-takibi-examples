declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/files/:filename': {
      $put: {
        input: { param: { filename: string } } & { json: File }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
