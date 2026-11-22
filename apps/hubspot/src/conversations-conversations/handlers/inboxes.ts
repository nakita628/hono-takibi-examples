import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsConversations202609InboxesInboxIdRoute,
  getConversationsConversations202609InboxesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboxesHandler = app
  .openapi(getConversationsConversations202609InboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609InboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
