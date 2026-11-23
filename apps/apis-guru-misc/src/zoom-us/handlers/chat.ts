import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatChannelsChannelIdMembersMemberIdRoute,
  deleteChatChannelsChannelIdMembersMeRoute,
  deleteChatChannelsChannelIdRoute,
  deleteChatUsersUserIdChannelsChannelIdMembersMemberIdRoute,
  deleteChatUsersUserIdChannelsChannelIdRoute,
  deleteChatUsersUserIdMessagesMessageIdRoute,
  getChatChannelsChannelIdRoute,
  getChatUsersMeContactsContactIdRoute,
  getChatUsersMeContactsRoute,
  getChatUsersUserIdChannelsChannelIdMembersRoute,
  getChatUsersUserIdChannelsChannelIdRoute,
  getChatUsersUserIdChannelsRoute,
  getChatUsersUserIdMessagesRoute,
  patchChatChannelsChannelIdRoute,
  patchChatUsersUserIdChannelsChannelIdRoute,
  postChatChannelsChannelIdMembersMeRoute,
  postChatUsersUserIdChannelsChannelIdMembersRoute,
  postChatUsersUserIdChannelsRoute,
  postChatUsersUserIdMessagesRoute,
  putChatUsersUserIdMessagesMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(deleteChatChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatChannelsChannelIdMembersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatChannelsChannelIdMembersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatChannelsChannelIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatUsersMeContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatUsersMeContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatUsersUserIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatUsersUserIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUsersUserIdChannelsChannelIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatUsersUserIdChannelsChannelIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatUsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChatUsersUserIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
