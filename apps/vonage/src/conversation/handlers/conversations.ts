import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsConversationIdEventsEventIdRoute,
  deleteConversationsConversationIdMembersMemberIdRoute,
  deleteConversationsConversationIdRoute,
  getConversationsConversationIdEventsEventIdRoute,
  getConversationsConversationIdEventsRoute,
  getConversationsConversationIdMembersMemberIdRoute,
  getConversationsConversationIdMembersRoute,
  getConversationsConversationIdRoute,
  getConversationsRoute,
  postConversationsConversationIdEventsRoute,
  postConversationsConversationIdMembersRoute,
  postConversationsRoute,
  putConversationsConversationIdMembersMemberIdRoute,
  putConversationsConversationIdRecordRoute,
  putConversationsConversationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
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
  .openapi(getConversationsConversationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsConversationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsConversationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsConversationIdRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
