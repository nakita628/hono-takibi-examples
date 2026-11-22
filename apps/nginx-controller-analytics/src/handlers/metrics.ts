import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnalyticsMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app.openapi(getAnalyticsMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
