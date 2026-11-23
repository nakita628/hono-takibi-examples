import { OpenAPIHono } from '@hono/zod-openapi'
import { getAgentsAgentGidRoute } from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app.openapi(getAgentsAgentGidRoute, (c) => {
  throw new Error('Not implemented')
})
