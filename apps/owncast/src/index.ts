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
  getIntegrationsChatRoute,
  getIntegrationsClientsRoute,
  getIntegrationsModerationChatUserUserIdRoute,
  getIntegrationsStatusRoute,
  getMetricsCmcdRoute,
  getModerationChatUserUserIdRoute,
  getPingRoute,
  getSocialplatformsRoute,
  getStatusRoute,
  getVideoVariantsRoute,
  getYpRoute,
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
  optionsChatRegisterRoute,
  optionsIntegrationsChatActionRoute,
  optionsIntegrationsChatMessagevisibilityRoute,
  optionsIntegrationsChatRoute,
  optionsIntegrationsChatSendRoute,
  optionsIntegrationsChatSystemClientClientIdRoute,
  optionsIntegrationsChatSystemRoute,
  optionsIntegrationsChatUserRoute,
  optionsIntegrationsClientsRoute,
  optionsIntegrationsStreamtitleRoute,
  optionsMetricsCmcdRoute,
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
  postAuthFediverseRoute,
  postAuthFediverseVerifyRoute,
  postAuthIndieauthRoute,
  postAuthProviderIndieauthRoute,
  postChatMessagevisibilityRoute,
  postChatRegisterRoute,
  postChatUsersSetenabledRoute,
  postIntegrationsChatActionRoute,
  postIntegrationsChatMessagevisibilityRoute,
  postIntegrationsChatSendRoute,
  postIntegrationsChatSystemClientClientIdRoute,
  postIntegrationsChatSystemRoute,
  postIntegrationsChatUserRoute,
  postIntegrationsStreamtitleRoute,
  postMetricsCmcdRoute,
  postMetricsPlaybackRoute,
  postNotificationsRegisterRoute,
  postRemotefollowRoute,
  putAdminFederationServersIdReorderRoute,
} from './routes'
import {
  deleteAdminConfigFaviconRouteHandler,
  deleteAdminFederationServersIdRouteHandler,
  getAdminAccesstokensRouteHandler,
  getAdminChatClientsRouteHandler,
  getAdminChatMessagesRouteHandler,
  getAdminChatUsersDisabledRouteHandler,
  getAdminChatUsersIpbansRouteHandler,
  getAdminChatUsersModeratorsRouteHandler,
  getAdminFederationActionsRouteHandler,
  getAdminFederationFeatureRequestsRouteHandler,
  getAdminFederationServersRouteHandler,
  getAdminFollowersBlockedRouteHandler,
  getAdminFollowersDirectoryRouteHandler,
  getAdminFollowersPendingRouteHandler,
  getAdminFollowersRouteHandler,
  getAdminHardwarestatsRouteHandler,
  getAdminLogsRouteHandler,
  getAdminLogsWarningsRouteHandler,
  getAdminMetricsVideoRouteHandler,
  getAdminServerconfigRouteHandler,
  getAdminStatusRouteHandler,
  getAdminUsersRouteHandler,
  getAdminViewersOverTimeRouteHandler,
  getAdminViewersPlaybackRouteHandler,
  getAdminViewersRouteHandler,
  getAdminWebhooksRouteHandler,
  getAuthIndieauthCallbackRouteHandler,
  getAuthProviderIndieauthRouteHandler,
  getChatRouteHandler,
  getConfigRouteHandler,
  getEmojiRouteHandler,
  getFederationServersRouteHandler,
  getFollowersRouteHandler,
  getIntegrationsChatRouteHandler,
  getIntegrationsClientsRouteHandler,
  getIntegrationsModerationChatUserUserIdRouteHandler,
  getIntegrationsStatusRouteHandler,
  getMetricsCmcdRouteHandler,
  getModerationChatUserUserIdRouteHandler,
  getPingRouteHandler,
  getSocialplatformsRouteHandler,
  getStatusRouteHandler,
  getVideoVariantsRouteHandler,
  getYpRouteHandler,
  optionsAdminAccesstokensCreateRouteHandler,
  optionsAdminAccesstokensDeleteRouteHandler,
  optionsAdminAccesstokensRouteHandler,
  optionsAdminChatClientsRouteHandler,
  optionsAdminChatMessagesRouteHandler,
  optionsAdminChatMessagevisibilityRouteHandler,
  optionsAdminChatUsersDisabledRouteHandler,
  optionsAdminChatUsersIpbansCreateRouteHandler,
  optionsAdminChatUsersIpbansRemoveRouteHandler,
  optionsAdminChatUsersIpbansRouteHandler,
  optionsAdminChatUsersModeratorsRouteHandler,
  optionsAdminChatUsersSetenabledRouteHandler,
  optionsAdminChatUsersSetmoderatorRouteHandler,
  optionsAdminConfigAdminpassRouteHandler,
  optionsAdminConfigAppearanceRouteHandler,
  optionsAdminConfigAutoplayRouteHandler,
  optionsAdminConfigChatDisableRouteHandler,
  optionsAdminConfigChatEstablishedusermodeRouteHandler,
  optionsAdminConfigChatForbiddenusernamesRouteHandler,
  optionsAdminConfigChatJoinmessagesenabledRouteHandler,
  optionsAdminConfigChatRequireauthenticationRouteHandler,
  optionsAdminConfigChatSlurfilterenabledRouteHandler,
  optionsAdminConfigChatSpamprotectionenabledRouteHandler,
  optionsAdminConfigChatSuggestedusernamesRouteHandler,
  optionsAdminConfigCustomjavascriptRouteHandler,
  optionsAdminConfigCustomstylesRouteHandler,
  optionsAdminConfigDirectoryenabledRouteHandler,
  optionsAdminConfigDisablesearchindexingRouteHandler,
  optionsAdminConfigExternalactionsRouteHandler,
  optionsAdminConfigFaviconRouteHandler,
  optionsAdminConfigFederationBlockdomainsRouteHandler,
  optionsAdminConfigFederationEnablequotesRouteHandler,
  optionsAdminConfigFederationEnableRouteHandler,
  optionsAdminConfigFederationHidefollowersRouteHandler,
  optionsAdminConfigFederationLivemessageRouteHandler,
  optionsAdminConfigFederationPrivateRouteHandler,
  optionsAdminConfigFederationShowengagementRouteHandler,
  optionsAdminConfigFederationUsernameRouteHandler,
  optionsAdminConfigFfmpegpathRouteHandler,
  optionsAdminConfigHideviewercountRouteHandler,
  optionsAdminConfigLogoRouteHandler,
  optionsAdminConfigNameRouteHandler,
  optionsAdminConfigNotificationsBrowserRouteHandler,
  optionsAdminConfigNotificationsDiscordRouteHandler,
  optionsAdminConfigNsfwRouteHandler,
  optionsAdminConfigOfflinemessageRouteHandler,
  optionsAdminConfigPagecontentRouteHandler,
  optionsAdminConfigRtmpserverbindaddressRouteHandler,
  optionsAdminConfigRtmpserverportRouteHandler,
  optionsAdminConfigS3RouteHandler,
  optionsAdminConfigServersummaryRouteHandler,
  optionsAdminConfigServerurlRouteHandler,
  optionsAdminConfigSocialhandlesRouteHandler,
  optionsAdminConfigSockethostoverrideRouteHandler,
  optionsAdminConfigStreamkeysRouteHandler,
  optionsAdminConfigStreamtitleRouteHandler,
  optionsAdminConfigTagsRouteHandler,
  optionsAdminConfigVideoCodecRouteHandler,
  optionsAdminConfigVideoservingendpointRouteHandler,
  optionsAdminConfigVideoStreamlatencylevelRouteHandler,
  optionsAdminConfigVideoStreamoutputvariantsRouteHandler,
  optionsAdminConfigWebserveripRouteHandler,
  optionsAdminConfigWebserverportRouteHandler,
  optionsAdminConfigWelcomemessageRouteHandler,
  optionsAdminDisconnectRouteHandler,
  optionsAdminEmojiDeleteRouteHandler,
  optionsAdminEmojiUploadRouteHandler,
  optionsAdminFederationActionsRouteHandler,
  optionsAdminFederationSendRouteHandler,
  optionsAdminFederationServersIdReorderRouteHandler,
  optionsAdminFederationServersIdRouteHandler,
  optionsAdminFederationServersRouteHandler,
  optionsAdminFollowersApproveRouteHandler,
  optionsAdminFollowersBlockedRouteHandler,
  optionsAdminFollowersDirectoryRouteHandler,
  optionsAdminFollowersPendingRouteHandler,
  optionsAdminFollowersRemoveRouteHandler,
  optionsAdminFollowersRouteHandler,
  optionsAdminHardwarestatsRouteHandler,
  optionsAdminLogsRouteHandler,
  optionsAdminLogsWarningsRouteHandler,
  optionsAdminMetricsVideoRouteHandler,
  optionsAdminServerconfigRouteHandler,
  optionsAdminStatusRouteHandler,
  optionsAdminUsersDeleteRouteHandler,
  optionsAdminUsersRouteHandler,
  optionsAdminViewersOverTimeRouteHandler,
  optionsAdminViewersPlaybackRouteHandler,
  optionsAdminViewersRouteHandler,
  optionsAdminWebhooksCreateRouteHandler,
  optionsAdminWebhooksDeleteRouteHandler,
  optionsAdminWebhooksRouteHandler,
  optionsAdminYpResetRouteHandler,
  optionsChatRegisterRouteHandler,
  optionsIntegrationsChatActionRouteHandler,
  optionsIntegrationsChatMessagevisibilityRouteHandler,
  optionsIntegrationsChatRouteHandler,
  optionsIntegrationsChatSendRouteHandler,
  optionsIntegrationsChatSystemClientClientIdRouteHandler,
  optionsIntegrationsChatSystemRouteHandler,
  optionsIntegrationsChatUserRouteHandler,
  optionsIntegrationsClientsRouteHandler,
  optionsIntegrationsStreamtitleRouteHandler,
  optionsMetricsCmcdRouteHandler,
  postAdminAccesstokensCreateRouteHandler,
  postAdminAccesstokensDeleteRouteHandler,
  postAdminChatMessagevisibilityRouteHandler,
  postAdminChatUsersIpbansCreateRouteHandler,
  postAdminChatUsersIpbansRemoveRouteHandler,
  postAdminChatUsersSetenabledRouteHandler,
  postAdminChatUsersSetmoderatorRouteHandler,
  postAdminConfigAdminpassRouteHandler,
  postAdminConfigAppearanceRouteHandler,
  postAdminConfigAutoplayRouteHandler,
  postAdminConfigChatDisableRouteHandler,
  postAdminConfigChatEstablishedusermodeRouteHandler,
  postAdminConfigChatForbiddenusernamesRouteHandler,
  postAdminConfigChatJoinmessagesenabledRouteHandler,
  postAdminConfigChatRequireauthenticationRouteHandler,
  postAdminConfigChatSlurfilterenabledRouteHandler,
  postAdminConfigChatSpamprotectionenabledRouteHandler,
  postAdminConfigChatSuggestedusernamesRouteHandler,
  postAdminConfigCustomjavascriptRouteHandler,
  postAdminConfigCustomstylesRouteHandler,
  postAdminConfigDirectoryenabledRouteHandler,
  postAdminConfigDisablesearchindexingRouteHandler,
  postAdminConfigExternalactionsRouteHandler,
  postAdminConfigFaviconRouteHandler,
  postAdminConfigFederationBlockdomainsRouteHandler,
  postAdminConfigFederationEnablequotesRouteHandler,
  postAdminConfigFederationEnableRouteHandler,
  postAdminConfigFederationHidefollowersRouteHandler,
  postAdminConfigFederationLivemessageRouteHandler,
  postAdminConfigFederationPrivateRouteHandler,
  postAdminConfigFederationShowengagementRouteHandler,
  postAdminConfigFederationUsernameRouteHandler,
  postAdminConfigFfmpegpathRouteHandler,
  postAdminConfigHideviewercountRouteHandler,
  postAdminConfigLogoRouteHandler,
  postAdminConfigNameRouteHandler,
  postAdminConfigNotificationsBrowserRouteHandler,
  postAdminConfigNotificationsDiscordRouteHandler,
  postAdminConfigNsfwRouteHandler,
  postAdminConfigOfflinemessageRouteHandler,
  postAdminConfigPagecontentRouteHandler,
  postAdminConfigRtmpserverbindaddressRouteHandler,
  postAdminConfigRtmpserverportRouteHandler,
  postAdminConfigS3RouteHandler,
  postAdminConfigServersummaryRouteHandler,
  postAdminConfigServerurlRouteHandler,
  postAdminConfigSocialhandlesRouteHandler,
  postAdminConfigSockethostoverrideRouteHandler,
  postAdminConfigStreamkeysRouteHandler,
  postAdminConfigStreamtitleRouteHandler,
  postAdminConfigTagsRouteHandler,
  postAdminConfigVideoCodecRouteHandler,
  postAdminConfigVideoservingendpointRouteHandler,
  postAdminConfigVideoStreamlatencylevelRouteHandler,
  postAdminConfigVideoStreamoutputvariantsRouteHandler,
  postAdminConfigWebserveripRouteHandler,
  postAdminConfigWebserverportRouteHandler,
  postAdminConfigWelcomemessageRouteHandler,
  postAdminDisconnectRouteHandler,
  postAdminEmojiDeleteRouteHandler,
  postAdminEmojiUploadRouteHandler,
  postAdminFederationSendRouteHandler,
  postAdminFederationServersRouteHandler,
  postAdminFollowersApproveRouteHandler,
  postAdminFollowersRemoveRouteHandler,
  postAdminUsersDeleteRouteHandler,
  postAdminWebhooksCreateRouteHandler,
  postAdminWebhooksDeleteRouteHandler,
  postAdminYpResetRouteHandler,
  postAuthFediverseRouteHandler,
  postAuthFediverseVerifyRouteHandler,
  postAuthIndieauthRouteHandler,
  postAuthProviderIndieauthRouteHandler,
  postChatMessagevisibilityRouteHandler,
  postChatRegisterRouteHandler,
  postChatUsersSetenabledRouteHandler,
  postIntegrationsChatActionRouteHandler,
  postIntegrationsChatMessagevisibilityRouteHandler,
  postIntegrationsChatSendRouteHandler,
  postIntegrationsChatSystemClientClientIdRouteHandler,
  postIntegrationsChatSystemRouteHandler,
  postIntegrationsChatUserRouteHandler,
  postIntegrationsStreamtitleRouteHandler,
  postMetricsCmcdRouteHandler,
  postMetricsPlaybackRouteHandler,
  postNotificationsRegisterRouteHandler,
  postRemotefollowRouteHandler,
  putAdminFederationServersIdReorderRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getEmojiRoute, getEmojiRouteHandler)
  .openapi(getChatRoute, getChatRouteHandler)
  .openapi(postChatRegisterRoute, postChatRegisterRouteHandler)
  .openapi(optionsChatRegisterRoute, optionsChatRegisterRouteHandler)
  .openapi(postChatMessagevisibilityRoute, postChatMessagevisibilityRouteHandler)
  .openapi(postChatUsersSetenabledRoute, postChatUsersSetenabledRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getYpRoute, getYpRouteHandler)
  .openapi(getSocialplatformsRoute, getSocialplatformsRouteHandler)
  .openapi(getVideoVariantsRoute, getVideoVariantsRouteHandler)
  .openapi(getPingRoute, getPingRouteHandler)
  .openapi(postRemotefollowRoute, postRemotefollowRouteHandler)
  .openapi(getFollowersRoute, getFollowersRouteHandler)
  .openapi(postMetricsCmcdRoute, postMetricsCmcdRouteHandler)
  .openapi(getMetricsCmcdRoute, getMetricsCmcdRouteHandler)
  .openapi(optionsMetricsCmcdRoute, optionsMetricsCmcdRouteHandler)
  .openapi(postMetricsPlaybackRoute, postMetricsPlaybackRouteHandler)
  .openapi(postNotificationsRegisterRoute, postNotificationsRegisterRouteHandler)
  .openapi(getAdminStatusRoute, getAdminStatusRouteHandler)
  .openapi(optionsAdminStatusRoute, optionsAdminStatusRouteHandler)
  .openapi(postAdminDisconnectRoute, postAdminDisconnectRouteHandler)
  .openapi(optionsAdminDisconnectRoute, optionsAdminDisconnectRouteHandler)
  .openapi(getAdminServerconfigRoute, getAdminServerconfigRouteHandler)
  .openapi(optionsAdminServerconfigRoute, optionsAdminServerconfigRouteHandler)
  .openapi(getAdminViewersOverTimeRoute, getAdminViewersOverTimeRouteHandler)
  .openapi(optionsAdminViewersOverTimeRoute, optionsAdminViewersOverTimeRouteHandler)
  .openapi(getAdminViewersRoute, getAdminViewersRouteHandler)
  .openapi(optionsAdminViewersRoute, optionsAdminViewersRouteHandler)
  .openapi(getAdminViewersPlaybackRoute, getAdminViewersPlaybackRouteHandler)
  .openapi(optionsAdminViewersPlaybackRoute, optionsAdminViewersPlaybackRouteHandler)
  .openapi(getAdminHardwarestatsRoute, getAdminHardwarestatsRouteHandler)
  .openapi(optionsAdminHardwarestatsRoute, optionsAdminHardwarestatsRouteHandler)
  .openapi(getAdminChatClientsRoute, getAdminChatClientsRouteHandler)
  .openapi(optionsAdminChatClientsRoute, optionsAdminChatClientsRouteHandler)
  .openapi(getAdminChatMessagesRoute, getAdminChatMessagesRouteHandler)
  .openapi(optionsAdminChatMessagesRoute, optionsAdminChatMessagesRouteHandler)
  .openapi(postAdminChatMessagevisibilityRoute, postAdminChatMessagevisibilityRouteHandler)
  .openapi(optionsAdminChatMessagevisibilityRoute, optionsAdminChatMessagevisibilityRouteHandler)
  .openapi(postAdminChatUsersSetenabledRoute, postAdminChatUsersSetenabledRouteHandler)
  .openapi(optionsAdminChatUsersSetenabledRoute, optionsAdminChatUsersSetenabledRouteHandler)
  .openapi(getAdminChatUsersDisabledRoute, getAdminChatUsersDisabledRouteHandler)
  .openapi(optionsAdminChatUsersDisabledRoute, optionsAdminChatUsersDisabledRouteHandler)
  .openapi(postAdminChatUsersIpbansCreateRoute, postAdminChatUsersIpbansCreateRouteHandler)
  .openapi(optionsAdminChatUsersIpbansCreateRoute, optionsAdminChatUsersIpbansCreateRouteHandler)
  .openapi(postAdminChatUsersIpbansRemoveRoute, postAdminChatUsersIpbansRemoveRouteHandler)
  .openapi(optionsAdminChatUsersIpbansRemoveRoute, optionsAdminChatUsersIpbansRemoveRouteHandler)
  .openapi(getAdminChatUsersIpbansRoute, getAdminChatUsersIpbansRouteHandler)
  .openapi(optionsAdminChatUsersIpbansRoute, optionsAdminChatUsersIpbansRouteHandler)
  .openapi(postAdminChatUsersSetmoderatorRoute, postAdminChatUsersSetmoderatorRouteHandler)
  .openapi(optionsAdminChatUsersSetmoderatorRoute, optionsAdminChatUsersSetmoderatorRouteHandler)
  .openapi(getAdminChatUsersModeratorsRoute, getAdminChatUsersModeratorsRouteHandler)
  .openapi(optionsAdminChatUsersModeratorsRoute, optionsAdminChatUsersModeratorsRouteHandler)
  .openapi(getAdminUsersRoute, getAdminUsersRouteHandler)
  .openapi(optionsAdminUsersRoute, optionsAdminUsersRouteHandler)
  .openapi(postAdminUsersDeleteRoute, postAdminUsersDeleteRouteHandler)
  .openapi(optionsAdminUsersDeleteRoute, optionsAdminUsersDeleteRouteHandler)
  .openapi(getAdminLogsRoute, getAdminLogsRouteHandler)
  .openapi(optionsAdminLogsRoute, optionsAdminLogsRouteHandler)
  .openapi(getAdminLogsWarningsRoute, getAdminLogsWarningsRouteHandler)
  .openapi(optionsAdminLogsWarningsRoute, optionsAdminLogsWarningsRouteHandler)
  .openapi(getAdminFollowersRoute, getAdminFollowersRouteHandler)
  .openapi(optionsAdminFollowersRoute, optionsAdminFollowersRouteHandler)
  .openapi(getAdminFollowersPendingRoute, getAdminFollowersPendingRouteHandler)
  .openapi(optionsAdminFollowersPendingRoute, optionsAdminFollowersPendingRouteHandler)
  .openapi(getAdminFollowersBlockedRoute, getAdminFollowersBlockedRouteHandler)
  .openapi(optionsAdminFollowersBlockedRoute, optionsAdminFollowersBlockedRouteHandler)
  .openapi(getAdminFollowersDirectoryRoute, getAdminFollowersDirectoryRouteHandler)
  .openapi(optionsAdminFollowersDirectoryRoute, optionsAdminFollowersDirectoryRouteHandler)
  .openapi(postAdminFollowersApproveRoute, postAdminFollowersApproveRouteHandler)
  .openapi(optionsAdminFollowersApproveRoute, optionsAdminFollowersApproveRouteHandler)
  .openapi(postAdminFollowersRemoveRoute, postAdminFollowersRemoveRouteHandler)
  .openapi(optionsAdminFollowersRemoveRoute, optionsAdminFollowersRemoveRouteHandler)
  .openapi(postAdminEmojiUploadRoute, postAdminEmojiUploadRouteHandler)
  .openapi(optionsAdminEmojiUploadRoute, optionsAdminEmojiUploadRouteHandler)
  .openapi(postAdminEmojiDeleteRoute, postAdminEmojiDeleteRouteHandler)
  .openapi(optionsAdminEmojiDeleteRoute, optionsAdminEmojiDeleteRouteHandler)
  .openapi(postAdminConfigAdminpassRoute, postAdminConfigAdminpassRouteHandler)
  .openapi(optionsAdminConfigAdminpassRoute, optionsAdminConfigAdminpassRouteHandler)
  .openapi(postAdminConfigStreamkeysRoute, postAdminConfigStreamkeysRouteHandler)
  .openapi(optionsAdminConfigStreamkeysRoute, optionsAdminConfigStreamkeysRouteHandler)
  .openapi(postAdminConfigPagecontentRoute, postAdminConfigPagecontentRouteHandler)
  .openapi(optionsAdminConfigPagecontentRoute, optionsAdminConfigPagecontentRouteHandler)
  .openapi(postAdminConfigStreamtitleRoute, postAdminConfigStreamtitleRouteHandler)
  .openapi(optionsAdminConfigStreamtitleRoute, optionsAdminConfigStreamtitleRouteHandler)
  .openapi(postAdminConfigNameRoute, postAdminConfigNameRouteHandler)
  .openapi(optionsAdminConfigNameRoute, optionsAdminConfigNameRouteHandler)
  .openapi(postAdminConfigServersummaryRoute, postAdminConfigServersummaryRouteHandler)
  .openapi(optionsAdminConfigServersummaryRoute, optionsAdminConfigServersummaryRouteHandler)
  .openapi(postAdminConfigOfflinemessageRoute, postAdminConfigOfflinemessageRouteHandler)
  .openapi(optionsAdminConfigOfflinemessageRoute, optionsAdminConfigOfflinemessageRouteHandler)
  .openapi(postAdminConfigWelcomemessageRoute, postAdminConfigWelcomemessageRouteHandler)
  .openapi(optionsAdminConfigWelcomemessageRoute, optionsAdminConfigWelcomemessageRouteHandler)
  .openapi(postAdminConfigChatDisableRoute, postAdminConfigChatDisableRouteHandler)
  .openapi(optionsAdminConfigChatDisableRoute, optionsAdminConfigChatDisableRouteHandler)
  .openapi(
    postAdminConfigChatJoinmessagesenabledRoute,
    postAdminConfigChatJoinmessagesenabledRouteHandler,
  )
  .openapi(
    optionsAdminConfigChatJoinmessagesenabledRoute,
    optionsAdminConfigChatJoinmessagesenabledRouteHandler,
  )
  .openapi(
    postAdminConfigChatEstablishedusermodeRoute,
    postAdminConfigChatEstablishedusermodeRouteHandler,
  )
  .openapi(
    optionsAdminConfigChatEstablishedusermodeRoute,
    optionsAdminConfigChatEstablishedusermodeRouteHandler,
  )
  .openapi(
    postAdminConfigChatForbiddenusernamesRoute,
    postAdminConfigChatForbiddenusernamesRouteHandler,
  )
  .openapi(
    optionsAdminConfigChatForbiddenusernamesRoute,
    optionsAdminConfigChatForbiddenusernamesRouteHandler,
  )
  .openapi(
    postAdminConfigChatSuggestedusernamesRoute,
    postAdminConfigChatSuggestedusernamesRouteHandler,
  )
  .openapi(
    optionsAdminConfigChatSuggestedusernamesRoute,
    optionsAdminConfigChatSuggestedusernamesRouteHandler,
  )
  .openapi(
    postAdminConfigChatSpamprotectionenabledRoute,
    postAdminConfigChatSpamprotectionenabledRouteHandler,
  )
  .openapi(
    optionsAdminConfigChatSpamprotectionenabledRoute,
    optionsAdminConfigChatSpamprotectionenabledRouteHandler,
  )
  .openapi(
    postAdminConfigChatSlurfilterenabledRoute,
    postAdminConfigChatSlurfilterenabledRouteHandler,
  )
  .openapi(
    optionsAdminConfigChatSlurfilterenabledRoute,
    optionsAdminConfigChatSlurfilterenabledRouteHandler,
  )
  .openapi(
    postAdminConfigChatRequireauthenticationRoute,
    postAdminConfigChatRequireauthenticationRouteHandler,
  )
  .openapi(
    optionsAdminConfigChatRequireauthenticationRoute,
    optionsAdminConfigChatRequireauthenticationRouteHandler,
  )
  .openapi(postAdminConfigVideoCodecRoute, postAdminConfigVideoCodecRouteHandler)
  .openapi(optionsAdminConfigVideoCodecRoute, optionsAdminConfigVideoCodecRouteHandler)
  .openapi(
    postAdminConfigVideoStreamlatencylevelRoute,
    postAdminConfigVideoStreamlatencylevelRouteHandler,
  )
  .openapi(
    optionsAdminConfigVideoStreamlatencylevelRoute,
    optionsAdminConfigVideoStreamlatencylevelRouteHandler,
  )
  .openapi(
    postAdminConfigVideoStreamoutputvariantsRoute,
    postAdminConfigVideoStreamoutputvariantsRouteHandler,
  )
  .openapi(
    optionsAdminConfigVideoStreamoutputvariantsRoute,
    optionsAdminConfigVideoStreamoutputvariantsRouteHandler,
  )
  .openapi(postAdminConfigAppearanceRoute, postAdminConfigAppearanceRouteHandler)
  .openapi(optionsAdminConfigAppearanceRoute, optionsAdminConfigAppearanceRouteHandler)
  .openapi(postAdminConfigLogoRoute, postAdminConfigLogoRouteHandler)
  .openapi(optionsAdminConfigLogoRoute, optionsAdminConfigLogoRouteHandler)
  .openapi(postAdminConfigFaviconRoute, postAdminConfigFaviconRouteHandler)
  .openapi(deleteAdminConfigFaviconRoute, deleteAdminConfigFaviconRouteHandler)
  .openapi(optionsAdminConfigFaviconRoute, optionsAdminConfigFaviconRouteHandler)
  .openapi(postAdminConfigTagsRoute, postAdminConfigTagsRouteHandler)
  .openapi(optionsAdminConfigTagsRoute, optionsAdminConfigTagsRouteHandler)
  .openapi(postAdminConfigFfmpegpathRoute, postAdminConfigFfmpegpathRouteHandler)
  .openapi(optionsAdminConfigFfmpegpathRoute, optionsAdminConfigFfmpegpathRouteHandler)
  .openapi(postAdminConfigWebserverportRoute, postAdminConfigWebserverportRouteHandler)
  .openapi(optionsAdminConfigWebserverportRoute, optionsAdminConfigWebserverportRouteHandler)
  .openapi(postAdminConfigWebserveripRoute, postAdminConfigWebserveripRouteHandler)
  .openapi(optionsAdminConfigWebserveripRoute, optionsAdminConfigWebserveripRouteHandler)
  .openapi(postAdminConfigRtmpserverportRoute, postAdminConfigRtmpserverportRouteHandler)
  .openapi(optionsAdminConfigRtmpserverportRoute, optionsAdminConfigRtmpserverportRouteHandler)
  .openapi(
    postAdminConfigRtmpserverbindaddressRoute,
    postAdminConfigRtmpserverbindaddressRouteHandler,
  )
  .openapi(
    optionsAdminConfigRtmpserverbindaddressRoute,
    optionsAdminConfigRtmpserverbindaddressRouteHandler,
  )
  .openapi(postAdminConfigSockethostoverrideRoute, postAdminConfigSockethostoverrideRouteHandler)
  .openapi(
    optionsAdminConfigSockethostoverrideRoute,
    optionsAdminConfigSockethostoverrideRouteHandler,
  )
  .openapi(
    postAdminConfigVideoservingendpointRoute,
    postAdminConfigVideoservingendpointRouteHandler,
  )
  .openapi(
    optionsAdminConfigVideoservingendpointRoute,
    optionsAdminConfigVideoservingendpointRouteHandler,
  )
  .openapi(postAdminConfigNsfwRoute, postAdminConfigNsfwRouteHandler)
  .openapi(optionsAdminConfigNsfwRoute, optionsAdminConfigNsfwRouteHandler)
  .openapi(postAdminConfigAutoplayRoute, postAdminConfigAutoplayRouteHandler)
  .openapi(optionsAdminConfigAutoplayRoute, optionsAdminConfigAutoplayRouteHandler)
  .openapi(postAdminConfigDirectoryenabledRoute, postAdminConfigDirectoryenabledRouteHandler)
  .openapi(optionsAdminConfigDirectoryenabledRoute, optionsAdminConfigDirectoryenabledRouteHandler)
  .openapi(postAdminConfigSocialhandlesRoute, postAdminConfigSocialhandlesRouteHandler)
  .openapi(optionsAdminConfigSocialhandlesRoute, optionsAdminConfigSocialhandlesRouteHandler)
  .openapi(postAdminConfigS3Route, postAdminConfigS3RouteHandler)
  .openapi(optionsAdminConfigS3Route, optionsAdminConfigS3RouteHandler)
  .openapi(postAdminConfigServerurlRoute, postAdminConfigServerurlRouteHandler)
  .openapi(optionsAdminConfigServerurlRoute, optionsAdminConfigServerurlRouteHandler)
  .openapi(postAdminConfigExternalactionsRoute, postAdminConfigExternalactionsRouteHandler)
  .openapi(optionsAdminConfigExternalactionsRoute, optionsAdminConfigExternalactionsRouteHandler)
  .openapi(postAdminConfigCustomstylesRoute, postAdminConfigCustomstylesRouteHandler)
  .openapi(optionsAdminConfigCustomstylesRoute, optionsAdminConfigCustomstylesRouteHandler)
  .openapi(postAdminConfigCustomjavascriptRoute, postAdminConfigCustomjavascriptRouteHandler)
  .openapi(optionsAdminConfigCustomjavascriptRoute, optionsAdminConfigCustomjavascriptRouteHandler)
  .openapi(postAdminConfigHideviewercountRoute, postAdminConfigHideviewercountRouteHandler)
  .openapi(optionsAdminConfigHideviewercountRoute, optionsAdminConfigHideviewercountRouteHandler)
  .openapi(
    postAdminConfigDisablesearchindexingRoute,
    postAdminConfigDisablesearchindexingRouteHandler,
  )
  .openapi(
    optionsAdminConfigDisablesearchindexingRoute,
    optionsAdminConfigDisablesearchindexingRouteHandler,
  )
  .openapi(postAdminConfigFederationEnableRoute, postAdminConfigFederationEnableRouteHandler)
  .openapi(optionsAdminConfigFederationEnableRoute, optionsAdminConfigFederationEnableRouteHandler)
  .openapi(postAdminConfigFederationPrivateRoute, postAdminConfigFederationPrivateRouteHandler)
  .openapi(
    optionsAdminConfigFederationPrivateRoute,
    optionsAdminConfigFederationPrivateRouteHandler,
  )
  .openapi(
    postAdminConfigFederationShowengagementRoute,
    postAdminConfigFederationShowengagementRouteHandler,
  )
  .openapi(
    optionsAdminConfigFederationShowengagementRoute,
    optionsAdminConfigFederationShowengagementRouteHandler,
  )
  .openapi(
    postAdminConfigFederationEnablequotesRoute,
    postAdminConfigFederationEnablequotesRouteHandler,
  )
  .openapi(
    optionsAdminConfigFederationEnablequotesRoute,
    optionsAdminConfigFederationEnablequotesRouteHandler,
  )
  .openapi(
    postAdminConfigFederationHidefollowersRoute,
    postAdminConfigFederationHidefollowersRouteHandler,
  )
  .openapi(
    optionsAdminConfigFederationHidefollowersRoute,
    optionsAdminConfigFederationHidefollowersRouteHandler,
  )
  .openapi(postAdminConfigFederationUsernameRoute, postAdminConfigFederationUsernameRouteHandler)
  .openapi(
    optionsAdminConfigFederationUsernameRoute,
    optionsAdminConfigFederationUsernameRouteHandler,
  )
  .openapi(
    postAdminConfigFederationLivemessageRoute,
    postAdminConfigFederationLivemessageRouteHandler,
  )
  .openapi(
    optionsAdminConfigFederationLivemessageRoute,
    optionsAdminConfigFederationLivemessageRouteHandler,
  )
  .openapi(
    postAdminConfigFederationBlockdomainsRoute,
    postAdminConfigFederationBlockdomainsRouteHandler,
  )
  .openapi(
    optionsAdminConfigFederationBlockdomainsRoute,
    optionsAdminConfigFederationBlockdomainsRouteHandler,
  )
  .openapi(getFederationServersRoute, getFederationServersRouteHandler)
  .openapi(getAdminFederationServersRoute, getAdminFederationServersRouteHandler)
  .openapi(postAdminFederationServersRoute, postAdminFederationServersRouteHandler)
  .openapi(optionsAdminFederationServersRoute, optionsAdminFederationServersRouteHandler)
  .openapi(deleteAdminFederationServersIdRoute, deleteAdminFederationServersIdRouteHandler)
  .openapi(optionsAdminFederationServersIdRoute, optionsAdminFederationServersIdRouteHandler)
  .openapi(putAdminFederationServersIdReorderRoute, putAdminFederationServersIdReorderRouteHandler)
  .openapi(
    optionsAdminFederationServersIdReorderRoute,
    optionsAdminFederationServersIdReorderRouteHandler,
  )
  .openapi(getAdminFederationFeatureRequestsRoute, getAdminFederationFeatureRequestsRouteHandler)
  .openapi(
    postAdminConfigNotificationsDiscordRoute,
    postAdminConfigNotificationsDiscordRouteHandler,
  )
  .openapi(
    optionsAdminConfigNotificationsDiscordRoute,
    optionsAdminConfigNotificationsDiscordRouteHandler,
  )
  .openapi(
    postAdminConfigNotificationsBrowserRoute,
    postAdminConfigNotificationsBrowserRouteHandler,
  )
  .openapi(
    optionsAdminConfigNotificationsBrowserRoute,
    optionsAdminConfigNotificationsBrowserRouteHandler,
  )
  .openapi(getAdminWebhooksRoute, getAdminWebhooksRouteHandler)
  .openapi(optionsAdminWebhooksRoute, optionsAdminWebhooksRouteHandler)
  .openapi(postAdminWebhooksDeleteRoute, postAdminWebhooksDeleteRouteHandler)
  .openapi(optionsAdminWebhooksDeleteRoute, optionsAdminWebhooksDeleteRouteHandler)
  .openapi(postAdminWebhooksCreateRoute, postAdminWebhooksCreateRouteHandler)
  .openapi(optionsAdminWebhooksCreateRoute, optionsAdminWebhooksCreateRouteHandler)
  .openapi(getAdminAccesstokensRoute, getAdminAccesstokensRouteHandler)
  .openapi(optionsAdminAccesstokensRoute, optionsAdminAccesstokensRouteHandler)
  .openapi(postAdminAccesstokensDeleteRoute, postAdminAccesstokensDeleteRouteHandler)
  .openapi(optionsAdminAccesstokensDeleteRoute, optionsAdminAccesstokensDeleteRouteHandler)
  .openapi(postAdminAccesstokensCreateRoute, postAdminAccesstokensCreateRouteHandler)
  .openapi(optionsAdminAccesstokensCreateRoute, optionsAdminAccesstokensCreateRouteHandler)
  .openapi(postAdminYpResetRoute, postAdminYpResetRouteHandler)
  .openapi(optionsAdminYpResetRoute, optionsAdminYpResetRouteHandler)
  .openapi(getAdminMetricsVideoRoute, getAdminMetricsVideoRouteHandler)
  .openapi(optionsAdminMetricsVideoRoute, optionsAdminMetricsVideoRouteHandler)
  .openapi(postAdminFederationSendRoute, postAdminFederationSendRouteHandler)
  .openapi(optionsAdminFederationSendRoute, optionsAdminFederationSendRouteHandler)
  .openapi(getAdminFederationActionsRoute, getAdminFederationActionsRouteHandler)
  .openapi(optionsAdminFederationActionsRoute, optionsAdminFederationActionsRouteHandler)
  .openapi(postIntegrationsChatSystemRoute, postIntegrationsChatSystemRouteHandler)
  .openapi(optionsIntegrationsChatSystemRoute, optionsIntegrationsChatSystemRouteHandler)
  .openapi(
    postIntegrationsChatSystemClientClientIdRoute,
    postIntegrationsChatSystemClientClientIdRouteHandler,
  )
  .openapi(
    optionsIntegrationsChatSystemClientClientIdRoute,
    optionsIntegrationsChatSystemClientClientIdRouteHandler,
  )
  .openapi(postIntegrationsChatUserRoute, postIntegrationsChatUserRouteHandler)
  .openapi(optionsIntegrationsChatUserRoute, optionsIntegrationsChatUserRouteHandler)
  .openapi(postIntegrationsChatSendRoute, postIntegrationsChatSendRouteHandler)
  .openapi(optionsIntegrationsChatSendRoute, optionsIntegrationsChatSendRouteHandler)
  .openapi(postIntegrationsChatActionRoute, postIntegrationsChatActionRouteHandler)
  .openapi(optionsIntegrationsChatActionRoute, optionsIntegrationsChatActionRouteHandler)
  .openapi(
    postIntegrationsChatMessagevisibilityRoute,
    postIntegrationsChatMessagevisibilityRouteHandler,
  )
  .openapi(
    optionsIntegrationsChatMessagevisibilityRoute,
    optionsIntegrationsChatMessagevisibilityRouteHandler,
  )
  .openapi(getIntegrationsStatusRoute, getIntegrationsStatusRouteHandler)
  .openapi(postIntegrationsStreamtitleRoute, postIntegrationsStreamtitleRouteHandler)
  .openapi(optionsIntegrationsStreamtitleRoute, optionsIntegrationsStreamtitleRouteHandler)
  .openapi(getIntegrationsChatRoute, getIntegrationsChatRouteHandler)
  .openapi(optionsIntegrationsChatRoute, optionsIntegrationsChatRouteHandler)
  .openapi(getIntegrationsClientsRoute, getIntegrationsClientsRouteHandler)
  .openapi(optionsIntegrationsClientsRoute, optionsIntegrationsClientsRouteHandler)
  .openapi(
    getIntegrationsModerationChatUserUserIdRoute,
    getIntegrationsModerationChatUserUserIdRouteHandler,
  )
  .openapi(getModerationChatUserUserIdRoute, getModerationChatUserUserIdRouteHandler)
  .openapi(postAuthIndieauthRoute, postAuthIndieauthRouteHandler)
  .openapi(getAuthIndieauthCallbackRoute, getAuthIndieauthCallbackRouteHandler)
  .openapi(getAuthProviderIndieauthRoute, getAuthProviderIndieauthRouteHandler)
  .openapi(postAuthProviderIndieauthRoute, postAuthProviderIndieauthRouteHandler)
  .openapi(postAuthFediverseRoute, postAuthFediverseRouteHandler)
  .openapi(postAuthFediverseVerifyRoute, postAuthFediverseVerifyRouteHandler)

export default app
