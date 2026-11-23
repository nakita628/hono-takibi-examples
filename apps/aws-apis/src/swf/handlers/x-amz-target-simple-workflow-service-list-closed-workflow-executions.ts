import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
