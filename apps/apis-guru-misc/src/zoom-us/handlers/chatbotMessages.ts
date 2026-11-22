import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteImChatMessagesMessageIdRoute,
  postImChatMessagesRoute,
  putImChatMessagesMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatbotMessagesHandler = app
  .openapi(postImChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteImChatMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putImChatMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
