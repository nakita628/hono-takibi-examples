import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRepostsPlaylistsPlaylistIdRoute,
  deleteRepostsTracksTrackIdRoute,
  postRepostsPlaylistsPlaylistIdRoute,
  postRepostsTracksTrackIdRoute,
} from '../routes'

export const deleteRepostsPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof deleteRepostsPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepostsPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof postRepostsPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepostsTracksTrackIdRouteHandler: RouteHandler<
  typeof deleteRepostsTracksTrackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepostsTracksTrackIdRouteHandler: RouteHandler<
  typeof postRepostsTracksTrackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
