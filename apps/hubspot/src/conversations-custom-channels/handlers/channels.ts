import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsCustomChannels202609ChannelIdRoute,
  getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
  getConversationsCustomChannels202609ChannelIdRoute,
  patchConversationsCustomChannels202609ChannelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getConversationsCustomChannels202609ChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsCustomChannels202609ChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConversationsCustomChannels202609ChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
