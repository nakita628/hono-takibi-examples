declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/shakespeare/generate/insult': {
      $get: {
        input: { query: { limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shakespeare/generate/lorem-ipsum': {
      $get: {
        input: { query: { type?: string | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shakespeare/generate/name': {
      $get: {
        input: { query: { variation?: string | undefined; limit?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shakespeare/quote': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/shakespeare/translate': {
      $get: { input: { query: { text: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
