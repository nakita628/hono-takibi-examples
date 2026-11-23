import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationListRoute, postConversationSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationHandler = app
  .openapi(postConversationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
