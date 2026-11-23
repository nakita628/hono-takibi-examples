import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReviewsReviewIdRoute,
  getReviewsReviewIdRoute,
  getReviewsRoute,
  patchReviewsReviewIdRoute,
  postReviewsReviewIdRoute,
  postReviewsRoute,
} from '../routes'

export const getReviewsRouteHandler: RouteHandler<typeof getReviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReviewsRouteHandler: RouteHandler<typeof postReviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReviewsReviewIdRouteHandler: RouteHandler<
  typeof deleteReviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReviewsReviewIdRouteHandler: RouteHandler<typeof getReviewsReviewIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchReviewsReviewIdRouteHandler: RouteHandler<
  typeof patchReviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReviewsReviewIdRouteHandler: RouteHandler<
  typeof postReviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
