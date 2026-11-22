import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
