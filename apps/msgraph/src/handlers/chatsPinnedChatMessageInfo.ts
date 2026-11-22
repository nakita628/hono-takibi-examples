import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  getChatsChatIdPinnedMessagesCountRoute,
  getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute,
  getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  getChatsChatIdPinnedMessagesRoute,
  patchChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute,
  postChatsChatIdPinnedMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsPinnedChatMessageInfoHandler = app
  .openapi(getChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsChatIdPinnedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdPinnedMessagesPinnedChatMessageInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdPinnedMessagesPinnedChatMessageInfoIdMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdPinnedMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
