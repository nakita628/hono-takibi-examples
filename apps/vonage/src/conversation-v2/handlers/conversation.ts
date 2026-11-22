import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationHandler = app.openapi(getConversationsRoute, (c) => {
  throw new Error('Not implemented')
})
