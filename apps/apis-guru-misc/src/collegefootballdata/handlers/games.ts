import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGamesMediaRoute,
  getGamesPlayersRoute,
  getGamesRoute,
  getGamesTeamsRoute,
  getGamesWeatherRoute,
} from '../routes'

export const getGamesRouteHandler: RouteHandler<typeof getGamesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGamesMediaRouteHandler: RouteHandler<typeof getGamesMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGamesPlayersRouteHandler: RouteHandler<typeof getGamesPlayersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGamesTeamsRouteHandler: RouteHandler<typeof getGamesTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGamesWeatherRouteHandler: RouteHandler<typeof getGamesWeatherRoute> = async (c) => {
  throw new Error('Not implemented')
}
