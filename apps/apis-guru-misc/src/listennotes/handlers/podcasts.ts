import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePodcastsIdRoute,
  getPodcastsIdAudienceRoute,
  getPodcastsIdRecommendationsRoute,
  getPodcastsIdRoute,
  postPodcastsRoute,
  postPodcastsSubmitRoute,
} from '../routes'

export const postPodcastsRouteHandler: RouteHandler<typeof postPodcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPodcastsSubmitRouteHandler: RouteHandler<typeof postPodcastsSubmitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePodcastsIdRouteHandler: RouteHandler<typeof deletePodcastsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPodcastsIdRouteHandler: RouteHandler<typeof getPodcastsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPodcastsIdAudienceRouteHandler: RouteHandler<
  typeof getPodcastsIdAudienceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPodcastsIdRecommendationsRouteHandler: RouteHandler<
  typeof getPodcastsIdRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
