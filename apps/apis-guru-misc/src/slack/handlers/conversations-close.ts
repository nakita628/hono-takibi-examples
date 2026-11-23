import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsCloseRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsCloseHandler = app.openapi(postConversationsCloseRoute, (c) => {
  throw new Error('Not implemented')
})
