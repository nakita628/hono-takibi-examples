type Book = { id?: string | undefined; name?: string | undefined; year?: string | undefined }
type Sentence = { book?: Book | undefined; id?: string | undefined; sentence?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/books': {
      $get: { input: {}; output: { data?: Book[] | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/books/:id/sentences': {
      $get: {
        input: { param: { id: string } } & { query: { limit?: number | undefined } }
        output: { data?: Sentence[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sentences': {
      $get: {
        input: { query: { limit?: number | undefined } }
        output: { data?: Sentence[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sentences/:id': {
      $get: {
        input: { param: { id: string } }
        output: { data?: Sentence | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
