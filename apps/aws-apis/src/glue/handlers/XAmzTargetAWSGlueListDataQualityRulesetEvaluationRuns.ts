import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsHandler = app.openapi(
  postXAmzTargetAWSGlueListDataQualityRulesetEvaluationRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
