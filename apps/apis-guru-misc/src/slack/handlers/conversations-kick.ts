import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsKickRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsKickHandler = app.openapi(postConversationsKickRoute, (c) => {
  throw new Error('Not implemented')
})
