import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEpisodesIdRecommendationsRoute,
  getEpisodesIdRoute,
  postEpisodesRoute,
} from '../routes'

export const postEpisodesRouteHandler: RouteHandler<typeof postEpisodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesIdRouteHandler: RouteHandler<typeof getEpisodesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesIdRecommendationsRouteHandler: RouteHandler<
  typeof getEpisodesIdRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
