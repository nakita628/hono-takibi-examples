import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarketsThisRoute } from '../routes'

const app = new OpenAPIHono()

export const marketsThisMarketplaceHandler = app.openapi(getMarketsThisRoute, (c) => {
  throw new Error('Not implemented')
})
