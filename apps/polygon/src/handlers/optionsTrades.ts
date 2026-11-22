import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3TradesOptionsTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const optionsTradesHandler = app.openapi(getV3TradesOptionsTickerRoute, (c) => {
  throw new Error('Not implemented')
})
