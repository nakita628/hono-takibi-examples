import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteReviewsRoute, getReviewsRoute, postReviewsRoute } from '../routes'

export const deleteReviewsRouteHandler: RouteHandler<typeof deleteReviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReviewsRouteHandler: RouteHandler<typeof getReviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReviewsRouteHandler: RouteHandler<typeof postReviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}
