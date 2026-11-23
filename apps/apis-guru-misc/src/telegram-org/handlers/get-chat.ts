import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetChatRoute } from '../routes'

const app = new OpenAPIHono()

export const getChatHandler = app.openapi(postGetChatRoute, (c) => {
  throw new Error('Not implemented')
})
