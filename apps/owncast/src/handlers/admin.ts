import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdminConfigFaviconRoute,
  deleteAdminFederationServersIdRoute,
  getAdminAccesstokensRoute,
  getAdminChatClientsRoute,
  getAdminChatMessagesRoute,
  getAdminChatUsersDisabledRoute,
  getAdminChatUsersIpbansRoute,
  getAdminChatUsersModeratorsRoute,
  getAdminFederationActionsRoute,
  getAdminFederationFeatureRequestsRoute,
  getAdminFederationServersRoute,
  getAdminFollowersBlockedRoute,
  getAdminFollowersDirectoryRoute,
  getAdminFollowersPendingRoute,
  getAdminFollowersRoute,
  getAdminHardwarestatsRoute,
  getAdminLogsRoute,
  getAdminLogsWarningsRoute,
  getAdminMetricsVideoRoute,
  getAdminServerconfigRoute,
  getAdminStatusRoute,
  getAdminUsersRoute,
  getAdminViewersOverTimeRoute,
  getAdminViewersPlaybackRoute,
  getAdminViewersRoute,
  getAdminWebhooksRoute,
  optionsAdminAccesstokensCreateRoute,
  optionsAdminAccesstokensDeleteRoute,
  optionsAdminAccesstokensRoute,
  optionsAdminChatClientsRoute,
  optionsAdminChatMessagesRoute,
  optionsAdminChatMessagevisibilityRoute,
  optionsAdminChatUsersDisabledRoute,
  optionsAdminChatUsersIpbansCreateRoute,
  optionsAdminChatUsersIpbansRemoveRoute,
  optionsAdminChatUsersIpbansRoute,
  optionsAdminChatUsersModeratorsRoute,
  optionsAdminChatUsersSetenabledRoute,
  optionsAdminChatUsersSetmoderatorRoute,
  optionsAdminConfigAdminpassRoute,
  optionsAdminConfigAppearanceRoute,
  optionsAdminConfigAutoplayRoute,
  optionsAdminConfigChatDisableRoute,
  optionsAdminConfigChatEstablishedusermodeRoute,
  optionsAdminConfigChatForbiddenusernamesRoute,
  optionsAdminConfigChatJoinmessagesenabledRoute,
  optionsAdminConfigChatRequireauthenticationRoute,
  optionsAdminConfigChatSlurfilterenabledRoute,
  optionsAdminConfigChatSpamprotectionenabledRoute,
  optionsAdminConfigChatSuggestedusernamesRoute,
  optionsAdminConfigCustomjavascriptRoute,
  optionsAdminConfigCustomstylesRoute,
  optionsAdminConfigDirectoryenabledRoute,
  optionsAdminConfigDisablesearchindexingRoute,
  optionsAdminConfigExternalactionsRoute,
  optionsAdminConfigFaviconRoute,
  optionsAdminConfigFederationBlockdomainsRoute,
  optionsAdminConfigFederationEnablequotesRoute,
  optionsAdminConfigFederationEnableRoute,
  optionsAdminConfigFederationHidefollowersRoute,
  optionsAdminConfigFederationLivemessageRoute,
  optionsAdminConfigFederationPrivateRoute,
  optionsAdminConfigFederationShowengagementRoute,
  optionsAdminConfigFederationUsernameRoute,
  optionsAdminConfigFfmpegpathRoute,
  optionsAdminConfigHideviewercountRoute,
  optionsAdminConfigLogoRoute,
  optionsAdminConfigNameRoute,
  optionsAdminConfigNotificationsBrowserRoute,
  optionsAdminConfigNotificationsDiscordRoute,
  optionsAdminConfigNsfwRoute,
  optionsAdminConfigOfflinemessageRoute,
  optionsAdminConfigPagecontentRoute,
  optionsAdminConfigRtmpserverbindaddressRoute,
  optionsAdminConfigRtmpserverportRoute,
  optionsAdminConfigS3Route,
  optionsAdminConfigServersummaryRoute,
  optionsAdminConfigServerurlRoute,
  optionsAdminConfigSocialhandlesRoute,
  optionsAdminConfigSockethostoverrideRoute,
  optionsAdminConfigStreamkeysRoute,
  optionsAdminConfigStreamtitleRoute,
  optionsAdminConfigTagsRoute,
  optionsAdminConfigVideoCodecRoute,
  optionsAdminConfigVideoservingendpointRoute,
  optionsAdminConfigVideoStreamlatencylevelRoute,
  optionsAdminConfigVideoStreamoutputvariantsRoute,
  optionsAdminConfigWebserveripRoute,
  optionsAdminConfigWebserverportRoute,
  optionsAdminConfigWelcomemessageRoute,
  optionsAdminDisconnectRoute,
  optionsAdminEmojiDeleteRoute,
  optionsAdminEmojiUploadRoute,
  optionsAdminFederationActionsRoute,
  optionsAdminFederationSendRoute,
  optionsAdminFederationServersIdReorderRoute,
  optionsAdminFederationServersIdRoute,
  optionsAdminFederationServersRoute,
  optionsAdminFollowersApproveRoute,
  optionsAdminFollowersBlockedRoute,
  optionsAdminFollowersDirectoryRoute,
  optionsAdminFollowersPendingRoute,
  optionsAdminFollowersRemoveRoute,
  optionsAdminFollowersRoute,
  optionsAdminHardwarestatsRoute,
  optionsAdminLogsRoute,
  optionsAdminLogsWarningsRoute,
  optionsAdminMetricsVideoRoute,
  optionsAdminServerconfigRoute,
  optionsAdminStatusRoute,
  optionsAdminUsersDeleteRoute,
  optionsAdminUsersRoute,
  optionsAdminViewersOverTimeRoute,
  optionsAdminViewersPlaybackRoute,
  optionsAdminViewersRoute,
  optionsAdminWebhooksCreateRoute,
  optionsAdminWebhooksDeleteRoute,
  optionsAdminWebhooksRoute,
  optionsAdminYpResetRoute,
  postAdminAccesstokensCreateRoute,
  postAdminAccesstokensDeleteRoute,
  postAdminChatMessagevisibilityRoute,
  postAdminChatUsersIpbansCreateRoute,
  postAdminChatUsersIpbansRemoveRoute,
  postAdminChatUsersSetenabledRoute,
  postAdminChatUsersSetmoderatorRoute,
  postAdminConfigAdminpassRoute,
  postAdminConfigAppearanceRoute,
  postAdminConfigAutoplayRoute,
  postAdminConfigChatDisableRoute,
  postAdminConfigChatEstablishedusermodeRoute,
  postAdminConfigChatForbiddenusernamesRoute,
  postAdminConfigChatJoinmessagesenabledRoute,
  postAdminConfigChatRequireauthenticationRoute,
  postAdminConfigChatSlurfilterenabledRoute,
  postAdminConfigChatSpamprotectionenabledRoute,
  postAdminConfigChatSuggestedusernamesRoute,
  postAdminConfigCustomjavascriptRoute,
  postAdminConfigCustomstylesRoute,
  postAdminConfigDirectoryenabledRoute,
  postAdminConfigDisablesearchindexingRoute,
  postAdminConfigExternalactionsRoute,
  postAdminConfigFaviconRoute,
  postAdminConfigFederationBlockdomainsRoute,
  postAdminConfigFederationEnablequotesRoute,
  postAdminConfigFederationEnableRoute,
  postAdminConfigFederationHidefollowersRoute,
  postAdminConfigFederationLivemessageRoute,
  postAdminConfigFederationPrivateRoute,
  postAdminConfigFederationShowengagementRoute,
  postAdminConfigFederationUsernameRoute,
  postAdminConfigFfmpegpathRoute,
  postAdminConfigHideviewercountRoute,
  postAdminConfigLogoRoute,
  postAdminConfigNameRoute,
  postAdminConfigNotificationsBrowserRoute,
  postAdminConfigNotificationsDiscordRoute,
  postAdminConfigNsfwRoute,
  postAdminConfigOfflinemessageRoute,
  postAdminConfigPagecontentRoute,
  postAdminConfigRtmpserverbindaddressRoute,
  postAdminConfigRtmpserverportRoute,
  postAdminConfigS3Route,
  postAdminConfigServersummaryRoute,
  postAdminConfigServerurlRoute,
  postAdminConfigSocialhandlesRoute,
  postAdminConfigSockethostoverrideRoute,
  postAdminConfigStreamkeysRoute,
  postAdminConfigStreamtitleRoute,
  postAdminConfigTagsRoute,
  postAdminConfigVideoCodecRoute,
  postAdminConfigVideoservingendpointRoute,
  postAdminConfigVideoStreamlatencylevelRoute,
  postAdminConfigVideoStreamoutputvariantsRoute,
  postAdminConfigWebserveripRoute,
  postAdminConfigWebserverportRoute,
  postAdminConfigWelcomemessageRoute,
  postAdminDisconnectRoute,
  postAdminEmojiDeleteRoute,
  postAdminEmojiUploadRoute,
  postAdminFederationSendRoute,
  postAdminFederationServersRoute,
  postAdminFollowersApproveRoute,
  postAdminFollowersRemoveRoute,
  postAdminUsersDeleteRoute,
  postAdminWebhooksCreateRoute,
  postAdminWebhooksDeleteRoute,
  postAdminYpResetRoute,
  putAdminFederationServersIdReorderRoute,
} from '../routes'

