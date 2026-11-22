import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdMembersConversationMemberIdRoute,
  getChatsChatIdMembersConversationMemberIdRoute,
  getChatsChatIdMembersCountRoute,
  getChatsChatIdMembersRoute,
  patchChatsChatIdMembersConversationMemberIdRoute,
  postChatsChatIdMembersAddRoute,
  postChatsChatIdMembersRemoveRoute,
  postChatsChatIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsConversationMemberHandler = app
  .openapi(getChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdMembersConversationMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMembersAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdMembersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
