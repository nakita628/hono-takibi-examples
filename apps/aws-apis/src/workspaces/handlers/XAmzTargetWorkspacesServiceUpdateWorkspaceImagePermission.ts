import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionHandler = app.openapi(
  postXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
