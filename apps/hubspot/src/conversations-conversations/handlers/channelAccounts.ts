import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsConversations202609ChannelAccountsChannelAccountIdRoute,
  getConversationsConversations202609ChannelAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelAccountsHandler = app
  .openapi(getConversationsConversations202609ChannelAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ChannelAccountsChannelAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
