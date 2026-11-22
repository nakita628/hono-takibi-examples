import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdRoute,
  getConversationsConversationIdRoute,
  getConversationsRoute,
  postConversationsRoute,
  putConversationsConversationIdRecordRoute,
  putConversationsConversationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationHandler = app
  .openapi(getConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
