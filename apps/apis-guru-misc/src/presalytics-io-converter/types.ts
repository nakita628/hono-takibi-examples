declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/svgconvert': {
      $post:
        | {
            input: { form: { file?: File | undefined } }
            output: { blob_name?: string | undefined; blob_url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { form: { file?: File | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
    }
  },
  '/'
>
export default routes
