import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute,
  getApiV1AccountsAccountIdConversationsConversationIdMessagesRoute,
  patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute,
  postApiV1AccountsAccountIdConversationsConversationIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
