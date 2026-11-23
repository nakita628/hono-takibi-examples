import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListDataQualityRuleRecommendationRunsHandler = app.openapi(
  postXAmzTargetAWSGlueListDataQualityRuleRecommendationRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
