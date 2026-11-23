import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
