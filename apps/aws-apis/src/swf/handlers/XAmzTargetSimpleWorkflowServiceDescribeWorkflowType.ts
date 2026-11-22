import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
