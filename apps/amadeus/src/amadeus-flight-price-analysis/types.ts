type ItineraryPriceMetric = {
  currencyCode?: string | undefined
  departureDate?: string | undefined
  destination?: { iataCode?: string | undefined } | undefined
  oneWay?: boolean | undefined
  origin?: { iataCode?: string | undefined } | undefined
  priceMetrics?:
    | {
        amount?: string | undefined
        quartileRanking?: 'MINIMUM' | 'FIRST' | 'MEDIUM' | 'THIRD' | 'MAXIMUM' | undefined
      }[]
    | undefined
  transportType?: 'FLIGHT' | undefined
  type?: string | undefined
}
type Warning = {
  code: number
  detail?: string | undefined
  source?:
    | { example?: string | undefined; parameter?: string | undefined; pointer?: string | undefined }
    | undefined
  title: string
}
type Error_400 = {
  errors?:
    | {
        code?: number | undefined
        detail?: string | undefined
        source?:
          | {
              example?: string | undefined
              parameter?: string | undefined
              pointer?: string | undefined
            }
          | undefined
        status?: number | undefined
        title?: string | undefined
      }[]
    | undefined
}
type Error_500 = {
  errors?:
    | {
        code?: number | undefined
        detail?: string | undefined
        source?:
          | {
              example?: string | undefined
              parameter?: string | undefined
              pointer?: string | undefined
            }
          | undefined
        status?: number | undefined
        title?: string | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/analytics/itinerary-price-metrics': {
      $get:
        | {
            input: {
              query: {
                originIataCode: string
                destinationIataCode: string
                departureDate: string
                currencyCode?: string | undefined
                oneWay?: boolean | undefined
              }
            }
            output: {
              data?: ItineraryPriceMetric[] | undefined
              meta?:
                | {
                    href?: string | undefined
                    methods?:
                      | ('GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS')[]
                      | undefined
                  }
                | undefined
              warnings?: Warning[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                originIataCode: string
                destinationIataCode: string
                departureDate: string
                currencyCode?: string | undefined
                oneWay?: boolean | undefined
              }
            }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                originIataCode: string
                destinationIataCode: string
                departureDate: string
                currencyCode?: string | undefined
                oneWay?: boolean | undefined
              }
            }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
