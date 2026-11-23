import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLeaguesLeagueIdMatchesRoute,
  getLeaguesLeagueIdMatchIdsRoute,
  getLeaguesLeagueIdRoute,
  getLeaguesLeagueIdTeamsRoute,
  getLeaguesRoute,
} from '../routes'

export const getLeaguesRouteHandler: RouteHandler<typeof getLeaguesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdRouteHandler: RouteHandler<typeof getLeaguesLeagueIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdMatchesRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdMatchIdsRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdMatchIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaguesLeagueIdTeamsRouteHandler: RouteHandler<
  typeof getLeaguesLeagueIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
