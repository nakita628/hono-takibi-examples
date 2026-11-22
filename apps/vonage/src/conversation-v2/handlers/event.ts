import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsConversationIdEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app.openapi(getConversationsConversationIdEventsRoute, (c) => {
  throw new Error('Not implemented')
})
