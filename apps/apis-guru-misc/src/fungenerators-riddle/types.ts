declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/riddle': {
      $delete:
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { query: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { query: { question: string; category: string; answer: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { question: string; category: string; answer: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { query: { question: string; category: string; answer: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { question: string; category: string; answer: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/riddle/random': {
      $get:
        | {
            input: { query: { category?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { category?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/riddle/search': {
      $get:
        | {
            input: { query: { query?: string | undefined; category?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; category?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
