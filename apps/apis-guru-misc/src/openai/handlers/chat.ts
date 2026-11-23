import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatCompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app.openapi(postChatCompletionsRoute, (c) => {
  throw new Error('Not implemented')
})
