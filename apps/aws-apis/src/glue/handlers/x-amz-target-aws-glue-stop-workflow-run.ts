import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStopWorkflowRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStopWorkflowRunHandler = app.openapi(
  postXAmzTargetAWSGlueStopWorkflowRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
