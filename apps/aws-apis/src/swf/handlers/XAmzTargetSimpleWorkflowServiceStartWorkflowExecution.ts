import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceStartWorkflowExecutionHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
