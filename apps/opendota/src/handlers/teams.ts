import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTeamsRoute,
  getTeamsTeamIdRoute,
  getTeamsTeamIdMatchesRoute,
  getTeamsTeamIdPlayersRoute,
  getTeamsTeamIdHeroesRoute,
} from '../routes'

export const getTeamsRouteHandler: RouteHandler<typeof getTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdRouteHandler: RouteHandler<typeof getTeamsTeamIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdMatchesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdPlayersRouteHandler: RouteHandler<
  typeof getTeamsTeamIdPlayersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdHeroesRouteHandler: RouteHandler<
  typeof getTeamsTeamIdHeroesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
