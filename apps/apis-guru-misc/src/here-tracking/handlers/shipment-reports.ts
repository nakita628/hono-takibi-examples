import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShipmentReportsV4HealthRoute,
  getShipmentReportsV4ShipmentReportIdMetricRoute,
  getShipmentReportsV4ShipmentReportIdStatusRoute,
  getShipmentReportsV4ShipmentReportIdSummaryRoute,
  getShipmentReportsV4VersionRoute,
  postShipmentReportsV4Route,
} from '../routes'

export const postShipmentReportsV4RouteHandler: RouteHandler<
  typeof postShipmentReportsV4Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShipmentReportsV4HealthRouteHandler: RouteHandler<
  typeof getShipmentReportsV4HealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShipmentReportsV4VersionRouteHandler: RouteHandler<
  typeof getShipmentReportsV4VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShipmentReportsV4ShipmentReportIdStatusRouteHandler: RouteHandler<
  typeof getShipmentReportsV4ShipmentReportIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShipmentReportsV4ShipmentReportIdSummaryRouteHandler: RouteHandler<
  typeof getShipmentReportsV4ShipmentReportIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShipmentReportsV4ShipmentReportIdMetricRouteHandler: RouteHandler<
  typeof getShipmentReportsV4ShipmentReportIdMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}
