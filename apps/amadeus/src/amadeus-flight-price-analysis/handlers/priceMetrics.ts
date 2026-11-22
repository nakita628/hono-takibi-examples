import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyticsItineraryPriceMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const priceMetricsHandler = app.openapi(getAnalyticsItineraryPriceMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
