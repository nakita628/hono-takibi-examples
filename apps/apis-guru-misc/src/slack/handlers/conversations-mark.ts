import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsMarkRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsMarkHandler = app.openapi(postConversationsMarkRoute, (c) => {
  throw new Error('Not implemented')
})
