import { OpenAPIHono } from '@hono/zod-openapi'
import { getAiConversationHistoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationHistoriesHandler = app.openapi(getAiConversationHistoriesRoute, (c) => {
  throw new Error('Not implemented')
})
