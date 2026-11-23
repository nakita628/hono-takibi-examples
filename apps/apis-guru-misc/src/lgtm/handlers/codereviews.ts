import type { RouteHandler } from '@hono/zod-openapi'
import type { getCodereviewsReviewIdRoute, postCodereviewsProjectIdRoute } from '../routes'

export const postCodereviewsProjectIdRouteHandler: RouteHandler<
  typeof postCodereviewsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCodereviewsReviewIdRouteHandler: RouteHandler<
  typeof getCodereviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
