import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateWorkflowHandler = app.openapi(
  postXAmzTargetAWSGlueCreateWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
