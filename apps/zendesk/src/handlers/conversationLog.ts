import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2TicketsTicketIdConversationLogRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationLogHandler = app.openapi(
  getApiV2TicketsTicketIdConversationLogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
