import { OpenAPIHono } from '@hono/zod-openapi'
import { getAgentsAgentGidRoute, getWorkspacesWorkspaceGidAgentsRoute } from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(getWorkspacesWorkspaceGidAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsAgentGidRoute, (c) => {
    throw new Error('Not implemented')
  })
