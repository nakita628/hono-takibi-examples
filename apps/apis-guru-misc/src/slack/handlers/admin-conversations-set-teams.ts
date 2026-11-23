import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsSetTeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsSetTeamsHandler = app.openapi(
  postAdminConversationsSetTeamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
