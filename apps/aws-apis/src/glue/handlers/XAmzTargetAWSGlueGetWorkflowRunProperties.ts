import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetWorkflowRunPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetWorkflowRunPropertiesHandler = app.openapi(
  postXAmzTargetAWSGlueGetWorkflowRunPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
