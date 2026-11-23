declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:address': {
      $get: {
        input: { param: { address: string } }
        output: { description?: string | undefined; trap?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
