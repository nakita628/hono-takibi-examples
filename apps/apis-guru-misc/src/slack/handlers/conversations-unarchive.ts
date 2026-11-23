import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsUnarchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsUnarchiveHandler = app.openapi(postConversationsUnarchiveRoute, (c) => {
  throw new Error('Not implemented')
})
