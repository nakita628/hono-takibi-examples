import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StockItemsProductSkuRoute } from '../routes'

const app = new OpenAPIHono()

export const stockItemsProductSkuHandler = app.openapi(getV1StockItemsProductSkuRoute, (c) => {
  throw new Error('Not implemented')
})
