import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetWorkflowRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetWorkflowRunsHandler = app.openapi(
  postXAmzTargetAWSGlueGetWorkflowRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
