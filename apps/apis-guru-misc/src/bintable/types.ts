type ResponseItem = { data: { [x: string]: unknown }; message: string; result: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/balance': {
      $get:
        | {
            input: { query: { api_key: string } }
            output: ResponseItem[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { api_key: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { api_key: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { api_key: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/:bin': {
      $get:
        | {
            input: { param: { bin: string } } & { query: { api_key: string } }
            output: ResponseItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bin: string } } & { query: { api_key: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { bin: string } } & { query: { api_key: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { bin: string } } & { query: { api_key: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  },
  '/'
>
export default routes
