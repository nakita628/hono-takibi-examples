import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
