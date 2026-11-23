import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceModifyWorkspaceStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceModifyWorkspaceStateHandler = app.openapi(
  postXAmzTargetWorkspacesServiceModifyWorkspaceStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
