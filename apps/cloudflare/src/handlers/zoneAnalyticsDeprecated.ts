import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdAnalyticsColosRoute, getZonesZoneIdAnalyticsDashboardRoute } from '../routes'

const app = new OpenAPIHono()

export const zoneAnalyticsDeprecatedHandler = app
  .openapi(getZonesZoneIdAnalyticsColosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdAnalyticsDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
