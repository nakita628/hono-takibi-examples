import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsSetConversationPrefsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsSetConversationPrefsHandler = app.openapi(
  postAdminConversationsSetConversationPrefsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
