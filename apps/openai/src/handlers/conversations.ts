import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdItemsItemIdRoute,
  deleteConversationsConversationIdRoute,
  getConversationsConversationIdItemsItemIdRoute,
  getConversationsConversationIdItemsRoute,
  getConversationsConversationIdRoute,
  postConversationsConversationIdItemsRoute,
  postConversationsConversationIdRoute,
  postConversationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsConversationIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
