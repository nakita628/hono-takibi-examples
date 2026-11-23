import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsMembersRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsMembersHandler = app.openapi(getConversationsMembersRoute, (c) => {
  throw new Error('Not implemented')
})
