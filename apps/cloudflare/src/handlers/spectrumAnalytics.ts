import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserSpectrumAnalyticsZonesReportRoute,
  getZonesZoneIdSpectrumAnalyticsAggregateCurrentRoute,
  getZonesZoneIdSpectrumAnalyticsEventsBytimeRoute,
  getZonesZoneIdSpectrumAnalyticsEventsSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spectrumAnalyticsHandler = app
  .openapi(getUserSpectrumAnalyticsZonesReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpectrumAnalyticsAggregateCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpectrumAnalyticsEventsBytimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdSpectrumAnalyticsEventsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
