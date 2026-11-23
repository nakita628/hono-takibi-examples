type PerfectpdfApiBody = { api_key: string; html: string }
type Error = string
type Result = string
type InlineResponse_200 = Error | Result
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/perfectpdf/api': {
      $post: {
        input: { json: PerfectpdfApiBody }
        output: InlineResponse_200
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
