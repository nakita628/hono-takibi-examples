type CountrySummary = {
  callingCode?: string | undefined
  countryKey?: string | undefined
  label?: string | undefined
}
type ArrayOfCountrySummary = CountrySummary[]
type ErrorField = { code: string; message?: string | undefined; path: string }
type Error = {
  code: string
  fields?: ErrorField[] | undefined
  message?: string | undefined
  stack?: string[] | undefined
}
type ErrorLimit = {
  code: string
  fields?: ErrorField[] | undefined
  message?: string | undefined
  retryAfterSec: number
  stack?: string[] | undefined
}
type State = { label?: string | undefined; stateKey?: string | undefined }
type Country = {
  callingCode?: string | undefined
  countryKey?: string | undefined
  label?: string | undefined
  states?: State[] | undefined
}
type ArrayOfCountry = Country[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/countries': {
      $get:
        | {
            input: {
              query: {
                marketId: string
                regionTypeId?: number | undefined
                regionName?: string | undefined
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: ArrayOfCountrySummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                marketId: string
                regionTypeId?: number | undefined
                regionName?: string | undefined
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                marketId: string
                regionTypeId?: number | undefined
                regionName?: string | undefined
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                marketId: string
                regionTypeId?: number | undefined
                regionName?: string | undefined
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/countries/:countryKey': {
      $get:
        | {
            input: { param: { countryKey: string } } & {
              query: {
                marketId: string
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: ArrayOfCountry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryKey: string } } & {
              query: {
                marketId: string
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { countryKey: string } } & {
              query: {
                marketId: string
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { countryKey: string } } & {
              query: {
                marketId: string
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { countryKey: string } } & {
              query: {
                marketId: string
                sort?: 'key' | 'label' | undefined
                order?: 'ascending' | 'descending' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
