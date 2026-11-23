import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDataQualityRuleRecommendationRunHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataQualityRuleRecommendationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
