import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteWorkspacesWorkspaceIdRoute, getWorkspacesWorkspaceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(deleteWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
