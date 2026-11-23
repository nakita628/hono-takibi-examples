import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTournamentsPastRoute,
  getTournamentsRoute,
  getTournamentsRunningRoute,
  getTournamentsTournamentIdOrSlugBracketsRoute,
  getTournamentsTournamentIdOrSlugMatchesRoute,
  getTournamentsTournamentIdOrSlugPlayersRoute,
  getTournamentsTournamentIdOrSlugRostersRoute,
  getTournamentsTournamentIdOrSlugRoute,
  getTournamentsTournamentIdOrSlugStandingsRoute,
  getTournamentsTournamentIdOrSlugTeamsRoute,
  getTournamentsUpcomingRoute,
} from '../routes'

export const getTournamentsRouteHandler: RouteHandler<typeof getTournamentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsPastRouteHandler: RouteHandler<typeof getTournamentsPastRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTournamentsRunningRouteHandler: RouteHandler<
  typeof getTournamentsRunningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsUpcomingRouteHandler: RouteHandler<
  typeof getTournamentsUpcomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsTournamentIdOrSlugRouteHandler: RouteHandler<
  typeof getTournamentsTournamentIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsTournamentIdOrSlugBracketsRouteHandler: RouteHandler<
  typeof getTournamentsTournamentIdOrSlugBracketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsTournamentIdOrSlugMatchesRouteHandler: RouteHandler<
  typeof getTournamentsTournamentIdOrSlugMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsTournamentIdOrSlugPlayersRouteHandler: RouteHandler<
  typeof getTournamentsTournamentIdOrSlugPlayersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsTournamentIdOrSlugRostersRouteHandler: RouteHandler<
  typeof getTournamentsTournamentIdOrSlugRostersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsTournamentIdOrSlugStandingsRouteHandler: RouteHandler<
  typeof getTournamentsTournamentIdOrSlugStandingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTournamentsTournamentIdOrSlugTeamsRouteHandler: RouteHandler<
  typeof getTournamentsTournamentIdOrSlugTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
