import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceMigrateWorkspaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceMigrateWorkspaceHandler = app.openapi(
  postXAmzTargetWorkspacesServiceMigrateWorkspaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
