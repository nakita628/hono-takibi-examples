import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsCustomChannels202609Route,
  postConversationsCustomChannels202609Route,
  getConversationsCustomChannels202609ChannelIdRoute,
  deleteConversationsCustomChannels202609ChannelIdRoute,
  patchConversationsCustomChannels202609ChannelIdRoute,
  patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRoute,
  getConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
  postConversationsCustomChannels202609ChannelIdChannelAccountsRoute,
  getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
  patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRoute,
  postConversationsCustomChannels202609ChannelIdMessagesRoute,
  getConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
  patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRoute,
} from './routes'
import {
  getConversationsCustomChannels202609RouteHandler,
  postConversationsCustomChannels202609RouteHandler,
  getConversationsCustomChannels202609ChannelIdRouteHandler,
  deleteConversationsCustomChannels202609ChannelIdRouteHandler,
  patchConversationsCustomChannels202609ChannelIdRouteHandler,
  patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountTokenRouteHandler,
  getConversationsCustomChannels202609ChannelIdChannelAccountsRouteHandler,
  postConversationsCustomChannels202609ChannelIdChannelAccountsRouteHandler,
  getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRouteHandler,
  patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountIdRouteHandler,
  postConversationsCustomChannels202609ChannelIdMessagesRouteHandler,
  getConversationsCustomChannels202609ChannelIdMessagesMessageIdRouteHandler,
  patchConversationsCustomChannels202609ChannelIdMessagesMessageIdRouteHandler,
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
