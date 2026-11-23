import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReviewReviewIdRoute,
  getReviewReviewIdRoute,
  patchReviewReviewIdRoute,
  postReviewRoute,
} from '../routes'

export const postReviewRouteHandler: RouteHandler<typeof postReviewRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReviewReviewIdRouteHandler: RouteHandler<
  typeof deleteReviewReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReviewReviewIdRouteHandler: RouteHandler<typeof getReviewReviewIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchReviewReviewIdRouteHandler: RouteHandler<
  typeof patchReviewReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
