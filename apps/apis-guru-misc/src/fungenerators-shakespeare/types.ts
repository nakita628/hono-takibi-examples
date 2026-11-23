declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/shakespeare/generate/insult': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/shakespeare/generate/lorem-ipsum': {
      $get:
        | {
            input: { query: { type?: string | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { type?: string | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/shakespeare/generate/name': {
      $get:
        | {
            input: { query: { variation?: string | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { variation?: string | undefined; limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/shakespeare/quote': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/shakespeare/translate': {
      $get:
        | { input: { query: { text: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { text: string } }; output: {}; outputFormat: string; status: 401 }
    }
  },
  '/'
>
export default routes
