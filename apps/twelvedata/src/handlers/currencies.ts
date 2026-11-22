import { OpenAPIHono } from '@hono/zod-openapi'
import { getCurrencyConversionRoute, getExchangeRateRoute } from '../routes'

const app = new OpenAPIHono()

export const currenciesHandler = app
  .openapi(getCurrencyConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExchangeRateRoute, (c) => {
    throw new Error('Not implemented')
  })
