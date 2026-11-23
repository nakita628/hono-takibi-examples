import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartDataQualityRuleRecommendationRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
