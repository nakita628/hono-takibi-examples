import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLeaguesLeagueIdOrSlugMatchesPastRoute,
  getLeaguesLeagueIdOrSlugMatchesRoute,
  getLeaguesLeagueIdOrSlugMatchesRunningRoute,
  getLeaguesLeagueIdOrSlugMatchesUpcomingRoute,
  getLeaguesLeagueIdOrSlugRoute,
  getLeaguesLeagueIdOrSlugSeriesRoute,
  getLeaguesLeagueIdOrSlugTournamentsRoute,
  getLeaguesRoute,
} from '../routes'

export const getLeaguesRouteHandler: RouteHandler<typeof getLeaguesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdOrSlugRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdOrSlugMatchesRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdOrSlugMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdOrSlugMatchesPastRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdOrSlugMatchesPastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdOrSlugMatchesRunningRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdOrSlugMatchesRunningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdOrSlugMatchesUpcomingRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdOrSlugMatchesUpcomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdOrSlugSeriesRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdOrSlugSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdOrSlugTournamentsRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdOrSlugTournamentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
