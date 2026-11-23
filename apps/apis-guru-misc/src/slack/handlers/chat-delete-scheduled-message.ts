import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatDeleteScheduledMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const chatDeleteScheduledMessageHandler = app.openapi(
  postChatDeleteScheduledMessageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
