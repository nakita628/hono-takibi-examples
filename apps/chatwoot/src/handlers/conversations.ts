import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AccountsAccountIdConversationsConversationIdLabelsRoute,
  getApiV1AccountsAccountIdConversationsConversationIdReportingEventsRoute,
  getApiV1AccountsAccountIdConversationsConversationIdRoute,
  getApiV1AccountsAccountIdConversationsMetaRoute,
  getApiV1AccountsAccountIdConversationsRoute,
  patchApiV1AccountsAccountIdConversationsConversationIdRoute,
  postApiV1AccountsAccountIdConversationsConversationIdCustomAttributesRoute,
  postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesRoute,
  postApiV1AccountsAccountIdConversationsConversationIdLabelsRoute,
  postApiV1AccountsAccountIdConversationsConversationIdTogglePriorityRoute,
  postApiV1AccountsAccountIdConversationsConversationIdToggleStatusRoute,
  postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusRoute,
  postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenRoute,
  postApiV1AccountsAccountIdConversationsFilterRoute,
  postApiV1AccountsAccountIdConversationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getApiV1AccountsAccountIdConversationsMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdToggleStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdTogglePriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributesRoute,
    (c) => {
  throw new Error('Not implemented')
},
  )
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdConversationsConversationIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdConversationsConversationIdReportingEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
