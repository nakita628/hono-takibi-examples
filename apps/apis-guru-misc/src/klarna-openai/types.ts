type Product = {
  attributes?: string[] | undefined
  name?: string | undefined
  price?: string | undefined
  url?: string | undefined
}
type ProductResponse = { products?: Product[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/public/openai/v0/products': {
      $get:
        | {
            input: { query: { q: string; size?: number | undefined; budget?: number | undefined } }
            output: ProductResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q: string; size?: number | undefined; budget?: number | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  },
  '/'
>
export default routes
