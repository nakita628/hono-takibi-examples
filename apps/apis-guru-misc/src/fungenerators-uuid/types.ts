declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/uuid': {
      $get: {
        input: { query: { count?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { uuidstr: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/uuid/version/:version': {
      $get: {
        input: { param: { version: number } } & {
          query: {
            count?: number | undefined
            type?: string | undefined
            text?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
