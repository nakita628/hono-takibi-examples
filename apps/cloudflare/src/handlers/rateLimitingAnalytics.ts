import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdRateLimitAnalyticsRoute } from '../routes'

const app = new OpenAPIHono()

export const rateLimitingAnalyticsHandler = app.openapi(
  getZonesZoneIdRateLimitAnalyticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
