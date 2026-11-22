import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsHandler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
