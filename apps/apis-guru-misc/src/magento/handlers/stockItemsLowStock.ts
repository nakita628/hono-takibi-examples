import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StockItemsLowStockIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const stockItemsLowStockHandler = app.openapi(getV1StockItemsLowStockIndexRoute, (c) => {
  throw new Error('Not implemented')
})
