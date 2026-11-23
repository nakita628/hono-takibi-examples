import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlaylistsUidRoute,
  getPlaylistsRoute,
  getPlaylistsUidItemsRoute,
  getPlaylistsUidRoute,
  postPlaylistsRoute,
  putPlaylistsUidRoute,
} from '../routes'

export const getPlaylistsRouteHandler: RouteHandler<typeof getPlaylistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlaylistsRouteHandler: RouteHandler<typeof postPlaylistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlaylistsUidRouteHandler: RouteHandler<typeof deletePlaylistsUidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlaylistsUidRouteHandler: RouteHandler<typeof getPlaylistsUidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPlaylistsUidRouteHandler: RouteHandler<typeof putPlaylistsUidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaylistsUidItemsRouteHandler: RouteHandler<
  typeof getPlaylistsUidItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
