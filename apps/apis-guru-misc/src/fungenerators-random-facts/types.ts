declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/fact': {
      $delete: { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { query: { id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { query: { fact: string; category: string; subcategory: string; tags: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fact/categories': {
      $get: {
        input: { query: { start?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fact/fod': {
      $get: {
        input: { query: { category?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fact/fod/categories': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/fact/numbers': {
      $get: { input: { query: { number: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/fact/onthisday/born': {
      $get: {
        input: { query: { month?: string | undefined; day?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fact/onthisday/died': {
      $get: {
        input: { query: { month?: string | undefined; day?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fact/onthisday/event': {
      $get: {
        input: { query: { month?: string | undefined; day?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fact/random': {
      $get: {
        input: { query: { category?: string | undefined; subcategory?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/fact/search': {
      $get: {
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
    }
  },
  '/'
>
export default routes
