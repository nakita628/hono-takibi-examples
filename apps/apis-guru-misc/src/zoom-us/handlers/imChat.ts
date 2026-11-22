import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImChatSessionsRoute,
  getImChatSessionsSessionIdRoute,
  getImUsersUserIdChatMessagesRoute,
  postImUsersMeChatMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imChatHandler = app
  .openapi(getImChatSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImChatSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImUsersMeChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImUsersUserIdChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
