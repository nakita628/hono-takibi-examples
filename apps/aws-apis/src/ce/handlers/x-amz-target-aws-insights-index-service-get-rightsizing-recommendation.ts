import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetRightsizingRecommendationHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetRightsizingRecommendationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
