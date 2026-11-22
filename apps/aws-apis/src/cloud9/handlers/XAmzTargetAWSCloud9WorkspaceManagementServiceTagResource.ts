import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceHandler = app.openapi(
  postXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
