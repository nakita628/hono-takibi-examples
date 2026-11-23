import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
