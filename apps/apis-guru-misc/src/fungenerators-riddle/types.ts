declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/riddle': {
      $delete: { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { query: { question: string; category: string; answer: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { query: { question: string; category: string; answer: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/riddle/random': {
      $get: {
        input: { query: { category?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/riddle/search': {
      $get: {
        input: { query: { query?: string | undefined; category?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
