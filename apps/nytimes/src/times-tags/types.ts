declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/timestags': {
      $get: {
        input: {
          query: {
            query: string
            filter?: 'Des' | 'Geo' | 'Org' | 'Per' | undefined
            max?: number | undefined
          }
        }
        output: string[][]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
