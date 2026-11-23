import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductEpidRoute, getProductSummarySearchRoute } from './routes'
import { getProductEpidRouteHandler, getProductSummarySearchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getProductEpidRoute, getProductEpidRouteHandler)
  .openapi(getProductSummarySearchRoute, getProductSummarySearchRouteHandler)

export default app
