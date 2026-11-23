import type { RouteHandler } from '@hono/zod-openapi'
import type { getDiscordRoute, postDiscordRoute } from '../routes'

export const getDiscordRouteHandler: RouteHandler<typeof getDiscordRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDiscordRouteHandler: RouteHandler<typeof postDiscordRoute> = async (c) => {
  throw new Error('Not implemented')
}
