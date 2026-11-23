import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetWorkflowHandler = app.openapi(
  postXAmzTargetAWSGlueGetWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
