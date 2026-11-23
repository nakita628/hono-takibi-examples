import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSeriesPastRoute,
  getSeriesRoute,
  getSeriesRunningRoute,
  getSeriesSerieIdOrSlugMatchesPastRoute,
  getSeriesSerieIdOrSlugMatchesRoute,
  getSeriesSerieIdOrSlugMatchesRunningRoute,
  getSeriesSerieIdOrSlugMatchesUpcomingRoute,
  getSeriesSerieIdOrSlugPlayersRoute,
  getSeriesSerieIdOrSlugRoute,
  getSeriesSerieIdOrSlugTournamentsRoute,
  getSeriesUpcomingRoute,
} from '../routes'

export const getSeriesRouteHandler: RouteHandler<typeof getSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesPastRouteHandler: RouteHandler<typeof getSeriesPastRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesRunningRouteHandler: RouteHandler<typeof getSeriesRunningRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSeriesUpcomingRouteHandler: RouteHandler<typeof getSeriesUpcomingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieIdOrSlugRouteHandler: RouteHandler<
  typeof getSeriesSerieIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieIdOrSlugMatchesRouteHandler: RouteHandler<
  typeof getSeriesSerieIdOrSlugMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieIdOrSlugMatchesPastRouteHandler: RouteHandler<
  typeof getSeriesSerieIdOrSlugMatchesPastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieIdOrSlugMatchesRunningRouteHandler: RouteHandler<
  typeof getSeriesSerieIdOrSlugMatchesRunningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieIdOrSlugMatchesUpcomingRouteHandler: RouteHandler<
  typeof getSeriesSerieIdOrSlugMatchesUpcomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieIdOrSlugPlayersRouteHandler: RouteHandler<
  typeof getSeriesSerieIdOrSlugPlayersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeriesSerieIdOrSlugTournamentsRouteHandler: RouteHandler<
  typeof getSeriesSerieIdOrSlugTournamentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
