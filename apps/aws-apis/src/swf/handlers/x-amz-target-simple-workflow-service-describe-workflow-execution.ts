import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
