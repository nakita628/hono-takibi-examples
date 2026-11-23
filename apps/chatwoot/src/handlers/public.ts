import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute,
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdRoute,
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute,
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute,
  getPublicApiV1InboxesInboxIdentifierRoute,
  patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageIdRoute,
  patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute,
  postPublicApiV1InboxesInboxIdentifierContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getPublicApiV1InboxesInboxIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicApiV1InboxesInboxIdentifierContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
