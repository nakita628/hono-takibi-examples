import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2LastTradeStocksTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const stocksLastTradeHandler = app.openapi(getV2LastTradeStocksTickerRoute, (c) => {
  throw new Error('Not implemented')
})
