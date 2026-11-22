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
  getAuthIndieauthCallbackRoute,
  getAuthProviderIndieauthRoute,
  getChatRoute,
  getConfigRoute,
  getEmojiRoute,
  getFederationServersRoute,
  getFollowersRoute,
  getMetricsCmcdRoute,
  getPingRoute,
  getSocialplatformsRoute,
  getStatusRoute,
  getVideoVariantsRoute,
  getYpRoute,
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
  postAdminConfigNotificationsBrowserRoute,
  postAdminConfigNotificationsDiscordRoute,
  postAdminConfigNsfwRoute,
  postAdminConfigPagecontentRoute,
  postAdminConfigRtmpserverbindaddressRoute,
  postAdminConfigRtmpserverportRoute,
  postAdminConfigS3Route,
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
  postAuthFediverseRoute,
  postAuthFediverseVerifyRoute,
  postAuthIndieauthRoute,
  postAuthProviderIndieauthRoute,
  postChatMessagevisibilityRoute,
  postChatRegisterRoute,
  postChatUsersSetenabledRoute,
  postMetricsCmcdRoute,
  postMetricsPlaybackRoute,
  postNotificationsRegisterRoute,
  postRemotefollowRoute,
  putAdminFederationServersIdReorderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalHandler = app
  .openapi(getStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUsersSetenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSocialplatformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideoVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemotefollowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetricsCmcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsCmcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetricsPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminServerconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewersOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewersPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminHardwarestatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersSetenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatUsersDisabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersIpbansCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersIpbansRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatUsersIpbansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminChatUsersSetmoderatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminChatUsersModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLogsWarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersBlockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFollowersDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFollowersApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFollowersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEmojiUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminEmojiDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigAdminpassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigStreamkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigPagecontentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigWelcomemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatJoinmessagesenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatEstablishedusermodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatForbiddenusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatSuggestedusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatSpamprotectionenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatSlurfilterenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigChatRequireauthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoCodecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoStreamlatencylevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoStreamoutputvariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminConfigFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFfmpegpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigWebserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigWebserveripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigRtmpserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigRtmpserverbindaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigSockethostoverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigVideoservingendpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNsfwRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigAutoplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigDirectoryenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigSocialhandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigServerurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigExternalactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigCustomstylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigCustomjavascriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigHideviewercountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigDisablesearchindexingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationShowengagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationEnablequotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationHidefollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationLivemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigFederationBlockdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFederationServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFederationServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFederationServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminFederationServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminFederationServersIdReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFederationFeatureRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNotificationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNotificationsBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWebhooksDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWebhooksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminAccesstokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminAccesstokensDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminAccesstokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminYpResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMetricsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFederationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFederationActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthIndieauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthIndieauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthProviderIndieauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthProviderIndieauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthFediverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthFediverseVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
