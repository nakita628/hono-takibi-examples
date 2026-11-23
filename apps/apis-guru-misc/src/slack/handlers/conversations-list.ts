import { OpenAPIHono } from '@hono/zod-openapi'
import { getConversationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsListHandler = app.openapi(getConversationsListRoute, (c) => {
  throw new Error('Not implemented')
})
