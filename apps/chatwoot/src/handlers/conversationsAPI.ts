import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdRoute,
  getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatusRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTypingRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeenRoute,
  postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsAPIHandler = app
  .openapi(
    postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute,
    (c) => {
  throw new Error('Not implemented')
},
  )
  .openapi(
    getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsRoute,
    (c) => {
  throw new Error('Not implemented')
},
  )
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
