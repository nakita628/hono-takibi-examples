import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsCreateHandler = app.openapi(postConversationsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
