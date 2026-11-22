declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/check_spelling': {
      $post: {
        input: { header: { 'X-RapidAPI-Key'?: string | undefined } } & {
          json: { lang_code?: string | undefined; text?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
