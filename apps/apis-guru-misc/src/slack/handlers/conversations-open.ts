import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsOpenRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsOpenHandler = app.openapi(postConversationsOpenRoute, (c) => {
  throw new Error('Not implemented')
})
