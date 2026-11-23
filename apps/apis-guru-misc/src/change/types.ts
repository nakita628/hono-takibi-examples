declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/donations/carbon_calculate': {
      $get: {
        input: {
          query: {
            origin_address?: number | undefined
            destination_address?: number | undefined
            distance_mi?: number | undefined
            weight_lb: number
            transportation_method?: 'air' | 'truck' | 'rail' | 'sea' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/donations/carbon_stats': {
      $get: {
        input: { query: { id?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/donations/create': {
      $post: {
        input: {
          query: {
            amount: string
            nonprofit_id: string
            funding_source: 'merchant' | 'customer'
            zip_code?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/donations/crypto_calculate': {
      $get: {
        input: { query: { count?: number | undefined; currency: 'eth' | 'btc' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/donations/index': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/donations/show': {
      $get: { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/nonprofits/list': {
      $get: {
        input: { query: { name?: string | undefined; page?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/nonprofits/show': {
      $get: { input: { query: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
