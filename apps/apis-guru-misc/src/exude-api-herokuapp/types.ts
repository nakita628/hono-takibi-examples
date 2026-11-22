type ExudeBean = { data?: string | undefined; links?: string[] | undefined }
type ExudeResponseBean = { data?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/exude/:type/data': {
      $post: {
        input: { param: { type: string } } & { form: ExudeBean }
        output: ExudeResponseBean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/exude/:type/file': {
      $post: {
        input: { param: { type: string } } & { form: { file?: File | undefined } }
        output: ExudeResponseBean
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
