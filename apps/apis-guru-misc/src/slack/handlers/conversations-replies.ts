import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsRepliesRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsRepliesHandler = app.openapi(getConversationsRepliesRoute, (c) => {
  throw new Error('Not implemented')
})
