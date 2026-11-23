type AuthenticationTokenResponse = { data: { token: string }; success: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth': {
      $post: {
        input: { query: { client_id: string; client_secret: string } }
        output: AuthenticationTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
