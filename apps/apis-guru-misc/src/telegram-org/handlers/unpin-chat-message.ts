import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnpinChatMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const unpinChatMessageHandler = app.openapi(postUnpinChatMessageRoute, (c) => {
  throw new Error('Not implemented')
})
