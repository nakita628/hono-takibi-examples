import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCopyWorkspaceImageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceCopyWorkspaceImageHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCopyWorkspaceImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
