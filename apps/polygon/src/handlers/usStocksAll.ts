import { OpenAPIHono } from '@hono/zod-openapi'
import { getStocksDevTradesTickerRoute, getStocksV1ExchangesRoute } from '../routes'

const app = new OpenAPIHono()

export const usStocksAllHandler = app
  .openapi(getStocksDevTradesTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksV1ExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
