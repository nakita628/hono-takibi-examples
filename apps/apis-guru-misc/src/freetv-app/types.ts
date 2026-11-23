type NewsItem = {
  created?: string | undefined
  ref?: string | undefined
  thumbnail?: string | undefined
  title?: string | undefined
}
type ApiResponse = { getLatestNewsForChatGPT: NewsItem[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/services': {
      $get: {
        input: { query: { mobile: 1; funcs: 'getLatestNewsForChatGPT' } }
        output: ApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
