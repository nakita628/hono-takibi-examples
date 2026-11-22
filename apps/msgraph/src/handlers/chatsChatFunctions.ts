import { OpenAPIHono } from '@hono/zod-openapi'
import { getChatsGetAllMessagesRoute, getChatsGetAllRetainedMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const chatsChatFunctionsHandler = app
  .openapi(getChatsGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsGetAllRetainedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
