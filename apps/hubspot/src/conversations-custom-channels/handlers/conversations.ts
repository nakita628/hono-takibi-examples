import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsCustomChannels202609ChannelIdRoute,
  getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
  getConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
  getConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
  getConversationsCustomChannels202609ChannelIdRoute,
  getConversationsCustomChannels202609Route,
  patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
  patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRoute,
  patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
  patchConversationsCustomChannels202609ChannelIdRoute,
  postConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
  postConversationsCustomChannels202609ChannelIdMessagesRoute,
  postConversationsCustomChannels202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getConversationsCustomChannels202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCustomChannels202609Route, (c) => {
    throw new Error('Not implemented')
  })
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
    patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getConversationsCustomChannels202609ChannelIdChannelAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCustomChannels202609ChannelIdChannelAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postConversationsCustomChannels202609ChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
