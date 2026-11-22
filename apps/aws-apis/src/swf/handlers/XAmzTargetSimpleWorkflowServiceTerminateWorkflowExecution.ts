import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
