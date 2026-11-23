declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/multiple-types-multiple-examples': {
      $post: {
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
    }
  } & {
    '/multiple-types-single-example': {
      $post: {
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
    }
  } & {
    '/single-type-multiple-examples': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/single-type-single-example': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
