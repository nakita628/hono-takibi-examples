import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryHandler = app.openapi(
  postXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
