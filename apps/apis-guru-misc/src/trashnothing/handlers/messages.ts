import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdRoute,
  getConversationsConversationIdMessagesRoute,
  getConversationsRoute,
  getConversationsSearchRoute,
  postConversationsConversationIdReplyRoute,
  postConversationsConversationIdReportRoute,
  putConversationsArchiveAllRoute,
  putConversationsConversationIdArchiveRoute,
  putConversationsConversationIdBlockRoute,
  putConversationsConversationIdMarkReadRoute,
  putConversationsConversationIdUnarchiveRoute,
  putConversationsConversationIdUnblockRoute,
  putConversationsMarkAllReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsArchiveAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsMarkAllReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdMarkReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdUnblockRoute, (c) => {
    throw new Error('Not implemented')
  })
