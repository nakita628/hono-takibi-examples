import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1AccountsAccountIdConversationsConversationIdAssignmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationAssignmentsHandler = app.openapi(
  postApiV1AccountsAccountIdConversationsConversationIdAssignmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
