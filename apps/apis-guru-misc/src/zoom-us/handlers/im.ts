import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImChatMessagesMessageIdRoute,
  deleteImGroupsGroupIdMembersMemberIdRoute,
  deleteImGroupsGroupIdRoute,
  getImChatSessionsRoute,
  getImChatSessionsSessionIdRoute,
  getImGroupsGroupIdMembersRoute,
  getImGroupsGroupIdRoute,
  getImGroupsRoute,
  getImUsersUserIdChatMessagesRoute,
  patchImGroupsGroupIdRoute,
  postImChatMessagesRoute,
  postImGroupsGroupIdMembersRoute,
  postImGroupsRoute,
  postImUsersMeChatMessagesRoute,
  putImChatMessagesMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imHandler = app
  .openapi(postImChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImChatMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImChatMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImChatSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImChatSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchImGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImGroupsGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImUsersMeChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImUsersUserIdChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
