declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/analyze/pricing': {
      $get: {
        input: { query: { url?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/customers': {
      $get: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/login': {
      $post: {
        input: { query: { email?: string | undefined; password?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/logout': {
      $post: {
        input: { query: { email?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/orders': {
      $get: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/orders/1137': {
      $delete: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/products': {
      $get: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/products/1137': {
      $delete: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/register': {
      $post: {
        input: {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            company_name?: string | undefined
            shop_url?: string | undefined
            email?: string | undefined
            store_name?: string | undefined
            store_url?: string | undefined
            password?: string | undefined
            fromuser?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/register_woocommerce': {
      $post: {
        input: {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            company_name?: string | undefined
            shop_url?: string | undefined
            email?: string | undefined
            store_name?: string | undefined
            store_url?: string | undefined
            password?: string | undefined
            fromuser?: string | undefined
            api_url?: string | undefined
            consumer_key?: string | undefined
            consumer_secret?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/rule': {
      $get: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/rule/ruleData/1': {
      $get: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/rule/ruleData/1/latest': {
      $get: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/seo/ranking/latest': {
      $get: {
        input: { query: { ''?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
