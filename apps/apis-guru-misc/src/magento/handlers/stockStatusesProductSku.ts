import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1StockStatusesProductSkuRoute } from '../routes'

const app = new OpenAPIHono()

export const stockStatusesProductSkuHandler = app.openapi(
  getV1StockStatusesProductSkuRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
