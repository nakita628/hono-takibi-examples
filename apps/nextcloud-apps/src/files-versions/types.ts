declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/apps/files_versions/preview': {
      $get:
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                version?: string | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                version?: string | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 303
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                version?: string | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                version?: string | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                file?: string | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                version?: string | undefined
                mimeFallback?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
