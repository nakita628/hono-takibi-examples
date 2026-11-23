import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPpaGamesRoute,
  getPpaPlayersGamesRoute,
  getPpaPlayersSeasonRoute,
  getPpaPredictedRoute,
  getPpaTeamsRoute,
} from '../routes'

export const getPpaGamesRouteHandler: RouteHandler<typeof getPpaGamesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPpaPlayersGamesRouteHandler: RouteHandler<typeof getPpaPlayersGamesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPpaPlayersSeasonRouteHandler: RouteHandler<
  typeof getPpaPlayersSeasonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPpaPredictedRouteHandler: RouteHandler<typeof getPpaPredictedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPpaTeamsRouteHandler: RouteHandler<typeof getPpaTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}
