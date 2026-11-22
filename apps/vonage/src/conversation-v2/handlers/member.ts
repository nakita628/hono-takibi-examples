import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsConversationIdMembersRoute } from '../routes'

const app = new OpenAPIHono()

export const memberHandler = app.openapi(getConversationsConversationIdMembersRoute, (c) => {
  throw new Error('Not implemented')
})
