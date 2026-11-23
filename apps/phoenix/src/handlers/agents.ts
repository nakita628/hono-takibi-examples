import { OpenAPIHono } from '@hono/zod-openapi'
import { postAgentsServerSessionsSessionIdChatRoute } from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app.openapi(postAgentsServerSessionsSessionIdChatRoute, (c) => {
  throw new Error('Not implemented')
})
