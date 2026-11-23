import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsLeaveRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsLeaveHandler = app.openapi(postConversationsLeaveRoute, (c) => {
  throw new Error('Not implemented')
})
