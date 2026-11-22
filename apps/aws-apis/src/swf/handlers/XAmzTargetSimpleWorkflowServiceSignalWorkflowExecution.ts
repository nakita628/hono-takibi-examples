import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
