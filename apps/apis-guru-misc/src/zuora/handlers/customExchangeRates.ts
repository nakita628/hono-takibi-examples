import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomExchangeRatesCurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const customExchangeRatesHandler = app.openapi(
  getV1CustomExchangeRatesCurrencyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
