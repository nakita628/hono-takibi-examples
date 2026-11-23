import { OpenAPIHono } from '@hono/zod-openapi'
import { getChatToolsRoute, postChatCompletionRoute, postChatExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(getChatToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatCompletionRoute, (c) => {
    throw new Error('Not implemented')
  })
