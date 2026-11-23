import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getScrobbleShowsShowIdRoute,
  postScrobbleEpisodesRoute,
  postScrobbleShowsRoute,
  putScrobbleEpisodesEpisodeIdRoute,
} from '../routes'

export const postScrobbleEpisodesRouteHandler: RouteHandler<
  typeof postScrobbleEpisodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putScrobbleEpisodesEpisodeIdRouteHandler: RouteHandler<
  typeof putScrobbleEpisodesEpisodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScrobbleShowsRouteHandler: RouteHandler<typeof postScrobbleShowsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getScrobbleShowsShowIdRouteHandler: RouteHandler<
  typeof getScrobbleShowsShowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
