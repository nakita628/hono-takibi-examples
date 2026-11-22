import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyWorkspacePropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceModifyWorkspacePropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyWorkspacePropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
