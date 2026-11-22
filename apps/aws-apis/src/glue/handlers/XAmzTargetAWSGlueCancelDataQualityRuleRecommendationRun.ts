import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunHandler = app.openapi(
  postXAmzTargetAWSGlueCancelDataQualityRuleRecommendationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
