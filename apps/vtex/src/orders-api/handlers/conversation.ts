import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiOmsPvtOrdersOrderIdConversationMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationHandler = app.openapi(
  getApiOmsPvtOrdersOrderIdConversationMessageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
