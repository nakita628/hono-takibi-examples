declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/make-pdf': {
      $post: {
        input: { json: { html?: string | undefined; key: string; url?: string | undefined } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
