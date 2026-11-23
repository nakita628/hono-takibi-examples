import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlaylistsIdRoute, getPlaylistsRoute } from '../routes'

export const getPlaylistsRouteHandler: RouteHandler<typeof getPlaylistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaylistsIdRouteHandler: RouteHandler<typeof getPlaylistsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
