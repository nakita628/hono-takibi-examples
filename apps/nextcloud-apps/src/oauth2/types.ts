declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/apps/oauth2/authorize': {
      $get:
        | {
            input: {
              query: {
                client_id: string
                state: string
                response_type: string
                redirect_uri?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                state: string
                response_type: string
                redirect_uri?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
    }
  } & {
    '/index.php/apps/oauth2/api/v1/token': {
      $post:
        | {
            input: {
              json: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: (string | null) | undefined
                refresh_token?: (string | null) | undefined
                client_id?: (string | null) | undefined
                client_secret?: (string | null) | undefined
              }
            }
            output: {
              access_token: string
              token_type: string
              expires_in: bigint
              refresh_token: string
              user_id: string
              'x.nc-gss.secondary_url'?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: (string | null) | undefined
                refresh_token?: (string | null) | undefined
                client_id?: (string | null) | undefined
                client_secret?: (string | null) | undefined
              }
            }
            output: { error: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                grant_type: 'authorization_code' | 'refresh_token'
                code?: (string | null) | undefined
                refresh_token?: (string | null) | undefined
                client_id?: (string | null) | undefined
                client_secret?: (string | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes
