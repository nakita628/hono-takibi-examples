import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postConversationListRoute,
  postConversationsActivateRoute,
  postConversationsClearUnreadRoute,
  postConversationsDeleteRoute,
  postConversationsSetUnreadRoute,
  postConversationSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationHandler = app
  .openapi(postConversationsClearUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsSetUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
