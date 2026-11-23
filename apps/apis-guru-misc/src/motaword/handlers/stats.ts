import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatsCommissionsRoute,
  getStatsPopularPairsRoute,
  getStatsProjectsRoute,
  getStatsRoute,
  getStatsStringsRoute,
  postStatsCommissionsRoute,
} from '../routes'

export const getStatsRouteHandler: RouteHandler<typeof getStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsCommissionsRouteHandler: RouteHandler<
  typeof getStatsCommissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStatsCommissionsRouteHandler: RouteHandler<
  typeof postStatsCommissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsPopularPairsRouteHandler: RouteHandler<
  typeof getStatsPopularPairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsProjectsRouteHandler: RouteHandler<typeof getStatsProjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatsStringsRouteHandler: RouteHandler<typeof getStatsStringsRoute> = async (c) => {
  throw new Error('Not implemented')
}
