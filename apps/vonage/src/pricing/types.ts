type NetworkObject = {
  currency?: string | undefined
  mcc?: string | undefined
  mnc?: string | undefined
  networkCode?: string | undefined
  networkName?: string | undefined
  price?: string | undefined
  type?: string | undefined
}
type CountryObject = {
  countryDisplayName?: string | undefined
  countryName?: string | undefined
  currency?: string | undefined
  defaultPrice?: string | undefined
  dialingPrefix?: string | undefined
  networks?: NetworkObject[] | undefined
}
type PricingCountriesResponse = {
  count?: string | undefined
  countries?: CountryObject[] | undefined
}
type PricingCountryResponse = {
  countryCode?: string | undefined
  countryDisplayName?: string | undefined
  countryName?: string | undefined
  currency?: string | undefined
  defaultPrice?: string | undefined
  dialingPrefix?: string | undefined
  networks?: NetworkObject[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/get-full-pricing/outbound/:type': {
      $get:
        | {
            input: { param: { type: string } } & { query: { api_key: string; api_secret: string } }
            output: PricingCountriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & { query: { api_key: string; api_secret: string } }
            output: {
              error_title: string
              invalid_parameters: { message?: string | undefined; parameter?: string | undefined }
              type: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & { query: { api_key: string; api_secret: string } }
            output: { code: string; currency: string; 'error-code-label': string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & { query: { api_key: string; api_secret: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { type: string } } & { query: { api_key: string; api_secret: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/get-prefix-pricing/outbound/:type': {
      $get:
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; prefix: string }
            }
            output: PricingCountriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; prefix: string }
            }
            output: {
              error_title: string
              invalid_parameters: { message?: string | undefined; parameter?: string | undefined }
              type: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; prefix: string }
            }
            output: { code: string; currency: string; 'error-code-label': string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; prefix: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; prefix: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/get-pricing/outbound/:type': {
      $get:
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; country: string }
            }
            output: PricingCountryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; country: string }
            }
            output: {
              error_title: string
              invalid_parameters: { message?: string | undefined; parameter?: string | undefined }
              type: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; country: string }
            }
            output: { code: string; currency: string; 'error-code-label': string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; country: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { type: string } } & {
              query: { api_key: string; api_secret: string; country: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  },
  '/'
>
export default routes
