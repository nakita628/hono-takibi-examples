import { OpenAPIHono } from '@hono/zod-openapi'
import { getChatScheduledMessagesListRoute } from '../routes'

const app = new OpenAPIHono()

export const chatScheduledMessagesListHandler = app.openapi(
  getChatScheduledMessagesListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
