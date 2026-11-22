import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSimpleWorkflowServiceDescribeActivityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSimpleWorkflowServiceDescribeActivityTypeHandler = app.openapi(
  postXAmzTargetSimpleWorkflowServiceDescribeActivityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
