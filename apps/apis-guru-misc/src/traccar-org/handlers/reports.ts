import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportsEventsRoute,
  getReportsRouteRoute,
  getReportsStopsRoute,
  getReportsSummaryRoute,
  getReportsTripsRoute,
} from '../routes'

export const getReportsEventsRouteHandler: RouteHandler<typeof getReportsEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportsRouteRouteHandler: RouteHandler<typeof getReportsRouteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsStopsRouteHandler: RouteHandler<typeof getReportsStopsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsSummaryRouteHandler: RouteHandler<typeof getReportsSummaryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportsTripsRouteHandler: RouteHandler<typeof getReportsTripsRoute> = async (c) => {
  throw new Error('Not implemented')
}
