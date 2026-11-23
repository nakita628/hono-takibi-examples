declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/apps/files_trashbin/preview': {
      $get:
        | {
            input: {
              query: {
                fileId?: bigint | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                fileId?: bigint | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                fileId?: bigint | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
              }
            }
            output: { message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                fileId?: bigint | undefined
                x?: bigint | undefined
                y?: bigint | undefined
                a?: boolean | undefined
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
