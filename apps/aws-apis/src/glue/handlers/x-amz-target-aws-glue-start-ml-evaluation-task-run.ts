import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartMLEvaluationTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartMlEvaluationTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartMLEvaluationTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
