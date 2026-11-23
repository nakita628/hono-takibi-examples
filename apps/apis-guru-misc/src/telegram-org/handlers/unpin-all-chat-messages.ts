import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnpinAllChatMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const unpinAllChatMessagesHandler = app.openapi(postUnpinAllChatMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
