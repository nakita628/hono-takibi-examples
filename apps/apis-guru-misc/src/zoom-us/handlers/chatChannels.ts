import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatChannelsChannelIdMembersMemberIdRoute,
  deleteChatChannelsChannelIdMembersMeRoute,
  deleteChatChannelsChannelIdRoute,
  getChatChannelsChannelIdRoute,
  getChatUsersUserIdChannelsRoute,
  patchChatChannelsChannelIdRoute,
  postChatChannelsChannelIdMembersMeRoute,
  postChatUsersUserIdChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatChannelsHandler = app
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
  .openapi(getChatUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
