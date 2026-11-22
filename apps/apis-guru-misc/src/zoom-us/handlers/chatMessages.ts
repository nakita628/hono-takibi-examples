import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatUsersUserIdMessagesMessageIdRoute,
  getChatUsersUserIdMessagesRoute,
  postChatUsersUserIdMessagesRoute,
  putChatUsersUserIdMessagesMessageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatMessagesHandler = app
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
