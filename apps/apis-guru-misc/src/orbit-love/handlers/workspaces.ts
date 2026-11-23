import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkspacesRoute, getWorkspacesWorkspaceSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const workspacesHandler = app
  .openapi(getWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
