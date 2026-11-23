import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportCountryAllRoute,
  getReportCountryCodeRoute,
  getReportCountryNameRoute,
  getReportTotalsRoute,
} from '../routes'

export const getReportCountryAllRouteHandler: RouteHandler<
  typeof getReportCountryAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportCountryCodeRouteHandler: RouteHandler<
  typeof getReportCountryCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportCountryNameRouteHandler: RouteHandler<
  typeof getReportCountryNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportTotalsRouteHandler: RouteHandler<typeof getReportTotalsRoute> = async (c) => {
  throw new Error('Not implemented')
}
