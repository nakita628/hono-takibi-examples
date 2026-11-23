import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsSetTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsSetTopicHandler = app.openapi(postConversationsSetTopicRoute, (c) => {
  throw new Error('Not implemented')
})
