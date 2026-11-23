import type { RouteHandler } from '@hono/zod-openapi'
import type { postReviewsDeleteRoute, postReviewsViewedRoute } from '../routes'

export const postReviewsViewedRouteHandler: RouteHandler<typeof postReviewsViewedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postReviewsDeleteRouteHandler: RouteHandler<typeof postReviewsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
