import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductReviewListJsonRoute } from '../routes'

export const getProductReviewListJsonRouteHandler: RouteHandler<
  typeof getProductReviewListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
