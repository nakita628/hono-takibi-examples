import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminConversationsGetTeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsGetTeamsHandler = app.openapi(
  getAdminConversationsGetTeamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
