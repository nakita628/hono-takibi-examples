import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AgentsFamilyRoute } from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app.openapi(getApiV1AgentsFamilyRoute, (c) => {
  throw new Error('Not implemented')
})
