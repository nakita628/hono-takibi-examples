import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartWorkflowRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartWorkflowRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartWorkflowRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
