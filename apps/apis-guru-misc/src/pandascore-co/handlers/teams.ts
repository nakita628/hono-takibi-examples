import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTeamsRoute,
  getTeamsTeamIdOrSlugLeaguesRoute,
  getTeamsTeamIdOrSlugMatchesRoute,
  getTeamsTeamIdOrSlugRoute,
  getTeamsTeamIdOrSlugSeriesRoute,
  getTeamsTeamIdOrSlugTournamentsRoute,
} from '../routes'

export const getTeamsRouteHandler: RouteHandler<typeof getTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOrSlugRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOrSlugLeaguesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOrSlugLeaguesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOrSlugMatchesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOrSlugMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOrSlugSeriesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOrSlugSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdOrSlugTournamentsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdOrSlugTournamentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
