import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsConversations202609ChannelsChannelIdRoute,
  getConversationsConversations202609ChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getConversationsConversations202609ChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsConversations202609ChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
