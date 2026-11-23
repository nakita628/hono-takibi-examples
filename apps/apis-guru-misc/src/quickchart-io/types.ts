declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/chart': {
      $get:
        | {
            input: {
              query: {
                chart?: string | undefined
                width?: number | undefined
                height?: number | undefined
                format?: string | undefined
                backgroundColor?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                width?: number | undefined
                height?: number | undefined
                format?: string | undefined
                backgroundColor?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                width?: number | undefined
                height?: number | undefined
                format?: string | undefined
                backgroundColor?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                width?: number | undefined
                height?: number | undefined
                format?: string | undefined
                backgroundColor?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                backgroundColor?: string | undefined
                chart?: { [x: string]: unknown } | undefined
                format?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                backgroundColor?: string | undefined
                chart?: { [x: string]: unknown } | undefined
                format?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                backgroundColor?: string | undefined
                chart?: { [x: string]: unknown } | undefined
                format?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                backgroundColor?: string | undefined
                chart?: { [x: string]: unknown } | undefined
                format?: string | undefined
                height?: number | undefined
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/qr': {
      $get:
        | {
            input: {
              query: {
                text?: string | undefined
                width?: number | undefined
                height?: number | undefined
                format?: string | undefined
                margin?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                text?: string | undefined
                width?: number | undefined
                height?: number | undefined
                format?: string | undefined
                margin?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                format?: string | undefined
                height?: number | undefined
                margin?: number | undefined
                text?: string | undefined
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                format?: string | undefined
                height?: number | undefined
                margin?: number | undefined
                text?: string | undefined
                width?: number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
