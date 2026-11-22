import { OpenAPIHono } from '@hono/zod-openapi'
import { postAiAnthropicV1MessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const anthropicMessagesHandler = app.openapi(postAiAnthropicV1MessagesRoute, (c) => {
  throw new Error('Not implemented')
})
