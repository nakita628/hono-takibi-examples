import type { RouteHandler } from '@hono/zod-openapi'
import type { getAlbumsIdRoute, getAlbumsIdTracksRoute, getAlbumsRoute } from '../routes'

export const getAlbumsRouteHandler: RouteHandler<typeof getAlbumsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlbumsIdRouteHandler: RouteHandler<typeof getAlbumsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlbumsIdTracksRouteHandler: RouteHandler<typeof getAlbumsIdTracksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
