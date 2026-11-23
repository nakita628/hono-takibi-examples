import { OpenAPIHono } from '@hono/zod-openapi'
import { getStocksRoute } from '../routes'

const app = new OpenAPIHono()

export const stocksHandler = app.openapi(getStocksRoute, (c) => {
  throw new Error('Not implemented')
})
