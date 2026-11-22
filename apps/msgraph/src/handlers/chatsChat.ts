import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdRoute,
  getChatsChatIdRoute,
  getChatsCountRoute,
  getChatsRoute,
  patchChatsChatIdRoute,
  postChatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsChatHandler = app
  .openapi(getChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
