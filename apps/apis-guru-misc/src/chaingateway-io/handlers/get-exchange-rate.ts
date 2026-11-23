import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetExchangeRateRoute } from '../routes'

const app = new OpenAPIHono()

export const getExchangeRateHandler = app.openapi(postGetExchangeRateRoute, (c) => {
  throw new Error('Not implemented')
})
