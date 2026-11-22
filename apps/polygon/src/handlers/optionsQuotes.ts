import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3QuotesOptionsTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const optionsQuotesHandler = app.openapi(getV3QuotesOptionsTickerRoute, (c) => {
  throw new Error('Not implemented')
})
