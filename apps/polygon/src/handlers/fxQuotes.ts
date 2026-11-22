import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3QuotesFxTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const fxQuotesHandler = app.openapi(getV3QuotesFxTickerRoute, (c) => {
  throw new Error('Not implemented')
})
