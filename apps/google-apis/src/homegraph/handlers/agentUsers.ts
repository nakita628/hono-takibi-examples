import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1AgentUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const agentUsersHandler = app.openapi(deleteV1AgentUserIdRoute, (c) => {
  throw new Error('Not implemented')
})
