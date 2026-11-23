import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsInviteRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsInviteHandler = app.openapi(postConversationsInviteRoute, (c) => {
  throw new Error('Not implemented')
})
