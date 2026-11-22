import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateWorkflowRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateWorkflowHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateWorkflowRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
