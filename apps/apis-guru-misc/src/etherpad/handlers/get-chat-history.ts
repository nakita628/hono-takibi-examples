import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetChatHistoryRoute, postGetChatHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const getChatHistoryHandler = app
  .openapi(getGetChatHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetChatHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
