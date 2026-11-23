type CreateSessionRequest = {
  merchantAccount: string
  setupToken: string
  store?: string | undefined
}
type CreateSessionResponse = {
  id?: string | undefined
  installationId?: string | undefined
  merchantAccount?: string | undefined
  sdkData?: string | undefined
  store?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/sessions': {
      $post: {
        input: { json: CreateSessionRequest }
        output: CreateSessionResponse
        outputFormat: 'json'
        status: 201
      }
    }
  },
  '/'
>
export default routes
