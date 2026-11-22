import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyWorkspaceStateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceModifyWorkspaceStateHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyWorkspaceStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
