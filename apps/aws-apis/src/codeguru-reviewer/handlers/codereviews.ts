import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCodereviewsCodeReviewArnRecommendationsRoute,
  getCodereviewsCodeReviewArnRoute,
  postCodereviewsRoute,
} from '../routes'

export const postCodereviewsRouteHandler: RouteHandler<typeof postCodereviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCodereviewsCodeReviewArnRouteHandler: RouteHandler<
  typeof getCodereviewsCodeReviewArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCodereviewsCodeReviewArnRecommendationsRouteHandler: RouteHandler<
  typeof getCodereviewsCodeReviewArnRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
