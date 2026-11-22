import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceRestoreWorkspaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceRestoreWorkspaceHandler = app.openapi(
  postXAmzTargetWorkspacesServiceRestoreWorkspaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
