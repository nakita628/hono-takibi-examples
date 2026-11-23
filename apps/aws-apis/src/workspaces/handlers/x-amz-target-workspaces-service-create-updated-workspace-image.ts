import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
