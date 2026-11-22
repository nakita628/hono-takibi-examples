import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChatsChatIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute,
  getChatsChatIdMessagesMicrosoftGraphDeltaRoute,
  getChatsMicrosoftGraphGetAllMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatsFunctionsHandler = app
  .openapi(getChatsMicrosoftGraphGetAllMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatsChatIdMessagesChatMessageIdRepliesMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
