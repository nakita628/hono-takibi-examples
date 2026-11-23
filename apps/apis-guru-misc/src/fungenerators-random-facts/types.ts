declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/fact': {
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
      $put:
        | {
            input: { query: { fact: string; category: string; subcategory: string; tags: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { fact: string; category: string; subcategory: string; tags: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/fact/categories': {
      $get:
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { start?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/fact/fod': {
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
    '/fact/fod/categories': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/fact/numbers': {
      $get:
        | { input: { query: { number: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { number: number } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/fact/onthisday/born': {
      $get:
        | {
            input: { query: { month?: string | undefined; day?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { month?: string | undefined; day?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/fact/onthisday/died': {
      $get:
        | {
            input: { query: { month?: string | undefined; day?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { month?: string | undefined; day?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/fact/onthisday/event': {
      $get:
        | {
            input: { query: { month?: string | undefined; day?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { month?: string | undefined; day?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/fact/random': {
      $get:
        | {
            input: { query: { category?: string | undefined; subcategory?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { category?: string | undefined; subcategory?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/fact/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                category?: string | undefined
                subcategory?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                category?: string | undefined
                subcategory?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  },
  '/'
>
export default routes
