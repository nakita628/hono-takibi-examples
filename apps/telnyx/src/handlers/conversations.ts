import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiConversationsConversationIdConversationsInsightsInsightIdRoute,
  deleteAiConversationsConversationIdRoute,
  deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRoute,
  deleteAiConversationsInsightGroupsGroupIdRoute,
  deleteAiConversationsInsightsInsightIdRoute,
  getAiConversationsConversationIdConversationsInsightsRoute,
  getAiConversationsConversationIdMessagesRoute,
  getAiConversationsConversationIdRoute,
  getAiConversationsConversationInsightsAggregatesRoute,
  getAiConversationsInsightGroupsGroupIdRoute,
  getAiConversationsInsightGroupsRoute,
  getAiConversationsInsightsInsightIdRoute,
  getAiConversationsInsightsRoute,
  getAiConversationsRoute,
  postAiConversationsConversationIdMessageRoute,
  postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRoute,
  postAiConversationsInsightGroupsRoute,
  postAiConversationsInsightsRoute,
  postAiConversationsRoute,
  putAiConversationsConversationIdRoute,
  putAiConversationsInsightGroupsGroupIdRoute,
  putAiConversationsInsightsInsightIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getAiConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsConversationInsightsAggregatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsInsightGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiConversationsInsightGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiConversationsInsightGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsInsightGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiConversationsInsightGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiConversationsInsightGroupsGroupIdInsightsInsightIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiConversationsInsightGroupsGroupIdInsightsInsightIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiConversationsInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiConversationsInsightsInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsInsightsInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiConversationsInsightsInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsConversationIdConversationsInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiConversationsConversationIdConversationsInsightsInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiConversationsConversationIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
