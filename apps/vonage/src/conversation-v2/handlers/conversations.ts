import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsConversationIdEventsRoute,
  getConversationsConversationIdMembersRoute,
  getConversationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
