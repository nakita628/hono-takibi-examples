import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
