import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlaylistsPlaylistIdItemsRoute,
  getPlaylistsIdInstantMixRoute,
  getPlaylistsPlaylistIdItemsRoute,
  postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsRoute,
} from '../routes'

export const postPlaylistsRouteHandler: RouteHandler<typeof postPlaylistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaylistsIdInstantMixRouteHandler: RouteHandler<
  typeof getPlaylistsIdInstantMixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlaylistsPlaylistIdItemsRouteHandler: RouteHandler<
  typeof deletePlaylistsPlaylistIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaylistsPlaylistIdItemsRouteHandler: RouteHandler<
  typeof getPlaylistsPlaylistIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlaylistsPlaylistIdItemsRouteHandler: RouteHandler<
  typeof postPlaylistsPlaylistIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRouteHandler: RouteHandler<
  typeof postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
