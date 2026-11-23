import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartDataQualityRulesetEvaluationRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartDataQualityRulesetEvaluationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
