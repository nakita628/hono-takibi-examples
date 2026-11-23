type ExchangeSide = 'buy' | 'sell'
type Amount = { currency: string; value: bigint }
type RateType = 'splitPayment' | 'balanceConversion' | 'transfer' | 'splitRefund'
type CalculateRateRequestItem = {
  exchangeSide: ExchangeSide
  sourceAmount: Amount
  targetCurrency: string
  type: RateType
}
type CalculateRateRequest = { exchangeCalculations: CalculateRateRequestItem[] }
type CalculateRateResponseItem = {
  appliedExchangeRate?: number | undefined
  exchangeSide?: string | undefined
  sourceAmount?: Amount | undefined
  targetAmount?: Amount | undefined
  type?: string | undefined
}
type CalculateRateResponse = { exchangeCalculations?: CalculateRateResponseItem[] | undefined }
type InvalidField = { name: string; value: string; message: string }
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/rates/calculate': {
      $post:
        | {
            input: { json: CalculateRateRequest }
            output: CalculateRateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CalculateRateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CalculateRateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CalculateRateRequest }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
