import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteWorkflowHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
