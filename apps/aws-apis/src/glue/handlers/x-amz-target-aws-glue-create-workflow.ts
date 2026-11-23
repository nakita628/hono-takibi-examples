import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateWorkflowHandler = app.openapi(
  postXAmzTargetAWSGlueCreateWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
