import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDataQualityRulesetEvaluationRunHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataQualityRulesetEvaluationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
