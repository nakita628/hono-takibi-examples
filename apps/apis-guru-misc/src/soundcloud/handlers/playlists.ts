import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdRepostersRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  getPlaylistsRoute,
  postPlaylistsRoute,
  putPlaylistsPlaylistIdRoute,
} from '../routes'

export const getPlaylistsRouteHandler: RouteHandler<typeof getPlaylistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlaylistsRouteHandler: RouteHandler<typeof postPlaylistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof deletePlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof getPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof putPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaylistsPlaylistIdRepostersRouteHandler: RouteHandler<
  typeof getPlaylistsPlaylistIdRepostersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlaylistsPlaylistIdTracksRouteHandler: RouteHandler<
  typeof getPlaylistsPlaylistIdTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
