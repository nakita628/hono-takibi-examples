declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/post-review': {
      $post:
        | {
            input: {
              query: {
                user_email: string
                user_name?: string | undefined
                rating: 1 | 2 | 3 | 4 | 5
              }
            } & { json: { rating: number; user_email: string; user_name?: string | undefined } }
            output: { data?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                user_email: string
                user_name?: string | undefined
                rating: 1 | 2 | 3 | 4 | 5
              }
            } & { json: { rating: number; user_email: string; user_name?: string | undefined } }
            output: { data?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                user_email: string
                user_name?: string | undefined
                rating: 1 | 2 | 3 | 4 | 5
              }
            } & { json: { rating: number; user_email: string; user_name?: string | undefined } }
            output: { data?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                user_email: string
                user_name?: string | undefined
                rating: 1 | 2 | 3 | 4 | 5
              }
            } & { json: { rating: number; user_email: string; user_name?: string | undefined } }
            output: { data?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
    }
  },
  '/'
>
export default routes
