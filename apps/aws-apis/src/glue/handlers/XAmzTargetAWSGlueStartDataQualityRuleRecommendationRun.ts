import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartDataQualityRuleRecommendationRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartDataQualityRuleRecommendationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
