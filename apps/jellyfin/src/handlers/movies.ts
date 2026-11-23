import type { RouteHandler } from '@hono/zod-openapi'
import type { getMoviesItemIdSimilarRoute, getMoviesRecommendationsRoute } from '../routes'

export const getMoviesItemIdSimilarRouteHandler: RouteHandler<
  typeof getMoviesItemIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMoviesRecommendationsRouteHandler: RouteHandler<
  typeof getMoviesRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
