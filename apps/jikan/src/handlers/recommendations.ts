import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecommendationsAnimeRoute, getRecommendationsMangaRoute } from '../routes'

export const getRecommendationsAnimeRouteHandler: RouteHandler<
  typeof getRecommendationsAnimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecommendationsMangaRouteHandler: RouteHandler<
  typeof getRecommendationsMangaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
