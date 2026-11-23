import type { RouteHandler } from '@hono/zod-openapi'
import type { getReviewsAnimeRoute, getReviewsMangaRoute } from '../routes'

export const getReviewsAnimeRouteHandler: RouteHandler<typeof getReviewsAnimeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReviewsMangaRouteHandler: RouteHandler<typeof getReviewsMangaRoute> = async (c) => {
  throw new Error('Not implemented')
}
