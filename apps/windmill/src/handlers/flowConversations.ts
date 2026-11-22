import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceFlowConversationsDeleteConversationIdRoute,
  getWWorkspaceFlowConversationsConversationIdMessagesRoute,
  getWWorkspaceFlowConversationsListRoute,
  postWWorkspaceFlowConversationsUpdateConversationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowConversationsHandler = app
  .openapi(getWWorkspaceFlowConversationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowConversationsUpdateConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceFlowConversationsDeleteConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
