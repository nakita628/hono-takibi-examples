import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsInviteRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsInviteHandler = app.openapi(
  postAdminConversationsInviteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
