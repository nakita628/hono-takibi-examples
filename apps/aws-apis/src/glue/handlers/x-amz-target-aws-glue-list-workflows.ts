import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListWorkflowsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListWorkflowsHandler = app.openapi(
  postXAmzTargetAWSGlueListWorkflowsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
