import type { RouteHandler } from '@hono/zod-openapi'
import type { getCuratedPodcastsIdRoute, getCuratedPodcastsRoute } from '../routes'

export const getCuratedPodcastsRouteHandler: RouteHandler<typeof getCuratedPodcastsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCuratedPodcastsIdRouteHandler: RouteHandler<
  typeof getCuratedPodcastsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
