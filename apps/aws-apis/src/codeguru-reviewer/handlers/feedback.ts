import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeedbackCodeReviewArnRecommendationFeedbackRoute,
  getFeedbackCodeReviewArnRecommendationIdRoute,
  putFeedbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app
  .openapi(getFeedbackCodeReviewArnRecommendationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedbackCodeReviewArnRecommendationFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
