import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsMessagesIdRoute,
  deleteConversationsPushedMessagesIdRoute,
  getConversationsMessagesIdRoute,
  getConversationsPushedMessagesIdRoute,
  postConversationsAgentOnlinePingRoute,
  postConversationsMessagesRoute,
  postConversationsPushedMessagesRoute,
  putConversationsMessagesIdRoute,
  putConversationsPushedMessagesIdRoute,
  putConversationsVisitorGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsAgentOnlinePingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsPushedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsPushedMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsPushedMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsPushedMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsVisitorGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
