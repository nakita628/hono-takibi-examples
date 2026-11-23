import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecommendationsAvailableGenreSeedsRoute, getRecommendationsRoute } from '../routes'

export const getRecommendationsRouteHandler: RouteHandler<typeof getRecommendationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRecommendationsAvailableGenreSeedsRouteHandler: RouteHandler<
  typeof getRecommendationsAvailableGenreSeedsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
