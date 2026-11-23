import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyticsItineraryPriceMetricsRoute } from './routes'
import { getAnalyticsItineraryPriceMetricsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getAnalyticsItineraryPriceMetricsRoute,
  getAnalyticsItineraryPriceMetricsRouteHandler,
)

export default app
