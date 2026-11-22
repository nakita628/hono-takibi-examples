import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatIdRoute,
  getChatIdRoute,
  getChatRoute,
  postChatResponsesRoute,
  postChatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsHandler = app
  .openapi(getChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
