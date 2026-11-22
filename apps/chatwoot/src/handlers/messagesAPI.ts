import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute,
  patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesAPIHandler = app
  .openapi(
    postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
