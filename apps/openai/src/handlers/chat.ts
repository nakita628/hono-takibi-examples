import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatCompletionsCompletionIdRoute,
  getChatCompletionsCompletionIdMessagesRoute,
  getChatCompletionsCompletionIdRoute,
  getChatCompletionsRoute,
  postChatCompletionsCompletionIdRoute,
  postChatCompletionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(getChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatCompletionsCompletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatCompletionsCompletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatCompletionsCompletionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatCompletionsCompletionIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
