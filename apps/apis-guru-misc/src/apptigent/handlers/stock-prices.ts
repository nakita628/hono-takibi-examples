import { OpenAPIHono } from '@hono/zod-openapi'
import { postStockPricesRoute } from '../routes'

const app = new OpenAPIHono()

export const stockPricesHandler = app.openapi(postStockPricesRoute, (c) => {
  throw new Error('Not implemented')
})
