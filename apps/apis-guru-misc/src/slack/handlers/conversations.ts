import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsHistoryRoute,
  getConversationsInfoRoute,
  getConversationsListRoute,
  getConversationsMembersRoute,
  getConversationsRepliesRoute,
  postConversationsArchiveRoute,
  postConversationsCloseRoute,
  postConversationsCreateRoute,
  postConversationsInviteRoute,
  postConversationsJoinRoute,
  postConversationsKickRoute,
  postConversationsLeaveRoute,
  postConversationsMarkRoute,
  postConversationsOpenRoute,
  postConversationsRenameRoute,
  postConversationsSetPurposeRoute,
  postConversationsSetTopicRoute,
  postConversationsUnarchiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsKickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsMarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsSetPurposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsSetTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
