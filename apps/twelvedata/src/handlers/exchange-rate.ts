import { OpenAPIHono } from '@hono/zod-openapi'
import { getExchangeRateRoute } from '../routes'

const app = new OpenAPIHono()

export const exchangeRateHandler = app.openapi(getExchangeRateRoute, (c) => {
  throw new Error('Not implemented')
})
