declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/multiple-types-multiple-examples': {
      $post:
        | {
            input: {
              json: {
                'string (format: date)'?: string | undefined
                'string (format: date-time)'?: string | undefined
                'string (format: string)'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                'string (format: date)'?: string | undefined
                'string (format: date-time)'?: string | undefined
                'string (format: string)'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/multiple-types-single-example': {
      $post:
        | {
            input: {
              json: {
                'string (format: date)'?: string | undefined
                'string (format: date-time)'?: string | undefined
                'string (format: string)'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                'string (format: date)'?: string | undefined
                'string (format: date-time)'?: string | undefined
                'string (format: string)'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/single-type-multiple-examples': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/single-type-single-example': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  },
  '/'
>
export default routes
