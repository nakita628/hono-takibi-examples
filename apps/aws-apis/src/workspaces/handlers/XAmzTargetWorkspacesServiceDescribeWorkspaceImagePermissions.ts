import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
