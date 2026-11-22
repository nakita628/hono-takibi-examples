import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceCountPendingActivityTasksHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
