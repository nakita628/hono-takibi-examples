import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatPostMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const chatPostMessageHandler = app.openapi(postChatPostMessageRoute, (c) => {
  throw new Error('Not implemented')
})
