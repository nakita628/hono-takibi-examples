declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything/image-png': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/anything/multipart-formdata': {
      $post: {
        input: {
          form: {
            orderId?: number | undefined
            userId?: number | undefined
            documentFile?: File | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { form: { filename?: File[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
