import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2TicksStocksNbboTickerDateRoute, getV3QuotesStockTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const stocksQuotesHandler = app
  .openapi(getV2TicksStocksNbboTickerDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3QuotesStockTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
