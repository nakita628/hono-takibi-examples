import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdAnalyticsLatencyRoute } from '../routes'

const app = new OpenAPIHono()

export const argoAnalyticsForZoneHandler = app.openapi(getZonesZoneIdAnalyticsLatencyRoute, (c) => {
  throw new Error('Not implemented')
})
