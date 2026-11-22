import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatUsersUserIdChannelsChannelIdMembersMemberIdRoute,
  deleteChatUsersUserIdChannelsChannelIdRoute,
  getChatUsersUserIdChannelsChannelIdMembersRoute,
  getChatUsersUserIdChannelsChannelIdRoute,
  patchChatUsersUserIdChannelsChannelIdRoute,
  postChatUsersUserIdChannelsChannelIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatChannelsAccountLevelHandler = app
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
