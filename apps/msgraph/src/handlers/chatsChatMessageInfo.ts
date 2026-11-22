import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatsChatIdLastMessagePreviewRoute,
  getChatsChatIdLastMessagePreviewRoute,
  patchChatsChatIdLastMessagePreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsChatMessageInfoHandler = app
  .openapi(getChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatsChatIdLastMessagePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
