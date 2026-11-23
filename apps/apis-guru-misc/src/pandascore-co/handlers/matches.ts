import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMatchesMatchIdOrSlugOpponentsRoute,
  getMatchesMatchIdOrSlugRoute,
  getMatchesPastRoute,
  getMatchesRoute,
  getMatchesRunningRoute,
  getMatchesUpcomingRoute,
} from '../routes'

export const getMatchesRouteHandler: RouteHandler<typeof getMatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMatchesPastRouteHandler: RouteHandler<typeof getMatchesPastRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMatchesRunningRouteHandler: RouteHandler<typeof getMatchesRunningRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMatchesUpcomingRouteHandler: RouteHandler<typeof getMatchesUpcomingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMatchesMatchIdOrSlugRouteHandler: RouteHandler<
  typeof getMatchesMatchIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMatchesMatchIdOrSlugOpponentsRouteHandler: RouteHandler<
  typeof getMatchesMatchIdOrSlugOpponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
