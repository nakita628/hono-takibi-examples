import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetWorkflowRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetWorkflowRunHandler = app.openapi(
  postXAmzTargetAWSGlueGetWorkflowRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
