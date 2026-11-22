import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteWorkspaceImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDeleteWorkspaceImageHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteWorkspaceImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
