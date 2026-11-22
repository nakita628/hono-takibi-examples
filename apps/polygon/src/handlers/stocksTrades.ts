import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2TicksStocksTradesTickerDateRoute, getV3TradesStockTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const stocksTradesHandler = app
  .openapi(getV2TicksStocksTradesTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TradesStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
