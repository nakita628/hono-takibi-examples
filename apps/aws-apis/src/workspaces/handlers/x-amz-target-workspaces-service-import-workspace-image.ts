import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceImportWorkspaceImageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceImportWorkspaceImageHandler = app.openapi(
  postXAmzTargetWorkspacesServiceImportWorkspaceImageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
