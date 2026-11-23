import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
