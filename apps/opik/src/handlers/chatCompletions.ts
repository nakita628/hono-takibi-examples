import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PrivateChatCompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const chatCompletionsHandler = app.openapi(postV1PrivateChatCompletionsRoute, (c) => {
  throw new Error('Not implemented')
})
