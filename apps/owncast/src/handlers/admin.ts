import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServerconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminServerconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewersOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminViewersOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewersPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminViewersPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminHardwarestatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminHardwarestatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersSetenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersSetenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatUsersDisabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersDisabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersIpbansCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersIpbansCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersIpbansRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersIpbansRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatUsersIpbansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersIpbansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersSetmoderatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersSetmoderatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatUsersModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminUsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLogsWarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminLogsWarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersBlockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersBlockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFollowersApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFollowersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEmojiUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminEmojiUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEmojiDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminEmojiDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigAdminpassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigAdminpassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigStreamkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigStreamkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigPagecontentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigPagecontentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigServersummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigServersummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigOfflinemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigOfflinemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigWelcomemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigWelcomemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatJoinmessagesenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatJoinmessagesenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatEstablishedusermodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatEstablishedusermodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatForbiddenusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatForbiddenusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatSuggestedusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatSuggestedusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatSpamprotectionenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatSpamprotectionenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatSlurfilterenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatSlurfilterenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatRequireauthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatRequireauthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoCodecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoCodecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoStreamlatencylevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoStreamlatencylevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoStreamoutputvariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoStreamoutputvariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminConfigFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFfmpegpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFfmpegpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigWebserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigWebserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigWebserveripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigWebserveripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigRtmpserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigRtmpserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigRtmpserverbindaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigRtmpserverbindaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigSockethostoverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigSockethostoverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoservingendpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoservingendpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNsfwRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNsfwRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigAutoplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigAutoplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigDirectoryenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigDirectoryenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigSocialhandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigSocialhandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigServerurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigServerurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigExternalactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigExternalactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigCustomstylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigCustomstylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigCustomjavascriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigCustomjavascriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigHideviewercountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigHideviewercountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigDisablesearchindexingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigDisablesearchindexingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationShowengagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationShowengagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationEnablequotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationEnablequotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationHidefollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationHidefollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationLivemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationLivemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationBlockdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationBlockdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFederationServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFederationServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminFederationServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminFederationServersIdReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationServersIdReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFederationFeatureRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNotificationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNotificationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNotificationsBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNotificationsBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWebhooksDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminWebhooksDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWebhooksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminWebhooksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminAccesstokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminAccesstokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminAccesstokensDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminAccesstokensDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminAccesstokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminAccesstokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminYpResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminYpResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMetricsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminMetricsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFederationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFederationActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
