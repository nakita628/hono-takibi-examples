import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZonesZoneIdDnsAnalyticsReportBytimeRoute,
  getZonesZoneIdDnsAnalyticsReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dnsAnalyticsHandler = app
  .openapi(getZonesZoneIdDnsAnalyticsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdDnsAnalyticsReportBytimeRoute, (c) => {
    throw new Error('Not implemented')
  })
