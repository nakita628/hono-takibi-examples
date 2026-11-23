import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postConversationsActivateRoute,
  postConversationsClearUnreadRoute,
  postConversationsDeleteRoute,
  postConversationsSetUnreadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsClearUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsSetUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
