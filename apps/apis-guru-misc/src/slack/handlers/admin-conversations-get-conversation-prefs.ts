import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminConversationsGetConversationPrefsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsGetConversationPrefsHandler = app.openapi(
  getAdminConversationsGetConversationPrefsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
