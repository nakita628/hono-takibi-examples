import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListDataQualityRuleRecommendationRunsHandler = app.openapi(
  postXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
