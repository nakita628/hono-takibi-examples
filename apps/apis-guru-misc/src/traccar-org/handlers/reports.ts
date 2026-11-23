import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsEventsRoute,
  getReportsRouteRoute,
  getReportsStopsRoute,
  getReportsSummaryRoute,
  getReportsTripsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsStopsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsTripsRoute, (c) => {
    throw new Error('Not implemented')
  })
