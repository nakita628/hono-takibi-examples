import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdAnalyticsLatencyColosRoute } from '../routes'

const app = new OpenAPIHono()

export const argoAnalyticsForGeolocationHandler = app.openapi(
  getZonesZoneIdAnalyticsLatencyColosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
