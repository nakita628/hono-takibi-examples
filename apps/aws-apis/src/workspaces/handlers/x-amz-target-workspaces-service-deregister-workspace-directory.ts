import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
