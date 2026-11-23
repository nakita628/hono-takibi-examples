import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
