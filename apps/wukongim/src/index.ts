import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelLastMessageRoute,
  getChannelMaxMessageSeqRoute,
  getChannelWhitelistRoute,
  getConnzRoute,
  getDocsHealthRoute,
  getDocsOpenapiJsonRoute,
  getDocsRoute,
  getHealthRoute,
  getMigrateResultRoute,
  getRouteRoute,
  getTagRoute,
  getTagsRoute,
  getUserSystemuidsRoute,
  getVarzRoute,
  getVarzSettingRoute,
  postChannelBlacklistAddRoute,
  postChannelBlacklistRemoveAllRoute,
  postChannelBlacklistRemoveRoute,
  postChannelBlacklistSetRoute,
  postChannelDeleteRoute,
  postChannelInfoRoute,
  postChannelMessagesyncRoute,
  postChannelRoute,
  postChannelSubscriberAddRoute,
  postChannelSubscriberRemoveAllRoute,
  postChannelSubscriberRemoveRoute,
  postChannelWhitelistAddRoute,
  postChannelWhitelistRemoveAllRoute,
  postChannelWhitelistRemoveRoute,
  postChannelWhitelistSetRoute,
  postConnKickRoute,
  postConnRemoveRoute,
  postConversationListRoute,
  postConversationsActivateRoute,
  postConversationsClearUnreadRoute,
  postConversationsDeleteRoute,
  postConversationsSetUnreadRoute,
  postConversationSyncRoute,
  postManagerLoginRoute,
  postMessageEventRoute,
  postMessageEventsyncRoute,
  postMessageRoute,
  postMessageSendbatchRoute,
  postMessageSendRoute,
  postMessagesRoute,
  postMessageSyncackRoute,
  postMessageSyncRoute,
  postRouteBatchRoute,
  postTagRemoveRoute,
  postTmpchannelSubscriberSetRoute,
  postUserDeviceQuitRoute,
  postUserOnlinestatusRoute,
  postUserSystemuidsAddRoute,
  postUserSystemuidsAddToCacheRoute,
  postUserSystemuidsRemoveFromCacheRoute,
  postUserSystemuidsRemoveRoute,
  postUserTokenRoute,
  postUserUpdatePluginNoRoute,
} from './routes'
import {
  getChannelLastMessageRouteHandler,
  getChannelMaxMessageSeqRouteHandler,
  getChannelWhitelistRouteHandler,
  getConnzRouteHandler,
  getDocsHealthRouteHandler,
  getDocsOpenapiJsonRouteHandler,
  getDocsRouteHandler,
  getHealthRouteHandler,
  getMigrateResultRouteHandler,
  getRouteRouteHandler,
  getTagRouteHandler,
  getTagsRouteHandler,
  getUserSystemuidsRouteHandler,
  getVarzRouteHandler,
  getVarzSettingRouteHandler,
  postChannelBlacklistAddRouteHandler,
  postChannelBlacklistRemoveAllRouteHandler,
  postChannelBlacklistRemoveRouteHandler,
  postChannelBlacklistSetRouteHandler,
  postChannelDeleteRouteHandler,
  postChannelInfoRouteHandler,
  postChannelMessagesyncRouteHandler,
  postChannelRouteHandler,
  postChannelSubscriberAddRouteHandler,
  postChannelSubscriberRemoveAllRouteHandler,
  postChannelSubscriberRemoveRouteHandler,
  postChannelWhitelistAddRouteHandler,
  postChannelWhitelistRemoveAllRouteHandler,
  postChannelWhitelistRemoveRouteHandler,
  postChannelWhitelistSetRouteHandler,
  postConnKickRouteHandler,
  postConnRemoveRouteHandler,
  postConversationListRouteHandler,
  postConversationsActivateRouteHandler,
  postConversationsClearUnreadRouteHandler,
  postConversationsDeleteRouteHandler,
  postConversationsSetUnreadRouteHandler,
  postConversationSyncRouteHandler,
  postManagerLoginRouteHandler,
  postMessageEventRouteHandler,
  postMessageEventsyncRouteHandler,
  postMessageRouteHandler,
  postMessageSendbatchRouteHandler,
  postMessageSendRouteHandler,
  postMessagesRouteHandler,
  postMessageSyncackRouteHandler,
  postMessageSyncRouteHandler,
  postRouteBatchRouteHandler,
  postTagRemoveRouteHandler,
  postTmpchannelSubscriberSetRouteHandler,
  postUserDeviceQuitRouteHandler,
  postUserOnlinestatusRouteHandler,
  postUserSystemuidsAddRouteHandler,
  postUserSystemuidsAddToCacheRouteHandler,
  postUserSystemuidsRemoveFromCacheRouteHandler,
  postUserSystemuidsRemoveRouteHandler,
  postUserTokenRouteHandler,
  postUserUpdatePluginNoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getMigrateResultRoute, getMigrateResultRouteHandler)
  .openapi(getDocsRoute, getDocsRouteHandler)
  .openapi(getDocsOpenapiJsonRoute, getDocsOpenapiJsonRouteHandler)
  .openapi(getDocsHealthRoute, getDocsHealthRouteHandler)
  .openapi(getRouteRoute, getRouteRouteHandler)
  .openapi(postRouteBatchRoute, postRouteBatchRouteHandler)
  .openapi(postUserTokenRoute, postUserTokenRouteHandler)
  .openapi(postUserDeviceQuitRoute, postUserDeviceQuitRouteHandler)
  .openapi(postUserOnlinestatusRoute, postUserOnlinestatusRouteHandler)
  .openapi(getUserSystemuidsRoute, getUserSystemuidsRouteHandler)
  .openapi(postUserSystemuidsAddRoute, postUserSystemuidsAddRouteHandler)
  .openapi(postUserSystemuidsRemoveRoute, postUserSystemuidsRemoveRouteHandler)
  .openapi(postUserSystemuidsAddToCacheRoute, postUserSystemuidsAddToCacheRouteHandler)
  .openapi(postUserSystemuidsRemoveFromCacheRoute, postUserSystemuidsRemoveFromCacheRouteHandler)
  .openapi(postUserUpdatePluginNoRoute, postUserUpdatePluginNoRouteHandler)
  .openapi(postConnRemoveRoute, postConnRemoveRouteHandler)
  .openapi(postConnKickRoute, postConnKickRouteHandler)
  .openapi(postChannelRoute, postChannelRouteHandler)
  .openapi(postChannelInfoRoute, postChannelInfoRouteHandler)
  .openapi(postChannelDeleteRoute, postChannelDeleteRouteHandler)
  .openapi(postChannelSubscriberAddRoute, postChannelSubscriberAddRouteHandler)
  .openapi(postChannelSubscriberRemoveRoute, postChannelSubscriberRemoveRouteHandler)
  .openapi(postChannelSubscriberRemoveAllRoute, postChannelSubscriberRemoveAllRouteHandler)
  .openapi(postTmpchannelSubscriberSetRoute, postTmpchannelSubscriberSetRouteHandler)
  .openapi(postMessageSendRoute, postMessageSendRouteHandler)
  .openapi(postMessageSendbatchRoute, postMessageSendbatchRouteHandler)
  .openapi(postMessageSyncRoute, postMessageSyncRouteHandler)
  .openapi(postMessageSyncackRoute, postMessageSyncackRouteHandler)
  .openapi(postMessagesRoute, postMessagesRouteHandler)
  .openapi(postMessageRoute, postMessageRouteHandler)
  .openapi(postMessageEventRoute, postMessageEventRouteHandler)
  .openapi(postMessageEventsyncRoute, postMessageEventsyncRouteHandler)
  .openapi(postChannelMessagesyncRoute, postChannelMessagesyncRouteHandler)
  .openapi(getChannelMaxMessageSeqRoute, getChannelMaxMessageSeqRouteHandler)
  .openapi(getChannelLastMessageRoute, getChannelLastMessageRouteHandler)
  .openapi(postConversationsClearUnreadRoute, postConversationsClearUnreadRouteHandler)
  .openapi(postConversationsSetUnreadRoute, postConversationsSetUnreadRouteHandler)
  .openapi(postConversationsDeleteRoute, postConversationsDeleteRouteHandler)
  .openapi(postConversationListRoute, postConversationListRouteHandler)
  .openapi(postConversationSyncRoute, postConversationSyncRouteHandler)
  .openapi(postConversationsActivateRoute, postConversationsActivateRouteHandler)
  .openapi(getConnzRoute, getConnzRouteHandler)
  .openapi(getVarzRoute, getVarzRouteHandler)
  .openapi(postChannelBlacklistAddRoute, postChannelBlacklistAddRouteHandler)
  .openapi(postChannelBlacklistSetRoute, postChannelBlacklistSetRouteHandler)
  .openapi(postChannelBlacklistRemoveRoute, postChannelBlacklistRemoveRouteHandler)
  .openapi(postChannelBlacklistRemoveAllRoute, postChannelBlacklistRemoveAllRouteHandler)
  .openapi(postChannelWhitelistAddRoute, postChannelWhitelistAddRouteHandler)
  .openapi(postChannelWhitelistSetRoute, postChannelWhitelistSetRouteHandler)
  .openapi(postChannelWhitelistRemoveRoute, postChannelWhitelistRemoveRouteHandler)
  .openapi(postChannelWhitelistRemoveAllRoute, postChannelWhitelistRemoveAllRouteHandler)
  .openapi(getChannelWhitelistRoute, getChannelWhitelistRouteHandler)
  .openapi(getTagRoute, getTagRouteHandler)
  .openapi(postTagRemoveRoute, postTagRemoveRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postManagerLoginRoute, postManagerLoginRouteHandler)
  .openapi(getVarzSettingRoute, getVarzSettingRouteHandler)

export default app
