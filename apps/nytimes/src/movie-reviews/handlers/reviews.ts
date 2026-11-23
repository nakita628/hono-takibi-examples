import type { RouteHandler } from '@hono/zod-openapi'
import type { getReviewsResourceTypeJsonRoute, getReviewsSearchJsonRoute } from '../routes'

export const getReviewsSearchJsonRouteHandler: RouteHandler<
  typeof getReviewsSearchJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReviewsResourceTypeJsonRouteHandler: RouteHandler<
  typeof getReviewsResourceTypeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
