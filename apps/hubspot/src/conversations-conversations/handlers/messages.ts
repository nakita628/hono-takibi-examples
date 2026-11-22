import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentRoute,
  getConversationsConversations202609ThreadsThreadIdMessagesMessageIdRoute,
  getConversationsConversations202609ThreadsThreadIdMessagesRoute,
  postConversationsConversations202609ThreadsThreadIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getConversationsConversations202609ThreadsThreadIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversations202609ThreadsThreadIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ThreadsThreadIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
