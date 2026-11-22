import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdEventsEventIdRoute,
  getConversationsConversationIdEventsEventIdRoute,
  getConversationsConversationIdEventsRoute,
  postConversationsConversationIdEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app
  .openapi(getConversationsConversationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
