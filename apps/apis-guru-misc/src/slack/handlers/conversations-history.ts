import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsHistoryHandler = app.openapi(getConversationsHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
