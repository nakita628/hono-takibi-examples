import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2LastNbboStocksTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const stocksLastQuoteHandler = app.openapi(getV2LastNbboStocksTickerRoute, (c) => {
  throw new Error('Not implemented')
})
