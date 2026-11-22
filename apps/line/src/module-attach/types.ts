type AttachModuleResponse = { bot_id: string; scopes: string[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/module/auth/v1/token': {
      $post: {
        input: {
          json: {
            grant_type: string
            code: string
            redirect_uri: string
            code_verifier?: string | undefined
            client_id?: string | undefined
            client_secret?: string | undefined
            region?: string | undefined
            basic_search_id?: string | undefined
            scope?: string | undefined
            brand_type?: string | undefined
          }
        } & {
          form: {
            grant_type: string
            code: string
            redirect_uri: string
            code_verifier?: string | undefined
            client_id?: string | undefined
            client_secret?: string | undefined
            region?: string | undefined
            basic_search_id?: string | undefined
            scope?: string | undefined
            brand_type?: string | undefined
          }
        }
        output: AttachModuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
