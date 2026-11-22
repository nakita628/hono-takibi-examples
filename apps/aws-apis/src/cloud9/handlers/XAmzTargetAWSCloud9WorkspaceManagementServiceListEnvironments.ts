import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsHandler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
