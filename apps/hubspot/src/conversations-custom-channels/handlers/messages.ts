import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
  patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
  postConversationsCustomChannels202609ChannelIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postConversationsCustomChannels202609ChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
