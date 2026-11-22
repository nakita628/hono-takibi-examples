type SearchResponse = {
  results?:
    | {
        currency_code?: string | undefined
        description?: string | undefined
        price?: number | undefined
        title?: string | undefined
        url?: string | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/openai/details': {
      $get:
        | {
            input: { query: { ids: string } }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { ids: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/openai/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                price_min?: number | undefined
                price_max?: number | undefined
                similar_to_id?: string | undefined
                num_results?: string | undefined
              }
            }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                price_min?: number | undefined
                price_max?: number | undefined
                similar_to_id?: string | undefined
                num_results?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  },
  '/'
>
export default routes
