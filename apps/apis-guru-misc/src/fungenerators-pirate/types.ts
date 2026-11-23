declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pirate/generate/insult': {
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
    '/pirate/generate/lorem-ipsum': {
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
    '/pirate/generate/name': {
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
    '/pirate/translate': {
      $get:
        | { input: { query: { text: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { text: string } }; output: {}; outputFormat: string; status: 401 }
    }
  },
  '/'
>
export default routes
