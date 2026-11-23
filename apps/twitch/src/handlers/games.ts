import type { RouteHandler } from '@hono/zod-openapi'
import type { getGamesRoute, getGamesTopRoute } from '../routes'

export const getGamesTopRouteHandler: RouteHandler<typeof getGamesTopRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGamesRouteHandler: RouteHandler<typeof getGamesRoute> = async (c) => {
  throw new Error('Not implemented')
}
