import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
  patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
  patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRoute,
  postConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelAccountsHandler = app
  .openapi(
    patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRoute,
    (c) => {},
  )
  .openapi(getConversationsCustomChannels202609ChannelIdChannelAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsCustomChannels202609ChannelIdChannelAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
    (c) => {},
  )
