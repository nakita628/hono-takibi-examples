import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsArchiveHandler = app.openapi(postConversationsArchiveRoute, (c) => {
  throw new Error('Not implemented')
})
