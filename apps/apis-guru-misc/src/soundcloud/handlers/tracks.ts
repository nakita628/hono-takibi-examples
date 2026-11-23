import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTracksTrackIdRoute,
  getTracksRoute,
  getTracksTrackIdCommentsRoute,
  getTracksTrackIdFavoritersRoute,
  getTracksTrackIdRelatedRoute,
  getTracksTrackIdRepostersRoute,
  getTracksTrackIdRoute,
  getTracksTrackIdStreamsRoute,
  postTracksRoute,
  postTracksTrackIdCommentsRoute,
  putTracksTrackIdRoute,
} from '../routes'

export const getTracksRouteHandler: RouteHandler<typeof getTracksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTracksRouteHandler: RouteHandler<typeof postTracksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTracksTrackIdRouteHandler: RouteHandler<
  typeof deleteTracksTrackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTracksTrackIdRouteHandler: RouteHandler<typeof getTracksTrackIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putTracksTrackIdRouteHandler: RouteHandler<typeof putTracksTrackIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTracksTrackIdCommentsRouteHandler: RouteHandler<
  typeof getTracksTrackIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTracksTrackIdCommentsRouteHandler: RouteHandler<
  typeof postTracksTrackIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTracksTrackIdFavoritersRouteHandler: RouteHandler<
  typeof getTracksTrackIdFavoritersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTracksTrackIdRelatedRouteHandler: RouteHandler<
  typeof getTracksTrackIdRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTracksTrackIdRepostersRouteHandler: RouteHandler<
  typeof getTracksTrackIdRepostersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTracksTrackIdStreamsRouteHandler: RouteHandler<
  typeof getTracksTrackIdStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
