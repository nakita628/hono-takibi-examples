import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetWorkflowHandler = app.openapi(
  postXAmzTargetAWSGlueGetWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
