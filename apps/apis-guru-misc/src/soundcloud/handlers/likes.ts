import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLikesPlaylistsPlaylistIdRoute,
  deleteLikesTracksTrackIdRoute,
  postLikesPlaylistsPlaylistIdRoute,
  postLikesTracksTrackIdRoute,
} from '../routes'

export const deleteLikesPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof deleteLikesPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLikesPlaylistsPlaylistIdRouteHandler: RouteHandler<
  typeof postLikesPlaylistsPlaylistIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLikesTracksTrackIdRouteHandler: RouteHandler<
  typeof deleteLikesTracksTrackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLikesTracksTrackIdRouteHandler: RouteHandler<
  typeof postLikesTracksTrackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
