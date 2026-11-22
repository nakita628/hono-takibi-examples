import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsAccountIdConversationsConversationIdRoute,
  getV1AccountsAccountIdConversationsRoute,
  putV1AccountsAccountIdConversationsConversationIdCloseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getV1AccountsAccountIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdConversationsConversationIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
