import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsJoinRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsJoinHandler = app.openapi(postConversationsJoinRoute, (c) => {
  throw new Error('Not implemented')
})
