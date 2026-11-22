import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
