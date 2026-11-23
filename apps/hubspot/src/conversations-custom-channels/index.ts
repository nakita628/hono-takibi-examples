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
} from './routes'
import {
  deleteConversationsCustomChannels202609ChannelIdRouteHandler,
  getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRouteHandler,
  getConversationsCustomChannels202609ChannelIdChannelAccountsRouteHandler,
  getConversationsCustomChannels202609ChannelIdMessagesMessageIdRouteHandler,
  getConversationsCustomChannels202609ChannelIdRouteHandler,
  getConversationsCustomChannels202609RouteHandler,
  patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRouteHandler,
  patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRouteHandler,
  patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRouteHandler,
  patchConversationsCustomChannels202609ChannelIdRouteHandler,
  postConversationsCustomChannels202609ChannelIdChannelAccountsRouteHandler,
  postConversationsCustomChannels202609ChannelIdMessagesRouteHandler,
  postConversationsCustomChannels202609RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getConversationsCustomChannels202609Route,
    getConversationsCustomChannels202609RouteHandler,
  )
  .openapi(
    postConversationsCustomChannels202609Route,
    postConversationsCustomChannels202609RouteHandler,
  )
  .openapi(
    getConversationsCustomChannels202609ChannelIdRoute,
    getConversationsCustomChannels202609ChannelIdRouteHandler,
  )
  .openapi(
    deleteConversationsCustomChannels202609ChannelIdRoute,
    deleteConversationsCustomChannels202609ChannelIdRouteHandler,
  )
  .openapi(
    patchConversationsCustomChannels202609ChannelIdRoute,
    patchConversationsCustomChannels202609ChannelIdRouteHandler,
  )
  .openapi(
    patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRoute,
    patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRouteHandler,
  )
  .openapi(
    getConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
    getConversationsCustomChannels202609ChannelIdChannelAccountsRouteHandler,
  )
  .openapi(
    postConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
    postConversationsCustomChannels202609ChannelIdChannelAccountsRouteHandler,
  )
  .openapi(
    getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
    getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRouteHandler,
  )
  .openapi(
    patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
    patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRouteHandler,
  )
  .openapi(
    postConversationsCustomChannels202609ChannelIdMessagesRoute,
    postConversationsCustomChannels202609ChannelIdMessagesRouteHandler,
  )
  .openapi(
    getConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
    getConversationsCustomChannels202609ChannelIdMessagesMessageIdRouteHandler,
  )
  .openapi(
    patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
    patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRouteHandler,
  )

export default app
