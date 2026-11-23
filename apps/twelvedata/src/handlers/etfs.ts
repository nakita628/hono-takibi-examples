import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEtfsFamilyRoute,
  getEtfsListRoute,
  getEtfsRoute,
  getEtfsTypeRoute,
  getEtfsWorldCompositionRoute,
  getEtfsWorldPerformanceRoute,
  getEtfsWorldRiskRoute,
  getEtfsWorldRoute,
  getEtfsWorldSummaryRoute,
} from '../routes'

export const getEtfsRouteHandler: RouteHandler<typeof getEtfsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfsFamilyRouteHandler: RouteHandler<typeof getEtfsFamilyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfsListRouteHandler: RouteHandler<typeof getEtfsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfsTypeRouteHandler: RouteHandler<typeof getEtfsTypeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfsWorldRouteHandler: RouteHandler<typeof getEtfsWorldRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfsWorldCompositionRouteHandler: RouteHandler<
  typeof getEtfsWorldCompositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfsWorldPerformanceRouteHandler: RouteHandler<
  typeof getEtfsWorldPerformanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEtfsWorldRiskRouteHandler: RouteHandler<typeof getEtfsWorldRiskRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEtfsWorldSummaryRouteHandler: RouteHandler<
  typeof getEtfsWorldSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
