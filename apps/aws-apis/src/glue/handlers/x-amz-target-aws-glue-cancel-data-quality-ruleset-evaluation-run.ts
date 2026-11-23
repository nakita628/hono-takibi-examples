import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCancelDataQualityRulesetEvaluationRunHandler = app.openapi(
  postXAmzTargetAWSGlueCancelDataQualityRulesetEvaluationRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
