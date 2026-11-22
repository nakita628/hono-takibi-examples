import { OpenAPIHono } from '@hono/zod-openapi'
import { getMcpWWorkspaceListToolsRoute } from '../routes'

const app = new OpenAPIHono()

export const mcpHandler = app.openapi(getMcpWWorkspaceListToolsRoute, (c) => {
  throw new Error('Not implemented')
})
