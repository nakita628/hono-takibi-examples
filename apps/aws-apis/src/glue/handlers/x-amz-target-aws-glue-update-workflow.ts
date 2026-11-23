import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateWorkflowHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
