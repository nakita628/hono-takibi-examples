import type { RouteHandler } from '@hono/zod-openapi'
import type { getReviewsIdIndexRoute, getReviewsIndexRoute, postReviewsIndexRoute } from '../routes'

export const getReviewsIndexRouteHandler: RouteHandler<typeof getReviewsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReviewsIndexRouteHandler: RouteHandler<typeof postReviewsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReviewsIdIndexRouteHandler: RouteHandler<typeof getReviewsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
