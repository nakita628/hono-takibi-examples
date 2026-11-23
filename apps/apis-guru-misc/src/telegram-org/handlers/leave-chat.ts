import { OpenAPIHono } from '@hono/zod-openapi'
import { postLeaveChatRoute } from '../routes'

const app = new OpenAPIHono()

export const leaveChatHandler = app.openapi(postLeaveChatRoute, (c) => {
  throw new Error('Not implemented')
})
