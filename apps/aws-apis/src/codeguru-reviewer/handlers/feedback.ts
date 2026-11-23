import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFeedbackCodeReviewArnRecommendationFeedbackRoute,
  getFeedbackCodeReviewArnRecommendationIdRoute,
  putFeedbackRoute,
} from '../routes'

export const getFeedbackCodeReviewArnRecommendationIdRouteHandler: RouteHandler<
  typeof getFeedbackCodeReviewArnRecommendationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedbackCodeReviewArnRecommendationFeedbackRouteHandler: RouteHandler<
  typeof getFeedbackCodeReviewArnRecommendationFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeedbackRouteHandler: RouteHandler<typeof putFeedbackRoute> = async (c) => {
  throw new Error('Not implemented')
}
