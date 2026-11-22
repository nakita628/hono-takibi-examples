import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartMLEvaluationTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartMLEvaluationTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartMLEvaluationTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
