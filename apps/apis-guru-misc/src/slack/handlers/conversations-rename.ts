import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsRenameRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsRenameHandler = app.openapi(postConversationsRenameRoute, (c) => {
  throw new Error('Not implemented')
})
