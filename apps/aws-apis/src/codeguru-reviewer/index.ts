import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssociationsAssociationArnRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAssociationsAssociationArnRoute,
  getAssociationsRoute,
  getCodereviewsCodeReviewArnRecommendationsRoute,
  getCodereviewsCodeReviewArnRoute,
  getCodereviewsTypeRoute,
  getFeedbackCodeReviewArnRecommendationFeedbackRoute,
  getFeedbackCodeReviewArnRecommendationIdRoute,
  getTagsResourceArnRoute,
  postAssociationsRoute,
  postCodereviewsRoute,
  postTagsResourceArnRoute,
  putFeedbackRoute,
} from './routes'
import {
  deleteAssociationsAssociationArnRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAssociationsAssociationArnRouteHandler,
  getAssociationsRouteHandler,
  getCodereviewsCodeReviewArnRecommendationsRouteHandler,
  getCodereviewsCodeReviewArnRouteHandler,
  getCodereviewsTypeRouteHandler,
  getFeedbackCodeReviewArnRecommendationFeedbackRouteHandler,
  getFeedbackCodeReviewArnRecommendationIdRouteHandler,
  getTagsResourceArnRouteHandler,
  postAssociationsRouteHandler,
  postCodereviewsRouteHandler,
  postTagsResourceArnRouteHandler,
  putFeedbackRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAssociationsRoute, postAssociationsRouteHandler)
  .openapi(getAssociationsRoute, getAssociationsRouteHandler)
  .openapi(postCodereviewsRoute, postCodereviewsRouteHandler)
  .openapi(getCodereviewsCodeReviewArnRoute, getCodereviewsCodeReviewArnRouteHandler)
  .openapi(
    getFeedbackCodeReviewArnRecommendationIdRoute,
    getFeedbackCodeReviewArnRecommendationIdRouteHandler,
  )
  .openapi(getAssociationsAssociationArnRoute, getAssociationsAssociationArnRouteHandler)
  .openapi(deleteAssociationsAssociationArnRoute, deleteAssociationsAssociationArnRouteHandler)
  .openapi(getCodereviewsTypeRoute, getCodereviewsTypeRouteHandler)
  .openapi(
    getFeedbackCodeReviewArnRecommendationFeedbackRoute,
    getFeedbackCodeReviewArnRecommendationFeedbackRouteHandler,
  )
  .openapi(
    getCodereviewsCodeReviewArnRecommendationsRoute,
    getCodereviewsCodeReviewArnRecommendationsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(putFeedbackRoute, putFeedbackRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
