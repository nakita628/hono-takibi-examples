type Product = {
  product_id?: string | undefined
  description?: string | undefined
  display_name?: string | undefined
  capacity?: number | undefined
  image?: string | undefined
}
type ProductList = { products?: Product[] | undefined }
type Error = {
  code?: number | undefined
  message?: string | undefined
  fields?: string | undefined
}
type PriceEstimate = {
  product_id?: string | undefined
  currency_code?: string | undefined
  display_name?: string | undefined
  estimate?: string | undefined
  low_estimate?: number | undefined
  high_estimate?: number | undefined
  surge_multiplier?: number | undefined
}
type Profile = {
  first_name?: string | undefined
  last_name?: string | undefined
  email?: string | undefined
  picture?: string | undefined
  promo_code?: string | undefined
}
type Activity = { uuid?: string | undefined }
type Activities = {
  offset?: number | undefined
  limit?: number | undefined
  count?: number | undefined
  history?: Activity[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/products': {
      $get:
        | {
            input: { query: { latitude: number; longitude: number } }
            output: ProductList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { latitude: number; longitude: number } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/estimates/price': {
      $get:
        | {
            input: {
              query: {
                start_latitude: number
                start_longitude: number
                end_latitude: number
                end_longitude: number
              }
            }
            output: PriceEstimate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_latitude: number
                start_longitude: number
                end_latitude: number
                end_longitude: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/estimates/time': {
      $get:
        | {
            input: {
              query: {
                start_latitude: number
                start_longitude: number
                customer_uuid?: string | undefined
                product_id?: string | undefined
              }
            }
            output: Product[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_latitude: number
                start_longitude: number
                customer_uuid?: string | undefined
                product_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: Profile; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/history': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: Activities
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
