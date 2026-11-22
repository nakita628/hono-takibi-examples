import { OpenAPIHono } from '@hono/zod-openapi'
import { postPinChatMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const pinChatMessageHandler = app.openapi(postPinChatMessageRoute, (c) => {
  throw new Error('Not implemented')
})
