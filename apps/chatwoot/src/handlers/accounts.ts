import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdConversationsConversationIdMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app.openapi(
  getAccountsAccountIdConversationsConversationIdMessagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
