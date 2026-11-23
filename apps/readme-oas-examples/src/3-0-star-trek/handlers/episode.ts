import type { RouteHandler } from '@hono/zod-openapi'
import type { getEpisodeRoute, getEpisodeSearchRoute, postEpisodeSearchRoute } from '../routes'

export const getEpisodeRouteHandler: RouteHandler<typeof getEpisodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodeSearchRouteHandler: RouteHandler<typeof getEpisodeSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEpisodeSearchRouteHandler: RouteHandler<typeof postEpisodeSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
