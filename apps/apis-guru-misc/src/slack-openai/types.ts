type SearchRequest = { query: string }
type Result = { message?: string | undefined; permalink?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ai.alpha.search.messages': {
      $post: {
        input: { json: SearchRequest }
        output: { ok: boolean; results?: Result[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
