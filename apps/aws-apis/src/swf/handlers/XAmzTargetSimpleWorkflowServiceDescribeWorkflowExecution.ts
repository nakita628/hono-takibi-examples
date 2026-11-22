import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
