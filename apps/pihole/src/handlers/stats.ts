import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatsDatabaseQueryTypesRoute,
  getStatsDatabaseSummaryRoute,
  getStatsDatabaseTopClientsRoute,
  getStatsDatabaseTopDomainsRoute,
  getStatsDatabaseUpstreamsRoute,
  getStatsQueryTypesRoute,
  getStatsRecentBlockedRoute,
  getStatsSummaryRoute,
  getStatsTopClientsRoute,
  getStatsTopDomainsRoute,
  getStatsUpstreamsRoute,
} from '../routes'

export const getStatsSummaryRouteHandler: RouteHandler<typeof getStatsSummaryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsDatabaseSummaryRouteHandler: RouteHandler<
  typeof getStatsDatabaseSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsUpstreamsRouteHandler: RouteHandler<typeof getStatsUpstreamsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatsDatabaseUpstreamsRouteHandler: RouteHandler<
  typeof getStatsDatabaseUpstreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsTopDomainsRouteHandler: RouteHandler<typeof getStatsTopDomainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatsDatabaseTopDomainsRouteHandler: RouteHandler<
  typeof getStatsDatabaseTopDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsTopClientsRouteHandler: RouteHandler<typeof getStatsTopClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatsDatabaseTopClientsRouteHandler: RouteHandler<
  typeof getStatsDatabaseTopClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsQueryTypesRouteHandler: RouteHandler<typeof getStatsQueryTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatsDatabaseQueryTypesRouteHandler: RouteHandler<
  typeof getStatsDatabaseQueryTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsRecentBlockedRouteHandler: RouteHandler<
  typeof getStatsRecentBlockedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
