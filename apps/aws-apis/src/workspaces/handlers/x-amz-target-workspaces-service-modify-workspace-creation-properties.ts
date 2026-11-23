import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
