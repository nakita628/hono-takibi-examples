import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatMeMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const chatMeMessageHandler = app.openapi(postChatMeMessageRoute, (c) => {
  throw new Error('Not implemented')
})