export const getAdminStatusRouteHandler: RouteHandler<typeof getAdminStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminStatusRouteHandler: RouteHandler<typeof optionsAdminStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminDisconnectRouteHandler: RouteHandler<
  typeof postAdminDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminDisconnectRouteHandler: RouteHandler<
  typeof optionsAdminDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServerconfigRouteHandler: RouteHandler<
  typeof getAdminServerconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminServerconfigRouteHandler: RouteHandler<
  typeof optionsAdminServerconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewersOverTimeRouteHandler: RouteHandler<
  typeof getAdminViewersOverTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminViewersOverTimeRouteHandler: RouteHandler<
  typeof optionsAdminViewersOverTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewersRouteHandler: RouteHandler<typeof getAdminViewersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminViewersRouteHandler: RouteHandler<
  typeof optionsAdminViewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewersPlaybackRouteHandler: RouteHandler<
  typeof getAdminViewersPlaybackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminViewersPlaybackRouteHandler: RouteHandler<
  typeof optionsAdminViewersPlaybackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminHardwarestatsRouteHandler: RouteHandler<
  typeof getAdminHardwarestatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminHardwarestatsRouteHandler: RouteHandler<
  typeof optionsAdminHardwarestatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminChatClientsRouteHandler: RouteHandler<
  typeof getAdminChatClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatClientsRouteHandler: RouteHandler<
  typeof optionsAdminChatClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminChatMessagesRouteHandler: RouteHandler<
  typeof getAdminChatMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatMessagesRouteHandler: RouteHandler<
  typeof optionsAdminChatMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminChatMessagevisibilityRouteHandler: RouteHandler<
  typeof postAdminChatMessagevisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatMessagevisibilityRouteHandler: RouteHandler<
  typeof optionsAdminChatMessagevisibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminChatUsersSetenabledRouteHandler: RouteHandler<
  typeof postAdminChatUsersSetenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatUsersSetenabledRouteHandler: RouteHandler<
  typeof optionsAdminChatUsersSetenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminChatUsersDisabledRouteHandler: RouteHandler<
  typeof getAdminChatUsersDisabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatUsersDisabledRouteHandler: RouteHandler<
  typeof optionsAdminChatUsersDisabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminChatUsersIpbansCreateRouteHandler: RouteHandler<
  typeof postAdminChatUsersIpbansCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatUsersIpbansCreateRouteHandler: RouteHandler<
  typeof optionsAdminChatUsersIpbansCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminChatUsersIpbansRemoveRouteHandler: RouteHandler<
  typeof postAdminChatUsersIpbansRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatUsersIpbansRemoveRouteHandler: RouteHandler<
  typeof optionsAdminChatUsersIpbansRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminChatUsersIpbansRouteHandler: RouteHandler<
  typeof getAdminChatUsersIpbansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatUsersIpbansRouteHandler: RouteHandler<
  typeof optionsAdminChatUsersIpbansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminChatUsersSetmoderatorRouteHandler: RouteHandler<
  typeof postAdminChatUsersSetmoderatorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatUsersSetmoderatorRouteHandler: RouteHandler<
  typeof optionsAdminChatUsersSetmoderatorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminChatUsersModeratorsRouteHandler: RouteHandler<
  typeof getAdminChatUsersModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminChatUsersModeratorsRouteHandler: RouteHandler<
  typeof optionsAdminChatUsersModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminUsersRouteHandler: RouteHandler<typeof getAdminUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminUsersRouteHandler: RouteHandler<typeof optionsAdminUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminUsersDeleteRouteHandler: RouteHandler<
  typeof postAdminUsersDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminUsersDeleteRouteHandler: RouteHandler<
  typeof optionsAdminUsersDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminLogsRouteHandler: RouteHandler<typeof getAdminLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminLogsRouteHandler: RouteHandler<typeof optionsAdminLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminLogsWarningsRouteHandler: RouteHandler<
  typeof getAdminLogsWarningsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminLogsWarningsRouteHandler: RouteHandler<
  typeof optionsAdminLogsWarningsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFollowersRouteHandler: RouteHandler<typeof getAdminFollowersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsAdminFollowersRouteHandler: RouteHandler<
  typeof optionsAdminFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFollowersPendingRouteHandler: RouteHandler<
  typeof getAdminFollowersPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFollowersPendingRouteHandler: RouteHandler<
  typeof optionsAdminFollowersPendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFollowersBlockedRouteHandler: RouteHandler<
  typeof getAdminFollowersBlockedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFollowersBlockedRouteHandler: RouteHandler<
  typeof optionsAdminFollowersBlockedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFollowersDirectoryRouteHandler: RouteHandler<
  typeof getAdminFollowersDirectoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFollowersDirectoryRouteHandler: RouteHandler<
  typeof optionsAdminFollowersDirectoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFollowersApproveRouteHandler: RouteHandler<
  typeof postAdminFollowersApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFollowersApproveRouteHandler: RouteHandler<
  typeof optionsAdminFollowersApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFollowersRemoveRouteHandler: RouteHandler<
  typeof postAdminFollowersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFollowersRemoveRouteHandler: RouteHandler<
  typeof optionsAdminFollowersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminEmojiUploadRouteHandler: RouteHandler<
  typeof postAdminEmojiUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminEmojiUploadRouteHandler: RouteHandler<
  typeof optionsAdminEmojiUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminEmojiDeleteRouteHandler: RouteHandler<
  typeof postAdminEmojiDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminEmojiDeleteRouteHandler: RouteHandler<
  typeof optionsAdminEmojiDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigAdminpassRouteHandler: RouteHandler<
  typeof postAdminConfigAdminpassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigAdminpassRouteHandler: RouteHandler<
  typeof optionsAdminConfigAdminpassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigStreamkeysRouteHandler: RouteHandler<
  typeof postAdminConfigStreamkeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigStreamkeysRouteHandler: RouteHandler<
  typeof optionsAdminConfigStreamkeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigPagecontentRouteHandler: RouteHandler<
  typeof postAdminConfigPagecontentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigPagecontentRouteHandler: RouteHandler<
  typeof optionsAdminConfigPagecontentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigStreamtitleRouteHandler: RouteHandler<
  typeof postAdminConfigStreamtitleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigStreamtitleRouteHandler: RouteHandler<
  typeof optionsAdminConfigStreamtitleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigNameRouteHandler: RouteHandler<
  typeof postAdminConfigNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigNameRouteHandler: RouteHandler<
  typeof optionsAdminConfigNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigServersummaryRouteHandler: RouteHandler<
  typeof postAdminConfigServersummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigServersummaryRouteHandler: RouteHandler<
  typeof optionsAdminConfigServersummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigOfflinemessageRouteHandler: RouteHandler<
  typeof postAdminConfigOfflinemessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigOfflinemessageRouteHandler: RouteHandler<
  typeof optionsAdminConfigOfflinemessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigWelcomemessageRouteHandler: RouteHandler<
  typeof postAdminConfigWelcomemessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigWelcomemessageRouteHandler: RouteHandler<
  typeof optionsAdminConfigWelcomemessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatDisableRouteHandler: RouteHandler<
  typeof postAdminConfigChatDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatDisableRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatJoinmessagesenabledRouteHandler: RouteHandler<
  typeof postAdminConfigChatJoinmessagesenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatJoinmessagesenabledRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatJoinmessagesenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatEstablishedusermodeRouteHandler: RouteHandler<
  typeof postAdminConfigChatEstablishedusermodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatEstablishedusermodeRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatEstablishedusermodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatForbiddenusernamesRouteHandler: RouteHandler<
  typeof postAdminConfigChatForbiddenusernamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatForbiddenusernamesRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatForbiddenusernamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatSuggestedusernamesRouteHandler: RouteHandler<
  typeof postAdminConfigChatSuggestedusernamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatSuggestedusernamesRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatSuggestedusernamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatSpamprotectionenabledRouteHandler: RouteHandler<
  typeof postAdminConfigChatSpamprotectionenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatSpamprotectionenabledRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatSpamprotectionenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatSlurfilterenabledRouteHandler: RouteHandler<
  typeof postAdminConfigChatSlurfilterenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatSlurfilterenabledRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatSlurfilterenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigChatRequireauthenticationRouteHandler: RouteHandler<
  typeof postAdminConfigChatRequireauthenticationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigChatRequireauthenticationRouteHandler: RouteHandler<
  typeof optionsAdminConfigChatRequireauthenticationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigVideoCodecRouteHandler: RouteHandler<
  typeof postAdminConfigVideoCodecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigVideoCodecRouteHandler: RouteHandler<
  typeof optionsAdminConfigVideoCodecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigVideoStreamlatencylevelRouteHandler: RouteHandler<
  typeof postAdminConfigVideoStreamlatencylevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigVideoStreamlatencylevelRouteHandler: RouteHandler<
  typeof optionsAdminConfigVideoStreamlatencylevelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigVideoStreamoutputvariantsRouteHandler: RouteHandler<
  typeof postAdminConfigVideoStreamoutputvariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigVideoStreamoutputvariantsRouteHandler: RouteHandler<
  typeof optionsAdminConfigVideoStreamoutputvariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigAppearanceRouteHandler: RouteHandler<
  typeof postAdminConfigAppearanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigAppearanceRouteHandler: RouteHandler<
  typeof optionsAdminConfigAppearanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigLogoRouteHandler: RouteHandler<
  typeof postAdminConfigLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigLogoRouteHandler: RouteHandler<
  typeof optionsAdminConfigLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFaviconRouteHandler: RouteHandler<
  typeof postAdminConfigFaviconRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminConfigFaviconRouteHandler: RouteHandler<
  typeof deleteAdminConfigFaviconRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFaviconRouteHandler: RouteHandler<
  typeof optionsAdminConfigFaviconRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigTagsRouteHandler: RouteHandler<
  typeof postAdminConfigTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigTagsRouteHandler: RouteHandler<
  typeof optionsAdminConfigTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFfmpegpathRouteHandler: RouteHandler<
  typeof postAdminConfigFfmpegpathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFfmpegpathRouteHandler: RouteHandler<
  typeof optionsAdminConfigFfmpegpathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigWebserverportRouteHandler: RouteHandler<
  typeof postAdminConfigWebserverportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigWebserverportRouteHandler: RouteHandler<
  typeof optionsAdminConfigWebserverportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigWebserveripRouteHandler: RouteHandler<
  typeof postAdminConfigWebserveripRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigWebserveripRouteHandler: RouteHandler<
  typeof optionsAdminConfigWebserveripRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigRtmpserverportRouteHandler: RouteHandler<
  typeof postAdminConfigRtmpserverportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigRtmpserverportRouteHandler: RouteHandler<
  typeof optionsAdminConfigRtmpserverportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigRtmpserverbindaddressRouteHandler: RouteHandler<
  typeof postAdminConfigRtmpserverbindaddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigRtmpserverbindaddressRouteHandler: RouteHandler<
  typeof optionsAdminConfigRtmpserverbindaddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigSockethostoverrideRouteHandler: RouteHandler<
  typeof postAdminConfigSockethostoverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigSockethostoverrideRouteHandler: RouteHandler<
  typeof optionsAdminConfigSockethostoverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigVideoservingendpointRouteHandler: RouteHandler<
  typeof postAdminConfigVideoservingendpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigVideoservingendpointRouteHandler: RouteHandler<
  typeof optionsAdminConfigVideoservingendpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigNsfwRouteHandler: RouteHandler<
  typeof postAdminConfigNsfwRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigNsfwRouteHandler: RouteHandler<
  typeof optionsAdminConfigNsfwRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigAutoplayRouteHandler: RouteHandler<
  typeof postAdminConfigAutoplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigAutoplayRouteHandler: RouteHandler<
  typeof optionsAdminConfigAutoplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigDirectoryenabledRouteHandler: RouteHandler<
  typeof postAdminConfigDirectoryenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigDirectoryenabledRouteHandler: RouteHandler<
  typeof optionsAdminConfigDirectoryenabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigSocialhandlesRouteHandler: RouteHandler<
  typeof postAdminConfigSocialhandlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigSocialhandlesRouteHandler: RouteHandler<
  typeof optionsAdminConfigSocialhandlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigS3RouteHandler: RouteHandler<typeof postAdminConfigS3Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigS3RouteHandler: RouteHandler<
  typeof optionsAdminConfigS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigServerurlRouteHandler: RouteHandler<
  typeof postAdminConfigServerurlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigServerurlRouteHandler: RouteHandler<
  typeof optionsAdminConfigServerurlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigExternalactionsRouteHandler: RouteHandler<
  typeof postAdminConfigExternalactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigExternalactionsRouteHandler: RouteHandler<
  typeof optionsAdminConfigExternalactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigCustomstylesRouteHandler: RouteHandler<
  typeof postAdminConfigCustomstylesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigCustomstylesRouteHandler: RouteHandler<
  typeof optionsAdminConfigCustomstylesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigCustomjavascriptRouteHandler: RouteHandler<
  typeof postAdminConfigCustomjavascriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigCustomjavascriptRouteHandler: RouteHandler<
  typeof optionsAdminConfigCustomjavascriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigHideviewercountRouteHandler: RouteHandler<
  typeof postAdminConfigHideviewercountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigHideviewercountRouteHandler: RouteHandler<
  typeof optionsAdminConfigHideviewercountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigDisablesearchindexingRouteHandler: RouteHandler<
  typeof postAdminConfigDisablesearchindexingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigDisablesearchindexingRouteHandler: RouteHandler<
  typeof optionsAdminConfigDisablesearchindexingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationEnableRouteHandler: RouteHandler<
  typeof postAdminConfigFederationEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationEnableRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationPrivateRouteHandler: RouteHandler<
  typeof postAdminConfigFederationPrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationPrivateRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationPrivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationShowengagementRouteHandler: RouteHandler<
  typeof postAdminConfigFederationShowengagementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationShowengagementRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationShowengagementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationEnablequotesRouteHandler: RouteHandler<
  typeof postAdminConfigFederationEnablequotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationEnablequotesRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationEnablequotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationHidefollowersRouteHandler: RouteHandler<
  typeof postAdminConfigFederationHidefollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationHidefollowersRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationHidefollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationUsernameRouteHandler: RouteHandler<
  typeof postAdminConfigFederationUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationUsernameRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationLivemessageRouteHandler: RouteHandler<
  typeof postAdminConfigFederationLivemessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationLivemessageRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationLivemessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigFederationBlockdomainsRouteHandler: RouteHandler<
  typeof postAdminConfigFederationBlockdomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigFederationBlockdomainsRouteHandler: RouteHandler<
  typeof optionsAdminConfigFederationBlockdomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFederationServersRouteHandler: RouteHandler<
  typeof getAdminFederationServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFederationServersRouteHandler: RouteHandler<
  typeof postAdminFederationServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFederationServersRouteHandler: RouteHandler<
  typeof optionsAdminFederationServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminFederationServersIdRouteHandler: RouteHandler<
  typeof deleteAdminFederationServersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFederationServersIdRouteHandler: RouteHandler<
  typeof optionsAdminFederationServersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminFederationServersIdReorderRouteHandler: RouteHandler<
  typeof putAdminFederationServersIdReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFederationServersIdReorderRouteHandler: RouteHandler<
  typeof optionsAdminFederationServersIdReorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFederationFeatureRequestsRouteHandler: RouteHandler<
  typeof getAdminFederationFeatureRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigNotificationsDiscordRouteHandler: RouteHandler<
  typeof postAdminConfigNotificationsDiscordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigNotificationsDiscordRouteHandler: RouteHandler<
  typeof optionsAdminConfigNotificationsDiscordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigNotificationsBrowserRouteHandler: RouteHandler<
  typeof postAdminConfigNotificationsBrowserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminConfigNotificationsBrowserRouteHandler: RouteHandler<
  typeof optionsAdminConfigNotificationsBrowserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminWebhooksRouteHandler: RouteHandler<typeof getAdminWebhooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsAdminWebhooksRouteHandler: RouteHandler<
  typeof optionsAdminWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminWebhooksDeleteRouteHandler: RouteHandler<
  typeof postAdminWebhooksDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminWebhooksDeleteRouteHandler: RouteHandler<
  typeof optionsAdminWebhooksDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminWebhooksCreateRouteHandler: RouteHandler<
  typeof postAdminWebhooksCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminWebhooksCreateRouteHandler: RouteHandler<
  typeof optionsAdminWebhooksCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminAccesstokensRouteHandler: RouteHandler<
  typeof getAdminAccesstokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminAccesstokensRouteHandler: RouteHandler<
  typeof optionsAdminAccesstokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminAccesstokensDeleteRouteHandler: RouteHandler<
  typeof postAdminAccesstokensDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminAccesstokensDeleteRouteHandler: RouteHandler<
  typeof optionsAdminAccesstokensDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminAccesstokensCreateRouteHandler: RouteHandler<
  typeof postAdminAccesstokensCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminAccesstokensCreateRouteHandler: RouteHandler<
  typeof optionsAdminAccesstokensCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminYpResetRouteHandler: RouteHandler<typeof postAdminYpResetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsAdminYpResetRouteHandler: RouteHandler<
  typeof optionsAdminYpResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminMetricsVideoRouteHandler: RouteHandler<
  typeof getAdminMetricsVideoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminMetricsVideoRouteHandler: RouteHandler<
  typeof optionsAdminMetricsVideoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFederationSendRouteHandler: RouteHandler<
  typeof postAdminFederationSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFederationSendRouteHandler: RouteHandler<
  typeof optionsAdminFederationSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFederationActionsRouteHandler: RouteHandler<
  typeof getAdminFederationActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAdminFederationActionsRouteHandler: RouteHandler<
  typeof optionsAdminFederationActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
