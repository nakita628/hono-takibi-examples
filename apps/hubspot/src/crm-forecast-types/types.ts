type ForecastTypeDealSplitProperties = {
  dealCustomAmountProperty: string
  dealCustomAmountPropertyInHomeCurrency: string
  dealCustomDateProperty: string
  dealSplitCustomAmountProperty: string
  dealSplitCustomAmountPropertyInHomeCurrency: string
  dealSplitWeightedCustomAmountProperty: string
  dealSplitWeightedCustomAmountPropertyInHomeCurrency: string
}
type ForecastTypeSettingPublicResponse = {
  amountInHomeCurrencyProperty?: string | undefined
  amountOrDatePropertyRestrictedForUser: boolean
  amountProperty: string
  createdAt: string
  createdAtTimestamp: bigint
  createdBy: number
  dateProperty: string
  dealSplitProperties?: ForecastTypeDealSplitProperties | undefined
  defaultType: boolean
  forecastName: string
  forecastTypeId: bigint
  id: string
  objectTypeId: string
  updatedAt: string
  updatedBy: number
  updatedTimestamp: bigint
  weightedAmountInHomeCurrencyProperty?: string | undefined
  weightedAmountProperty?: string | undefined
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/forecast-settings/2026-09/forecast-types': {
      $get:
        | {
            input: {}
            output: ForecastTypeSettingPublicResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/forecast-settings/2026-09/forecast-types/:forecastTypeId': {
      $get:
        | {
            input: { param: { forecastTypeId: bigint } }
            output: ForecastTypeSettingPublicResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { forecastTypeId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { forecastTypeId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { forecastTypeId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { forecastTypeId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
