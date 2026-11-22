import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateWorkspaceImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceCreateWorkspaceImageHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateWorkspaceImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
