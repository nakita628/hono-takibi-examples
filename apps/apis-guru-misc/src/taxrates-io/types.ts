declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/tax/countrycode': {
      $get:
        | {
            input: {
              query: {
                domain?: string | undefined
                country_code?: string | undefined
                filter?: string | undefined
                zip?: string | undefined
                'product_codes[]'?: string | undefined
                'province '?: string | undefined
                date?: string | undefined
              }
            }
            output: {
              country_name?: string | undefined
              taxes?:
                | {
                    Country?: string | undefined
                    Type?: string | undefined
                    data_name?: string | undefined
                    data_value?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                domain?: string | undefined
                country_code?: string | undefined
                filter?: string | undefined
                zip?: string | undefined
                'product_codes[]'?: string | undefined
                'province '?: string | undefined
                date?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              fields?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/tax/ip': {
      $get:
        | {
            input: {
              query: {
                domain?: string | undefined
                ip?: string | undefined
                filter?: string | undefined
                zip?: string | undefined
                product_code?: string | undefined
              }
            }
            output: {
              country_name?: string | undefined
              taxes?:
                | {
                    Country?: string | undefined
                    Type?: string | undefined
                    data_name?: string | undefined
                    data_value?: string | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                domain?: string | undefined
                ip?: string | undefined
                filter?: string | undefined
                zip?: string | undefined
                product_code?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              fields?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v3/tax/rates': {
      $get:
        | {
            input: {
              query: {
                domain?: string | undefined
                filter?: string | undefined
                cursor?: string | undefined
                Product_code?: string | undefined
              }
            }
            output: {
              id?: string | undefined
              name?: string | undefined
              rates?:
                | {
                    data_name?: string | undefined
                    data_value?: string | undefined
                    product_code?: string | undefined
                    type?: string | undefined
                  }[]
                | undefined
              state?: string | undefined
              zip?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                domain?: string | undefined
                filter?: string | undefined
                cursor?: string | undefined
                Product_code?: string | undefined
              }
            }
            output: {
              code?: string | undefined
              fields?: string | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
